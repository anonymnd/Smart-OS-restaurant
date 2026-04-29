from __future__ import annotations

from dataclasses import asdict
from pathlib import Path
from typing import Any

from fastapi import FastAPI, Header, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from ai_pipeline import CAMERA_INTEGRATION_OPTIONS, PIPELINE, RISK_MODEL
from cv_adapter import CV_ADAPTER
from models import TableState
from multi_camera_brain import CAMERA_BRAIN
from ops_store import (
    audit,
    get_sla_settings,
    list_connectors,
    load_state,
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


BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR / "dist"


app = FastAPI(
    title="Smart Restaurant Operating System",
    description="Real-time digital twin, event ingestion, decision engine, and staff guidance API.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "http://127.0.0.1:8501",
        "http://localhost:8501",
    ],
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
    items: list[str] = Field(default_factory=lambda: ["chef special", "water"])


class OrderTransitionRequest(BaseModel):
    order_id: str
    status: OrderStatus


class CVAnalyzeRequest(BaseModel):
    source_url: str
    camera_id: str = "CAM-DEMO"


class SLASettingsRequest(BaseModel):
    seat_wait_max_min: int = 8
    order_wait_max_min: int = 7
    food_wait_max_min: int = 18
    dirty_table_max_min: int = 8
    critical_task_score: int = 115


class WebSocketHub:
    def __init__(self) -> None:
        self.connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket) -> None:
        await websocket.accept()
        self.connections.append(websocket)

    def disconnect(self, websocket: WebSocket) -> None:
        if websocket in self.connections:
            self.connections.remove(websocket)

    async def broadcast(self, payload: dict[str, Any]) -> None:
        stale = []
        for websocket in self.connections:
            try:
                await websocket.send_json(payload)
            except Exception:
                stale.append(websocket)
        for websocket in stale:
            self.disconnect(websocket)


HUB = WebSocketHub()


DEMO_CAMERA_FEEDS = [
    {
        "id": "CAM-DINING-01",
        "name": "Dining room overhead",
        "zone": "Dining",
        "role": "table_occupancy",
        "kind": "public_stock_demo_video",
        "source": "Mixkit",
        "license": "Mixkit Stock Video Free License",
        "page_url": "https://mixkit.co/free-stock-video/customers-in-a-minimalist-style-restaurant-4385/",
        "video_url": "https://assets.mixkit.co/videos/4385/4385-720.mp4",
        "note": "Real restaurant video used as demo feed; detections are simulated overlays.",
    },
    {
        "id": "CAM-BAR-01",
        "name": "Busy bar/service area",
        "zone": "Service",
        "role": "service_flow",
        "kind": "public_stock_demo_video",
        "source": "Mixkit",
        "license": "Mixkit Stock Video Free License",
        "page_url": "https://mixkit.co/free-stock-video/a-busy-elegant-bar-4043/",
        "video_url": "https://assets.mixkit.co/videos/4043/4043-720.mp4",
        "note": "Real bar/restaurant video used as demo feed; detections are simulated overlays.",
    },
    {
        "id": "CAM-KITCHEN-01",
        "name": "Kitchen production line",
        "zone": "Kitchen",
        "role": "kitchen_load",
        "kind": "public_stock_demo_video",
        "source": "Mixkit",
        "license": "Mixkit Restricted License - personal-use demo clip",
        "page_url": "https://mixkit.co/free-stock-video/professional-chefs-work-in-restaurant-kitchen-15875/",
        "video_url": "https://assets.mixkit.co/videos/15875/15875-720.mp4",
        "note": "Real kitchen video used as demo feed; not used for commercial redistribution.",
    },
]


persisted_state = load_state()
if persisted_state is not None:
    simulation.SIMULATOR.state = persisted_state


@app.get("/")
def root():
    if DIST_DIR.exists():
        return FileResponse(DIST_DIR / "index.html")
    return {
        "service": "Smart Restaurant Operating System",
        "docs": "/docs",
        "core": "real-time decision engine for restaurant operations",
    }


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


@app.websocket("/ws")
async def websocket_updates(websocket: WebSocket) -> None:
    await HUB.connect(websocket)
    try:
        await websocket.send_json({"type": "connected", "message": "Smart Restaurant OS live updates enabled"})
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        HUB.disconnect(websocket)


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
        "truth_note": "These are real public stock videos for UI/testing. The current app simulates detections; it does not run pixel-level CV inference yet.",
        "production_path": "For real camera AI, connect RTSP/IP camera analytics via OpenDataCam, Axis People Counter API, Camlytics webhooks, or send YOLO/ByteTrack metadata to /sensors/webhook.",
        "feeds": DEMO_CAMERA_FEEDS,
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
def sensor_feed(limit: int = 50) -> dict:
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
def camera_brain_train(epochs: int = 5) -> dict:
    result = CAMERA_BRAIN.train_from_videos(DEMO_CAMERA_FEEDS, epochs=epochs)
    audit("camera_brain_trained", {"epochs": epochs, "samples": result["profile"]["samples_seen"]}, actor="vision-brain")
    return result


@app.post("/vision/brain/analyze-all")
async def camera_brain_analyze_all() -> dict:
    result = CAMERA_BRAIN.analyze_all(DEMO_CAMERA_FEEDS)
    audit("camera_brain_analysis", {"status": result["status"], "people": result["total_people"]}, actor="vision-brain")
    await HUB.broadcast({"type": "camera_brain_analysis", "analysis": result})
    return result


@app.get("/orders")
def orders() -> dict:
    return {"orders": KITCHEN.list_orders(), "summary": KITCHEN.report()}


@app.post("/orders")
async def create_order(request: OrderRequest, x_role: str = Header(default="waiter")) -> dict:
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
    await HUB.broadcast({"type": "order_created", "order": ticket.as_public()})
    return {"order": ticket.as_public(), "decision": decision()}


@app.post("/orders/transition")
async def transition_order(request: OrderTransitionRequest, x_role: str = Header(default="kitchen")) -> dict:
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
    await HUB.broadcast({"type": "order_transition", "order": ticket.as_public()})
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
def train_simulated(rows: int = 900) -> dict:
    return RISK_MODEL.train_on_simulation(rows=rows)


@app.get("/audit")
def audit_log(limit: int = 80) -> dict:
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
def tick(minutes: float = 1.0) -> dict:
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
    audit("system_reset", {}, actor="manager")
    save_state(simulation.SIMULATOR.state)
    return {"status": "reset", "state": asdict(simulation.SIMULATOR.state)}


if DIST_DIR.exists():
    @app.get("/{full_path:path}")
    def serve_spa(full_path: str) -> FileResponse:
        candidate = DIST_DIR / full_path
        if candidate.is_file():
            return FileResponse(candidate)
        return FileResponse(DIST_DIR / "index.html")
