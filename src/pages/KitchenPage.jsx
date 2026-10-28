import React, { useEffect, useState } from "react";
import { Utensils } from "lucide-react";
import { StatusBadge, Detail, EmptyState } from "../components/ui.jsx";

export function KitchenPage({ state, orders, actions }) {
  const [selectedTable, setSelectedTable] = useState("T1");
  const [items, setItems] = useState("chef special, water");
  const tables = state.tables;
  useEffect(() => {
    if (tables.length && !tables.find((table) => table.id === selectedTable)) setSelectedTable(tables[0].id);
  }, [tables, selectedTable]);
  return (
    <div className="page-grid kitchen-grid">
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>POS / Kitchen</h2>
            <p>Create tickets and move them through kitchen states.</p>
          </div>
        </div>
        <label className="field">Table
          <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
            {tables.map((table) => <option key={table.id}>{table.id}</option>)}
          </select>
        </label>
        <label className="field">Items
          <input value={items} onChange={(e) => setItems(e.target.value)} />
        </label>
        <button className="primary-button" onClick={() => actions.createOrder(selectedTable, items.split(",").map((item) => item.trim()).filter(Boolean))}>
          <Utensils size={17} /> Send order to kitchen
        </button>
        <h3 className="section-title">Kitchen Summary</h3>
        <div className="detail-list">
          <Detail label="Open orders" value={orders?.summary?.open_orders ?? 0} />
          <Detail label="Ready" value={orders?.summary?.ready_orders ?? 0} />
          <Detail label="Delayed" value={orders?.summary?.delayed_orders ?? 0} />
          <Detail label="Delivered" value={orders?.summary?.delivered_orders ?? 0} />
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Ticket Board</h2></div>
        <div className="task-stack">
          {(orders?.orders || []).map((order) => (
            <article className="order-card" key={order.order_id}>
              <div>
                <b>{order.order_id} - {order.table_id}</b>
                <p>{order.items.join(", ")}</p>
              </div>
              <StatusBadge tone={order.status === "DELAYED" ? "danger" : order.status === "FOOD_READY" ? "green" : "blue"}>{order.status}</StatusBadge>
              <div className="quick-actions">
                <button onClick={() => actions.transitionOrder(order.order_id, "PREP_STARTED")}>Prep</button>
                <button onClick={() => actions.transitionOrder(order.order_id, "FOOD_READY")}>Ready</button>
                <button onClick={() => actions.transitionOrder(order.order_id, "DELIVERED")}>Delivered</button>
                <button onClick={() => actions.transitionOrder(order.order_id, "DELAYED")}>Delayed</button>
              </div>
            </article>
          ))}
          {!(orders?.orders || []).length && <EmptyState icon={Utensils} title="No tickets" text="Seat a table and send an order to populate the kitchen board." />}
        </div>
      </section>
    </div>
  );
}
