/**
 * CV content. The same data feeds the "Parcours" section, the /cv page
 * and the PDF generated from it (npm run cv:pdf).
 */

export interface CvEntry {
  period: string;
  title: string;
  place: string;
  summary: string;
  details?: string[];
}

export const profileSummary =
  "Étudiant en troisième année à Epitech Paris, je conçois des logiciels et des sites web avec rigueur. " +
  "J'encadre des étudiants au quotidien et j'accompagne des commerçants dans la création de leur premier site : " +
  "un développeur professionnel, compétent et humain.";

export const objective = "Stage de développement, de fin mars à fin août 2027.";

export const experience: CvEntry[] = [
  {
    period: "Depuis 2026",
    title: "Développeur web freelance",
    place: "Indépendant, Paris",
    summary: "Sites internet pour les commerces de proximité qui n'en ont pas encore, de la prospection à la livraison.",
    details: [
      "Conception de P-Finder, l'outil interne de prospection, de devis et de suivi des projets.",
      "Templates par type de commerce, chaque client reçoit un projet autonome qu'il peut héberger lui-même.",
    ],
  },
  {
    period: "Depuis 2026",
    title: "Astek, assistant technique et pédagogique",
    place: "Epitech Paris",
    summary: "J'encadre les étudiants de première et deuxième année.",
    details: [
      "Suivi des activités et aide technique sur les projets en C, C++ et web.",
      "Évaluation des projets et animation des soutenances.",
    ],
  },
  {
    period: "Sept. à déc. 2025",
    title: "Stagiaire",
    place: "Danone",
    summary: "[Mission à préciser]",
  },
  {
    period: "Juil. à sept. 2025",
    title: "Stagiaire",
    place: "AP-HP, Hôpital Robert-Debré",
    summary: "[Mission à préciser]",
  },
];

export const education: CvEntry[] = [
  {
    period: "2024 à 2029",
    title: "Programme Grande École",
    place: "Epitech Paris",
    summary: "Formation par projets, en équipe : programmation système en C, C++ orienté objet, réseau, algorithmique et web. Actuellement en troisième année.",
  },
];

export const associative: CvEntry[] = [
  {
    period: "Depuis janv. 2026",
    title: "Membre du BDE",
    place: "Epitech Paris",
    summary: "Ancien secrétaire.",
  },
  {
    period: "Depuis janv. 2026",
    title: "Programme Buddies",
    place: "Epitech Paris",
    summary: "J'accompagne les étudiants internationaux en échange : intégration à l'école et découverte de Paris.",
  },
];

export const skills = [
  { label: "Langages", value: "C, C++, Python, TypeScript, Rust" },
  { label: "Web", value: "Astro, React, Next.js, HTML, CSS, WebGL" },
  { label: "Outils", value: "Git, CMake, Make, Docker, Figma, Supabase, Vercel" },
  { label: "Langues", value: "Français et anglais, bilingue" },
] as const;

export const interests = "Littérature, écriture, biologie et biotechnologies.";
