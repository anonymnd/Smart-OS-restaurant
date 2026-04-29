import {
  Presentation,
  PresentationFile,
  column,
  row,
  grid,
  layers,
  panel,
  text,
  image,
  rule,
  shape,
  fill,
  hug,
  fixed,
  wrap,
  grow,
  fr,
} from "file:///C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const OUT = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/Smart_Restaurant_OS_Pitch.pptx";
const todayShot = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/pitch-app-today.png";
const cameraShot = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/pitch-app-cameras.png";

const W = 1920;
const H = 1080;
const p = Presentation.create({ slideSize: { width: W, height: H } });

const colors = {
  ink: "#101827",
  muted: "#5B677A",
  pale: "#EEF4F1",
  green: "#22C55E",
  blue: "#2563EB",
  amber: "#F59E0B",
  red: "#DC2626",
  slate: "#334155",
  white: "#FFFFFF",
  line: "#D7DEE8",
};

function addSlide(bg = colors.white) {
  const s = p.slides.add();
  return s;
}

function titleBlock(title, subtitle) {
  return column({ name: "title-stack", width: fill, height: hug, gap: 16 }, [
    text(title, {
      name: "slide-title",
      width: wrap(1500),
      height: hug,
      style: { fontSize: 58, bold: true, color: colors.ink, fontFace: "Aptos Display" },
    }),
    subtitle
      ? text(subtitle, {
          name: "slide-subtitle",
          width: wrap(1240),
          height: hug,
          style: { fontSize: 25, color: colors.muted, fontFace: "Aptos" },
        })
      : rule({ name: "title-rule", width: fixed(180), stroke: colors.green, weight: 5 }),
  ].filter(Boolean));
}

function footer(slideNo) {
  return row({ name: "footer", width: fill, height: hug, gap: 12 }, [
    text("Smart Restaurant Operating System", {
      name: "footer-label",
      width: grow(1),
      height: hug,
      style: { fontSize: 14, color: colors.muted, fontFace: "Aptos" },
    }),
    text(String(slideNo).padStart(2, "0"), {
      name: "slide-number",
      width: hug,
      height: hug,
      style: { fontSize: 14, color: colors.muted, fontFace: "Aptos" },
    }),
  ]);
}

function pill(label, color = colors.blue) {
  return panel(
    {
      name: `pill-${label}`,
      width: hug,
      height: hug,
      padding: { x: 18, y: 9 },
      fill: color,
      borderRadius: 999,
    },
    text(label, {
      width: hug,
      height: hug,
      style: { fontSize: 18, bold: true, color: colors.white, fontFace: "Aptos" },
    }),
  );
}

function bulletList(items, accent = colors.green) {
  return column(
    { name: "bullet-list", width: fill, height: hug, gap: 20 },
    items.map((item, idx) =>
      row({ name: `bullet-${idx}`, width: fill, height: hug, gap: 16 }, [
        text("—", { width: fixed(28), height: hug, style: { fontSize: 28, bold: true, color: accent } }),
        text(item, { width: fill, height: hug, style: { fontSize: 27, color: colors.ink, fontFace: "Aptos" } }),
      ]),
    ),
  );
}

function metric(num, label, color = colors.green) {
  return column({ name: `metric-${label}`, width: fill, height: hug, gap: 8 }, [
    text(num, { width: fill, height: hug, style: { fontSize: 58, bold: true, color, fontFace: "Aptos Display" } }),
    text(label, { width: fill, height: hug, style: { fontSize: 19, color: colors.slate, fontFace: "Aptos" } }),
  ]);
}

// 1 cover
{
  const s = addSlide(colors.ink);
  s.compose(
    layers({ width: fill, height: fill }, [
      shape({ name: "cover-bg", shape: "rect", x: 0, y: 0, width: 1920, height: 1080, fill: colors.ink, stroke: "none" }),
      shape({ name: "green-plane", shape: "rect", x: 1140, y: 0, width: 780, height: 1080, fill: "#113B2D", stroke: "none" }),
      shape({ name: "signal-line-1", shape: "rect", x: 1080, y: 0, width: 14, height: 1080, fill: colors.green, stroke: "none" }),
      column({ name: "cover-copy", x: 92, y: 110, width: 1050, height: 820, gap: 34 }, [
        row({ width: fill, height: hug, gap: 12 }, [pill("AI + IoT", colors.green), pill("Restaurant Ops", colors.blue)]),
        text("Smart Restaurant\nOperating System", {
          name: "cover-title",
          width: fill,
          height: hug,
          style: { fontSize: 94, bold: true, color: colors.white, fontFace: "Aptos Display" },
        }),
        text("A real-time decision engine that helps staff manage tables, guests, kitchen delays, and camera signals from one tablet.", {
          name: "cover-subtitle",
          width: wrap(920),
          height: hug,
          style: { fontSize: 30, color: "#C9D5E1", fontFace: "Aptos" },
        }),
        text("Prepared by: [Your Name] • [Team / Class]\nPitch deck • 2026", {
          name: "names",
          width: wrap(720),
          height: hug,
          style: { fontSize: 22, color: "#A8B6C8", fontFace: "Aptos" },
        }),
      ]),
      column({ name: "cover-right", x: 1210, y: 190, width: 570, height: 680, gap: 28 }, [
        metric("1", "centralized operations brain", colors.green),
        metric("14", "tables in the digital twin", "#93C5FD"),
        metric("3+", "camera/sensor feeds fused", "#FBBF24"),
      ]),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 2 problem
{
  const s = addSlide();
  s.compose(
    column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 44 }, [
      titleBlock("Restaurants operate in real time. Their tools usually do not.", "Managers and staff must constantly reconcile what guests need, what the kitchen is doing, and where people are on the floor."),
      grid({ width: fill, height: grow(1), columns: [fr(1), fr(1), fr(1)], columnGap: 36 }, [
        bulletList(["Guests wait without visibility", "Tables sit dirty while hosts need capacity", "Waiters lose time deciding what is next"], colors.red),
        bulletList(["Kitchen delays are noticed late", "Camera data is isolated", "Manual updates become unreliable during rush"], colors.amber),
        bulletList(["Managers see symptoms, not root causes", "Priorities compete", "Staff overload turns into service failures"], colors.blue),
      ]),
      footer(2),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 3 solution
{
  const s = addSlide("#F8FAFC");
  s.compose(
    column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 40 }, [
      titleBlock("The solution: a restaurant operating system, not another dashboard.", "It continuously understands the floor, computes the best next action, and guides staff through the shift."),
      row({ width: fill, height: grow(1), gap: 40 }, [
        image({ name: "today-ui", path: todayShot, width: fixed(1040), height: fill, fit: "contain", alt: "Smart Restaurant OS Today screen" }),
        column({ width: grow(1), height: fill, gap: 28 }, [
          metric("Next best action", "one clear instruction instead of noise", colors.green),
          metric("Explainable priority", "waiting time + group size + urgency + congestion", colors.blue),
          metric("Staff-aware", "assigns tasks by availability and walking distance", colors.amber),
        ]),
      ]),
      footer(3),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 4 architecture
{
  const s = addSlide();
  const nodes = [
    ["Cameras + Sensors", "entrance, tables, queue, kitchen"],
    ["Digital Twin", "tables, clients, staff, states"],
    ["Decision Engine", "rules + optimizer + risk model"],
    ["Tablet Guidance", "tasks, alerts, confirmations"],
  ];
  s.compose(
    column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 46 }, [
      titleBlock("How it works: every signal becomes one operating brain.", "The app turns camera events, POS updates, and staff confirmations into a single live model of the restaurant."),
      row({ width: fill, height: grow(1), gap: 24 }, nodes.map(([a, b], idx) =>
        column({ width: grow(1), height: hug, gap: 20 }, [
          text(`0${idx + 1}`, { width: fill, height: hug, style: { fontSize: 46, bold: true, color: idx === 2 ? colors.green : colors.blue, fontFace: "Aptos Display" } }),
          text(a, { width: fill, height: hug, style: { fontSize: 34, bold: true, color: colors.ink, fontFace: "Aptos Display" } }),
          rule({ width: fixed(130), stroke: idx === 2 ? colors.green : colors.blue, weight: 5 }),
          text(b, { width: fill, height: hug, style: { fontSize: 23, color: colors.muted, fontFace: "Aptos" } }),
        ]),
      )),
      footer(4),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 5 decision engine
{
  const s = addSlide(colors.ink);
  s.compose(
    layers({ width: fill, height: fill }, [
      shape({ name: "s5-bg", shape: "rect", x: 0, y: 0, width: 1920, height: 1080, fill: colors.ink, stroke: "none" }),
      column({ x: 92, y: 74, width: 1736, height: 932, gap: 44 }, [
        column({ width: fill, height: hug, gap: 16 }, [
          text("AI decision engine", { width: fill, height: hug, style: { fontSize: 62, bold: true, color: colors.white, fontFace: "Aptos Display" } }),
          text("The system does not only alert. It decides what matters most and why.", { width: wrap(1040), height: hug, style: { fontSize: 28, color: "#C9D5E1", fontFace: "Aptos" } }),
        ]),
        grid({ width: fill, height: grow(1), columns: [fr(1.1), fr(0.9)], columnGap: 70 }, [
          column({ width: fill, height: hug, gap: 28 }, [
            text("Priority = waiting time + group size + stage urgency + idle time + congestion", { width: fill, height: hug, style: { fontSize: 38, bold: true, color: colors.green, fontFace: "Aptos Display" } }),
            bulletList(["Validates state transitions before acting", "Generates seat/order/serve/clean tasks", "Assigns nearest available staff", "Detects overload and kitchen risk"], colors.green),
          ]),
          column({ width: fill, height: hug, gap: 28 }, [
            metric("STRICT", "invalid actions are rejected", "#93C5FD"),
            metric("REAL TIME", "decisions refresh as events arrive", colors.green),
            metric("EXPLAINABLE", "each task shows its reason", "#FBBF24"),
          ]),
        ]),
        text("Backend logic: FastAPI + state machine + rules + optimizer + SQLite audit trail", { width: fill, height: hug, style: { fontSize: 17, color: "#8FA3B8", fontFace: "Aptos" } }),
      ]),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 6 camera brain
{
  const s = addSlide("#F8FAFC");
  s.compose(
    column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 40 }, [
      titleBlock("Centralized camera brain", "Multiple camera feeds are fused into one restaurant-level signal: people, staff, line crossings, zone load, and recommendations."),
      row({ width: fill, height: grow(1), gap: 42 }, [
        image({ name: "camera-ui", path: cameraShot, width: fixed(1020), height: fill, fit: "contain", alt: "Camera page with central camera brain" }),
        column({ width: grow(1), height: hug, gap: 30 }, [
          metric("Dining", "table occupancy signal", colors.blue),
          metric("Service", "movement and staff pressure", colors.amber),
          metric("Kitchen", "production load and delay risk", colors.green),
          text("Current prototype uses real demo videos with simulated CV metadata. Production path: RTSP + YOLO/ByteTrack/OpenDataCam or Axis/Camlytics metadata into /sensors/webhook.", { width: fill, height: hug, style: { fontSize: 20, color: colors.muted, fontFace: "Aptos" } }),
        ]),
      ]),
      footer(6),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 7 staff UX
{
  const s = addSlide();
  s.compose(
    column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 44 }, [
      titleBlock("Built for staff with tablets.", "The interface reduces cognitive load during rush: one next action, one reason, one confirmation path."),
      grid({ width: fill, height: grow(1), columns: [fr(1), fr(1), fr(1)], columnGap: 46 }, [
        column({ width: fill, gap: 20 }, [text("Host", { width: fill, height: hug, style: { fontSize: 42, bold: true, color: colors.blue } }), bulletList(["see waiting queue", "seat groups", "unlock table capacity"], colors.blue)]),
        column({ width: fill, gap: 20 }, [text("Waiter", { width: fill, height: hug, style: { fontSize: 42, bold: true, color: colors.green } }), bulletList(["accept task", "start task", "mark done"], colors.green)]),
        column({ width: fill, gap: 20 }, [text("Manager", { width: fill, height: hug, style: { fontSize: 42, bold: true, color: colors.amber } }), bulletList(["configure cameras", "run scenarios", "track audit/report"], colors.amber)]),
      ]),
      footer(7),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 8 feature set
{
  const s = addSlide("#F8FAFC");
  const features = [
    ["Digital twin", "14-table state machine with zones"],
    ["Strict logic", "rejects impossible transitions"],
    ["Task lifecycle", "new, accepted, in progress, done, expired"],
    ["POS/Kitchen", "orders, food ready, delayed tickets"],
    ["Camera brain", "multi-camera fused signal"],
    ["Audit trail", "every decision and event logged"],
  ];
  s.compose(
    column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 42 }, [
      titleBlock("What exists today", "The prototype is more than a mockup: it is a working local system with frontend, backend, state logic, and simulation."),
      grid({ width: fill, height: grow(1), columns: [fr(1), fr(1), fr(1)], rows: [fr(1), fr(1)], columnGap: 34, rowGap: 32 },
        features.map(([a, b], idx) => column({ width: fill, height: hug, gap: 12 }, [
          text(a, { width: fill, height: hug, style: { fontSize: 32, bold: true, color: idx % 2 ? colors.green : colors.blue, fontFace: "Aptos Display" } }),
          text(b, { width: fill, height: hug, style: { fontSize: 22, color: colors.muted, fontFace: "Aptos" } }),
        ])),
      ),
      footer(8),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 9 value
{
  const s = addSlide();
  s.compose(
    column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 44 }, [
      titleBlock("Why it matters commercially", "Restaurants win when service flow is predictable, staff effort is focused, and managers can see bottlenecks before guests feel them."),
      row({ width: fill, height: grow(1), gap: 60 }, [
        column({ width: grow(1), gap: 24 }, [
          metric("Shorter waits", "seat and serve before delays compound", colors.green),
          metric("Higher turnover", "clean and seat tables faster", colors.blue),
        ]),
        column({ width: grow(1), gap: 24 }, [
          metric("Lower overload", "guide staff when complexity spikes", colors.amber),
          metric("Better visibility", "audit trail and shift reports", colors.red),
        ]),
      ]),
      footer(9),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

// 10 roadmap/ask
{
  const s = addSlide(colors.ink);
  s.compose(
    layers({ width: fill, height: fill }, [
      shape({ name: "s10-bg", shape: "rect", x: 0, y: 0, width: 1920, height: 1080, fill: colors.ink, stroke: "none" }),
      column({ x: 92, y: 74, width: 1736, height: 932, gap: 44 }, [
        text("Roadmap to production", { width: fill, height: hug, style: { fontSize: 64, bold: true, color: colors.white, fontFace: "Aptos Display" } }),
        text("The next milestone is to connect real restaurant data while keeping the same operating logic.", { width: wrap(1120), height: hug, style: { fontSize: 28, color: "#C9D5E1", fontFace: "Aptos" } }),
        grid({ width: fill, height: grow(1), columns: [fr(1), fr(1), fr(1)], columnGap: 42 }, [
          column({ width: fill, gap: 20 }, [text("Pilot", { width: fill, height: hug, style: { fontSize: 44, bold: true, color: colors.green } }), bulletList(["one restaurant floor", "camera metadata", "staff tablet validation"], colors.green)]),
          column({ width: fill, gap: 20 }, [text("Integrate", { width: fill, height: hug, style: { fontSize: 44, bold: true, color: "#93C5FD" } }), bulletList(["POS/kitchen system", "RTSP CV worker", "live manager alerts"], "#93C5FD")]),
          column({ width: fill, gap: 20 }, [text("Scale", { width: fill, height: hug, style: { fontSize: 44, bold: true, color: "#FBBF24" } }), bulletList(["multi-site analytics", "model calibration", "SLA optimization"], "#FBBF24")]),
        ]),
        text("Ask: partner with a restaurant to test real operations data and validate service-time improvements.", { width: fill, height: hug, style: { fontSize: 30, bold: true, color: colors.white, fontFace: "Aptos Display" } }),
      ]),
    ]),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

const blob = await PresentationFile.exportPptx(p);
await blob.save(OUT);
console.log(OUT);
