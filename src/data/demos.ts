export type Demo = {
  id: string;
  path: string;
  articlePath?: string;
  repoUrl?: string;
  featured: boolean;
  title: { en: string; zh: string };
  tagline: { en: string; zh: string };
  summary: { en: string; zh: string };
  tags: string[];
};

// Single public index for live demos. Pages derive their cards and links from
// this file so adding a demo does not require editing the home, Projects, and
// Agent-index pages separately.
export const demos: Demo[] = [
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
    featured: false,
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
];

export const liveDemos = demos;
