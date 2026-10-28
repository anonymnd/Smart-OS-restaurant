import React, { useState } from "react";
import { KeyRound, Loader2, Lock, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import { roles } from "../lib/navigation.js";
import { api } from "../lib/api.js";

export function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [role, setRole] = useState("manager");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const auth = await api("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: form.email, password: form.password, role })
      });
      setLoading(false);
      const selected = roles.find((item) => item.id === role);
      onLogin({ name: selected.label, role: selected.label, roleId: role, email: form.email, token: auth.token, expiresAt: auth.expires_at });
    } catch (err) {
      setLoading(false);
      setError(err.message || "Sign in failed");
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-visual" aria-label="Restaurant operations preview">
        <div className="auth-map-grid">
          {Array.from({ length: 11 }).map((_, index) => (
            <span
              key={index}
              className={`auth-table ${index % 5 === 0 ? "hot" : index % 3 === 0 ? "warn" : "ok"}`}
              style={{ "--x": `${12 + (index % 4) * 22}%`, "--y": `${14 + Math.floor(index / 4) * 27}%` }}
            />
          ))}
          <span className="auth-route" />
        </div>
        <div className="auth-copy">
          <span className="eyebrow"><Sparkles size={14} /> Real-time decision engine</span>
          <h1>Smart Restaurant OS</h1>
          <p>Operate the dining room as a living system: prioritize work, assign staff, detect overload, and keep every guest journey visible.</p>
        </div>
      </section>
      <section className="auth-panel">
        <div className="brand-mark"><Utensils size={22} /> SROS</div>
        <h2>Sign in to operations</h2>
        <p className="muted">Sign in with your workspace access details.</p>
        <form onSubmit={submit} className="auth-form">
          <label>
            Email
            <div className="input-with-icon">
              <KeyRound size={17} />
              <input type="email" autoComplete="username" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </label>
          <label>
            Password
            <div className="input-with-icon">
              <Lock size={17} />
              <input type="password" autoComplete="current-password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
          </label>
          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? <Loader2 className="spin" size={18} /> : <ShieldCheck size={18} />}
            Enter command center
          </button>
          {error ? <p className="form-error" role="alert">{error}</p> : null}
        </form>
        <div className="role-picker">
          {roles.map((item) => (
            <button key={item.id} aria-pressed={role === item.id} className={role === item.id ? "selected" : ""} onClick={() => setRole(item.id)}>
              <b>{item.label}</b>
              <span>{item.description}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
