/**
 * Bounded client for Loopi's molecule identity/descriptor tool.
 *
 * This module intentionally exposes only:
 *   - PubChem-backed identity resolution for a chemical name, or
 *   - RDKit validation of a submitted SMILES,
 *   - RDKit-calculated structure descriptors.
 *
 * It does not expose redox prediction, structure chat, synthesis advice, or
 * experimental property values. The public static-site demo calls one fixed,
 * controlled endpoint and tells users not to submit confidential structures.
 */

export const LOOPI_MOLECULE_SCHEMA_VERSION = "sciencesloop.loopi-molecule.v1" as const;
export const LOOPI_MOLECULE_SERVICE_URL =
  "https://molecular-discovery-demo-api-1038659864130.us-central1.run.app/api/v1/forward/analyze" as const;
export const LOOPI_PUBLIC_API_PATH = "/api/loopi-molecule" as const;

const DEFAULT_TIMEOUT_MS = 10_000;
const MIN_TIMEOUT_MS = 8_000;
const MAX_TIMEOUT_MS = 12_000;
const MAX_RESPONSE_BYTES = 1_000_000;
const MAX_NAME_LENGTH = 200;
const MAX_SMILES_LENGTH = 512;

export type LoopiMoleculeInput =
  | Readonly<{ kind: "name"; value: string }>
  | Readonly<{ kind: "smiles"; value: string }>;

export type LoopiMoleculeToolErrorCode =
  | "invalid_input"
  | "timeout"
  | "rate_limited"
  | "service_unavailable"
  | "network_error"
  | "invalid_response"
  | "remote_error";

export class LoopiMoleculeToolError extends Error {
  readonly code: LoopiMoleculeToolErrorCode;
  readonly status?: number;
  readonly retryable: boolean;

  constructor(
    code: LoopiMoleculeToolErrorCode,
    message: string,
    options: Readonly<{ status?: number; retryable?: boolean; cause?: unknown }> = {},
  ) {
    // Avoid ErrorOptions here: Vercel's function compiler can type-check against
    // an older lib definition even though the runtime supports Error.cause.
    super(message);
    if (options.cause !== undefined) {
      Object.defineProperty(this, "cause", { value: options.cause, configurable: true });
    }
    this.name = "LoopiMoleculeToolError";
    this.code = code;
    this.status = options.status;
    this.retryable = options.retryable ?? false;
  }
}

export type LoopiIdentityProvenance =
  | Readonly<{
      kind: "database_identity";
      source: "PubChem PUG REST";
      sourceUrl: string;
      recordId: string;
      retrievedAt: string;
      queryInput: string;
      returnedInchiKey: string;
      licenseNote: string;
    }>
  | Readonly<{
      kind: "structure_identity";
      source: "RDKit";
      sourceType: "remote_analysis_service";
      note: "Identity calculated by the RDKit analysis service from the submitted SMILES; no database identity was asserted.";
    }>;

export type LoopiCalculatedDescriptors = Readonly<{
  kind: "calculated_descriptors";
  source: "RDKit";
  contract: string;
  units: Readonly<Record<string, string>>;
  values: Readonly<{
    formula: string;
    molecularWeight: number;
    exactMolecularWeight: number;
    tpsa: number;
    logP: number;
    formalCharge: number;
    heavyAtomCount: number;
    ringCount: number;
    aromaticRingCount: number;
    rotatableBonds: number;
    hydrogenBondDonors: number;
    hydrogenBondAcceptors: number;
    functionalGroupFlags: readonly string[];
  }>;
}>;

export type LoopiMoleculeAnalysis = Readonly<{
  schemaVersion: typeof LOOPI_MOLECULE_SCHEMA_VERSION;
  kind: "molecule_identity_and_descriptors";
  identity: Readonly<{
    moleculeId: string;
    inputName: string;
    canonicalSmiles: string;
    inchiKey: string;
    formalCharge: number;
    resolverConfidence: string;
    ambiguityFlags: readonly string[];
    provenance: LoopiIdentityProvenance;
  }>;
  descriptors: LoopiCalculatedDescriptors;
  evidenceGaps: readonly Readonly<{
    propertyName: string;
    status: string;
    recommendedAction: string;
  }>[];
  warnings: readonly string[];
  boundary: Readonly<{
    experimentalValuesIncluded: false;
    predictionsIncluded: false;
  }>;
}>;

export type LoopiMoleculeToolOptions = Readonly<{
  timeoutMs?: number;
  /** Dependency injection for deterministic tests; production should omit it. */
  fetchImpl?: typeof fetch;
}>;

export type LoopiPublicMoleculeToolOptions = Readonly<{
  timeoutMs?: number;
  endpoint?: string;
  /** Dependency injection for deterministic tests; production should omit it. */
  fetchImpl?: typeof fetch;
}>;

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredRecord(parent: JsonRecord, key: string): JsonRecord {
  const value = parent[key];
  if (!isRecord(value)) throw invalidResponse(`Missing or invalid ${key}.`);
  return value;
}

function requiredString(parent: JsonRecord, key: string, maxLength = 2_000): string {
  const value = parent[key];
  if (typeof value !== "string" || !value.trim() || value.length > maxLength) {
    throw invalidResponse(`Missing or invalid ${key}.`);
  }
  return value.trim();
}

function requiredFiniteNumber(parent: JsonRecord, key: string): number {
  const value = parent[key];
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw invalidResponse(`Missing or invalid ${key}.`);
  }
  return value;
}

function requiredInteger(parent: JsonRecord, key: string, minimum?: number): number {
  const value = requiredFiniteNumber(parent, key);
  if (!Number.isInteger(value) || (minimum !== undefined && value < minimum)) {
    throw invalidResponse(`Missing or invalid ${key}.`);
  }
  return value;
}

function stringArray(value: unknown, key: string, maxItems = 100): readonly string[] {
  if (!Array.isArray(value) || value.length > maxItems || value.some((item) => typeof item !== "string")) {
    throw invalidResponse(`Missing or invalid ${key}.`);
  }
  return value.map((item) => item.trim()).filter(Boolean);
}

function stringRecord(value: unknown, key: string): Readonly<Record<string, string>> {
  if (!isRecord(value)) throw invalidResponse(`Missing or invalid ${key}.`);
  const entries = Object.entries(value);
  if (entries.length > 100 || entries.some(([, item]) => typeof item !== "string")) {
    throw invalidResponse(`Missing or invalid ${key}.`);
  }
  return Object.fromEntries(entries) as Record<string, string>;
}

function invalidResponse(message: string, cause?: unknown): LoopiMoleculeToolError {
  return new LoopiMoleculeToolError("invalid_response", message, { cause });
}

function validateInput(input: LoopiMoleculeInput): { kind: "name" | "smiles"; value: string } {
  if (!input || (input.kind !== "name" && input.kind !== "smiles")) {
    throw new LoopiMoleculeToolError("invalid_input", "Input kind must be 'name' or 'smiles'.");
  }
  const value = typeof input.value === "string" ? input.value.trim() : "";
  const maxLength = input.kind === "name" ? MAX_NAME_LENGTH : MAX_SMILES_LENGTH;
  if (!value || value.length > maxLength) {
    throw new LoopiMoleculeToolError(
      "invalid_input",
      `${input.kind === "name" ? "Chemical name" : "SMILES"} must contain 1-${maxLength} characters.`,
    );
  }
  return { kind: input.kind, value };
}

function validateTimeout(timeoutMs: number | undefined): number {
  const value = timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (!Number.isInteger(value) || value < MIN_TIMEOUT_MS || value > MAX_TIMEOUT_MS) {
    throw new LoopiMoleculeToolError(
      "invalid_input",
      `timeoutMs must be an integer between ${MIN_TIMEOUT_MS} and ${MAX_TIMEOUT_MS}.`,
    );
  }
  return value;
}

function remoteDetail(body: unknown): string | undefined {
  if (!isRecord(body)) return undefined;
  const detail = body.detail ?? body.error;
  return typeof detail === "string" ? detail.slice(0, 300) : undefined;
}

function mapHttpError(status: number, detail?: string): LoopiMoleculeToolError {
  const suffix = detail ? `: ${detail}` : "";
  if (status === 400 || status === 404 || status === 422) {
    return new LoopiMoleculeToolError("invalid_input", `Molecule service rejected the input${suffix}`, { status });
  }
  if (status === 429) {
    return new LoopiMoleculeToolError("rate_limited", `Molecule service rate limit exceeded${suffix}`, {
      status,
      retryable: true,
    });
  }
  if (status >= 500) {
    return new LoopiMoleculeToolError("service_unavailable", `Molecule service is unavailable${suffix}`, {
      status,
      retryable: true,
    });
  }
  return new LoopiMoleculeToolError("remote_error", `Unexpected molecule service response${suffix}`, {
    status,
    retryable: status >= 500,
  });
}

function parseProvenance(
  raw: JsonRecord,
  inputKind: "name" | "smiles",
): LoopiIdentityProvenance {
  const value = raw.identity_provenance;
  if (inputKind === "smiles") {
    if (value !== null && value !== undefined) {
      throw invalidResponse("A submitted SMILES unexpectedly asserted a database identity.");
    }
    return {
      kind: "structure_identity",
      source: "RDKit",
      sourceType: "remote_analysis_service",
      note: "Identity calculated by the RDKit analysis service from the submitted SMILES; no database identity was asserted.",
    };
  }

  if (!isRecord(value)) throw invalidResponse("Name resolution did not include identity provenance.");
  const source = requiredString(value, "source", 100);
  if (source !== "PubChem PUG REST") {
    throw invalidResponse("Name identity was not resolved from the allowed PubChem source.");
  }
  const sourceUrl = requiredString(value, "source_url", 2_000);
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(sourceUrl);
  } catch (error) {
    throw invalidResponse("PubChem provenance URL is invalid.", error);
  }
  if (parsedUrl.protocol !== "https:" || parsedUrl.hostname !== "pubchem.ncbi.nlm.nih.gov") {
    throw invalidResponse("PubChem provenance URL used an unexpected host.");
  }
  const retrievedAt = requiredString(value, "retrieved_at", 100);
  if (!Number.isFinite(Date.parse(retrievedAt))) {
    throw invalidResponse("PubChem retrieval timestamp is invalid.");
  }
  return {
    kind: "database_identity",
    source: "PubChem PUG REST",
    sourceUrl,
    recordId: requiredString(value, "original_record_id", 200),
    retrievedAt,
    queryInput: requiredString(value, "query_input", MAX_NAME_LENGTH),
    returnedInchiKey: requiredString(value, "returned_inchi_key", 100),
    licenseNote: requiredString(value, "license", 1_000),
  };
}

function normalizeResponse(
  raw: unknown,
  inputKind: "name" | "smiles",
  inputValue: string,
): LoopiMoleculeAnalysis {
  if (!isRecord(raw)) throw invalidResponse("Molecule service returned non-object JSON.");
  if (raw.workflow !== "forward_molecule_to_properties" || raw.status !== "complete") {
    throw invalidResponse("Molecule service returned an unexpected workflow state.");
  }

  const molecule = requiredRecord(raw, "molecule");
  const descriptor = requiredRecord(raw, "structure_descriptor");
  const descriptorSource = requiredString(descriptor, "descriptor_source", 100);
  const descriptorContract = requiredString(descriptor, "descriptor_contract", 500);
  if (descriptorSource !== "RDKit" || !/not experimental properties/i.test(descriptorContract)) {
    throw invalidResponse("Descriptor response did not preserve the RDKit/non-experimental boundary.");
  }

  const gapsRaw = raw.gaps;
  if (!Array.isArray(gapsRaw) || gapsRaw.length > 100) throw invalidResponse("Missing or invalid gaps.");
  const evidenceGaps = gapsRaw.map((item) => {
    if (!isRecord(item)) throw invalidResponse("Invalid evidence gap.");
    return {
      propertyName: requiredString(item, "property_name", 200),
      status: requiredString(item, "status", 200),
      recommendedAction: requiredString(item, "recommended_action", 1_000),
    };
  });

  const canonicalSmiles = requiredString(molecule, "canonical_smiles", MAX_SMILES_LENGTH);
  const inchiKey = requiredString(descriptor, "inchi_key", 100);
  const provenance = parseProvenance(raw, inputKind);
  if (requiredString(descriptor, "canonical_smiles", MAX_SMILES_LENGTH) !== canonicalSmiles) {
    throw invalidResponse("Molecule identity and descriptor canonical SMILES do not match.");
  }
  if (provenance.kind === "database_identity" && provenance.returnedInchiKey !== inchiKey) {
    throw invalidResponse("PubChem identity and RDKit descriptor InChIKeys do not match.");
  }
  if (provenance.kind === "database_identity" && provenance.queryInput !== inputValue) {
    throw invalidResponse("PubChem provenance query does not match the submitted name.");
  }
  const formalCharge = requiredInteger(molecule, "formal_charge");
  if (requiredInteger(descriptor, "formal_charge") !== formalCharge) {
    throw invalidResponse("Molecule identity and descriptor formal charges do not match.");
  }

  return {
    schemaVersion: LOOPI_MOLECULE_SCHEMA_VERSION,
    kind: "molecule_identity_and_descriptors",
    identity: {
      moleculeId: requiredString(molecule, "molecule_id", 300),
      inputName: requiredString(molecule, "input_name", 500),
      canonicalSmiles,
      inchiKey,
      formalCharge,
      resolverConfidence: requiredString(molecule, "resolver_confidence", 100),
      ambiguityFlags: stringArray(molecule.ambiguity_flags, "ambiguity_flags"),
      provenance,
    },
    descriptors: {
      kind: "calculated_descriptors",
      source: "RDKit",
      contract: descriptorContract,
      units: stringRecord(descriptor.descriptor_units, "descriptor_units"),
      values: {
        formula: requiredString(descriptor, "formula", 200),
        molecularWeight: requiredFiniteNumber(descriptor, "molecular_weight"),
        exactMolecularWeight: requiredFiniteNumber(descriptor, "exact_molecular_weight"),
        tpsa: requiredFiniteNumber(descriptor, "tpsa"),
        logP: requiredFiniteNumber(descriptor, "logp"),
        formalCharge,
        heavyAtomCount: requiredInteger(descriptor, "heavy_atom_count", 0),
        ringCount: requiredInteger(descriptor, "ring_count", 0),
        aromaticRingCount: requiredInteger(descriptor, "aromatic_ring_count", 0),
        rotatableBonds: requiredInteger(descriptor, "rotatable_bonds", 0),
        hydrogenBondDonors: requiredInteger(descriptor, "hbond_donors", 0),
        hydrogenBondAcceptors: requiredInteger(descriptor, "hbond_acceptors", 0),
        functionalGroupFlags: stringArray(descriptor.functional_group_flags, "functional_group_flags"),
      },
    },
    evidenceGaps,
    warnings: stringArray(raw.warnings, "warnings"),
    boundary: {
      experimentalValuesIncluded: false,
      predictionsIncluded: false,
    },
  };
}

export async function analyzeMoleculeIdentityAndDescriptors(
  input: LoopiMoleculeInput,
  options: LoopiMoleculeToolOptions = {},
): Promise<LoopiMoleculeAnalysis> {
  const normalized = validateInput(input);
  const timeoutMs = validateTimeout(options.timeoutMs);
  const fetchImpl = options.fetchImpl ?? fetch;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    let response: Response;
    try {
      response = await fetchImpl(LOOPI_MOLECULE_SERVICE_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          molecule_input: normalized.value,
          resolution_options: { input_format: normalized.kind },
          engine: "plain",
        }),
        credentials: "omit",
        redirect: "error",
        cache: "no-store",
        signal: controller.signal,
      });
    } catch (error) {
      if (controller.signal.aborted || (error instanceof Error && error.name === "AbortError")) {
        throw new LoopiMoleculeToolError("timeout", `Molecule service timed out after ${timeoutMs} ms.`, {
          retryable: true,
          cause: error,
        });
      }
      throw new LoopiMoleculeToolError("network_error", "Could not reach the molecule service.", {
        retryable: true,
        cause: error,
      });
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      throw invalidResponse("Molecule service returned an unexpected content type.");
    }
    const declaredLength = Number(response.headers.get("content-length"));
    if (Number.isFinite(declaredLength) && declaredLength > MAX_RESPONSE_BYTES) {
      throw invalidResponse("Molecule service response exceeded the size limit.");
    }
    let text: string;
    try {
      text = await response.text();
    } catch (error) {
      if (controller.signal.aborted || (error instanceof Error && error.name === "AbortError")) {
        throw new LoopiMoleculeToolError("timeout", `Molecule service timed out after ${timeoutMs} ms.`, {
          retryable: true,
          cause: error,
        });
      }
      throw new LoopiMoleculeToolError("network_error", "Could not read the molecule service response.", {
        retryable: true,
        cause: error,
      });
    }
    if (new TextEncoder().encode(text).byteLength > MAX_RESPONSE_BYTES) {
      throw invalidResponse("Molecule service response exceeded the size limit.");
    }

    let body: unknown = null;
    if (text) {
      try {
        body = JSON.parse(text);
      } catch (error) {
        throw invalidResponse("Molecule service returned invalid JSON.", error);
      }
    }
    if (!response.ok) throw mapHttpError(response.status, remoteDetail(body));

    return normalizeResponse(body, normalized.kind, normalized.value);
  } finally {
    clearTimeout(timeout);
  }
}

export function analyzeMoleculeName(
  name: string,
  options?: LoopiMoleculeToolOptions,
): Promise<LoopiMoleculeAnalysis> {
  return analyzeMoleculeIdentityAndDescriptors({ kind: "name", value: name }, options);
}

export function analyzeMoleculeSmiles(
  smiles: string,
  options?: LoopiMoleculeToolOptions,
): Promise<LoopiMoleculeAnalysis> {
  return analyzeMoleculeIdentityAndDescriptors({ kind: "smiles", value: smiles }, options);
}

/**
 * Browser-safe, same-origin entry point. The public site calls a Vercel
 * function rather than the Cloud Run service directly, so CORS, validation,
 * timeouts, and basic abuse controls remain at a SciencesLoop-owned boundary.
 */
export async function analyzeMoleculeThroughPublicApi(
  input: LoopiMoleculeInput,
  options: LoopiPublicMoleculeToolOptions = {},
): Promise<LoopiMoleculeAnalysis> {
  const normalized = validateInput(input);
  const timeoutMs = validateTimeout(options.timeoutMs);
  const fetchImpl = options.fetchImpl ?? fetch;
  const endpoint = options.endpoint ?? LOOPI_PUBLIC_API_PATH;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    let response: Response;
    try {
      response = await fetchImpl(endpoint, {
        method: "POST",
        headers: { accept: "application/json", "content-type": "application/json" },
        body: JSON.stringify(normalized),
        credentials: "same-origin",
        redirect: "error",
        cache: "no-store",
        signal: controller.signal,
      });
    } catch (error) {
      if (controller.signal.aborted || (error instanceof Error && error.name === "AbortError")) {
        throw new LoopiMoleculeToolError("timeout", `Molecule request timed out after ${timeoutMs} ms.`, {
          retryable: true,
          cause: error,
        });
      }
      throw new LoopiMoleculeToolError("network_error", "Could not reach the SciencesLoop molecule endpoint.", {
        retryable: true,
        cause: error,
      });
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      throw invalidResponse("SciencesLoop molecule endpoint returned an unexpected content type.");
    }
    const body = await response.json().catch((error) => {
      throw invalidResponse("SciencesLoop molecule endpoint returned invalid JSON.", error);
    });
    if (!response.ok) {
      const code = isRecord(body) && isRecord(body.error) && typeof body.error.code === "string"
        ? body.error.code
        : "remote_error";
      const allowedCodes: readonly LoopiMoleculeToolErrorCode[] = [
        "invalid_input", "timeout", "rate_limited", "service_unavailable", "network_error", "invalid_response", "remote_error",
      ];
      const safeCode = allowedCodes.includes(code as LoopiMoleculeToolErrorCode)
        ? code as LoopiMoleculeToolErrorCode
        : "remote_error";
      throw new LoopiMoleculeToolError(safeCode, "Molecule endpoint rejected the request.", {
        status: response.status,
        retryable: safeCode === "timeout" || safeCode === "rate_limited" || safeCode === "service_unavailable" || safeCode === "network_error",
      });
    }
    if (!isRecord(body) || body.schemaVersion !== LOOPI_MOLECULE_SCHEMA_VERSION || body.kind !== "molecule_identity_and_descriptors") {
      throw invalidResponse("SciencesLoop molecule endpoint returned an unexpected schema.");
    }
    return body as LoopiMoleculeAnalysis;
  } finally {
    clearTimeout(timeout);
  }
}
