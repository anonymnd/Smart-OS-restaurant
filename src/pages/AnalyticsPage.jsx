import React, { useMemo } from "react";
import { Activity, CalendarClock, RefreshCcw, Sparkles } from "lucide-react";
import { minutesSince, stateColors, stateLabels } from "../lib/operations.js";
import { MetricCard } from "../components/ui.jsx";

export function AnalyticsPage({ state, decision }) {
  const metrics = decision?.metrics || {};
  const lifecycle = state?.clients || [];
  const stateCounts = useMemo(() => {
    const counts = {};
    state?.tables?.forEach((table) => { counts[table.state] = (counts[table.state] || 0) + 1; });
    return counts;
  }, [state]);

  return (
    <div className="page-grid analytics-grid">
      <section className="metrics-grid full-width">
        <MetricCard label="Turnover rate" value={metrics.table_turnover_rate_per_hour ?? 0} detail="completed tables per hour" icon={RefreshCcw} tone="green" />
        <MetricCard label="Congestion forecast" value={metrics.upcoming_congestion || "LOW"} detail="next 10-15 minutes" icon={Activity} tone="red" />
        <MetricCard label="AI risk" value={decision?.prediction?.risk_label || "LOW"} detail={decision?.prediction?.recommendation || "Monitoring"} icon={Sparkles} tone={decision?.prediction?.risk_label === "HIGH" ? "red" : "green"} />
        <MetricCard label="Peak signal" value={metrics.peak_hour_signal || "Normal"} detail="calendar-aware context" icon={CalendarClock} tone="amber" />
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Table State Mix</h2></div>
        <div className="bars">
          {Object.entries(stateCounts).map(([key, value]) => (
            <div className="bar-row" key={key}>
              <span>{stateLabels[key]}</span>
              <div><i style={{ width: `${(value / Math.max(1, state.tables.length)) * 100}%`, background: stateColors[key] }} /></div>
              <b>{value}</b>
            </div>
          ))}
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Customer Lifecycle</h2></div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Client</th><th>Group</th><th>Table</th><th>Status</th><th>Wait</th></tr>
            </thead>
            <tbody>
              {lifecycle.slice(-12).map((client) => (
                <tr key={client.client_id}>
                  <td>C{client.client_id}</td>
                  <td>{client.group_size}</td>
                  <td>{client.table_id || "-"}</td>
                  <td>{client.status}</td>
                  <td>{minutesSince(client.arrival_time, client.seated_at || state.current_time).toFixed(1)}m</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
