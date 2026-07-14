# Daily signal sidecar - 2026-07-14

## Selected Signal

- Title: Toward AI-Agent-Driven Particle Transport Simulations: Implementation of AI-Assisted Workflows for PHITS
- URL: https://arxiv.org/abs/2607.11309
- Source: arXiv physics.comp-ph
- Score: 8.00

## Candidate Review

- Signal: Toward AI-Agent-Driven Particle Transport Simulations: Implementation of AI-Assisted Workflows for PHITS
- Primary source: https://arxiv.org/abs/2607.11309
- Discovery source: arXiv physics.comp-ph
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

Total candidates reviewed after duplicate-source filtering: 68

1. [Toward AI-Agent-Driven Particle Transport Simulations: Implementation of AI-Assisted Workflows for PHITS](https://arxiv.org/abs/2607.11309)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 8.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11309v1 Announce Type: new Abstract: Monte Carlo particle transport codes are powerful tools, but their use requires substantial knowledge of input preparation, execution, and result analysis. In this study, we present a code-side strategy for applying existing AI assistants and AI agents to PHITS. Two complementary sets of AI-ready resources were prepared from manuals, lecture materials, sample inputs, utility information, and developer-curated cautions: a bundled knowledge base for retrieval-augmented generation (RAG)-based assistants and a compact agent reference for direct use by AI agents. The knowledge base was loaded into NotebookLM to provide conversational PHITS support, while the agent reference was combined with PHITS-specific policies and execution rules to enable Codex and Claude Code to edit input files, execute calculations, inspect errors, analyze results, and assist with source-code modification and compilation. Five demonstration tasks covered input modification, repeated simulations, parameter optimization, program compilation, post-processing, and result interpretation. The results showed that AI agents could handle complex PHITS workflows when appropriate resources and rules were provided. Practical lessons included precise prompts, human verification, well-documented sample files, explicit execution policies, and command-line-accessible tools. These findings support bundling AI-ready resources with particle transport codes to enable the use of general-purpose AI tools without requiring dedicated code-specific applications.

2. [YUKTI: From Natural-Language Situations to Robust, Verifiable Decisions An Uncertainty-Typed Proposition IR, Assumption-Robust Pareto Frontiers, and a Regret Certificate](https://arxiv.org/abs/2607.09706)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09706v1 Announce Type: new Abstract: Language models turn a worded situation into a numeric plan, and the dominant pipelines (NL4Opt, OptiMUS, ORLM, OR-LLM-Agent) commit to a single objective and point-valued coefficients, then solve once. For decisions that allocate real budget, effort, or clinical attention, that confidence is the failure mode: every objectified number is an assumption, and a plan optimal only if the guesses are exactly right is fragile -- mimicry of computation. YUKTI changes the target of autoformulation. Its representation is a typed-proposition graph whose relationships carry shape priors, coefficient uncertainty, and provenance. YUKTI routes each stage to an exact, nonlinear, or evolutionary solver; couples stages by a distributional Pareto hand-off; and introduces Assumption-Robust Pareto Frontiers (ARPF), resampling assumptions (including structural epsilon-contamination) to score how often each action survives (rho). We prove a bound making rho an exact factor of decision regret, add auditable traceability, and synthesize a benchmark-faithful data foundation when none exists (SRJANA). We validate three ways: under controlled misspecification the robust compromise cuts mean and tail regret by over 90% versus a naive point plan; on a regulated commercial decision we optimize inside a lawful action space and price the downside in euros; and on a real public dataset of 41,188 decisions an out-of-sample backtest beats the logged status quo by 34% and a naive point rule by 4% while reducing the optimizer's curse. The solvers are standard; we claim no benchmark-SOTA win. A head-to-head shows an LLM given the correct numbers, and single-objective optimization, both incur about 47x the held-out regret of YUKTI -- an LLM is a formulator, not a solver. Under long-range causal coupling, the forward hand-off becomes unsound, locating where it must become a backward-induction causal policy.

3. [Closed-Loop Control with Rule-Aligned Small Language Models and Multi-Agent Self-Correction](https://arxiv.org/abs/2607.09713)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09713v1 Announce Type: new Abstract: A key step toward autonomous industrial operation is the ability to create and reconfigure control policies from natural-language requirement specifications, with minimal or no manual redesign. In this setting, policy generation by AI agents can be a credible path when paired with a plant-aware validator (e.g., a digital twin) that can check generated candidate actions before execution. However, practical deployment is constrained by inference latency and compute footprint: large cloud-based models are often too slow, opaque, or data-sensitive for edge closed-loop use. This work investigates whether a compact Small Language Model (SLM) can be retrained for control reasoning and embedded in a validator-guided correction loop. We use a Qwen2.5-1.5B model aligned via Group Relative Policy Optimization (GRPO), combined with (i) an action agent, (ii) a symbolic/digital-twin-style validation layer, and (iii) a reprompting agent that iteratively steers outputs toward valid actions. In randomized thermal-control simulations (30 experiments with 500 steps each), the framework achieves 91.5% average action-alignment accuracy (86.3%--100% across cases) at 3.84\,s mean inference latency. Under symbolic re-mapping, it maintains a 95% in-range rate, indicating robust physical regulation despite reduced token-level agreement. These results support SLM+validator architectures as a practical path toward reconfigurable autonomous control at the edge.

4. [The Verifier is the Curriculum: Execution-Gated Self-Distillation for Cross-Family Game Generation](https://arxiv.org/abs/2607.09709)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09709v1 Announce Type: new Abstract: Post-training a code generator against a learned judge can optimize proxy features that raise the score without improving the artifact. We study the opposite signal: a deterministic, judge-free, ungameable filter -- whether a generated project launches cleanly under a headless engine (strict-launch). Under this gate, rejection-sampling self-distillation compounds out-of-family generalization. On GameCraft-Bench (mapping a natural-language brief to a complete Godot project), a 14B model (Qwen3-14B+LoRA) distilled under strict-launch raises clean generation on four unseen game families from 8.8% to 42.2% per-candidate and best-of-K coverage from 18/25 to 25/25 (the gold ceiling) over three rounds, each a significant gain (p=0.0019, p<1e-4, p<1e-4). The gain is not from merely adding data: an exactly-matched gold-duplication control regresses below the base model (5.6% vs. 8.8%, p=0.019), while a count-matched decomposition splits the round-1-to-2 jump into comparable quality (+8.8pp) and quantity (+8.5pp) channels. Most directly, rerunning the loop with only the filter swapped -- the lenient BUILD check, which passes 99.9% of generations, in place of the launch gate -- erases the gain entirely (back to base, p=1e-3 vs. the launch-gated round), isolating verifier precision rather than the optimizer. A second ungameable signal, headless execution grounding, rises monotonically across rounds and yields far more grounded candidates than gold-duplication at a matched budget (16 vs. 5), confirming the gains are functional, not launch-but-empty. Game generation is a verifiable testbed for one lesson: the verifier is the curriculum -- what it certifies is what the model learns.

5. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

6. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

7. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

8. [Run AI workloads on any cloud, store on Hugging Face: zero-egress storage with SkyPilot](https://huggingface.co/blog/skypilot-hf-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

9. [From ML Predictions to Informed Diagnostic Assistance Using the Toulmin Model of Argumentation](https://arxiv.org/abs/2607.09664)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09664v1 Announce Type: new Abstract: To provide a structured and interpretable assessment, we decompose the image-based diagnosis into components following the Toulmin model of argumentation. This model consists of a claim, grounds, warrant, qualifier, rebuttal, and backing. Consider a claim generated by a machine learning (ML) model for retinal diagnosis. Rather than accepting this claim at face value, one could either apply explainable AI (XAI) methods or adopt an argumentation-based approach. In our framework, a model specialized in biomarker extraction from images provides the grounds. The warrant-linking the grounds to the claim - is analyzed by an agent equipped with medical knowledge; in our architecture, this role is fulfilled by a MedGemma agent. The qualifier is determined based on the overall quantitative evaluation of both the warrant and grounds models. Finally, a rebuttal is constructed using image similarity measures computed with MedSigLip. All these components are presented to the human expert, enabling a more informed and critical assessment of the ML-generated diagnosis.

10. [Format Sensitivity Index: Token-Controlled Prompt Wrapper Robustness and Schema Compliance in LLM Benchmarking](https://arxiv.org/abs/2607.09665)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09665v1 Announce Type: new Abstract: Prompt wrappers often differ only in formatting, yet they can change model scores enough to flip leaderboard conclusions. We study this variance under a token-controlled protocol and introduce two complementary metrics: the Format Sensitivity Index (FSI), the accuracy range induced by wrapper choice, and the Parseability Sensitivity Index (PSI), the corresponding range in answer parseability. Across 140,000 OpenRouter generations spanning 7 QA tasks, 5 wrapper families, and 4 instruct models from 7B to 72B parameters, we find that mean FSI varies by over 30x across models and is largely explained by compliance failures. A fixed-effects regression shows that parseability remains a strong predictor of accuracy even after controlling for task, model, and wrapper. We argue that reporting accuracy without wrapper variance and compliance is statistically fragile, and we give practical recommendations for both benchmarking and structured-output deployments.

11. [Interpreting Latent CoT Reasoning as Dynamical Systems](https://arxiv.org/abs/2607.09698)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09698v1 Announce Type: new Abstract: Recent latent reasoning methods, such as CODI and COCONUT, face a fundamental interpretability problem: they maintain multiple superimposed candidate traces in the hidden space at each step, unlike explicit- CoT, which follows a single transparent reasoning trace. Existing mechanistic methods show compression, shortcuts, and superposition without explaining how reasoning evolves across latent steps. To address this gap, we model latent token sequences as trajectories in representation space and apply dynamical systems analysis to characterize the evolution of reasoning. Using quantitative measures, such as step-to-step change, direction consistency, and Lyapunov sensitivity, alongside qualitative projections, such as UMAP and DMD/PHATE, we show that latent CoT exhibits structured, non-random dynamics with two distinct stability classes. CODI behaves as a stable attractor, while COCONUT behaves as an unstable expanding system, and SIM-CoT supervision tightens both behaviors without changing the underlying dynamics. This framework advances the interpretability of latent CoT reasoning dynamics and provides actionable insights for improving latent reasoning performance. Code1 and Project page2 available online.

12. [Feedback-Coupled Memory Systems in Continuous Time](https://arxiv.org/abs/2607.09714)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09714v1 Announce Type: new Abstract: The Feedback-Coupled Memory Systems (FCMS) architecture formalizes closed-loop coordination through four abstract operators, two of which - the agent update operator $f_i$ and the environmental update operator $\Psi$ - are left axiomatically undefined in the original framework. To address this, $f_i$ is defined by Mechanism-Based Intelligence (MBI), where agents update locally through a decentralized price mechanism and economic principles, and $\Psi$ is defined by the Coupled Memory Graph Process (CMGP), a non-Markovian framework where the environment is treated as a physical substrate that records and responds to trajectory history coherently without external forcing. The resulting continuous-time FCMS instantiation achieves Lyapunov global dissipativity governed by the computable threshold $4\beta^2 < 2\eta\mu\gamma^2$. This generalizes both the discrete FCMS stability condition $4\eta\beta^2 < \gamma$ and CMGP's physical bifurcation threshold $\alpha_c = 1/K$, confirming that memory dissipation must outpace feedback gain as a universal organizing principle. Numerical simulation with $N=2$ agents and mean-field validation at $N=10^6$ confirm the stability threshold and the self-reinforcing coordination cascade that emerges when it is violated.

13. [AuditWeave: A Tamper-Evident, Auditor-Navigable Evidence Layer for AI-Assisted and Data-Transformation Workflows](https://arxiv.org/abs/2607.09682)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09682v1 Announce Type: new Abstract: AI systems are increasingly used to assist consequential decisions in regulated domains such as auditing, finance, and healthcare. This creates a recurring obligation: an organization must be able to reconstruct, after the fact, which evidence informed a given conclusion, and to show that the record of that reasoning was not altered. Existing tools address related but distinct problems - model observability, drift monitoring, governance reporting - and are built for the machine-learning engineer operating a system, not the reviewer who must trace one specific conclusion back to its supporting evidence. We present AuditWeave, a lightweight Python library, with no runtime dependencies, that records the steps of AI-assisted and data-transformation workflows into a single append-only, hash-chained ledger. A small, system-agnostic event vocabulary spans both retrieval-augmented generation (RAG) pipelines and tabular/lakehouse transformations, so a conclusion that draws on both can be traced end-to-end through one record. Within a sealed ledger, any modification, reordering, insertion, or deletion of events is detectable through chain verification. We describe the design and evaluate recording overhead, scalability, and tamper-detection correctness on the reference implementation. The integrity guarantees cost tens of microseconds per event, and, as the hash-chain construction implies, verification flagged every injected mutation across four mutation classes over 2,000 randomized trials.

14. [Uncertainty-Aware Structure-Property Mapping of Spinodoid Metamaterials via Heteroscedastic Gaussian Process Regression](https://arxiv.org/abs/2607.11209)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11209v1 Announce Type: new Abstract: Spinodoid metamaterials offer a broad, tunable design space for anisotropic mechanical properties, yet their structure-property relationships are commonly treated as representative mappings from cone-angle descriptors to single effective stiffness values. This deterministic view overlooks the stochastic nature of Gaussian random field (GRF)-based topology generation, where identical cone-angle descriptors can produce different morphology realizations and property scatter. Here, we present an uncertainty-aware structure-property mapping framework that reinterprets cone-angle descriptors as stochastic descriptors associated with input-dependent property distributions. Using heteroscedastic Gaussian process regression (GPR), the framework infers input-dependent predictive uncertainty from sparse one-realization-per-point data without requiring empirical variance labels at every design point. The results show that stiffness scatter differs across tensor components according to each component's mechanically active directions, and that parameter sets yielding identical mean stiffness can carry different aleatoric uncertainty. Applying this uncertainty to reliability-based design optimization (RBDO), we show that a deterministic optimum is highly susceptible to constraint violation once morphology-induced variability is considered, and that a homoscedastic RBDO formulation fails to meet the prescribed reliability target - only the heteroscedastic formulation satisfies the reliability target under the heteroscedastic uncertainty evaluation. This establishes uncertainty-aware surrogate modeling as essential for reliability-aware inverse design of spinodoid metamaterials; extending the framework to nonlinear responses remains for future work.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.37; Date: 2026-07-14T14:05:05Z; Popularity: 2,369 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-14T09:13:51Z; Popularity: 21 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [How sales teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-sales-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how sales teams can use ChatGPT Work to create pipeline briefs, meeting prep packets, forecast reviews, account plans, and stalled-deal diagnoses from real work inputs.

18. [How data science teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-data-science-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how data science teams can use ChatGPT Work to build root-cause briefs, impact readouts, KPI memos, scoped analyses, and dashboard specs from real work inputs.

19. [Getting started with ChatGPT](https://openai.com/academy/getting-started)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT
   - Summary: Learn how to use ChatGPT, start your first conversation, and discover simple ways to write, brainstorm, and solve problems with AI.

20. [GPT-5.6 is now the preferred model in Microsoft 365 Copilot](https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 13:00:00 GMT
   - Summary: Learn how GPT-5.6 powers Microsoft 365 Copilot with stronger AI capabilities across Word, Excel, PowerPoint, Chat, and Cowork for faster, higher-quality work.

21. [GPT-5.5 Bio Bug Bounty](https://openai.com/index/bio-bug-bounty)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: Details about the OpenAI Bio Bounty program

22. [GPT-5.6: Frontier intelligence that scales with your ambition](https://openai.com/index/gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: More intelligence from every token, stronger performance per dollar, and more capability on demand for your hardest work.

23. [ChatGPT is now a partner for your most ambitious work](https://openai.com/index/chatgpt-for-your-most-ambitious-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: ChatGPT Work is an agent that can take action across your apps and files, stay with a project for hours if needed, and turn a goal into finished work.

24. [Our approach to government and national security partnerships](https://openai.com/index/government-national-security-partnerships)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 13:30:00 GMT
   - Summary: Learn how OpenAI approaches government and national security partnerships, with principles for responsible AI use, democratic accountability, and public safety.

25. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

26. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

27. [Data for Agents](https://huggingface.co/blog/nvidia/open-data-for-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 17:16:05 GMT

28. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

29. [From Hugging Face to Amazon SageMaker Studio in one click](https://huggingface.co/blog/amazon/one-click-to-sagemaker-studio)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 21:15:33 GMT

30. [Hugging Face Models on Foundry Managed Compute](https://huggingface.co/blog/microsoft/foundry-managed-compute)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 15:20:06 GMT

31. [LeRobot v0.6.0: Imagine, Evaluate, Improve](https://huggingface.co/blog/lerobot-release-v060)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

32. [PRX Part 4: Our Data Strategy](https://huggingface.co/blog/Photoroom/prx-part4-data)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 15:30:55 GMT

33. [🤗 Kernels: Major Updates](https://huggingface.co/blog/revamped-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 00:00:00 GMT

34. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

35. [Faithful, Not Corrective: Message-Format Effects in Multi-Hop Agent Relays Are Tier-Dependent](https://arxiv.org/abs/2607.09678)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09678v1 Announce Type: new Abstract: When LLM agents hand off information to one another, does the message format matter? Two literatures disagree: format-optimization work reports that structured messages cut cost without hurting accuracy, while format-restriction work finds that imposing structure degrades generation -- and neither measures what happens when a message traverses multiple hops, where copy fidelity, not one-shot generation, dominates. We introduce a controlled relay testbed: briefs of twelve programmatically generated atomic facts are re-encoded hop-by-hop in five formats (free NL, precision-instructed NL, JSON, triples, key-value) over six hops, scored by a fixed strong grader against programmatic ground truth, across two relay-capability tiers, a cognitive-load condition, and a paired-fork error injection. We find that message-format effects are tier-dependent. (i) Under faithful-relay instructions a strong relay is nearly lossless -- the documented "telephone-game" collapse does not occur -- and adding per-hop cognitive load leaves format-level fidelity unchanged (within +/-1.8 points) while raising generation cost by 24-53%. (ii) Under a weak (1.5B) relay the across-format spread of six-hop recall grows by a factor of 8.7 (from 2.3 to 20.5 points), driven by two opposing mechanisms -- an encoding toll paid by the rigid formats and drift resistance specific to the fixed-key JSON schema -- that flip the format ranking in transit. (iii) In a paired-fork injection, an injected wrong value, once present, persists to the final hop in 83-100% of chains in every format, closely matching each format's retention of the true value, with no detectable collateral damage to neighboring facts. Structure buys a faithful, error-localizing channel -- not an error-correcting code -- and format choice should follow the weakest relay in the pipeline.

36. [Boltzmann MapReduce: A Partition-Function Reduce for Forkable Sandboxes](https://arxiv.org/abs/2607.09689)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09689v1 Announce Type: new Abstract: To leading order under local asymptotic normality (LAN), the confidence density a worker emits over a chunk of size $n$ is a Gibbs--Boltzmann measure $\exp\{-\beta E(\theta)\}$ whose inverse temperature is the sample size, $\beta=n$. Three consequences are exact in the Gaussian/linear case and first-order otherwise: disjoint chunks carry independent Boltzmann factors, so the MapReduce \emph{reduce}, read literally, is a partition function $Z=\int\prod_k h_k\,d\theta$ whose mode is precision-weighted (inverse-variance) pooling; frequentist consistency is the zero-temperature limit $T=1/n\to0$

37. [GES-TSP: Graph Edge Sparsification for TSP](https://arxiv.org/abs/2607.09708)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09708v1 Announce Type: new Abstract: Solving large-scale instances of the Traveling Salesman Problem (TSP) exactly is computationally expensive. Researchers often employ graph sparsification methods to improve computational efficiency. Traditional sparsification methods typically rely on fixed heuristics and fail to fully exploit instance-specific structural information. In this paper, we propose Graph Edge Sparsification (GES), a learning-based sparsification approach for Euclidean TSP. By incorporating geometric structural information and combinatorial optimization technology, our proposed method adaptively generates a sparsification graph for different instances, significantly reducing the graph size and accelerating the solving process. Experimental results demonstrate that our sparsification method can prune up to 95% of edges on the MATILDA dataset, while keeping the solution gap within 1% of the optimal value. Moreover, our approach exhibits strong generalization capability on the TSPLIB benchmark.In some large-scale instances, the pruning rate exceeds 99%, while the optimality gap remains below 1%.

38. [What Context Does a Coding Agent Actually Need to Act?](https://arxiv.org/abs/2607.09691)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09691v1 Announce Type: new Abstract: A modern coding agent can hold an entire repository in its context window. Most of its reading is wasted -- and the interesting question is not how much context an agent can use, but what it actually \emph{needs}. We study that question at the moment it matters most: when the agent must \emph{edit} code. Separating \emph{finding} the work site from \emph{acting} on it, we hold localization fixed with an oracle, vary only how the code is represented, and score context against real issue resolution on SWE-bench Verified. The answer is starkly minimal. The signal lives in the code being edited itself: natural-language summaries of it answer almost none of the behavioral questions that the source answers ($4/45$ vs.\ $27/45$, held-out repositories, independent judge), and the gap belongs to the representation, not the summarizer -- a frontier model's summaries score exactly as poorly as a 3B model's. The surrounding context hardly matters either: across every multi-file instance in Verified, under a protocol frozen before any data, rendering a file's remainder as UML skeletons and signatures resolves no more issues than deleting that remainder outright ($N{=}70$, exact McNemar $p{=}0.75$). That was our registered hypothesis, and it failed. Compressed context, meanwhile, matches whole files at a third of the tokens: a resolved issue costs $19$K context tokens, not $94$K. The instrument also yielded a finding the field should keep: temperature-0 API inference flips ${\sim}9\%$ of per-instance outcomes between byte-identical runs. That is a noise floor under every small effect reported on this benchmark, including ours. We release the instrument -- gold-validated environments, per-instance proof that every reference edit is expressible from every arm's context, deterministic patch construction, and pre-registered hypotheses whose nulls we publish.

39. [Knowledge-Constrained Shape Optimization with a Mixture-of-Experts Neural Operator for High-Confidence Design](https://arxiv.org/abs/2607.09763)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09763v1 Announce Type: cross Abstract: Engineering shape optimization faces challenges in both expert-dependent problem setup and surrogate-model reliability. In practical aerodynamic design, optimization settings such as editable regions, deformation ranges, and design-preservation constraints are typically specified manually by experienced engineers, while surrogate-based optimization may become unreliable for heterogeneous geometry databases and out-of-distribution designs. To address these challenges, we propose a knowledge-constrained shape-optimization framework that translates knowledge-based constraints and user intent into quantifiable parameters of DFFD-based deformation operators, enabling engineering-aware and controllable constrained optimization. We further develop a Mixture-of-Experts Neural Operator (MoE-NO) to improve drag prediction and trend consistency over heterogeneous aerodynamic datasets. Based on the MoE-NO encoder and Mahalanobis distance, an uncertainty-estimation strategy is introduced to detect out-of-distribution geometries and selectively trigger physics-solver feedback for local sample enrichment. Experiments on in-house MPV, SUV, and Sedan datasets show that MoE-NO achieves a test-set MAPE of $1.16\%$ and a trend-prediction accuracy of $94.34\%$, outperforming the best baseline results of $1.52\%$ and $90.34\%$, respectively. Vehicle shape-optimization experiments further yield CFD-validated drag coefficient reductions of approximately $4\%$ to $10\%$.

40. [A Multispecies ESBGK Model for Gas Mixtures with Variable Hard Sphere Transport: Theory and Verification](https://arxiv.org/abs/2607.09934)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09934v1 Announce Type: cross Abstract: A multi-species Bhatnagar-Gross-Krook (BGK) model for gas mixtures is presented that achieves the correct species-wise relaxation of velocities, temperatures, and pressure tensors according to the Boltzmann collision integral, as well as the correct mixture Prandtl number, while retaining a single relaxation term per species. The model extends the ellipsoidal statistical BGK (ESBGK) model by introducing relative relaxation targets for each species, derived from the Variable Hard Sphere (VHS) production rates of the Grad 13 approximation. Three approaches for the species relaxation frequency are proposed and analyzed: a Grad 13-based per-species frequency, a mixture-averaged frequency, and an empirical harmonic mean of the two. The model is implemented in the particle-based code PICLas and verified against Direct Simulation Monte Carlo (DSMC) results for a range of test cases, including 0D reservoir relaxation, mass diffusion, supersonic Couette flow, and hypersonic flow around a 70{\deg} blunted cone for binary and ternary gas mixtures. Across all test cases, the proposed model reproduces the correct Prandtl number, species temperature, velocity relaxation rates and pressure tensor relaxation, with the empirical relaxation frequency consistently yielding the best agreement with DSMC.

41. [Fourth-order Optoelectronic Response from Cascaded Circular Photogalvanic and Nonlinear Hall Effects](https://arxiv.org/abs/2607.10012)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.10012v1 Announce Type: cross Abstract: The interplay between nonlinear optical transitions and topological band structure offers a route to control photocurrents. We reveal a fourth-order optoelectronic response that emerges due to an interlink between the circular photogalvanic effect (CPGE) and the Berry curvature dipole (BCD) in noncentrosymmetric 2D materials. Using monolayer $\Td$-WTe$_2$ as a prototype, we predict that circularly polarized mid-infrared light produces a steady dc injection current that induces an internal electric field, which in turn drives a transverse nonlinear Hall response through BCD. The resulting cascaded photovoltage scales as the fourth power of the optical field $E_0^4$. By mapping the full injection current tensor, we show that this cascaded voltage is strongly tunable by the optical geometry: normal incidence drives an in-plane resonance $\mathrm{Im}(\eta_{yxy})$, whereas oblique illumination ($\theta = 45^{\circ}$) recruits a dominant out-of-plane component $\mathrm{Im}(\eta_{yyz})$ and amplifies the signal by more than two orders of magnitude (${\sim}10^2~\mu$V). While the massive linear Drude background typically screens nonlinear responses in semimetals, we argue that the amplitude modulation of the optical pump allows lock-in detection to cleanly isolate the frequency-doubled cascaded response. The proposed mechanism converts mid-infrared light into a gate-tunable transverse signal, providing a route for probing quantum geometry and realizing topological photodetectors and frequency doublers.

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-14T07:44:49Z; Popularity: 473 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.43; Date: 2026-07-14T15:06:03Z; Popularity: 1,432 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

44. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-07-14T14:02:56Z; Popularity: 253 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

45. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-13T04:57:56Z; Popularity: 210 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

46. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

47. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

48. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

49. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

50. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

51. [Knowledge Graphs Meet Graph Neural Networks: A Comprehensive Survey](https://arxiv.org/abs/2607.09666)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09666v1 Announce Type: new Abstract: Graph Neural Networks (GNNs) have emerged as a powerful paradigm in Knowledge Graphs (KGs) due to their intrinsic ability to model graph-structured data. However, there remains a lack of a systematic review about GNN-based methodologies across the entire knowledge graph technologies pipeline. To address this gap, we first propose a novel two-level taxonomy framework for GNN-based knowledge graph technologies: the KG technologies pipeline and GNN-based perspective. Specifically, the knowledge graph technologies pipeline covers knowledge graph construction, knowledge graph embedding, knowledge reasoning and knowledge graph applications. Meanwhile, the GNN-based perspective provides a new categorization of knowledge graph technologies with GNN models, such as GCN, GAT, and HGNN. Then, we analyze the advantages of GNN technology based on the characteristics of different tasks in the knowledge graph lifecycle. Furthermore, we detailed review various GNN-based models for knowledge graph following the proposed taxonomy, and summarize strengths and limitations. Finally, we discuss unresolved challenges and outline promising directions for future research.

52. [Position: Every Ground Truth is a Human Construction, not an Objective Truth](https://arxiv.org/abs/2607.09668)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09668v1 Announce Type: new Abstract: Ground truth datasets play a fundamental role as reference values in the training and evaluation of machine learning models. This position paper argues that ground truths are not neutral objective measurements that are naturally given, but instead that they are constructed by arrangements of humans and technologies. We argue that the ML community will benefit from articulating and discussing these often invisible or unreported choices and acknowledging that reference data sets are contingent, not universal. Focusing on the situated and context-dependent nature of ground truths can improve reliability by enabling a better informed perspective on where, when, and how the datasets, and the models they have shaped, can best be used. We argue for increasing `situated reliability' which includes articulating the limits and strengths of models and their truth claims. Finally, paying more attention to the construction of ground truths can support transparency, accountability, and interdisciplinary work.

53. [MawForge: Memory-Bounded Expert Materialization for Local Mixture-of-Experts Inference](https://arxiv.org/abs/2607.09686)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09686v1 Announce Type: new Abstract: Sparse Mixture-of-Experts (MoE) language models separate total parameter count from per-token active computation, but local inference systems often still require the full model, key-value cache, runtime buffers, and operatingsystem headroom to fit in fast memory. MawForge tests a different systems hypothesis: local MoE serving can be made practical on constrained unified-memory machines by storing the full model on disk, keeping common tensors resident, and materializing routed expert tensors into a bounded execution cache on demand. The central finding is that MawForge is effective as a bounded execution mechanism and measurement substrate for local MoE inference, but not as a cache-maximization policy. Performance depends on balancing expert reuse against resident footprint, KV-cache size, quantization, route locality, and macOS memory pressure.

54. [Prioritizing Search Space Regions in the Low Autocorrelation Binary Sequences Problem](https://arxiv.org/abs/2607.09688)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09688v1 Announce Type: new Abstract: Low autocorrelation binary sequences problem (LABS) is a hard combinatorial optimization challenge with important applications in communications, signal processing, and satellite navigation. This paper proposes a hybrid search framework that combines Thompson sampling with parallel self-avoiding walks to adaptively allocate computational effort across restriction classes of the LABS search space. By modeling partitions as arms in a multi-armed bandit setting, the proposed method dynamically shifts search resources toward partitions that empirically produce higher merit factors while maintaining exploration of less-sampled regions. The approach is further accelerated through GPU-parallel execution, shared posterior updates, efficient neighborhood evaluation, and a Bloom filter for cycle prevention. In addition, we use a two-stage optimization strategy that first searches constrained partitioned skew-symmetric spaces and then refines the best candidates in the unrestricted space. Experiments on long binary sequences show that the proposed method improves the previously best-known results for 35 sequence lengths in the range $450 \le L \le 527$ and for $L=573$. In particular, we report a new longest sequence with merit factor exceeding $8.0$, obtained for $L=451$. The results also show that Thompson sampling effectively prioritizes partitions with better observed performance, confirming the value of online, data-driven resource allocation in LABS optimization. Overall, the proposed framework provides a scalable and effective strategy for high-performance merit factor maximization.

55. [Reference-Based Distillation Detection in LLMs](https://arxiv.org/abs/2607.09692)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09692v1 Announce Type: new Abstract: Model distillation -- training on outputs from stronger third-party models -- is widely used to boost performance, but raises concerns about unfair advantages and policy violations. This motivates a fundamental question: can we detect whether a model was distilled from another? We show that, while identifying a teacher model from a student in isolation is highly challenging, it becomes tractable in a reference-based setting: given a model and an earlier-generation checkpoint from the same lineage, we can identify the teacher model used to train the later checkpoint. We introduce a distillation detection method based on reference-based membership inference. By comparing how strongly a student model preferentially aligns with outputs from different candidate teachers relative to a reference checkpoint, our method identifies the most likely teacher and detects evidence of distillation. To handle unknown distillation pipelines such as hidden prompts, we infer proxy prompt templates directly from model outputs. We additionally identify a distinctive glyph-level signal specific to o1/o3 models. Evaluating distillation detection is challenging because modern model lineages are already heavily entangled. To address this, we develop a hybrid evaluation spanning both controlled distillation experiments and real-world models. Across both settings, our approach recovers the true teacher with near-perfect accuracy in single-teacher distillation scenarios, even when the underlying distillation pipeline is largely unknown. We further introduce statistical tests for both teacher attribution and distillation detection, and extend our framework to open-world settings where no teacher is guaranteed to be present among the candidates. Applying our method to contemporary models yields new evidence regarding potential distillation relationships involving QwQ, DeepSeek-R1, and GPT-OSS.

56. [Depth-Entropy Guided Sampling for Training-Free LLM Reasoning](https://arxiv.org/abs/2607.09693)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09693v1 Announce Type: new Abstract: Reinforcement learning (RL) has become the dominant paradigm for improving the reasoning capabilities of large language models, but it requires expensive training, curated data, and reward signals. Recent work shows that sampling from sharpened base-model distributions at test time recovers much of the RL gain, yet existing methods rely solely on output-layer likelihoods and ignore the transformer's internal forward-pass dynamics. We introduce Depth-Entropy Guided Sampling (DEGS), a training-free, test-time method that exploits layer-wise entropy collapse as an intrinsic quality signal. We observe that stronger reasoners -- including RL-posttrained variants -- exhibit a distinctive "late collapse": logit-lens decoded entropy stays elevated until deeper layers before converging. We define a per-sequence collapse depth $D(\mathbf{x})$ and a joint objective $\pi(\mathbf{x}) \propto p(\mathbf{x})^\alpha \exp(\beta D(\mathbf{x}))$ that combines sequence likelihood with this depth-entropy structure, instantiated inside an MCMC power-sampling framework (DEGS-MCMC). Across three open-weight models and four reasoning benchmarks, this near-chance per-candidate signal compounds over the sampling trajectory into state-of-the-art training-free accuracy, with gains largest out of domain and on the harder splits -- exactly where likelihood alone falls short -- at single-digit-percent wall-clock overhead. DEGS narrowly trails an in-house GRPO reference on the math splits GRPO was trained for, yet surpasses it out of domain on GPQA for all three models, without any training, reward model, or labeled data.

57. [Stochastic simulations of nonlinear reaction-diffusion equations using an exponential integrator](https://arxiv.org/abs/2607.10065)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.10065v1 Announce Type: new Abstract: Stochastic simulations can be generated from deterministic reaction-diffusion equations by discretising in space and time and interpreting coefficients in the resulting system of discretised equations as probabilities governing movement and reaction events. In this paper, we present a novel variant of this approach for nonlinear reaction-diffusion equations that employs an exponential integrator when discretising in time. The proposed method yields valid probabilities, defined by the entries of appropriate matrix functions, without the strict conditions on the time step required by a commonly-employed time discretisation scheme. Simulation results presented for one and two dimensional Porous-Fisher type models demonstrate the veracity of the method across several test problems.

58. [Functional Expansion Tallies of Matrix Operators for Prediction for Integrated Autocorrelation Time in Batch Monte Carlo: an Analytic 2D Scattering Chain Benchmark](https://arxiv.org/abs/2607.10758)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.10758v1 Announce Type: new Abstract: We investigate functional expansion tallies as a reduced-basis representation for predicting inter-cycle correlations in Monte Carlo transport. Using an analytic two-dimensional isotropic scattering-chain benchmark with reflective boundaries, we compare a conventional discrete-cell Markov-chain estimator with a Galerkin reduced-order model built directly from Monte Carlo tallies of basis-function products. The reduced model estimates integrated autocorrelation time without first constructing a large discrete transition matrix. For the benchmark problem, the cosine basis converges rapidly to the exact result, while polynomial bases show systematic convergence with increasing order. Compared with discrete binning, the reduced-basis approach achieves lower bias at comparable or lower solve cost, suggesting that functional-expansion representations can provide an efficient path toward correlation prediction, uncertainty quantification, and future variance-reduction methods in Monte Carlo criticality calculations.

59. [Understanding Chemical Short-Range Order in CoNiV via Mode Analysis](https://arxiv.org/abs/2607.10775)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.10775v1 Announce Type: new Abstract: We analyze chemical short-range order in equiatomic fcc NiCoV using molecular-dynamics snapshots generated with a machine-learned interatomic potential. Radial distribution functions identify stable coordination shells, while shell-resolved Warren-Cowley parameters and bond probabilities reveal continued chemical ordering after the radial structure has largely converged. The dominant signal is V-V avoidance in the first shell and V-V enrichment in the second shell, consistent with an L1$_2$-like local ordering tendency, while the third-shell response remains weak. Lagged Jensen-Shannon diagnostics show that bond statistics relax more slowly than the RDF. Principal component analysis of per-replica-centered bond probabilities resolves three collective modes: a V-sublattice ordering amplitude, a Ni-Co redistribution mode, and a Co-V exchange-like mode. These results show that scalar RDF convergence can miss slow chemical relaxation, and that shell-resolved bond statistics provide a compact route for tracking SRO development in multicomponent alloys.

60. [Structure-preserving variational neural fields: Uncertainty-quantified reduced-order modeling of nonlinear conservation laws](https://arxiv.org/abs/2607.10965)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.10965v1 Announce Type: new Abstract: Reduced-order models, such as latent dynamics models, are becoming mainstream for accelerating simulations for parameterized physical systems governed by nonlinear conservation laws. However, most existing latent dynamics frameworks suffer from two important limitations: they do not provide uncertainty estimates for model predictions, and they do not guarantee adherence to the underlying conservation laws. While these challenges have been addressed separately in prior work, a unified framework that simultaneously provides uncertainty quantification and exact conservation-law preservation remains largely unexplored. In this work, we develop a variational latent neural field framework that integrates Gaussian process-inspired surrogates, enabling estimation of predictive confidence for both in-distribution and out-of-distribution parameter regimes. Three variants of the framework are considered: IRS-UQ, PI-IRS-UQ, and ECLEIRS-UQ, corresponding to unconstrained, physics-informed, and conservation-structure-preserving formulations, respectively. Exact conservation-structure preservation is achieved by embedding the solution dynamics within a conservation-law manifold through a space-time divergence-free representation of the solution-flux field. We demonstrate the applicability of the framework through three numerical experiments: 1) 1-D advection, 2) 2-D Euler and 3) 2-D shallow water equations in parameterized settings. Numerical experiments demonstrate that the proposed approach provides accurate predictions together with uncertainty estimates, while remaining robust to sparse and noisy training data. Comparisons between the proposed three approaches show that conservation-structure preserving latent representations improve robustness to degraded training data while maintaining competitive predictive accuracy and uncertainty quantification capability.

61. [Compact and Stable Representation of Real-Frequency Spectral Functions for Machine Learning](https://arxiv.org/abs/2607.11190)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 14 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11190v1 Announce Type: new Abstract: We introduce a compact and stable moment representation for real-frequency Green's functions, hybridization functions, and self-energies for machine-learning applications, avoiding the inefficiency of dense frequency grids as well as the ill-posed analytic continuation of Matsubara approaches. The representation is constructed from Cayley-mapped trigonometric moments with the Jacobian included, which preserve spectral-weight normalization, tie the moment sequence to a positive matrix-valued spectral measure, and admit a systematic route to a pole representation via ESPRIT. This provides a fixed-dimensional learning target in which physical constraints such as normalization and positivity can be imposed directly. Using a graph-attention neural network with FiLM conditioning, we benchmark the representation on single-orbital DMFT, antiferromagnetic DMFT, and a two-orbital impurity model. The results demonstrate accuracy matching or exceeding that of direct frequency-domain learning, reliable reproduction of the density and staggered magnetization, stable self-energy reconstruction through Dyson equation inversion, and accurate recovery of matrix-valued spectra with orbital mixing.

62. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

63. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.70; Date: 2026-07-13T02:01:10Z; Popularity: 696 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

64. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.62; Date: 2026-07-14T01:09:01Z; Popularity: 618 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

65. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.15; Date: 2026-07-14T13:38:40Z; Popularity: 147 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

66. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-13T16:21:39Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

67. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

68. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Toward AI-Agent-Driven Particle Transport Simulations: Implementation of AI-Assisted Workflows for PHITS

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.11309

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
