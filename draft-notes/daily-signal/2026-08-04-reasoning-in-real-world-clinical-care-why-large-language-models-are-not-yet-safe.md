# Daily signal sidecar - 2026-08-04

## Selected Signal

- Title: Reasoning in Real World Clinical Care: Why Large Language Models Are Not Yet Safe for Autonomous Clinical Decision Support
- URL: https://arxiv.org/abs/2607.28677
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Reasoning in Real World Clinical Care: Why Large Language Models Are Not Yet Safe for Autonomous Clinical Decision Support
- Primary source: https://arxiv.org/abs/2607.28677
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

Total candidates reviewed after duplicate-source filtering: 70

1. [Reasoning in Real World Clinical Care: Why Large Language Models Are Not Yet Safe for Autonomous Clinical Decision Support](https://arxiv.org/abs/2607.28677)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28677v1 Announce Type: new Abstract: LLM now pass medical licensing examinations and, in curated cases, can rival physicians at diagnostic reasoning. These developments have accelerated the use of LLMs for symptom assessment and clinical decision support in diagnostic and treatment guidance, administrative documentation, and rules-based alert enhancement. This Perspective concerns the most consequential of these applications: the autonomous triage of self-presenting, undifferentiated patients, with little or no clinician in the loop. For that task, the evidence of safety does not yet exist. The gap is not in medical knowledge but in the fidelity of clinical evaluation: a model optimized to continue the most probable text is not optimized to act safely when the safe answer is the improbable must-not-miss diagnosis. Safe triage is not the selection of the most likely diagnosis; it is a sequential decision under asymmetric cost, in which the single catastrophic miss outweighs many false alarms, and the decisive signal may be one the patient has not volunteered - and that the model has not been trained to seek. The core deficit is therefore one of information gathering under uncertainty. Under incomplete histories, LLM systems may fail to show the behaviors safe triage requires: broadening the differential; seeking the missing red flag; lowering the threshold for escalation; deferring judgement until sufficient information is obtained; and escalating concern where high-harm diagnoses remain unexcluded. These modes of failure for LLMs can be difficult to detect considering that evaluations to date often use complete, well-curated, confidence-gated simulations. The application of LLMs under these conditions may be amplified by assistant-like behaviors and positive bias, including credulity, agreeableness, and miscalibration - when these are not constrained by clinical triage logic.

2. [OpenClaw and Ollama in Agentic AI: Toward Fully Autonomous and Scalable AI Agent Systems](https://arxiv.org/abs/2607.28629)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28629v1 Announce Type: new Abstract: The rapid transition from reactive large language models (LLMs) to persistent, action-capable systems has exposed critical gaps in the architectural understanding of Agentic AI, particularly in separating inference, orchestration, and execution layers for autonomous AI agents. Despite recent advances, unified frameworks for designing and evaluating full-stack agentic systems remain limited. This paper presents a comprehensive, layered architecture for Agentic AI, outlining the evolution from reactive LLM interfaces to persistent, goal-driven autonomous AI agents with memory, planning, and continuous execution. We analyze OpenClaw and Ollama as a full-stack Agentic AI system, where Ollama serves as the LLM inference layer and OpenClaw enables agent runtime orchestration, integrating reasoning, tool use, and action execution. A prototype experimental validation of the OpenClaw-Ollama architecture demonstrates that capabilities such as persistent memory, tool utilization, and adaptive decision-making emerge from system-level integration rather than standalone models, with performance improving consistently as architectural complexity increases. The study further examines challenges in scalability, security, privacy, governance, and evaluation of agentic systems, highlighting the need for robust benchmarking and system-level design. Future directions include scalable multi-agent architectures, distributed autonomous systems, and human-aware Agentic AI frameworks for responsible deployment. Overall, this work establishes a unified architectural foundation for Agentic AI, validates the effectiveness of full-stack autonomous AI agents, and provides a roadmap for building scalable, secure, and trustworthy agentic systems. All models, code, and datasets are publicly released to support reproducibility and benchmarking.

3. [ThinkReset: Learnable Intermediate Interface Construction for Bounded-Context Long-Horizon Reasoning](https://arxiv.org/abs/2607.28642)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28642v1 Announce Type: new Abstract: Long chain-of-thought reasoning improves performance on complex problems, but it also introduces redundancy accumulation, context overflow, and error anchoring. We argue that under bounded context windows, the core bottleneck is not trajectory compression or test-time control, but the absence of a reusable intermediate interface that can replace discarded history and support continued solving. We further identify a key failure mode of outcome-reward-driven long-chain reinforcement learning: when the model has not solved the task before the window is nearly exhausted, the final-answer reward encourages premature guessing rather than continued careful reasoning. We propose ThinkReset, a text-space instantiation of this view. ThinkReset explicitly constructs reusable intermediate interfaces through interface writeback and reset, and directly optimizes post-reset continuation success. Across multiple long-horizon reasoning benchmarks, this perspective consistently improves success rates under fixed context windows.

4. [TAPR: Enhancing LLM Performance with a Task-Aware Prompt Rewriter](https://arxiv.org/abs/2607.28657)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28657v1 Announce Type: new Abstract: Large Language Models (LLMs) often require carefully crafted prompts to unlock their full potential, which can be a barrier for non-expert users. This work addresses the challenge by introducing a Task-Aware Prompt Rewriter (TAPR), a model that reformulates user prompts into task-optimized prompts with the explicit goal of improving downstream LLM performance. We train TAPR using reinforcement learning with Group Relative Policy Optimization (GRPO), where rewards are derived from LLM-as-judge evaluations of both the reformulated prompt and the corresponding task output. Experimental results on diverse tasks, such as question answering, summarization, and arithmetic reasoning, show that our method yields consistent gains over base models in prompt rewriting ability. Fine-tuning Phi-4-mini-instruct (as the base model for TAPR) produces prompts that contain clearer and more instructive language, leading to higher accuracy on established benchmarks such as Natural Questions and GSM8K. Our code is available at: https://github.com/OliverSavolainen/task-specific-prompt-rewriter

5. [MetaRoute-Bench: Evaluating Meta-Decision Policies for Agentic Workflow Routing](https://arxiv.org/abs/2608.00107)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00107v1 Announce Type: new Abstract: Agentic systems must repeatedly decide whether to answer directly, decompose a task, invoke a tool, execute code, delegate to a specialist, verify an intermediate result, or recover from failure. These meta-decisions affect not only task success but also operating cost and latency, yet they are often embedded inside an orchestration framework and evaluated only through aggregate task accuracy. We present MetaRoute-Bench, an open, inspectable framework for comparing meta-decision policies under a shared execution model. The initial benchmark contains 180 synthetic task profiles spanning data analysis, research, and document processing, eight routing policies, and 30 paired random seeds. Across 43,200 traces, a task-aware compositional policy achieves 79.4% success compared with 76.7% for a strong workload-specific static policy, 67.4% for one-shot task routing, and 52.9% for direct answering. Relative to the static policy, this is a 2.7 percentage-point improvement with paired 95% CI of plus or minus 2.0 points, at 4.7% higher mean cost and 6.4% higher latency. Ablations show the largest losses when route composition is restricted to one operation and when verification is removed. These results are generated by a seeded offline execution model rather than a live deployment; accordingly, the primary contribution is a reproducible evaluation method and an analysis of routing-policy tradeoffs, not evidence of production effectiveness. We release task generation, policies, traces, tests, and analysis artifacts to support live-system validation.

6. [Advancing the price-performance frontier with GPT-5.6](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 30 Jul 2026 10:00:00 GMT
   - Summary: Explore lower GPT‑5.6 pricing for Luna and Terra—and how OpenAI’s more efficient models help enterprises deploy AI workflows at scale.

7. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

8. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

9. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

10. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

11. [NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics](https://huggingface.co/blog/nvidia/cosmos-h-dreams)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 27 Jul 2026 09:32:20 GMT

12. [LLM Framework for Discovering Major Mathematical Conjectures: AI's Quest for the Next Riemann Hypothesis](https://arxiv.org/abs/2607.28632)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28632v1 Announce Type: new Abstract: Major mathematical conjectures still depend heavily on expert intuition, so a unified method for the systematic generation and validation of conjectures with substantial mathematical potential remains unavailable. We present a three stage pipeline for major conjecture discovery, with region search from explicit local evidence modules, reflective validation for foundationality, novelty, and potential significance, and formal validation in Lean 4 and Mathlib. The objective is the discovery of mathematical problems with high problem taste, namely problems whose proofs could reorganize the language of a research area and provide durable help to human mathematical research. Experiments on twenty candidates showstable passage from natural language to formal checks, with twenty out of twenty candidates passing Lean parsing and type checking, twenty out of twenty candidates not directly absorbed by exact?,twenty out of twenty candidates not automatically discharged by aesop, and no explicit duplicates or near duplicates.

13. [Empowering Cross-Domain Sequential Recommendation with Hybrid Tokenization and Serial-Parallel Decoding](https://arxiv.org/abs/2607.28659)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28659v1 Announce Type: new Abstract: Cross-domain sequential recommendation (CDSR) aims to model users' dynamic interest transitions and sequential patterns across multiple domains. Recently, generative recommendation (GR) has emerged. It first learns semantic identifiers (SIDs) from item semantics and formulates recommendation as autoregressive generation. However, existing methods face two critical issues: (1) they ignore collaborative correlations across domains during tokenization, and (2) they adopt inefficient decoding strategies, such as beam search, during generation, which hinders real-time deployment. To address these limitations, we propose GenCDSR, an effective and efficient generative framework for CDSR. Specifically, we design a cross-domain hybrid tokenization mechanism with a multi-tower architecture to jointly capture cross-domain commonalities and domain-specific distinctions through hierarchical shared-specific and fine-grained codebooks. Furthermore, we develop a cross-domain serial-parallel decoding strategy that leverages the hierarchical SID structure to partially parallelize generation, significantly reducing inference latency while preserving generation consistency. Experiments on three public datasets show that GenCDSR achieves an average accuracy improvement of 1.5 percent and an average inference latency reduction of 85.1 percent compared with state-of-the-art baselines. The implementation code and datasets are available online: https://github.com/Applied-Machine-Learning-Lab/RecSys2026_GenCDSR.

14. [An Ontology-Guided, Deduplication-Aware Extraction Layer for Knowledge Graph Construction from Heterogeneous Documents](https://arxiv.org/abs/2607.28662)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28662v1 Announce Type: new Abstract: Large language models extract entities and relationships from unstructured documents fluently but inconsistently: type vocabularies fracture across documents, the same person surfaces under several name variants, relationships duplicate, and distinct individuals who share a name risk silent conflation. This paper presents the design, implementation, and empirical refinement of a production extraction layer that converts a live document stream into a validated knowledge graph aligned to a formal ontology. The system consumes document metadata from Kafka, routes PDF, spreadsheet, Office, and image content through handlers built for each format, and extracts entities and relationships in two passes using a locally hosted Qwen3.5-9B model tuned on the ontology. Its distinguishing component is ontology-guided extraction: the relevant slice of a curated ontology is retrieved live from a graph database by embedding similarity and injected into the extraction prompt, reducing catalog overhead by about 94 percent relative to static domain slices. Extracted results then pass through a refinement pipeline of five stages: deterministic cleaning, merging across chunks, a second pass for relationships, six deduplication algorithms that require no model inference, and an embedding resolution subsystem whose conflict guard no similarity score can override. Evaluation on intelligence corpora improved search recall from roughly 70 to 95 percent with no false merges, and corrected seven classes of silent quality defect, ranging from a bug that truncated source text by a single character to the systematic duplication of entities that carried title prefixes.

15. [How Hard Does It Think? Analyzing Step-Aware Reasoning Energy in LLM Chain-of-Thought Trajectories](https://arxiv.org/abs/2607.28674)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28674v1 Announce Type: new Abstract: Understanding how computational effort is allocated across individual chain-of-thought (CoT) reasoning steps remains an open challenge: existing interpretability methods rely on output-level signals or collapse processing depth into a single trajectory-level scalar, leaving step-wise effort opaque. We propose Step-Aware Reasoning Energy (SARE), a geometric framework that quantifies effort at the granularity of individual CoT steps via Centered Kernel Alignment (CKA) between Gram matrices of token hidden states across adjacent transformer layers, capturing inter-token relational structure without requiring eigenvector alignment or cluster correspondence. SARE further contextualizes this energy within reasoning's semantic progression by modeling CoT trajectories as transitions among latent semantic states. Across six reasoning benchmarks and three open-weight LLMs, we find that reasoning energy is highly non-uniform across step types, exhibiting phase-like transitions invisible to trajectory-level metrics; incorrect trajectories show systematically lower energy at critical reasoning junctions; and SARE-based features match or outperform output-based confidence baselines in most settings, indicating that internal geometric dynamics encode predictive information beyond surface-level signals.

16. [ViSAGE: Constructing Self-Correcting Memories for Long-Form Video Understanding](https://arxiv.org/abs/2607.28678)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.28678v1 Announce Type: new Abstract: Multimodal agents operating in long-horizon environments must build and continually update multimedia memories to support entity-consistent, temporally grounded reasoning. However, existing agentic memory approaches often discard fine-grained dentity cues under aggressive compression and segment-wise processing. They also rely heavily on vector similarity retrieval, which can surface semantically related yet identity-mismatched evidence, leading to entity confusion, error propagation, and hallucinated answers. We propose ViSAGE, a multimodal agentic memory framework that constructs self-correcting, entity-centric memories. Specifically, ViSAGE anchors entity identity via cross-modal binding over long temporal ranges. It then applies bidirectional memory refinement to propagate delayed identity evidence, retroactively unifying historical records and improving future reasoning. We also introduce multi-agent cross-verification to assess retrieved evidence under an identity-evidence alignment onstraint, enabling abstention instead of unsupported answers when evidence is missing. Extensive results demonstrate that ViSAGE consistently outperforms the strongest baseline, achieving 5.9% higher accuracy.

17. [Learning Compositional Meta-Routing for Agentic Workflows: An Executable Benchmark](https://arxiv.org/abs/2608.00106)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00106v1 Announce Type: new Abstract: Agentic systems must decide not only what answer to produce, but which reasoning and execution operations should precede it. A controller may answer directly, decompose a request, retrieve evidence, execute code, delegate to a specialist, or verify an intermediate result. Existing routing work largely selects model endpoints, retrieval depth, or tools in isolation. We introduce an executable benchmark and a budget-aware meta-router that composes heterogeneous operations from raw task text. The benchmark contains 216 training, 72 development, 108 held-out test, and 108 locked lexical-shift challenge tasks across data analysis, frozen-corpus research, and document processing. Outcomes are machine checked after operations execute. Independent regularized logistic heads predict operation probabilities from word and character features, are temperature-scaled on development data, and are greedily composed under route-cost and action-count budgets. On the held-out test, the learned policy achieves 100% success versus 93.5% for strong static and fixed workflows, with 43% lower cost than the static policy; a matched learned one-shot router reaches 56.5%. On the untouched challenge split, learned success falls to 75.9% and trails static routing at 93.5%, while remaining 49% cheaper and exceeding one-shot routing by 34.3 points. The gap identifies lexical generalization, rather than route execution, as the principal limitation. These results establish a reproducible testbed and a bounded proof of concept, not evidence of live-LLM performance.

18. [A Physics-Chemistry-Informed Neural Network (PCINN) for Real-Time Spatial-ALD Coverage Prediction and Reliable Kinetics Inversion](https://arxiv.org/abs/2608.00212)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00212v1 Announce Type: new Abstract: Spatial atomic layer deposition (SALD) is a leading atmospheric-pressure, high-throughput route to industrial ALD, but design and control are limited by the cost of predicting surface coverage: high-fidelity CFD is far too slow for operating-window scans, while analytic models miss transport modulation such as the gas curtain. We present a physics-chemistry-informed neural network (PCINN), a hybrid surrogate with CFD-level accuracy at real-time speed: a query returns coverage in about 7 ms, roughly 5x10^4 times faster than a CFD solve, reaching a test R^2_log = 0.998 (leave-one-out R^2_raw = 0.974) from only 30 training cases spanning four orders of magnitude in coverage. The architecture is not a black box: a small network learns only the operating-condition to near-wall concentration closure, while the known surface kinetics is a hard-coded, trainable chemistry layer integrated along the substrate trajectory. This single-scalar bottleneck keeps it accurate under sparse data, interpretable and invertible. We add a full identifiability analysis (Fisher information, profile likelihood). The adsorption energy E_ads and desorption rate k_des are robustly identifiable; k_ads is not separately identifiable at a single temperature (only k_ads*c_wall is). Across four temperatures the prefactor nu and E_ads bind along a weakly identifiable degeneracy valley of slope 0.065 eV/decade, derived analytically as k_B T_eff ln(10) and turned into a reliability diagnostic: a seven-chemistry mismatch matrix shows it is invariant under any single-Arrhenius mismatch and shifts only when a second thermally activated process appears, so a slope departure flags unmodelled site heterogeneity. Data come from simulation with known ground truth inverted by the same kinetic form, so the study verifies pipeline self-consistency and the identifiability boundary, not real parameters.

19. [A Physics-Chemistry-Informed Neural Network (PCINN) for Real-Time Spatial-ALD Coverage Prediction and Reliable Kinetics Inversion](https://arxiv.org/abs/2608.00212)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00212v1 Announce Type: cross Abstract: Spatial atomic layer deposition (SALD) is a leading atmospheric-pressure, high-throughput route to industrial ALD, but design and control are limited by the cost of predicting surface coverage: high-fidelity CFD is far too slow for operating-window scans, while analytic models miss transport modulation such as the gas curtain. We present a physics-chemistry-informed neural network (PCINN), a hybrid surrogate with CFD-level accuracy at real-time speed: a query returns coverage in about 7 ms, roughly 5x10^4 times faster than a CFD solve, reaching a test R^2_log = 0.998 (leave-one-out R^2_raw = 0.974) from only 30 training cases spanning four orders of magnitude in coverage. The architecture is not a black box: a small network learns only the operating-condition to near-wall concentration closure, while the known surface kinetics is a hard-coded, trainable chemistry layer integrated along the substrate trajectory. This single-scalar bottleneck keeps it accurate under sparse data, interpretable and invertible. We add a full identifiability analysis (Fisher information, profile likelihood). The adsorption energy E_ads and desorption rate k_des are robustly identifiable; k_ads is not separately identifiable at a single temperature (only k_ads*c_wall is). Across four temperatures the prefactor nu and E_ads bind along a weakly identifiable degeneracy valley of slope 0.065 eV/decade, derived analytically as k_B T_eff ln(10) and turned into a reliability diagnostic: a seven-chemistry mismatch matrix shows it is invariant under any single-Arrhenius mismatch and shifts only when a second thermally activated process appears, so a slope departure flags unmodelled site heterogeneity. Data come from simulation with known ground truth inverted by the same kinetic form, so the study verifies pipeline self-consistency and the identifiability boundary, not real parameters.

20. [Adaptive operator-generated subspaces for effective many-body Hamiltonians](https://arxiv.org/abs/2608.00560)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00560v1 Announce Type: cross Abstract: Electronic-structure and embedding workflows terminate in effective many-body Hamiltonians, whereas quantum eigensolver studies often start from hand-built qubit models. We present the Adaptive Clifford-Algebra Subspace Eigensolver (A-CASE), a single-reference, operator-generated Rayleigh--Ritz method. Overlap, Hamiltonian, observable, and response matrices are reconstructed from one shared Pauli-expectation bank, while adaptive growth scores overlap-aware local pencils and rejects symmetry leakage or near-linear dependence. A strict FCIDUMP adapter supplies the active-space boundary. For linear H$_4$ in STO-3G with CAS(4e,4o), the mapped sector agrees with independent determinant FCI to $3.1\times10^{-15}$ Ha. At a nine-vector budget A-CASE has a $3.019$ mHa error; replacing the determinant reference by a two-operator ADAPT-VQE state reduces it to $0.342$ mHa, without implying a matched total-cost advantage. Under a matched contract, the fixed-reference route uses one state preparation versus ADAPT-VQE's ninety but measures roughly an order of magnitude more Pauli words. Exact fixed-angle ADAPT-GCIM gives $13.364$ mHa at the nearest size match and $10.674$ mHa at the iteration match, with its transition-pair burden reported separately. Across a broader benchmark ladder, fixed Krylov bases are generally more accurate and often narrower but substantially less well conditioned. A grouped bootstrap propagates finite-shot variability through thresholding, diagonalization, root matching, spectral weights, susceptibility, and broadening; its bands are explicitly heuristic and conditional, not finite-sample confidence certificates. The work establishes an executable path from an interchange Hamiltonian to energies, correlations, and response, without claiming materials accuracy, favorable scaling, or quantum advantage.

21. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.60; Date: 2026-08-04T13:57:06Z; Popularity: 2,599 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

22. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

23. [Apple is getting this wrong](https://openai.com/index/apple-is-getting-this-wrong)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 03 Aug 2026 22:00:00 GMT
   - Summary: OpenAI addresses Apple’s baseless lawsuit, corrects claims about its employees, and shares messages documenting what happened.

24. [How we built a realtime system for responsive voice AI in six months](https://openai.com/index/continuous-voice-interaction-with-gpt-live)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 03 Aug 2026 07:00:00 GMT
   - Summary: GPT-Live enables continuous voice interaction with AI, using a turnless speech model and low-latency architecture for faster, more natural conversations.

25. [Circles powers telco personalization with OpenAI technology](https://openai.com/index/circles)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 03 Aug 2026 00:00:00 GMT
   - Summary: Circles uses the OpenAI API and Codex to power AI-native telco experiences, increasing ARPU by 22%, reducing churn by 9%, and improving development efficiency.

26. [Ten advances in mathematics and theoretical computer science](https://openai.com/index/ten-advances-in-mathematics)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sat, 01 Aug 2026 00:00:00 GMT
   - Summary: OpenAI shares new results on long-standing open problems in mathematics and theoretical computer science, including advances in geometry, cryptography, and complexity.

27. [Building abundant intelligence](https://openai.com/index/building-abundant-intelligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 15:00:00 GMT
   - Summary: A full-stack approach to making advanced AI more capable, more affordable, and more widely useful.

28. [Univé builds an AI-ready workforce](https://openai.com/index/unive)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 07:00:00 GMT
   - Summary: See how Univé built an AI-ready workforce with ChatGPT Enterprise by combining leadership, responsible governance, and employee-led innovation to transform work at scale.

29. [Disrupting a Criminal Scam Operation](https://openai.com/index/disrupting-malicious-uses-of-ai-criminal-scam-operation)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 GMT
   - Summary: OpenAI disrupted a Cambodia-based scam operation using ChatGPT to support investment, romance, gambling, and impersonation schemes.

30. [How avatarin built a 24/7 retail agent with GPT-Realtime](https://openai.com/index/avatarin)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 GMT
   - Summary: avatarin uses OpenAI’s GPT-Realtime to give Yamada Denki shoppers 24/7 multilingual support. In two weeks, 30,000 people used the agent and 92% of survey responses were positive.

31. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

32. [Deploy local agents everywhere with LFM2.5-2.6B](https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 04 Aug 2026 13:58:29 GMT

33. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

34. [The OlmoEarth Platform: Geospatial inference at planetary scale](https://huggingface.co/blog/allenai/olmoearth-infrastructure)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 16:27:42 GMT

35. [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 GMT

36. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

37. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

38. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

39. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

40. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

41. [Uncertainty-Aware Simulation-Based Inference for Operations Research with Large Language Models](https://arxiv.org/abs/2608.00019)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00019v1 Announce Type: new Abstract: Deploying large language models (LLMs) for operations research (OR) tasks remains challenging because correctness depends on a coherent modeling process, not merely a correct final answer. Standard autoregressive generation operates on a myopic policy, which sometimes fails to anticipate whether a partial formulation can be validly extended into a globally consistent optimization model. Consequently, locally plausible steps may propagate into catastrophic downstream formulation or solver code errors. To address this, we propose an uncertainty-aware, training-free inference framework for OR mathematical modeling. Without updating model parameters, our method evaluates intermediate candidate steps using short lookahead simulations to quantify downstream predictive uncertainty or probability concentration. Candidates that demonstrate a higher likelihood of yielding coherent mathematical formulations are then dynamically selected via importance resampling. Empirical evaluations across multiple OR benchmarks (including NL4OPT, MAMO, and IndustryOR) demonstrate that our framework consistently outperforms both standard and low-temperature baselines, establishing an efficient, training-free paradigm for reliable OR formulation generation.

42. [Inference-Time Policy Alignment for Fair Reinforcement Learning](https://arxiv.org/abs/2608.00175)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00175v1 Announce Type: new Abstract: Deep reinforcement learning (RL) agents achieve strong performance by optimizing scalar reward functions. However, once deployed, the policies of these RL agents are often rigid and costly to adapt to new performance criteria. For instance, an agent trained to maximize expected cumulative reward may not accommodate previously unknown stakeholder preferences. Existing approaches to achieve fairness, a type of preference, in RL typically assume that such preferences are known a priori and require complete retraining of the policy under a fairness-oriented metric. Inspired by inference-time alignment in large language models, we investigate the problem of steering a pretrained RL policy toward welfare-based fairness objectives at inference time without updating the base policy's parameters. We formalize inference-time fairness alignment as a policy shaping problem and propose a multiplicative policy shaping framework that adjusts action probabilities using action-dependent welfare scores, thus requiring no modification to the base policy. Our framework is general and compatible with any deep RL agent. Through extensive experiments across multiple domains, we demonstrate that inference-time policy shaping substantially improves welfare-based fairness objectives while preserving core task performance.

43. [Mitigating ray effects in rarefied flow simulations using an ensemble-of-subproblems strategy with stochastic discrete velocities](https://arxiv.org/abs/2608.00514)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00514v1 Announce Type: new Abstract: In this work, a ensemble-of-subproblems strategy with stochastic discrete velocities is extended to deterministic methods for mitigating ray effects in rarefied flow simulations. The strategy involves performing multiple independent subproblems, each using a small set of randomly sampled velocity points, and then averaging their solutions to obtain the final result. The core idea is to ensure that the distribution function at any velocity can contribute to the final result, approximating highly refined velocity-space resolution without increasing the memory requirement in any single subproblem. We incorporate this strategy within the DUGKS framework, and the resulting method is denoted as SDV-DUGKS. To evaluate the performance of the proposed method, we compare SDV-DUGKS with the original DUGKS on several test cases: (a) the Sod shock tube problem, (b) the one-dimensional Riemann problem, (c) the two-dimensional lid-driven cavity flow, and (d) the two-dimensional Riemann problem. The results show that, in the collisionless limit $\mathrm{Kn} \to \infty$: (1) for one-dimensional compressible flows, SDV-DUGKS reduces memory usage by approximately 2/3 compared with that of the original DUGKS while achieving good agreement; (2) for two-dimensional compressible flows, SDV-DUGKS requires one to two orders of magnitude less memory than the original DUGKS while achieving good agreement. Based on these results, it can be concluded that the proposed method serves as a reliable and effective tool for mitigating ray effects in rarefied flow simulations.

44. [A memory-efficient deterministic method for multiscale gas flows using an ensemble-of-subproblems strategy with stochastic discrete velocities](https://arxiv.org/abs/2608.00521)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00521v1 Announce Type: new Abstract: Deterministic multiscale gas flow simulations have long suffered from the curse of dimensionality: the number of discrete velocities increases dramatically with the velocity space dimension and the Mach number, exhausting available memory and computational resources. To address this issue, this paper proposes a memory-efficient deterministic method based on an ensemble-of-subproblems strategy using stochastic discrete velocities. This strategy transforms the originally computationally expensive problem into a series of independently and efficiently solvable subproblems. To be concrete, the proposed method replaces the conventional large deterministic velocity set with multiple small random velocity sets. Each random set defines a subproblem, which is solved by a deterministic multiscale numerical scheme that computes macroscopic moments via Monte Carlo integration. The final flow field is obtained by arithmetic averaging over all sub-problems. In this work, we employ the discrete unified gas kinetic scheme (DUGKS) for spatial discretization and term the resulting method SDV-DUGKS. To validate the proposed method, several numerical test cases are conducted, including (a) the one-dimensional shock structure, (b) the two-dimensional cavity flow, and (c) supersonic flow around a square cylinder. The results of the one-dimensional shock structure confirm the feasibility of the proposed method. The two-dimensional cases demonstrate that, compared to its deterministic counterpart, the proposed method saves more than 80% of memory usage while maintaining comparable accuracy. These results indicate that the proposed method markedly reduces memory demand for multiscale flow simulations and exhibits strong potential to alleviate the curse of dimensionality that currently hinders deterministic multiscale numerical schemes from being applied to engineering problems.

45. [Round-Trip Consistency: Bidirectional Diffusion Models Can Predict Their Own Rollout Errors](https://arxiv.org/abs/2608.00675)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00675v1 Announce Type: cross Abstract: Autoregressive models accumulate error over long rollouts, yet at deployment there is no ground truth to measure it against. We train a single conditional latent diffusion model that steps a dynamical system forward or backward in time via a direction flag, and show that this bidirectionality supplies a measurement-free test-time error signal: rolling forward $i$ steps and then backward $i$ steps must return the model to its start, so the round-trip discrepancy $\mathcal{C}_i$ is a self-supervised proxy for the unobservable rollout error: no ensembles, no held-out data, no governing equations, for one extra rollout. We validate on compressible magnetohydrodynamics (MHD), an astrophysical turbulent radiative mixing layer, and natural face videos (CelebV-HQ). On held-out MHD trajectories, $\mathcal{C}_i$ ranks rollout error (Spearman $0.91$-$0.98$ at fixed depth; $0.69 \pm 0.16$ within trajectories), and a simple calibrator fit on training rollouts predicts its magnitude to within $1.14\times$ ($68\%$) and $1.29\times$ ($95\%$) with near-nominal coverage - one nat beyond a depth-only predictor, transferring to all six decoded physical fields. The same signal flags the out-of-distribution Orszag-Tang vortex (AUROC $0.98$; $1.0$ by depth $10$) exactly where sampling-dispersion baselines invert, and it cuts incurred error by $15\%$ at $80\%$ coverage - three times the depth-only baseline. Bidirectional training comes at negative cost, beating direction specialists in both directions, and the backward direction doubles as a fast inverse solver. On LE-PDE-UQ's turbulent Navier-Stokes benchmark, a single bidirectional model reaches accuracy within $1.3\times$ of their ten-model ensemble at a tenth of the training cost, with the best training-free pixel-level calibration. Round-trip consistency turns reversibility into a practical trust signal for generative models.

46. [Physics-informed neural networks for two-dimensional wall-reactive solute dispersion in canonical shear flows](https://arxiv.org/abs/2608.00856)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00856v1 Announce Type: cross Abstract: The dispersion of reactive solutes in shear flows is governed by the interplay between advective stretching, transverse diffusion, and boundary exchange kinetics. While classical analytical methods and grid-based numerical solvers have extensively characterised these transport mechanisms, accurately resolving the spatiotemporal evolution of solute plumes in asymmetric reactive environments remains computationally demanding. In this study, we introduce a physics-informed neural network (PINN) framework to simulate two-dimensional wall-reactive solute dispersion in canonical shear flows (Couette, Poiseuille, and Couette-Poiseuille) bounded by absorbing walls. By embedding the governing convection-diffusion equation and Robin boundary conditions into a unified loss function, the mesh-free PINN reconstructs the spatiotemporal concentration field. The network predictions are validated against an alternating-direction implicit (ADI) finite-difference benchmark, showing close agreement across non-reactive, symmetric, and asymmetric reactive regimes. The computations are carried out at $\mathrm{Pe}=10$ for impermeable walls, symmetric absorption $(\beta_1,\beta_2)=(1,1)$, and tenfold asymmetric wall-reactivity contrasts $(\beta_1,\beta_2)=(0.2,2)$ and (2,0.2). Leveraging the differentiable nature of the trained PINN, we extract wall-resolved transport diagnostics, including the apparent axial dispersion coefficient, cumulative wall-removal dynamics, and localised uptake fluxes. The results show that the imposed shear profile governs the streamwise organisation of reactive uptake, while unequal wall reactivities induce transverse asymmetry that modifies the macroscopic spreading rate. Overall, this framework establishes PINNs as an interpretable mesh-free tool for analysing boundary-coupled reactive transport in shear flows.

47. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.63; Date: 2026-08-04T15:25:11Z; Popularity: 1,631 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

48. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-04T05:39:41Z; Popularity: 478 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

49. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.29; Date: 2026-08-04T00:37:31Z; Popularity: 295 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

50. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-08-02T20:01:07Z; Popularity: 219 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

51. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

52. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

53. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

54. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

55. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

56. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

57. [Leak It: A Probabilistic Approach to Training-Data Extraction from Black-Box Language Models](https://arxiv.org/abs/2608.00144)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00144v1 Announce Type: new Abstract: Membership inference (MIA) on language models is usually summarised by an aggregate ROC-AUC, but such evaluations are confounded: model-free blind baselines separate members from non-members from surface text alone. We study black-box, sampling-based training-data leakage through a probabilistic lens, treating N samples from p(.|x) as an estimate of the output distribution and casting leakage signals as functionals of it. We extend the blind-baseline critique into the sampling regime: on WikiMIA a blind bag-of-words classifier reaches AUC 0.97 (TPR 0.90 at 5% FPR) and sampling adds nothing, while on an IID Pile split (MIMIR) neither self-concentration nor gold-continuation recovery significantly beats a blind baseline (incremental AUC 95% CI includes zero). Aggregate metrics hide the real harm. The same sampling verbatim-extracts training data for a tail of documents no blind attack can reach. On Pythia-6.9B, 83 of 500 Pile documents bearing a real identifier (16.6%; 21.3% of those bearing an email address) have that exact identifier reproduced AND not reproduced under a mismatched-prefix control, so each leak is attributable to that document, not to a globally common string. This per-document disclosure is invisible to aggregate AUC and grows with capacity (5.6% to 16.6% from 410M to 6.9B). The risk is uneven: identifier leakage is ~3x stronger in code than prose, though prose stays clearly positive and also grows with capacity (4.0% to 12.1%), while recovery of arbitrary held-out continuations is confined to code (+0.44 member gap on GitHub vs at most +0.014 on prose). Temperature and nucleus sampling matter little, a 16-token prefix suffices, and we detect no reduction from corpus deduplication. Privacy audits should report per-document extraction, decomposed by domain, not a single AUC. We release leakit, a black-box extraction-audit tool.

58. [Response Magnitude as a Dominant Signal for Held-Out CRISPRi Perturbation Effect Prediction](https://arxiv.org/abs/2608.00152)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00152v1 Announce Type: new Abstract: Predicting the magnitude of a CRISPRi perturbation's transcriptomic effect on held-out target genes is an important open problem in single-cell biology. Recent work has documented that simple baselines often match or exceed deep perturbation predictors on related protocols. We study this phenomenon on the Virtual Cell Challenge (VCC) benchmark under a strict held-out target-gene split, identify the specific low-dimensional signal that drives the gap, and characterize how it transfers across cell types. The target is the log Anderson-Darling distance from non-targeting controls, which is strongly predictable from four deterministic scalar functions of the 2,000-dimensional input. A deep MLP encoder with direct access to the full input collapses toward the marginal training mean, and standard remedies do not close the gap. A linear regression on the four magnitude scalars alone exceeds the strongest x-only classical model, while a Random Forest on the input plus the four scalars substantially outperforms our deep proof-of-concept encoder. Two pre-specified controls attribute the magnitude gain to per-row alignment rather than added dimensionality. Under zero-shot transfer to two external CRISPRi screens evaluated against a target-gene endpoint rebuilt from single-cell data, magnitude-only predictors transfer positively whereas expression-only predictors are negative or unresolved. Exposing magnitude to the deep encoder improves transfer over its expression-only counterpart, yet the encoder does not outperform a four-scalar linear regression on the same features. We also find that the Anderson-Darling column distributed with these screens measures transcriptome-wide response breadth rather than target-gene effect strength, so evaluating transfer against it scores a different outcome.

59. [AutoCause: A Python framework that automates expert decisions in environmental time-series causal discovery](https://arxiv.org/abs/2608.00198)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00198v1 Announce Type: new Abstract: Environmental time-series causal discovery requires expert decisions about method choice, conditional-independence tests, lag horizons, sample-size adequacy, multiple-testing control, and evidence interpretation. Applied inconsistently across datasets, these choices yield graphs that cannot be compared, reproduced, or audited. We present AutoCause, an open-source Python workflow that records each decision, derives defaults from an extended causal-audit module, and admits domain-informed overrides. The workflow wraps four established causal-discovery methods from three families, adds non-causal reference models, and grades links by method-count support. On 145 datasets from DGP-Atlas, TimeGraph, and a topology-derived CausalRivers reference, the methods recover complementary parts of the reference graphs. Majority-supported links are more precise than single-method links on the synthetic benchmarks but not against river topology. AutoCause converts inconsistent expert practice into an auditable, repeatable analysis; causal interpretation remains with the analyst. Available at https://github.com/marcoruizrueda/autocause.

60. [Consistent and bound-preserving finite-volume WENO scheme for compressible two-/$N$-phase flows with Phase-Field mechanism](https://arxiv.org/abs/2608.00746)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00746v1 Announce Type: new Abstract: In the present study, we propose a consistent and bound-preserving finite-volume WENO scheme that satisfies the requirements of consistency, conservation, equilibrium, and bound preservation for compressible multiphase flows with the Phase-Field mechanism. The proposed WENO scheme is developed based on a new calculation of WENO weights determined by relative smoothness between stencils and on a coupled reconstruction of the masses and volume fractions. Consistency of reduction and volume fraction summation to unity are considered during the development so that fictitious phases, local voids, or overfilling are not produced numerically when there are $N$ ($N \geqslant 1$) different immiscible phases. The proposed WENO scheme is applied to the consistent and conservative Phase-Field method with adaptive mesh refinement enabled. Various benchmark compressible two- and $N$-phase flows are performed to verify the properties of the proposed WENO scheme as well as its variant with the consistent limiter. We finally demonstrate the capability of the proposed WENO scheme in shock-induced cavity collapse and shock-vessel-bubble interaction problems, with discussion of the necessity of bound preservation for high-order schemes and comparison of different compressible multiphase flow models.

61. [Multiscale passive scalar turbulence in a compressed subspace via tensor trains](https://arxiv.org/abs/2608.00194)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.00194v1 Announce Type: cross Abstract: Capturing the multiscale statistics of turbulence in compressed form remains a central challenge for reduced-order modeling. We introduce a hybrid Tensor Train (TT) approach for a highly intermittent passive scalar. The hybrid TT matches Galerkin, wavelet, and standard TT decompositions for the structure functions while improving the representation of intermittent, non-Gaussian fluctuations. These results open a route toward evolving the linear dynamics of passive scalars directly in compressed tensor form, with potential applications to quantum algorithms for fluid transport.

62. [Spatial-Order Hierarchy of Time-Dependent Exchange-Correlation Potential](https://arxiv.org/abs/2608.01483)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.01483v1 Announce Type: cross Abstract: Exact time-dependent density-functional theory separates the exchange-correlation potential into interaction and kinetic-correlation components, but the structural relation between them remains unknown. We establish a representability constraint based on the off-diagonal expansion of the one-electron reduced density matrix relative to a time-dependent Hartree-Fock (TDHF) reference. A non-zero linear term generates a non-HF current density while the kinetic-correlation component remains HF representable; higher-order off-diagonal structure activates the kinetic component. In a one-dimensional two-electron correlation quench, retaining the exact interaction component while setting the kinetic component to zero suppresses the density broadening of the exact evolution. These results establish a hierarchy of density equations of motion and provide an exact constraint for non-adiabatic functional construction.

63. [Supersonic jet impingement on concave surfaces](https://arxiv.org/abs/2608.01542)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 04 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.01542v1 Announce Type: cross Abstract: The aeroacoustic resonance of round supersonic jets impinging on concave surfaces is investigated using compressible large-eddy simulations, vortex-sheet modelling, and Powell's feedback-loop analysis. The choked jets operate at an ideally expanded Mach number of $1.56$ and a Reynolds number of $6\times10^4$. Six geometries are considered: two flat plates at $L/D=2.08$ and $2.58$, where $L$ is the nozzle-to-wall distance and $D$ the nozzle exit diameter, and four Gaussian concave surfaces of fixed depth and indentation spread $\sigma\in\{0.4,0.8,1.6,4.0\}$. As the indentation narrows, the primary-tone amplitude increases by up to $23\,\mathrm{dB}$ relative to the flat-wall reference at $L/D=2.6$, together with larger wall-pressure fluctuations and moments. A Powell-Tam source-transfer budget attributes this amplification to increased Mach-disk source amplitude and more efficient return of the upstream feedback wave to the nozzle. The stronger upstream-propagating waves are consistent with acoustic focusing by the concave wall. For the helical cases, the measured frequencies and radial eigenfunctions agree closely with the guided jet mode predicted by the vortex-sheet model, supporting its role in closing the upstream feedback path. The same selection is recovered for concave and flat walls alike, so this tone is governed by the shear-layer profile of the equivalent ideally expanded jet rather than by the wall geometry. The axisymmetric frequencies, by contrast, coincide with no guided-mode branch and appear instead to follow Powell's classical loop-length criterion. The results identify distinct frequency-selection mechanisms for helical and axisymmetric screech and demonstrate that wall curvature provides effective control of screech amplitude and surface loading.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-04T02:47:31Z; Popularity: 716 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.65; Date: 2026-08-04T02:20:24Z; Popularity: 651 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-08-03T12:56:59Z; Popularity: 163 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-08-03T11:34:45Z; Popularity: 105 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Reasoning in Real World Clinical Care: Why Large Language Models Are Not Yet Safe for Autonomous Clinical Decision Support

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.28677

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
