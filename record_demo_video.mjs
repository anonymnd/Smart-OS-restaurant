const { createRequire } = await import("node:module");
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const path = await import("node:path");
const fs = await import("node:fs/promises");

const workspace = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai";
const outDir = path.join(workspace, "demo_video_capture");
await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});

const context = await browser.newContext({
  viewport: { width: 1366, height: 768 },
  recordVideo: {
    dir: outDir,
    size: { width: 1366, height: 768 },
  },
});

const page = await context.newPage();

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
        maxWidth: "760px",
        padding: "14px 18px",
        borderRadius: "10px",
        background: "rgba(15, 23, 42, 0.92)",
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
  await page.waitForTimeout(1600);
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

await caption("Smart Restaurant OS: an AI + IoT operating system for restaurant teams.");
await clickExact("Enter command center");
await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});

await caption("1. The tablet starts with one clear recommendation: what should staff do now?");
await clickExact("Read sensors");
await caption("2. Simulated camera and sensor events update the restaurant digital twin in real time.");
await clickExact("Lunch rush");
await caption("3. Scenario testing creates realistic pressure: arrivals, waiting groups, and new prioritized tasks.");

await clickExact("Cameras");
await caption("4. The Cameras page shows real demo video feeds and a centralized multi-camera brain.");
await clickExact("Train brain");
await caption("5. The brain calibrates all camera feeds together instead of treating cameras separately.");
await clickExact("Analyze all");
await caption("6. All cameras are fused into one status: people count, staff coverage, zone load, and risk.");

await clickExact("Floor");
await caption("7. The digital twin shows tables, zones, staff positions, and table states.");

await clickExact("Queue");
await caption("8. The decision queue explains priority, assigned staff, walking distance, and workflow state.");

await clickExact("Kitchen");
await caption("9. POS and kitchen status influence operations: orders, food ready, delivered, or delayed.");

await clickExact("Settings");
await caption("10. Managers configure SLA thresholds, see staffing recommendations, and review audit history.");
await page.waitForTimeout(1800);

await context.close();
await browser.close();

const files = await fs.readdir(outDir);
const webm = files.find((file) => file.endsWith(".webm"));
if (!webm) {
  throw new Error("No Playwright video file was created.");
}

const source = path.join(outDir, webm);
const target = path.join(workspace, "Smart_Restaurant_OS_Demo.webm");
await fs.copyFile(source, target);
console.log(target);
