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
      /** What Sandes did on the project, shown on its card. */
      role: z.string().optional(),
      stack: z.array(z.string()).min(1),
      status: z.enum(["Terminé", "En cours"]).default("Terminé"),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      demoLabel: z.string().default("Essayer la démo"),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      visible: z.boolean().default(true),
    }),
});

/**
 * English text of a project in src/content/projects-en, same file name as the French one.
 * Only the words: everything else (links, images, order) comes from the French file.
 */
const projectsEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects-en" }),
  schema: z.object({
    title: z.string().optional(),
    summary: z.string(),
    role: z.string().optional(),
    coverAlt: z.string().optional(),
    /** One per gallery image, in the same order. */
    galleryAlts: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, projectsEn };
