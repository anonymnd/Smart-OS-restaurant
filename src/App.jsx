import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Login } from "./components/Login.jsx";
import { Shell } from "./components/Shell.jsx";
import { Skeleton } from "./components/ui.jsx";
import { roleNav } from "./lib/navigation.js";
import { readSession, saveSession } from "./lib/api.js";
import { useRestaurant } from "./hooks/useRestaurant.js";
import { CommandPage } from "./pages/CommandPage.jsx";
import { DigitalTwinPage } from "./pages/DigitalTwinPage.jsx";
import { TasksPage } from "./pages/TasksPage.jsx";
import { KitchenPage } from "./pages/KitchenPage.jsx";
import { StaffPage } from "./pages/StaffPage.jsx";
import { SensorsPage } from "./pages/SensorsPage.jsx";
import { AnalyticsPage } from "./pages/AnalyticsPage.jsx";
import { SettingsPage } from "./pages/SettingsPage.jsx";

const CamerasPage = lazy(() => import("./pages/CamerasPage.jsx").then((module) => ({ default: module.CamerasPage })));

function Workspace({ user, onLogout }) {
  const data = useRestaurant(user);
  const [selectedTable, setSelectedTable] = useState("T1");
  const readPage = useCallback(() => {
    const allowedPages = roleNav[user.roleId] || roleNav.manager;
    return allowedPages.includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : allowedPages[0];
  }, [user.roleId]);
  const [activePage, setActivePage] = useState(readPage);

  useEffect(() => {
    const navigate = () => setActivePage(readPage());
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, [readPage]);

  async function enableNotifications() {
    if ("Notification" in window) await Notification.requestPermission();
  }

  const props = { ...data, selectedTable, setSelectedTable };
  const pages = {
    command: CommandPage, cameras: CamerasPage, map: DigitalTwinPage,
    tasks: TasksPage, kitchen: KitchenPage, staff: StaffPage,
    sensors: SensorsPage, analytics: AnalyticsPage, settings: SettingsPage
  };
  const Page = pages[activePage] || CommandPage;

  return (
    <Shell user={user} activePage={activePage} setActivePage={(page) => { window.location.hash = page; }}
      online={data.online} onLogout={onLogout} onNotify={enableNotifications}>
      {data.error && <div className="error-banner" role="alert">
        <AlertTriangle size={18} aria-hidden="true" /><span>{data.error}</span>
        <button onClick={data.actions.refresh}><RefreshCcw size={16} /> Retry</button>
      </div>}
      {data.initialLoading ? <Skeleton label="Loading your restaurant" /> : !data.state ? (
        <section className="panel connection-state"><h2>We couldn’t load your workspace</h2>
          <p>Your data is safe. Try reconnecting in a moment.</p>
          <button className="primary-button" onClick={data.actions.refresh}>Reconnect</button>
        </section>
      ) : <div aria-busy={data.loading}>
        {data.loading && <div className="loading-strip" role="status">Saving changes…</div>}
        <fieldset className="workspace-content" disabled={data.loading}>
          <Suspense fallback={<Skeleton label="Loading cameras" />}><Page {...props} /></Suspense>
        </fieldset>
      </div>}
    </Shell>
  );
}

export default function App() {
  const [user, setUser] = useState(readSession);
  const logout = useCallback(() => { saveSession(null); setUser(null); }, []);
  useEffect(() => {
    window.addEventListener("session-expired", logout);
    return () => window.removeEventListener("session-expired", logout);
  }, [logout]);
  useEffect(() => {
    if (!user) return undefined;
    const timer = setTimeout(logout, Math.min(Math.max(0, user.expiresAt * 1000 - Date.now()), 2147483647));
    return () => clearTimeout(timer);
  }, [user, logout]);
  if (!user) return <Login onLogin={(session) => { saveSession(session); setUser(session); }} />;
  return <Workspace key={user.token} user={user} onLogout={logout} />;
}
