import React, { useEffect, useState } from "react";
import { Edit3, Map } from "lucide-react";
import { minutesSince, stateLabels } from "../lib/operations.js";
import { Detail, Journey, EmptyState } from "../components/ui.jsx";
import { OperationsMap } from "../components/OperationsMap.jsx";

export function DigitalTwinPage({ state, selectedTable, setSelectedTable, actions }) {
  const table = state?.tables?.find((item) => item.id === selectedTable) || state?.tables?.[0];
  const client = table?.client_id ? state.clients.find((item) => item.client_id === table.client_id) : null;
  const [layoutDraft, setLayoutDraft] = useState({ x: 0, y: 0, capacity: 2 });
  const { id, x, y, capacity } = table || {};
  useEffect(() => {
    if (id) setLayoutDraft({ x, y, capacity });
  }, [id, x, y, capacity]);
  return (
    <div className="page-grid twin-grid">
      <section className="panel wide">
        <div className="panel-header">
          <div>
            <h2>Restaurant Digital Twin</h2>
            <p>2D grid layout with entrance, waiting area, service zone, tables, and staff.</p>
          </div>
        </div>
        <OperationsMap state={state} selectedTable={selectedTable} setSelectedTable={setSelectedTable} />
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Selected Table</h2></div>
        {table ? (
          <div className="detail-list">
            <Detail label="Table" value={table.id} />
            <Detail label="State" value={stateLabels[table.state]} />
            <Detail label="Capacity" value={table.capacity} />
            <Detail label="Current client" value={table.client_id ? `C${table.client_id}` : "None"} />
            <Detail label="Stage timer" value={`${minutesSince(table.state_started_at, state.current_time).toFixed(1)}m`} />
            <Detail label="Last action" value={`${minutesSince(table.last_action_at, state.current_time).toFixed(1)}m ago`} />
          </div>
        ) : <EmptyState icon={Map} title="No table selected" text="Select a table from the map." />}
        {client && (
          <>
            <h3 className="section-title">Customer Journey</h3>
            <Journey client={client} />
          </>
        )}
        {table && (
          <>
          <h3 className="section-title">Layout Editor</h3>
          <div className="layout-editor">
            <label className="field">X<input type="number" value={layoutDraft.x} onChange={(e) => setLayoutDraft({ ...layoutDraft, x: Number(e.target.value) })} /></label>
            <label className="field">Y<input type="number" value={layoutDraft.y} onChange={(e) => setLayoutDraft({ ...layoutDraft, y: Number(e.target.value) })} /></label>
            <label className="field">Capacity<input type="number" value={layoutDraft.capacity} onChange={(e) => setLayoutDraft({ ...layoutDraft, capacity: Number(e.target.value) })} /></label>
            <button className="primary-button" onClick={() => actions.updateLayout({ table_id: table.id, ...layoutDraft })}><Edit3 size={16} /> Save table layout</button>
          </div>
          <div className="quick-actions">
            <button onClick={() => actions.event("order_taken", { table_id: table.id })}>Order taken</button>
            <button onClick={() => actions.event("food_served", { table_id: table.id })}>Food served</button>
            <button onClick={() => actions.event("table_finished", { table_id: table.id })}>Finished</button>
            <button onClick={() => actions.event("table_cleaned", { table_id: table.id })}>Cleaned</button>
          </div>
          </>
        )}
      </section>
    </div>
  );
}
