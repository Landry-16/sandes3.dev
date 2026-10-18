/**
 * Prints scripts/cv/cv-en.html to public/cv-sandes-savarimuthu-en.pdf, then its preview image
 * for /en/cv. Usage: npm run cv:en (requires Playwright: npx playwright install chromium, and
 * pdftoppm from poppler-utils). The French PDF is supplied as is and never generated.
 */
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const OUTPUT = "public/cv-sandes-savarimuthu-en.pdf";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL("scripts/cv/cv-en.html").href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: OUTPUT, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();

execFileSync("pdftoppm", ["-r", "220", "-png", "-singlefile", OUTPUT, "src/assets/cv/page-en"]);
console.log(`CV written to ${OUTPUT} and src/assets/cv/page-en.png`);
