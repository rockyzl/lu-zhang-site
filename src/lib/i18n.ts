import strings from "../i18n/strings.json";

export type Locale = "en" | "zh";

/** Detect the locale from an Astro pathname (e.g. "/lu-zhang-site/zh/about/" → "zh"). */
export function detectLocale(pathname: string): Locale {
  const stripped = pathname.replace(/^\/(?:lu-zhang-site\/)?/, "");
  return stripped.startsWith("zh/") || stripped === "zh" ? "zh" : "en";
}

/** Translate a key. Falls back to English, then to the key itself. */
export function t(key: string, locale: Locale): string {
  const entry = (strings as Record<string, Record<string, string>>)[key];
  if (!entry) return key;
  return entry[locale] ?? entry.en ?? key;
}

/** Build the alternate-locale path (toggle target) from the current pathname. */
export function altLocalePath(pathname: string, base: string): string {
  // Use base WITHOUT trailing slash so we can prepend cleanly.
  const baseNoSlash = base.replace(/\/+$/, "");

  // Strip base from pathname; whatever's left starts with "/" (or is empty).
  let rel = baseNoSlash && pathname.startsWith(baseNoSlash)
    ? pathname.slice(baseNoSlash.length)
    : pathname;
  if (!rel.startsWith("/")) rel = "/" + rel;

  // Toggle: strip "/zh" if present, otherwise prepend "/zh".
  let target: string;
  if (rel === "/zh" || rel === "/zh/" || rel.startsWith("/zh/")) {
    target = rel.replace(/^\/zh/, "") || "/";
  } else {
    target = "/zh" + rel;
  }

  if (!target.endsWith("/")) target += "/";
  return baseNoSlash + target;
}
