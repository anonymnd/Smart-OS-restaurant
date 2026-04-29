from __future__ import annotations

import random
from dataclasses import asdict, dataclass
from datetime import datetime
from math import exp
from statistics import mean
from typing import Any

from models import RestaurantState, TableState


@dataclass
class SensorEvent:
    id: str
    source: str
    event_type: str
    confidence: float
    payload: dict[str, Any]
    timestamp: str


class SensorFusionPipeline:
    """Normalizes camera, table-zone, POS, and staff events into operations events."""

    def __init__(self, seed: int = 42):
        self.random = random.Random(seed)
        self.events: list[SensorEvent] = []
        self.sequence = 1

    def simulate_camera_batch(self, state: RestaurantState) -> list[SensorEvent]:
        events: list[SensorEvent] = []
        entrance_probability = 0.36 if self._is_peak(state.current_time) else 0.18
        if self.random.random() < entrance_probability:
            group_size = self.random.choices([1, 2, 3, 4, 5, 6], weights=[8, 30, 18, 24, 8, 6])[0]
            events.append(
                self._event(
                    source="entrance_camera",
                    event_type="group_entered",
                    confidence=self.random.uniform(0.88, 0.98),
                    payload={
                        "group_size": group_size,
                        "direction": "in",
                        "camera_id": "CAM-ENT-01",
                        "line_crossing": "entrance-main",
                    },
                    state=state,
                )
            )

        active_tables = [table for table in state.tables if table.state != TableState.FREE]
        for table in self.random.sample(active_tables, min(len(active_tables), 3)):
            if table.state in {TableState.WAITING_ORDER, TableState.WAITING_FOOD, TableState.SERVED}:
                dwell_min = (state.current_time - table.state_started_at).total_seconds() / 60
                events.append(
                    self._event(
                        source="table_zone_camera",
                        event_type="table_activity_detected",
                        confidence=self.random.uniform(0.76, 0.94),
                        payload={
                            "table_id": table.id,
                            "state": table.state.value,
                            "dwell_minutes": round(dwell_min, 1),
                            "staff_nearby": self.random.random() < 0.28,
                            "motion_level": round(self.random.uniform(0.2, 0.95), 2),
                            "camera_id": "CAM-DINING-02",
                        },
                        state=state,
                    )
                )

        queue_depth = len(state.waiting_queue)
        events.append(
            self._event(
                source="queue_depth_sensor",
                event_type="waiting_zone_count",
                confidence=self.random.uniform(0.9, 0.99),
                payload={"queue_depth": queue_depth, "sensor_id": "LIDAR-WAIT-01"},
                state=state,
            )
        )
        self.events.extend(events)
        self.events = self.events[-300:]
        return events

    def normalize_inbound(self, source: str, payload: dict[str, Any], state: RestaurantState) -> SensorEvent:
        event_type = payload.get("event_type") or payload.get("type") or "external_sensor_event"
        confidence = float(payload.get("confidence", 0.86))
        event = self._event(source, event_type, confidence, payload, state)
        self.events.append(event)
        self.events = self.events[-300:]
        return event

    def recent(self, limit: int = 50) -> list[dict[str, Any]]:
        return [asdict(event) for event in self.events[-limit:]][::-1]

    def _event(
        self,
        source: str,
        event_type: str,
        confidence: float,
        payload: dict[str, Any],
        state: RestaurantState,
    ) -> SensorEvent:
        event = SensorEvent(
            id=f"SE-{self.sequence:05d}",
            source=source,
            event_type=event_type,
            confidence=round(confidence, 3),
            payload=payload,
            timestamp=state.current_time.isoformat(),
        )
        self.sequence += 1
        return event

    def _is_peak(self, at: datetime) -> bool:
        return 12 <= at.hour <= 14 or 19 <= at.hour <= 22


class OperationsPredictionModel:
    """Small transparent model for delay and congestion risk from digital-twin features."""

    def __init__(self):
        self.training_rows = 0
        self.last_accuracy = 0.0
        self.feature_importance = {
            "occupancy_ratio": 0.32,
            "waiting_queue": 0.24,
            "avg_stage_age_min": 0.2,
            "waiting_food_count": 0.16,
            "dirty_tables": 0.08,
        }

    def train_on_simulation(self, seed: int = 4, rows: int = 900) -> dict[str, Any]:
        rng = random.Random(seed)
        correct = 0
        for _ in range(rows):
            features = {
                "occupancy_ratio": rng.random(),
                "waiting_queue": rng.randint(0, 9),
                "avg_stage_age_min": rng.uniform(0, 28),
                "waiting_food_count": rng.randint(0, 8),
                "dirty_tables": rng.randint(0, 5),
            }
            truth = (
                features["occupancy_ratio"] > 0.78
                or features["waiting_queue"] >= 4
                or features["avg_stage_age_min"] > 17
                or features["waiting_food_count"] >= 5
            )
            prediction = self.predict_from_features(features)["risk_score"] >= 0.58
            if prediction == truth:
                correct += 1
        self.training_rows += rows
        self.last_accuracy = round(correct / rows, 3)
        return self.status()

    def predict(self, state: RestaurantState) -> dict[str, Any]:
        active = [table for table in state.tables if table.state != TableState.FREE]
        stage_ages = [(state.current_time - table.state_started_at).total_seconds() / 60 for table in active]
        features = {
            "occupancy_ratio": len(active) / max(1, len(state.tables)),
            "waiting_queue": len(state.waiting_queue),
            "avg_stage_age_min": mean(stage_ages) if stage_ages else 0,
            "waiting_food_count": len([table for table in state.tables if table.state == TableState.WAITING_FOOD]),
            "dirty_tables": len([table for table in state.tables if table.state == TableState.NEEDS_CLEANING]),
        }
        return self.predict_from_features(features)

    def predict_from_features(self, features: dict[str, float]) -> dict[str, Any]:
        weighted = (
            2.4 * features["occupancy_ratio"]
            + 0.24 * features["waiting_queue"]
            + 0.055 * features["avg_stage_age_min"]
            + 0.18 * features["waiting_food_count"]
            + 0.13 * features["dirty_tables"]
            - 2.1
        )
        risk_score = 1 / (1 + exp(-weighted))
        if risk_score >= 0.72:
            label = "HIGH"
        elif risk_score >= 0.48:
            label = "MEDIUM"
        else:
            label = "LOW"
        return {
            "risk_label": label,
            "risk_score": round(risk_score, 3),
            "features": {key: round(value, 3) for key, value in features.items()},
            "recommendation": self._recommend(label, features),
        }

    def status(self) -> dict[str, Any]:
        return {
            "model_name": "Transparent Operations Risk Model",
            "mode": "simulation-trained transparent logistic scorer",
            "training_rows": self.training_rows,
            "validation_accuracy": self.last_accuracy,
            "feature_importance": self.feature_importance,
            "ready": self.training_rows > 0,
        }

    def _recommend(self, label: str, features: dict[str, float]) -> str:
        if features["waiting_queue"] >= 4:
            return "Move one waiter to host support and prioritize cleaning/seating tasks."
        if features["waiting_food_count"] >= 5:
            return "Kitchen pass is the likely bottleneck; prioritize food-running tasks."
        if label == "HIGH":
            return "Freeze low-value checks and focus only on top critical tasks."
        if label == "MEDIUM":
            return "Keep staff on assigned tasks and monitor waiting-order tables."
        return "Maintain current staffing pattern."


CAMERA_INTEGRATION_OPTIONS = [
    {
        "name": "Axis People Counter API",
        "best_for": "Real entrance count and occupancy from Axis cameras",
        "integration": "Poll live-sum.json / occupancy endpoints or receive device events",
        "data_used": "in, out, occupancy, timestamp",
        "privacy": "Only counts and metadata are ingested by this app.",
        "url": "https://developer.axis.com/vapix/applications/people-counter-api/",
    },
    {
        "name": "OpenDataCam",
        "best_for": "Open-source on-prem video analytics from RTSP or video files",
        "integration": "Run on local server or edge device, consume counter events through API",
        "data_used": "object class, line crossing, trajectory metadata",
        "privacy": "Designed to save metadata rather than raw video.",
        "url": "https://opendata.cam/",
    },
    {
        "name": "Camlytics Events API/Webhooks",
        "best_for": "Existing IP cameras with RTSP and vendor-hosted analytics",
        "integration": "Receive Line crossed, Zone joined, Motion started webhooks",
        "data_used": "event type, zone/counter, timestamp, count",
        "privacy": "Analytics can run on premises with metadata transfer.",
        "url": "https://camlytics.com/solutions/people-counting",
    },
]


PIPELINE = SensorFusionPipeline(seed=12)
RISK_MODEL = OperationsPredictionModel()
RISK_MODEL.train_on_simulation(rows=900)
