import React from "react";
import { Check, Gauge, Route, Users } from "lucide-react";
import { priorityTone } from "../lib/operations.js";
import { StatusBadge } from "./ui.jsx";

export function TaskCard({ task, index, onApply, onAccept, onStart, compact = false }) {
  const tone = priorityTone(task.priority_level);
  const status = task.workflow?.status || "NEW";
  return (
    <article className={compact ? "task-row compact" : "task-row"}>
      <div className="task-rank">{index}</div>
      <div className="task-body">
        <div className="task-title">
          <span>{task.title}</span>
          <StatusBadge tone={tone}>{task.priority_level}</StatusBadge>
          <StatusBadge tone={status === "DONE" ? "green" : status === "IN_PROGRESS" ? "blue" : "amber"}>{status}</StatusBadge>
        </div>
        <p>{task.reason}</p>
        <div className="task-meta">
          <span><Route size={14} /> {task.walking_distance ?? "-"} cells</span>
          <span><Users size={14} /> {task.assigned_staff_id || "Unassigned"}</span>
          <span><Gauge size={14} /> {task.priority_score}</span>
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => onAccept(task.id, task.assigned_staff_id)}>Accept</button>
        <button onClick={() => onStart(task.id, task.assigned_staff_id)}>Start</button>
        <button className="action-button" onClick={() => onApply(task.id, task.assigned_staff_id)}>
          <Check size={16} />
          Done
        </button>
      </div>
    </article>
  );
}
