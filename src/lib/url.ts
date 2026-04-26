// Resolve a site-internal path against the configured Astro base URL.
// Works whether the path starts with "/" or is relative.
//   u("/about/")     → "/lu-zhang-site/about/"  (base = "/lu-zhang-site/")
//   u("about/")      → "/lu-zhang-site/about/"
//   u("/images/x.jpg") → "/lu-zhang-site/images/x.jpg"
export const BASE = import.meta.env.BASE_URL;

export function u(path: string): string {
  if (!path) return BASE;
  if (/^https?:\/\//.test(path)) return path; // external — leave alone
  const rel = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + rel;
}
