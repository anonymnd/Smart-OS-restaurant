from __future__ import annotations

from dataclasses import dataclass
from enum import Enum
from typing import Any

from models import RestaurantState, TableState


class OperationEventType(str, Enum):
    GROUP_ENTERED = "group_entered"
    GROUP_LEFT = "group_left"
    TABLE_OCCUPIED = "table_occupied"
    STAFF_SEEN_NEAR_TABLE = "staff_seen_near_table"
    ORDER_CREATED = "order_created"
    FOOD_READY = "food_ready"
    FOOD_SERVED = "food_served"
    PAYMENT_DONE = "payment_done"
    TABLE_DIRTY = "table_dirty"
    TABLE_CLEANED = "table_cleaned"
    TICK = "tick"


ROLE_PERMISSIONS = {
    "manager": {"*"},
    "host": {
        OperationEventType.GROUP_ENTERED.value,
        OperationEventType.GROUP_LEFT.value,
        OperationEventType.TABLE_OCCUPIED.value,
        OperationEventType.TABLE_CLEANED.value,
        OperationEventType.TICK.value,
    },
    "waiter": {
        OperationEventType.STAFF_SEEN_NEAR_TABLE.value,
        OperationEventType.ORDER_CREATED.value,
        OperationEventType.FOOD_SERVED.value,
        OperationEventType.PAYMENT_DONE.value,
        OperationEventType.TABLE_DIRTY.value,
        OperationEventType.TABLE_CLEANED.value,
        OperationEventType.TICK.value,
    },
    "kitchen": {
        OperationEventType.ORDER_CREATED.value,
        OperationEventType.FOOD_READY.value,
        OperationEventType.TICK.value,
    },
    "sensor": {
        OperationEventType.GROUP_ENTERED.value,
        OperationEventType.GROUP_LEFT.value,
        OperationEventType.STAFF_SEEN_NEAR_TABLE.value,
        OperationEventType.TABLE_OCCUPIED.value,
    },
}


LEGACY_EVENT_MAP = {
    "entrance_camera": OperationEventType.GROUP_ENTERED.value,
    "seated": OperationEventType.TABLE_OCCUPIED.value,
    "order_taken": OperationEventType.ORDER_CREATED.value,
    "food_ready": OperationEventType.FOOD_READY.value,
    "food_served": OperationEventType.FOOD_SERVED.value,
    "table_finished": OperationEventType.PAYMENT_DONE.value,
    "table_dirty": OperationEventType.TABLE_DIRTY.value,
    "table_cleaned": OperationEventType.TABLE_CLEANED.value,
    "tick": OperationEventType.TICK.value,
}


@dataclass
class EventValidationResult:
    ok: bool
    normalized_type: str
    message: str
    payload: dict[str, Any]
    code: str = "OK"


def normalize_event(event_type: str, payload: dict[str, Any] | None = None) -> tuple[str, dict[str, Any]]:
    payload = payload or {}
    normalized = LEGACY_EVENT_MAP.get(event_type, event_type)
    if normalized == OperationEventType.GROUP_ENTERED.value and "group_size" not in payload:
        payload = {**payload, "group_size": 2}
    return normalized, payload


def role_can(role: str, event_type: str) -> bool:
    permissions = ROLE_PERMISSIONS.get(role or "manager", ROLE_PERMISSIONS["manager"])
    return "*" in permissions or event_type in permissions


def validate_event(state: RestaurantState, event_type: str, payload: dict[str, Any] | None = None, role: str = "manager") -> EventValidationResult:
    normalized, payload = normalize_event(event_type, payload)
    if normalized not in {item.value for item in OperationEventType}:
        return EventValidationResult(False, normalized, f"Unknown event type: {event_type}", payload, "UNKNOWN_EVENT")
    if not role_can(role, normalized):
        return EventValidationResult(False, normalized, f"Role '{role}' cannot perform '{normalized}'.", payload, "FORBIDDEN")

    table_id = payload.get("table_id")
    table = None
    if table_id:
        try:
            table = state.table_by_id(table_id)
        except StopIteration:
            return EventValidationResult(False, normalized, f"Unknown table: {table_id}", payload, "UNKNOWN_TABLE")

    if normalized == OperationEventType.GROUP_ENTERED.value:
        size = int(payload.get("group_size", 0))
        if size < 1 or size > 12:
            return EventValidationResult(False, normalized, "Group size must be between 1 and 12.", payload, "BAD_GROUP_SIZE")
    elif normalized == OperationEventType.TABLE_OCCUPIED.value:
        if not table:
            return EventValidationResult(False, normalized, "table_id is required for seating.", payload, "MISSING_TABLE")
        if table.state != TableState.FREE:
            return EventValidationResult(False, normalized, f"{table.id} is {table.state.value}; only FREE tables can be seated.", payload, "INVALID_TRANSITION")
        if "client_id" not in payload:
            return EventValidationResult(False, normalized, "client_id is required for seating.", payload, "MISSING_CLIENT")
    elif normalized == OperationEventType.ORDER_CREATED.value:
        if not table or table.state not in {TableState.SEATED, TableState.WAITING_ORDER}:
            state_label = table.state.value if table else "missing"
            return EventValidationResult(False, normalized, f"Cannot take order while table is {state_label}.", payload, "INVALID_TRANSITION")
    elif normalized == OperationEventType.FOOD_READY.value:
        if not table or table.state != TableState.WAITING_FOOD:
            state_label = table.state.value if table else "missing"
            return EventValidationResult(False, normalized, f"Food can be ready only after order exists; table is {state_label}.", payload, "INVALID_TRANSITION")
    elif normalized == OperationEventType.FOOD_SERVED.value:
        if not table or table.state != TableState.WAITING_FOOD:
            state_label = table.state.value if table else "missing"
            return EventValidationResult(False, normalized, f"Cannot serve food before an order is waiting; table is {state_label}.", payload, "INVALID_TRANSITION")
    elif normalized in {OperationEventType.PAYMENT_DONE.value, OperationEventType.TABLE_DIRTY.value}:
        if not table or table.state != TableState.SERVED:
            state_label = table.state.value if table else "missing"
            return EventValidationResult(False, normalized, f"Cannot finish table unless it is SERVED; table is {state_label}.", payload, "INVALID_TRANSITION")
    elif normalized == OperationEventType.TABLE_CLEANED.value:
        if not table or table.state not in {TableState.FINISHED, TableState.NEEDS_CLEANING}:
            state_label = table.state.value if table else "missing"
            return EventValidationResult(False, normalized, f"Cannot clean table while it is {state_label}.", payload, "INVALID_TRANSITION")

    return EventValidationResult(True, normalized, "Event is valid.", payload)


def strict_to_simulator_event(event_type: str) -> str:
    return {
        OperationEventType.GROUP_ENTERED.value: "entrance_camera",
        OperationEventType.TABLE_OCCUPIED.value: "seated",
        OperationEventType.ORDER_CREATED.value: "order_taken",
        OperationEventType.FOOD_READY.value: "food_ready",
        OperationEventType.FOOD_SERVED.value: "food_served",
        OperationEventType.PAYMENT_DONE.value: "table_finished",
        OperationEventType.TABLE_DIRTY.value: "table_finished",
        OperationEventType.TABLE_CLEANED.value: "table_cleaned",
        OperationEventType.TICK.value: "tick",
    }.get(event_type, event_type)
