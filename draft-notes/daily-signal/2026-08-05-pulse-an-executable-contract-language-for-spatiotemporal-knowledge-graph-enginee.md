# Daily signal sidecar - 2026-08-05

## Selected Signal

- Title: PULSE: An Executable Contract Language for Spatiotemporal Knowledge Graph Engineering
- URL: https://arxiv.org/abs/2608.02630
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: PULSE: An Executable Contract Language for Spatiotemporal Knowledge Graph Engineering
- Primary source: https://arxiv.org/abs/2608.02630
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

1. [PULSE: An Executable Contract Language for Spatiotemporal Knowledge Graph Engineering](https://arxiv.org/abs/2608.02630)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02630v1 Announce Type: new Abstract: Knowledge graph engineering often distributes accepted state, observations, constraints, processes, and hypothetical scenarios across artifacts whose combined execution contract remains external. We present PULSE, an Object-Process-Methodology-inspired language that localizes four operational roles and their write effects in one typed runtime. Here, modes denote operational roles rather than modal or deontic logic. The implemented contract fixes evidence non-overwrite, branch isolation, grounded multi-subject timers, guarded state change, and declaration-ranked event ordering over time and space; an external runner still decides whether evidence becomes an authoritative move. GeoSPARQL, SOSA, and SHACL remain generated views. A core calculus gives an effect-confinement lemma and six safety properties. Lean 4 checks kernel analogues for positions, evidence, clocks, monitors, atomicity, and branch source retention; 88 tests, 3,534 bounded checks, and 32 Lean/Python runtime-kernel cases bound the implementation claim to the checked cases. First-author implementations of a standards composition and a separate Sismic statechart reproduce the tested cold-chain trace. Across 37,440 generated temporal traces, PULSE matches a separate workflow and distinguishes ten single-field mutants. On the complete NOAA IBTrACS since1980 subset it agrees with GEOS and an event sweep on 1,476,290 transition-zone pairs, including 4,800 sampled and 12,831 duration-qualified events. Project-specific GeoSPARQL probes measure interface coverage. Overall, the results support contract localization, safety arguments, and trace parity for the tested fragment; language superiority and usability remain outside the evaluation.

2. [Towards a new paradigm of scientific discovery with socialized artificial intelligence](https://arxiv.org/abs/2608.02775)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02775v1 Announce Type: new Abstract: Scientific discovery has advanced through successive transformations in the organization of knowledge. Observation and experimentation established the empirical foundations of science. Theory made it possible to derive general principles from particular phenomena. Computation extended inquiry into systems beyond direct observation, while data-intensive methods opened new spaces of pattern and prediction. Science now confronts a different frontier. The central challenge is no longer simply to produce more information, but to organize expanding knowledge, reasoning, and evidence into a coherent process of discovery. Here, we introduce Bridging Literature, Agents, and Zero-gap Experimentation (BLAZE), a paradigm of socialized scientific intelligence. BLAZE conceives AI not as an assistant for isolated research tasks, but as an organizational infrastructure for scientific discovery. It connects persistent knowledge, collective reasoning, empirical validation, and human judgment within a continuous research lifecycle, transforming fragmented activities into a cumulative process of inquiry, criticism, and revision. The central premise of BLAZE is that scientific intelligence does not arise from computation alone. It emerges from the sustained interaction among knowledge, hypotheses, experiments, and collective verification. By organizing humans and machines within a shared scientific process, BLAZE makes discovery more traceable, reproducible, and cumulative while preserving human creativity, judgment, and responsibility. Socialized scientific intelligence may provide a foundation for the next era of science. Its purpose is not to replace human discovery, but to extend the scale, depth, and continuity of collective scientific inquiry.

3. [ISEE: Interactive Semantic Enrichment for Database Fields](https://arxiv.org/abs/2608.02604)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02604v1 Announce Type: new Abstract: LLM-based agents are increasingly being deployed for data-related tasks, including data sense-making, exploration, and retrieval. However, their performance heavily depends on the clarity and completeness of data semantics. In practice, many field descriptions remain ambiguous or incomplete, as much of the essential context (e.g., the meaning of a customized field) originates from users' domain knowledge and is rarely documented publicly. This gap restricts the agents' task performance in downstream tasks, such as entity-linking. To bridge this gap, we introduce a novel and comprehensive Interactive SEmantic Enrichment system (ISEE). Given a data field description, ISEE measures its quality through a scoring system, gathers domain knowledge, and collaboratively enriches the semantics with users. Through a user study, automated user simulation, quantitative evaluation, and case study, we demonstrate that ISEE significantly reduces cognitive load, improves description quality, and enhances downstream task performance.

4. [HyperAgent: Planning and Acting over Tool-Schema Hypergraphs for Tool-Use LLM Agents](https://arxiv.org/abs/2608.02650)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02650v1 Announce Type: new Abstract: Large language model (LLM) agents increasingly rely on external tools to complete complex real-world tasks. However, reliable tool-use planning remains challenging due to the limitations of implicit reasoning and the evolving nature of real-world execution environments. Existing tool-use agents typically rely on LLMs to infer tool compositions from textual descriptions, which can lead to inefficient exploration and unreliable execution in complex tasks. To address these challenges, we model tool relations at the schema level and construct a directed Tool--Schema Hypergraph, in which tools are represented as hyperedges from their required input-schema nodes to their output-schema nodes. Furthermore, we propose HyperAgent, a Tool--Schema Hypergraph-guided framework for dynamic planning and execution. Given a task, HyperAgent first extracts a task-relevant tool context graph and uses it to guide the construction of a schema-aware Task DAG. During execution, HyperAgent dynamically realizes each subtask by constructing a state-conditioned tool support graph through deficit-oriented expansion, which identifies unresolved requirements and retrieves supporting producer tools according to the current agent state. Experiments on AppWorld demonstrate that HyperAgent improves task completion performance while reducing redundant API calls, LLM interactions, and token consumption compared with existing agent baselines.

5. [Third-party cyber evaluations involving OpenAI models](https://openai.com/index/third-party-cyber-evaluations-involving-openai-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 04 Aug 2026 19:00:00 GMT
   - Summary: OpenAI explains recent third-party cybersecurity evaluation incidents and outlines new safeguards to strengthen AI model testing and evaluation.

6. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

7. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

8. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

9. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

10. [NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics](https://huggingface.co/blog/nvidia/cosmos-h-dreams)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 27 Jul 2026 09:32:20 GMT

11. [Beyond the Hivemind: Escaping LLM Homogeneity via Meta-Persona Anchoring and Sequential Temperature Scaling](https://arxiv.org/abs/2608.02618)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02618v1 Announce Type: new Abstract: Recent studies have identified an ``Artificial Hivemind'' effect in Large Language Models (LLMs) causing models to converge on a narrow, homogenized consensus even for open questions. This semantic collapse limits the diversity of AI, resulting in high inter-response similarity ($\approx 0.80-0.90$) even under high-temperature sampling. In this paper, we propose a novel mitigation framework to increase diversity: Meta-Persona Anchoring combined with Filtered Temperature Scaling (FTS). Our approach utilizes a two-stage generation process: first, the model is prompted to self-select a unique, idiosyncratic persona to anchor its starting point; second, we apply a dual-stage sampling sieve, utilizing Top-$p$ filtering to preserve grammatical validity followed by extreme temperature scaling ($T \ge 4.0$) on the surviving candidates to explore the broadened probability distribution. We evaluate our method using the INFINITY-CHAT dataset on state-of-the-art open weight models under $\sim$20B parameters. Our results demonstrate a significant reduction in semantic convergence, with average pairwise cosine similarity dropping from ($\approx 0.85$) to ($\approx 0.65$). Our scheme achieves a majority of questions below the 0.7 threshold, effectively reducing the gap between artificial mode collapse and human-level typological diversity. We provide our implementation as an open-source framework to enable more diverse and creative AI deployments.

12. [Predictive Set Theory: A Generative Framework for Cognitive Architecture with Operationalized Core Mechanisms](https://arxiv.org/abs/2608.02704)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02704v1 Announce Type: new Abstract: Predictive processing theories portray the brain as a hierarchical prediction engine that minimizes prediction error, yet they lack operational definitions for the structure of a "prediction," the standardized response to a prediction error, and the mechanism that maintains consistency across successive updates. Bayesian cognitive science attempts to subsume all uncertainty under probabilistic belief updating, but it presupposes a closed hypothesis space and provides no generative account of how the objects over which probabilities are distributed become discrete, identifiable referents in the first place. This paper introduces Predictive Set Theory (PST), a formal generative framework that reconstructs cognitive architecture from first principles. PST anchors cognition in a minimal set of operations---a sensor formalized as an identity function, set-theoretic state refresh, and three fundamental forms of reference chains (reference, counter-reference, and semi-reference)---and rigorously derives core cognitive functions including state sequences, demand, comparison, efficiency, and finite-horizon probabilistic planning. Rather than modeling neural mechanisms, PST constitutes a design specification for any system that must maintain internal consistency while acting under incomplete information and irreversible risk. The framework offers novel resolutions to classical problems such as Russell's paradox, the cognitive status of G\"{o}delian incompleteness, the grounding of negative feedback, and the comprehension of film editing. The primary purpose of this paper is to establish, through the public academic record, the originality and completeness of the Predictive Set Theory framework.

13. [VeriTrace: Human-Like Temporal Exploration Completes Agentic Action Space](https://arxiv.org/abs/2608.02878)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02878v1 Announce Type: new Abstract: Large language models have shown promise for automated Verilog RTL generation, yet state-of-the-art multi-agent systems plateau at ~95% accuracy on standard benchmarks. We trace this ceiling to an incomplete debugging action space: existing systems restrict which signals the agent can inspect, which time windows it can query, or both, reducing debugging to pattern matching on a narrow, predetermined view of circuit behavior rather than hypothesis-driven root-cause analysis. We present VeriTrace, a multi-agent system whose Inspector agent operates over a complete debugging action space, with independent control over signal selection, time-window bounds, and iteration depth. This capability, which we term Agentic Temporal Exploration, enables the agent to form hypotheses about failure causes, query the waveform for evidence, and refine its understanding iteratively, mirroring the exploratory process of human verification engineers. VeriTrace achieves 100\% Pass@1 on VerilogEval-V2, the first system to attain perfect functional correctness on this benchmark. On a shared Claude Sonnet 4.0 backbone, VeriTrace outperforms the strongest reproduced baseline by +5.1%, demonstrating that debugging agency closes the final accuracy gap.

14. [Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers](https://arxiv.org/abs/2608.02662)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02662v1 Announce Type: new Abstract: Reliable forecasting of nonlinear physical systems underpins scientific discovery and engineering decision-making. Yet high-fidelity simulations are prohibitively costly, and machine-learning surrogates can be opaque and encode assumptions about system dynamics, limiting generalizability. Pretrained transformers mapping synthetic ODE trajectories to equations offer interpretable alternatives, promising transfer without system-specific equation knowledge. Transferring them reliably to high-dimensional physical data, however, remains an open challenge. We develop a verifier-guided (VG) workflow around ODEFormer as a symbolic backbone, using dynamical and physical-admissibility criteria to select from a multi-trajectory candidate equation pool, enabling transfer. On canonical Van der Pol oscillators, VG outperforms the original ODEFormer workflow across held-out initial conditions. We then address vortex shedding, a phenomenon occurring in atmospheric and plasma systems of societal relevance, through coordinate reduction and symbolic discovery at fixed and varying Reynolds numbers. VG discovers fixed-parameter reduced-order equations that recover the fundamental shedding oscillator and higher harmonics without a wake-specific candidate library or prescribed Navier-Stokes structure, while the cross-parameter model generalizes to withheld regimes. Reconstruction fidelity alone did not determine symbolic discoverability, highlighting the importance of compatibility between latent dynamics and the backbone's pretraining distribution. This work establishes a verifier-guided neural-to-symbolic methodology for interpretable and physically auditable forecasting in the natural sciences.

15. [ScoreField: Neural Inverse Scattering with Score-Based Generative Priors](https://arxiv.org/abs/2608.02937)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02937v1 Announce Type: cross Abstract: Designing an effective electromagnetic inverse-scattering solver requires faithful enforcement of nonlinear full-wave physics together with an expressive prior on the unknown permittivity contrast. We propose ScoreField, a neural inverse scattering framework that integrates coupled implicit neural representations (INRs) with a pretrained score-based generative prior. ScoreField employs two INRs to parameterize the permittivity contrast and the induced current fields, and jointly optimize them under the Lippmann-Schwinger equations. In addition to the implicit regularization by the INR architecture, the score model provides a learned prior gradient on the contrast, which is propagated to the contrast INR through the chain rule. This formulation enables ScoreField to effectively handle strong multiple scattering, where nonlinear wave interactions require accurate modeling of the coupled full-wave physics. We evaluate ScoreField on simulated weak- and strong-scattering benchmarks, the canonical Austria phantom, and experimental Fresnel measurements. We note that ScoreField significantly improves reconstruction fidelity and suppresses artifacts relative to classical full-wave methods and deep learning baselines, achieving an average PSNR improvement of $1.8 \, \mathrm{dB}$ over the best competing method on real Fresnel data.

16. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.63; Date: 2026-08-05T12:29:26Z; Popularity: 2,628 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

17. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

18. [New ways to learn and teach with ChatGPT Work and Codex](https://openai.com/index/learn-teach-chatgpt-work-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 GMT
   - Summary: Explore new education plugins for ChatGPT Work and Codex that help K–12 teachers, college educators, and students learn, teach, research, and build.

19. [Apple is getting this wrong](https://openai.com/index/apple-is-getting-this-wrong)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 03 Aug 2026 22:00:00 GMT
   - Summary: OpenAI addresses Apple’s baseless lawsuit, corrects claims about its employees, and shares messages documenting what happened.

20. [How we built a realtime system for responsive voice AI in six months](https://openai.com/index/continuous-voice-interaction-with-gpt-live)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 03 Aug 2026 07:00:00 GMT
   - Summary: GPT-Live enables continuous voice interaction with AI, using a turnless speech model and low-latency architecture for faster, more natural conversations.

21. [Circles powers telco personalization with OpenAI technology](https://openai.com/index/circles)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 03 Aug 2026 00:00:00 GMT
   - Summary: Circles uses the OpenAI API and Codex to power AI-native telco experiences, increasing ARPU by 22%, reducing churn by 9%, and improving development efficiency.

22. [Ten advances in mathematics and theoretical computer science](https://openai.com/index/ten-advances-in-mathematics)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sat, 01 Aug 2026 00:00:00 GMT
   - Summary: OpenAI shares new results on long-standing open problems in mathematics and theoretical computer science, including advances in geometry, cryptography, and complexity.

23. [Building abundant intelligence](https://openai.com/index/building-abundant-intelligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 15:00:00 GMT
   - Summary: A full-stack approach to making advanced AI more capable, more affordable, and more widely useful.

24. [Univé builds an AI-ready workforce](https://openai.com/index/unive)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 07:00:00 GMT
   - Summary: See how Univé built an AI-ready workforce with ChatGPT Enterprise by combining leadership, responsible governance, and employee-led innovation to transform work at scale.

25. [Disrupting a Criminal Scam Operation](https://openai.com/index/disrupting-malicious-uses-of-ai-criminal-scam-operation)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 GMT
   - Summary: OpenAI disrupted a Cambodia-based scam operation using ChatGPT to support investment, romance, gambling, and impersonation schemes.

26. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

27. [Deploy local agents everywhere with LFM2.5-2.6B](https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 04 Aug 2026 13:58:29 GMT

28. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

29. [The OlmoEarth Platform: Geospatial inference at planetary scale](https://huggingface.co/blog/allenai/olmoearth-infrastructure)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 16:27:42 GMT

30. [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 GMT

31. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

32. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

33. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

34. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

35. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

36. [Self-Organising Digital Circuits](https://arxiv.org/abs/2608.02606)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02606v1 Announce Type: new Abstract: Fault tolerance in classical computing has traditionally relied on static strategies like hardware redundancy and error-correcting codes. Biological systems, in contrast, exhibit adaptive plasticity, maintaining function through dynamic re-organisation around damage. Inspired by this principle, we introduce Self-Organising Digital Circuits, framing functional logic generation and maintenance as a meta-learning problem on graphs. Our architecture employs a topology-masked Transformer that configures the Lookup Tables (LUT) of a circuit's Boolean gates. Extending the pattern-generation paradigm of Neural Cellular Automata (NCA), it navigates the degenerate Boolean search space to satisfy a computational task, rather than regenerating a fixed target state. We demonstrate that it can self-assemble functional circuits from scratch and rapidly re-route logic around permanent, previously unseen hardware faults. For soft errors, the policy achieves near-perfect recovery (>99.99\% accuracy) from damage sizes far exceeding training conditions. We further observe generalisation across circuit scales: accuracy improves on graphs substantially wider than those seen during training. This work bridges the principles of biological self-organisation with the practical domain of digital hardware.

37. [Explainable AI for the EU Right to Explanation: A Systematic Review of the Law-XAI Translation Gap](https://arxiv.org/abs/2608.02699)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02699v1 Announce Type: new Abstract: When algorithms make or influence consequential decisions---about loan eligibility, hiring, or healthcare---EU law grants affected individuals a Right to Explanation. Yet whether (and how) Explainable AI (XAI) can satisfy this right in practice remains poorly understood, with direct implications for individuals' ability to contest automated decisions that affect their lives. This paper presents a systematic literature review of XAI in the context of the EU Right to Explanation, with particular focus on Art. 15(1)(h) GDPR, Art. 86 AI Act (AIA), and related instruments. We consider papers published from 2024 onwards, as the final version of the AIA was published in July 2024---with Art. 86 being added late. From 2643 initial records identified by a deliberately broad search, we review 57 full texts, of which only 19 papers demonstrate substantive integration of both legal and technical perspectives, showing gaps in the interdisciplinary synthesis of the current regulatory framework. We document three problematic patterns across the corpus: Most misidentify the GDPR legal basis; few engage with the CJEU's Dun & Bradstreet judgment (likely due to publication timing); and the distinction between explanation form (governed by addressee) and content (governed by legal purpose) is often conflated. We conceptualize this as the Addressee/Purpose Framework, propose a four-phase blueprint for operationalization, and identify six concrete open research questions. Without further progress, the Right to Explanation risks remaining a formal obligation without a technically realizable path to compliance.

38. [BAP-SQL: Budget-Aware Observation Planning for Agentic Text-to-SQL](https://arxiv.org/abs/2608.02876)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02876v1 Announce Type: new Abstract: Tool-using agents do not merely consume observations: their actions determine what arrives next. In agentic text-to-SQL, a broad query can spend context and database work before useful evidence appears, while post-hoc compression cannot recover omitted rows or expended work. We present BAP-SQL, which treats observation formation as a budget-control stage: it estimates query risk, rewrites SQL when useful, and delegates hard limits to an independent runtime shield. Across general 4B, specialized FINER-SQL 4B, and 7B backbones, BAP-SQL improves tight-budget success. On the primary BIRD-derived setting, it gains 3.4/3.6 percentage points over matched SFT while using 4.5/5.0% fewer tokens. Matched retraining and task-level transfer associate the gain with policy-visible planning and budget-sensitive rescue. The benefit attenuates as model capability and budget increase, reverses at the loosest setting, and does not reduce database work.

39. [Deep Divide-and-Reduce in Symbolic Regression](https://arxiv.org/abs/2608.02628)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02628v1 Announce Type: new Abstract: Symbolic regression (SR) is the task of discovering underlying patterns from data and representing them using mathematical expressions. Current machine learning approaches to SR often lack a profound understanding of the intrinsic mathematical and physical principles governing these expressions. While the pioneering AI Feynman method leverages the mathematical properties underlying the data, its expression simplification mechanism suffers from a narrow scope of applicability and is prone to failure on complex equations. Furthermore, its underlying mechanisms rely heavily on brute-force searches for sub-expressions, severely limiting its practical utility. Through rigorous mathematical deduction and proofs, we propose our method, Deep Divide and Reduce in Symbolic Regression (DDRSR). DDRSR fundamentally broadens the applicability of expression decomposition and reduction, circumvents the need for brute-force sub-structure searches, and ensures both wider versatility and strict theoretical correctness. Empirical evaluations demonstrate that these theoretical principles yield significant advantages in both expression decomposition and numerical regression tasks. Finally, we discuss the applicable scenarios and inherent limitations of this paradigm, alongside promising directions for future research.

40. [Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Uncertainty in Geological Carbon Storage](https://arxiv.org/abs/2608.02629)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02629v1 Announce Type: new Abstract: The use of variable well perforation and injection strategies can improve the efficiency of geological carbon storage operations. We develop a new multimodal auto-regressive transformer surrogate to model these operations under geological uncertainty. A modified SEAM CO2 geomodel, which involves a faulted system with three stacked aquifers, is considered. The two injection wells are perforated in stages, from bottom to top, with the stage durations and individual well injection rates treated as control variables. The surrogate model processes three input modalities - the 3D geomodel, scalar parameters characterizing relative permeability functions, and control variables - through separate encoders. These are fused via self-attention in a transformer encoder, and a temporal decoder generates predictions auto-regressively through encoder-decoder cross-attention. The surrogate is trained, using 4000 GEOS flow simulations, to predict saturation and pressure at monitoring locations, total injected and mobile CO2 mass, and saturation footprints. For a new test set, involving randomly sampled geomodels and control variables, the surrogate achieves a median saturation MAE of 0.028 and median relative errors of 0.2-5% for the other quantities of interest. Importantly, it captures the switch from rate to bottom-hole-pressure control. The surrogate model is used within a hierarchical Markov chain Monte Carlo data assimilation procedure for a synthetic true model under three operational strategies. Substantial uncertainty reduction is achieved for key metaparameters, particularly the fault permeabilities. Posterior predictions for saturation footprints and total injected and mobile CO2 mass are also shown to be generally consistent with true model results.

41. [GLOBE: Trajectory-Aligned Gradient Matching with Structured SparseOptimization for Coreset Selection](https://arxiv.org/abs/2608.02690)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02690v1 Announce Type: new Abstract: On-device training of deep neural networks is fundamentally constrained by the computational and memory costs of large-scale datasets. Coreset selection offers a practical solution by retaining only a compact subset of real training samples. However, existing gradient-based methods commonly rely on gradients computed at a single model snapshot and employ greedy or pursuit-based selection procedures, limiting their ability to capture evolving optimization dynamics and handle strongly correlated samples. We propose GLOBE (Gradient Local-Balanced Extraction), a trajectory-aligned coreset selection framework that formulates sample selection as a globally optimized sparse weighting problem. GLOBE represents each sample by a gradient trajectory constructed across multiple training checkpoints, thereby capturing its influence throughout different stages of optimization. To preserve the training behavior of the full dataset, we introduce a multi-order matching objective that jointly aligns the first-order mean and projected uncentered second-order moments of gradient trajectories. GLOBE further combines Group LASSO, Elastic Net regularization, and nonnegative budget constraints to induce group- and sample-level sparsity while stabilizing the weights of correlated trajectories. Finally, class-balanced Top-K selection maintains adequate category coverage under limited sampling budgets. Experiments across six benchmarks and five evaluation architectures demonstrate that GLOBE consistently outperforms existing coreset selection methods in downstream test accuracy, particularly at low retention ratios. These results highlight the effectiveness of combining dynamic gradient information, multi-order distribution matching, and structured sparsity for data-efficient learning.

42. [Epitaxial SiGeSn alloys for CMOS-compatible thermoelectric devices](https://arxiv.org/abs/2608.03638)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.03638v1 Announce Type: cross Abstract: The integration of thermoelectric devices into mainstream microelectronic technological platform could be a major breakthrough in various fields within the \emph{so-called} Green-IT realm. In this article, the thermoelectric properties of heteroepitaxial SiGeSn alloys, a novel CMOS compatible material system, are evaluated to assess their possible application in thermoelectric devices. To this purpose, starting from the experimentally low lattice thermal conductivity of SiGeSn/Ge/Si layers of about $\sim$1-2 W/m$\cdot$K assessed by means of 3-$\omega$ measurements, the figure of merits are calculated through the use of Boltzmann transport equation, taking into account the relevant inter-valley scattering processes, peculiar of this multi-valley material system. Values for the figure of merit $ZT$ exceeding $1$ have been obtained for both p- and n- type material at operating temperatures within the 300---400 K range, i.e. at a typical On-Chip temperatures. In this interval, the predicted power factor also features very competitive values of the order of 20 $\rm{\mu W/cm\cdot K^2}$. Our finding indicates that this new class of Si-based materials has extremely good prospects for real-world applications, and can further stimulate scientific investigation in this ambit.

43. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.64; Date: 2026-08-05T12:34:48Z; Popularity: 1,642 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

44. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-05T05:13:24Z; Popularity: 479 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.29; Date: 2026-08-04T00:37:31Z; Popularity: 295 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-08-02T20:01:07Z; Popularity: 219 stars
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

51. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

52. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

53. [GeoID-PINN: Identifiability-Aware Regional Epidemic Inference with Geographic Coupling](https://arxiv.org/abs/2608.02633)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02633v1 Announce Type: new Abstract: Regional surveillance data reflect local transmission, reporting, seeding, and external infection pressure, which are difficult to identify separately. We introduce GeoID-PINN, a physics-informed neural network (PINN) for susceptible-infectious-recovered-deceased (SIRD) dynamics. The model represents spatial dependence with a row-stochastic source-composition matrix whose rows assign nonnegative source weights that sum to one. We regularize this matrix toward a spatial prior constructed from distance, adjacency, commuting, or lead-lag information. In a four-region simulation with known truth, a compatible distance prior gives source-composition error 0.099. The error rises to 0.159 without regularization and 0.577 under a strongly misspecified prior, while trajectory fit and transmission-scale estimates remain similar. Accurate trajectories therefore do not guarantee recovery of the regional dependence structure. We also evaluate GeoID-PINN retrospectively using COVID-19 data from 64 Louisiana counties. Relative to an autoregressive negative-binomial baseline, Forecast-Trained Geo-PINN reduces mean squared error (MSE) from 32,957 to 11,468 and mean absolute error (MAE) from 70.60 to 57.73. The baseline has lower negative log likelihood (NLL), 5.158 versus 5.346, indicating better distributional fit but worse point accuracy. In a controlled 15-county comparison, county adjacency reduces MSE by 6.85 percent and MAE by 3.1 percent. Similar performance across plausible priors supports structured regularization but not unique edge recovery. These results require prior-sensitivity and observation-model checks before interpretation.

54. [CT-HEG: A Bidirectional, Timestamp-Attributed Event Graph for ICU In-Hospital Mortality Prediction - An Architectural Ablation Study](https://arxiv.org/abs/2608.02663)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02663v1 Announce Type: new Abstract: Accurate ICU mortality prediction requires modeling irregular clinical observations across heterogeneous entity types. Existing sequence models handle irregular sampling but ignore typed relational structure; existing graph models assume fixed-interval inputs. We introduce the Continuous-Time Heterogeneous EHR Graph (CT-HEG) schema and evaluate which architectural choices drive predictive performance. CT-HEG encodes each ICU stay as a typed, timestamped graph with three node types (visit, vital, lab_event) and 2D edge attributes (t_hours/48, value_norm) encoding timing and value without imputation. We instantiate CT-HEG as CHIRP-Net, a four-layer heterogeneous GATv2Conv network, evaluated on MIMIC-IV v3.1 (31,142 ICU stays, LOS>=48h, 13.4% mortality) with five seeds and bootstrapped confidence intervals, against logistic regression, mTAND, a Transformer, and GRU-D, plus an ablation study. CHIRP-Net achieved 5-seed mean AUROC 0.8449+/-0.0071 (AUPRC 0.4958+/-0.0209); the ensemble achieved AUROC 0.8618 (95% CI: 0.8485-0.8745). Removing reverse edges disconnected observation nodes from the visit readout, cutting AUROC by 0.1968+/-0.0073. Time-attentive edge features contributed 0.0247+/-0.0093 AUROC. Collapsing heterogeneous edge types into one relation (7x fewer parameters) outperformed the full model on all seeds. Post-calibration ECE was 0.0307. Temporal and demographic subgroup analyses were explored but not reported here, pending follow-up work. Bidirectional connectivity was necessary for the model to use its inputs at all, and CT-HEG was reasonably well calibrated after validation-fitted temperature scaling. These results support CT-HEG for irregular EHR data, while external validation, a pre-specified temporal evaluation, and a demographic fairness audit remain necessary before any claim of robustness. Code: https://github.com/nasiruddinstudents-ctrl/chirp-net-mimic-iv.

55. [Output-Aware Rotation for INT2 KV-Cache Quantization](https://arxiv.org/abs/2608.02691)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02691v1 Announce Type: new Abstract: The key-value (KV) cache has become a major memory and bandwidth bottleneck in long-context large language model inference, making ultra-low-bit quantization increasingly important. However, existing rotation-based INT2 methods optimize cache statistics or proxy errors before the complete attention readout, even though the model is ultimately affected by the error propagated through attention and the output projection $W_O$. To address this mismatch, we propose \textit{OptR}, an output-aware rotation method that minimizes post-$W_O$ attention-output error. OptR decomposes the post-$W_O$ attention-output error into key- and value-induced terms and learns per-head orthogonal corrections through the full INT2 quantization and attention path. OptR further applies an attention-equivalent key reparameterization to reduce large channel-wise offsets without changing the softmax distribution. Across three models and five reasoning and coding benchmarks, OptR consistently improves both QuaRot and OSCAR and strengthens long-context retrieval, while preserving the paged KV-cache format with negligible inference overhead.

56. [Computing with traceable tensor networks](https://arxiv.org/abs/2608.02849)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02849v1 Announce Type: new Abstract: We introduce a new SVD-based tensor decomposition method for tensor networks with arbitrary graph topologies, extending classical hierarchical SVD-based techniques to networks with cycles and general connectivity. We also introduce addition and rounding procedures for traceable tensor graphs, enabling step-rounding time integration of high-dimensional PDEs directly in graph format, with rank truncation controlled to a prescribed tolerance at every time step. We demonstrate the new method on the decomposition of multivariate functions and on the numerical solution of the Fokker-Planck equation, and find that the graph-format representation attains comparable or better accuracy than the classical tensor train and hierarchical Tucker tensor formats, while using substantially fewer degrees of freedom at lower computational cost.

57. [A Unified Graph Neural Network Framework for Non-Equilibrium Carrier and Lattice Dynamics Driven by Electric Fields](https://arxiv.org/abs/2608.03287)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.03287v1 Announce Type: new Abstract: Finite-temperature simulations of electric-field-driven dynamics need a unified description of interatomic interactions, local electronic states, and configuration-dependent electric responses. First-principles simulations remain scale-limited, whereas conventional machine-learning potentials lack electric-field effects. Recent machine-learning frameworks have incorporated electric-field response or atom-resolved electronic-state information, but rarely both within a single framework. Here, we develop an electric-field-response graph neural network (EFR-GNN) that predicts energies, forces, Born effective charge tensors, atom-resolved charges and magnetic moments, and supports long-time field-driven molecular dynamics with atom-resolved tracking of localized electronic states. In hole-doped MgO, static fields rectify thermally activated hole-polaron hopping through a forward--backward asymmetry quantified by a nearest-neighbor model. In GaAs, resonant terahertz excitation generates a coherent $\Gamma$-point transverse-optical phonon with dephasing consistent with experiment, while opposite helicities reverse its rotation. In superionic $\alpha$-AgI, it reproduces temperature-dependent Ag$^+$ mobility and collective field-driven ionic drift. Together, EFR-GNN offers an approach to finite-temperature simulations of field-driven atomic and localized-carrier dynamics.

58. [A 3-D Hybrid Numerical Method for Simulating Electromagnetic Fields in Structures with Multiple Inhomogeneous Layered Media](https://arxiv.org/abs/2608.03639)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.03639v1 Announce Type: new Abstract: A three-dimensional (3-D) hybrid numerical method (HNM) is presented for electromagnetic scattering in structures with multiple inhomogeneous layered media coupled to an arbitrary 3-D non-layered scattering region. It integrates the 3-D numerical mode-matching (NMM) method with a tree-cotree-based mixed finite element method (MFEM). In the NMM, the fields in the 3-D layered media are reduced to a superposition of 2-D waveguide eigenmodes, while the MFEM discretizes the 3-D scattering region. The HNM thus inherits the dimensionality-reduction advantages of both conventional hybrid MM/FEM and pure NMM. Numerical experiments show that the HNM provides an effcient alternative for scattering problems involving non-layered regions embedded in layered media.

59. [SU3HOB-cgvcs: harmonic-oscillator brackets in the SU(3) basis with isofactors from an external SU(3)$\,\supset\,$SO(3) Clebsch--Gordan library](https://arxiv.org/abs/2608.02640)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02640v1 Announce Type: cross Abstract: \DeclareRobustCommand{\Su}{\code{Su3cgvcs}} We present SU3HOB-cgvcs, a Fortran~2008 package that computes the general Talmi--Moshinsky harmonic-oscillator transformation brackets, for an arbitrary mass-ratio parameter $d$. These brackets arte constructed in the $\su{SU}(3)$ basis by the method of Kalinauskas et al. . The transformation is reduced to a single sum over Wigner $d$-functions of the reflection-containing Talmi--Moshinsky matrix weighted by products of $\su{SU}(3)\supset\su{SO}(3)$ isofactors of the chain $\su{U}(6)\supset\su{U}(3)\times\su{U}(2)$. SU3HOB-cgvcs obtains these isofactors from the established external Clebsch--Gordan library \Su{} . In this library they are computed there by the vector-coherent-state (VCS) method. We bridge \Su{} formalism to ours and this requires two fixes: reinserting a sign/phase factor that depends on each state's radial-quantum number and handling the trivial $(0,0)$ representation analytically. The package reproduces, bracket for bracket to machine precision ($\sim\!10^{-13}$), the general Talmi--Moshinsky bracket code of Kamuntavi\v{c}ius et al. , and demonstrates that a self-contained SU(3)-scheme HOB code can be built on top of a general-purpose SU(3) Clebsch--Gordan library.

60. [Integral Hilbert spaces and the dynamics of loop quantum cosmos](https://arxiv.org/abs/2608.02798)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.02798v1 Announce Type: cross Abstract: Polymer quantization program applied in Loop Quantum Gravity/Cosmology leads to nonseparable Hilbert spaces. Commonly, one sidesteps this problem by singling out and working with a separable superselection sector. This is however often no longer accessible in more involved models beyond isotropic ones. In an alternative approach one builds a separable Hilbert space as an integral over all available sectors. Here we test the dynamics following from the latter on the example of a flat isotropic Universe admitting negative cosmological constant and a massless scalar field. There, numerical evolution of (initially) semiclassical states shows that there is no relevant difference in their long term semiclassicality properties in comparison to those in a single sector approach. Further, the older (problem-specific) numerical methods are compared against an application of more common and more efficient standard tools (eigen library).

61. [AccelNet: Exact backward-compatible acceleration of polynomial angular descriptors through Cartesian moment factorization](https://arxiv.org/abs/2608.03280)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.03280v1 Announce Type: cross Abstract: We present AccelNet, an exact, backward-compatible method for accelerating existing trained aenet and n2p2 neural-network potentials without retraining. For angular terms with separable one-neighbor weights and a finite polynomial dependence on $\cos \theta$, the method exploits their hidden finite-rank structure to replace explicit neighbor-pair loops by one-neighbor Cartesian moments. AccelNet reads models trained with either package and reproduces their descriptors, energies, and analytic forces to floating-point roundoff. We verified this equivalence for H$_2$O and TiO$_2$ models and tested the resulting potentials in LAMMPS molecular-dynamics simulations. The implementation, model-conversion tools, and LAMMPS interfaces are released as open-source software.

62. [A 100x Faster Beam Propagation Method for Nonlinear Optical Wave Propagation Based on Discrete Exterior Calculus](https://arxiv.org/abs/2608.03587)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.03587v1 Announce Type: cross Abstract: Efficient simulation of nonlinear light propagation in complex photonic structures remains a major challenge because these systems combine intricate transverse geometries with propagation over distances spanning many diffraction lengths. Existing numerical methods often require computationally intensive uniform discretizations or struggle to accurately represent complex material boundaries, limiting the practical simulation of multiscale nonlinear photonic devices. Here we introduce a computational framework for solving the nonlinear Schr\"odinger equation that accelerates simulations by more than two orders of magnitude (over 100x) compared with conventional approaches while maintaining spectral-level accuracy, thereby reducing the computational time required to solve large-scale and multiscale problems from days to hours. The method is based on discrete exterior calculus, enabling geometry-conforming discretization directly on unstructured meshes without the weak formulations required by conventional finite-element methods. In contrast to Fourier-based spectral solvers, it avoids global oversampling, eliminates Gibbs-type oscillations at material interfaces, naturally incorporates absorbing boundary conditions, and preserves the topological structure of the underlying differential operators. A key feature of the framework is that higher-order propagation operators are generated algorithmically from lower-order discrete operators, providing a systematic route to extending simulations beyond the standard nonlinear Schr\"odinger equation. Benchmarks on fundamental solitons, asymmetric beams, and optical vortices confirm spectral-level accuracy while demonstrating computational speedups exceeding 100x.

63. [Analysis of Moment Closures Using $\varphi$-Divergences for Rarefied Dynamics with Binary Collisions and Their Galerkin Discretizations](https://arxiv.org/abs/2608.03640)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 05 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.03640v1 Announce Type: cross Abstract: This work introduces a robust deterministic framework for approximating solutions of the Boltzmann equation with binary collisions by discretizing their dependence on time, position, and velocity using Galerkin methods. By employing a family of parametric Galerkin closures based on $\varphi$-divergences in velocity space, we derive rigorous hierarchies of moment equations that govern fluid dynamic variables. Addressing the limitation that these closures alone do not guarantee dissipation of a $\varphi$-divergence entropy for the true binary collision operator, we restore this property by formulating a compatible approximate collision operator tailored to each closure. This constructed operator intrinsically retains fundamental physical properties essential for high-fidelity flow simulations, including Galilean invariance, exact conservation of mass, momentum, and energy, and strict dissipation of a $\varphi$-divergence entropy. Furthermore, we show that the resulting closed moment systems are symmetric-dissipative, yielding Cauchy problems that are well-posed locally in time. To translate this mathematical foundation into an efficient computational tool, we discretize the position and time variables with an entropy-stable discontinuous Galerkin (DG) finite element method. The fully implicit, entropy-stable space-time approach enables time steps far beyond typical CFL-limited step sizes and the direct computation of steady states. The robustness and accuracy of the methodology are verified and validated through numerical simulations on the supersonic nozzle flow of argon, mass flow through a channel, and heat transfer between parallel walls, demonstrating agreement with analytical benchmarks, experimental measurements, and stochastic particle simulations.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-05T15:25:28Z; Popularity: 717 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.65; Date: 2026-08-04T02:20:24Z; Popularity: 651 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-08-05T07:48:55Z; Popularity: 164 stars
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

PULSE: An Executable Contract Language for Spatiotemporal Knowledge Graph Engineering

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.02630

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
