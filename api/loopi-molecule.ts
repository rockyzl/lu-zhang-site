import {
  analyzeMoleculeIdentityAndDescriptors,
  LoopiMoleculeToolError,
  type LoopiMoleculeInput,
} from "../src/lib/loopiMoleculeTool.js";

type RequestLike = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  socket?: { remoteAddress?: string };
};

type ResponseLike = {
  setHeader(name: string, value: string): void;
  status(code: number): ResponseLike;
  json(value: unknown): void;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 12;
const MAX_BODY_BYTES = 4_096;
const requestWindows = new Map<string, { startedAt: number; count: number }>();

function firstHeader(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function clientKey(request: RequestLike): string {
  return firstHeader(request.headers["x-forwarded-for"]).split(",")[0]?.trim()
    || request.socket?.remoteAddress
    || "unknown";
}

function isRateLimited(key: string, now = Date.now()): boolean {
  const current = requestWindows.get(key);
  if (!current || now - current.startedAt >= WINDOW_MS) {
    requestWindows.set(key, { startedAt: now, count: 1 });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

function isAllowedOrigin(value: string): boolean {
  if (!value) return true;
  try {
    const { protocol, hostname } = new URL(value);
    if (protocol !== "https:" && protocol !== "http:") return false;
    return hostname === "sciencesloop.com"
      || hostname === "www.sciencesloop.com"
      || hostname === "localhost"
      || hostname === "127.0.0.1"
      || hostname.endsWith(".vercel.app");
  } catch {
    return false;
  }
}

function statusFor(error: LoopiMoleculeToolError): number {
  if (error.code === "invalid_input") return 400;
  if (error.code === "rate_limited") return 429;
  if (error.code === "timeout") return 504;
  if (error.code === "service_unavailable" || error.code === "network_error") return 503;
  return 502;
}

export default async function handler(request: RequestLike, response: ResponseLike): Promise<void> {
  response.setHeader("cache-control", "no-store, max-age=0");
  response.setHeader("x-content-type-options", "nosniff");

  if (request.method !== "POST") {
    response.setHeader("allow", "POST");
    response.status(405).json({ error: { code: "method_not_allowed" } });
    return;
  }

  const origin = firstHeader(request.headers.origin);
  if (!isAllowedOrigin(origin)) {
    response.status(403).json({ error: { code: "origin_not_allowed" } });
    return;
  }

  const declaredLength = Number(firstHeader(request.headers["content-length"]));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    response.status(413).json({ error: { code: "invalid_input" } });
    return;
  }

  if (isRateLimited(clientKey(request))) {
    response.status(429).json({ error: { code: "rate_limited" } });
    return;
  }

  const body = request.body;
  const input: LoopiMoleculeInput | null = body && typeof body === "object" && !Array.isArray(body)
    && ((body as { kind?: unknown }).kind === "name" || (body as { kind?: unknown }).kind === "smiles")
    && typeof (body as { value?: unknown }).value === "string"
      ? { kind: (body as { kind: "name" | "smiles" }).kind, value: (body as { value: string }).value }
      : null;
  if (!input) {
    response.status(400).json({ error: { code: "invalid_input" } });
    return;
  }

  try {
    const result = await analyzeMoleculeIdentityAndDescriptors(input);
    response.status(200).json(result);
  } catch (error) {
    if (error instanceof LoopiMoleculeToolError) {
      response.status(statusFor(error)).json({ error: { code: error.code } });
      return;
    }
    response.status(500).json({ error: { code: "service_unavailable" } });
  }
}
