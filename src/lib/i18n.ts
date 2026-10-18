/**
 * Two languages: French at the root, English under /en/. Components pick their words from the
 * page URL with `t(Astro.url)`. Internal links are written once, French-style ("/projects"):
 * middleware.ts prefixes them on English pages.
 */
export type Lang = "fr" | "en";

export const langOf = (url: URL): Lang => (/^\/en(\/|$)/.test(url.pathname) ? "en" : "fr");

/** The same page in the other language. */
export function switchPath(url: URL): string {
  const path = url.pathname;
  return langOf(url) === "en" ? path.replace(/^\/en/, "") || "/" : `/en${path === "/" ? "/" : path}`;
}

/** Words of the project files and data (kind, status, team, trades...), in English. */
const terms: Record<string, string> = {
  École: "School",
  Personnel: "Personal",
  Freelance: "Freelance",
  Terminé: "Completed",
  "En cours": "In progress",
  Solo: "Solo",
  Équipe: "Team",
  "Équipe de 3": "Team of 3",
  "Équipe Epitech": "Epitech team",
  "Essayer la démo": "Try the demo",
  "Visiter la galerie": "Visit the gallery",
  "Visiter le site": "Visit the site",
  "Voir le site": "See the site",
  "Galerie en couleur": "Colour gallery",
  Boulangerie: "Bakery",
  Restaurant: "Restaurant",
  "Salon de coiffure": "Hair salon",
  Artisan: "Tradesman",
  Caviste: "Wine shop",
  Fleuriste: "Florist",
};

export const term = (lang: Lang, word: string): string => (lang === "en" ? (terms[word] ?? word) : word);

const fr = {
  lang: "fr",
  locale: "fr_FR",
  other: { lang: "en", label: "English", short: "EN" },
  nav: { label: "Navigation principale", demos: "Démonstrations", projects: "Projets", background: "Parcours", cv: "CV", contact: "Contact" },
  footer: { home: "Retour à l'accueil", contact: "Me contacter" },
  home: {
    title: "Sandes Savarimuthu : développeur web et logiciel à Paris",
    description: "Développeur logiciel et web à Paris, sites vitrines pour indépendants, logiciels en C++, Rust et TypeScript. Disponible pour des missions.",
  },
  hero: {
    posterAlt: "Rendu de mon path tracer : une pièce grise éclairée par le plafond, avec une sphère chromée, une sphère mate, une sphère de verre et un bloc noir",
    live: "Rendu en direct",
    quote: "Demander un devis pour un site",
    projects: "Voir les projets",
    hintLive: "Bougez la souris pour déplacer la lumière. Ce rendu est calculé en direct par votre carte graphique.",
    hintStatic: "Rendu calculé par mon path tracer WebGL.",
    hintTouch: "Touchez l'image pour lancer le rendu en direct.",
  },
  demos: {
    title: "Modèles de démonstration",
    lede: "Commerces fictifs, pour montrer le travail.",
    frameTitle: (trade: string) => `${trade}, commerce fictif`,
    caption: (shop: string) => `Modèle · ${shop}`,
    alt: (trade: string, shop: string) => `Modèle ${trade.toLowerCase()} : la page d'accueil de ${shop}, commerce fictif`,
    prev: "Modèles précédents",
    next: "Modèles suivants",
    freelance:
      "Je conçois des sites vitrines pour les indépendants de conseil et de services, sous le nom Nacre : un prix total annoncé avant de commencer, et chaque étape validée avant la suivante.",
    quote: "Demander un devis pour un site",
    nacre: "Découvrir Nacre",
  },
  featured: {
    title: "Projets phares",
    lede: "Une sélection. Le code est ouvert quand le dépôt est public, les projets privés sont présentés en aperçu.",
    all: (n: number) => `Voir les ${n} projets`,
  },
  card: { source: "code source", private: "dépôt privé" },
  cover: (title: string) => `Aperçu de ${title}`,
  parcours: {
    title: "Parcours",
    download: "Télécharger le CV (PDF)",
    view: "Voir le CV en ligne",
    experience: "Expérience",
    education: "Formation",
    associative: "Engagements",
    elsewhere: "Ailleurs",
  },
  contact: {
    portraitAlt: "Portrait de Sandes Savarimuthu",
    title: "Un projet ?",
    lede: "Un site vitrine, une mission, un stage à proposer : écrivez-moi.",
    copy: "Copier l'adresse",
    copied: "Adresse copiée",
    copyFail: "Copie impossible, sélectionnez l'adresse",
    nacre: "Nacre, sites vitrines",
    cv: "CV (PDF)",
  },
  cv: {
    title: "CV, Sandes Savarimuthu",
    description: "CV de Sandes Savarimuthu, développeur full stack, étudiant en troisième année à Epitech Paris.",
    back: "Retour au portfolio",
    download: "Télécharger le PDF",
    open: "Ouvrir le PDF",
    alt: "CV de Sandes Savarimuthu, développeur full stack : expérience, projets, formation, compétences et engagements",
    note: "",
  },
  projects: {
    title: "Projets, Sandes Savarimuthu",
    description: "Tous les projets de Sandes Savarimuthu : moteurs de rendu, réseau, applications web et outils.",
    h1: "Tous les projets",
    lede: (n: number) => `${n} projets, d'Epitech, personnels ou réalisés pour mon activité freelance.`,
    filter: "Filtrer les projets",
    all: "Tous",
  },
  project: {
    crumb: "Projets",
    year: "Année",
    kind: "Cadre",
    team: "Équipe",
    status: "Statut",
    stack: "Technologies",
    source: "Code source",
    private: "Dépôt privé, aperçu seulement",
    zoom: (alt: string) => `Agrandir : ${alt}`,
    images: (title: string) => `Images de ${title}`,
    next: "Projet suivant",
  },
  gallery: { label: "Images du projet", dialog: "Image agrandie", close: "Fermer", prev: "Image précédente", next: "Image suivante" },
};

const en: typeof fr = {
  lang: "en",
  locale: "en_GB",
  other: { lang: "fr", label: "Français", short: "FR" },
  nav: { label: "Main navigation", demos: "Demos", projects: "Projects", background: "Background", cv: "CV", contact: "Contact" },
  footer: { home: "Back to the home page", contact: "Get in touch" },
  home: {
    title: "Sandes Savarimuthu: web and software developer in Paris",
    description: "Software and web developer in Paris: showcase websites for independents, software in C++, Rust and TypeScript. Open to projects and internships.",
  },
  hero: {
    posterAlt: "A render from my path tracer: a grey room lit from the ceiling, with a chrome sphere, a matte sphere, a glass sphere and a black block",
    live: "Live render",
    quote: "Get a quote for a website",
    projects: "See the projects",
    hintLive: "Move the mouse to move the light. This image is rendered live by your graphics card.",
    hintStatic: "Rendered by my WebGL path tracer.",
    hintTouch: "Tap the image to start the live render.",
  },
  demos: {
    title: "Demo templates",
    lede: "Fictional shops, to show the work.",
    frameTitle: (trade: string) => `${trade}, fictional shop`,
    caption: (shop: string) => `Template · ${shop}`,
    alt: (trade: string, shop: string) => `${trade} template: the home page of ${shop}, a fictional shop`,
    prev: "Previous templates",
    next: "Next templates",
    freelance:
      "I build showcase websites for independent consultants and service providers, under the name Nacre: a total price stated before work begins, and every step approved before the next.",
    quote: "Get a quote for a website",
    nacre: "Discover Nacre",
  },
  featured: {
    title: "Featured projects",
    lede: "A selection. The code is open when the repository is public; private projects are shown as previews.",
    all: (n: number) => `See all ${n} projects`,
  },
  card: { source: "source code", private: "private repository" },
  cover: (title: string) => `Preview of ${title}`,
  parcours: {
    title: "Background",
    download: "Download my CV (PDF)",
    view: "View my CV online",
    experience: "Experience",
    education: "Education",
    associative: "Involvement",
    elsewhere: "Elsewhere",
  },
  contact: {
    portraitAlt: "Portrait of Sandes Savarimuthu",
    title: "A project?",
    lede: "A showcase website, a project, an internship to offer: write to me.",
    copy: "Copy the address",
    copied: "Address copied",
    copyFail: "Could not copy, select the address",
    nacre: "Nacre, showcase websites",
    cv: "CV (PDF, in French)",
  },
  cv: {
    title: "CV, Sandes Savarimuthu",
    description: "CV of Sandes Savarimuthu, full stack developer, third-year student at Epitech Paris.",
    back: "Back to the portfolio",
    download: "Download the PDF",
    open: "Open the PDF",
    alt: "CV of Sandes Savarimuthu, full stack developer: experience, projects, education, skills and involvement",
    note: "My CV is written in French. I am bilingual in French and English.",
  },
  projects: {
    title: "Projects, Sandes Savarimuthu",
    description: "All of Sandes Savarimuthu's projects: renderers, networking, web apps and tools.",
    h1: "All projects",
    lede: (n: number) => `${n} projects, from Epitech, personal, or built for my freelance business.`,
    filter: "Filter the projects",
    all: "All",
  },
  project: {
    crumb: "Projects",
    year: "Year",
    kind: "Context",
    team: "Team",
    status: "Status",
    stack: "Technologies",
    source: "Source code",
    private: "Private repository, preview only",
    zoom: (alt: string) => `Enlarge: ${alt}`,
    images: (title: string) => `Images of ${title}`,
    next: "Next project",
  },
  gallery: { label: "Project images", dialog: "Enlarged image", close: "Close", prev: "Previous image", next: "Next image" },
};

/** The words of the page's language. */
export const t = (url: URL) => (langOf(url) === "en" ? en : fr);
