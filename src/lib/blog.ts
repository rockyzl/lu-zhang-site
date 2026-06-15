export type BlogLocale = "en" | "zh";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  lang?: BlogLocale;
  tags?: string[];
  status?: string;
  featured?: boolean;
};

type BlogModule = {
  frontmatter: BlogFrontmatter;
  Content: unknown;
  file?: string;
};

const modules = import.meta.glob<BlogModule>("../blog/*.md", { eager: true });
const showDrafts = import.meta.env.DEV;

function slugFromPath(filePath: string): string {
  return filePath.split("/").pop()?.replace(/\.md$/, "") ?? filePath;
}

function dateLabel(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

export function getBlogPosts(locale?: BlogLocale) {
  return Object.entries(modules)
    .map(([path, mod]) => ({
      slug: slugFromPath(path),
      ...mod.frontmatter,
      dateLabel: dateLabel(mod.frontmatter.date),
      lang: mod.frontmatter.lang ?? "en",
      tags: mod.frontmatter.tags ?? [],
      module: mod,
    }))
    .filter((post) => !locale || post.lang === locale)
    .filter((post) => showDrafts || post.status !== "draft")
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

export function getFeaturedBlogPosts(limit = 3) {
  return getBlogPosts("en")
    .filter((post) => post.featured)
    .slice(0, limit);
}
