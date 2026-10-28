import React from "react";
import { AlertTriangle, Loader2, ShieldCheck } from "lucide-react";

export function MetricCard({ label, value, detail, icon: Icon, tone = "blue" }) {
  return (
    <article className={`metric-card tone-${tone}`}>
      <div className="metric-icon"><Icon size={19} /></div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

export function StatusBadge({ children, tone = "blue" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function RiskList({ alerts }) {
  if (!alerts.length) return <EmptyState icon={ShieldCheck} title="No overload detected" text="Queue, kitchen, and floor risk are within target range." />;
  return (
    <div className="risk-list">
      {alerts.map((alert, index) => (
        <div className="risk-card" key={`${alert.title}-${index}`}>
          <AlertTriangle size={18} />
          <div>
            <b>{alert.level}: {alert.title}</b>
            <p>{alert.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Detail({ label, value }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}

export function Journey({ client }) {
  const stages = ["ENTRY", "WAIT", "SEATED", "ORDER", "FOOD", "EXIT"];
  const activeIndex = Math.max(0, stages.indexOf(client.status));
  return (
    <div className="journey">
      {stages.map((stage, index) => (
        <span key={stage} className={index <= activeIndex ? "done" : ""}>{stage}</span>
      ))}
    </div>
  );
}

export function EmptyState({ icon: Icon, title, text }) {
  return (
    <div className="empty-state">
      <Icon size={24} />
      <b>{title}</b>
      <p>{text}</p>
    </div>
  );
}

export function Skeleton({ label }) {
  return (
    <div className="skeleton" role="status">
      <Loader2 className="spin" />
      <span>{label}</span>
    </div>
  );
}
