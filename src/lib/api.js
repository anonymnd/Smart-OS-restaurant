const env = import.meta.env || {};
export const API_URL = env.VITE_API_URL || (env.DEV ? "http://127.0.0.1:8000" : "");
const SESSION_KEY = "sros-user";

export function readSession() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    if (session?.token && session.expiresAt * 1000 > Date.now()) return session;
  } catch {
    // A stale or malformed session should return the user to sign-in.
  }
  localStorage.removeItem(SESSION_KEY);
  return null;
}

export function saveSession(session) {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
}

export async function api(path, options = {}) {
  const session = readSession();
  const { headers, ...request } = options;
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...request,
      signal: request.signal || AbortSignal.timeout(20000),
      headers: {
        "Content-Type": "application/json",
        ...(session ? { Authorization: `Bearer ${session.token}`, "x-role": session.roleId } : {}),
        ...headers
      }
    });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new Error("Unable to reach the service. Check your connection and try again.", { cause: error });
  }
  const body = await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 401 && session) {
      saveSession(null);
      window.dispatchEvent(new Event("session-expired"));
    }
    const detail = body?.detail;
    const message = typeof detail === "string" ? detail : detail?.message;
    throw new Error(message || (response.status >= 500
      ? "The service is temporarily unavailable. Please try again shortly."
      : `Request failed (${response.status}).`));
  }
  if (!body) throw new Error("The service returned an unexpected response. Please try again.");
  return body;
}
