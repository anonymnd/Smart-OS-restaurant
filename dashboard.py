from __future__ import annotations

from dataclasses import asdict
from datetime import timezone

import pandas as pd
import streamlit as st

from decision_engine import icon_for_task
from models import PriorityLevel, TableState
from simulation import RestaurantSimulator, create_initial_state


st.set_page_config(
    page_title="Smart Restaurant OS",
    page_icon="SR",
    layout="wide",
    initial_sidebar_state="collapsed",
)


STATE_COLORS = {
    TableState.FREE.value: "#16a34a",
    TableState.ARRIVED.value: "#f59e0b",
    TableState.SEATED.value: "#eab308",
    TableState.WAITING_ORDER.value: "#f97316",
    TableState.ORDER_IN_PROGRESS.value: "#38bdf8",
    TableState.WAITING_FOOD.value: "#facc15",
    TableState.SERVED.value: "#22c55e",
    TableState.FINISHED.value: "#fb7185",
    TableState.NEEDS_CLEANING.value: "#dc2626",
}


def init() -> None:
    if "simulator" not in st.session_state:
        st.session_state.simulator = RestaurantSimulator(create_initial_state(seed=8), seed=8)
    if "last_decision" not in st.session_state:
        st.session_state.last_decision = st.session_state.simulator.engine.compute(st.session_state.simulator.state)


def css() -> None:
    st.markdown(
        """
        <style>
        .stApp { background: #f7f8fb; color: #111827; }
        [data-testid="stHeader"] { background: rgba(247,248,251,.92); }
        .metric-tile {
            border: 1px solid #dde3ee; background: #fff; border-radius: 8px;
            padding: 14px 16px; min-height: 92px; box-shadow: 0 1px 2px rgba(15,23,42,.04);
        }
        .metric-label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: .04em; }
        .metric-value { font-size: 30px; font-weight: 750; color: #0f172a; margin-top: 4px; }
        .metric-sub { font-size: 12px; color: #64748b; margin-top: 6px; }
        .map-shell { background: #fff; border: 1px solid #d8dee9; border-radius: 8px; padding: 16px; }
        .restaurant-map {
            position: relative; width: 100%; height: 600px; border-radius: 6px;
            background-image:
                linear-gradient(#e7ebf2 1px, transparent 1px),
                linear-gradient(90deg, #e7ebf2 1px, transparent 1px);
            background-size: 3.57% 4.55%;
            background-color: #fbfcfe;
            overflow: hidden;
        }
        .zone {
            position: absolute; border: 1px dashed #94a3b8; background: rgba(148,163,184,.13);
            color: #334155; font-size: 12px; font-weight: 700; display: flex;
            align-items: center; justify-content: center; border-radius: 6px;
        }
        .table-node {
            position: absolute; transform: translate(-50%, -50%); width: 74px; height: 58px;
            border-radius: 8px; border: 2px solid rgba(15,23,42,.18);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            color: white; box-shadow: 0 8px 18px rgba(15,23,42,.16);
        }
        .table-id { font-weight: 800; font-size: 15px; line-height: 16px; }
        .table-state { font-size: 9px; max-width: 64px; text-align: center; line-height: 10px; }
        .staff-dot {
            position: absolute; transform: translate(-50%, -50%); width: 34px; height: 34px; border-radius: 99px;
            background: #111827; color: white; display:flex; align-items:center; justify-content:center;
            font-size: 12px; font-weight: 800; border: 3px solid white; box-shadow: 0 5px 14px rgba(2,6,23,.24);
        }
        .task-card {
            border: 1px solid #d9e0eb; background: #fff; border-radius: 8px; padding: 13px 14px;
            margin-bottom: 10px; box-shadow: 0 1px 2px rgba(15,23,42,.04);
        }
        .task-title { font-size: 15px; color: #0f172a; font-weight: 760; }
        .task-meta { font-size: 12px; color: #64748b; margin-top: 5px; line-height: 1.35; }
        .badge {
            display: inline-block; padding: 2px 7px; border-radius: 999px; font-size: 11px;
            font-weight: 760; margin-right: 6px; border: 1px solid rgba(15,23,42,.08);
        }
        .critical { background: #fee2e2; color: #991b1b; }
        .high { background: #ffedd5; color: #9a3412; }
        .medium { background: #fef9c3; color: #854d0e; }
        .low { background: #dcfce7; color: #166534; }
        .alert { border-left: 4px solid #dc2626; background: #fff; padding: 12px; border-radius: 6px; margin-bottom: 8px; }
        .small-panel { border: 1px solid #d9e0eb; background: #fff; border-radius: 8px; padding: 12px; margin-bottom: 10px; }
        </style>
        """,
        unsafe_allow_html=True,
    )


def level_class(level: str) -> str:
    return {
        PriorityLevel.CRITICAL.value: "critical",
        PriorityLevel.HIGH.value: "high",
        PriorityLevel.MEDIUM.value: "medium",
        PriorityLevel.LOW.value: "low",
    }.get(level, "low")


def render_metrics(decision: dict) -> None:
    metrics = decision["metrics"]
    cols = st.columns(5)
    values = [
        ("Active Clients", metrics["active_clients"], f"{metrics['occupancy_pct']}% occupancy"),
        ("Waiting Groups", metrics["waiting_groups"], "Entrance camera queue"),
        ("Delayed Tables", metrics["delayed_tables"], "Beyond target thresholds"),
        ("Avg Wait", f"{metrics['avg_waiting_time_min']}m", metrics["peak_hour_signal"]),
        ("Congestion", metrics["upcoming_congestion"], "Prediction horizon: 10-15m"),
    ]
    for col, (label, value, sub) in zip(cols, values):
        col.markdown(
            f"""
            <div class="metric-tile">
              <div class="metric-label">{label}</div>
              <div class="metric-value">{value}</div>
              <div class="metric-sub">{sub}</div>
            </div>
            """,
            unsafe_allow_html=True,
        )


def render_map(simulator: RestaurantSimulator) -> None:
    state = simulator.state
    pieces = ['<div class="map-shell"><div class="restaurant-map">']
    for zone in state.zones:
        pieces.append(
            f"""
            <div class="zone" style="left:{zone.x/state.layout_width*100:.2f}%; top:{zone.y/state.layout_height*100:.2f}%;
            width:{zone.width/state.layout_width*100:.2f}%; height:{zone.height/state.layout_height*100:.2f}%;">{zone.label}</div>
            """
        )
    for table in state.tables:
        color = STATE_COLORS[table.state.value]
        client = f"C{table.client_id}" if table.client_id else f"{table.capacity} seats"
        pieces.append(
            f"""
            <div class="table-node" style="left:{table.x/state.layout_width*100:.2f}%; top:{table.y/state.layout_height*100:.2f}%; background:{color};">
              <div class="table-id">{table.id}</div>
              <div class="table-state">{table.state.value.replace("_", " ")}</div>
              <div class="table-state">{client}</div>
            </div>
            """
        )
    for staff in state.staff:
        pieces.append(
            f"""
            <div class="staff-dot" title="{staff.name}" style="left:{staff.x/state.layout_width*100:.2f}%; top:{staff.y/state.layout_height*100:.2f}%;">
            {staff.id}</div>
            """
        )
    pieces.append("</div></div>")
    st.markdown("".join(pieces), unsafe_allow_html=True)


def render_tasks(simulator: RestaurantSimulator, decision: dict) -> None:
    tasks = decision["tasks"][:8]
    if not tasks:
        st.info("No urgent action. The floor is stable.")
        return
    for index, task in enumerate(tasks, start=1):
        badge = level_class(task["priority_level"])
        staff = task["assigned_staff_id"] or "unassigned"
        distance = task["walking_distance"] if task["walking_distance"] is not None else "-"
        st.markdown(
            f"""
            <div class="task-card">
              <div class="task-title">{index}. {icon_for_task(task["task_type"])} · {task["title"]}</div>
              <div class="task-meta">
                <span class="badge {badge}">{task["priority_level"]}</span>
                score {task["priority_score"]} · staff {staff} · walk {distance}
              </div>
              <div class="task-meta">{task["reason"]}</div>
            </div>
            """,
            unsafe_allow_html=True,
        )
        if st.button("Confirm action", key=f"task-{task['id']}", use_container_width=True):
            st.session_state.last_decision = simulator.apply_task(task["id"])
            st.rerun()


def render_staff(simulator: RestaurantSimulator) -> None:
    for member in simulator.state.staff:
        busy_text = "available"
        if member.busy_until and member.busy_until > simulator.state.current_time:
            busy_text = f"busy until {member.busy_until.astimezone(timezone.utc).strftime('%H:%M:%S')} UTC"
        st.markdown(
            f"""
            <div class="small-panel">
              <b>{member.name}</b><br>
              Location: ({member.x}, {member.y})<br>
              Status: {busy_text}<br>
              Task: {member.current_task_id or "none"}
            </div>
            """,
            unsafe_allow_html=True,
        )


def render_alerts(decision: dict) -> None:
    alerts = decision["alerts"]
    if not alerts:
        st.success("No overload condition detected.")
        return
    for alert in alerts:
        st.markdown(
            f"""<div class="alert"><b>{alert["level"]}: {alert["title"]}</b><br>{alert["message"]}</div>""",
            unsafe_allow_html=True,
        )


def render_lifecycle(simulator: RestaurantSimulator) -> None:
    rows = []
    for client in simulator.state.clients[-12:]:
        rows.append(
            {
                "Client": f"C{client.client_id}",
                "Group": client.group_size,
                "Table": client.table_id or "-",
                "Status": client.status.value,
                "Arrived": client.arrival_time.strftime("%H:%M:%S"),
                "Wait Min": round(((client.seated_at or simulator.state.current_time) - client.arrival_time).total_seconds() / 60, 1),
            }
        )
    if rows:
        st.dataframe(pd.DataFrame(rows), use_container_width=True, hide_index=True)
    else:
        st.caption("No customers yet. Trigger arrivals or run simulation ticks.")


def sidebar_controls(simulator: RestaurantSimulator) -> None:
    with st.sidebar:
        st.header("Simulation")
        if st.button("Advance 1 minute", use_container_width=True):
            st.session_state.last_decision = simulator.tick(1)
            st.rerun()
        if st.button("Advance 5 minutes", use_container_width=True):
            st.session_state.last_decision = simulator.tick(5)
            st.rerun()
        group_size = st.slider("Manual arrival group size", 1, 8, 2)
        if st.button("Entrance camera: new group", use_container_width=True):
            st.session_state.last_decision = simulator.ingest_event("entrance_camera", {"group_size": group_size})
            st.rerun()
        st.divider()
        selected_table = st.selectbox("Manual staff event table", [table.id for table in simulator.state.tables])
        col_a, col_b = st.columns(2)
        if col_a.button("Order taken", use_container_width=True):
            st.session_state.last_decision = simulator.ingest_event("order_taken", {"table_id": selected_table})
            st.rerun()
        if col_b.button("Served", use_container_width=True):
            st.session_state.last_decision = simulator.ingest_event("food_served", {"table_id": selected_table})
            st.rerun()
        col_c, col_d = st.columns(2)
        if col_c.button("Finished", use_container_width=True):
            st.session_state.last_decision = simulator.ingest_event("table_finished", {"table_id": selected_table})
            st.rerun()
        if col_d.button("Cleaned", use_container_width=True):
            st.session_state.last_decision = simulator.ingest_event("table_cleaned", {"table_id": selected_table})
            st.rerun()
        st.divider()
        if st.button("Reset digital twin", use_container_width=True):
            st.session_state.simulator = RestaurantSimulator(create_initial_state(seed=8), seed=8)
            st.session_state.last_decision = st.session_state.simulator.engine.compute(st.session_state.simulator.state)
            st.rerun()


def main() -> None:
    init()
    css()
    simulator: RestaurantSimulator = st.session_state.simulator
    decision = simulator.engine.compute(simulator.state)
    st.session_state.last_decision = decision
    sidebar_controls(simulator)

    st.title("Smart Restaurant Operating System")
    st.caption("Real-time digital twin + IoT event stream + explainable operations decision engine")
    render_metrics(decision)

    left, right = st.columns([1.55, 1], gap="large")
    with left:
        st.subheader("Restaurant Digital Twin")
        render_map(simulator)
        st.subheader("Customer Lifecycle")
        render_lifecycle(simulator)
    with right:
        st.subheader("Priority Task Panel")
        render_tasks(simulator, decision)
        st.subheader("Staff Panel")
        render_staff(simulator)
        st.subheader("Overload & Risk")
        render_alerts(decision)

    with st.expander("Decision Engine Explainability"):
        st.json(decision["explainability"])
    with st.expander("Raw Digital Twin State"):
        st.json(asdict(simulator.state))


if __name__ == "__main__":
    main()
