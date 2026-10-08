import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

const byOrder = (a: Project, b: Project): number => a.data.order - b.data.order || b.data.year - a.data.year;

/** Every project not hidden with `visible: false`, sorted by `order`. */
export async function getVisibleProjects(): Promise<Project[]> {
  const all = await getCollection("projects", ({ data }) => data.visible);
  return all.sort(byOrder);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getVisibleProjects()).filter((p) => p.data.featured);
}

/** Label shown next to the code link: public repository or private preview. */
export function sourceLabel(project: Project): string {
  return project.data.repo ? "Code source" : "Dépôt privé";
}
