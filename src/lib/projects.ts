import { getCollection, getEntry, render, type CollectionEntry } from "astro:content";
import { term, type Lang } from "./i18n";

export type Project = CollectionEntry<"projects">;

const byOrder = (a: Project, b: Project): number => a.data.order - b.data.order || b.data.year - a.data.year;

/** The project with its English words, when there are some. */
async function translate(project: Project, lang: Lang): Promise<Project> {
  if (lang === "fr") return project;
  const en = await getEntry("projectsEn", project.id);
  if (!en) return project;
  const { data } = project;
  return {
    ...project,
    data: {
      ...data,
      ...en.data,
      title: en.data.title ?? data.title,
      demoLabel: term(lang, data.demoLabel),
      links: data.links.map((link) => ({ ...link, label: term(lang, link.label) })),
      gallery: data.gallery.map((item, i) => ({ ...item, alt: en.data.galleryAlts[i] ?? item.alt })),
    },
  };
}

/** Every project not hidden with `visible: false`, sorted by `order`. */
export async function getVisibleProjects(lang: Lang = "fr"): Promise<Project[]> {
  const all = await getCollection("projects", ({ data }) => data.visible);
  return Promise.all(all.sort(byOrder).map((project) => translate(project, lang)));
}

export async function getFeaturedProjects(lang: Lang = "fr"): Promise<Project[]> {
  return (await getVisibleProjects(lang)).filter((p) => p.data.featured);
}

/** The body of the project in the page's language. */
export async function renderProject(project: Project, lang: Lang) {
  const en = lang === "en" ? await getEntry("projectsEn", project.id) : undefined;
  return render(en ?? project);
}
