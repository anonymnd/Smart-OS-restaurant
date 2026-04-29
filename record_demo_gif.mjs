const { createRequire } = await import("node:module");
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const path = await import("node:path");
const fs = await import("node:fs/promises");

const workspace = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai";
const outDir = path.join(workspace, "demo_gif_frames");
await fs.rm(outDir, { recursive: true, force: true });
await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
let frame = 1;

async function caption(text) {
  await page.evaluate((value) => {
    let el = document.getElementById("demo-caption");
    if (!el) {
      el = document.createElement("div");
      el.id = "demo-caption";
      document.body.appendChild(el);
      Object.assign(el.style, {
        position: "fixed",
        left: "24px",
        bottom: "24px",
        zIndex: "999999",
        maxWidth: "820px",
        padding: "14px 18px",
        borderRadius: "10px",
        background: "rgba(15, 23, 42, 0.94)",
        color: "white",
        fontFamily: "Inter, Arial, sans-serif",
        fontSize: "20px",
        fontWeight: "750",
        lineHeight: "1.35",
        boxShadow: "0 12px 28px rgba(0,0,0,.28)",
      });
    }
    el.textContent = value;
  }, text);
  await page.screenshot({ path: path.join(outDir, `frame_${String(frame).padStart(3, "0")}.png`), fullPage: false });
  frame += 1;
}

async function clickExact(name) {
  const locator = page.getByRole("button", { name, exact: true });
  await locator.waitFor({ timeout: 10000 });
  await locator.click();
  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
}

await page.goto("http://127.0.0.1:8501/", { waitUntil: "networkidle", timeout: 20000 });
await page.evaluate(() => localStorage.removeItem("sros-user"));
await page.reload({ waitUntil: "networkidle" });

await caption("Smart Restaurant OS: AI + IoT operating system for restaurant teams.");
await clickExact("Enter command center");
await caption("1. The tablet shows one clear next action for the staff.");
await clickExact("Read sensors");
await caption("2. Camera and sensor events update the restaurant digital twin.");
await clickExact("Lunch rush");
await caption("3. Scenario testing creates realistic rush-hour pressure.");
await clickExact("Cameras");
await caption("4. Multiple camera feeds become one centralized camera brain.");
await clickExact("Train brain");
await caption("5. The camera brain calibrates all feeds together.");
await clickExact("Analyze all");
await caption("6. The system fuses people count, staff count, zone load, and risk.");
await clickExact("Floor");
await caption("7. The digital twin shows tables, zones, staff positions, and live states.");
await clickExact("Queue");
await caption("8. The task queue explains priority, staff assignment, and workflow state.");
await clickExact("Kitchen");
await caption("9. POS and kitchen tickets influence operational priorities.");
await clickExact("Settings");
await caption("10. Managers configure SLA thresholds and review shift reports.");

await browser.close();
console.log(outDir);
