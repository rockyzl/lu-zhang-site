# Daily signal sidecar - 2026-08-24

## Selected Signal

- Title: SDAD: Spec-Driven Agentic Development for the AI-Native SDLC
- URL: https://arxiv.org/abs/2608.20341
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: SDAD: Spec-Driven Agentic Development for the AI-Native SDLC
- Primary source: https://arxiv.org/abs/2608.20341
- Discovery source: arXiv cs.AI
- Workflow stage: tool/model -> reproducibility
- Pattern: Turn a model response into a traceable workflow artifact.
- Failure mode: The workflow may look agentic while hiding state, tool errors, or handoff decisions.
- Practical test: Run one narrow task with logged tool calls, expected artifacts, failure injection, and a human review gate.
- Evidence Quality: Unknown until human review
- Reproducibility: Unknown until human review
- Workflow Utility: Candidate
- Transferability: Unknown until human review
- Validation Cost: Unknown until human review
- Run Status: automated scan only; source not yet reviewed in detail
- Publish decision: draft for human review

## Why This Won

Selected by the automated ranker because it matched the AI-for-science keyword
set and had a strong source/popularity signal. Human review is still required
before publishing.

## Claims Checked / Not Repeated

- Do not repeat adoption numbers, benchmark claims, or "AI scientist" marketing
  phrases without source verification.
- Public post should separate source facts from SciencesLoop interpretation.
- Treat this as a candidate workflow to test, not a trusted tool recommendation.

## Other Candidates Reviewed

Total candidates reviewed after duplicate-source filtering: 66

1. [SDAD: Spec-Driven Agentic Development for the AI-Native SDLC](https://arxiv.org/abs/2608.20341)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20341v1 Announce Type: new Abstract: Frontier coding agents backed by large language models with context windows from hundreds of thousands to millions of tokens are restructuring the Software Development Life Cycle (SDLC). Rich context handling and multi-step reasoning now allow substantial Functional Requirement Documents (FRDs) and repository context to be ingested in a single workflow, making specification quality the execution fuel for autonomous delivery. This report formalises Spec-Driven Agentic Development (SDAD) as a synthesis of disciplined up-front formalisation and high-velocity implementation: intent capture, machine-readable specification, agentic synthesis, and independent multi-agent verification under human sign-off. We revisit the historical pendulum between Waterfall and Agile, introduce AI-code as a fourth production paradigm, and compare Human-Agile (circa 2020) with Agentic-SDAD (circa 2026) across artefacts, cadence, accountability, and security posture. Beyond process description, we extend the model to team role metamorphosis (engineer, QA, platform, and product functions), quantitative governance (Ambiguity Tax, Spec Fidelity, SER, and TCI_agentic with repair multiplier phi), and pragmatic adoption via hybrid estimation and a staged migration blueprint. Industrial and research evidence on AI-augmented testing and verification is integrated to motivate separation between synthesis and release authority. Overall, the paper argues that agentic speed does not eliminate engineering discipline; it relocates discipline upstream into specification precision, explicit gates, and auditable provenance.

2. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

3. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

4. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

5. [Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 13 Aug 2026 17:16:04 GMT

6. [Truth Lies Deep: Countering Semantic Camouflage via Latent Intent Verification](https://arxiv.org/abs/2608.20378)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20378v1 Announce Type: new Abstract: Safety alignment in Large Language Models (LLMs) is often superficial, relying on refusal mechanisms that trigger only at the final stages of generation without erasing the foundational knowledge of harmful concepts acquired during pretraining. This study demonstrates that this architectural disconnect leaves models vulnerable to Semantic Camouflage -- adversarial attacks that wrap harmful intent in benign narrative contexts (e.g., creative writing), effectively bypassing standard input and output guardrails. By analyzing the latent activation trajectories of three distinct Small Language Model (SLM) families (Phi-3, Qwen2.5, and Gemma-2b) under adversarial stress, this research identifies a universal ``Intent Horizon'' -- a critical depth (typically 15--20\% of total layers) where the model's distinct, pre-trained representation of harmful intent collapses as it contextualizes the query into a ``safe'' narrative. Results indicate that while late-layer representations of camouflaged attacks are mathematically indistinguishable from safe queries (Detection Rate $< 20\%$), early-layer representations retain a distinct, detectable ``harm signature.'' Leveraging this insight, this paper proposes Latent Intent Verification (LIV), a lightweight probing defense. Experiments on the PKU-SafeRLHF dataset demonstrate that LIV outperforms standard guardrails by a margin of 20--50\% across all tested architectures, effectively neutralizing zero-day semantic attacks without requiring model retraining.

7. [A Survey on Foundations and Frontiers of Multimodal Agentic Frameworks: Techniques and Applications](https://arxiv.org/abs/2608.20379)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20379v1 Announce Type: new Abstract: Advances in large language models (LLMs) have fueled a wave of research into agency: the ability to reason, plan, and act. This effort has produced agentic frameworks that orchestrate perception, memory, and decision-making around powerful LLM backbones. With the advent of large multimodal models (LMMs), these systems can process and integrate diverse modalities, including images, audio, and video, thereby improving their real-world applicability. Yet, while surveys of LLM-based agents exist, the role of multimodality in shaping agency has not been systematically examined in recent years. This survey fills the gap by analyzing the impact of multimodality across the core functional modules of the agentic framework: perception, reasoning, planning, memory, and action. Using this lens, we trace the evolution from text-centric agents to multimodal frameworks, examine how modalities are integrated through delegated, late-fusion, and early-fusion architectures, and assess the emergence of agentic behaviors enabled by grounded perception and multimodal reasoning. We organize existing work through a modality-centric taxonomy that links architectural design choices to agent capabilities. Moreover, we review multimodal agentic systems across various application domains, including Robotics, GUI & Web Navigation, Multimedia Content Generation & Editing, and Long-form Video Understanding & Retrieval. Beyond capabilities, we analyze performance across these settings and discuss efficiency-scalability trade-offs, including training and inference costs, latency, and deployment constraints. By focusing on the impact of multimodality in agentic design, we aim to identify key gaps and chart a roadmap toward robust and general-purpose intelligent systems.

8. [Representation Affects Retrieval: A Case Study of Skill Discovery and Routing in a Multimodal Agent Harness](https://arxiv.org/abs/2608.20389)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20389v1 Announce Type: new Abstract: A production agent harness must discover and rank, from a growing library of skills, the one most appropriate for a user's task. At small scale this selection happens in context: the LLM planner chooses among skill representations exposed in its system prompt, without an explicit embedding-based retrieval step. We treat this in-context selection as the small-N counterpart to embedding-based skill retrieval at scale, and present a case study of how Tinycloud, a production multimodal video agent harness, represents its skills for the planner. The harness ships skills under two recurring representations: tool-skills that wrap a single external API or system tool and serve as primitive vocabulary, and workflow-skills that orchestrate tool-skill calls plus a template render to produce one named deliverable. The harness exposes them via two surfaces in the system prompt: an inlined-body surface (full instructions, scripts, templates) for autoloaded skills, and a one-line listing for on-demand skills. A six-task selection ablation across three exposure regimes (all-on, default, all-off) shows that full autoload selects the gold skill on every task; all-off slows execution and produces hard discovery failures; and the production default misroutes one task because its lexical signal collides with an autoloaded tool-skill that pulls planner attention away from a listed workflow-skill. The headline finding is that in-prompt exposure of skills is not monotonically helpful: partial exposure can create lexical competition that suppresses correct selection. We connect this small-N observation to recent retrieval-based skill-routing work at large scale, and frame this contribution as a case study rather than a benchmark.

9. [Machine Learning and ARIMA Model Averaging for Adaptive Public Health Forecasting: Comparative Evaluation and an Ontario COVID-19 Case Study](https://arxiv.org/abs/2608.20406)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20406v1 Announce Type: new Abstract: Public health forecasts must respond to abrupt changes in surveillance data without over-extrapolating noise, reporting artifacts, or temporary trends. We evaluated autoregressive integrated moving average (ARIMA), random forest, and extreme gradient boosting (XGBoost) models using 190 weekly observations of publicly available Ontario COVID-19 case counts from January 2020 to October 2023. Rolling-origin time-series cross-validation preserved temporal order during model tuning and evaluation. Performance was assessed across three operating dimensions: responsiveness following selected turning points, forecast horizons of one to six weeks, and the amount of historical training data. We also developed Machine Learning and ARIMA Model Averaging (MLAMA), a non-negative performance-weighted ensemble with weights that vary by forecast horizon and responsiveness setting. Retrospective comparisons showed that ARIMA adapted rapidly after turning points but its normalized error increased at longer horizons. Random forest and XGBoost were less responsive initially but maintained more stable normalized error over longer horizons. For two-week forecasts at the end of the study period, training on the most recent data outperformed using longer historical periods, particularly for XGBoost. MLAMA achieved the lowest normalized mean absolute percentage error across most forecast horizons and ranked among the best-performing methods across responsiveness settings. These findings support selecting forecasting models according to operating conditions rather than relying on a single universally preferred approach. MLAMA provides a practical framework for combining complementary statistical and machine-learning forecasts. The accompanying Python package is currently maintained in a private repository while software validation and reproducibility testing are completed.

10. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.76; Date: 2026-08-24T09:27:52Z; Popularity: 2,759 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

11. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

12. [Introducing AI Futures](https://openai.com/index/introducing-ai-futures)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 20 Aug 2026 07:00:00 GMT
   - Summary: Introducing AI Futures, a new OpenAI blog exploring how transformative AI could reshape power, governance, the economy, and individual freedom.

13. [Stampli cuts launch hours by 68% using ChatGPT Work](https://openai.com/index/stampli)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 GMT
   - Summary: With a fixed deadline and design resources committed elsewhere, Stampli used Codex and ChatGPT Work to compress weeks of launch production into days.

14. [Offering Zero Data Retention for frontier models](https://openai.com/index/offering-zero-data-retention-for-frontier-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 19 Aug 2026 19:00:00 GMT
   - Summary: OpenAI reaffirms Zero Data Retention for eligible API customers and previews Private Safety Processing for advanced AI safety without compromising data privacy.

15. [Replit expands access to software creation with GPT-5.6 Luna](https://openai.com/index/replit)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 19 Aug 2026 07:00:00 GMT
   - Summary: Replit introduces Free Mode, powered by GPT-5.6 Luna, so anyone can turn ideas into working software without worrying about token costs.

16. [ChatGPT Ads expands across Europe](https://openai.com/index/chatgpt-ads-expands-across-europe)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 22:00:00 GMT
   - Summary: ChatGPT Ads is expanding to 31 European markets. Learn how advertisers can reach people as they explore, compare options, and make decisions.

17. [Strengthening democratic oversight in national security](https://openai.com/index/strengthening-democratic-oversight-in-national-security)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 19:00:00 GMT
   - Summary: OpenAI launches an initiative to strengthen democratic oversight of AI in national security, supporting government institutions with tools, training, and expertise.

18. [Partnering with CodeAI to prepare the first AI generation](https://openai.com/index/partnering-with-codeai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: OpenAI and CodeAI are partnering to help students build AI literacy, think critically about AI, and develop the skills to use and shape it responsibly.

19. [Pacing model development in an era of cyber-critical capabilities](https://openai.com/index/pacing-model-development-cyber-capabilities)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: OpenAI is strengthening monitoring, alignment, and security for frontier AI models. See how new safeguards are guiding the pace of model development.

20. [Introducing ChatGPT for Teens: Built for learning, backed by protections](https://openai.com/index/chatgpt-for-teens)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: ChatGPT for Teens helps teens learn, think critically, and use AI with confidence, with stronger built-in protections, healthy-use features, and additional controls for parents.

21. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

22. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

23. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [Measuring benchmark optimization in speech recognition](https://huggingface.co/blog/asr-benchmark-optimization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

26. [Up to 3.2x Faster Inference with LFM2.5-DSpark](https://huggingface.co/blog/LiquidAI/lfm25-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 20 Aug 2026 16:52:57 GMT

27. [How Much Memory Does Your Agent Actually Need?](https://huggingface.co/blog/ibm-research/altk-evolve-hmm)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 18:09:38 GMT

28. [Multi-Vector (Late Interaction) Embedding Models with Sentence Transformers](https://huggingface.co/blog/multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 00:00:00 GMT

29. [Same Cluster, 33 Points More Utilization: What Changed Was the Order](https://huggingface.co/blog/Dharma-AI/gpu-management-pt2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 17 Aug 2026 19:46:21 GMT

30. [State of Open Models: Summer 2026 Observations](https://huggingface.co/blog/state-of-open-models-summer-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 GMT

31. [What We Learned by Reproducing 2,200 papers from ICML](https://huggingface.co/blog/icml-2026-open-reproductions)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 GMT

32. [Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis](https://huggingface.co/blog/allenai/olmoearth-embeddings)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 16:14:36 GMT

33. [Thinking of ACE? We Can Do It with Fewer Tokens](https://huggingface.co/blog/ibm-research/altk-evolve-sldd)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 11 Aug 2026 13:37:10 GMT

34. [PrimeAgentOrchestrator: Memory-Primed Agent Spawning for Personal AI Infrastructure](https://arxiv.org/abs/2608.20342)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20342v1 Announce Type: new Abstract: Large language model (LLM) coding agents start each session with an empty context window, discarding accumulated knowledge from prior work. We present PrimeAgentOrchestrator (PAO), a system that spawns new instances of Claude Code -- Anthropic's terminal-based coding agent -- pre-loaded with relevant memories compiled from the user's existing personal databases. At spawn time, PAO queries two independently-operated memory backends in parallel (a PostgreSQL entity-observation database and a Cloudflare Worker semantic search index), fuses results using backend-specific retrieval strategies, and delivers the compiled briefing via filesystem injection that exploits the host agent's configuration auto-read behavior. PAO manages the full agent lifecycle including trust pre-seeding, readiness polling with error detection, and adaptive terminal text injection. We report on four months of regular deployment (December 2025 through March 2026) as an experience report, documenting three generations of context delivery mechanisms, the failure modes that motivated each redesign, and the engineering tradeoffs of bridging heterogeneous memory systems rather than building a unified one.

35. [Interpretable Multimodal Classification with Linear Discriminant Tree Ensembles](https://arxiv.org/abs/2608.20384)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20384v1 Announce Type: new Abstract: Multimodal affect and behaviour classifiers that fuse heterogeneous text, audio, and visual streams must simultaneously achieve competitive accuracy and produce human-understandable explanations of the cues driving their decisions -- a dual objective that current high-capacity models, notably Transformers, only partially address. While Transformers attain strong predictive performance, their distributed representations and deep nonlinearity make it difficult to assign meaningful importance weights to individual multimodal features, limiting their use in trust-sensitive applications such as clinical affect monitoring and educational assessment. We address this gap by developing a framework based on tree-based ensembles that balances accuracy and interpretability. The framework encodes each modality into tokens, extracts and clusters concepts to reduce dimensionality, routes the fused modalities through tree-based ensemble classifiers, and interprets trends using a novel modified feature importance metric. The modified importance reduces the influence of the negative class in binary classification tasks, thereby improving indicator or marker detection. The proposed tree-based ensembles -- Linear Discriminant Tree (LDT), Linear Discriminant Forest (LDF), and Linear Discriminant AdaBoost (LDAB) -- achieve F1-mod gains of 4.3\% over the Multimodal Transformer and accuracy gains of 3.0\% over the primary interpretable multimodal baseline, Interpretable Multimodal Routing (IMR). The proposed multimodal feature importance extracts salient inter-modal concepts with substantially higher human-annotator agreement scores than default feature importance (62.2\% vs.\ 43.2\% on IEMOCAP; 46.7\% vs.\ 32.1\% on CMU-MOSI).

36. [Nexus: Depth-Adaptive KV-Cache Splicing and Retrieval-Decoupled Tool Routing for Agentic LLMs on Unified Memory](https://arxiv.org/abs/2608.20397)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20397v1 Announce Type: new Abstract: Agentic large language models (LLMs) on the Model Context Protocol (MCP) re-encode verbose tool schemas every turn, so prefill - quadratic in sequence length - dominates time-to-first-token (TTFT) as the tool registry grows. Nexus's primary lever is to decouple routing from the schema-prefill cost: an INT8 semantic lookaside buffer (SLB) with a calibrated cross-encoder margin gate selects tools by retrieval, and arguments are generated over a compressed textual signature (median 19 tokens) rather than over spliced key/value (KV) cache. This path is depth-independent: routing accuracy stays near 89% as the registry scales to 250 tools - where a concatenate-all-schemas baseline overflows the context window entirely - and it reaches a first-argument token 1.66x sooner than a full-schema re-prefill at a ~80% main-context token saving. As a secondary, bounded lever we transplant a compiled schema KV block directly into the live context. This is fundamentally limited by rotary position embedding (RoPE) phase drift: an anchored splice is output-exact, but off-anchor placement corrupts attention, so beyond a threshold P=256 Nexus repairs the seam with a depth-adaptive suffix redecode that escalates to a full re-prefill. The resulting never-regress property is a guarantee on output fidelity (top-1 agreement, D_KL approx. 0) - not on latency, which can dip to 0.98x before converging to parity - alongside a 1.1-1.7x TTFT speedup at moderate depth that narrows to parity at deep context. Two negative results bound the design: the off-anchor RoPE fidelity boundary, and the failure of a reference-free drift gate to predict drift (Spearman rho = 0.193). All measurements are from one model tuple (Qwen2.5-14B-Instruct Q4_K_M) on Apple-silicon unified memory; the qualitative boundaries generalize, while the quantitative envelope is tuple-specific.

37. [Environmental Slow AI: Design Principles for Generative Systems](https://arxiv.org/abs/2608.20398)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20398v1 Announce Type: new Abstract: Generative AI (genAI) systems produce cultural artefacts at scale, but they also reflect embedded cultural values through their design. Once identified, these values become open to deliberate reshaping. This position paper examines the maximalist values of current generative AI through an environmental humanities tradition and proposes design principles in which environmental sustainability serves as the core value instead. The principles are developed under the umbrella of Slow AI, a term that already circulates across several distinct research and practice programs. Five design principles are articulated (restraint, sufficiency, selectivity over retention, material visibility, and friction as affordance), each of them illustrated against the current design of widely deployed systems. Each principle operates at two levels: a design implementation, and an interpretive layer at which users and developers are prompted toward reflective engagement with the system. Together these principles extend human agency by restoring decisions that frictionless defaults have silently removed and do so by building interpretive reflection into design.

38. [When Retrieval Fails Before It Begins: Structurally Indirect Prerequisite Eviction as a Retention Failure in Agentic Memory](https://arxiv.org/abs/2608.20400)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20400v1 Announce Type: new Abstract: Agentic memory under a fixed budget involves two stages: retention and retrieval. Existing retrieval-centered paradigms implicitly assume necessary evidence survives eviction, but we challenge this by isolating a pre-retrieval failure mode: structurally indirect prerequisite eviction, in which upstream blocks weakly aligned with the query are discarded under budget pressure. We provide an operational definition of this failure, a reproducible deterministic benchmark, and per-seed trace diagnostics. Finally, we evaluate Dependency-aware Semantic Garbage Collection (DSGC), a one-hop graph-aware rule. In our main suite, DSGC improves full-chain retention from 0.03 to 0.90 under a lexical encoder and from 0.23 to 1.00 under a sentence encoder. Robustness checks then identify the budget and scaling regimes where the one-hop rule holds or degrades. Our released pipeline and failure postmortem support mechanistic analysis of retention before retrieval as a distinct failure boundary.

39. [World models of environment, agent and joint agent-environment systems](https://arxiv.org/abs/2608.20401)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20401v1 Announce Type: new Abstract: World models are a central component of model-based reinforcement learning. They are usually discussed in terms of what variables they predict, such as observations, rewards, states, latent or information states. We argue that there is a prior distinction: which channel they model. We consider three cases: the environment channel $O_{:} \mid A_{:}$, the agent channel $A_{:} \mid O_{:}$, and the realised joint process $(A, O)_{:}$, equivalently viewed as a channel with no inputs. Using computational mechanics, we define canonical predictive models for these three cases as $\epsilon$-transducers or $\epsilon$-machines. Canonical environment models recover standard predictive state representations, while the other two give analogous notions of canonical models for the agent and the joint system. We then build canonical support-restricted environment and agent models induced by closed-loop coupling, whose predictive equivalences range over continuations supported by the realised interaction. The key structural result is that canonical support-restricted environment states factor through the canonical joint causal states, and their transition structure is induced directly from the joint model; the agent-side construction is dual. Finally, we give a POMDP/controller example in which the unrestricted environment model has infinitely many states while the canonical support-restricted model induced by the coupling is finite. The framework clarifies what different world models are models of, and how coupling and support restriction can change their canonical predictive structure and complexity.

40. [Wrong-Physics Backdoors in Neural PDE Operators](https://arxiv.org/abs/2608.20439)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20439v1 Announce Type: cross Abstract: Neural PDE operators are increasingly trained on reusable solver archives, yet validation often relies on clean prediction error and parameter-agnostic plausibility checks. We introduce cross-parameter relinking, a data-poisoning primitive that makes a triggered input select a valid solution from the same PDE family under an incorrect physical parameter. We term this a wrong-physics backdoor: the output remains physically plausible but is wrong for the intended parameter. The attack exploits tensor-to-parameter provenance failures in multi-parameter archives by stamping the surrogate input and relinking its supervision to a cached alternate-parameter solution for the same latent sample. Across 476 attack campaigns, we evaluate Burgers, advection-diffusion, two-dimensional Navier-Stokes, and an elliptic Poisson case. Fourier Neural Operators and DeepONet provide the primary evidence, with Transformer, GRU, and LSTM models as support. FNO reaches a backdoor success rate of 1.0000 on both advection-diffusion and two-dimensional Navier-Stokes while retaining low clean relative L2 error. Clean-label, label-only, and shuffled controls show that high attack success alone is insufficient: successful attacks must move predictions toward the intended alternate-physics target while preserving bounded clean error. These results expose a structural validation gap: smoothness or generic solver-like behavior is insufficient unless the provenance of the intended physical parameter is also verified.

41. [Calibrating Inelastic Markets to Options: The Lean Marketron and the Generalized Langevin Equation](https://arxiv.org/abs/2608.20589)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20589v1 Announce Type: cross Abstract: The Marketron model of \cite{HalperinItkin2025Mark} and its option pricing extension in \cite{HalperinItkinMarketron2} suffer from structural non-identifiability: an eighteen-parameter space traps solvers in suboptimal local minima and renders economic quantities unmeasurable. By removing exact scaling gauges and sign symmetries, freezing non-financial parameters by explicit criteria, and adiabatically eliminating the fast hidden signal, we derive a robust nine-parameter reduced model. A Gauss-Newton Hessian with empty null space and a manifold-boundary analysis confirm that the reduced core carries no exact symmetry and admits no further reduction. A diffusive correlation between flow and return innovations captures the short-maturity skew. A staged calibration from the physical measure to the risk-neutral measure, illustrated on SPX options, fits the whole surface with a single parameter set. The same reduction turns the wedge between the physical and pricing values of the flow block into a well-defined market price of flow risk rather than a ridge artifact, identifiable here for the first time, though a single surface constrains its level only weakly. Finally, our analysis reveals that in the Marketron model the log-price obeys a generalized Langevin equation with a closed-form, state-modulated memory kernel, and that the memory variable itself is the exact Markovian lift of this kernel. This mapping also yields a testable condition, the equality of the signal and memory relaxation rates, which on the SPX surface come out well separated, though both weakly identified, placing the fitted market tentatively in the driven, non-equilibrium regime and turning the active-matter reading from an analogy into a falsifiable constraint.

42. [Differentiable high-fidelity vectorial propagator](https://arxiv.org/abs/2608.20762)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20762v1 Announce Type: cross Abstract: The numerical accuracy and computational efficiency of free-space field propagation directly determine what physics can be predicted and what devices can be designed, from nanophotonic metasurfaces to optically addressed quantum processors. Existing methods face a fundamental accuracy-speed trade-off, which is further compounded in the vectorial regime, where major formalisms remain fragmented with no unified computational framework. Here we address both challenges: a theory that unifies the vectorial diffraction framework, and an algorithm that resolves the accuracy-speed trade-off, each reinforcing the other. We prove that all major vectorial diffraction formalisms and vector-potential seeding methods arise from a single surface equivalence principle and reduce, without approximation, to a finite sequence of scalar angular-spectrum operations. Any advance in scalar propagation can therefore be exploited across the entire vectorial ecosystem. The error-compensating angular spectrum method (E-ASM) serves as a fast and accurate scalar solver, delivering peak signal-to-noise-ratio gains exceeding 60 dB over the state-of-the-art band-extended angular spectrum method at order-of-magnitude faster speed, with a freely configurable observation window. Their combination, implemented in a GPU-accelerated, fully differentiable form, turns rigorous vectorial field computation, previously prohibitive for higher-order beams over macroscopic distances, into a practical, inverse-design-ready tool. We demonstrate the framework on optically addressed local qubit gates and on vectorial Hermite-Gaussian and Laguerre-Gaussian beam propagation, resolving field structures inaccessible to scalar or approximate vectorial methods.

43. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.75; Date: 2026-08-24T13:16:47Z; Popularity: 1,750 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

44. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-24T00:50:53Z; Popularity: 481 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.34; Date: 2026-08-24T02:42:53Z; Popularity: 342 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-21T08:24:51Z; Popularity: 232 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

47. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

48. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

49. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

50. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

51. [Bankruptcy Prediction via Hybrid Resampling and Stacking Ensemble Techniques with Explainable Artificial Intelligence (XAI)-Driven Analysis](https://arxiv.org/abs/2608.20343)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20343v1 Announce Type: new Abstract: This study develops and evaluates a bankruptcy prediction framework that integrates consensus-based feature selection, hybrid resampling, stacking ensembles, and explainable artificial intelligence to improve minority-class detection in severely imbalanced financial data. Using the Taiwanese Bankruptcy Prediction dataset from the UCI Machine Learning Repository, five feature-selection algorithms were first applied, and a consensus retention rule reduced the input space to 23 robust variables. The balanced training data were then generated using SVM-SMOTE, SMOTE-Tomek, and SMOTE-ENN. Five ensemble machine learning classifiers, namely gradient boosting, extreme gradient boosting, histogram-based gradient boosting, LightGBM, and AdaBoost, were compared with five deep learning models, including RNN, LSTM, GRU, DNN, and MLP. In addition, hybrid stacking ensembles combined the five machine learning classifiers as base learners with each deep learning model as a meta-learner. Model performance was assessed using accuracy, recall, specificity, G-mean, and ROC-AUC, while SHAP was used to explain feature contributions. The results show that resampling strategy materially shaped model behavior. SVM-SMOTE and SMOTE-Tomek favored accuracy and specificity, whereas SMOTE-ENN delivered stronger minority-class detection. Among standalone models, the GRU with SMOTE-ENN achieved the best overall predictive balance, with recall of 0.8627, G-mean of 0.8517, and ROC-AUC of 0.9431. Among stacking ensembles, SMOTE-ENN with (GB+XGB+HGB+LGBM+AB)+LSTM provided the strongest compromise between sensitivity and specificity. SHAP analysis identified leverage, profitability, solvency, and operational efficiency indicators as the most influential predictors of bankruptcy risk. These findings support more reliable and interpretable early warning systems for financially distressed firms.

52. [Approximate Homomorphisms and Convergent Representations in Transducers](https://arxiv.org/abs/2608.20428)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20428v1 Announce Type: new Abstract: We study the stability of minimal representations of controlled stochastic processes (in particular, transducers) under perturbations. This question is motivated by recent experiments finding predictive-state structure in the latent representations of neural networks. We consider standard, linear and predictive transducers. We introduce notions of approximate homomorphism capturing local structural similarity between them, together with metrics comparing their induced dynamics (which we refer to as interfaces), and prove properties such as composability of the approximate homomorphisms. For standard transducers, we show that there exist simple interfaces for which there is no approximate homomorphism between the different implementations of the dynamics. In contrast, for every finite-rank interface $\mathcal I$, we prove that all minimal linear transducers implementing interfaces sufficiently close to $\mathcal I$ have an approximate homomorphism to the minimal implementation of $\mathcal I$, with error linear in the perturbation size. We prove an analogous stability result for predictive transducers under a residual metric using some mild hypothesis regarding the indistinguishability of the belief states. These results identify conditions under which canonical transducer representations are robust to perturbations, while showing that such convergence fails without additional structural restrictions. Under the assumption that these type of abstractions are embedded into the hidden layers of modern AI models, this gives some theoretical support to the hypothesis that their latent representations exhibit structural convergence.

53. [Wrong-Physics Backdoors in Neural PDE Operators](https://arxiv.org/abs/2608.20439)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20439v1 Announce Type: new Abstract: Neural PDE operators are increasingly trained on reusable solver archives, yet validation often relies on clean prediction error and parameter-agnostic plausibility checks. We introduce cross-parameter relinking, a data-poisoning primitive that makes a triggered input select a valid solution from the same PDE family under an incorrect physical parameter. We term this a wrong-physics backdoor: the output remains physically plausible but is wrong for the intended parameter. The attack exploits tensor-to-parameter provenance failures in multi-parameter archives by stamping the surrogate input and relinking its supervision to a cached alternate-parameter solution for the same latent sample. Across 476 attack campaigns, we evaluate Burgers, advection-diffusion, two-dimensional Navier-Stokes, and an elliptic Poisson case. Fourier Neural Operators and DeepONet provide the primary evidence, with Transformer, GRU, and LSTM models as support. FNO reaches a backdoor success rate of 1.0000 on both advection-diffusion and two-dimensional Navier-Stokes while retaining low clean relative L2 error. Clean-label, label-only, and shuffled controls show that high attack success alone is insufficient: successful attacks must move predictions toward the intended alternate-physics target while preserving bounded clean error. These results expose a structural validation gap: smoothness or generic solver-like behavior is insufficient unless the provenance of the intended physical parameter is also verified.

54. [Resolving positive semi-definiteness in physics-informed kernels for scientific machine learning](https://arxiv.org/abs/2608.20985)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20985v1 Announce Type: new Abstract: Many modern machine learning models can be understood as kernel-based function-space models, including Gaussian processes and neural tangent kernels. In scientific machine learning, differential operators are increasingly used to encode physical structure directly into such models. However, it has remained unclear under which conditions these constructions are valid machine learning models, i.e. preserve positive semi-definiteness, and whether observed instabilities arise from ill-posed modeling or numerical effects. Here, we establish a simple and sufficient condition for positive semi-definiteness: for linear differential operators of order m, the base kernel must be m-times continuously differentiable. Crucially, this guarantee holds for operators with non-constant and even discontinuous coefficients. Examples are ubiquitous in physical systems, including diffusion, material elasticity, wave propagation in inhomogeneous media, and quantum systems. We conclude that remaining instabilities are attributable to numerical issues, providing a unifying validity foundation for operator-informed kernel methods.

55. [Shared Physics Responses Recover Hidden Rankings in Neural Operator Libraries](https://arxiv.org/abs/2608.20441)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20441v1 Announce Type: cross Abstract: Selecting the optimal neural-operator prediction during deployment is challenging when high-fidelity reference solutions are unavailable. We demonstrate that under a squared Hilbert-space loss, ranking a finite model library depends strictly on the low-dimensional span of candidate differences, allowing us to score all models simultaneously using a single anchor-based linearized response of the governing equation. This shared physical diagnostic accurately recovered over 99.6\% of pairwise preferences and 99.0\% of optimal checkpoints across diverse Fourier and convolutional operator libraries for fluid, reaction-diffusion, and wave dynamics. Furthermore, the corrected physical proxy frequently outperformed the best individual candidates, and we establish computable sufficient conditions that rigorously certify exact decisions for strongly monotone discretizations. By exploiting the local dynamical response rather than raw defect magnitude, this framework enables the reliable and highly efficient deployment of scientific surrogates without requiring ground-truth data.

56. [Uncertainty propagation in auto-regressive random neural network models](https://arxiv.org/abs/2608.20483)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20483v1 Announce Type: cross Abstract: We develop analytical and particle-based methods for uncertainty propagation in random neural network models, where both the inputs and network parameters are allowed to be random. Building on the piecewise-linear structure of the Leaky ReLU activation function, we derive a local approximation of the neural network output with respect to perturbations in both its inputs and parameters. This approximation is exact for perturbations that preserve the network activation pattern, and it allows us to compute analytical expressions for the probability density function and characteristic function of the network output, together with closed-form approximations for its mean and covariance. We extend this uncertainty propagation framework to autonomous dynamical systems whose one-step evolution map is represented by a random neural network. Repeated application of this map defines an autoregressive model, for which we derive recursive equations to propagate uncertainty in both the state and network parameters over time. These equations explicitly account for the state-parameter cross-covariance that develops under successive iterations of the network. Numerical experiments on the Lorenz-63 system and the Kuramoto-Sivashinsky equation demonstrate accurate uncertainty propagation through the predictability horizon and the applicability of the proposed framework to high-dimensional dynamical systems.

57. [Impact of Plasmonic Modes and Thermophysical Properties on the Double-Pulse Structuring of Highly-Ordered LIPSS for Biosensing Applications](https://arxiv.org/abs/2608.20573)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20573v1 Announce Type: cross Abstract: The fabrication of highly ordered laser-induced periodic surface structures (LIPSS) on thin metallic films is dictated, predomaninatly, by a synergy of periodic electromagnetic energy deposition and complex fluid dynamics. In this work, we present a combined experimental and theoretical study on the formation of ultra-regular LIPSS on 32-nm-thick Au films using a double-pulse femtosecond laser scheme. We demonstrate that for thin films, the excitation of coupled Surface Plasmon Polaritons (SPPs) at both interfaces dictates the initial energy distribution. On the othe hand, the final morphology is greatly influenced by hydrodynamical processes. Interestingly, due to the low electron-phonon coupling of Au and the high thermal confinement of the thin film, single-pulse irradiation leads to uncontrolled hydrodynamic instabilities a non uniform topographies. Thus, we demonstrate that a double-pulse approach with an optimized interpulse delay ({\Delta}{\tau}=1.2 ns) effectively controls the melt duration and viscosity, suppressing complex fluid motion and promoting the growth of highly ordered arrays. These structures support narrow surface lattice resonances (SLRs) suitable for high-sensitivity plasmonic biosensing.

58. [Symmetry Adapted Hierarchical Equations of Motion for Exact Simulations of Large Polariton Systems](https://arxiv.org/abs/2608.20657)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20657v1 Announce Type: cross Abstract: Hierarchical equations of motion(HEOM) provide exact dynamics of open quantum systems coupled to harmonic baths, but their computational cost becomes prohibitive for systems with many independent local environments. In this work, we develop a symmetry-adapted HEOM formalism to significantly reduce the computational cost for the permutationally invariant Holstein-Tavis-Cummings (HTC) model. The method removes redundant information in two stages. First, all auxiliary density operators (ADOs) related only by relabeling identical molecules and their bath channels are replaced by a single canonical occupation-pattern representative. Second, molecules with the same local hierarchy occupation produce repeated matrix elements within each representative, allowing only the distinct complex variables to be propagated instead of the full (N + 1) $\times$ (N + 1) ADO matrices. The resulting matrix-free equations are evaluated using precomputed connections and molecular multiplicities. At fixed hierarchy depth L and number of bath correlation exponentials m, the number of canonical representatives becomes independent of the ensemble size for N $\geq$ L and the number of unique variables saturates for N $\geq$ L + 2. The formulation easily extends to multiple-exponential bath decompositions, arbitrary initial density operators, static disorders, and cavity loss. Our benchmarks reproduce conventional HEOM dynamics while requiring far fewer propagated variables and substantially less memory.

59. [Training DeepFilterNet with Accurate Room Acoustic Simulations Improves Single-Channel Speech Enhancement](https://arxiv.org/abs/2608.20971)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20971v1 Announce Type: cross Abstract: We investigate how the realism of synthetic room impulse response (RIR) datasets affects the training of DeepFilterNet3 for single-channel speech enhancement. We compare a DNS4 image-source-method (ISM) RIR dataset with a higher-acoustic-fidelity dataset generated using hybrid wave-based and geometrical acoustics simulation. Rather than isolating individual simulation factors, we compare complete RIR generation pipelines while keeping the enhancement model unchanged. Models are evaluated on unseen measured RIRs using objective speech enhancement metrics and downstream automatic speech recognition (ASR). Training with the higher-fidelity dataset consistently yields modest improvements in objective metrics and substantially lower ASR word error rates than the ISM dataset. Although the experiments do not attribute these gains to individual modelling components, they show that increasing the overall realism of synthetic acoustic training data improves the generalization of DeepFilterNet3 to unseen measured environments.

60. [Scalable photoexcitation-induced molecular dynamics with machine-learned Hamiltonians](https://arxiv.org/abs/2608.20994)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 24 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20994v1 Announce Type: cross Abstract: Ultrafast photoexcitation offers a controllable route to steer structural dynamics in solids, yet predicting how nonequilibrium electronic excitation drives lattice motion across extended spatial and temporal scales remains a major computational challenge. Here we introduce time-dependent ab-initio propagation with electronic machine learning (TDAP-eML), a framework that explicitly incorporates electronic evolution into scalable simulations of photoexcitation-induced lattice dynamics. By integrating machine-learned electronic structure with atomistic propagation, TDAP-eML describes how photoexcitation reshapes the evolving energy landscapes and forces governing structural motion. Across representative examples including silicon and FeSe, the framework reproduces key photoexcited lattice responses obtained from first-principles time-dependent density functional theory calculations and captures coherent phonon dynamics together with their dependence on excitation conditions. Its computational advantage increases with system size, reaching nearly three orders of magnitude reduction in computational cost for the large systems examined. TDAP-eML thus establishes a scalable framework for coupled electronic and lattice evolution, linking nonequilibrium excitation to photoinduced forces, predictive structural dynamics, and experimentally accessible observables.

61. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-20T09:08:50Z; Popularity: 724 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.68; Date: 2026-08-24T11:22:40Z; Popularity: 680 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.18; Date: 2026-08-24T04:25:06Z; Popularity: 183 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-08-24T01:51:11Z; Popularity: 116 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

66. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

SDAD: Spec-Driven Agentic Development for the AI-Native SDLC

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.20341

What would make a scientific agent output trustworthy enough for your own
workflow?

## Article Idea Sources

These configured sources are the recurring idea pool. RSS sources can be
auto-collected; page sources are manual watchlist links. Reopen the primary
source before repeating any claim.

1. OpenAI News (rss, Frontier AI labs) - https://openai.com/news/rss.xml; tags: OpenAI, frontier models, agents
2. Google DeepMind Blog (page, Frontier AI labs) - https://deepmind.google/blog/; tags: Google DeepMind, AI research, AI for Science
3. Anthropic News (page, Frontier AI labs) - https://www.anthropic.com/news; tags: Anthropic, agents, safety
4. Anthropic Engineering (page, Agent engineering) - https://www.anthropic.com/engineering; tags: Anthropic, engineering, agents
5. Addy Osmani Loop Engineering (page, Loop engineering) - https://addyosmani.com/blog/loop-engineering/; tags: loop engineering, agent workflows, skills, worktrees, subagents, memory
6. Louis Bouchard Loop Engineering (page, Loop engineering) - https://www.louisbouchard.ai/loop-engineering/; tags: loop engineering, agent loops, triggers, hard brakes, human review
7. Developers Digest Loop Engineering (page, Loop engineering) - https://www.developersdigest.tech/tutorials/nKlF15Ic78w; tags: loop engineering, automation, memory, human-in-the-loop, security scans
8. Ling Talk AI Loop Engineering Video (page, Loop engineering) - https://www.youtube.com/watch?v=fS-3o4Tz5cI; tags: loop engineering, Chinese AI commentary, agent loops, maker checker
9. Microsoft Research Blog (rss, AI research labs) - https://www.microsoft.com/en-us/research/feed/; tags: Microsoft Research, AI research, AI for Science
10. NVIDIA AI Blog (rss, AI infrastructure) - https://blogs.nvidia.com/blog/category/deep-learning/feed/; tags: NVIDIA, AI infrastructure, scientific computing
11. Hugging Face Blog (rss, Open-source AI) - https://huggingface.co/blog/feed.xml; tags: open source, models, agents
12. arXiv cs.AI (rss, Research preprints) - https://export.arxiv.org/rss/cs.AI; tags: arXiv, AI agents, research
13. arXiv cs.LG (rss, Research preprints) - https://export.arxiv.org/rss/cs.LG; tags: arXiv, machine learning, scientific ML
14. arXiv physics.comp-ph (rss, Scientific computing) - https://export.arxiv.org/rss/physics.comp-ph; tags: arXiv, scientific computing, simulation
15. FutureHouse (page, AI for Science startups) - https://www.futurehouse.org/; tags: AI scientist, scientific agents, startup
16. Lila Sciences (page, AI for Science startups) - https://www.lila.ai/; tags: AI for Science, scientific discovery, startup
17. Insilico Medicine News (page, AI for Science startups) - https://insilico.com/news; tags: drug discovery, AI for Science, startup
18. OpenAI GPT-Rosalind (page, AI for Science platforms) - https://openai.com/index/introducing-gpt-rosalind/; tags: life sciences, scientific workflows, trusted access
19. OpenAI GPT-Rosalind Capabilities (page, AI for Science platforms) - https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/; tags: life sciences, plugins, provenance, benchmarks
20. OpenAI Rosalind Biodefense (page, AI-bio governance) - https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense/; tags: biosecurity, trusted access, public health
21. Google Gemini for Science (page, AI for Science platforms) - https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/; tags: science skills, hypothesis generation, computational discovery
22. Google DeepMind Co-Scientist (page, Scientific agents) - https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/; tags: multi-agent, hypothesis generation, ranking, lab validation
23. Sanger AI Genomics Consortium (page, AI-ready scientific data) - https://www.sanger.ac.uk/news_item/google-deepmind-google-org-and-sanger-institute-to-launch-new-ai-consortium-for-genomics/; tags: AI-ready data, genomics, data generation
24. Anthropic Making Claude a Chemist (page, Scientific model evaluation) - https://www.anthropic.com/research/making-claude-a-chemist; tags: chemistry, scientific artifacts, model evaluation
25. CEPI Pandemic Preparedness Engine (page, AI-bio governance) - https://cepi.net/biosecurity-design-cepis-pandemic-preparedness-engine; tags: biosecurity, agentic workflow, vaccine R&D
26. FAI Nucleic Acid Synthesis Screening (page, AI-bio governance) - https://www.thefai.org/posts/in-support-of-mandatory-nucleic-acid-synthesis-screening-and-recordkeeping; tags: screening, recordkeeping, traceability, biosecurity
27. Arbor Hypothesis-Tree Refinement (page, Autonomous research workflows) - https://arxiv.org/abs/2606.11926; tags: hypothesis tree, research state, scientific agents
28. Arbor GitHub (page, Autonomous research workflows) - https://github.com/RUC-NLPIR/Arbor; tags: open source, hypothesis tree, scientific agents
29. AutoResearchClaw (page, Autonomous research workflows) - https://github.com/aiming-lab/AutoResearchClaw; tags: autonomous research, human-in-the-loop, verification
30. ResearchClawBench (page, Autonomous research evaluation) - https://github.com/InternScience/ResearchClawBench; tags: benchmark, autonomous research, scientific agents
31. SciResearcher (page, Scientific reasoning benchmarks) - https://arxiv.org/html/2605.01489v2; tags: scientific reasoning, tool use, computation-grounded tasks
32. Agentic AI Scientists Critique (page, Scientific agent evaluation) - https://arxiv.org/html/2605.08956v1; tags: evaluation, physical validation, benchmark validity
33. Bohrium / DP Technology (page, China AI for Science ecosystem) - https://www.dp.tech/en/product/bohrium; tags: AI for Science, scientific workflow, China AI
34. DeepSeek News (page, China AI ecosystem) - https://www.deepseek.com/; tags: China AI, frontier models
35. Zhipu AI (page, China AI ecosystem) - https://www.zhipuai.cn/; tags: China AI, agents, models
36. Moonshot AI (page, China AI ecosystem) - https://www.moonshot.cn/; tags: China AI, long context, agents
37. BAAI (page, China AI research) - https://www.baai.ac.cn/; tags: China AI, AI research, scientific research
38. QbitAI (page, China AI media) - https://www.qbitai.com/; tags: China AI, AI news, startups

## Publish Checks

- [ ] Source link works.
- [ ] Facts are separated from interpretation.
- [ ] No private or employer-confidential details.
- [ ] The SciencesLoop connection is real.
- [ ] The post is one idea, not a link dump.
