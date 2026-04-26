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
  // Strip base prefix
  const baseNorm = base.endsWith("/") ? base : base + "/";
  let rel = pathname.startsWith(baseNorm) ? pathname.slice(baseNorm.length) : pathname.replace(/^\//, "");
  const isZh = rel.startsWith("zh/") || rel === "zh" || rel === "zh/";
  const stripped = isZh ? rel.replace(/^zh\/?/, "") : rel;
  const target = isZh ? stripped : "zh/" + stripped;
  // Always end with trailing slash if original did (Astro default)
  const finalRel = target.endsWith("/") || target === "" ? target : target + "/";
  return baseNorm + finalRel;
}
