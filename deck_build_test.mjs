import { Presentation, PresentationFile, column, text, fill, hug } from "file:///C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const p = Presentation.create({ slideSize: { width: 1920, height: 1080 } });
const s = p.slides.add();
s.compose(
  column({ width: fill, height: fill, padding: 80, gap: 20 }, [
    text("Test deck", { width: fill, height: hug, style: { fontSize: 72, bold: true, color: "#111827" } }),
    text("Hello", { width: fill, height: hug, style: { fontSize: 32, color: "#475569" } }),
  ]),
  { frame: { left: 0, top: 0, width: 1920, height: 1080 }, baseUnit: 8 },
);
const blob = await PresentationFile.exportPptx(p);
await blob.save("C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/test-output.pptx");
