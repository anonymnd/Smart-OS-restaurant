import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../lib/api.js";

export function useRestaurant(user) {
  const [state, setState] = useState(null);
  const [decision, setDecision] = useState(null);
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

  const [initialLoading, setInitialLoading] = useState(true);
  const [online, setOnline] = useState(false);
  const pending = useRef(null);
  const busy = useRef(false);
  const mounted = useRef(true);

  const refresh = useCallback(async () => {
    pending.current?.abort();
    const controller = new AbortController();
    pending.current = controller;
    try {
      const data = await api("/dashboard", { signal: AbortSignal.any([controller.signal, AbortSignal.timeout(20000)]) });
      if (controller.signal.aborted || !mounted.current) return;
      setState(data.state);
      setDecision(data.decision);
      setSensorFeed(data.sensorFeed);
      setModelStatus(data.modelStatus);
      setConnectors(data.connectors);
      setAudit(data.audit);
      setStaffing(data.staffing);
      setCameraFeeds(data.cameraFeeds);
      setCameraBrain(data.cameraBrain);
      setOrders(data.orders);
      setSla(data.sla);
      setReport(data.report);
      setOnline(true);
      setError("");
    } catch (err) {
      if (controller.signal.aborted || !mounted.current) return;
      setOnline(false);
      setError(err.message);
    } finally {
      if (!controller.signal.aborted && mounted.current) setInitialLoading(false);
    }
  }, []);

  const runAction = useCallback(async (work) => {
    if (busy.current) return;
    busy.current = true;
    setLoading(true);
    setError("");
    try {
      await work();
      if (mounted.current) await refresh();
    } catch (err) {
      if (mounted.current) setError(err.message);
    } finally {
      busy.current = false;
      if (mounted.current) setLoading(false);
    }
  }, [refresh]);

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
    mounted.current = true;
    let timer;
    let disposed = false;
    async function poll() {
      if (!busy.current && !document.hidden) await refresh();
      if (!disposed) timer = setTimeout(poll, 5000);
    }
    poll();
    return () => {
      disposed = true;
      mounted.current = false;
      clearTimeout(timer);
      pending.current?.abort();
    };
  }, [refresh]);

  useEffect(() => {
    if (!autoTick) return undefined;
    const timer = setInterval(() => runAction(() => api("/tick?minutes=1", { method: "POST" })), 8000);
    return () => clearInterval(timer);
  }, [autoTick, runAction]);

  const topTask = decision?.tasks?.[0];
  const topId = topTask?.id;
  const topPriority = topTask?.priority_level;
  const topTitle = topTask?.title;
  useEffect(() => {
    if (!topId || topPriority !== "CRITICAL" || !("Notification" in window) || Notification.permission !== "granted") return;
    new Notification("Critical restaurant task", { body: topTitle });
  }, [topId, topPriority, topTitle]);

  return { state, decision, loading, initialLoading, error, online, autoTick, setAutoTick,
    sensorFeed, modelStatus, connectors, audit, staffing, cameraFeeds, cameraAnalysis,
    cameraBrain, orders, sla, report, actions };
}
