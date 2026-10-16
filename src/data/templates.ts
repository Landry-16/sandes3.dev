import type { ImageMetadata } from "astro";
import fournil from "../assets/templates/fournil.png";
import comptoir from "../assets/templates/comptoir.png";
import atelier from "../assets/templates/atelier.png";
import chantier from "../assets/templates/chantier.png";
import cave from "../assets/templates/cave.png";
import bouquet from "../assets/templates/bouquet.png";

/** A site template, shown with a fictional shop built by scripts/build-demo-sites.mjs. */
export interface SiteTemplate {
  slug: string;
  trade: string;
  shop: string;
  image: ImageMetadata;
}

export const siteTemplates: SiteTemplate[] = [
  { slug: "fournil", trade: "Boulangerie", shop: "Maison Pétrin", image: fournil },
  { slug: "comptoir", trade: "Restaurant", shop: "Trattoria Lucia", image: comptoir },
  { slug: "atelier", trade: "Salon de coiffure", shop: "Maison Lise", image: atelier },
  { slug: "chantier", trade: "Artisan", shop: "Plomberie Dumas", image: chantier },
  { slug: "cave", trade: "Caviste", shop: "Cave Lavoisier", image: cave },
  { slug: "bouquet", trade: "Fleuriste", shop: "Pétales & Cie", image: bouquet },
];

/** Public path of a template demo. */
export const templateUrl = (slug: string): string => `/templates/${slug}/`;

/** The three demos shown on the home page, in this order. */
export const homeTemplates: SiteTemplate[] = siteTemplates.slice(0, 3);
