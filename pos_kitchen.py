from __future__ import annotations

from dataclasses import asdict, dataclass, field
from datetime import datetime, timedelta
from enum import Enum
from typing import Any

from models import now_utc


class OrderStatus(str, Enum):
    CREATED = "CREATED"
    SENT_TO_KITCHEN = "SENT_TO_KITCHEN"
    PREP_STARTED = "PREP_STARTED"
    FOOD_READY = "FOOD_READY"
    PICKED_UP = "PICKED_UP"
    DELIVERED = "DELIVERED"
    DELAYED = "DELAYED"
    CANCELLED = "CANCELLED"


@dataclass
class OrderTicket:
    order_id: str
    table_id: str
    client_id: int | None
    items: list[str]
    status: OrderStatus = OrderStatus.CREATED
    created_at: datetime = field(default_factory=now_utc)
    updated_at: datetime = field(default_factory=now_utc)
    expected_ready_at: datetime = field(default_factory=lambda: now_utc() + timedelta(minutes=14))
    history: list[dict[str, Any]] = field(default_factory=list)

    def as_public(self) -> dict[str, Any]:
        data = asdict(self)
        data["status"] = self.status.value
        return data


class KitchenBoard:
    def __init__(self):
        self.sequence = 1
        self.orders: dict[str, OrderTicket] = {}

    def create_order(self, table_id: str, client_id: int | None, items: list[str] | None = None) -> OrderTicket:
        order_id = f"ORD-{self.sequence:04d}"
        self.sequence += 1
        ticket = OrderTicket(
            order_id=order_id,
            table_id=table_id,
            client_id=client_id,
            items=items or ["chef special", "water"],
        )
        ticket.history.append({"status": ticket.status.value, "at": ticket.updated_at.isoformat()})
        self.orders[order_id] = ticket
        return ticket

    def transition(self, order_id: str, status: str) -> OrderTicket:
        ticket = self.orders[order_id]
        next_status = OrderStatus(status)
        ticket.status = next_status
        ticket.updated_at = now_utc()
        ticket.history.append({"status": next_status.value, "at": ticket.updated_at.isoformat()})
        return ticket

    def mark_delays(self) -> list[OrderTicket]:
        delayed = []
        current = now_utc()
        for ticket in self.orders.values():
            if ticket.status in {OrderStatus.SENT_TO_KITCHEN, OrderStatus.PREP_STARTED} and ticket.expected_ready_at < current:
                ticket.status = OrderStatus.DELAYED
                ticket.updated_at = current
                ticket.history.append({"status": OrderStatus.DELAYED.value, "at": current.isoformat()})
                delayed.append(ticket)
        return delayed

    def list_orders(self) -> list[dict[str, Any]]:
        self.mark_delays()
        return [ticket.as_public() for ticket in sorted(self.orders.values(), key=lambda item: item.created_at, reverse=True)]

    def report(self) -> dict[str, Any]:
        orders = list(self.orders.values())
        delayed = len([item for item in orders if item.status == OrderStatus.DELAYED])
        ready = len([item for item in orders if item.status == OrderStatus.FOOD_READY])
        delivered = len([item for item in orders if item.status == OrderStatus.DELIVERED])
        return {
            "total_orders": len(orders),
            "ready_orders": ready,
            "delayed_orders": delayed,
            "delivered_orders": delivered,
            "open_orders": len(orders) - delivered,
        }


KITCHEN = KitchenBoard()
