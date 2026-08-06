import assert from "node:assert/strict";
import {
  LOOPI_MOLECULE_SERVICE_URL,
  LoopiMoleculeToolError,
  analyzeMoleculeName,
  analyzeMoleculeSmiles,
} from "../src/lib/loopiMoleculeTool.ts";

const descriptor = {
  input_smiles: "O=C1C=CC(=O)C=C1",
  input_name: "Quinone",
  canonical_smiles: "O=C1C=CC(=O)C=C1",
  inchi_key: "AZQWKYJCGOJGHM-UHFFFAOYSA-N",
  formula: "C6H4O2",
  formal_charge: 0,
  molecular_weight: 108.096,
  exact_molecular_weight: 108.0211,
  tpsa: 34.14,
  logp: 0.2506,
  heavy_atom_count: 8,
  ring_count: 1,
  aromatic_ring_count: 0,
  rotatable_bonds: 0,
  hbond_donors: 0,
  hbond_acceptors: 2,
  functional_group_flags: ["carbonyl", "quinone_like"],
  descriptor_source: "RDKit",
  descriptor_units: {
    molecular_weight: "g/mol",
    exact_molecular_weight: "Da",
    tpsa: "angstrom^2",
    logp: "dimensionless",
  },
  descriptor_contract: "RDKit-calculated structure descriptors; not experimental properties",
};

const base = {
  workflow: "forward_molecule_to_properties",
  status: "complete",
  molecule: {
    molecule_id: "pubchem:4650",
    input_name: "Quinone",
    canonical_smiles: "O=C1C=CC(=O)C=C1",
    formal_charge: 0,
    resolver_confidence: "confirmed",
    ambiguity_flags: [],
  },
  structure_descriptor: descriptor,
  evidence: [{ property_name: "must_not_escape", value: 123 }],
  gaps: [
    {
      property_name: "redox_potential_vs_she",
      status: "missing_source_backed_value",
      recommended_action: "query a named source or validated model",
    },
  ],
  warnings: ["RDKit descriptors are structure features, not experimental properties."],
};

function response(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

let captured;
const nameFetch = async (url, init) => {
  captured = { url, init };
  return response({
    ...base,
    identity_provenance: {
      source: "PubChem PUG REST",
      dataset_version: "PUG REST live",
      license: "PubChem public data; contributed records may have third-party rights",
      source_url:
        "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/p-benzoquinone/property/Title,SMILES/JSON",
      retrieved_at: "2026-08-06T04:27:11.702222+00:00",
      original_record_id: "4650",
      query_input: "p-benzoquinone",
      returned_inchi_key: "AZQWKYJCGOJGHM-UHFFFAOYSA-N",
    },
  });
};

const named = await analyzeMoleculeName("  p-benzoquinone  ", { fetchImpl: nameFetch });
assert.equal(captured.url, LOOPI_MOLECULE_SERVICE_URL);
assert.deepEqual(JSON.parse(captured.init.body), {
  molecule_input: "p-benzoquinone",
  resolution_options: { input_format: "name" },
  engine: "plain",
});
assert.equal(named.identity.provenance.kind, "database_identity");
assert.equal(named.identity.provenance.recordId, "4650");
assert.equal(named.descriptors.kind, "calculated_descriptors");
assert.equal(named.descriptors.source, "RDKit");
assert.equal(named.descriptors.values.formula, "C6H4O2");
assert.equal(named.boundary.experimentalValuesIncluded, false);
assert.equal(named.boundary.predictionsIncluded, false);
assert.equal("evidence" in named, false, "raw property evidence must not escape the bounded client");

const smiles = await analyzeMoleculeSmiles("O=C1C=CC(=O)C=C1", {
  fetchImpl: async () =>
    response({
      ...base,
      molecule: { ...base.molecule, molecule_id: "inchikey:AZQWKYJCGOJGHM-UHFFFAOYSA-N" },
      identity_provenance: null,
    }),
});
assert.equal(smiles.identity.provenance.kind, "structure_identity");
assert.equal(smiles.identity.provenance.source, "RDKit");

await assert.rejects(
  () => analyzeMoleculeName(" ", { fetchImpl: nameFetch }),
  (error) => error instanceof LoopiMoleculeToolError && error.code === "invalid_input",
);

await assert.rejects(
  () => analyzeMoleculeName("quinone", { fetchImpl: async () => response({ detail: "slow down" }, 429) }),
  (error) =>
    error instanceof LoopiMoleculeToolError &&
    error.code === "rate_limited" &&
    error.retryable === true &&
    error.status === 429,
);

await assert.rejects(
  () =>
    analyzeMoleculeName("quinone", {
      fetchImpl: async () =>
        response({
          ...base,
          structure_descriptor: {
            ...descriptor,
            descriptor_contract: "experimental redox value",
          },
          identity_provenance: null,
        }),
    }),
  (error) => error instanceof LoopiMoleculeToolError && error.code === "invalid_response",
);

console.log("loopi molecule tool: 5 checks passed");

