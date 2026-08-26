export type LocalizedText = Readonly<{ en: string; zh: string }>;

export type DemoSourceKind = "dataset" | "paper" | "license" | "documentation";

export type DemoSource = Readonly<{
  kind: DemoSourceKind;
  label: LocalizedText;
  url: string;
}>;

export type Demo = Readonly<{
  id: string;
  path: string;
  articlePath?: string;
  repoUrl?: string;
  featured: boolean;
  title: LocalizedText;
  tagline: LocalizedText;
  summary: LocalizedText;
  tags: readonly string[];
  sources?: readonly DemoSource[];
}>;

export type PublicDemoRegistrySnapshot = Readonly<{
  readonly schemaVersion: "sciencesloop.demo-registry.v1";
  readonly demos: readonly Demo[];
}>;

export const DEMO_REGISTRY_SCHEMA_VERSION = "sciencesloop.demo-registry.v1" as const;

// Single public index for live demos. Pages derive their cards and links from
// this file so adding a demo does not require editing the home, Projects, and
// Agent-index pages separately.
export const demos: readonly Demo[] = [
  {
    id: "fieldgamma",
    path: "/agent/fieldgamma/",
    articlePath: "/blog/2026-08-25-fieldgamma-limited-data-radioisotope-detection/",
    repoUrl: "https://github.com/rockyzl/fieldgamma",
    featured: true,
    title: { en: "FieldGamma", zh: "FieldGamma" },
    tagline: {
      en: "Test what limited-data isotope classifiers do when the spectrum shifts",
      zh: "检验有限数据同位素分类器在能谱偏移后还剩多少能力",
    },
    summary: {
      en: "A governed synthetic benchmark across 1–25 labeled spectra per isotope, five model families, frozen low-count/background/drift tests, ANSI N42 parsing, and a replay API—with the negative result left visible.",
      zh: "一个受治理的合成基准：每种同位素 1–25 条标注光谱、五类模型、冻结的低计数/背景/漂移测试、ANSI N42 解析和回放 API，并把负面结果原样保留。",
    },
    tags: ["gamma spectra", "limited-data ML", "ANSI N42", "test & evaluation"],
    sources: [
      {
        kind: "dataset",
        label: { en: "Sandia BALDR seed signatures", zh: "Sandia BALDR seed signatures" },
        url: "https://github.com/sandialabs/BALDR-Study-07.04",
      },
      {
        kind: "license",
        label: { en: "PyRIID BSD-3-Clause license", zh: "PyRIID BSD-3-Clause 许可" },
        url: "https://github.com/sandialabs/pyriid/blob/master/LICENSE.md",
      },
      {
        kind: "documentation",
        label: { en: "NIST ANSI N42 examples", zh: "NIST ANSI N42 示例" },
        url: "https://www.nist.gov/pml/radiation-physics/ansiieee-n4242-2020-version",
      },
    ],
  },
  {
    id: "chemgraph-loop",
    path: "/agent/",
    featured: true,
    title: { en: "ChemGraph Loop", zh: "ChemGraph Loop" },
    tagline: { en: "A real agentic chemistry workflow you can run live", zh: "一个可以现场跑的真实 agentic 化学工作流" },
    summary: {
      en: "Ask a plain-language question about a small molecule and watch a real ChemGraph agent resolve a molecule, run a simulation, draw a 3D structure, and audit its result against a workflow guard.",
      zh: "用大白话问一个小分子问题，看真实 ChemGraph agent 识别分子、跑仿真、画 3D 结构，并对照工作流护栏审计结果。",
    },
    tags: ["agentic workflow", "LangGraph + ASE", "tool use", "workflow guard"],
  },
  {
    id: "condition-monitoring",
    path: "/agent/condition-monitoring/",
    featured: true,
    title: { en: "Condition-Monitoring Agent", zh: "设备状态监测智能体" },
    tagline: { en: "A deterministic predictive-maintenance pipeline you can run live", zh: "一个可以现场跑的确定性预测维护管道" },
    summary: {
      en: "A deterministic 10-stage remaining-useful-life analysis on public NASA turbofan data, with human decision gates, evidence-backed decision cards, and cited diagnostics.",
      zh: "在 NASA 公开涡扇发动机数据上跑 10 阶段剩余寿命分析，带人工决策把关、带证据的决策卡和带引用的诊断。",
    },
    tags: ["deterministic pipeline", "predictive maintenance", "human-in-the-loop", "auditable trace"],
  },
  {
    id: "preventive-health-model-lab",
    path: "/agent/preventive-health-model-lab/",
    featured: true,
    title: { en: "Preventive Health Model Lab", zh: "预防健康模型实验室" },
    tagline: { en: "A QLoRA fine-tuning study you can inspect end-to-end", zh: "一个能从头看到尾的 QLoRA 微调研究" },
    summary: {
      en: "A controlled QLoRA study comparing Gemma 3 and MedGemma on the same preventive-health task, synthetic data, and evaluation harness.",
      zh: "在同一个预防健康任务、同一批合成数据和同一评估 harness 上，对比 Gemma 3 与 MedGemma 的受控 QLoRA 研究。",
    },
    tags: ["QLoRA", "MedGemma / Gemma 3", "eval harness", "synthetic data"],
  },
  {
    id: "molecular-property-predictor",
    path: "/agent/molecular-property-predictor/",
    articlePath: "/blog/2026-07-15-can-a-fine-tuned-molecular-foundation-model-match-engineered-baselines/",
    featured: false,
    title: { en: "MIST Transfer Benchmark", zh: "MIST 迁移学习 Benchmark" },
    tagline: { en: "Compare structure-based ML with a fine-tuned molecular foundation model", zh: "比较结构机器学习与微调分子基础模型" },
    summary: {
      en: "Enter a SMILES string and compare fixed Ridge, XGBoost, MLP, and fine-tuned MIST-28M predictors on QM9 DFT property labels.",
      zh: "输入 SMILES，同时比较固定 Ridge、XGBoost、MLP 和 fine-tuned MIST-28M 对 QM9 DFT 性质标签的预测。",
    },
    tags: ["MIST-28M", "QM9", "XGBoost", "model comparison"],
  },
  {
    id: "redox-rfb-predictor",
    path: "/agent/redox-rfb-predictor/",
    articlePath: "/blog/2026-07-15-a-redox-predictor-needs-a-structure-checkpoint/",
    repoUrl: "https://github.com/rockyzl/redox-rfb-predictor",
    featured: true,
    title: { en: "Redox RFB Predictor", zh: "液流电池氧化还原电位预测器" },
    tagline: { en: "A public redox-potential demo that checks molecular identity before prediction", zh: "在预测前先确认分子身份的公开氧化还原电位 Demo" },
    summary: {
      en: "Enter a SMILES or chemical name, inspect PubChem-backed name options and an editable RDKit structure, then confirm it before the fixed Random Forest predicts on RedDB's DFT scale.",
      zh: "输入 SMILES 或化学名称，先检查 PubChem 支持的名称选项与可编辑 RDKit 结构，确认后才由固定 Random Forest 在 RedDB DFT 尺度上预测。",
    },
    tags: ["redox potential", "RDKit", "PubChem", "human confirmation", "flow batteries"],
  },
  {
    id: "molecular-discovery-workflow",
    path: "/agent/molecular-discovery/",
    articlePath: "/blog/2026-07-16-a-molecular-workflow-should-show-what-it-does-not-know/",
    featured: true,
    title: { en: "Molecular Discovery Workflow", zh: "分子发现工作流" },
    tagline: { en: "Resolve identity, inspect the structure, then show what evidence is missing", zh: "解析身份、检查结构，再明确展示证据缺口" },
    summary: {
      en: "A public, bounded version of a private molecular-discovery prototype: PubChem-backed identity resolution, human structure confirmation, RDKit descriptors, and explicit evidence gaps instead of invented property values.",
      zh: "一个私有分子发现原型的公开受限版本：PubChem 身份解析、人工结构确认、RDKit 描述符，以及明确的证据缺口，而不是编造性质数值。",
    },
    tags: ["PubChem", "RDKit", "evidence gaps", "human confirmation"],
  },
  {
    id: "guidelinebench-oa",
    path: "/agent/guidelinebench-oa/",
    featured: true,
    title: { en: "Guideline-Faithfulness Chat", zh: "指南忠实度聊天" },
    tagline: {
      en: "Reports clinical-guideline positions while preserving each one's official strength",
      zh: "如实复述临床指南立场,并保住每一份的官方推荐力度",
    },
    summary: {
      en: "Ask a knee-osteoarthritis question; the answer reports what NICE NG226 and ACR/AF say, re-reading each source so the recommendation strength stays faithful instead of collapsing into one confident answer. A research demo of guideline faithfulness — not medical advice.",
      zh: "问一个膝关节炎的问题,答案如实复述 NICE NG226 和 ACR/AF 怎么说,并回读原文让推荐力度保持忠实,而不是糊成一句笃定的话。指南忠实度的研究 demo——非医疗建议。",
    },
    tags: ["clinical guidelines", "evidence verification", "reliability", "no medical advice"],
  },
  {
    id: "kit-battery-early-warning",
    path: "/agent/battery-early-warning/",
    articlePath: "/blog/2026-08-03-can-eis-improve-battery-early-warning/",
    repoUrl: "https://github.com/rockyzl/battery-eis-soh-benchmark/tree/protocol/soh-target-v2",
    featured: true,
    title: { en: "Battery Early-Warning Replay", zh: "电池早期预警回放" },
    tagline: {
      en: "Replay 228 measured cells and test whether EIS improves a three-check-up-ahead forecast",
      zh: "回放 228 个实测电芯，检验 EIS 能否改善未来三次检查的预测",
    },
    summary: {
      en: "Replay transformed, derived data from Luh and Blank's KIT v2 result dataset, compare matched development OOF forecasts with and without EIS, and reveal the measured answer three check-ups later. Results vary by aging mode and model; this is not a production alarm.",
      zh: "回放由 Luh 与 Blank 的 KIT v2 结果数据转换而来的派生数据，对比加入 EIS 前后的配对 development OOF 预测，并在三次检查后打开实测答案。结果随老化方式和模型而变，不是生产报警。",
    },
    tags: ["battery reliability", "EIS", "condition-held-out OOF", "interactive replay"],
    sources: [
      {
        kind: "dataset",
        label: { en: "KIT v2 processed result data", zh: "KIT v2 处理后结果数据" },
        url: "https://doi.org/10.35097/1969",
      },
      {
        kind: "paper",
        label: {
          en: "Scientific Data dataset descriptor",
          zh: "Scientific Data 数据说明论文",
        },
        url: "https://doi.org/10.1038/s41597-024-03831-x",
      },
      {
        kind: "license",
        label: { en: "CC BY 4.0 license", zh: "CC BY 4.0 许可" },
        url: "https://creativecommons.org/licenses/by/4.0/",
      },
    ],
  },
];

export const liveDemos = demos;

// Build-derived public snapshot for non-Astro consumers. Keep `demos` above as
// the only authored registry; never hand-maintain a parallel JSON file.
export const publicDemoRegistrySnapshot: PublicDemoRegistrySnapshot = {
  schemaVersion: DEMO_REGISTRY_SCHEMA_VERSION,
  demos: demos.map((demo) => ({
    id: demo.id,
    path: demo.path,
    ...(demo.articlePath ? { articlePath: demo.articlePath } : {}),
    ...(demo.repoUrl ? { repoUrl: demo.repoUrl } : {}),
    featured: demo.featured,
    title: { ...demo.title },
    tagline: { ...demo.tagline },
    summary: { ...demo.summary },
    tags: [...demo.tags],
    ...(demo.sources
      ? {
          sources: demo.sources.map((source) => ({
            kind: source.kind,
            label: { ...source.label },
            url: source.url,
          })),
        }
      : {}),
  })),
};
