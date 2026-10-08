/**
 * Prints the /cv page to public/cv-sandes-savarimuthu.pdf.
 * Usage: npm run build && npm run cv:pdf  (requires Playwright: npx playwright install chromium)
 */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = 4329;
const OUTPUT = "public/cv-sandes-savarimuthu.pdf";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("Playwright is required: npm i -D playwright && npx playwright install chromium");
  process.exit(1);
}

const server = spawn("npx", ["astro", "preview", "--port", String(PORT)], { stdio: "ignore" });
try {
  await sleep(2500);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/cv`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: OUTPUT, format: "A4", printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log(`CV written to ${OUTPUT}`);
} finally {
  server.kill();
}
