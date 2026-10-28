import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { api, readSession, saveSession } from "../src/lib/api.js";

const values = new Map();
globalThis.localStorage = {
  getItem: (key) => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value),
  removeItem: (key) => values.delete(key)
};
let expired;
globalThis.window = { dispatchEvent: () => { expired = true; } };
beforeEach(() => { values.clear(); expired = false; });

test("expired or corrupt stored sessions require sign-in", () => {
  saveSession({ token: "old", expiresAt: 1 });
  assert.equal(readSession(), null);
  values.set("sros-user", "broken json");
  assert.equal(readSession(), null);
});

test("custom headers preserve session authorization and content type", async () => {
  saveSession({ token: "session", roleId: "waiter", expiresAt: Date.now() / 1000 + 300 });
  globalThis.fetch = async (url, request) => {
    assert.equal(request.headers.Authorization, "Bearer session");
    assert.equal(request.headers["Content-Type"], "application/json");
    assert.equal(request.headers["x-role"], "waiter");
    return Response.json({ ok: true });
  };
  assert.deepEqual(await api("/orders", { method: "POST", headers: { "x-role": "waiter" } }), { ok: true });
});

test("unauthorized responses clear the session and notify the app", async () => {
  saveSession({ token: "invalid", roleId: "manager", expiresAt: Date.now() / 1000 + 300 });
  globalThis.fetch = async () => Response.json({ detail: "Session expired" }, { status: 401 });
  await assert.rejects(api("/dashboard"), /Session expired/);
  assert.equal(readSession(), null);
  assert.equal(expired, true);
});

test("structured validation errors show a readable message", async () => {
  globalThis.fetch = async () => Response.json({ detail: { message: "Table is already occupied" } }, { status: 409 });
  await assert.rejects(api("/events"), /Table is already occupied/);
});

test("proxy failures do not expose raw server responses", async () => {
  globalThis.fetch = async () => new Response("private stack trace", { status: 500 });
  await assert.rejects(api("/dashboard"), /temporarily unavailable/);
});
