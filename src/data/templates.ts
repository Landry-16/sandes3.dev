import type { ImageMetadata } from "astro";
import fournil from "../assets/modeles/fournil.png";
import comptoir from "../assets/modeles/comptoir.png";
import atelier from "../assets/modeles/atelier.png";
import chantier from "../assets/modeles/chantier.png";
import cave from "../assets/modeles/cave.png";
import bouquet from "../assets/modeles/bouquet.png";

/** A P-Finder site template, shown with a fictional shop built by scripts/build-demo-sites.mjs. */
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
export const templateUrl = (slug: string): string => `/modeles/${slug}/`;

export const offerSteps = [
  {
    title: "Un appel",
    text: "On parle du commerce et de ce que ses clients cherchent en ligne : horaires, carte, prestations, accès.",
  },
  {
    title: "Un devis",
    text: "Le devis est validé avant que je commence. Pas de surprise ensuite.",
  },
  {
    title: "La maquette",
    text: "Le modèle du métier, adapté aux couleurs, aux textes et aux photos du commerce. Les retours se font sur le vrai site.",
  },
  {
    title: "Le site vous appartient",
    text: "Le commerce reçoit son propre projet, code et mode d'emploi compris. Il peut l'héberger où il veut et le confier à un autre développeur.",
  },
];

export const templateFeatures = [
  "Horaires en direct : ouvert ou fermé, calculé à l'heure de Paris",
  "Site statique, rapide, sans base de données à maintenir",
  "Aucun cookie, donc aucun bandeau de consentement",
  "Mentions légales et données pour Google générées",
];
