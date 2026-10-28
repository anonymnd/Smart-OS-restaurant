import { AreaChart, Command, Camera, ListChecks, Map, Settings, TabletSmartphone, Utensils, Wifi } from "lucide-react";

export const navItems = [
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

export const roleNav = {
  manager: ["command", "cameras", "map", "tasks", "kitchen", "staff", "sensors", "analytics", "settings"],
  host: ["command", "cameras", "map", "tasks", "sensors"],
  waiter: ["command", "tasks", "kitchen", "staff"],
  kitchen: ["command", "cameras", "tasks", "kitchen", "analytics"]
};

export const roles = [
  { id: "manager", label: "Manager", description: "Full floor, staffing, sensors, settings" },
  { id: "host", label: "Host", description: "Arrivals, seating, queue, wait estimates" },
  { id: "waiter", label: "Waiter", description: "Assigned tasks and one-tap confirmations" },
  { id: "kitchen", label: "Kitchen", description: "Food-ready, delayed tickets, bottlenecks" }
];
