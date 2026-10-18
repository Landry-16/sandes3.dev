import { defineMiddleware } from "astro:middleware";

/**
 * On English pages, internal links written "/x" become "/en/x". Files (with an extension),
 * built assets, the template demos (static, French only) and links that carry an hreflang
 * (the language switch) are left as they are.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const english = /^\/en(\/|$)/.test(context.url.pathname);
  if (!english || !response.headers.get("content-type")?.includes("text/html")) return response;
  const html = (await response.text()).replace(/<a\b[^>]*>/g, (tag) =>
    tag.includes("hreflang=")
      ? tag
      : tag.replace(/\shref="\/(?!en\/|_astro\/|templates\/)([^"#?]*)([^"]*)"/, (match, path: string, rest: string) =>
          /\.[a-z0-9]+$/i.test(path) ? match : ` href="/en/${path}${rest}"`,
        ),
  );
  return new Response(html, { status: response.status, headers: response.headers });
});
