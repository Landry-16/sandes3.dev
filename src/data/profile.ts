/** Identity and contact details, shared by every page and by the CV. */
export const profile = {
  name: "Sandes Savarimuthu",
  firstName: "Sandes",
  lastName: "Savarimuthu",
  role: "Développeur logiciel et web",
  city: "Paris",
  email: "dulnakasandes16@gmail.com",
  /** The positioning sentence under the name, for clients and recruiters alike. */
  tagline: "Je conçois des sites vitrines pour des indépendants, et des logiciels fiables.",
  availability: "Disponible pour des missions. Stage de 6 mois recherché, à partir de fin mars 2027.",
  links: {
    github: "https://github.com/Landry-16",
    linkedin: "https://www.linkedin.com/in/sandes-savarimuthu/",
    pathTracer: "https://landry-16.github.io/path-tracer-web/",
    nacre: "https://nacre.sandess.dev",
    nacreQuote: "https://nacre.sandess.dev/contact/",
  },
} as const;

/** The English words of the profile; the rest is shared. */
export const profileEn = {
  ...profile,
  role: "Software and web developer",
  tagline: "I build showcase websites for independents, and reliable software.",
  availability: "Open to projects. Looking for a 6-month internship starting late March 2027.",
  links: { ...profile.links, nacre: "https://nacre.sandess.dev/en/", nacreQuote: "https://nacre.sandess.dev/en/contact/" },
};

/** The CV supplied as a PDF: "Voir le CV en ligne" shows it, the download buttons serve it. */
export const cvFile = "/cv-sandes-savarimuthu.pdf";
