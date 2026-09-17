# Daily signal sidecar - 2026-09-17

## Selected Signal

- Title: Making AI-Assisted Claims Independently Challengeable: Publication Authority and a Protocol for Falsifiable Publication Records
- URL: https://arxiv.org/abs/2609.17631
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Making AI-Assisted Claims Independently Challengeable: Publication Authority and a Protocol for Falsifiable Publication Records
- Primary source: https://arxiv.org/abs/2609.17631
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Map a public AI signal onto one concrete scientific workflow step.
- Failure mode: The public signal may be interesting but too thin to support a practical workflow decision yet.
- Practical test: Read the primary source, define one expected artifact, and test whether the claim changes a real workflow decision.
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

Total candidates reviewed after duplicate-source filtering: 63

1. [Making AI-Assisted Claims Independently Challengeable: Publication Authority and a Protocol for Falsifiable Publication Records](https://arxiv.org/abs/2609.17631)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17631v1 Announce Type: new Abstract: AI-assisted claims can appear authoritative when evidence, analysis, human authorization, presentation, and correction history refer to different states. Provenance, attestation, and transparency expose history but alone do not specify the publication transition examined here. We develop Publication Authority as an exact-state, non-transferable, single-use publication capability and instantiate it in PAC-2026 (Publication-Accountability Calculus), a machine-readable AIJIM Protocol candidate. We evaluate its fourth bounded semantic freeze (SF-4), a fixed-profile specification designed for replaceable bindings. Six obligations govern evidence, runs and artifacts, measurement disclosure, authorization, surface correspondence, and lifecycle continuity. Each yields a target-bound witness, localized counterexample, or localized unverifiability; none can compensate for another. Only a fresh, complete all-pass record derives the permit consumed by one atomic publication transition. We use identity vectors, adversarial cases, finite models, and historical implementations. Ten models explored 110,764 safe reachable states; 76 unsafe configurations produced the expected violation or observer countermodel. A reader surface passing its correspondence check cannot authorize publication unless the accepted record admits that surface. SF-4 separates evidence horizon from verification time and rejects an authentic but causally invalid authorization. A historical predecessor path reproduced 17 frozen authorization-successor outcomes. A later in-house, instance-blind test of known case classes matched all 183 scored expectations; same-host package execution reproduced its 240 archived observations. Results support internal coherence, bounded safety, fault sensitivity, and limited constructibility, but not factual truth, general refinement, blind interoperability, field efficacy, or standards status.

2. [CapMem: A Benchmark for Caption-Based Episodic Memory in Egocentric Video](https://arxiv.org/abs/2609.17688)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17688v1 Announce Type: new Abstract: Wearable assistants require episodic memory over egocentric video, yet current vision-language models face bounded frame budgets, growing visual-token costs, and long-context retrieval failures. Under these practical constraints, we study whether textual captions can serve as reusable episodic memory. We define the Episodic Memory Video Caption QA task and introduce CapMem, a human-annotated benchmark with 75 videos totaling 33.7 hours, and 1,000 multiple-choice questions across 16 scenarios. On long videos (>20 min), full-coverage CaptionQA with 30s and 60s caption windows outperforms direct VideoQA for 10/12 and 8/12 models, respectively. On the same video subset, a matched-frame control across six Qwen models retains mean accuracy gains of 3.22 and 2.55 points, respectively. Our caption-guided retrieve-and-verify harness further improves accuracy by up to 5.3 points. These results support the effectiveness of caption memory for episodic reasoning over long egocentric video.

3. [NeMo Data Designer: An Extensible Framework for Multimodal Synthetic Data Generation](https://arxiv.org/abs/2609.17699)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17699v1 Announce Type: new Abstract: We present NeMo Data Designer (NDD), an open-source, general-purpose framework for multi-modal synthetic data generation (SDG). Designed to be intuitive to use, NDD provides a declarative configuration format in which human and/or agent users define each dataset column, with column types spanning text, code, structured outputs, images, embeddings, and statistical samplers that are explicitly configured to steer dataset diversity. Additional column types and functionality can be introduced using the framework's flexible plugin system. NDD's configuration is an inspectable artifact, supporting workflow sharing and reproducibility. SDG is an inherently iterative process. NDD therefore builds a preview-and-revision loop into its core workflow, allowing users to generate and inspect a small number of records, refine the specification, and rerun generation at full scale. At runtime, NDD resolves dependencies, schedules calls to user-provided model endpoints, and retries failed requests. We describe NDD's architecture and programming model and present case studies spanning structured, agentic, multimodal, and domain-specialized tasks, including datasets used in Nemotron model development and in production enterprise deployments.

4. [Rebuilding AUTOMATIC1111 with Gradio Workflow](https://huggingface.co/blog/gradio-workflow-1111)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

5. [GraphEcho: Structural Redundancy and Evidence Provenance in LLM Graph Agents](https://arxiv.org/abs/2609.17695)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17695v1 Announce Type: new Abstract: A large language model (LLM) agent can follow more graph paths without acquiring more independent evidence. GraphEcho tests whether agents mistake these repeated encounters for additional corroboration. The benchmark varies path counts and evidential origins while holding evidence content fixed, and evaluates both judgments and active exploration. Controlled synthetic experiments reveal model-dependent judgment shifts, but redundant supporting paths increase the share of repeated walks across all evaluated frozen agents. Provenance-aware post-training (PAPT) reduces revisits and improves synthetic accuracy, yet covers fewer distinct sources. On scientific claims, it continues to reduce repetition while accuracy declines. These findings expose a gap between efficient exploration and effective evidence use: an agent can learn to stop repeating itself while overlooking information it needs. GraphEcho provides a controlled way to evaluate both what graph agents conclude and whether their exploration reaches distinct evidential sources.

6. [A Systematic Evaluation of the COTQ Provincial Land Cover Product: Structural Consistency, Spectral Separability, and Relative Positioning Against ESA, ESRI, and Google Products](https://arxiv.org/abs/2609.17731)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17731v1 Announce Type: new Abstract: High-resolution land use and land cover (LULC) products derived from Sentinel-2 imagery are widely used for environmental monitoring and land management, yet their performance can vary across regions with complex ecological gradients and heterogeneous surface conditions. In Quebec, these limitations motivated the development of a provincial 10-m land-cover product, the COTQ, designed to support annual monitoring of land occupation and soil artificialisation. This study presents a systematic evaluation of the COTQ product relative to three global 10-m LULC datasets: ESA WorldCover, ESRI LandCover, and Google DynamicWorld. This paper does not introduce a new mapping methodology but focuses on analysing the behaviour and consistency of the COTQ using complementary evaluation approaches. All products are harmonized under a common legend and compared using structural indicators (object-size distributions, shape complexity, Adjusted Rand Index, and Intersection over Union), spectral separability metrics derived from Sentinel-2 reflectance data, and a targeted photo-interpretation of disagreement areas. The analysis is conducted over eight Sentinel-2 tiles selected to represent the main bioclimatic domains of Qu\'ebec, from temperate and boreal forests to northern tundra environments. The results show that the COTQ exhibits structural and spectral characteristics most similar to ESA WorldCover among the reference global products, while revealing systematic differences linked to class definitions and thematic priorities, particularly for urban areas, wetlands, and rocky or cryptogamic surfaces. This multi-criteria evaluation provides an objective characterization of the COTQ product and clarifies its relative positioning with respect to existing global land-cover datasets for operational land monitoring in Qu\'ebec.

7. [Disentangling Algorithmic Bias from Archival Artifacts: A Controlled Audit of Vision-Language Model Valuation in Metropolitan Museum Archives](https://arxiv.org/abs/2609.17572)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17572v1 Announce Type: new Abstract: Auditing vision-language models (VLMs) for societal bias requires distinguishing direct algorithmic valuation disparities from confounders embedded within archival metadata. In this study, we audit Contrastive Language-Image Pretraining (CLIP) models using historical artwork metadata from the Metropolitan Museum of Art Open Access collection (N = 1,500 total objects; N = 743 attributed works: Male n = 534, Female n = 209; n = 618 anonymous). We establish a quantitative audit framework evaluating zero-shot CLIP logit differential scores across three semantic prompt pairs (masterpiece, quality, and influence). Unadjusted evaluations demonstrate high score convergence without a statistically significant main gender effect under OpenAI CLIP (mu_F = -0.0067 vs mu_M = -0.0035, p = 0.1829) or OpenCLIP (mu_F = 0.0171 vs mu_M = 0.0237, p = 0.1224). Two One-Sided Tests (TOST) confirm statistical equivalence across Cohen's d >= 0.25 bounds (pTOST 0.20). High residual embedding variance (R^2 < 2%) indicates that global zero-shot valuation metrics operate near an embedding noise floor, showing that broad zero-shot prompt logit differentials are a coarse measurement instrument rather than proving absolute model fairness. We highlight two key caveats: (i) macro-level score equivalence reflects metric insensitivity to fine-grained visual-semantic features and does not preclude localized micro-level visual biases, and (ii) excluding 41.2% unattributed holdings reflects institutional survival bias. These results demonstrate the necessity of multivariate confound control, equivalence testing, and archival provenance auditing when assessing AI fairness in cultural heritage collections.

8. [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://arxiv.org/abs/2609.17653)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17653v1 Announce Type: new Abstract: GUI agents execute long-horizon tasks on dynamic graphical user interfaces, where pop-ups, delayed loads, and relocated widgets routinely invalidate plans fixed before execution. Recent agent-skill frameworks encapsulate reusable procedural knowledge to mitigate this, yet existing skill designs are largely developed without targeting GUI execution dynamics and treat skills as static artifacts produced before deployment rather than living procedural knowledge that improves through it. We argue that what GUI agents need is not better static skills, but skills that can be revised from execution feedback at deployment time, without additional training. We propose \textbf{EvoSkill-GUI}, a training-free framework in which each skill is a structured multi-file package containing retrieval metadata, executable plans, backup localization, failure-recovery rules, accessibility utilities, and failure cases. EvoSkill-GUI operates through a \textbf{\emph{reflect-revise-reuse}} loop: the executor performs instant in-rollout revisions, an isolated critic diagnoses failed trajectories under strict information isolation, and the executor edits specific skill files through a restricted tool interface. Across MobileWorld, AndroidWorld, and OSWorld, three mainstream GUI benchmarks spanning mobile and desktop platforms, EvoSkill-GUI consistently improves multiple base models without any training, with maximum gains of $+16.2\%$, $+6.0\%$, and $+10.5\%$ respectively, and evolved skill libraries continue to benefit related tasks rather than being rebuilt from scratch. Our code is available at https://github.com/ZJU-REAL/EvoSkill-GUI.

9. [Braided endovascular implants for intracranial aneurysms: mechanics, hemodynamics, and clinical translation](https://arxiv.org/abs/2609.18544)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18544v1 Announce Type: new Abstract: Endovascular implants prevent intracranial aneurysm rupture by altering the mechanical and hemodynamic environment at the aneurysm neck. Yet many in silico workflows prescribe or reconstruct the post-deployment geometry before computing flow, leaving unresolved the mechanics that create the clinically relevant interface. Here we review braided intraluminal flow diverters, intrasaccular devices, and emerging flow-disruption concepts across deployment mechanics, inter-wire and wire-wall contact, superelasticity, wall apposition, pore geometry, computational fluid dynamics, and fluid-structure interaction. We connect these modeling choices to neck coverage, malapposition, migration, deformation, and durability, and distinguish established evidence from mechanistic inference and prospective hypotheses. We argue that model fidelity should match the clinical question: prescribed or fast placement may support screening, whereas questions of coverage, apposition, compaction, and migration benefit from mechanically plausible deployment states. An interface-resolved mechanics-to-flow framework, supported by measurable validation targets and standardized reporting, could improve device design and enable more reliable patient-specific treatment planning.

10. [Load balancing for adaptive-precision interatomic potentials in materials science](https://arxiv.org/abs/2609.18604)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18604v1 Announce Type: new Abstract: For atomistic molecular dynamics simulations, we consider a recently developed hybrid coupling between the highly accurate machine learning (ML)-based atomic cluster expansion (ACE) interaction model and a less precise (but about 1-2 orders faster) EAM potential, in order to leverage the performance bottleneck of pure ML potentials in a parallel computing environment. This spatial-temporal adaptivity has the potential for a speedup of more than an order of magnitude, that would be lost without a dynamic load-balancing strategy that becomes critical due to fluctuating potential contributions. We compare the load-balancing strategies of LAMMPS with load-balancing methods provided by the library ALL in adaptive-precision EAM-ACE simulations of a copper nanoindentation. For a regular-grid domain decomposition, the modified tensor method of the ALL library, which conserves the simplicity and transferability of the tensor method, significantly reduces the imbalance factor of the force calculation from 3.0 to 1.7 compared to the native load-balancing method of LAMMPS. A nearly perfectly balanced system with an imbalance factor close to 1.0 can be reached by load balancing an irregular grid of domains with the recursive bisectioning method of LAMMPS and with ALL's histogram method for a staggered grid of domains. Load balancing a staggered grid with ALL is found to be significantly faster than load balancing an irregular grid with the bisectioning method of LAMMPS, but the communication costs during a regular timestep are lower for the irregular grid of domains, as a lower surface-by-volume ratio of the domains is reached. Furthermore, we suggest a strategy to find the ideal load-balancing frequency for adaptive-precision simulations.

11. [Helping older adults use AI in everyday life](https://openai.com/index/helping-older-adults-use-ai-in-everyday-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 16:00:00 GMT
   - Summary: OpenAI and AARP are bringing free, hands-on ChatGPT workshops to 1,000 older adults across 10 U.S. cities to build practical AI skills safely.

12. [Reimagining advertising with AI](https://openai.com/index/reimagining-advertising-with-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 13:00:00 GMT
   - Summary: Explore new AI-powered advertising experiences from OpenAI, including Sponsored Agents, tools for marketers, and integrations with HubSpot and Shopify.

13. [How to connect AI usage to business value](https://openai.com/index/how-to-connect-ai-usage-to-business-value)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 12:00:00 GMT
   - Summary: Learn how ChatGPT Work and Codex analytics help teams understand AI usage and spend, identify training needs, and connect adoption to business outcomes.

14. [Our framework for reporting model misalignment](https://openai.com/index/model-misalignment-reporting-framework)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 17:00:00 GMT
   - Summary: OpenAI shares a framework for tracking, investigating, and disclosing model misalignment, alongside six reports of unexpected or concerning model behavior.

15. [How workers are unlocking new ways of working](https://openai.com/index/unlocking-new-ways-of-working)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 09:00:00 GMT
   - Summary: New OpenAI Economic Research shows how workers use AI beyond traditional roles and which new activities become recurring parts of their work.

16. [How Fyxer built an AI executive assistant people trust](https://openai.com/index/fyxer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 12:00:00 GMT
   - Summary: Fyxer uses OpenAI models, fine-tuning, memory, and real user feedback to organize inboxes and draft emails in each user’s voice.

17. [Perplexity trusts GPT-6 Astra with end-to-end systems](https://openai.com/index/perplexity-improving-accuracy-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 GMT
   - Summary: Perplexity uses Astra to write communications, change software, and monitor production systems, and checks in much less frequently than with earlier models.

18. [Cognition helps Devin test its own work with GPT‑6 Astra](https://openai.com/index/cognition-devin-testing-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 11 Sep 2026 16:00:00 GMT
   - Summary: GPT‑6 Astra improves Devin’s ability to test software and show that it works, with the goal of helping engineers review less code and ship more.

19. [How a researcher uses Codex and ChatGPT to search for new antimicrobial molecules](https://openai.com/index/using-codex-chatgpt-to-search-for-new-antimicrobials)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 16:00:00 GMT
   - Summary: César de la Fuente’s lab uses Codex and ChatGPT to search living and extinct genomes for antimicrobial candidates to fight drug-resistant infections.

20. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

21. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

22. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

25. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

26. [Safety for Whom? Refusing the Right Subset of a Topic, Not the Whole Topic](https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 08 Sep 2026 14:23:07 GMT

27. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

28. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

29. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

30. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

31. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

32. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

33. [EvolveTrade: Experience-Driven Policy Refinement for Self-Evolving LLM Trading Agents](https://arxiv.org/abs/2609.17632)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17632v1 Announce Type: new Abstract: Large language model (LLM) trading agents can combine market data, news, and executable analysis, but their behavior is often controlled by static hand-written tool-use policies that are fixed before deployment. This limits their ability to adapt how they gather evidence, invoke tools, verify signals, and manage risk under changing market regimes. We introduce EvolveTrade, a self-evolving framework that treats the system prompt of a tool-using trading agent as a text-parameterized policy. After each update interval, a Policy Agent revises this policy using accumulated decision traces and realized portfolio feedback, while keeping the backbone LLM fixed. The updated policy is then used for the next batch of trading decisions, enabling the agent to refine its information-acquisition and portfolio-construction procedure over time. Experiments across multiple market regimes and two LLM backbones show that EvolveTrade often improves Sharpe Ratio and Cumulative Return over fixed-policy LLM baselines, achieving the improved SR and CR in most evaluated settings. Behavioral analyses further show that self-evolved policies increase code-mediated analysis and activate regime-relevant computations; case-level policy-to-return attributions trace how policy-induced allocation changes contribute to realized return differences. These results suggest that adapting the reusable procedure governing tool use is a key direction for building more robust LLM trading agents.

34. [One Color Preprocessing Improves DSATUR](https://arxiv.org/abs/2609.17633)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17633v1 Announce Type: new Abstract: The Graph Coloring Problem (GCP) is NP-hard and DSATUR stands as one of the fastest heuristics for it despite producing colorings that typically use more colors than state-of-the-art coloring algorithms. We propose SSLD (Semidefinite Spectral Learning with DSATUR), which improves DSATUR by preprocessing a first good color class before letting DSATUR complete coloring the rest of the given graph. We obtain this color class from a Semidefinite Programming (SDP), similar to an SDP used to compute the Lov\'asz theta number. To the best of our knowledge, SSLD is the first approach to improve DSATUR by preprocessing through fixed color classes. We evaluate SSLD against DSATUR and against a naive 1-color-class preprocessing algorithm on DIMACS instances, random graphs (Erd\H{o}s--R\'enyi, Watts-Strogatz, Barab\'asi--Albert), Frequency Assignment and Job Shop Scheduling instances. SSLD matches or beats DSATUR in almost every case across over 1600 benchmark instances, and out performs the naive GISD baseline, allows us to confirm the value brought by the SDP-guided choice of the first color class. This quality comes at a runtime cost of roughly 195 times slower that DSATUR, but demonstrating that SDP-guided preprocessing of a first color class is a direction for future improvements.

35. [Physics-Constrained Digital Twins for Sensor Integrity in Urban Pedestrian Flow: Detecting Stealthy False Data Injection with Conformal Guarantees](https://arxiv.org/abs/2609.17635)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17635v1 Announce Type: new Abstract: City pedestrian counting systems now feed economic indicators, planning decisions and safety operations, yet the twins built on top of them treat the incoming stream as ground truth. We study what happens when it is not. We formalise stealthy false data injection for city-scale pedestrian sensing, where the map from latent flow to observation is far more rank deficient than in the power and water networks for which stealth has been characterised. Our twin estimates directed flows on the pedestrian street graph, assimilates counts through a learned graph-localised gain, and is trained against a flow conservation residual that couples metered and unmetered segments. Detection combines the innovation with that residual, and the alarm threshold is set by adaptive conformal calibration rather than by hand. To measure what the physics buys, we define the attack margin, the relative reduction in worst-case corruption of the estimated flow field, achieved against a white-box adversary that optimises directly through the twin. On six years of Melbourne data the margin reaches 0.54 against a single compromised device and falls to 0.19 when a third of the fleet is compromised, on a network where only 1.18 per cent of walkable segments are metered. Replacing the street graph by a distance graph collapses it to 0.09, which shows that the gain comes from the conservation law rather than from locality.

36. [What You Can't See Is Still What You Learn: A Preregistered Sixty-Society Confirmation That Evidence Masking Drives Compositional Generalization](https://arxiv.org/abs/2609.17637)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17637v1 Announce Type: new Abstract: Restricting what a module can read may improve what a system learns to compute. We test this in a preregistered confirmation with sixty four-cell systems sharing a frozen language-model backbone and communicating through learned continuous packets. Five conditions vary evidence masking, ownership markers, and replacement of foreign evidence with neutral filler, across six initialization clusters, each with two data orders, on one fresh task world. With markers available in both regimes, masking improved accuracy on held-out two- and three-operation compositions by median paired differences of 0.846 and 0.859; all twelve pairs cleared the required margins, and the full preregistered behavioral criterion passed. The unmarked replication also passed. No globally visible system passed the marker-following check, so the effect of usable role information remains unresolved. The filler condition yielded seven full generalizers, but its decomposition criteria were inconclusive. Packet interventions in all eighteen audited masked systems followed the predicted intermediate-value changes on eligible cases; these finite, success-conditioned audits do not establish mediation. The results confirm a large advantage of the tested masking regime, while leaving its finer attribution and generality open. Protocols, results, and checkpoints are public.

37. [GVD: Governed Versioning and Deduplication for Document Repositories](https://arxiv.org/abs/2609.17696)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17696v1 Announce Type: new Abstract: Document repositories evolve continuously. Guidelines and policies are revised, superseded, and re-uploaded, so the same content recurs in different wording and newer versions refine or contradict earlier ones. These inconsistencies belong to the growing collection rather than to any single document, yet existing work treats versioning, duplicate detection, and contradiction detection as isolated pairwise tasks and stops once a pair is labeled. We present GVD (Governed Versioning and Deduplication), a framework that unifies cross-document version linking with rule-level conflict resolution under an auditable update policy. Incoming documents are assigned to version families through bidirectional rule alignment, and their rules are compared against the family memory to identify duplicates, contradictions, asymmetric refinements, and new knowledge, with Counterfactual Span Probing (CSP) resolving related pairs that inference misclassifies as neutral. Relation-specific policies suppress duplicates and escalate only consequential changes for review, retaining version lineage as an audit trail. The pipeline runs fully locally, with no large language model. On 120 enterprise documents processed as 140 ingestions across 59 version families, GVD reaches an F1 of 0.97 for version-family construction and 0.94 for rule-level consistency, with CSP raising rule consistency from 0.90 to 0.94.

38. [Fully differentiable framework for inverse identification of geometry and material parameters with application to determining stress-free configuration of soft tissues](https://arxiv.org/abs/2609.18109)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18109v1 Announce Type: new Abstract: Medical images of soft tissues typically depict loaded configurations rather than true unloaded (stress-free) states, which can bias biomechanical simulations and inverse material identification. A gradient-based inverse finite element framework is presented that jointly reconstructs an effective unloaded reference geometry and estimates hyperelastic material parameters from two or more observed deformed configurations. The formulation is fully differentiable and leverages exact end-to-end gradients to enable unified, simultaneous optimization of geometry and constitutive parameters. The objective function combines a nodal-position misfit with a deformation-gradient-based mismatch term, improving robustness under large deformations. Benchmark studies quantify the influence of loading diversity and observation count and demonstrate reduced sensitivity to poor material initialization. Finally, application to an MRI-derived breast model shows accurate recovery of the unloaded configuration and constitutive parameters from multiple gravity-loaded states. The framework provides a unified and scalable tool for inverse biomechanics with potential applications in personalized modeling, elastography, and surgical planning.

39. [Moment-informed force rescaling for random-batch Langevin dynamics](https://arxiv.org/abs/2609.18389)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18389v1 Announce Type: new Abstract: Random-batch methods accelerate molecular dynamics by replacing full interaction sums with stochastic force estimators. In Langevin simulations, however, random-batch force errors can cause artificial heating and distort equilibrium and dynamical observables, especially for small batch sizes or under weak thermostat coupling. Moreover, the magnitude of these errors can vary across particles. We introduce moment-informed force rescaling for random-batch list (Mi-RBL) and random-batch Ewald (Mi-RBE) methods. A lagged average of each particle's sampled-force intensity sets an isotropic gain before the current batch is sampled, changing the random-batch force magnitude without changing its direction. The formal finite-time analysis quantifies the bias--variance tradeoff, and an estimate of the steady-state kinetic-temperature error predicts the scaling of the kinetic error with time step and thermostat friction. In the coexistence, binary-mixture, and electrolyte tests, Mi-RBL and Mi-RBE reduce kinetic errors and more closely reproduce the mean-square displacement, radial distribution function, and charge density profiles of the reference solutions. Mi-RBE also reduces the growth rate of the kinetic error with the time step by more than half and retains the predicted dependence on thermostat friction. The tested rescaling strength decreases with increasing batch size, and the particlewise update retains $O(N)$ complexity for fixed batch size.

40. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.89; Date: 2026-09-17T09:02:32Z; Popularity: 1,889 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-09-17T08:15:23Z; Popularity: 485 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-16T02:14:34Z; Popularity: 364 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-14T03:11:45Z; Popularity: 246 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

44. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

45. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

46. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

47. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

48. [Pay Only for Disagreement: Certified No-Regression Verdicts for Model Updates with Matching Label-Complexity Bounds](https://arxiv.org/abs/2609.17560)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17560v1 Announce Type: new Abstract: Every production model is updated, by retraining, fine-tuning, quantization, or a silent vendor swap, and each update risks being worse than what it replaced. We formalize update promotion as certified paired risk-difference auditing. Our starting point is a support identity: the risk difference between two models lives on the inputs where they disagree, observable without labels. We build DISCERN, a sequential two-tier protocol. A zero-label tier certifies benign updates whose disagreement rate is below tolerance from unlabeled traffic alone. An audited tier labels only sampled disagreements through an anytime-valid confidence sequence, valid at every stopping time and under any label-routing rule, even an adversarial judge. We prove finite-sample validity and matching label-complexity bounds of order rho^2/eps^2 at the rate level, so exploiting free disagreement provably saves a factor 1/rho over any pairing-blind auditor, and the guarantee composes across an unbounded sequence of promotions from one error budget. Across 14,000+ replayed audit streams over 785 update pairs, including LoRA fine-tunes of language models up to 1.4B parameters, miscoverage is 0.0002 (nominal 5%), power 0.986 with zero false alarms, and 56% of benign updates certify with zero labels. Each audit emits a machine-checkable evidence record for post-market monitoring.

49. [Beyond Static RAG: An Adaptive, Tri-Metric Routing Framework for Efficient Long-Context Inference on Commodity GPUs](https://arxiv.org/abs/2609.17564)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17564v1 Announce Type: new Abstract: Deploying retrieval-augmented generation (RAG) on commodity GPUs such as the NVIDIA T4 (16 GB VRAM) exposes a practical failure mode we call the Compression Paradox: neural prompt compression can add key-value (KV) cache contention and preprocessing latency that outweigh generation-time savings, while skipping compression can cause out-of-memory (OOM) failures on long contexts. We identify two distinct failure mechanisms when a vLLM-served LLM and a PyTorch-based compressor are co-deployed under tight memory budgets, and introduce the Tri-Metric Router, a deterministic, training-free policy that selects among Raw, Neural (LLMLingua-2), and Lexical (BM25) pipelines. The router uses three CPU-side signals: spatial complexity ($L$), syntactic density ($\rho_{key}$), and type-token ratio (TTR). Unlike prior semantic-only adaptation, our dispatch signal is hardware-physical, based on VRAM headroom and a latency crossover point. Thresholds are calibrated from profiling on LongBench qasper, yielding an operating crossover near 4,332 words on T4; our contribution is this calibration methodology rather than a hardware-specific constant. On out-of-distribution holdouts, the method achieves 0% OOM failures, 88.5 $\pm$ 4.4% oracle alignment, and 49.3% Combined F1, improving over always-on lexical compression by 5.2 points without additional VRAM or training cost.

50. [Fathom: Per-Query Read Depth for Sparse Decoding over Offloaded KV Caches](https://arxiv.org/abs/2609.17652)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17652v1 Announce Type: new Abstract: When agentic sessions run to a million tokens with many sessions resident at once, the KV cache and the index that ranks it live in host memory, and the scan that ranks all n keys for a top-k step becomes the traffic that bounds decoding. We present Fathom, a key scan in which each query decides how many bits of each key channel to read. The 4-bit K cache is stored channel-major as bit planes, so a prefix of t planes is exactly the channel's t-bit quantizer, and the query spends its bit budget by reverse water-filling over the variance-weighted importance of its channels. At one million tokens on Qwen3-8B a decode step is 1.67x faster in GPU time than with the 136-bit scans of Double Sparsity, Loki and SparQ r=32, and in the same GPU time as SparQ's 68-bit read (r=16) Fathom reads 18% fewer bytes with lower attention error on six of seven model and context settings. On RULER-style tasks every per-token scan matches exact top-k decoding, and on real coding-agent sessions Fathom reaches the step agreement of the most accurate 136-bit scan at 92 bits. The store is the 4-bit K copy a quantized serving stack already holds, and the method is not faster when the index is resident in GPU memory.

51. [Machine learning kinetics from molecular dynamics data](https://arxiv.org/abs/2609.17736)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17736v1 Announce Type: new Abstract: Most molecular transitions occur on timescales far beyond direct molecular dynamics simulations. The committor, the probability that a configuration reaches a product state before a reactant state, is a central kinetic statistic, providing a mechanism-independent reaction coordinate and a foundation for transition path theory and the calculation of rates. This review surveys modern approaches for estimating the committor and related kinetic statistics from molecular simulations, with an emphasis on self-supervised methods that learn solutions of their defining dynamical equations rather than relying on labeled shooting data. We develop a common operator viewpoint connecting generator-based partial differential equations, variational principles, Markov state models, dynamical Galerkin approximation, and neural networks. Empirical and theoretical evidence points to the efficiency of these methods. We provide theoretical and practical guidance for realizing their full potential in applications, including strategies for treating non-Markovian effects and for sampling. We conclude by identifying opportunities for further research, including connections to reinforcement learning and generative modeling.

52. [MLegS: A modern mapped Legendre spectral method solver for unbounded domains with parallelization](https://arxiv.org/abs/2609.18026)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18026v1 Announce Type: new Abstract: MLegS is an open-source Modern Fortran code package for solving linear and nonlinear time-dependent partial differential equations on radially unbounded domains. It builds on an earlier in-house prototype, recasting it as a modular solver with a unified interface for fields, transforms, and spectral operators. Within this framework, the numerical formulation maps $0\leq r<\infty$ onto a finite interval, where associated Legendre functions provide the radial basis, while Fourier series represent the periodic azimuthal and axial directions. The mapped radial basis represents radial infinity without imposing an artificial boundary condition at finite radius while incorporating the regularity required at $r=0$ according to azimuthal order. The implementation distributes the corresponding field layouts using the Message-Passing Interface (MPI), with strong- and weak-scaling measurements extending to 512 cores across four compute nodes. Beyond parallel performance, three examples assess the solver across diffusion, reaction-diffusion, and vortex dynamics: closed-form diffusion solutions establish spectral spatial convergence and the design orders of both semi-implicit integrators; a Fisher-Kolmogorov-Petrovsky-Piskunov front matches the linearized solution and propagates at the classical speed within its logarithmic correction; and vortex-pair simulations based on toroidal-poloidal decomposition yield a measured Crow growth rate $2.7\%$ above the theoretical prediction and demonstrate the reconnection of the vortex pair.

53. [A consistent and conservative Phase-Field method for compressible multiphase flows with the six-equation model](https://arxiv.org/abs/2609.18085)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18085v1 Announce Type: new Abstract: In the present study, the consistent and conservative Phase-Field method is extended to the six-equation model for compressible multiphase flows. Based solely on the conservation laws and the second law of thermodynamics, the six-equation model with the Phase-Field mechanism is first derived. In addition to satisfying Galilean invariance and consistency of reduction, the model is general to admit an arbitrary number of phases with different formulations of the Phase-Field mechanism. The isobaric closure by the pressure relaxation and the incompressible limit of the proposed model are analyzed. The derivation and analysis identify additional terms arising from the Phase-Field mechanism, which are absent from previous studies. The consistent and conservative numerical approach is adapted to the proposed six-equation model with moderate modifications, retaining the interfacial equilibrium condition, conservation, and flexibility and robustness of incorporating different formulations of the Phase-Field mechanism with bound preservation. As the new component of solving the six-equation model, both the pressure and pressure-temperature relaxations are theoretically analyzed in a general multiphase setup, with a proof of the existence and uniqueness of a thermodynamically admissible solution for these two relaxations. Various two-phase compressible flow benchmarks are performed to demonstrate the method, and good agreement with exact solutions is achieved.

54. [Improved lattice Boltzmann method for conjugate magnetohydrodynamic simulations](https://arxiv.org/abs/2609.18097)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18097v1 Announce Type: new Abstract: In the simulation of conjugate magnetohydrodynamic (MHD) flows, where a moving conducting fluid dynamically interacts with bounding conducting walls under the influence of an externally imposed magnetic field, resolving the electrical conductivity transition across the fluid-solid interface introduces significant numerical challenges. In problems with high magnetic Reynolds numbers, it is required to solve the full magnetic induction formulation that has a curl-of-curl term for the magnetic diffusion, which is simplified to a divergence term in the original vector-valued lattice Boltzmann method (LBM). The resulting LBM scheme is valid for simulating fluid domains with a constant conductivity where its bounding solid walls are modelled using appropriate boundary conditions. The current study shows that this scheme is also valid for two-dimensional conjugate MHD simulations where the magnetic field component with non-zero gradients is perpendicular to the conductivity gradient. For general conjugate MHD simulations, we improve the LBM scheme by considering the difference between the curl-of-curl term and the simplified divergence form, which is treated as a source term in the LBM evolution algorithm and computed using an efficient LBM discretisation scheme. The improved LBM scheme automatically satisfies the required conjugate constraints at the fluid-solid interface as a volume integral inside two adjacent boundary layers. The accuracy of the improved LBM scheme is verified by piecewise analytical solutions in benchmark problems with an abrupt conductivity jump across the fluid-solid interface.

55. [Van der Waals interactions in supercritical water under Earth's mantle conditions](https://arxiv.org/abs/2609.18183)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.18183v1 Announce Type: new Abstract: The properties of water under high pressure and high temperature (HP-HT) are critical in multiple geochemical processes in deep Earth. Ab initio molecular dynamics (AIMD) is a promising approach to study water under extreme conditions without any empirical parameters. However, the accuracy of AIMD simulations is determined by the exchange-correlation (XC) functional including the dispersion correction used in density functional theory calculations. While van der Waals (vdW) interactions are well known to be critically important for water under ambient conditions, the influence of the dispersion correction on the properties of HP-HT water as found in Earth's mantle remains largely unexplored. To address this, we carried out AIMD simulations for supercritical water at 1, 5, and 10 GPa, and 1000 K. We compared PBE, PBE-D3, RPBE-D3, and SCAN functionals, where D3 means Grimme's D3 dispersion correction. We compared the structural, diffusion, and vibrational properties of water as computed with these XC functionals. Overall, the discrepancies between the functionals are reduced under extreme P-T conditions relative to ambient conditions. PBE and PBE-D3 exhibit higher proton-transfer rates than RPBE-D3 and SCAN, suggesting that while vdW interactions do not significantly affect the water structure under extreme conditions, the oxygen-hydrogen bond strength does influence proton transfer. Our results provide molecular-level insight into water in Earth's mantle and offer valuable guidance for selecting appropriate XC functionals in AIMD simulations of aqueous solutions under extreme conditions.

56. [LSR-Net: Learning the Forward Evolution Operator for Nonlinear Fluid Dynamics](https://arxiv.org/abs/2609.19039)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 17 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19039v1 Announce Type: new Abstract: We introduce the Long-Short-Range Neural Network (LSR-Net), a novel neural operator architecture designed for data-driven forward evolution modeling, and extends it to the prediction of nonlinear fluid dynamics. LSR-Net learns the evolution operator of a dynamical system solely from pairs of initial and future state snapshots, which splits the learnable integral kernel into long-range (LR) and short-range (SR) components within stacked network blocks. While the SR component uses standard convolutions to capture local dynamics, the LR component employs a sum-of-exponentials (SOE) representation. This allows for the efficient computation of global interactions as a trainable Fourier multiplier, reducing computational complexity to $O(n \log n)$ where $n$ is the number of pixels in an input snapshot and requiring only a few parameters per channel. LSR-Net is evaluated on three challenging 2D benchmarks: the coupled Burgers equation, the wave equation with a spatially varying coefficient, and the nonlinear shallow water equation {(SWE)}. Results demonstrate that LSR-Net significantly outperforms the baseline short-range network (SR-Net) as well as FNO and DeepONets in predictive accuracy, achieving substantially lower relative errors by effectively capturing both local fine-scale structures and crucial global pattern interactions.

57. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

58. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-17T17:23:50Z; Popularity: 745 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

59. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.26; Date: 2026-09-17T17:30:03Z; Popularity: 1,260 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

60. [Show HN: Slowave – local adaptive memory for coding agents](https://github.com/slowave-ai/slowave)
   - Source: Hacker News; Group: Tech community; Score: 2.25; Date: 2026-09-14T19:49:12Z; Popularity: 5 points, 0 comments
   - Summary: HN discussion: 5 points, 0 comments.

61. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-15T09:10:11Z; Popularity: 230 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

62. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-12T06:53:29Z; Popularity: 123 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

63. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-17T09:23:32Z; Popularity: 8 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Making AI-Assisted Claims Independently Challengeable: Publication Authority and a Protocol for Falsifiable Publication Records

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.17631

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
