import React, { useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  AreaChart,
  Bell,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Coffee,
  Command,
  DoorOpen,
  Edit3,
  Camera,
  Gauge,
  KeyRound,
  LayoutDashboard,
  ListChecks,
  Loader2,
  Lock,
  LogOut,
  Map,
  MonitorCog,
  Play,
  RefreshCcw,
  Route,
  Settings,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
  Users,
  Utensils,
  Wifi,
  XCircle
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://127.0.0.1:8000" : "");
const WS_URL = import.meta.env.VITE_WS_URL || (API_URL ? API_URL.replace(/^http/, "ws") : `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}`);

const navItems = [
  { id: "command", label: "Today", icon: Command },
  { id: "cameras", label: "Cameras", icon: Camera },
  { id: "map", label: "Floor", icon: Map },
  { id: "tasks", label: "Queue", icon: ListChecks },
  { id: "kitchen", label: "Kitchen", icon: Utensils },
  { id: "staff", label: "Tablet", icon: TabletSmartphone },
  { id: "sensors", label: "Sensors", icon: Wifi },
  { id: "analytics", label: "Insights", icon: AreaChart },
  { id: "settings", label: "Settings", icon: Settings }
];

const roleNav = {
  manager: ["command", "cameras", "map", "tasks", "kitchen", "staff", "sensors", "analytics", "settings"],
  host: ["command", "cameras", "map", "tasks", "sensors"],
  waiter: ["command", "tasks", "kitchen", "staff"],
  kitchen: ["command", "cameras", "tasks", "kitchen", "analytics"]
};

const roles = [
  { id: "manager", label: "Manager", description: "Full floor, staffing, sensors, settings" },
  { id: "host", label: "Host", description: "Arrivals, seating, queue, wait estimates" },
  { id: "waiter", label: "Waiter", description: "Assigned tasks and one-tap confirmations" },
  { id: "kitchen", label: "Kitchen", description: "Food-ready, delayed tickets, bottlenecks" }
];

const stateColors = {
  FREE: "#139a5a",
  ARRIVED: "#d97706",
  SEATED: "#d6a70f",
  WAITING_ORDER: "#e95f2a",
  ORDER_IN_PROGRESS: "#0ea5e9",
  WAITING_FOOD: "#c79504",
  SERVED: "#1f9d66",
  FINISHED: "#dc5b73",
  NEEDS_CLEANING: "#c72828"
};

const stateLabels = {
  FREE: "Free",
  ARRIVED: "Arrived",
  SEATED: "Seated",
  WAITING_ORDER: "Waiting order",
  ORDER_IN_PROGRESS: "Order progress",
  WAITING_FOOD: "Waiting food",
  SERVED: "Served",
  FINISHED: "Finished",
  NEEDS_CLEANING: "Needs cleaning"
};

function minutesSince(iso, currentIso) {
  if (!iso || !currentIso) return 0;
  return Math.max(0, (new Date(currentIso) - new Date(iso)) / 60000);
}

function priorityTone(level) {
  if (level === "CRITICAL") return "danger";
  if (level === "HIGH") return "orange";
  if (level === "MEDIUM") return "amber";
  return "green";
}

async function api(path, options = {}) {
  let session = null;
  try {
    session = JSON.parse(localStorage.getItem("sros-user") || "null");
  } catch {
    session = null;
  }
  const authHeaders = session?.token
    ? { Authorization: `Bearer ${session.token}`, "x-role": session.roleId }
    : {};
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...authHeaders, ...(options.headers || {}) },
    ...options
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.detail || `${res.status} ${res.statusText}`);
  }
  return res.json();
}

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "ops@smartrestaurant.ai", password: "demo123" });
  const [role, setRole] = useState("manager");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const auth = await api("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: form.email, password: form.password, role })
      });
      setLoading(false);
      const selected = roles.find((item) => item.id === role);
      onLogin({ name: selected.label, role: selected.label, roleId: role, email: form.email, token: auth.token, expiresAt: auth.expires_at });
    } catch (err) {
      setLoading(false);
      setError(err.message || "Sign in failed");
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-visual" aria-label="Restaurant operations preview">
        <div className="auth-map-grid">
          {Array.from({ length: 11 }).map((_, index) => (
            <span
              key={index}
              className={`auth-table ${index % 5 === 0 ? "hot" : index % 3 === 0 ? "warn" : "ok"}`}
              style={{ "--x": `${12 + (index % 4) * 22}%`, "--y": `${14 + Math.floor(index / 4) * 27}%` }}
            />
          ))}
          <span className="auth-route" />
        </div>
        <div className="auth-copy">
          <span className="eyebrow"><Sparkles size={14} /> Real-time decision engine</span>
          <h1>Smart Restaurant OS</h1>
          <p>Operate the dining room as a living system: prioritize work, assign staff, detect overload, and keep every guest journey visible.</p>
        </div>
      </section>
      <section className="auth-panel">
        <div className="brand-mark"><Utensils size={22} /> SROS</div>
        <h2>Sign in to operations</h2>
        <p className="muted">Demo authentication for manager, host, waiter, and kitchen roles.</p>
        <form onSubmit={submit} className="auth-form">
          <label>
            Email
            <div className="input-with-icon">
              <KeyRound size={17} />
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </label>
          <label>
            Password
            <div className="input-with-icon">
              <Lock size={17} />
              <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
          </label>
          <button className="primary-button" type="submit">
            {loading ? <Loader2 className="spin" size={18} /> : <ShieldCheck size={18} />}
            Enter command center
          </button>
          {error ? <p className="form-error">{error}</p> : null}
        </form>
        <div className="role-picker">
          {roles.map((item) => (
            <button key={item.id} className={role === item.id ? "selected" : ""} onClick={() => setRole(item.id)}>
              <b>{item.label}</b>
              <span>{item.description}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function Shell({ user, activePage, setActivePage, children, online, live, onLogout, onNotify }) {
  const visibleNav = navItems.filter((item) => (roleNav[user.roleId] || roleNav.manager).includes(item.id));
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><Utensils size={20} /></div>
          <div>
            <b>SROS</b>
            <span>Operations AI</span>
          </div>
        </div>
        <nav>
          {visibleNav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={activePage === item.id ? "nav-item active" : "nav-item"}
                onClick={() => setActivePage(item.id)}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <span className={online ? "status-dot online" : "status-dot offline"} />
          <span>{online ? `Backend online${live ? " + live" : ""}` : "Backend offline"}</span>
        </div>
      </aside>
      <section className="main-shell">
        <header className="topbar">
          <div>
            <span className="page-kicker">Live restaurant operating system</span>
            <h1>{navItems.find((item) => item.id === activePage)?.label || "Command"}</h1>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" title="Notifications" onClick={onNotify}><Bell size={18} /></button>
            <div className="user-pill">
              <span>{user.name}</span>
              <small>{user.role}</small>
            </div>
            <button className="icon-button" title="Log out" onClick={onLogout}><LogOut size={18} /></button>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
}

function MetricCard({ label, value, detail, icon: Icon, tone = "blue" }) {
  return (
    <article className={`metric-card tone-${tone}`}>
      <div className="metric-icon"><Icon size={19} /></div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

function StatusBadge({ children, tone = "blue" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

function OperationsMap({ state, selectedTable, setSelectedTable }) {
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

function TaskCard({ task, index, onApply, onAccept, onStart, compact = false }) {
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

function CommandPage({ state, decision, selectedTable, setSelectedTable, actions }) {
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
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Scenario Tests</h2>
            <p>Run realistic stress situations against the logic core.</p>
          </div>
        </div>
        <div className="scenario-grid">
          <button onClick={() => actions.runScenario("quiet_morning")}>Quiet morning</button>
          <button onClick={() => actions.runScenario("lunch_rush")}>Lunch rush</button>
          <button onClick={() => actions.runScenario("understaffed_evening")}>Understaffed</button>
          <button onClick={() => actions.runScenario("kitchen_bottleneck")}>Kitchen bottleneck</button>
          <button onClick={() => actions.runScenario("big_group_arrival")}>Big group</button>
          <button onClick={() => actions.runScenario("dirty_table_backlog")}>Dirty backlog</button>
        </div>
      </section>
    </div>
  );
}

function SensorsPage({ state, decision, modelStatus, sensorFeed, connectors, actions }) {
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

function CamerasPage({ cameraFeeds, cameraAnalysis, cameraBrain, actions }) {
  const [selectedCamera, setSelectedCamera] = useState("CAM-DINING-01");
  const [deviceStream, setDeviceStream] = useState(null);
  const [deviceError, setDeviceError] = useState("");
  const [deviceModel, setDeviceModel] = useState(null);
  const [deviceDetections, setDeviceDetections] = useState([]);
  const [deviceInsight, setDeviceInsight] = useState(null);
  const [deviceAnalyzing, setDeviceAnalyzing] = useState(false);
  const [virtualFeed, setVirtualFeed] = useState({
    id: "CAM-VIRTUAL-01",
    name: "Virtual entrance camera",
    zone: "Entrance",
    role: "entrance_count",
    source: "User video",
    video_url: "",
    license: "User-provided, consented, or royalty-free video",
    page_url: "",
    note: "Looped video treated as a virtual live camera."
  });
  const feeds = cameraFeeds?.feeds || [];
  const activeFeed = feeds.find((feed) => feed.id === selectedCamera) || feeds[0];
  const detections = cameraAnalysis?.camera_id === selectedCamera ? cameraAnalysis.detections || [] : [];
  const deviceVideoRef = React.useRef(null);
  const sourceCatalog = [
    {
      name: "Use this device camera",
      type: "Best live demo",
      url: "",
      detail: "Open the app on a phone/tablet and allow camera access. No CCTV API needed."
    },
    {
      name: "Pexels restaurant videos",
      type: "Better legal clips",
      url: "https://www.pexels.com/search/videos/restaurant%20people/",
      detail: "Download a clip, host it, then paste its video URL into Studio."
    },
    {
      name: "Pixabay restaurant people",
      type: "Royalty-free library",
      url: "https://pixabay.com/videos/search/restaurant%20people/",
      detail: "Large free library; useful for dining, queue, and kitchen demo clips."
    },
    {
      name: "MIVIA people counting",
      type: "Research dataset",
      url: "https://mivia.unisa.it/people-detection-dataset/",
      detail: "Overhead people-counting footage, better for entrance/queue logic than restaurant stock."
    },
    {
      name: "OpenDataCam",
      type: "Real CV path",
      url: "https://opendatacam.org/",
      detail: "Run local YOLO counting from a camera/video and send metadata to this backend."
    }
  ];

  useEffect(() => {
    if (deviceVideoRef.current && deviceStream) {
      deviceVideoRef.current.srcObject = deviceStream;
    }
  }, [deviceStream]);

  async function startDeviceCamera() {
    setDeviceError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      setDeviceStream(stream);
      setCameraAnalysis(null);
    } catch (err) {
      setDeviceError(err.message || "Camera permission was denied.");
    }
  }

  function stopDeviceCamera() {
    deviceStream?.getTracks().forEach((track) => track.stop());
    setDeviceStream(null);
    setDeviceDetections([]);
    setDeviceInsight(null);
    setDeviceAnalyzing(false);
  }

  function buildDeviceInsight(predictions) {
    const people = predictions.filter((item) => item.class === "person");
    const chairs = predictions.filter((item) => item.class === "chair");
    const tables = predictions.filter((item) => item.class === "dining table");
    const orderObjects = predictions.filter((item) => ["cup", "bottle", "bowl", "fork", "knife", "spoon", "wine glass"].includes(item.class));
    const seatedEstimate = Math.min(people.length, Math.max(chairs.length, tables.length * 2));
    const standingEstimate = Math.max(0, people.length - seatedEstimate);
    const orderedSignal = people.length > 0 && tables.length > 0 && orderObjects.length > 0;
    const queueRisk = standingEstimate >= 4 ? "HIGH" : standingEstimate >= 2 ? "MEDIUM" : "LOW";
    const tableServiceSignal = orderedSignal
      ? "People near dining tables with cups/plates: likely ordered or currently eating."
      : people.length && tables.length
        ? "People near tables but few table objects detected: check if order is needed."
        : "No clear table-service signal.";
    return {
      people: people.length,
      seatedEstimate,
      standingEstimate,
      tables: tables.length,
      chairs: chairs.length,
      tableObjects: orderObjects.length,
      orderedSignal,
      queueRisk,
      recommendation: queueRisk === "HIGH"
        ? "Entrance/waiting pressure is high. Assign host support."
        : orderedSignal
          ? "Monitor tables for food-running or check-back tasks."
          : "Keep camera scanning; no urgent camera-derived action."
    };
  }

  async function analyzeDeviceCamera() {
    if (!deviceVideoRef.current) return;
    setDeviceError("");
    setDeviceAnalyzing(true);
    try {
      await import("@tensorflow/tfjs");
      const model = deviceModel || await import("@tensorflow-models/coco-ssd").then((module) => module.load({ base: "lite_mobilenet_v2" }));
      setDeviceModel(model);
      const predictions = await model.detect(deviceVideoRef.current);
      const videoWidth = deviceVideoRef.current.videoWidth || 1280;
      const videoHeight = deviceVideoRef.current.videoHeight || 720;
      const useful = predictions
        .filter((item) => item.score >= 0.45 && ["person", "chair", "dining table", "cup", "bottle", "bowl", "fork", "knife", "spoon", "wine glass"].includes(item.class))
        .map((item) => ({
          label: item.class,
          confidence: item.score,
          x: (item.bbox[0] / videoWidth) * 100,
          y: (item.bbox[1] / videoHeight) * 100,
          w: (item.bbox[2] / videoWidth) * 100,
          h: (item.bbox[3] / videoHeight) * 100
        }));
      setDeviceDetections(useful);
      setDeviceInsight(buildDeviceInsight(predictions.filter((item) => item.score >= 0.45)));
    } catch (err) {
      setDeviceError(err.message || "Device camera AI analysis failed.");
    } finally {
      setDeviceAnalyzing(false);
    }
  }

  function updateVirtual(field, value) {
    setVirtualFeed((feed) => ({ ...feed, [field]: value }));
  }
  return (
    <div className="page-grid camera-grid">
      <section className="panel wide">
        <div className="panel-header">
          <div>
            <h2>Camera Projection</h2>
            <p>Use a real device camera, consented footage, or better legal datasets. Avoid random public CCTV streams.</p>
          </div>
          <div className="button-group">
            <button onClick={startDeviceCamera}><MonitorCog size={16} /> Device camera</button>
            {deviceStream ? <button onClick={stopDeviceCamera}><XCircle size={16} /> Stop</button> : null}
            {deviceStream ? <button className="primary-button" onClick={analyzeDeviceCamera}><Sparkles size={16} /> {deviceAnalyzing ? "Analyzing..." : "Analyze people"}</button> : null}
            <button disabled={!activeFeed} onClick={() => actions.analyzeCamera(selectedCamera)}><Sparkles size={16} /> Analyze frame</button>
            <button disabled={!activeFeed?.video_url} onClick={() => actions.cvAnalyze(activeFeed?.video_url, selectedCamera)}><Camera size={16} /> CV adapter</button>
            <button onClick={() => actions.trainCameraBrain()}><Gauge size={16} /> Train brain</button>
            <button onClick={() => actions.analyzeCameraBrain()}><Activity size={16} /> Analyze all</button>
            <button onClick={() => actions.simulateSensors()}><Wifi size={16} /> Push sensor events</button>
          </div>
        </div>
        {deviceStream ? (
          <div className="camera-player">
            <video ref={deviceVideoRef} autoPlay muted playsInline />
            <div className="live-camera-badge">LIVE DEVICE CAMERA</div>
            <div className="detection-layer">
              {deviceDetections.map((box, index) => (
                <span
                  key={`${box.label}-${index}`}
                  className="detection-box"
                  style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }}
                >
                  {box.label} {Math.round(box.confidence * 100)}%
                </span>
              ))}
            </div>
          </div>
        ) : activeFeed ? (
          <div className="camera-player">
            <video key={activeFeed.id} src={activeFeed.video_url} autoPlay muted loop playsInline controls />
            <div className="detection-layer">
              {detections.map((box, index) => (
                <span
                  key={`${box.label}-${index}`}
                  className="detection-box"
                  style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }}
                >
                  {box.label} {Math.round(box.confidence * 100)}%
                </span>
              ))}
            </div>
          </div>
        ) : <EmptyState icon={Camera} title="No video feed selected" text="Start the device camera or paste a legal video URL in Camera Feed Studio. The old stock videos were removed." />}
        {deviceError ? <p className="form-error camera-error">{deviceError}</p> : null}
        {deviceInsight ? (
          <div className="device-insight-grid">
            <MetricCard label="People" value={deviceInsight.people} detail={`${deviceInsight.seatedEstimate} seated est., ${deviceInsight.standingEstimate} standing est.`} icon={Users} tone="blue" />
            <MetricCard label="Tables seen" value={deviceInsight.tables} detail={`${deviceInsight.tableObjects} cups/plates/bottles`} icon={Utensils} tone="green" />
            <MetricCard label="Queue risk" value={deviceInsight.queueRisk} detail={deviceInsight.recommendation} icon={AlertTriangle} tone={deviceInsight.queueRisk === "HIGH" ? "red" : "amber"} />
            <div className="camera-ai-note">
              <b>{deviceInsight.orderedSignal ? "Ordered/eating signal detected" : "No strong ordered signal"}</b>
              <span>{deviceInsight.orderedSignal ? "The model sees people near dining tables plus table objects like cups/bowls/bottles." : "Point the camera toward tables; cups/plates/bowls improve the signal."}</span>
            </div>
          </div>
        ) : null}
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Feeds</h2></div>
        <div className="camera-list">
          {feeds.map((feed) => (
            <button key={feed.id} className={feed.id === selectedCamera ? "selected" : ""} onClick={() => setSelectedCamera(feed.id)}>
              <b>{feed.name}</b>
              <span>{feed.zone} - {feed.source}</span>
            </button>
          ))}
        </div>
        {activeFeed && (
          <div className="detail-list camera-details">
            <Detail label="Mode" value={activeFeed.kind} />
            <Detail label="License" value={activeFeed.license} />
            <Detail label="AI truth" value="Video is real; boxes/events are simulated." />
            <Detail label="Production" value="Use RTSP/OpenDataCam/Axis/Camlytics metadata." />
          </div>
        )}
      </section>
      <section className="panel full">
        <div className="panel-header">
          <div>
            <h2>Camera Feed Studio</h2>
            <p>Use real restaurant videos as legal virtual live cameras. The system loops the video, analyzes metadata, and can push events into the digital twin.</p>
          </div>
          <div className="button-group">
            <button onClick={() => actions.saveVirtualCamera(virtualFeed)}><Check size={16} /> Save feed</button>
            <button className="primary-button" onClick={() => actions.analyzeVirtualCamera(virtualFeed)}><Sparkles size={16} /> Analyze & generate event</button>
          </div>
        </div>
        <div className="studio-grid">
          <div className="studio-form">
            <label className="field">Camera ID
              <input value={virtualFeed.id} onChange={(e) => updateVirtual("id", e.target.value)} />
            </label>
            <label className="field">Name
              <input value={virtualFeed.name} onChange={(e) => updateVirtual("name", e.target.value)} />
            </label>
            <label className="field">Zone
              <select value={virtualFeed.zone} onChange={(e) => updateVirtual("zone", e.target.value)}>
                <option value="Entrance">Entrance</option>
                <option value="Waiting">Waiting</option>
                <option value="Dining">Dining</option>
                <option value="Service">Service</option>
                <option value="Kitchen">Kitchen</option>
              </select>
            </label>
            <label className="field">Role
              <select value={virtualFeed.role} onChange={(e) => updateVirtual("role", e.target.value)}>
                <option value="entrance_count">Entrance count</option>
                <option value="queue_depth">Queue depth</option>
                <option value="table_occupancy">Table occupancy</option>
                <option value="service_flow">Service flow</option>
                <option value="kitchen_load">Kitchen load</option>
              </select>
            </label>
            <label className="field full-field">Video URL
              <input value={virtualFeed.video_url} onChange={(e) => updateVirtual("video_url", e.target.value)} placeholder="Paste a direct .mp4/.webm URL, or use device camera above" />
            </label>
            <label className="field">Source
              <input value={virtualFeed.source} onChange={(e) => updateVirtual("source", e.target.value)} />
            </label>
            <label className="field">License / usage note
              <input value={virtualFeed.license} onChange={(e) => updateVirtual("license", e.target.value)} />
            </label>
          </div>
          <div className="studio-preview">
            {virtualFeed.video_url ? (
              <video key={virtualFeed.video_url} src={virtualFeed.video_url} autoPlay muted loop playsInline controls />
            ) : (
              <div className="empty-video-slot">
                <Camera size={30} />
                <b>No default video</b>
                <span>Use device camera, your own recording, or a legal direct video URL.</span>
              </div>
            )}
            <div className="studio-note">
              <b>Safe demo path</b>
              <p>Use stock clips, your own recordings, or consented venue footage. Avoid random public CCTV streams because they are unstable and may expose private customers.</p>
            </div>
          </div>
        </div>
        {cameraAnalysis?.feed && (
          <div className="analysis-summary">
            <MetricCard label="People detected" value={cameraAnalysis.people_count ?? 0} detail={`${cameraAnalysis.guest_count ?? 0} guests, ${cameraAnalysis.staff_count ?? 0} staff`} icon={Users} tone="blue" />
            <MetricCard label="Signal" value={cameraAnalysis.table_occupancy_signal || "LOW"} detail="virtual camera metadata" icon={Gauge} tone="amber" />
            <MetricCard label="Twin updated" value={cameraAnalysis.applied_to_digital_twin ? "YES" : "NO"} detail={cameraAnalysis.generated_event?.event_type || "analysis only"} icon={Activity} tone={cameraAnalysis.applied_to_digital_twin ? "green" : "blue"} />
          </div>
        )}
      </section>
      <section className="panel full">
        <div className="panel-header">
          <div>
            <h2>Better Camera Sources</h2>
            <p>These are safer and more credible than random restaurant CCTV links.</p>
          </div>
        </div>
        <div className="source-catalog">
          {sourceCatalog.map((item) => (
            <article key={item.name} className="source-card">
              <StatusBadge tone={item.type.includes("Best") ? "green" : item.type.includes("dataset") ? "blue" : "amber"}>{item.type}</StatusBadge>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              {item.url ? <a href={item.url} target="_blank" rel="noreferrer">Open source <ChevronRight size={14} /></a> : <button onClick={startDeviceCamera}>Start camera</button>}
            </article>
          ))}
        </div>
      </section>
      <section className="panel full">
        <div className="panel-header"><h2>Centralized Camera Brain</h2></div>
        <div className="metrics-grid">
          <MetricCard label="Brain status" value={cameraBrain?.last_analysis?.status || (cameraBrain?.profile?.trained ? "TRAINED" : "UNTRAINED")} detail="fused camera state" icon={Activity} tone="blue" />
          <MetricCard label="People seen" value={cameraBrain?.last_analysis?.total_people ?? 0} detail="all cameras combined" icon={Users} tone="green" />
          <MetricCard label="Line crossings" value={cameraBrain?.last_analysis?.line_crossings ?? 0} detail="movement pressure" icon={Route} tone="amber" />
          <MetricCard label="Samples" value={cameraBrain?.profile?.samples_seen ?? 0} detail="training metadata samples" icon={Gauge} tone="blue" />
        </div>
        <div className="brain-recommendations">
          {(cameraBrain?.last_analysis?.recommendations || ["Train and analyze all cameras to get central recommendations."]).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
      <section className="panel full">
        <div className="panel-header"><h2>Camera Integration Reality</h2></div>
        <div className="reality-grid">
          <article>
            <b>Working now</b>
            <p>Real videos display in the app. Sensor events and object boxes are generated by the simulation pipeline.</p>
          </article>
          <article>
            <b>Production path</b>
            <p>Run YOLO/ByteTrack/OpenDataCam or use Axis/Camlytics people-counting APIs, then post metadata to <code>/sensors/webhook</code>.</p>
          </article>
          <article>
            <b>Why metadata</b>
            <p>Restaurant cameras may contain private customer imagery, so the app should ingest counts/events rather than store raw video.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

function KitchenPage({ state, orders, actions }) {
  const [selectedTable, setSelectedTable] = useState("T1");
  const [items, setItems] = useState("chef special, water");
  const tables = state?.tables || [];
  useEffect(() => {
    if (tables.length && !tables.find((table) => table.id === selectedTable)) setSelectedTable(tables[0].id);
  }, [tables.length]);
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

function DigitalTwinPage({ state, selectedTable, setSelectedTable, actions }) {
  const table = state?.tables?.find((item) => item.id === selectedTable) || state?.tables?.[0];
  const client = table?.client_id ? state.clients.find((item) => item.client_id === table.client_id) : null;
  const [layoutDraft, setLayoutDraft] = useState({ x: 0, y: 0, capacity: 2 });
  useEffect(() => {
    if (table) setLayoutDraft({ x: table.x, y: table.y, capacity: table.capacity });
  }, [table?.id]);
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

function TasksPage({ decision, actions }) {
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

function StaffPage({ state, decision, actions }) {
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

function AnalyticsPage({ state, decision }) {
  const metrics = decision?.metrics || {};
  const lifecycle = state?.clients || [];
  const stateCounts = useMemo(() => {
    const counts = {};
    state?.tables?.forEach((table) => { counts[table.state] = (counts[table.state] || 0) + 1; });
    return counts;
  }, [state]);

  return (
    <div className="page-grid analytics-grid">
      <section className="metrics-grid full-width">
        <MetricCard label="Turnover rate" value={metrics.table_turnover_rate_per_hour ?? 0} detail="completed tables per hour" icon={RefreshCcw} tone="green" />
        <MetricCard label="Congestion forecast" value={metrics.upcoming_congestion || "LOW"} detail="next 10-15 minutes" icon={Activity} tone="red" />
        <MetricCard label="AI risk" value={decision?.prediction?.risk_label || "LOW"} detail={decision?.prediction?.recommendation || "Monitoring"} icon={Sparkles} tone={decision?.prediction?.risk_label === "HIGH" ? "red" : "green"} />
        <MetricCard label="Peak signal" value={metrics.peak_hour_signal || "Normal"} detail="calendar-aware context" icon={CalendarClock} tone="amber" />
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Table State Mix</h2></div>
        <div className="bars">
          {Object.entries(stateCounts).map(([key, value]) => (
            <div className="bar-row" key={key}>
              <span>{stateLabels[key]}</span>
              <div><i style={{ width: `${(value / Math.max(1, state.tables.length)) * 100}%`, background: stateColors[key] }} /></div>
              <b>{value}</b>
            </div>
          ))}
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Customer Lifecycle</h2></div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Client</th><th>Group</th><th>Table</th><th>Status</th><th>Wait</th></tr>
            </thead>
            <tbody>
              {lifecycle.slice(-12).map((client) => (
                <tr key={client.client_id}>
                  <td>C{client.client_id}</td>
                  <td>{client.group_size}</td>
                  <td>{client.table_id || "-"}</td>
                  <td>{client.status}</td>
                  <td>{minutesSince(client.arrival_time, client.seated_at || state.current_time).toFixed(1)}m</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function EventsPage({ state, actions }) {
  const [groupSize, setGroupSize] = useState(4);
  const [tableId, setTableId] = useState("T1");
  useEffect(() => {
    if (state?.tables?.length && !state.tables.find((table) => table.id === tableId)) setTableId(state.tables[0].id);
  }, [state, tableId]);
  return (
    <div className="page-grid events-grid">
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Sensor Simulator</h2>
            <p>Inject camera and staff events into the decision engine.</p>
          </div>
        </div>
        <label className="field">
          Group size
          <input type="number" min="1" max="10" value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))} />
        </label>
        <button className="primary-button" onClick={() => actions.event("entrance_camera", { group_size: groupSize })}><DoorOpen size={17} /> Entrance camera arrival</button>
        <label className="field">
          Table
          <select value={tableId} onChange={(e) => setTableId(e.target.value)}>
            {state?.tables?.map((table) => <option key={table.id}>{table.id}</option>)}
          </select>
        </label>
        <div className="quick-actions">
          <button onClick={() => actions.event("order_taken", { table_id: tableId })}>order_taken</button>
          <button onClick={() => actions.event("food_served", { table_id: tableId })}>food_served</button>
          <button onClick={() => actions.event("table_finished", { table_id: tableId })}>table_finished</button>
          <button onClick={() => actions.event("table_cleaned", { table_id: tableId })}>table_cleaned</button>
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Event Log</h2></div>
        <div className="event-log">
          {(state?.event_log || []).slice(-18).reverse().map((event, index) => (
            <div className="event-item" key={`${event.time}-${index}`}>
              <StatusBadge tone={event.type === "entrance_camera" ? "blue" : "green"}>{event.type}</StatusBadge>
              <code>{JSON.stringify(event.payload)}</code>
              <small>{new Date(event.time).toLocaleTimeString()}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SettingsPage({ autoTick, setAutoTick, actions, error, staffing, audit, sla, report }) {
  const [slaDraft, setSlaDraft] = useState(sla || {});
  useEffect(() => setSlaDraft(sla || {}), [JSON.stringify(sla || {})]);
  return (
    <div className="page-grid settings-grid">
      <section className="panel">
        <div className="panel-header"><h2>System Settings</h2></div>
        <label className="toggle-row">
          <input type="checkbox" checked={autoTick} onChange={(e) => setAutoTick(e.target.checked)} />
          <span>Auto-advance simulation every 8 seconds</span>
        </label>
        <div className="quick-actions">
          <button onClick={() => actions.refresh()}><RefreshCcw size={16} /> Refresh state</button>
          <button onClick={() => actions.reset()}><XCircle size={16} /> Reset digital twin</button>
        </div>
        {error && <p className="error-text">{error}</p>}
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Staffing Planner</h2></div>
        <div className="detail-list">
          <Detail label="Current staff" value={staffing?.current_staff ?? "-"} />
          <Detail label="Recommended staff" value={staffing?.recommended_staff ?? "-"} />
          <Detail label="Gap" value={staffing?.gap ?? "-"} />
          <Detail label="Action" value={staffing?.action || "Loading"} />
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>SLA Thresholds</h2></div>
        <div className="layout-editor">
          {["seat_wait_max_min", "order_wait_max_min", "food_wait_max_min", "dirty_table_max_min", "critical_task_score"].map((key) => (
            <label className="field" key={key}>{key.replaceAll("_", " ")}
              <input type="number" value={slaDraft[key] ?? ""} onChange={(e) => setSlaDraft({ ...slaDraft, [key]: Number(e.target.value) })} />
            </label>
          ))}
          <button className="primary-button" onClick={() => actions.saveSla(slaDraft)}>Save SLA settings</button>
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><h2>API Connection</h2></div>
        <div className="detail-list">
          <Detail label="FastAPI base URL" value={API_URL} />
          <Detail label="Decision endpoint" value="/decision" />
          <Detail label="Event ingestion" value="/events" />
          <Detail label="Sensor webhook" value="/sensors/webhook" />
          <Detail label="AI model" value="/model/status" />
          <Detail label="Task completion" value="/tasks/apply" />
        </div>
      </section>
      <section className="panel full">
        <div className="panel-header"><h2>Shift Report</h2></div>
        <div className="metrics-grid">
          <MetricCard label="Audit events" value={report?.audit_events ?? 0} detail="captured actions" icon={ClipboardCheck} tone="blue" />
          <MetricCard label="Invalid events" value={report?.rejected_events ?? 0} detail="blocked by validator" icon={ShieldCheck} tone="green" />
          <MetricCard label="Open orders" value={report?.kitchen?.open_orders ?? 0} detail="kitchen board" icon={Utensils} tone="amber" />
          <MetricCard label="Delayed tickets" value={report?.kitchen?.delayed_orders ?? 0} detail="kitchen SLA" icon={AlertTriangle} tone="red" />
        </div>
      </section>
      <section className="panel full">
        <div className="panel-header"><h2>Audit Trail</h2></div>
        <div className="event-log">
          {(audit?.events || []).slice(0, 30).map((item) => (
            <div className="event-item" key={item.id}>
              <StatusBadge tone="blue">{item.event_type}</StatusBadge>
              <code>{JSON.stringify(item.payload)}</code>
              <small>{item.actor}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RiskList({ alerts }) {
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

function Detail({ label, value }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}

function Journey({ client }) {
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

function EmptyState({ icon: Icon, title, text }) {
  return (
    <div className="empty-state">
      <Icon size={24} />
      <b>{title}</b>
      <p>{text}</p>
    </div>
  );
}

function Skeleton({ label }) {
  return (
    <div className="skeleton">
      <Loader2 className="spin" />
      <span>{label}</span>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("sros-user");
      const parsed = saved ? JSON.parse(saved) : null;
      return parsed?.token ? parsed : null;
    } catch {
      localStorage.removeItem("sros-user");
      return null;
    }
  });
  const [activePage, setActivePage] = useState("command");
  const [state, setState] = useState(null);
  const [decision, setDecision] = useState(null);
  const [selectedTable, setSelectedTable] = useState("T1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [autoTick, setAutoTick] = useState(false);
  const [sensorFeed, setSensorFeed] = useState({ events: [] });
  const [modelStatus, setModelStatus] = useState(null);
  const [connectors, setConnectors] = useState({ connectors: [] });
  const [audit, setAudit] = useState({ events: [] });
  const [staffing, setStaffing] = useState(null);
  const [cameraFeeds, setCameraFeeds] = useState({ feeds: [] });
  const [cameraAnalysis, setCameraAnalysis] = useState(null);
  const [cameraBrain, setCameraBrain] = useState({ profile: {}, last_analysis: {} });
  const [orders, setOrders] = useState({ orders: [], summary: {} });
  const [sla, setSla] = useState({});
  const [report, setReport] = useState(null);
  const [live, setLive] = useState(false);

  async function refresh() {
    try {
      setError("");
      const [stateData, decisionData, feedData, modelData, connectorData, auditData, staffingData, cameraData, brainData, orderData, slaData, reportData] = await Promise.all([
        api("/state"),
        api("/decision"),
        api("/sensors/feed"),
        api("/model/status"),
        api("/connectors"),
        api("/audit"),
        api("/staffing/recommendation"),
        api("/cameras/feeds"),
        api("/vision/brain/status"),
        api("/orders"),
        api("/settings/sla"),
        api("/reports/shift")
      ]);
      setState(stateData);
      setDecision(decisionData);
      setSensorFeed(feedData);
      setModelStatus(modelData);
      setConnectors(connectorData);
      setAudit(auditData);
      setStaffing(staffingData);
      setCameraFeeds(cameraData);
      setCameraBrain(brainData);
      setOrders(orderData);
      setSla(slaData.sla);
      setReport(reportData);
    } catch (err) {
      setError(`Backend connection failed: ${err.message}`);
    }
  }

  async function runAction(work) {
    try {
      setLoading(true);
      setError("");
      await work();
      await refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const actions = {
    refresh,
    tick: (minutes) => runAction(() => api(`/tick?minutes=${minutes}`, { method: "POST" })),
    event: (eventType, payload) => runAction(() => api("/events", { method: "POST", body: JSON.stringify({ event_type: eventType, payload }) })),
    strictEvent: (eventType, payload) => runAction(() => api("/events/strict", { method: "POST", body: JSON.stringify({ event_type: eventType, payload }) })),
    simulateSensors: () => runAction(() => api("/sensors/simulate", { method: "POST" })),
    trainModel: () => runAction(() => api("/model/train-simulated?rows=1200", { method: "POST" })),
    acceptTask: (taskId, staffId) => runAction(() => api("/tasks/accept", { method: "POST", body: JSON.stringify({ task_id: taskId, staff_id: staffId }) })),
    startTask: (taskId, staffId) => runAction(() => api("/tasks/start", { method: "POST", body: JSON.stringify({ task_id: taskId, staff_id: staffId }) })),
    completeTask: (taskId, staffId) => runAction(() => api("/tasks/complete", { method: "POST", body: JSON.stringify({ task_id: taskId, staff_id: staffId }) })),
    saveConnector: (connector) => runAction(() => api("/connectors", { method: "POST", body: JSON.stringify(connector) })),
    testConnector: (connector) => runAction(() => api("/connectors/test", { method: "POST", body: JSON.stringify(connector) })),
    updateLayout: (payload) => runAction(() => api("/layout/table", { method: "POST", body: JSON.stringify(payload) })),
    analyzeCamera: (cameraId) => runAction(async () => {
      const result = await api(`/cameras/analyze-demo?camera_id=${encodeURIComponent(cameraId)}`, { method: "POST" });
      setCameraAnalysis(result);
    }),
    cvAnalyze: (sourceUrl, cameraId) => runAction(async () => {
      const result = await api("/cv/analyze", { method: "POST", body: JSON.stringify({ source_url: sourceUrl, camera_id: cameraId }) });
      setCameraAnalysis({ camera_id: cameraId, detections: result.detections, mode: result.mode, recommendation: result.table_occupancy_signal });
    }),
    saveVirtualCamera: (feed) => runAction(async () => {
      const result = await api("/cameras/virtual", { method: "POST", body: JSON.stringify(feed) });
      setCameraFeeds({ ...(cameraFeeds || {}), feeds: result.feeds });
      setCameraAnalysis(null);
    }),
    analyzeVirtualCamera: (feed) => runAction(async () => {
      const result = await api("/cameras/virtual/analyze", { method: "POST", body: JSON.stringify(feed) });
      setCameraAnalysis({ ...result, detections: result.detections || [] });
      setSelectedTable(null);
    }),
    trainCameraBrain: () => runAction(async () => {
      const result = await api("/vision/brain/train?epochs=6", { method: "POST" });
      setCameraBrain(result);
    }),
    analyzeCameraBrain: () => runAction(async () => {
      const result = await api("/vision/brain/analyze-all", { method: "POST" });
      setCameraBrain((prev) => ({ ...(prev || {}), last_analysis: result }));
    }),
    createOrder: (tableId, items) => runAction(() => api("/orders", { method: "POST", headers: { "x-role": user?.roleId || "waiter" }, body: JSON.stringify({ table_id: tableId, items }) })),
    transitionOrder: (orderId, status) => runAction(() => api("/orders/transition", { method: "POST", headers: { "x-role": user?.roleId || "kitchen" }, body: JSON.stringify({ order_id: orderId, status }) })),
    saveSla: (nextSla) => runAction(() => api("/settings/sla", { method: "POST", body: JSON.stringify(nextSla) })),
    runScenario: (scenario) => runAction(() => api("/scenarios/run", { method: "POST", body: JSON.stringify({ scenario }) })),
    reset: () => runAction(() => api("/reset", { method: "POST" }))
  };

  useEffect(() => {
    if (user) refresh();
  }, [user]);

  useEffect(() => {
    if (!autoTick || !user) return undefined;
    const timer = setInterval(() => actions.tick(1), 8000);
    return () => clearInterval(timer);
  }, [autoTick, user]);

  useEffect(() => {
    if (!user) return undefined;
    const ws = new WebSocket(`${WS_URL}/ws`);
    ws.onopen = () => setLive(true);
    ws.onclose = () => setLive(false);
    ws.onerror = () => setLive(false);
    ws.onmessage = () => refresh();
    return () => ws.close();
  }, [user?.email]);

  useEffect(() => {
    const top = decision?.tasks?.[0];
    if (!top || top.priority_level !== "CRITICAL" || !("Notification" in window) || Notification.permission !== "granted") return;
    new Notification("Critical restaurant task", { body: top.title });
  }, [decision?.tasks?.[0]?.id, decision?.tasks?.[0]?.priority_level]);

  async function enableNotifications() {
    if (!("Notification" in window)) {
      setError("This browser does not support notifications.");
      return;
    }
    await Notification.requestPermission();
  }

  function login(nextUser) {
    localStorage.setItem("sros-user", JSON.stringify(nextUser));
    setUser(nextUser);
  }

  function logout() {
    localStorage.removeItem("sros-user");
    setUser(null);
  }

  if (!user) return <Login onLogin={login} />;

  const pageProps = { state, decision, selectedTable, setSelectedTable, actions };
  let page = <CommandPage {...pageProps} />;
  if (activePage === "cameras") page = <CamerasPage {...pageProps} cameraFeeds={cameraFeeds} cameraAnalysis={cameraAnalysis} cameraBrain={cameraBrain} />;
  if (activePage === "map") page = <DigitalTwinPage {...pageProps} />;
  if (activePage === "tasks") page = <TasksPage {...pageProps} />;
  if (activePage === "kitchen") page = <KitchenPage {...pageProps} orders={orders} />;
  if (activePage === "staff") page = <StaffPage {...pageProps} />;
  if (activePage === "sensors") page = <SensorsPage {...pageProps} modelStatus={modelStatus} sensorFeed={sensorFeed} connectors={connectors} />;
  if (activePage === "analytics") page = <AnalyticsPage {...pageProps} />;
  if (activePage === "events") page = <EventsPage {...pageProps} />;
  if (activePage === "settings") page = <SettingsPage autoTick={autoTick} setAutoTick={setAutoTick} actions={actions} error={error} staffing={staffing} audit={audit} sla={sla} report={report} />;

  return (
    <Shell user={user} activePage={activePage} setActivePage={setActivePage} online={!error} live={live} onLogout={logout} onNotify={enableNotifications}>
      {loading && <div className="loading-strip"><Loader2 className="spin" size={16} /> Syncing decision engine</div>}
      {error && activePage !== "settings" && <div className="error-banner"><AlertTriangle size={17} /> {error}</div>}
      {page}
    </Shell>
  );
}
