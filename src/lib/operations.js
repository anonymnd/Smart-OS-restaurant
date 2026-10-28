export const stateColors = {
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

export const stateLabels = {
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

export function minutesSince(iso, currentIso) {
  if (!iso || !currentIso) return 0;
  return Math.max(0, (new Date(currentIso) - new Date(iso)) / 60000);
}

export function priorityTone(level) {
  if (level === "CRITICAL") return "danger";
  if (level === "HIGH") return "orange";
  if (level === "MEDIUM") return "amber";
  return "green";
}
