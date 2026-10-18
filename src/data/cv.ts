/**
 * Background shown in the "Parcours" section, in French and English. It follows the CV
 * supplied as a PDF (public/cv-sandes-savarimuthu.pdf): update both together.
 */

export interface CvEntry {
  period: string;
  title: string;
  place: string;
  summary: string;
  details?: string[];
}

const fr = {
  experience: [
    {
      period: "Depuis 2026",
      title: "Développeur web freelance",
      place: "Indépendant, Paris",
      summary:
        "Création de sites vitrines pour des commerces de proximité : devis, maquette sur mesure ou à partir de modèles, remise du code et du mode d'emploi, puis hébergement et maintenance.",
      details: [
        "Sites sans bandeau de cookies, avec horaires d'ouverture en direct et mentions légales générées.",
        "Conception de P-Finder, outil interne de prospection, de devis et de suivi de projets clients.",
      ],
    },
    {
      period: "Depuis mars 2026",
      title: "Assistant technique et pédagogique",
      place: "Epitech Paris",
      summary: "Suivi technique des projets d'étudiants de 1re et 2e année en C, C++ et Python.",
      details: ["Évaluation des projets et animation des soutenances."],
    },
    {
      period: "Sept. à déc. 2025",
      title: "Stagiaire développeur polyvalent",
      place: "Danone",
      summary: "Développement en ABAP et intégration MuleSoft sur des projets concrets.",
      details: ["IA générative en Python et automatisation de processus avec Power Platform."],
    },
    {
      period: "Juil. à sept. 2025",
      title: "Stagiaire, équipe informatique",
      place: "AP-HP, hôpital Robert-Debré",
      summary: "Automatisation de tâches de gestion dans l'Active Directory.",
      details: ["Conception et implémentation d'outils d'inventaire et de gestion du parc informatique."],
    },
  ] as CvEntry[],
  education: [
    {
      period: "2024 à 2029",
      title: "Programme Grande École",
      place: "Epitech Paris",
      summary:
        "Pédagogie par projets en équipe : programmation système en C, C++ orienté objet, réseau, algorithmique, web et intelligence artificielle. Actuellement en 3e année.",
    },
  ] as CvEntry[],
  associative: [
    { period: "Depuis mars 2026", title: "PULSE, BDE", place: "Epitech Paris", summary: "Membre, ancien secrétaire." },
    {
      period: "Depuis janv. 2026",
      title: "Programme Buddies",
      place: "Epitech Paris",
      summary: "Accompagnement d'étudiants internationaux en échange.",
    },
  ] as CvEntry[],
  skills: [
    { label: "Langages", value: "TypeScript, Python, Rust, C, C++, Go" },
    { label: "Web", value: "React, Next.js, Astro, HTML, CSS, WebGL, Three.js, GSAP" },
    { label: "Données et outils", value: "Supabase, Docker, Git, Vercel, CMake, Figma" },
    { label: "IA et méthode", value: "Prompt engineering, Claude, MCP, Obsidian, IA générative" },
    { label: "Langues", value: "Français et anglais, bilingue" },
  ],
  interests: "Littérature, écriture, biologie et biotechnologies.",
};

const en: typeof fr = {
  experience: [
    {
      period: "Since 2026",
      title: "Freelance web developer",
      place: "Self-employed, Paris",
      summary:
        "Showcase websites for local businesses: quote, custom or template-based mock-up, hand-over of the code and user guide, then hosting and maintenance.",
      details: [
        "Websites with no cookie banner, live opening hours and generated legal notices.",
        "Built P-Finder, an in-house tool for prospecting, quotes and client project tracking.",
      ],
    },
    {
      period: "Since March 2026",
      title: "Technical and teaching assistant",
      place: "Epitech Paris",
      summary: "Technical follow-up of first and second year students' projects in C, C++ and Python.",
      details: ["Project reviews and running project defences."],
    },
    {
      period: "Sept. to Dec. 2025",
      title: "Software developer intern",
      place: "Danone",
      summary: "ABAP development and MuleSoft integration on real projects.",
      details: ["Generative AI in Python and process automation with Power Platform."],
    },
    {
      period: "July to Sept. 2025",
      title: "Intern, IT team",
      place: "AP-HP, Robert-Debré hospital",
      summary: "Automation of management tasks in Active Directory.",
      details: ["Designed and built inventory and IT asset management tools."],
    },
  ],
  education: [
    {
      period: "2024 to 2029",
      title: "Programme Grande École (Master's level)",
      place: "Epitech Paris",
      summary:
        "Team project-based learning: systems programming in C, object-oriented C++, networking, algorithms, web and artificial intelligence. Currently in third year.",
    },
  ],
  associative: [
    { period: "Since March 2026", title: "PULSE, student union", place: "Epitech Paris", summary: "Member, former secretary." },
    {
      period: "Since Jan. 2026",
      title: "Buddies programme",
      place: "Epitech Paris",
      summary: "Helping international exchange students settle in.",
    },
  ],
  skills: [
    { label: "Languages", value: "TypeScript, Python, Rust, C, C++, Go" },
    { label: "Web", value: "React, Next.js, Astro, HTML, CSS, WebGL, Three.js, GSAP" },
    { label: "Data and tools", value: "Supabase, Docker, Git, Vercel, CMake, Figma" },
    { label: "AI and method", value: "Prompt engineering, Claude, MCP, Obsidian, generative AI" },
    { label: "Spoken languages", value: "French and English, bilingual" },
  ],
  interests: "Literature, writing, biology and biotechnology.",
};

export const cv = { fr, en };
