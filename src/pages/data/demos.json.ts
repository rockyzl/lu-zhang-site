import type { APIRoute } from "astro";
import { publicDemoRegistrySnapshot } from "../../data/demos";

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(`${JSON.stringify(publicDemoRegistrySnapshot, null, 2)}\n`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    },
  });
