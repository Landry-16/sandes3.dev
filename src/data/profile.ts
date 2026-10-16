/** Identity and contact details, shared by every page and by the CV. */
export const profile = {
  name: "Sandes Savarimuthu",
  firstName: "Sandes",
  lastName: "Savarimuthu",
  role: "Développeur logiciel et web",
  city: "Paris",
  email: "dulnakasandes16@gmail.com",
  /** Printed on the PDF CV only, never rendered on the public pages. */
  phone: "07 72 32 88 10",
  /** The positioning sentence under the name, for clients and recruiters alike. */
  tagline: "Je conçois des sites vitrines pour des indépendants, et des logiciels fiables.",
  availability: "Disponible pour des missions. Stage recherché de fin mars à fin août 2027.",
  links: {
    github: "https://github.com/Landry-16",
    linkedin: "https://www.linkedin.com/in/sandes-savarimuthu/",
    pathTracer: "https://landry-16.github.io/path-tracer-web/",
    nacre: "https://nacre.sandess.dev",
    nacreQuote: "https://nacre.sandess.dev/contact/",
  },
} as const;

export const cvFile = "/cv-sandes-savarimuthu.pdf";
