import React, { useEffect, useState } from "react";
import { AlertTriangle, ClipboardCheck, RefreshCcw, Settings, ShieldCheck, Utensils, XCircle } from "lucide-react";
import { MetricCard, StatusBadge, Detail } from "../components/ui.jsx";

export function SettingsPage({ autoTick, setAutoTick, actions, error, staffing, audit, sla, report }) {
  const [slaDraft, setSlaDraft] = useState(sla || {});
  const [savedSla, setSavedSla] = useState(JSON.stringify(sla));
  useEffect(() => {
    const next = JSON.stringify(sla);
    if (next !== savedSla) {
      setSlaDraft(sla || {});
      setSavedSla(next);
    }
  }, [sla, savedSla]);
  return (
    <div className="page-grid settings-grid">
      <section className="panel">
        <div className="panel-header"><h2>System Settings</h2></div>
        <label className="toggle-row">
          <input type="checkbox" checked={autoTick} onChange={(e) => setAutoTick(e.target.checked)} />
          <span>Auto-advance simulation every 8 seconds</span>
        </label>
        <div className="quick-actions">
          <button onClick={() => actions.refresh()}><RefreshCcw size={16} /> Refresh state</button>
          <button onClick={() => actions.reset()}><XCircle size={16} /> Reset digital twin</button>
        </div>
        {error && <p className="error-text">{error}</p>}
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Staffing Planner</h2></div>
        <div className="detail-list">
          <Detail label="Current staff" value={staffing?.current_staff ?? "-"} />
          <Detail label="Recommended staff" value={staffing?.recommended_staff ?? "-"} />
          <Detail label="Gap" value={staffing?.gap ?? "-"} />
          <Detail label="Action" value={staffing?.action || "Loading"} />
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>SLA Thresholds</h2></div>
        <div className="layout-editor">
          {["seat_wait_max_min", "order_wait_max_min", "food_wait_max_min", "dirty_table_max_min", "critical_task_score"].map((key) => (
            <label className="field" key={key}>{key.replaceAll("_", " ")}
              <input type="number" value={slaDraft[key] ?? ""} onChange={(e) => setSlaDraft({ ...slaDraft, [key]: Number(e.target.value) })} />
            </label>
          ))}
          <button className="primary-button" onClick={() => actions.saveSla(slaDraft)}>Save SLA settings</button>
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Workspace updates</h2></div>
        <p className="muted">The workspace refreshes automatically while this tab is open. Your changes are saved before the view updates.</p>
        <div className="detail-list">
          <Detail label="Refresh interval" value="5 seconds" />
          <Detail label="Session" value="Sign out when you finish your shift" />
        </div>
      </section>
      <section className="panel full">
        <div className="panel-header"><h2>Shift Report</h2></div>
        <div className="metrics-grid">
          <MetricCard label="Audit events" value={report?.audit_events ?? 0} detail="captured actions" icon={ClipboardCheck} tone="blue" />
          <MetricCard label="Invalid events" value={report?.rejected_events ?? 0} detail="blocked by validator" icon={ShieldCheck} tone="green" />
          <MetricCard label="Open orders" value={report?.kitchen?.open_orders ?? 0} detail="kitchen board" icon={Utensils} tone="amber" />
          <MetricCard label="Delayed tickets" value={report?.kitchen?.delayed_orders ?? 0} detail="kitchen SLA" icon={AlertTriangle} tone="red" />
        </div>
      </section>
      <section className="panel full">
        <div className="panel-header"><h2>Audit Trail</h2></div>
        <div className="event-log">
          {(audit?.events || []).slice(0, 30).map((item) => (
            <div className="event-item" key={item.id}>
              <StatusBadge tone="blue">{item.event_type}</StatusBadge>
              <code>{JSON.stringify(item.payload)}</code>
              <small>{item.actor}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
