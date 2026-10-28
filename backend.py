from __future__ import annotations

from dataclasses import asdict
import hmac
import anyio
from sqlalchemy.exc import SQLAlchemyError
import time
from typing import Annotated, Any

from fastapi import FastAPI, Header, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from auth import PUBLIC_PATHS, VALID_ROLES, authenticate, sign_payload
from config import ALLOWED_ORIGINS, DEMO_PASSWORD, DIST_DIR, PRODUCTION, SENSOR_API_KEY, TOKEN_TTL_SECONDS, authentication_configured
from runtime_state import restaurant_request

from ai_pipeline import CAMERA_INTEGRATION_OPTIONS, PIPELINE, RISK_MODEL
from cv_adapter import CV_ADAPTER
from models import TableState
from multi_camera_brain import CAMERA_BRAIN
from ops_store import (
    audit,
    database_health,
    get_sla_settings,
    get_settings,
    list_connectors,
    materialize_tasks,
    recent_audit,
    save_state,
    set_settings,
    set_task_status,
    task_status_map,
    upsert_connector,
)
from ops_core import OperationEventType, strict_to_simulator_event, validate_event
from pos_kitchen import KITCHEN, OrderStatus
from simulation import get_simulator
import simulation


app = FastAPI(
    title="Smart Restaurant Operating System",
    description="Real-time digital twin, event ingestion, decision engine, and staff guidance API.",
    version="0.2.0",
    docs_url=None if PRODUCTION else "/docs",
    redoc_url=None if PRODUCTION else "/redoc",
    openapi_url=None if PRODUCTION else "/openapi.json",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if DIST_DIR.exists():
    app.mount("/assets", StaticFiles(directory=DIST_DIR / "assets"), name="assets")


class EventRequest(BaseModel):
    event_type: str = Field(
        examples=["entrance_camera", "seated", "order_taken", "food_served", "table_finished", "table_cleaned", "tick"]
    )
    payload: dict[str, Any] = Field(default_factory=dict)


class StrictEventRequest(BaseModel):
    event_type: OperationEventType
    payload: dict[str, Any] = Field(default_factory=dict)
    source: str = "staff"
    confidence: float = 1.0


class TaskActionRequest(BaseModel):
    task_id: str


class SensorWebhookRequest(BaseModel):
    source: str = Field(examples=["axis_people_counter", "opendatacam", "camlytics"])
    payload: dict[str, Any] = Field(default_factory=dict)


class ConnectorRequest(BaseModel):
    id: str | None = None
    provider: str = "axis"
    name: str = "Entrance camera"
    endpoint: str = ""
    enabled: bool = True
    secret: str = ""


class TaskWorkflowRequest(BaseModel):
    task_id: str
    staff_id: str | None = None


class LayoutTableRequest(BaseModel):
    table_id: str
    x: int | None = None
    y: int | None = None
    capacity: int | None = None


class ScenarioRequest(BaseModel):
    scenario: str = Field(examples=["quiet_morning", "lunch_rush", "understaffed_evening", "kitchen_bottleneck", "big_group_arrival", "dirty_table_backlog"])


class OrderRequest(BaseModel):
    table_id: str
    items: list[str] = Field(default_factory=lambda: ["chef special", "water"], min_length=1, max_length=50)


class OrderTransitionRequest(BaseModel):
    order_id: str
    status: OrderStatus


class CVAnalyzeRequest(BaseModel):
    source_url: str
    camera_id: str = "CAM-DEMO"


class VirtualCameraRequest(BaseModel):
    id: str
    name: str
    zone: str = "Dining"
    role: str = "table_occupancy"
    source: str = "Custom video"
    video_url: str
    license: str = "User-provided or public demo video"
    page_url: str = ""
    note: str = "Virtual live camera using a looping real video."


class SLASettingsRequest(BaseModel):
    seat_wait_max_min: int = Field(default=8, ge=1, le=240)
    order_wait_max_min: int = Field(default=7, ge=1, le=240)
    food_wait_max_min: int = Field(default=18, ge=1, le=240)
    dirty_table_max_min: int = Field(default=8, ge=1, le=240)
    critical_task_score: int = Field(default=115, ge=1, le=1000)


class LoginRequest(BaseModel):
    email: str = Field(min_length=3, max_length=254)
    password: str = Field(min_length=1, max_length=256)
    role: str = "manager"


_request_lock = anyio.Lock()


@app.middleware("http")
async def security_middleware(request: Request, call_next):
    path = request.url.path
    static = path.startswith("/assets/") or path == "/favicon.svg"
    public = path in PUBLIC_PATHS or static or (not PRODUCTION and path in {"/docs", "/redoc", "/openapi.json"})
    try:
        if request.method != "OPTIONS" and not public:
            if path == "/sensors/webhook" and SENSOR_API_KEY:
                if not hmac.compare_digest(request.headers.get("x-sensor-key", ""), SENSOR_API_KEY):
                    raise HTTPException(status_code=401, detail="Invalid sensor API key")
            else:
                request.state.user = authenticate(request)
        if path == "/auth/login" and not authentication_configured():
            raise HTTPException(status_code=503, detail="Sign-in is temporarily unavailable.")
        if path in {"/", "/health/db"} or static or request.method == "OPTIONS" or path in {"/docs", "/redoc", "/openapi.json"}:
            response = await call_next(request)
        else:
            # Each request sees the latest committed state, including on a cold worker.
            async with _request_lock:
                async with restaurant_request():
                    response = await call_next(request)
                    if response.status_code >= 400:
                        # The context rolls back all writes from a rejected operation.
                        raise RejectedOperation(response)
    except RejectedOperation as exc:
        response = exc.response
        # Preserve the audit without committing any rejected business changes.
        actor = getattr(request.state, "user", {}).get("role", "auth")
        event = "login_failed" if path == "/auth/login" else "event_rejected"
        try:
            await anyio.to_thread.run_sync(lambda: audit(event, {"path": path, "status": response.status_code}, actor=actor))
        except SQLAlchemyError:
            pass
    except HTTPException as exc:
        response = JSONResponse({"detail": exc.detail}, status_code=exc.status_code)
    except (SQLAlchemyError, ValueError, ImportError):
        response = JSONResponse({"detail": "The data service is temporarily unavailable. Please try again shortly."}, status_code=503)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "camera=(self), microphone=(), geolocation=()"
    if not static:
        response.headers["Cache-Control"] = "no-store"
    if request.url.scheme == "https":
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains; preload"
    return response


class RejectedOperation(Exception):
    def __init__(self, response):
        self.response = response


DEMO_CAMERA_FEEDS: list[dict[str, Any]] = []
LEGACY_DEMO_VIDEO_HOSTS = ("assets.mixkit.co/videos/4385", "assets.mixkit.co/videos/4043", "assets.mixkit.co/videos/15875")


def virtual_camera_feeds() -> list[dict[str, Any]]:
    feeds = get_settings("virtual_camera_feeds", [])
    return [
        feed
        for feed in feeds
        if not any(host in feed.get("video_url", "") for host in LEGACY_DEMO_VIDEO_HOSTS)
    ]


def all_camera_feeds() -> list[dict[str, Any]]:
    return [*DEMO_CAMERA_FEEDS, *virtual_camera_feeds()]


@app.get("/")
def root():
    if DIST_DIR.exists():
        return FileResponse(DIST_DIR / "index.html")
    return {
        "service": "Smart Restaurant Operating System",
        "docs": "/docs",
        "core": "real-time decision engine for restaurant operations",
    }


@app.get("/health/db")
def health_db():
    health = database_health()
    ready = health["ok"] and authentication_configured()
    return JSONResponse({**health, "ok": ready}, status_code=200 if ready else 503)


@app.post("/auth/login")
def login(request: LoginRequest) -> dict:
    role = request.role.strip().lower()
    if role not in VALID_ROLES - {"sensor"}:
        raise HTTPException(status_code=400, detail="Invalid role")
    if not hmac.compare_digest(request.password, DEMO_PASSWORD):
        audit("login_failed", {"email": request.email, "role": role}, actor="auth")
        raise HTTPException(status_code=401, detail="Invalid credentials")
    exp = int(time.time()) + TOKEN_TTL_SECONDS
    token = sign_payload({"email": request.email, "role": role, "exp": exp})
    audit("login_success", {"email": request.email, "role": role}, actor="auth")
    return {"token": token, "expires_at": exp, "user": {"email": request.email, "roleId": role}}


@app.get("/state")
def state() -> dict:
    simulator = get_simulator()
    return asdict(simulator.state)


@app.get("/decision")
def decision() -> dict:
    simulator = get_simulator()
    result = simulator.engine.compute(simulator.state)
    result["prediction"] = RISK_MODEL.predict(simulator.state)
    workflow = materialize_tasks(result["tasks"])
    for task in result["tasks"]:
        task["workflow"] = workflow.get(task["id"], {"status": "NEW", "staff_id": task.get("assigned_staff_id")})
    result["workflow"] = workflow
    return result


@app.post("/events")
def ingest_event(request: EventRequest, x_role: str = Header(default="manager")) -> dict:
    simulator = get_simulator()
    validation = validate_event(simulator.state, request.event_type, request.payload, role=x_role)
    if not validation.ok:
        audit("event_rejected", validation.__dict__, actor=x_role)
        raise HTTPException(status_code=409 if validation.code == "INVALID_TRANSITION" else 400, detail=validation.__dict__)
    result = simulator.ingest_event(strict_to_simulator_event(validation.normalized_type), validation.payload)
    audit("event_ingested", {"event_type": validation.normalized_type, "payload": validation.payload}, actor=x_role)
    save_state(simulator.state)
    return result


@app.post("/events/strict")
def ingest_strict_event(request: StrictEventRequest, x_role: str = Header(default="manager")) -> dict:
    return ingest_event(EventRequest(event_type=request.event_type.value, payload=request.payload), x_role=x_role)


@app.get("/integrations/camera-options")
def camera_options() -> dict:
    return {
        "strategy": "Ingest metadata and events from camera analytics instead of raw video.",
        "recommended_options": CAMERA_INTEGRATION_OPTIONS,
    }


@app.get("/cameras/feeds")
def camera_feeds() -> dict:
    return {
        "truth_note": "No default restaurant stock videos are bundled now. Use device camera, consented venue footage, or paste a better legal source in Camera Feed Studio.",
        "production_path": "For real camera AI, use the device camera, a phone/IP camera through a local CV worker, OpenDataCam, Axis People Counter API, Camlytics webhooks, or send YOLO/ByteTrack metadata to /sensors/webhook.",
        "feeds": all_camera_feeds(),
    }


@app.post("/cameras/virtual")
def save_virtual_camera(request: VirtualCameraRequest) -> dict:
    feed = request.model_dump()
    feed["id"] = feed["id"].strip().upper().replace(" ", "-")[:48] or "CAM-VIRTUAL-01"
    feed["kind"] = "virtual_live_video"
    feeds = [item for item in virtual_camera_feeds() if item.get("id") != feed["id"]]
    feeds.append(feed)
    set_settings("virtual_camera_feeds", feeds)
    audit("virtual_camera_saved", {"id": feed["id"], "zone": feed["zone"], "role": feed["role"]}, actor="manager")
    return {"feed": feed, "feeds": [*DEMO_CAMERA_FEEDS, *feeds]}


@app.post("/cameras/virtual/analyze")
def analyze_virtual_camera(request: VirtualCameraRequest) -> dict:
    simulator = get_simulator()
    result = CV_ADAPTER.analyze(request.video_url, request.id)
    zone = request.zone.strip().lower()
    applied = False
    generated_event: dict[str, Any] | None = None
    if zone in {"entrance", "waiting", "host"}:
        group_size = max(1, min(8, int(result.get("guest_count", result.get("people_count", 2)))))
        validation = validate_event(simulator.state, "group_entered", {"group_size": group_size}, role="sensor")
        generated_event = {"event_type": "group_entered", "group_size": group_size}
        if validation.ok:
            simulator.ingest_event("entrance_camera", validation.payload)
            applied = True
    elif zone in {"dining", "floor", "service"}:
        events = PIPELINE.simulate_camera_batch(simulator.state)
        generated_event = {"event_type": "table_activity_detected", "events": [event.id for event in events]}
    elif zone == "kitchen":
        generated_event = {"event_type": "kitchen_load_estimated", "people_count": result["people_count"]}
    audit(
        "virtual_camera_analyzed",
        {"camera_id": request.id, "zone": request.zone, "people_count": result["people_count"], "applied": applied},
        actor="vision-studio",
    )
    save_state(simulator.state)
    return {
        **result,
        "camera_id": request.id,
        "feed": request.model_dump(),
        "generated_event": generated_event,
        "applied_to_digital_twin": applied,
        "decision": decision(),
    }


@app.post("/cameras/analyze-demo")
def analyze_demo_camera(camera_id: str = "CAM-DINING-01") -> dict:
    simulator = get_simulator()
    events = PIPELINE.simulate_camera_batch(simulator.state)
    simulated_boxes = [
        {"label": "guest", "confidence": 0.91, "x": 18, "y": 26, "w": 13, "h": 26},
        {"label": "guest", "confidence": 0.86, "x": 45, "y": 38, "w": 12, "h": 24},
        {"label": "staff", "confidence": 0.82, "x": 68, "y": 28, "w": 10, "h": 30},
    ]
    if camera_id == "CAM-KITCHEN-01":
        simulated_boxes = [
            {"label": "chef", "confidence": 0.9, "x": 20, "y": 22, "w": 14, "h": 35},
            {"label": "chef", "confidence": 0.84, "x": 54, "y": 25, "w": 12, "h": 32},
            {"label": "ticket_area", "confidence": 0.78, "x": 73, "y": 18, "w": 18, "h": 18},
        ]
    audit("demo_camera_analysis", {"camera_id": camera_id, "events": [event.id for event in events]}, actor="vision-demo")
    return {
        "camera_id": camera_id,
        "mode": "simulated_cv_overlay_on_real_video",
        "detections": simulated_boxes,
        "events": [asdict(event) for event in events],
        "recommendation": RISK_MODEL.predict(simulator.state)["recommendation"],
    }


@app.post("/sensors/simulate")
def simulate_sensors() -> dict:
    simulator = get_simulator()
    events = PIPELINE.simulate_camera_batch(simulator.state)
    applied = []
    for event in events:
        if event.source == "entrance_camera" and event.event_type == "group_entered":
            validation = validate_event(simulator.state, "group_entered", {"group_size": event.payload["group_size"]}, role="sensor")
            if validation.ok:
                simulator.ingest_event("entrance_camera", validation.payload)
                applied.append(event.id)
    decision_result = simulator.engine.compute(simulator.state)
    decision_result["prediction"] = RISK_MODEL.predict(simulator.state)
    audit("sensor_scan", {"events": [event.id for event in events], "applied": applied}, actor="system")
    save_state(simulator.state)
    return {
        "events": [asdict(event) for event in events],
        "applied_event_ids": applied,
        "decision": decision_result,
    }


@app.post("/sensors/webhook")
def sensor_webhook(request: SensorWebhookRequest) -> dict:
    simulator = get_simulator()
    event = PIPELINE.normalize_inbound(request.source, request.payload, simulator.state)
    applied = False
    if event.event_type in {"group_entered", "line_crossed"} and "group_size" in event.payload:
        validation = validate_event(simulator.state, "group_entered", {"group_size": int(event.payload["group_size"])}, role="sensor")
        if validation.ok:
            simulator.ingest_event("entrance_camera", validation.payload)
            applied = True
    audit("sensor_webhook", {"source": request.source, "payload": request.payload, "applied": applied}, actor="sensor")
    save_state(simulator.state)
    return {"normalized_event": asdict(event), "applied_to_digital_twin": applied}


@app.get("/sensors/feed")
def sensor_feed(limit: Annotated[int, Query(ge=1, le=200)] = 50) -> dict:
    return {"events": PIPELINE.recent(limit)}


@app.get("/model/status")
def model_status() -> dict:
    simulator = get_simulator()
    return {
        "status": RISK_MODEL.status(),
        "current_prediction": RISK_MODEL.predict(simulator.state),
        "camera_integrations": CAMERA_INTEGRATION_OPTIONS,
    }


@app.post("/cv/analyze")
def cv_analyze(request: CVAnalyzeRequest) -> dict:
    result = CV_ADAPTER.analyze(request.source_url, request.camera_id)
    audit("cv_analyzed", {"camera_id": request.camera_id, "people_count": result["people_count"]}, actor="cv-adapter")
    return result


@app.get("/vision/brain/status")
def camera_brain_status() -> dict:
    return CAMERA_BRAIN.status()


@app.post("/vision/brain/train")
def camera_brain_train(epochs: Annotated[int, Query(ge=1, le=10)] = 5) -> dict:
    if not all_camera_feeds():
        raise HTTPException(status_code=409, detail="Add a camera feed before training.")
    result = CAMERA_BRAIN.train_from_videos(all_camera_feeds(), epochs=epochs)
    audit("camera_brain_trained", {"epochs": epochs, "samples": result["profile"]["samples_seen"]}, actor="vision-brain")
    return result


@app.post("/vision/brain/analyze-all")
def camera_brain_analyze_all() -> dict:
    result = CAMERA_BRAIN.analyze_all(all_camera_feeds())
    audit("camera_brain_analysis", {"status": result["status"], "people": result["total_people"]}, actor="vision-brain")
    return result


@app.get("/orders")
def orders() -> dict:
    return {"orders": KITCHEN.list_orders(), "summary": KITCHEN.report()}


@app.post("/orders")
def create_order(request: OrderRequest, x_role: str = Header(default="waiter")) -> dict:
    simulator = get_simulator()
    validation = validate_event(simulator.state, "order_created", {"table_id": request.table_id}, role=x_role)
    if not validation.ok:
        raise HTTPException(status_code=409, detail=validation.__dict__)
    table = simulator.state.table_by_id(request.table_id)
    simulator.ingest_event("order_taken", {"table_id": request.table_id})
    ticket = KITCHEN.create_order(request.table_id, table.client_id, request.items)
    KITCHEN.transition(ticket.order_id, OrderStatus.SENT_TO_KITCHEN.value)
    audit("order_created", ticket.as_public(), actor=x_role)
    save_state(simulator.state)
    return {"order": ticket.as_public(), "decision": decision()}


@app.post("/orders/transition")
def transition_order(request: OrderTransitionRequest, x_role: str = Header(default="kitchen")) -> dict:
    if request.order_id not in KITCHEN.orders:
        raise HTTPException(status_code=404, detail="Order not found.")
    ticket = KITCHEN.transition(request.order_id, request.status.value)
    simulator = get_simulator()
    if request.status == OrderStatus.FOOD_READY:
        simulator.ingest_event("food_ready", {"table_id": ticket.table_id})
    elif request.status == OrderStatus.DELIVERED:
        validation = validate_event(simulator.state, "food_served", {"table_id": ticket.table_id}, role="waiter")
        if validation.ok:
            simulator.ingest_event("food_served", {"table_id": ticket.table_id})
    audit("order_transition", ticket.as_public(), actor=x_role)
    save_state(simulator.state)
    return {"order": ticket.as_public(), "decision": decision()}


@app.get("/settings/sla")
def sla_settings() -> dict:
    return {"sla": get_sla_settings()}


@app.post("/settings/sla")
def save_sla_settings(request: SLASettingsRequest) -> dict:
    return {"sla": set_settings("sla", request.model_dump())}


@app.get("/reports/shift")
def shift_report() -> dict:
    simulator = get_simulator()
    metrics = simulator.engine.metrics(simulator.state)
    audit_events = recent_audit(200)
    completed_tasks = [event for event in audit_events if event["event_type"] in {"task_completed", "task_workflow"} and event["payload"].get("status") in {"DONE", None}]
    rejected = [event for event in audit_events if event["event_type"] == "event_rejected"]
    return {
        "metrics": metrics,
        "kitchen": KITCHEN.report(),
        "audit_events": len(audit_events),
        "completed_task_events": len(completed_tasks),
        "rejected_events": len(rejected),
        "summary": [
            f"{metrics['active_clients']} active clients",
            f"{metrics['delayed_tables']} delayed tables",
            f"{KITCHEN.report()['delayed_orders']} delayed kitchen tickets",
            f"{len(rejected)} rejected invalid events",
        ],
    }


@app.post("/model/train-simulated")
def train_simulated(rows: Annotated[int, Query(ge=100, le=5000)] = 900) -> dict:
    return RISK_MODEL.train_on_simulation(rows=rows)


@app.get("/audit")
def audit_log(limit: Annotated[int, Query(ge=1, le=200)] = 80) -> dict:
    return {"events": recent_audit(limit)}


@app.get("/connectors")
def connectors() -> dict:
    return {"connectors": list_connectors(), "options": CAMERA_INTEGRATION_OPTIONS}


@app.post("/connectors")
def save_connector(request: ConnectorRequest) -> dict:
    return {"connector": upsert_connector(request.model_dump())}


@app.post("/connectors/test")
def test_connector(request: ConnectorRequest) -> dict:
    connector = upsert_connector({**request.model_dump(), "last_status": "test event received"})
    simulator = get_simulator()
    event = PIPELINE.normalize_inbound(
        request.provider,
        {"event_type": "group_entered", "group_size": 2, "confidence": 0.94, "connector_id": connector["id"]},
        simulator.state,
    )
    simulator.ingest_event("entrance_camera", {"group_size": 2})
    audit("connector_test", {"connector": connector["id"], "event": asdict(event)}, actor="manager")
    save_state(simulator.state)
    return {"connector": connector, "test_event": asdict(event), "applied_to_digital_twin": True}


@app.get("/tasks/workflow")
def tasks_workflow() -> dict:
    simulator = get_simulator()
    decision_result = simulator.engine.compute(simulator.state)
    workflow = materialize_tasks(decision_result["tasks"])
    tasks = []
    for task in decision_result["tasks"]:
        task["workflow"] = workflow.get(task["id"], {"status": "NEW", "staff_id": task.get("assigned_staff_id")})
        tasks.append(task)
    return {"tasks": tasks}


@app.post("/tasks/accept")
def accept_task(request: TaskWorkflowRequest) -> dict:
    workflow = task_status_map().get(request.task_id)
    if workflow and workflow["status"] in {"IN_PROGRESS", "DONE"}:
        raise HTTPException(status_code=409, detail=f"Task is already {workflow['status']}")
    return set_task_status(request.task_id, "ACCEPTED", request.staff_id)


@app.post("/tasks/start")
def start_task(request: TaskWorkflowRequest) -> dict:
    workflow = task_status_map().get(request.task_id)
    if workflow and workflow["status"] == "DONE":
        raise HTTPException(status_code=409, detail="Task is already DONE")
    return set_task_status(request.task_id, "IN_PROGRESS", request.staff_id)


@app.post("/tasks/complete")
def complete_task(request: TaskWorkflowRequest) -> dict:
    simulator = get_simulator()
    set_task_status(request.task_id, "DONE", request.staff_id)
    result = simulator.apply_task(request.task_id)
    audit("task_completed", {"task_id": request.task_id, "staff_id": request.staff_id}, actor=request.staff_id or "staff")
    save_state(simulator.state)
    return result


@app.post("/layout/table")
def update_table_layout(request: LayoutTableRequest) -> dict:
    simulator = get_simulator()
    table = simulator.state.table_by_id(request.table_id)
    if request.x is not None:
        table.x = max(0, min(simulator.state.layout_width, request.x))
    if request.y is not None:
        table.y = max(0, min(simulator.state.layout_height, request.y))
    if request.capacity is not None:
        table.capacity = max(1, min(12, request.capacity))
    audit("layout_updated", request.model_dump(), actor="manager")
    save_state(simulator.state)
    return {"table": asdict(table)}


@app.get("/staffing/recommendation")
def staffing_recommendation() -> dict:
    simulator = get_simulator()
    decision_result = simulator.engine.compute(simulator.state)
    urgent = [task for task in decision_result["tasks"] if task["priority_level"] in {"HIGH", "CRITICAL"}]
    active = len([table for table in simulator.state.tables if table.state.value != "FREE"])
    current_staff = len(simulator.state.staff)
    recommended = max(2, min(6, round(len(decision_result["tasks"]) / 4 + len(urgent) / 2 + active / 10)))
    return {
        "current_staff": current_staff,
        "recommended_staff": recommended,
        "gap": recommended - current_staff,
        "reason": "Based on open task load, urgent tasks, occupancy, and waiting queue.",
        "action": "Add a runner or host support" if recommended > current_staff else "Current staffing is sufficient",
    }


@app.post("/scenarios/run")
def run_scenario(request: ScenarioRequest) -> dict:
    simulator = get_simulator()
    scenario = request.scenario
    if scenario == "quiet_morning":
        simulator.tick(3)
    elif scenario == "lunch_rush":
        for size in [2, 4, 3, 2, 5, 4]:
            validation = validate_event(simulator.state, "group_entered", {"group_size": size}, role="sensor")
            if validation.ok:
                simulator.ingest_event("entrance_camera", validation.payload)
        simulator.tick(8)
    elif scenario == "understaffed_evening":
        for size in [4, 4, 2, 6, 3, 5, 2]:
            simulator.ingest_event("entrance_camera", {"group_size": size})
        simulator.state.staff = simulator.state.staff[:1]
        simulator.tick(12)
    elif scenario == "kitchen_bottleneck":
        for size in [2, 2, 4, 3]:
            simulator.ingest_event("entrance_camera", {"group_size": size})
        for task in simulator.engine.compute(simulator.state)["tasks"][:4]:
            simulator.apply_task(task["id"])
        simulator.tick(24)
    elif scenario == "big_group_arrival":
        simulator.ingest_event("entrance_camera", {"group_size": 8})
        simulator.ingest_event("entrance_camera", {"group_size": 6})
    elif scenario == "dirty_table_backlog":
        for table in simulator.state.tables[:5]:
            table.state = TableState.NEEDS_CLEANING
            table.client_id = None
            table.state_started_at = simulator.state.current_time
        simulator.ingest_event("entrance_camera", {"group_size": 2})
        simulator.ingest_event("entrance_camera", {"group_size": 4})
    else:
        raise HTTPException(status_code=400, detail=f"Unknown scenario: {scenario}")
    audit("scenario_run", {"scenario": scenario}, actor="manager")
    save_state(simulator.state)
    return decision()


@app.post("/tick")
def tick(minutes: Annotated[float, Query(gt=0, le=60)] = 1.0) -> dict:
    simulator = get_simulator()
    result = simulator.tick(minutes)
    result["prediction"] = RISK_MODEL.predict(simulator.state)
    audit("simulation_tick", {"minutes": minutes}, actor="system")
    save_state(simulator.state)
    return result


@app.post("/tasks/apply")
def apply_task(request: TaskActionRequest) -> dict:
    simulator = get_simulator()
    result = simulator.apply_task(request.task_id)
    set_task_status(request.task_id, "DONE")
    save_state(simulator.state)
    return result


@app.post("/reset")
def reset() -> dict:
    from simulation import RestaurantSimulator

    simulation.SIMULATOR = RestaurantSimulator(seed=8)
    KITCHEN.__init__()
    audit("system_reset", {}, actor="manager")
    save_state(simulation.SIMULATOR.state)
    return {"status": "reset", "state": asdict(simulation.SIMULATOR.state)}


@app.get("/dashboard")
def dashboard_snapshot() -> dict:
    """One consistent snapshot for the UI instead of twelve parallel requests."""
    return {
        "state": state(),
        "decision": decision(),
        "sensorFeed": sensor_feed(),
        "modelStatus": model_status(),
        "connectors": connectors(),
        "audit": audit_log(),
        "staffing": staffing_recommendation(),
        "cameraFeeds": camera_feeds(),
        "cameraBrain": camera_brain_status(),
        "orders": orders(),
        "sla": sla_settings()["sla"],
        "report": shift_report(),
    }


if DIST_DIR.exists():
    @app.get("/{full_path:path}")
    def serve_spa(full_path: str) -> FileResponse:
        candidate = (DIST_DIR / full_path).resolve()
        if candidate.is_relative_to(DIST_DIR.resolve()) and candidate.is_file():
            return FileResponse(candidate)
        return FileResponse(DIST_DIR / "index.html")
