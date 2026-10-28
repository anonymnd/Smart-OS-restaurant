"""Environment configuration shared by local and serverless entry points."""
from __future__ import annotations

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR / "dist"
PRODUCTION = os.getenv("VERCEL_ENV") == "production" or os.getenv("APP_ENV") == "production"
APP_SECRET = os.getenv("APP_SECRET", "" if PRODUCTION else "dev-only-change-me")
DEMO_PASSWORD = os.getenv("DEMO_PASSWORD", "" if PRODUCTION else "demo123")
SENSOR_API_KEY = os.getenv("SENSOR_API_KEY", "")
TOKEN_TTL_SECONDS = int(os.getenv("TOKEN_TTL_SECONDS", "28800"))
ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://127.0.0.1:5173,http://localhost:5173").split(",")
    if origin.strip()
]


def authentication_configured() -> bool:
    return bool(APP_SECRET and DEMO_PASSWORD) and (
        not PRODUCTION or (len(APP_SECRET) >= 32 and APP_SECRET != "dev-only-change-me" and DEMO_PASSWORD != "demo123")
    )
