import React from "react";
import { minutesSince, stateColors, stateLabels } from "../lib/operations.js";
import { Skeleton } from "./ui.jsx";

export function OperationsMap({ state, selectedTable, setSelectedTable }) {
  if (!state) return <Skeleton label="Loading digital twin" />;
  return (
    <div className="map-frame">
      <div className="restaurant-map">
        {state.zones.map((zone) => (
          <div
            key={zone.id}
            className="zone-block"
            style={{
              left: `${(zone.x / state.layout_width) * 100}%`,
              top: `${(zone.y / state.layout_height) * 100}%`,
              width: `${(zone.width / state.layout_width) * 100}%`,
              height: `${(zone.height / state.layout_height) * 100}%`
            }}
          >
            {zone.label}
          </div>
        ))}
        {state.tables.map((table) => {
          const age = minutesSince(table.state_started_at, state.current_time);
          const critical = ["WAITING_ORDER", "WAITING_FOOD", "NEEDS_CLEANING"].includes(table.state) && age > 8;
          return (
            <button
              key={table.id}
              className={`table-node ${selectedTable === table.id ? "selected" : ""} ${critical ? "critical" : ""}`}
              style={{
                left: `${(table.x / state.layout_width) * 100}%`,
                top: `${(table.y / state.layout_height) * 100}%`,
                background: stateColors[table.state]
              }}
              onClick={() => setSelectedTable(table.id)}
              title={`${table.id} ${stateLabels[table.state]}`}
            >
              <b>{table.id}</b>
              <span>{stateLabels[table.state]}</span>
              <small>{table.client_id ? `C${table.client_id}` : `${table.capacity} seats`}</small>
            </button>
          );
        })}
        {state.staff.map((staff) => (
          <span
            key={staff.id}
            className="staff-marker"
            style={{ left: `${(staff.x / state.layout_width) * 100}%`, top: `${(staff.y / state.layout_height) * 100}%` }}
            title={staff.name}
          >
            {staff.id}
          </span>
        ))}
      </div>
    </div>
  );
}
