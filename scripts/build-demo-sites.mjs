/**
 * Builds the P-Finder template demos shown in the "Sites clients" section.
 *
 * Each demo-sites/<template>.json holds the content of a fictional shop. The
 * script copies it into the P-Finder site generator, builds it under
 * /modeles/<template>/ into public/modeles/, then screenshots the first screen
 * into src/assets/modeles/<template>.png.
 *
 * Usage: PFINDER_SITES_DIR=../PFinder/sites npm run demos
 * The generator must have its dependencies installed (npm install in its folder).
 */
import { spawnSync } from "node:child_process";
import { cp, mkdir, readdir, readFile, rm } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { createRequire } from "node:module";

const GENERATOR = process.env.PFINDER_SITES_DIR;
if (!GENERATOR) {
  console.error("Set PFINDER_SITES_DIR to the P-Finder sites folder.");
  process.exit(1);
}
const generator = resolve(GENERATOR);
const OUT_SITES = resolve("public/modeles");
const OUT_SHOTS = resolve("src/assets/modeles");
const PORT = 4410;

const templates = (await readdir("demo-sites")).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));

async function build(template) {
  const client = `portfolio-${template}`;
  const clientDir = join(generator, "clients", client);
  await mkdir(clientDir, { recursive: true });
  await cp(`demo-sites/${template}.json`, join(clientDir, "site.json"));
  const result = spawnSync("npx", ["astro", "build"], {
    cwd: generator,
    stdio: "inherit",
    env: { ...process.env, PF_CLIENT: client, PF_BASE: `/modeles/${template}/`, PF_OUT: join(OUT_SITES, template) },
  });
  await rm(clientDir, { recursive: true, force: true });
  if (result.status !== 0) throw new Error(`build failed for ${template}`);
}

const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".txt": "text/plain" };

/** Serves public/ so the demos load with their real /modeles/<template>/ paths. */
function serve() {
  const root = resolve("public");
  const server = createServer(async (req, res) => {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path.endsWith("/")) path += "index.html";
    try {
      const body = await readFile(join(root, path));
      res.writeHead(200, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  return new Promise((ok) => server.listen(PORT, () => ok(server)));
}

async function screenshot(list) {
  const require = createRequire(import.meta.url);
  const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  for (const template of list) {
    await page.goto(`http://localhost:${PORT}/modeles/${template}/`, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: ".draft-banner{display:none!important}*{animation-play-state:paused!important}" });
    await page.waitForTimeout(800);
    await page.screenshot({ path: join(OUT_SHOTS, `${template}.png`) });
  }
  await browser.close();
}

await rm(OUT_SITES, { recursive: true, force: true });
await mkdir(OUT_SHOTS, { recursive: true });
for (const template of templates) await build(template);
const server = await serve();
try {
  await screenshot(templates);
} finally {
  server.close();
}
console.log(`[demos] ${templates.length} template demo(s) built into public/modeles/.`);
