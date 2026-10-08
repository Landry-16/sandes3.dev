import generated from "../data/clients.generated.json";

/** A delivered client website, collected at build time by scripts/fetch-client-sites.mjs. */
export interface ClientSite {
  slug: string;
  name: string;
  category: string;
  city: string;
  url: string;
  /** Public path of a preview image copied into public/clients, when the site has a hero photo. */
  image?: string;
}

export const clientSites: ClientSite[] = generated as ClientSite[];
