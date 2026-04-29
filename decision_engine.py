from __future__ import annotations

from dataclasses import asdict
from datetime import datetime
from math import dist
from statistics import mean

from models import (
    ClientStatus,
    OperationalTask,
    PriorityLevel,
    RestaurantState,
    StaffMember,
    Table,
    TableState,
    TaskType,
    now_utc,
)


STAGE_URGENCY = {
    TableState.ARRIVED: 3.2,
    TableState.SEATED: 4.0,
    TableState.WAITING_ORDER: 9.0,
    TableState.ORDER_IN_PROGRESS: 3.5,
    TableState.WAITING_FOOD: 7.5,
    TableState.SERVED: 2.0,
    TableState.FINISHED: 5.0,
    TableState.NEEDS_CLEANING: 6.5,
}

WEIGHTS = {
    "waiting_time": 1.25,
    "group_size": 3.0,
    "stage_urgency": 8.0,
    "time_since_last_action": 1.1,
    "congestion_factor": 11.0,
}


class DecisionEngine:
    """Real-time operations decision engine for the restaurant digital twin."""

    def compute(self, state: RestaurantState) -> dict:
        tasks = self.generate_tasks(state)
        self.assign_staff(tasks, state.staff)
        tasks = sorted(tasks, key=lambda task: task.priority_score, reverse=True)
        return {
            "tasks": [asdict(task) for task in tasks],
            "metrics": self.metrics(state),
            "alerts": self.detect_risks(state, tasks),
            "explainability": {
                "weights": WEIGHTS,
                "stage_urgency": {key.value: value for key, value in STAGE_URGENCY.items()},
                "formula": "weighted additive score using waiting time, group size, stage urgency, idle time, congestion, then proximity for assignment",
            },
        }

    def generate_tasks(self, state: RestaurantState) -> list[OperationalTask]:
        tasks: list[OperationalTask] = []
        active_tables = [table for table in state.tables if table.state != TableState.FREE]
        congestion_factor = min(2.0, len(active_tables) / max(1, len(state.tables) * 0.7))

        for client_id in state.waiting_queue:
            client = state.client_by_id(client_id)
            free_table = self.best_free_table_for_group(state, client.group_size)
            if not free_table:
                continue
            score, reason = self.priority_score(
                state,
                stage=TableState.ARRIVED,
                group_size=client.group_size,
                started_at=client.arrival_time,
                last_action_at=client.arrival_time,
                congestion_factor=congestion_factor,
            )
            tasks.append(
                OperationalTask(
                    id=f"seat-{client.client_id}-{free_table.id}",
                    task_type=TaskType.SEAT_CLIENTS,
                    title=f"Seat group {client.client_id} at {free_table.id}",
                    table_id=free_table.id,
                    client_id=client.client_id,
                    priority_score=score,
                    priority_level=self.priority_level(score),
                    reason=f"{reason}; best fit table for group of {client.group_size}",
                    target_x=free_table.x,
                    target_y=free_table.y,
                )
            )

        for table in state.tables:
            client = state.client_by_id(table.client_id) if table.client_id else None
            group_size = client.group_size if client else table.capacity
            if table.state in {TableState.SEATED, TableState.WAITING_ORDER}:
                score, reason = self.priority_score(
                    state,
                    stage=TableState.WAITING_ORDER,
                    group_size=group_size,
                    started_at=table.state_started_at,
                    last_action_at=table.last_action_at,
                    congestion_factor=congestion_factor,
                )
                tasks.append(
                    OperationalTask(
                        id=f"order-{table.id}",
                        task_type=TaskType.TAKE_ORDER,
                        title=f"Take order at {table.id} NOW",
                        table_id=table.id,
                        client_id=table.client_id,
                        priority_score=score,
                        priority_level=self.priority_level(score),
                        reason=reason,
                        target_x=table.x,
                        target_y=table.y,
                    )
                )
            elif table.state == TableState.WAITING_FOOD:
                food_ready_bonus = 18 if table.expected_food_ready_at and state.current_time >= table.expected_food_ready_at else 0
                score, reason = self.priority_score(
                    state,
                    stage=TableState.WAITING_FOOD,
                    group_size=group_size,
                    started_at=table.state_started_at,
                    last_action_at=table.last_action_at,
                    congestion_factor=congestion_factor,
                )
                score += food_ready_bonus
                if food_ready_bonus:
                    reason += "; kitchen ready signal detected"
                tasks.append(
                    OperationalTask(
                        id=f"serve-{table.id}",
                        task_type=TaskType.SERVE_FOOD,
                        title=f"Serve food at {table.id}",
                        table_id=table.id,
                        client_id=table.client_id,
                        priority_score=score,
                        priority_level=self.priority_level(score),
                        reason=reason,
                        target_x=table.x,
                        target_y=table.y,
                    )
                )
            elif table.state in {TableState.FINISHED, TableState.NEEDS_CLEANING}:
                score, reason = self.priority_score(
                    state,
                    stage=TableState.NEEDS_CLEANING,
                    group_size=group_size,
                    started_at=table.finished_at or table.state_started_at,
                    last_action_at=table.last_action_at,
                    congestion_factor=congestion_factor,
                )
                if state.waiting_queue:
                    score += 15
                    reason += "; waiting queue needs table capacity"
                tasks.append(
                    OperationalTask(
                        id=f"clean-{table.id}",
                        task_type=TaskType.CLEAN_TABLE,
                        title=f"Clean {table.id}",
                        table_id=table.id,
                        client_id=table.client_id,
                        priority_score=score,
                        priority_level=self.priority_level(score),
                        reason=reason,
                        target_x=table.x,
                        target_y=table.y,
                    )
                )

        return tasks

    def priority_score(
        self,
        state: RestaurantState,
        stage: TableState,
        group_size: int,
        started_at: datetime,
        last_action_at: datetime,
        congestion_factor: float,
    ) -> tuple[float, str]:
        waiting_minutes = max(0.0, (state.current_time - started_at).total_seconds() / 60)
        idle_minutes = max(0.0, (state.current_time - last_action_at).total_seconds() / 60)
        urgency = STAGE_URGENCY.get(stage, 1.0)
        score = (
            WEIGHTS["waiting_time"] * waiting_minutes
            + WEIGHTS["group_size"] * group_size
            + WEIGHTS["stage_urgency"] * urgency
            + WEIGHTS["time_since_last_action"] * idle_minutes
            + WEIGHTS["congestion_factor"] * congestion_factor
        )
        reason = (
            f"{waiting_minutes:.1f}m in stage, group size {group_size}, "
            f"urgency {urgency:.1f}, idle {idle_minutes:.1f}m, congestion {congestion_factor:.2f}"
        )
        return round(score, 2), reason

    def assign_staff(self, tasks: list[OperationalTask], staff: list[StaffMember]) -> None:
        available = [member for member in staff if member.is_available()]
        for task in sorted(tasks, key=lambda item: item.priority_score, reverse=True):
            if not available:
                return
            closest = min(available, key=lambda member: dist(member.location(), (task.target_x, task.target_y)))
            task.assigned_staff_id = closest.id
            task.walking_distance = round(dist(closest.location(), (task.target_x, task.target_y)), 2)
            available.remove(closest)

    def detect_risks(self, state: RestaurantState, tasks: list[OperationalTask]) -> list[dict]:
        alerts = []
        delayed_tables = self.delayed_tables(state)
        kitchen_waits = [
            (state.current_time - table.state_started_at).total_seconds() / 60
            for table in state.tables
            if table.state == TableState.WAITING_FOOD
        ]

        if len(state.waiting_queue) >= 4:
            alerts.append(
                {
                    "level": "CRITICAL",
                    "title": "System overloaded",
                    "message": f"{len(state.waiting_queue)} groups are waiting; prioritize cleaning and seating.",
                }
            )
        if delayed_tables >= 3:
            alerts.append(
                {
                    "level": "HIGH",
                    "title": "Delay risk high",
                    "message": f"{delayed_tables} tables are beyond service-time thresholds.",
                }
            )
        if kitchen_waits and mean(kitchen_waits) > 15:
            alerts.append(
                {
                    "level": "HIGH",
                    "title": "Kitchen bottleneck likely",
                    "message": f"Average food wait is {mean(kitchen_waits):.1f} minutes.",
                }
            )
        if tasks and tasks[0].priority_score > 120:
            alerts.append(
                {
                    "level": "CRITICAL",
                    "title": "Immediate staff action required",
                    "message": tasks[0].title,
                }
            )
        return alerts

    def metrics(self, state: RestaurantState) -> dict:
        active_clients = [client for client in state.clients if client.status != ClientStatus.EXIT]
        waits = [
            (client.seated_at or state.current_time - (client.arrival_time - state.current_time)).total_seconds()
            for client in []
        ]
        waiting_minutes = [
            max(0.0, ((client.seated_at or state.current_time) - client.arrival_time).total_seconds() / 60)
            for client in state.clients
        ]
        completed = [client for client in state.clients if client.exited_at]
        turnover_minutes = [
            (client.exited_at - client.seated_at).total_seconds() / 60
            for client in completed
            if client.seated_at and client.exited_at
        ]
        occupied = len([table for table in state.tables if table.state not in {TableState.FREE, TableState.NEEDS_CLEANING}])
        delayed = self.delayed_tables(state)
        congestion_prediction = self.predict_congestion(state)
        return {
            "active_clients": len(active_clients),
            "waiting_groups": len(state.waiting_queue),
            "delayed_tables": delayed,
            "avg_waiting_time_min": round(mean(waiting_minutes), 1) if waiting_minutes else 0,
            "table_turnover_rate_per_hour": round(60 / mean(turnover_minutes), 2) if turnover_minutes else 0,
            "occupancy_pct": round(occupied / len(state.tables) * 100, 1),
            "upcoming_congestion": congestion_prediction,
            "peak_hour_signal": self.peak_hour_signal(state),
        }

    def delayed_tables(self, state: RestaurantState) -> int:
        thresholds = {
            TableState.WAITING_ORDER: 7,
            TableState.WAITING_FOOD: 18,
            TableState.FINISHED: 8,
            TableState.NEEDS_CLEANING: 8,
        }
        delayed = 0
        for table in state.tables:
            threshold = thresholds.get(table.state)
            if threshold is None:
                continue
            minutes = (state.current_time - table.state_started_at).total_seconds() / 60
            if minutes > threshold:
                delayed += 1
        return delayed

    def predict_congestion(self, state: RestaurantState) -> str:
        recent_arrivals = [
            event
            for event in state.event_log[-30:]
            if event.get("type") == "entrance_camera"
        ]
        occupancy = len([table for table in state.tables if table.state != TableState.FREE]) / len(state.tables)
        if len(recent_arrivals) >= 5 and occupancy > 0.75:
            return "HIGH in next 10-15 minutes"
        if occupancy > 0.65 or len(state.waiting_queue) >= 2:
            return "MEDIUM"
        return "LOW"

    def peak_hour_signal(self, state: RestaurantState) -> str:
        hour = state.current_time.hour
        if 12 <= hour <= 14 or 19 <= hour <= 22:
            return "Peak dining window"
        return "Normal flow"

    def best_free_table_for_group(self, state: RestaurantState, group_size: int) -> Table | None:
        candidates = [table for table in state.tables if table.state == TableState.FREE and table.capacity >= group_size]
        if not candidates:
            candidates = [table for table in state.tables if table.state == TableState.FREE]
        if not candidates:
            return None
        return min(candidates, key=lambda table: (max(0, table.capacity - group_size), table.capacity))

    def priority_level(self, score: float) -> PriorityLevel:
        if score >= 115:
            return PriorityLevel.CRITICAL
        if score >= 85:
            return PriorityLevel.HIGH
        if score >= 55:
            return PriorityLevel.MEDIUM
        return PriorityLevel.LOW


def icon_for_task(task_type: str) -> str:
    return {
        TaskType.SEAT_CLIENTS.value: "Seat",
        TaskType.TAKE_ORDER.value: "Order",
        TaskType.SERVE_FOOD.value: "Serve",
        TaskType.CLEAN_TABLE.value: "Clean",
        TaskType.CHECK_TABLE.value: "Check",
    }.get(task_type, "Task")
