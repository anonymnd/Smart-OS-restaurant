"""Restore and commit the restaurant aggregate at the request boundary.

The database is authoritative; process globals are working copies. A PostgreSQL
transaction lock prevents two serverless workers from overwriting each other.
Existing state-only snapshots remain readable.
"""
from __future__ import annotations

from contextlib import asynccontextmanager
from functools import lru_cache
import pickle

import anyio

import simulation
from ai_pipeline import PIPELINE, RISK_MODEL
from models import RestaurantState, now_utc
from multi_camera_brain import CAMERA_BRAIN
from ops_store import execute, init_db, load_snapshot, transaction
from pos_kitchen import KITCHEN

_SERVICES = {"kitchen": KITCHEN, "pipeline": PIPELINE, "risk_model": RISK_MODEL, "camera_brain": CAMERA_BRAIN}
_DEFAULT_SERVICES = pickle.dumps({key: service.__dict__ for key, service in _SERVICES.items()})
_DEFAULT_STATE = pickle.dumps(simulation.get_simulator().state)
_initialize = lru_cache(maxsize=1)(init_db)


def restore():
    snapshot = load_snapshot()
    services = pickle.loads(_DEFAULT_SERVICES)
    if snapshot is None:
        state = pickle.loads(_DEFAULT_STATE)
    elif isinstance(snapshot, RestaurantState):
        state = snapshot
    else:
        state = snapshot["state"]
        services.update(snapshot.get("services", {}))
    simulation.get_simulator().state = state
    for key, service in _SERVICES.items():
        service.__dict__.clear()
        service.__dict__.update(services[key])


def persist():
    snapshot = {
        "state": simulation.get_simulator().state,
        "services": {key: service.__dict__ for key, service in _SERVICES.items()},
    }
    execute(
        """INSERT INTO snapshots (id, state_blob, updated_at) VALUES (1, :state_blob, :updated_at)
        ON CONFLICT(id) DO UPDATE SET state_blob=excluded.state_blob, updated_at=excluded.updated_at""",
        {"state_blob": pickle.dumps(snapshot), "updated_at": now_utc().isoformat()},
    )


@asynccontextmanager
async def restaurant_request():
    await anyio.to_thread.run_sync(_initialize)
    async with transaction():
        await anyio.to_thread.run_sync(restore)
        yield
        await anyio.to_thread.run_sync(persist)
