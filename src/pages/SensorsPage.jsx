import React, { useState } from "react";
import { ChevronRight, DoorOpen, Camera, Sparkles, Wifi } from "lucide-react";
import { StatusBadge, Detail } from "../components/ui.jsx";

export function SensorsPage({ state, decision, modelStatus, sensorFeed, connectors, actions }) {
  const [connector, setConnector] = useState({ provider: "axis", name: "Entrance camera", endpoint: "http://camera.local/local/tvpc/.api?live-sum.json", secret: "", enabled: true });
  return (
    <div className="page-grid sensors-grid">
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Camera & Sensor Hub</h2>
            <p>Use simulated sensors now, then connect Axis, OpenDataCam, or webhook-based analytics later.</p>
          </div>
        </div>
        <div className="sensor-actions">
          <button className="primary-button" onClick={() => actions.simulateSensors()}><Wifi size={17} /> Run sensor scan</button>
          <button onClick={() => actions.trainModel()}><Sparkles size={16} /> Train simulated model</button>
          <button onClick={() => actions.event("entrance_camera", { group_size: 4 })}><DoorOpen size={16} /> Test arrival event</button>
        </div>
        <h3 className="section-title">Connector Setup</h3>
        <div className="connector-form">
          <label className="field">Provider
            <select value={connector.provider} onChange={(e) => setConnector({ ...connector, provider: e.target.value })}>
              <option value="axis">Axis People Counter</option>
              <option value="opendatacam">OpenDataCam</option>
              <option value="camlytics">Camlytics webhook</option>
              <option value="custom">Custom webhook</option>
            </select>
          </label>
          <label className="field">Name
            <input value={connector.name} onChange={(e) => setConnector({ ...connector, name: e.target.value })} />
          </label>
          <label className="field">Endpoint
            <input value={connector.endpoint} onChange={(e) => setConnector({ ...connector, endpoint: e.target.value })} />
          </label>
          <label className="field">Secret/API key
            <input value={connector.secret} onChange={(e) => setConnector({ ...connector, secret: e.target.value })} placeholder="stored locally in SQLite" />
          </label>
          <div className="quick-actions">
            <button onClick={() => actions.saveConnector(connector)}>Save connector</button>
            <button onClick={() => actions.testConnector(connector)}>Test connection</button>
          </div>
        </div>
        <h3 className="section-title">AI Model</h3>
        <div className="detail-list">
          <Detail label="Model" value={modelStatus?.status?.model_name || "Loading"} />
          <Detail label="Mode" value={modelStatus?.status?.mode || "transparent scorer"} />
          <Detail label="Training rows" value={modelStatus?.status?.training_rows ?? 0} />
          <Detail label="Validation accuracy" value={modelStatus?.status?.validation_accuracy ?? "not trained"} />
          <Detail label="Current risk" value={decision?.prediction?.risk_label || "LOW"} />
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Configured Connectors</h2></div>
        <div className="event-log">
          {(connectors?.connectors || []).map((item) => (
            <div className="event-item" key={item.id}>
              <StatusBadge tone={item.enabled ? "green" : "amber"}>{item.provider}</StatusBadge>
              <code>{item.name} - {item.endpoint}</code>
              <small>{item.last_status}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Live Sensor Feed</h2></div>
        <div className="event-log">
          {(sensorFeed?.events || []).slice(0, 20).map((event) => (
            <div className="event-item" key={event.id}>
              <StatusBadge tone={event.source === "entrance_camera" ? "blue" : "green"}>{event.source}</StatusBadge>
              <code>{event.event_type} - {JSON.stringify(event.payload)}</code>
              <small>{Math.round(event.confidence * 100)}%</small>
            </div>
          ))}
        </div>
      </section>
      <section className="panel full">
        <div className="panel-header"><h2>Supported Real Integrations</h2></div>
        <div className="integration-grid">
          {(modelStatus?.camera_integrations || []).map((item) => (
            <article className="integration-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.best_for}</p>
              <span>{item.integration}</span>
              <a href={item.url} target="_blank" rel="noreferrer">Documentation <ChevronRight size={14} /></a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
