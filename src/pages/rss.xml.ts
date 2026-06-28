import type { APIRoute } from "astro";
import { getBlogPosts } from "../lib/blog";
import { u } from "../lib/url";

const SITE_URL = (import.meta.env.SITE ?? "https://sciencesloop.com").replace(/\/+$/, "");

function escapeXml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteUrl(path: string): string {
  return new URL(u(path), `${SITE_URL}/`).href;
}

function rfc822Date(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toUTCString() : date.toUTCString();
}

export const GET: APIRoute = () => {
  const posts = getBlogPosts("en");
  const items = posts
    .map((post) => {
      const link = absoluteUrl(`/blog/${post.slug}/`);
      const categories = post.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join("\n");

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${escapeXml(rfc822Date(post.date))}</pubDate>
      <description>${escapeXml(post.description)}</description>
${categories}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SciencesLoop Field Notes</title>
    <link>${escapeXml(absoluteUrl("/blog/"))}</link>
    <atom:link href="${escapeXml(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml" />
    <description>Short notes on AI for Science, scientific agents, RAG, evaluation, MLOps, and battery materials discovery.</description>
    <language>en-us</language>
    <lastBuildDate>${escapeXml(new Date().toUTCString())}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
