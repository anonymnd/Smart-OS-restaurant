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

const OUT = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/Smart_Restaurant_OS_Pitch_FR.pptx";
const shotToday = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/pitch-fr-today.png";
const shotCameras = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/pitch-fr-cameras.png";
const shotKitchen = "C:/Users/PC/Documents/Codex/2026-04-28/ou-are-an-expert-in-ai/pitch-fr-kitchen.png";

const W = 1920;
const H = 1080;
const p = Presentation.create({ slideSize: { width: W, height: H } });

const c = {
  ink: "#101827",
  white: "#FFFFFF",
  muted: "#5B677A",
  pale: "#F8FAFC",
  green: "#22C55E",
  blue: "#2563EB",
  amber: "#F59E0B",
  red: "#DC2626",
  slate: "#334155",
};

function slide() {
  return p.slides.add();
}

function footer(n, dark = false) {
  return row({ width: fill, height: hug, gap: 10 }, [
    text("Smart Restaurant Operating System", {
      width: grow(1),
      height: hug,
      style: { fontSize: 14, color: dark ? "#94A3B8" : c.muted, fontFace: "Aptos" },
    }),
    text(String(n).padStart(2, "0"), {
      width: hug,
      height: hug,
      style: { fontSize: 14, color: dark ? "#94A3B8" : c.muted, fontFace: "Aptos" },
    }),
  ]);
}

function titleBlock(title, subtitle) {
  return column({ width: fill, height: hug, gap: 16 }, [
    text(title, {
      name: "slide-title",
      width: wrap(1540),
      height: hug,
      style: { fontSize: 58, bold: true, color: c.ink, fontFace: "Aptos Display" },
    }),
    subtitle
      ? text(subtitle, {
          name: "slide-subtitle",
          width: wrap(1260),
          height: hug,
          style: { fontSize: 25, color: c.muted, fontFace: "Aptos" },
        })
      : rule({ width: fixed(180), stroke: c.green, weight: 5 }),
  ].filter(Boolean));
}

function bulletList(items, accent = c.green, dark = false) {
  return column(
    { width: fill, height: hug, gap: 18 },
    items.map((item, i) =>
      row({ width: fill, height: hug, gap: 14 }, [
        text("—", { width: fixed(26), height: hug, style: { fontSize: 28, bold: true, color: accent } }),
        text(item, { width: fill, height: hug, style: { fontSize: 25, color: dark ? c.white : c.ink, fontFace: "Aptos" } }),
      ]),
    ),
  );
}

function metric(value, label, color = c.green, dark = false) {
  return column({ width: fill, height: hug, gap: 6 }, [
    text(value, { width: fill, height: hug, style: { fontSize: 56, bold: true, color, fontFace: "Aptos Display" } }),
    text(label, { width: fill, height: hug, style: { fontSize: 20, color: dark ? "#CBD5E1" : c.slate, fontFace: "Aptos" } }),
  ]);
}

function pill(label, color) {
  return panel(
    { width: hug, height: hug, padding: { x: 18, y: 9 }, fill: color, borderRadius: 999 },
    text(label, { width: hug, height: hug, style: { fontSize: 18, bold: true, color: c.white, fontFace: "Aptos" } }),
  );
}

// 1 cover
{
  const s = slide();
  s.compose(layers({ width: fill, height: fill }, [
    shape({ shape: "rect", x: 0, y: 0, width: W, height: H, fill: c.ink, stroke: "none" }),
    shape({ shape: "rect", x: 1160, y: 0, width: 760, height: H, fill: "#113B2D", stroke: "none" }),
    shape({ shape: "rect", x: 1088, y: 0, width: 14, height: H, fill: c.green, stroke: "none" }),
    column({ x: 92, y: 105, width: 980, height: 820, gap: 34 }, [
      row({ width: fill, height: hug, gap: 12 }, [pill("Pitch entrepreneurial", c.green), pill("AI + IoT", c.blue)]),
      text("Smart Restaurant\nOperating System", { width: fill, height: hug, style: { fontSize: 92, bold: true, color: c.white, fontFace: "Aptos Display" } }),
      text("Un système intelligent qui aide les restaurants à gérer les tables, les clients, la cuisine, le staff et les caméras en temps réel.", { width: wrap(920), height: hug, style: { fontSize: 29, color: "#CBD5E1", fontFace: "Aptos" } }),
      text("Réalisé par : [Nom 1] • [Nom 2] • [Nom 3]\nModule d’entrepreneuriat • 2026", { width: wrap(820), height: hug, style: { fontSize: 22, color: "#94A3B8", fontFace: "Aptos" } }),
    ]),
    column({ x: 1235, y: 190, width: 560, height: 660, gap: 30 }, [
      metric("1", "cerveau centralisé", c.green, true),
      metric("3+", "caméras / capteurs fusionnés", "#93C5FD", true),
      metric("24/7", "assistant opérationnel", "#FBBF24", true),
    ]),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 2 problem
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 44 }, [
    titleBlock("Le problème", "Dans un restaurant, tout change vite : clients, tables, commandes, cuisine, staff. Mais les décisions restent souvent manuelles."),
    grid({ width: fill, height: grow(1), columns: [fr(1), fr(1), fr(1)], columnGap: 42 }, [
      bulletList(["Clients qui attendent sans visibilité", "Tables libres ou sales non détectées rapidement", "Priorités différentes entre host, serveur et cuisine"], c.red),
      bulletList(["Retards cuisine découverts trop tard", "Caméras utilisées seulement pour surveiller", "Peu d’aide à la décision pendant les rushs"], c.amber),
      bulletList(["Managers réactifs au lieu d’être proactifs", "Perte de temps et de rotation des tables", "Expérience client moins stable"], c.blue),
    ]),
    footer(2),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 3 solution
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 40 }, [
    titleBlock("Notre solution", "Une plateforme qui transforme les signaux du restaurant en actions concrètes pour le staff."),
    row({ width: fill, height: grow(1), gap: 50 }, [
      column({ width: grow(1), height: hug, gap: 30 }, [
        metric("Next best action", "une action claire à faire maintenant", c.green),
        metric("Digital twin", "une carte vivante du restaurant", c.blue),
        metric("IA explicable", "chaque recommandation explique son score", c.amber),
      ]),
      bulletList(["Le système suit le cycle complet du client", "Il priorise les tâches selon l’urgence", "Il assigne les tâches au staff disponible", "Il détecte la surcharge avant qu’elle devienne un problème"], c.green),
    ]),
    footer(3),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 4 how app works
{
  const s = slide();
  const steps = [
    ["01", "Entrées", "caméras, capteurs, POS, staff"],
    ["02", "Digital twin", "tables, clients, zones, états"],
    ["03", "Cerveau IA", "règles, optimisation, prédiction"],
    ["04", "Action", "guidage tablette et confirmations"],
  ];
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 46 }, [
    titleBlock("Comment notre app fonctionne", "Tous les signaux sont centralisés pour créer une seule logique opérationnelle."),
    row({ width: fill, height: grow(1), gap: 28 }, steps.map(([n, a, b], i) =>
      column({ width: grow(1), height: hug, gap: 18 }, [
        text(n, { width: fill, height: hug, style: { fontSize: 48, bold: true, color: i === 2 ? c.green : c.blue, fontFace: "Aptos Display" } }),
        text(a, { width: fill, height: hug, style: { fontSize: 34, bold: true, color: c.ink, fontFace: "Aptos Display" } }),
        rule({ width: fixed(130), stroke: i === 2 ? c.green : c.blue, weight: 5 }),
        text(b, { width: fill, height: hug, style: { fontSize: 23, color: c.muted, fontFace: "Aptos" } }),
      ]),
    )),
    footer(4),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 5 demo dashboard
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 62 }, gap: 30 }, [
    titleBlock("Démo 1 — Assistant opérationnel", "La première page répond à la question la plus importante : que doit faire le staff maintenant ?"),
    image({ path: shotToday, width: fill, height: grow(1), fit: "contain", alt: "Capture de l'assistant opérationnel" }),
    footer(5),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 6 demo cameras
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 62 }, gap: 30 }, [
    titleBlock("Démo 2 — Cerveau multi-caméras", "Plusieurs caméras sont vues comme un seul cerveau centralisé pour comprendre la charge globale du restaurant."),
    image({ path: shotCameras, width: fill, height: grow(1), fit: "contain", alt: "Capture de la page caméra" }),
    footer(6),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 7 demo kitchen
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 62 }, gap: 30 }, [
    titleBlock("Démo 3 — POS et cuisine", "La cuisine n’est pas séparée : les commandes, les retards et les plats prêts influencent directement les priorités du staff."),
    image({ path: shotKitchen, width: fill, height: grow(1), fit: "contain", alt: "Capture POS cuisine" }),
    footer(7),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 8 target
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 44 }, [
    titleBlock("Notre cible", "Nous visons les restaurants qui ont assez de complexité pour avoir besoin d’un système d’aide à la décision."),
    grid({ width: fill, height: grow(1), columns: [fr(1), fr(1), fr(1)], columnGap: 44 }, [
      column({ gap: 20 }, [metric("Restaurants", "20 à 80 couverts, service rapide ou casual dining", c.green), bulletList(["flux clients important", "rotation des tables", "besoin de coordination"], c.green)]),
      column({ gap: 20 }, [metric("Chaînes locales", "plusieurs points de vente à standardiser", c.blue), bulletList(["suivi multi-sites", "reporting manager", "formation staff"], c.blue)]),
      column({ gap: 20 }, [metric("Hôtels / cafés", "zones de service multiples", c.amber), bulletList(["petit-déjeuner", "room service", "restaurant interne"], c.amber)]),
    ]),
    footer(8),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 9 revenue
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 42 }, [
    titleBlock("Sources de revenus", "Un modèle SaaS mensuel, avec installation et options avancées selon la taille du restaurant."),
    grid({ width: fill, height: grow(1), columns: [fr(1), fr(1), fr(1)], columnGap: 46 }, [
      column({ gap: 18 }, [metric("2 000 DH", "Basic / mois", c.green), bulletList(["1 restaurant", "dashboard + tâches", "simulation + 2 caméras"], c.green)]),
      column({ gap: 18 }, [metric("4 500 DH", "Pro / mois", c.blue), bulletList(["caméras réelles", "POS cuisine", "rapports + SLA"], c.blue)]),
      column({ gap: 18 }, [metric("8 000+ DH", "Enterprise / mois", c.amber), bulletList(["multi-sites", "support prioritaire", "modèles personnalisés"], c.amber)]),
    ]),
    text("Autres revenus : frais d’installation, formation staff, intégration POS, maintenance caméra.", { width: fill, height: hug, style: { fontSize: 26, bold: true, color: c.ink, fontFace: "Aptos Display" } }),
    footer(9),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 10 cost
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 42 }, [
    titleBlock("Les coûts estimés", "Les coûts dépendent du niveau d’intégration. Notre stratégie : commencer léger avec un pilote, puis intégrer progressivement."),
    grid({ width: fill, height: grow(1), columns: [fr(1), fr(1)], columnGap: 70 }, [
      bulletList(["Développement logiciel : backend, frontend, IA, tests", "Hébergement cloud / serveur local", "Maintenance et support", "Formation du staff", "Intégration POS et caméras"], c.blue),
      column({ gap: 24 }, [
        metric("10 000–25 000 DH", "installation pilote estimée", c.green),
        metric("500–2 000 DH", "coût infra mensuel selon volume", c.amber),
        metric("Variable", "matériel caméra si non disponible", c.red),
      ]),
    ]),
    footer(10),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 11 GTM
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 44 }, [
    titleBlock("Go-to-market plan", "Nous commençons par prouver la valeur dans quelques restaurants pilotes avant d’élargir."),
    row({ width: fill, height: grow(1), gap: 52 }, [
      column({ width: grow(1), gap: 20 }, [metric("1", "Pilote terrain", c.green), bulletList(["installer chez 1–2 restaurants", "mesurer attentes et retards", "adapter l’UX tablette"], c.green)]),
      column({ width: grow(1), gap: 20 }, [metric("2", "Partenariats", c.blue), bulletList(["intégrateurs POS", "installateurs caméras", "écoles hôtelières"], c.blue)]),
      column({ width: grow(1), gap: 20 }, [metric("3", "Expansion", c.amber), bulletList(["abonnement SaaS", "références clients", "offre multi-sites"], c.amber)]),
    ]),
    footer(11),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 12 entrepreneurship
{
  const s = slide();
  s.compose(column({ width: fill, height: fill, padding: { x: 92, y: 74 }, gap: 44 }, [
    titleBlock("Dimension entrepreneuriale", "Le projet répond à un vrai besoin terrain avec une proposition de valeur mesurable."),
    grid({ width: fill, height: grow(1), columns: [fr(1), fr(1)], columnGap: 70 }, [
      bulletList(["Problème clair : surcharge opérationnelle", "Client cible identifiable : restaurants et chaînes locales", "Revenu récurrent : abonnement mensuel", "MVP démontrable : application fonctionnelle", "Possibilité de pivoter vers hôtels, cafés ou franchises"], c.green),
      column({ gap: 26 }, [
        metric("Valeur", "réduire attente et retards", c.green),
        metric("Différenciation", "IA décisionnelle + digital twin", c.blue),
        metric("Scalabilité", "SaaS + intégrations", c.amber),
      ]),
    ]),
    footer(12),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

// 13 final hook
{
  const s = slide();
  s.compose(layers({ width: fill, height: fill }, [
    shape({ shape: "rect", x: 0, y: 0, width: W, height: H, fill: c.ink, stroke: "none" }),
    shape({ shape: "rect", x: 0, y: 0, width: 22, height: H, fill: c.green, stroke: "none" }),
    column({ x: 110, y: 145, width: 1380, height: 760, gap: 42 }, [
      text("Le restaurant du futur ne surveille pas seulement.", { width: fill, height: hug, style: { fontSize: 62, bold: true, color: c.white, fontFace: "Aptos Display" } }),
      text("Il comprend. Il décide. Il guide.", { width: fill, height: hug, style: { fontSize: 86, bold: true, color: c.green, fontFace: "Aptos Display" } }),
      text("Smart Restaurant OS transforme chaque caméra, chaque table et chaque action du staff en un avantage opérationnel.", { width: wrap(1180), height: hug, style: { fontSize: 30, color: "#CBD5E1", fontFace: "Aptos" } }),
      text("Merci.", { width: fill, height: hug, style: { fontSize: 38, bold: true, color: c.white, fontFace: "Aptos Display" } }),
    ]),
  ]), { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 });
}

const blob = await PresentationFile.exportPptx(p);
await blob.save(OUT);
console.log(OUT);
