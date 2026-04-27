import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.ASTRO_SITE ?? "https://rockyzl.github.io",
  base: process.env.ASTRO_BASE ?? "/",
  build: { format: "directory" },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", zh: "zh-CN" },
      },
      filter: (page) => !page.includes("/zh/zh/"),
    }),
  ],
});
