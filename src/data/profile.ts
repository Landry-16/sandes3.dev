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
  tagline: "Je construis des produits fiables et faits pour durer.",
  availability: "Disponible pour des missions. Stage recherché de fin mars à fin août 2027.",
  links: {
    github: "https://github.com/Landry-16",
    linkedin: "https://www.linkedin.com/in/sandes-savarimuthu/",
    pathTracer: "https://landry-16.github.io/path-tracer-web/",
  },
} as const;

export const cvFile = "/cv-sandes-savarimuthu.pdf";
