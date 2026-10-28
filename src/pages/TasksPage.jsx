import React from "react";
import { ListChecks } from "lucide-react";
import { EmptyState } from "../components/ui.jsx";
import { TaskCard } from "../components/TaskCard.jsx";

export function TasksPage({ decision, actions }) {
  const tasks = decision?.tasks || [];
  return (
    <section className="panel full">
      <div className="panel-header">
        <div>
          <h2>Decision Queue</h2>
          <p>Every generated task has an explanation and an assigned nearest available staff member.</p>
        </div>
      </div>
      <div className="task-stack">
        {tasks.length ? tasks.map((task, i) => <TaskCard key={task.id} task={task} index={i + 1} onApply={actions.completeTask} onAccept={actions.acceptTask} onStart={actions.startTask} />) : <EmptyState icon={ListChecks} title="No actions pending" text="Run the simulation or add an entrance event." />}
      </div>
    </section>
  );
}
