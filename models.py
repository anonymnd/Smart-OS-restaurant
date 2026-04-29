from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum
from typing import Any


def now_utc() -> datetime:
    return datetime.now(timezone.utc)


class TableState(str, Enum):
    FREE = "FREE"
    ARRIVED = "ARRIVED"
    SEATED = "SEATED"
    WAITING_ORDER = "WAITING_ORDER"
    ORDER_IN_PROGRESS = "ORDER_IN_PROGRESS"
    WAITING_FOOD = "WAITING_FOOD"
    SERVED = "SERVED"
    FINISHED = "FINISHED"
    NEEDS_CLEANING = "NEEDS_CLEANING"


class ClientStatus(str, Enum):
    ENTRY = "ENTRY"
    WAIT = "WAIT"
    SEATED = "SEATED"
    ORDER = "ORDER"
    FOOD = "FOOD"
    EXIT = "EXIT"


class TaskType(str, Enum):
    SEAT_CLIENTS = "SEAT_CLIENTS"
    TAKE_ORDER = "TAKE_ORDER"
    SERVE_FOOD = "SERVE_FOOD"
    CLEAN_TABLE = "CLEAN_TABLE"
    CHECK_TABLE = "CHECK_TABLE"


class PriorityLevel(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass
class Zone:
    id: str
    label: str
    x: int
    y: int
    width: int
    height: int

    def center(self) -> tuple[float, float]:
        return (self.x + self.width / 2, self.y + self.height / 2)


@dataclass
class Table:
    id: str
    x: int
    y: int
    capacity: int
    state: TableState = TableState.FREE
    client_id: int | None = None
    state_started_at: datetime = field(default_factory=now_utc)
    last_action_at: datetime = field(default_factory=now_utc)
    expected_food_ready_at: datetime | None = None
    order_taken_at: datetime | None = None
    food_served_at: datetime | None = None
    finished_at: datetime | None = None

    def location(self) -> tuple[int, int]:
        return (self.x, self.y)


@dataclass
class ClientGroup:
    client_id: int
    group_size: int
    arrival_time: datetime
    table_id: str | None = None
    status: ClientStatus = ClientStatus.ENTRY
    seated_at: datetime | None = None
    order_taken_at: datetime | None = None
    food_served_at: datetime | None = None
    exited_at: datetime | None = None


@dataclass
class StaffMember:
    id: str
    name: str
    x: int
    y: int
    current_task_id: str | None = None
    busy_until: datetime | None = None
    speed_cells_per_minute: float = 8.0

    def location(self) -> tuple[int, int]:
        return (self.x, self.y)

    def is_available(self, at: datetime | None = None) -> bool:
        at = at or now_utc()
        return self.busy_until is None or self.busy_until <= at


@dataclass
class OperationalTask:
    id: str
    task_type: TaskType
    title: str
    table_id: str | None
    client_id: int | None
    priority_score: float
    priority_level: PriorityLevel
    reason: str
    target_x: int
    target_y: int
    assigned_staff_id: str | None = None
    walking_distance: float | None = None
    created_at: datetime = field(default_factory=now_utc)


@dataclass
class RestaurantState:
    layout_width: int
    layout_height: int
    tables: list[Table]
    zones: list[Zone]
    clients: list[ClientGroup]
    waiting_queue: list[int]
    staff: list[StaffMember]
    event_log: list[dict[str, Any]] = field(default_factory=list)
    current_time: datetime = field(default_factory=now_utc)
    next_client_id: int = 1

    def table_by_id(self, table_id: str) -> Table:
        return next(table for table in self.tables if table.id == table_id)

    def client_by_id(self, client_id: int) -> ClientGroup:
        return next(client for client in self.clients if client.client_id == client_id)

    def zone_by_id(self, zone_id: str) -> Zone:
        return next(zone for zone in self.zones if zone.id == zone_id)
