import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://sandess.dev";

export default defineConfig({
  site,
  integrations: [sitemap()],
  trailingSlash: "ignore",
  build: { format: "directory" },
  prefetch: { prefetchAll: true },
});
