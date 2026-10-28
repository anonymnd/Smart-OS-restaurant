"""Regression coverage against an isolated database; never uses production data."""
import os
from pathlib import Path
import tempfile
import time
import unittest
from concurrent.futures import ThreadPoolExecutor
from unittest.mock import patch

_temp = tempfile.TemporaryDirectory()
os.environ["DATABASE_URL"] = os.getenv("TEST_DATABASE_URL", f"sqlite:///{Path(_temp.name).as_posix()}/test.sqlite3")
os.environ["APP_SECRET"] = "test-secret-only-never-used-in-production-0123456789"
os.environ["DEMO_PASSWORD"] = "test-access-password"
os.environ.pop("VERCEL", None)
os.environ.pop("VERCEL_ENV", None)
os.environ.pop("APP_ENV", None)

from fastapi.testclient import TestClient
from sqlalchemy import text

import auth
import backend
import ops_store
from pos_kitchen import KITCHEN


class ApplicationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(backend.app)
        cls.client.__enter__()

    @classmethod
    def tearDownClass(cls):
        cls.client.__exit__(None, None, None)
        ops_store.get_engine().dispose()
        _temp.cleanup()

    def setUp(self):
        self.headers = self.session("manager")
        response = self.client.post("/reset", headers=self.headers)
        self.assertEqual(response.status_code, 200, response.text)

    def session(self, role):
        response = self.client.post("/auth/login", json={"email": "test@example.com", "password": os.environ["DEMO_PASSWORD"], "role": role})
        self.assertEqual(response.status_code, 200, response.text)
        return {"Authorization": "Bearer " + response.json()["token"], "x-role": role}

    def test_private_reads_require_authentication(self):
        for path in ["/state", "/dashboard", "/audit", "/connectors"]:
            with self.subTest(path=path):
                self.assertEqual(self.client.get(path).status_code, 401)

    def test_expired_and_tampered_sessions_rejected(self):
        for token in [auth.sign_payload({"role": "manager", "exp": time.time() - 5}), self.headers["Authorization"].split()[1] + "bad"]:
            self.assertEqual(self.client.get("/state", headers={"Authorization": "Bearer " + token}).status_code, 401)

    def test_role_header_cannot_elevate_access(self):
        headers = self.session("waiter")
        self.assertEqual(self.client.post("/reset", headers=headers).status_code, 403)
        headers["x-role"] = "manager"
        self.assertEqual(self.client.post("/reset", headers=headers).status_code, 403)
        del headers["x-role"]
        self.assertEqual(self.client.post("/events", headers=headers, json={"event_type": "entrance_camera", "payload": {"group_size": 3}}).status_code, 403)

    def test_dashboard_is_one_consistent_snapshot(self):
        response = self.client.get("/dashboard", headers=self.headers)
        self.assertEqual(response.status_code, 200, response.text)
        self.assertEqual(len(response.json()["state"]["tables"]), 14)
        self.assertIn("tasks", response.json()["decision"])
        self.assertIn("orders", response.json()["orders"])
        self.assertEqual(response.headers["Cache-Control"], "no-store")

    def test_concurrent_updates_are_not_lost(self):
        before = self.client.get("/state", headers=self.headers).json()["current_time"]
        with ThreadPoolExecutor(max_workers=4) as pool:
            results = list(pool.map(lambda _: self.client.post("/tick?minutes=1", headers=self.headers).status_code, range(4)))
        self.assertEqual(results, [200] * 4)
        after = self.client.get("/state", headers=self.headers).json()["current_time"]
        from datetime import datetime
        self.assertEqual((datetime.fromisoformat(after) - datetime.fromisoformat(before)).total_seconds(), 240)

    def test_aggregate_restores_process_state_and_kitchen(self):
        # Simulate a different worker with empty in-memory state.
        import runtime_state
        import simulation
        with ops_store.unit_of_work():
            runtime_state.restore()
            KITCHEN.create_order("T1", None, ["water"])
            runtime_state.persist()
        KITCHEN.__init__()
        simulation.get_simulator().state.tables.clear()
        response = self.client.get("/dashboard", headers=self.headers)
        self.assertEqual(response.status_code, 200, response.text)
        self.assertEqual(len(response.json()["orders"]["orders"]), 1)
        self.assertEqual(len(response.json()["state"]["tables"]), 14)

    def test_rollback_does_not_publish_partial_writes(self):
        with self.assertRaises(RuntimeError):
            with ops_store.unit_of_work():
                ops_store.set_settings("rollback_probe", "should-not-exist")
                raise RuntimeError("abort operation")
        self.assertIsNone(ops_store.get_settings("rollback_probe"))

    def test_health_does_not_disclose_connection_details(self):
        response = self.client.get("/health/db")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(set(response.json()), {"ok", "dialect", "database_url_configured"})
        self.assertNotIn("safe_url", response.text)

    def test_missing_auth_configuration_fails_closed(self):
        with patch("backend.authentication_configured", return_value=False):
            self.assertEqual(self.client.post("/auth/login", json={"email": "test@example.com", "password": "anything"}).status_code, 503)

    def test_database_failure_returns_safe_retryable_error(self):
        with patch("runtime_state._initialize", side_effect=ValueError("private-database-password")):
            response = self.client.get("/dashboard", headers=self.headers)
        self.assertEqual(response.status_code, 503)
        self.assertNotIn("private-database-password", response.text)

    def test_camera_policy_allows_own_camera(self):
        self.assertIn("camera=(self)", self.client.get("/health/db").headers["Permissions-Policy"])

    def test_invalid_order_and_empty_training_are_actionable(self):
        response = self.client.post("/orders/transition", headers=self.headers, json={"order_id": "missing", "status": "FOOD_READY"})
        self.assertEqual(response.status_code, 404)
        self.assertEqual(self.client.post("/vision/brain/train", headers=self.headers).status_code, 409)

    def test_invalid_workload_is_rejected_without_advancing_state(self):
        before = self.client.get("/state", headers=self.headers).json()["current_time"]
        self.assertEqual(self.client.post("/tick?minutes=-1", headers=self.headers).status_code, 422)
        self.assertEqual(self.client.post("/model/train-simulated?rows=999999", headers=self.headers).status_code, 422)
        self.assertEqual(self.client.get("/state", headers=self.headers).json()["current_time"], before)
        events = self.client.get("/audit", headers=self.headers).json()["events"]
        self.assertTrue(any(event["event_type"] == "event_rejected" for event in events))


class DatabaseUrlTests(unittest.TestCase):
    def test_supported_postgres_urls_select_installed_driver(self):
        for scheme in ["postgres", "postgresql", "postgresql+psycopg", "postgresql+psycopg2"]:
            with patch.dict(os.environ, {"DATABASE_URL": f"{scheme}://user:encoded%26password@localhost/database"}):
                engine = ops_store.make_engine()
                self.assertEqual(engine.url.drivername, "postgresql+psycopg")
                self.assertEqual(engine.url.password, "encoded&password")
                engine.dispose()

    def test_serverless_never_silently_uses_ephemeral_sqlite(self):
        with patch.dict(os.environ, {"VERCEL": "1", "DATABASE_URL": ""}):
            with self.assertRaises(ValueError):
                ops_store.make_engine()

    def test_transaction_pooler_does_not_use_named_prepared_statements(self):
        with patch.dict(os.environ, {"DATABASE_URL": "postgresql://user:password@localhost/database"}):
            engine = ops_store.make_engine()
            with patch.object(engine.dialect, "connect", side_effect=RuntimeError("connection intercepted")) as connect:
                with self.assertRaises(RuntimeError):
                    engine.connect()
                self.assertIsNone(connect.call_args.kwargs["prepare_threshold"])
            engine.dispose()


if __name__ == "__main__":
    unittest.main()
