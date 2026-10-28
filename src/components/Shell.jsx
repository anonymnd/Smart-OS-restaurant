import React from "react";
import { Bell, Command, LogOut, Utensils } from "lucide-react";
import { navItems, roleNav } from "../lib/navigation.js";

export function Shell({ user, activePage, setActivePage, children, online, onLogout, onNotify }) {
  const visibleNav = navItems.filter((item) => (roleNav[user.roleId] || roleNav.manager).includes(item.id));
  return (
    <div className="app-shell">
      <a className="skip-link" href="#workspace">Skip to workspace</a>
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><Utensils size={20} /></div>
          <div>
            <b>SROS</b>
            <span>Operations AI</span>
          </div>
        </div>
        <nav aria-label="Workspace">
          {visibleNav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                title={item.label}
                aria-label={item.label}
                aria-current={activePage === item.id ? "page" : undefined}
                className={activePage === item.id ? "nav-item active" : "nav-item"}
                onClick={() => setActivePage(item.id)}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <span className={online ? "status-dot online" : "status-dot offline"} />
          <span role="status">{online ? "Workspace connected" : "Connecting to workspace"}</span>
        </div>
      </aside>
      <main className="main-shell" id="workspace" tabIndex={-1}>
        <header className="topbar">
          <div>
            <span className="page-kicker">Restaurant workspace</span>
            <h1>{navItems.find((item) => item.id === activePage)?.label || "Command"}</h1>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" title="Notifications" aria-label="Enable notifications" onClick={onNotify}><Bell size={18} /></button>
            <div className="user-pill">
              <span>{user.name}</span>
              <small>{user.role}</small>
            </div>
            <button className="icon-button" title="Log out" aria-label="Log out" onClick={onLogout}><LogOut size={18} /></button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
