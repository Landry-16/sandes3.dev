import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * One Markdown file per project in src/content/projects.
 * Set `visible: false` to hide a project everywhere, `featured: true`
 * to show it on the home page, and `order` to sort (smallest first).
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number().int(),
      kind: z.enum(["École", "Personnel", "Freelance"]),
      team: z.string(),
      stack: z.array(z.string()).min(1),
      status: z.enum(["Terminé", "En cours"]).default("Terminé"),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      visible: z.boolean().default(true),
    }),
});

export const collections = { projects };
