import React from "react";
import { Check, Coffee, Gauge, Route } from "lucide-react";
import { StatusBadge, EmptyState } from "../components/ui.jsx";

export function StaffPage({ state, decision, actions }) {
  const tasks = decision?.tasks || [];
  return (
    <div className="page-grid staff-grid">
      {state?.staff?.map((member) => {
        const task = tasks.find((item) => item.assigned_staff_id === member.id);
        const busy = member.busy_until && new Date(member.busy_until) > new Date(state.current_time);
        return (
          <section className="tablet-card" key={member.id}>
            <div className="tablet-top">
              <div>
                <span className="page-kicker">{member.id}</span>
                <h2>{member.name}</h2>
              </div>
              <StatusBadge tone={busy ? "amber" : "green"}>{busy ? "BUSY" : "READY"}</StatusBadge>
            </div>
            {task ? (
              <div className="next-task">
                <span>Next best action</span>
                <strong>{task.title}</strong>
                <p>{task.reason}</p>
                <div className="task-meta">
                  <span><Route size={14} /> {task.walking_distance} cells</span>
                  <span><Gauge size={14} /> {task.priority_score}</span>
                </div>
                <div className="quick-actions">
                  <button onClick={() => actions.acceptTask(task.id, member.id)}>Accept</button>
                  <button onClick={() => actions.startTask(task.id, member.id)}>Start</button>
                  <button className="primary-button" onClick={() => actions.completeTask(task.id, member.id)}><Check size={17} /> Done</button>
                </div>
              </div>
            ) : (
              <EmptyState icon={Coffee} title="No assigned task" text="This waiter is available for the next optimization cycle." />
            )}
          </section>
        );
      })}
    </div>
  );
}
