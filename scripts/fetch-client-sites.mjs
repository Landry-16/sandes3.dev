/**
 * Collects the client websites delivered with P-Finder.
 *
 * Every client site lives in its own repository of the GitHub organization
 * PFINDER_GITHUB_ORG (default: pfinder-sites), with its content in site.json.
 * A site is shown on the portfolio when its repository has the topic
 * "portfolio" and a homepage URL (the live site). Add or remove the topic on
 * GitHub to publish or hide a client: no change to this repository is needed.
 *
 * Writes src/data/clients.generated.json and copies hero photos to
 * public/clients/. Without PFINDER_GITHUB_TOKEN it writes an empty list and the
 * section is hidden, so local builds never fail because of it.
 */
import { mkdir, rm, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const API = "https://api.github.com";
const ORG = process.env.PFINDER_GITHUB_ORG || "pfinder-sites";
const TOKEN = process.env.PFINDER_GITHUB_TOKEN;
const TOPIC = "portfolio";
const OUT_JSON = "src/data/clients.generated.json";
const OUT_DIR = "public/clients";

async function github(path, accept = "application/vnd.github+json") {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: accept, "X-GitHub-Api-Version": "2022-11-28" },
  });
  if (!res.ok) throw new Error(`GitHub ${res.status} on ${path}`);
  return accept.includes("raw") ? Buffer.from(await res.arrayBuffer()) : res.json();
}

async function listRepos() {
  const repos = [];
  for (let page = 1; ; page++) {
    const batch = await github(`/orgs/${encodeURIComponent(ORG)}/repos?type=all&per_page=100&page=${page}`);
    repos.push(...batch);
    if (batch.length < 100) return repos;
  }
}

async function collect(repo) {
  const raw = await github(`/repos/${repo.full_name}/contents/site.json`, "application/vnd.github.raw");
  const site = JSON.parse(raw.toString("utf8"));
  const business = site.business ?? {};
  const entry = {
    slug: repo.name,
    name: business.name ?? repo.name,
    category: business.tagline ?? "",
    city: business.address?.city ?? "",
    url: repo.homepage,
  };
  const photo = site.hero?.photo;
  if (photo) {
    try {
      const bytes = await github(`/repos/${repo.full_name}/contents/public/${photo.split("/").map(encodeURIComponent).join("/")}`, "application/vnd.github.raw");
      const file = `${repo.name}${extname(photo) || ".jpg"}`;
      await writeFile(join(OUT_DIR, file), bytes);
      entry.image = `/clients/${file}`;
    } catch (err) {
      console.warn(`[clients] ${repo.name}: no preview image (${err.message})`);
    }
  }
  return entry;
}

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });
  if (!TOKEN) {
    console.log("[clients] PFINDER_GITHUB_TOKEN is not set, the client sites section is hidden.");
    await writeFile(OUT_JSON, "[]\n");
    return;
  }
  try {
    const repos = (await listRepos()).filter((r) => r.topics?.includes(TOPIC) && r.homepage && !r.archived);
    const sites = [];
    for (const repo of repos) {
      try {
        sites.push(await collect(repo));
      } catch (err) {
        console.warn(`[clients] skipped ${repo.name}: ${err.message}`);
      }
    }
    sites.sort((a, b) => a.name.localeCompare(b.name, "fr"));
    await writeFile(OUT_JSON, `${JSON.stringify(sites, null, 2)}\n`);
    console.log(`[clients] ${sites.length} client site(s) published from ${ORG}.`);
  } catch (err) {
    console.warn(`[clients] could not reach GitHub (${err.message}), the section is hidden.`);
    await writeFile(OUT_JSON, "[]\n");
  }
}

await main();
