"""Session signing and request authentication. Roles come from signed sessions."""
from __future__ import annotations

import base64
import hashlib
import hmac
import json
import time
from typing import Any

from fastapi import HTTPException, Request

from config import APP_SECRET, authentication_configured

VALID_ROLES = {"manager", "host", "waiter", "kitchen", "sensor"}
PUBLIC_PATHS = {"/", "/auth/login", "/health/db"}
MANAGER_PATHS = {"/connectors", "/connectors/test", "/layout/table", "/settings/sla", "/scenarios/run", "/reset", "/model/train-simulated", "/vision/brain/train", "/cameras/virtual"}


def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).decode().rstrip("=")


def sign_payload(payload: dict[str, Any]) -> str:
    body = b64url(json.dumps(payload, separators=(",", ":"), sort_keys=True).encode())
    signature = hmac.new(APP_SECRET.encode(), body.encode(), hashlib.sha256).digest()
    return f"{body}.{b64url(signature)}"


def verify_token(token: str) -> dict[str, Any]:
    if not authentication_configured():
        raise HTTPException(status_code=503, detail="Sign-in is temporarily unavailable.")
    try:
        body, signature = token.split(".", 1)
        expected = b64url(hmac.new(APP_SECRET.encode(), body.encode(), hashlib.sha256).digest())
        if not hmac.compare_digest(signature, expected):
            raise ValueError("invalid signature")
        payload = json.loads(base64.urlsafe_b64decode(body + "=" * (-len(body) % 4)))
        if payload.get("exp", 0) <= int(time.time()) or payload.get("role") not in VALID_ROLES:
            raise ValueError("invalid session")
        return payload
    except (ValueError, TypeError, KeyError) as exc:
        raise HTTPException(status_code=401, detail="Your session has expired. Please sign in again.") from exc


def authenticate(request: Request) -> dict[str, Any]:
    authorization = request.headers.get("authorization", "")
    if not authorization.lower().startswith("bearer "):
        raise HTTPException(status_code=401, detail="Please sign in to continue.")
    payload = verify_token(authorization.split(" ", 1)[1].strip())
    if request.method not in {"GET", "HEAD"} and request.headers.get("x-role") != payload["role"]:
        raise HTTPException(status_code=403, detail="Role does not match your session.")
    if request.method not in {"GET", "HEAD"} and request.url.path in MANAGER_PATHS and payload["role"] != "manager":
        raise HTTPException(status_code=403, detail="This action requires a manager.")
    return payload
