import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Chinese content remains buildable for future launch, but is deliberately
// excluded from public discovery until the product team enables it.
const enableChineseSite = process.env.PUBLIC_ENABLE_ZH === "true";

export default defineConfig({
  site: process.env.ASTRO_SITE ?? "https://sciencesloop.com",
  base: process.env.ASTRO_BASE ?? "/",
  build: { format: "directory" },
  // The "Field Notes" nav + section brand the blog index; its route is /blog/.
  // Make the brand-matching URL resolve instead of 404 (both locales).
  redirects: {
    "/field-notes/": "/blog/",
    "/zh/field-notes/": "/zh/blog/",
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", zh: "zh-CN" },
      },
      filter: (page) => !page.includes("/zh/zh/") && (enableChineseSite || !new URL(page).pathname.startsWith("/zh/")),
    }),
  ],
});
