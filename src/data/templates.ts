import type { ImageMetadata } from "astro";
import fournil from "../assets/templates/fournil.png";
import comptoir from "../assets/templates/comptoir.png";
import atelier from "../assets/templates/atelier.png";
import chantier from "../assets/templates/chantier.png";
import cave from "../assets/templates/cave.png";
import bouquet from "../assets/templates/bouquet.png";

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
export const templateUrl = (slug: string): string => `/templates/${slug}/`;

export const offerSteps = [
  {
    title: "Un appel",
    text: "On parle du commerce et de ce que ses clients cherchent en ligne : horaires, carte, prestations, accès.",
  },
  {
    title: "Un devis",
    text: "Le devis est validé avant que je commence.",
  },
  {
    title: "La maquette",
    text: "Création sur mesure, ou basée sur un de mes modèles : adapté aux couleurs, aux textes et aux photos du commerce.",
  },
  {
    title: "Le site vous appartient",
    text: "Le commerce reçoit son propre projet, code et mode d'emploi compris.",
  },
  {
    title: "Rien à gérer",
    text: "L'hébergement, la maintenance, et les mises à jours sont gérés pour vous.",
  },
];

export const templateFeatures = [
  "Interface moderne et ergonomique",
  "Horaires en direct : ouvert ou fermé",
  "Aucun cookie, donc aucun bandeau de consentement",
  "Mentions légales et données pour Google générées",
];
