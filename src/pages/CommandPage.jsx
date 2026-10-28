import React from "react";
import { Activity, AlertTriangle, Check, ClipboardCheck, DoorOpen, Gauge, Play, RefreshCcw, Route, Sparkles, Users, Wifi } from "lucide-react";
import { priorityTone } from "../lib/operations.js";
import { MetricCard, StatusBadge, RiskList, EmptyState } from "../components/ui.jsx";
import { OperationsMap } from "../components/OperationsMap.jsx";
import { TaskCard } from "../components/TaskCard.jsx";

export function CommandPage({ state, decision, selectedTable, setSelectedTable, actions }) {
  const metrics = decision?.metrics || {};
  const topTasks = decision?.tasks || [];
  const nextTask = topTasks[0];
  const prediction = decision?.prediction;
  return (
    <div className="page-grid tablet-command-grid">
      <section className="next-action-panel">
        <div className="next-action-top">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> Operations assistant</span>
            <h2>{nextTask ? nextTask.title : "The floor is under control"}</h2>
          </div>
          <StatusBadge tone={nextTask ? priorityTone(nextTask.priority_level) : "green"}>
            {nextTask ? nextTask.priority_level : "READY"}
          </StatusBadge>
        </div>
        {nextTask ? (
          <>
            <p className="assistant-copy">{nextTask.reason}</p>
            <div className="assistant-tiles">
              <span><Users size={18} /> Assigned to {nextTask.assigned_staff_id || "nearest free staff"}</span>
              <span><Route size={18} /> {nextTask.walking_distance ?? "-"} cells walking</span>
              <span><Gauge size={18} /> Score {nextTask.priority_score}</span>
            </div>
            <div className="primary-actions">
              <button className="confirm-big" onClick={() => actions.completeTask(nextTask.id, nextTask.assigned_staff_id)}><Check size={22} /> Done</button>
              <button className="secondary-big" onClick={() => actions.tick(1)}><Play size={20} /> Simulate 1 min</button>
              <button className="secondary-big" onClick={() => actions.simulateSensors()}><Wifi size={20} /> Read sensors</button>
            </div>
          </>
        ) : (
          <>
            <p className="assistant-copy">No urgent action is pending. Keep the tablet open and let the system watch arrivals, waiting time, and table states.</p>
            <div className="primary-actions">
              <button className="confirm-big" onClick={() => actions.simulateSensors()}><Wifi size={22} /> Read sensors</button>
              <button className="secondary-big" onClick={() => actions.event("entrance_camera", { group_size: 3 })}><DoorOpen size={20} /> Add arrival</button>
            </div>
          </>
        )}
      </section>
      <section className="metrics-grid full-width">
        <MetricCard label="Active clients" value={metrics.active_clients ?? 0} detail={`${metrics.occupancy_pct ?? 0}% occupancy`} icon={Users} tone="blue" />
        <MetricCard label="Waiting groups" value={metrics.waiting_groups ?? 0} detail="Entrance camera queue" icon={DoorOpen} tone="amber" />
        <MetricCard label="Delayed tables" value={metrics.delayed_tables ?? 0} detail="SLA risk count" icon={AlertTriangle} tone="red" />
        <MetricCard label="AI risk" value={prediction?.risk_label || "LOW"} detail={prediction?.recommendation || "Monitoring floor"} icon={Activity} tone={prediction?.risk_label === "HIGH" ? "red" : "green"} />
      </section>
      <section className="panel wide">
        <div className="panel-header">
          <div>
            <h2>Floor Snapshot</h2>
            <p>Tap a table only when you need details. Colors show what needs attention.</p>
          </div>
          <div className="button-group">
            <button onClick={() => actions.tick(1)}><Play size={16} /> 1m</button>
            <button onClick={() => actions.tick(5)}><RefreshCcw size={16} /> 5m</button>
          </div>
        </div>
        <OperationsMap state={state} selectedTable={selectedTable} setSelectedTable={setSelectedTable} />
      </section>
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Up Next</h2>
            <p>The next few actions after the top recommendation.</p>
          </div>
        </div>
        <div className="task-stack">
          {topTasks.slice(1, 5).length ? topTasks.slice(1, 5).map((task, i) => <TaskCard key={task.id} task={task} index={i + 2} onApply={actions.completeTask} onAccept={actions.acceptTask} onStart={actions.startTask} compact />) : <EmptyState icon={ClipboardCheck} title="Nothing else pending" text="The assistant will surface work when sensors or timers detect it." />}
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Risk Monitor</h2></div>
        <RiskList alerts={decision?.alerts || []} />
      </section>
      <details className="panel simulation-tools">
        <summary>Explore a service scenario</summary>
        <p className="muted">Scenarios change the current simulation. Choose one when you’re ready to try it.</p>
        <div className="scenario-grid">
          <button onClick={() => actions.runScenario("quiet_morning")}>Quiet morning</button>
          <button onClick={() => actions.runScenario("lunch_rush")}>Lunch rush</button>
          <button onClick={() => actions.runScenario("understaffed_evening")}>Understaffed</button>
          <button onClick={() => actions.runScenario("kitchen_bottleneck")}>Kitchen bottleneck</button>
          <button onClick={() => actions.runScenario("big_group_arrival")}>Big group</button>
          <button onClick={() => actions.runScenario("dirty_table_backlog")}>Dirty backlog</button>
        </div>
      </details>
    </div>
  );
}
