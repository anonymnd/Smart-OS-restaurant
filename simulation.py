from __future__ import annotations

import random
from datetime import timedelta
from math import dist

from decision_engine import DecisionEngine
from models import (
    ClientGroup,
    ClientStatus,
    RestaurantState,
    StaffMember,
    Table,
    TableState,
    TaskType,
    Zone,
    now_utc,
)


def create_initial_state(seed: int | None = None) -> RestaurantState:
    if seed is not None:
        random.seed(seed)

    tables = [
        Table("T1", 4, 4, 2),
        Table("T2", 9, 4, 4),
        Table("T3", 14, 4, 4),
        Table("T4", 19, 4, 6),
        Table("T5", 5, 9, 2),
        Table("T6", 11, 9, 4),
        Table("T7", 17, 9, 4),
        Table("T8", 22, 9, 6),
        Table("T9", 4, 14, 2),
        Table("T10", 9, 14, 4),
        Table("T11", 14, 14, 4),
        Table("T12", 20, 14, 6),
        Table("T13", 7, 19, 2),
        Table("T14", 15, 19, 4),
    ]
    zones = [
        Zone("entrance", "Entrance", 0, 0, 6, 3),
        Zone("waiting", "Waiting", 0, 4, 3, 9),
        Zone("service", "Service", 22, 0, 5, 5),
    ]
    staff = [
        StaffMember("W1", "Waiter 1", 22, 2, speed_cells_per_minute=random.uniform(7.2, 9.5)),
        StaffMember("W2", "Waiter 2", 3, 18, speed_cells_per_minute=random.uniform(6.8, 9.0)),
    ]
    return RestaurantState(
        layout_width=28,
        layout_height=22,
        tables=tables,
        zones=zones,
        clients=[],
        waiting_queue=[],
        staff=staff,
    )


class RestaurantSimulator:
    def __init__(self, state: RestaurantState | None = None, seed: int | None = None):
        self.state = state or create_initial_state(seed)
        self.engine = DecisionEngine()
        self.random = random.Random(seed)

    def tick(self, minutes: float = 1.0) -> dict:
        self.state.current_time += timedelta(minutes=minutes)
        self._entrance_camera()
        self._table_zone_camera()
        self._complete_staff_tasks()
        self._auto_progress_customers()
        return self.engine.compute(self.state)

    def ingest_event(self, event_type: str, payload: dict | None = None) -> dict:
        payload = payload or {}
        event = {"type": event_type, "payload": payload, "time": self.state.current_time.isoformat()}
        self.state.event_log.append(event)

        if event_type == "entrance_camera":
            self._create_arrival(payload.get("group_size"))
        elif event_type == "seated":
            self.seat_client(payload["client_id"], payload["table_id"])
        elif event_type == "order_taken":
            self.order_taken(payload["table_id"])
        elif event_type == "food_ready":
            self.food_ready(payload["table_id"])
        elif event_type == "food_served":
            self.food_served(payload["table_id"])
        elif event_type == "table_finished":
            self.table_finished(payload["table_id"])
        elif event_type == "table_cleaned":
            self.table_cleaned(payload["table_id"])
        elif event_type == "tick":
            return self.tick(float(payload.get("minutes", 1)))

        return self.engine.compute(self.state)

    def apply_task(self, task_id: str) -> dict:
        decision = self.engine.compute(self.state)
        task = next((item for item in decision["tasks"] if item["id"] == task_id), None)
        if not task:
            return decision

        if task["task_type"] == TaskType.SEAT_CLIENTS.value and task["client_id"] and task["table_id"]:
            self.seat_client(int(task["client_id"]), task["table_id"])
        elif task["task_type"] == TaskType.TAKE_ORDER.value and task["table_id"]:
            self.order_taken(task["table_id"])
        elif task["task_type"] == TaskType.SERVE_FOOD.value and task["table_id"]:
            self.food_served(task["table_id"])
        elif task["task_type"] == TaskType.CLEAN_TABLE.value and task["table_id"]:
            self.table_cleaned(task["table_id"])

        if task.get("assigned_staff_id"):
            self._assign_staff_to_task(task)
        return self.engine.compute(self.state)

    def seat_client(self, client_id: int, table_id: str) -> None:
        table = self.state.table_by_id(table_id)
        client = self.state.client_by_id(client_id)
        if table.state != TableState.FREE:
            return
        table.client_id = client_id
        table.state = TableState.WAITING_ORDER
        table.state_started_at = self.state.current_time
        table.last_action_at = self.state.current_time
        client.table_id = table_id
        client.status = ClientStatus.SEATED
        client.seated_at = self.state.current_time
        if client_id in self.state.waiting_queue:
            self.state.waiting_queue.remove(client_id)
        self._log("table_zone_camera", {"event": "seated", "client_id": client_id, "table_id": table_id})

    def order_taken(self, table_id: str) -> None:
        table = self.state.table_by_id(table_id)
        if table.state not in {TableState.SEATED, TableState.WAITING_ORDER}:
            return
        table.state = TableState.WAITING_FOOD
        table.state_started_at = self.state.current_time
        table.last_action_at = self.state.current_time
        table.order_taken_at = self.state.current_time
        table.expected_food_ready_at = self.state.current_time + timedelta(minutes=self.random.randint(8, 24))
        if table.client_id:
            client = self.state.client_by_id(table.client_id)
            client.status = ClientStatus.ORDER
            client.order_taken_at = self.state.current_time
        self._log("staff_input", {"event": "order_taken", "table_id": table_id})

    def food_ready(self, table_id: str) -> None:
        table = self.state.table_by_id(table_id)
        if table.state != TableState.WAITING_FOOD:
            return
        table.expected_food_ready_at = self.state.current_time
        table.last_action_at = self.state.current_time
        self._log("kitchen_pos", {"event": "food_ready", "table_id": table_id})

    def food_served(self, table_id: str) -> None:
        table = self.state.table_by_id(table_id)
        if table.state != TableState.WAITING_FOOD:
            return
        table.state = TableState.SERVED
        table.state_started_at = self.state.current_time
        table.last_action_at = self.state.current_time
        table.food_served_at = self.state.current_time
        if table.client_id:
            client = self.state.client_by_id(table.client_id)
            client.status = ClientStatus.FOOD
            client.food_served_at = self.state.current_time
        self._log("staff_input", {"event": "food_served", "table_id": table_id})

    def table_finished(self, table_id: str) -> None:
        table = self.state.table_by_id(table_id)
        if table.state != TableState.SERVED:
            return
        table.state = TableState.NEEDS_CLEANING
        table.state_started_at = self.state.current_time
        table.last_action_at = self.state.current_time
        table.finished_at = self.state.current_time
        if table.client_id:
            client = self.state.client_by_id(table.client_id)
            client.status = ClientStatus.EXIT
            client.exited_at = self.state.current_time
        self._log("table_zone_camera", {"event": "client_exit", "table_id": table_id})

    def table_cleaned(self, table_id: str) -> None:
        table = self.state.table_by_id(table_id)
        if table.state not in {TableState.FINISHED, TableState.NEEDS_CLEANING}:
            return
        table.state = TableState.FREE
        table.client_id = None
        table.state_started_at = self.state.current_time
        table.last_action_at = self.state.current_time
        table.expected_food_ready_at = None
        table.order_taken_at = None
        table.food_served_at = None
        table.finished_at = None
        self._log("staff_input", {"event": "table_cleaned", "table_id": table_id})

    def _entrance_camera(self) -> None:
        occupancy = len([table for table in self.state.tables if table.state != TableState.FREE]) / len(self.state.tables)
        arrival_probability = 0.18 + (0.12 if self.state.current_time.hour in {12, 13, 19, 20, 21} else 0) - occupancy * 0.08
        if self.random.random() < max(0.04, arrival_probability):
            self._create_arrival()

    def _create_arrival(self, group_size: int | None = None) -> None:
        group_size = group_size or self.random.choices([1, 2, 3, 4, 5, 6], weights=[8, 30, 18, 24, 8, 6])[0]
        client = ClientGroup(
            client_id=self.state.next_client_id,
            group_size=group_size,
            arrival_time=self.state.current_time,
            status=ClientStatus.WAIT,
        )
        self.state.next_client_id += 1
        self.state.clients.append(client)
        self.state.waiting_queue.append(client.client_id)
        self._log("entrance_camera", {"group_size": group_size, "client_id": client.client_id})

    def _table_zone_camera(self) -> None:
        for table in self.state.tables:
            if table.state == TableState.WAITING_ORDER:
                minutes = (self.state.current_time - table.state_started_at).total_seconds() / 60
                if minutes > 4 and self.random.random() < 0.03:
                    table.last_action_at = self.state.current_time
                    self._log("table_zone_camera", {"event": "staff_interaction_detected", "table_id": table.id})

    def _complete_staff_tasks(self) -> None:
        for member in self.state.staff:
            if member.busy_until and member.busy_until <= self.state.current_time:
                member.current_task_id = None
                member.busy_until = None

    def _auto_progress_customers(self) -> None:
        for table in self.state.tables:
            if table.state == TableState.SERVED:
                minutes = (self.state.current_time - table.state_started_at).total_seconds() / 60
                leave_probability = 0.02 if minutes < 20 else min(0.25, 0.03 + minutes / 180)
                if self.random.random() < leave_probability:
                    self.table_finished(table.id)

    def _assign_staff_to_task(self, task: dict) -> None:
        member = next((staff for staff in self.state.staff if staff.id == task["assigned_staff_id"]), None)
        if not member:
            return
        target = (task["target_x"], task["target_y"])
        distance = dist(member.location(), target)
        service_minutes = {
            TaskType.SEAT_CLIENTS.value: 2.0,
            TaskType.TAKE_ORDER.value: 4.0,
            TaskType.SERVE_FOOD.value: 2.5,
            TaskType.CLEAN_TABLE.value: 5.0,
        }.get(task["task_type"], 2.0)
        travel_minutes = distance / max(member.speed_cells_per_minute, 1)
        member.x = int(target[0])
        member.y = int(target[1])
        member.current_task_id = task["id"]
        member.busy_until = self.state.current_time + timedelta(minutes=service_minutes + travel_minutes)

    def _log(self, event_type: str, payload: dict) -> None:
        self.state.event_log.append(
            {"type": event_type, "payload": payload, "time": self.state.current_time.isoformat()}
        )


SIMULATOR = RestaurantSimulator(seed=8)


def get_simulator() -> RestaurantSimulator:
    return SIMULATOR
