# Daily signal sidecar - 2026-08-07

## Selected Signal

- Title: SkillTrace: Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse
- URL: https://arxiv.org/abs/2608.05204
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: SkillTrace: Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse
- Primary source: https://arxiv.org/abs/2608.05204
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

Total candidates reviewed after duplicate-source filtering: 71

1. [SkillTrace: Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse](https://arxiv.org/abs/2608.05204)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05204v1 Announce Type: new Abstract: LLM-agent ecosystems are rapidly growing around reusable skills: mixed-modality packages of metadata, natural-language instructions, code, tools, references, and operational workflows. As skills become marketplace artifacts, auditing their reuse is no longer the same problem as ordinary code clone detection. Existing detectors target single-modality source code or whole-package similarity, yet skill reuse evidence is distributed across authored text, implementation fragments, and operational structure. As a result, they can miss reuse that preserves only one part of a skill. We present SKILLTRACE, a multi-trace provenance auditing framework for LLM-agent skill reuse. SKILLTRACE extracts three provenance traces: Expression, Implementation, and Operational. It represents the Operational Trace as a Skill Operational Graph (SOG) that captures activation, procedure, and resource-flow structure. An LLM assists only the Operational-trace extraction, once at ingestion; at audit time SKILLTRACE compares cached traces deterministically, calibrates each trace against same-function strict negatives, and reports which trace supports a reuse decision. On SKILLTRACE-BENCH, with 820 transformed reuse positives over 100 marketplace anchors and 751 negative controls, SKILLTRACE achieves AUROC 0.938 and F1 0.898. A 36,446-skill wild audit further shows that trace-attributed evidence surfaces actionable reuse review queues beyond repository-level baselines.

2. [SearchAuditor: Auditing and Attributing Failures in Long-Horizon Search Agents](https://arxiv.org/abs/2608.05212)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05212v1 Announce Type: new Abstract: Deep search agents tackle challenging questions through long-horizon web interactions, a process that is both complex and fragile: small reasoning errors may propagate through long, noisy trajectories into fluent but incorrect answers. Diagnosing such failures is difficult, requiring the manual inspection of extremely long execution traces, which could be beyond human capacity. We therefore introduce SearchAuditBench, a benchmark that evaluates whether LLM auditors can localize, attribute, and repair these failures, thereby reducing the human burden. SearchAuditBench comprises 1,243 failed trajectories, averaging 73.1 messages and 65.1K tokens, collected from eight open-weight models on five deep-search benchmarks, each expert-annotated with the critical error step, a search-specific root cause, and a reference repair with grading rubrics. We further propose SearchAuditor, a multi-perspective auditing framework that effectively localizes, attributes, and repairs search-agent failures through evidence-grounded adjudication. Experimental results show that even the strongest baseline, when powered by a frontier model like GPT-5.5, attains only a 26.6% end-to-end pass rate. In contrast, our SearchAuditor consistently outperforms all baselines across different frontier models, achieving an end-to-end pass rate of 32.3%, and resuming failed runs with its repairs enables agents to better recover from errors.

3. [PD-GS: Phoneme-Driven 3DGS for Audio-Driven Talking Heads](https://arxiv.org/abs/2608.05218)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05218v1 Announce Type: new Abstract: 3D Gaussian Splatting (3DGS) enables fast, photorealistic talking-head rendering, yet accurate lip articulation remains elusive: mouth motion is often over-smoothed and may violate hard articulatory constraints such as bilabial closures, producing the notorious ``leaky mouth'' artifact. A key difficulty is that brief, discrete articulatory events are inferred from a continuous acoustic embedding under a regression objective, which biases predictions toward averaged mouth configurations. While modern self-supervised speech encoders provide rich prosodic and phonetic cues, they do not provide an explicit, frame-aligned linguistic target that reliably disambiguates closure-level events. We propose \textbf{Phoneme-Driven Gaussian Splatting (PD-GS)}, which augments a 3DGS talker with time-aligned phoneme tokens obtained from an automatic ASR and forced-alignment pipeline. Our core component, the \textbf{Linguistic Fusion Module (LFM)}, adaptively fuses continuous audio context with discrete phoneme embeddings through a learned gate, allowing the model to preserve smooth audio-driven dynamics while strengthening phoneme guidance on articulation-critical segments. PD-GS is trained purely from monocular video using image reconstruction and lip landmark supervision. On HDTF, PD-GS achieves the best lip geometry among the compared baselines (LMD 2.66) and qualitatively reduces closure violations in challenging phoneme sequences, yielding more linguistically faithful neural avatars.

4. [Third-party cyber evaluations involving OpenAI models](https://openai.com/index/third-party-cyber-evaluations-involving-openai-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 04 Aug 2026 19:00:00 GMT
   - Summary: OpenAI explains recent third-party cybersecurity evaluation incidents and outlines new safeguards to strengthen AI model testing and evaluation.

5. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

8. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

9. [NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics](https://huggingface.co/blog/nvidia/cosmos-h-dreams)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 27 Jul 2026 09:32:20 GMT

10. [Agentic Nesting: A New Methodology for Existing Enterprise Application Integration and Services](https://arxiv.org/abs/2608.05159)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05159v1 Announce Type: new Abstract: Enterprise operations extensively rely on multiple heterogeneous business systems and information applications, which also result in severe data silos and process fragmentation. Enterprises have invested considerable financial and material resources in building these applications, however, effectively leveraging and orchestrating them remains a formidable challenge. Conventional approaches to enterprise application integration, encompassing middleware architectures such as Enterprise Service Bus (ESB), API gateway infrastructures, and Robotic Process Automation (RPA), suffer from inherent limitations like high architectural coupling, escalating operation and maintenance costs, and limited intelligence capabilities. This paper proposes Agentic Nesting, a multi-agent collaboration framework in which existing enterprise applications are encapsulated as autonomous AI agents within a hierarchically nested structure. Rather than flat interconnection, agents are organized into layered stewardship topologies that mirror the compositional complexity of enterprise ecosystems. The framework extracts a digital agent proxy from each legacy application to enable natural-language interaction and autonomous manipulation, coordinates multiple agents through a central orchestrator for task decomposition and dynamic dispatching, and exposes a unified conversational interface for cross-application querying and process orchestration. The main contributions of this paper are the proposition of the "Application-as-Agent" integration paradigm and the "Conversation-as-Integration" interaction philosophy, together with an exploration of the generalization potential of this methodology in scenarios encompassing heterogeneous system coordination, and large-scale data applications.

11. [Woodpecker Distillation: Weak Models Diagnose Reasoning Bugs in Strong Models](https://arxiv.org/abs/2608.05168)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05168v1 Announce Type: new Abstract: Large language models often fail on reasoning tasks despite possessing the capability to solve them. We argue that many such failures arise from localized reasoning bugs in intermediate steps rather than from global incompetence. We show that these bugs are frequently repairable: inserting a short patch generated by a weak probe model after the same strong-model reasoning prefix can redirect the trajectory toward a correct solution. However, this corrective effect is not reliably internalized by directly fine-tuning on weak patches or repaired trajectories, suggesting that the useful signal lies not in the intervention text itself, but in how it reshapes the model's future reasoning distribution. We therefore propose Woodpecker Distillation, a weak-to-strong training framework that learns from contrastive local interventions. Our method contrasts successful and unsuccessful weak-model patches at the same prefix, constructs a corrective teacher distribution from their induced future token predictions, and distills this signal into the strong model. Experiments on mathematical reasoning benchmarks show that Woodpecker Distillation consistently improves strong-model performance and outperforms direct imitation baselines.

12. [From Continuous Predictors to Clinical Thresholds: Early Evidence on Performance Trade-offs of Guideline-Based Categorisation for Ischaemic Stroke Outcome Prediction](https://arxiv.org/abs/2608.05203)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05203v1 Announce Type: new Abstract: Machine learning models achieve strong predictive accuracy for 90-day outcome prediction in acute ischaemic stroke, yet clinical adoption is limited by the misalignment of model explanations with clinicians' reasoning. Motivated by a clinician user study calling for clinical guideline-aligned cut-offs, we ask whether continuous predictors can be replaced by clinically informed categorical encodings without sacrificing performance. On a multi-centre European registry stratified into three treatment cohorts, we compare standard and fully categorised gradient-boosted models, the latter using stroke guideline-aligned, treatment-specific thresholds. The fully categorised models are statistically indistinguishable from their continuous counterparts in two of the treatment cohorts, with a significant drop in predictive accuracy in one cohort. Global feature importance rankings remain consistent, suggesting that discretising continuous predictors into guideline-based categories preserves the core hierarchy of prognostic factors across all treatment groups. Guideline-based categorisation is thus a viable design choice for stroke-outcome models.

13. [Abstract Event Causal Rules: Induction and Application](https://arxiv.org/abs/2608.05205)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05205v1 Announce Type: new Abstract: Event-centric intelligent analytical systems heavily depend on explicit causal event knowledge for risk early warning, decision-making support and narrative comprehension. Nevertheless, existing instance-level causal pairs suffer severe generalization deficits on low-frequency long-tail and unseen event combinations. To address this limitation, this work proposes Abstract Event Causal Rule (AECR), a novel relation-level causal abstraction paradigm that transforms concrete cause-effect pairs into generalized abstract causal logic while retaining their intrinsic causal relationships. We design a multi-agent Concrete-to-Abstract Causal Induction (CACI) system coupled with similarity-constrained clustering to distill trustworthy AECRs from noisy raw causal data, based on which two complete AECR knowledge bases are built. To validate the practical utility of abstract causal knowledge, we propose an Abstract Rule-Guided Causal Attention Encoder (AR-GCAE), which injects the retrieved AECRs into the causality Graph Event Prediction (CGEP) benchmark task via rule-guided attention layers and gated representation fusion. Quantitative experimental results reveal that applying AECRs substantially strengthens the generalization capacity of event causal reasoning and brings consistent performance improvements to event prediction, with the most prominent gains observed on rare and unseen event samples.

14. [Multiphysics tritium transport modelling of the ARC breeding blanket with FESTIM](https://arxiv.org/abs/2608.05398)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05398v1 Announce Type: new Abstract: Accurate prediction of tritium behaviour in molten salt breeding blankets is essential for the design and safe operation of ARC-class fusion reactors. This work presents a fully open-source, component-scale multiphysics framework for modelling tritium transport in an ARC liquid immersion blanket. Neutron transport, thermal hydraulics, and hydrogen isotope transport are coupled using OpenMC, OpenFOAM, and FESTIM, leveraging dedicated tools enabling direct transfer of spatially resolved fields between solvers. Assuming a zero inlet concentration, steady-state simulations predict a total tritium inventory of approximately 243 mg, with the blanket reaching steady-state tritium throughput within approximately 30 min, which is of a similar order to previous system-level estimates. The results show that tritium transport is dominated by turbulence-enhanced diffusion, with strong localisation in flow stagnation regions and reduced accumulation in highly turbulent zones. Sensitivity analyses indicate that predicted inventories are governed primarily by the numerical stabilisation scheme, with only a modest dependence on the turbulent Schmidt number. The proposed workflow provides a transparent and extensible basis for high-fidelity analysis of tritium transport in ARC-class breeding blankets.

15. [Millisecond-Scale Neural Operator Surrogates for Double-Null Free-Boundary Grad-Shafranov Equilibria](https://arxiv.org/abs/2608.05555)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05555v1 Announce Type: cross Abstract: The Grad-Shafranov (GS) equation governs ideal magnetohydrodynamic equilibrium in tokamak plasmas. Free-boundary GS solvers are central to diverted-equilibrium modeling, but nonlinear Picard iteration introduces computational cost and sample-dependent latency that can become prohibitive in optimization, modeling, and control-oriented loops. Here we train a geometrically conditioned Fourier Neural Operator (FNO) to learn a constrained forward map from spatial coordinates, scalar operating parameters $(P_{\mathrm{axis}}, I_p, f_{\mathrm{vac}})$, and prescribed X-point locations to the poloidal-flux field $\psi(R,Z)$. The model is trained on a controlled family of constrained double-null free-boundary equilibria generated with \textsc{FreeGS} for a single fixed machine geometry and prescribed topology. The best model achieves a mean relative $L^2$ error of $0.05\%$, with test error following an empirical $N^{-0.68}$ power law over $N_{\mathrm{train}}\in\{500,1000,2000,5000\}$. It recovers both X-points to within $0.2$ cm and localizes the O-point to $0.03$ cm. As a physics-consistency diagnostic, the predicted fields satisfy an external finite-difference GS residual evaluation at the same level as the ground-truth fields, with mean normalized residual $2.29$, indistinguishable from the $2.29\pm0.06$ \textsc{FreeGS} baseline using the same diagnostic. The trained FNO evaluates one equilibrium in $2.77$ ms on GPU and $25.6$ ms on CPU, corresponding to speedups of ${\sim}640\times$ and ${\sim}69\times$ relative to \textsc{FreeGS} as configured here, with near-deterministic latency (p95/median $=1.01$). These results show that neural-operator surrogates can provide accurate, geometrically precise, millisecond-scale equilibrium evaluations for magnetic-confinement fusion workflows within a prescribed topology and machine geometry.

16. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.65; Date: 2026-08-07T14:10:00Z; Popularity: 2,654 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

17. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-08-07T03:01:58Z; Popularity: 23 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

18. [How HSP GRUPPE builds AI capabilities for tax advisory](https://openai.com/index/hsp-gruppe)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 07 Aug 2026 09:00:00 GMT
   - Summary: Discover how HSP GRUPPE uses ChatGPT Enterprise to boost productivity, improve work quality, and create more capacity for tax advisory and client service.

19. [Improving GPT‑5.6 Sol in ChatGPT—and expanding access to GPT-5.6 Luna for free users](https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 06 Aug 2026 10:00:00 GMT
   - Summary: ChatGPT introduces improved GPT-5.6 Sol with better accuracy and consistency, plus expanded access for free users and unlimited everyday chats with GPT-5.6 Luna.

20. [Working with the American Psychological Association on youth mental health and AI](https://openai.com/index/openai-and-apa-partner-to-advance-responsible-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 06 Aug 2026 06:00:00 GMT
   - Summary: OpenAI and the American Psychological Association advance evidence-based guidance, resources, and safeguards for responsible AI use and youth mental health.

21. [From asking to doing: How the world is putting ChatGPT to work](https://openai.com/index/how-the-world-is-putting-chatgpt-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 06 Aug 2026 00:00:00 GMT
   - Summary: New OpenAI Signals data shows how people use ChatGPT worldwide, with country-level insights on adoption, usage trends, and evolving behavior.

22. [New ways to learn and teach with ChatGPT Work and Codex](https://openai.com/index/learn-teach-chatgpt-work-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 04 Aug 2026 00:00:00 GMT
   - Summary: Explore new education plugins for ChatGPT Work and Codex that help K–12 teachers, college educators, and students learn, teach, research, and build.

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

27. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

28. [Baseten on Hugging Face Inference Providers 🔥](https://huggingface.co/blog/baseten)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 06 Aug 2026 00:00:00 GMT

29. [Deploy local agents everywhere with LFM2.5-2.6B](https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 04 Aug 2026 13:58:29 GMT

30. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

31. [The OlmoEarth Platform: Geospatial inference at planetary scale](https://huggingface.co/blog/allenai/olmoearth-infrastructure)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 16:27:42 GMT

32. [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 GMT

33. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

34. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

35. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

36. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

37. [The Ignition Index: Measuring Global Workspace Dynamics in Language Models](https://arxiv.org/abs/2608.05160)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05160v1 Announce Type: new Abstract: We introduce the Ignition Index (I), a validated scalar metric that operationalizes Global Workspace Theory's (GWT) all-or-none ignition prediction in transformer language models. The metric fits a four-parameter sigmoid to per-layer linear probe accuracy as a function of input signal strength, extracting steepness parameter beta-hat: high values indicate abrupt, ignition-like transitions; low values indicate graded build-up. Across 11 models spanning five architecture families, shuffled-label controls demonstrate 9.6-fold selectivity for genuine linguistic structure over spurious probe capacity (p < 0.001, Mann-Whitney U-test). We find: (1) Feedforward transformers exceed SSMs by 89% in aggregate beta-hat (p < 1e-13, Cohen's d = 0.52), with Mamba exhibiting near-linear profiles consistent with absent global broadcast. (2) Huginn-3.5B exhibits 2.12-fold higher ignition along its iteration axis than its depth axis, demonstrating that recurrent architectures manifest workspace-like transitions along the recurrence dimension. (3) Pythia-410M shows a PELT-detected phase transition at training step 256 (+67%), preceding induction-head formation. (4) Hypotheses linking ignition to model scale and signal strength were not confirmed, suggesting transformer architectures may saturate available ignition mechanisms. The Ignition Index provides the first validated quantitative bridge between GWT's dynamical predictions and mechanistic interpretability, with 9.6-fold measurement selectivity and architecture-level discriminability not previously characterized in the scaling literature. Code: https://github.com/saman-rahbar/ignition-index

38. [Otter: A Time-Aware, History-Conditioned Human Chess AI](https://arxiv.org/abs/2608.05206)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05206v1 Announce Type: new Abstract: Otter is a 15.3M-parameter human chess AI that predicts human move selection by modeling play as a time-aware, sequential process rather than treating each position in isolation. It combines two conditioning signals: (1) a move history encoder that conditions predictions on the last 20 moves, capturing opening preferences, positional drift, and intra-game behavioral tendencies; and (2) a time control module that modulates predictions based on clock pressure. Otter is trained on 6.1 billion positions from 117 million Lichess rapid games over 30 days on a single T4 GPU. Otter achieves 55.23% top-1 and 90.95% top-5 move-prediction accuracy, surpassing the prior state-of-the-art human chess model, Maia 2, with far fewer parameters and less training data. Across 11 Elo brackets ( =2000), accuracy peaks at 57.38% in the 1900-1999 bracket. These results show that modeling chess as a time-aware, sequential activity yields more human-accurate move prediction than position-only approaches, using a smaller model. Code, trained models, and complete training logs are publicly released.

39. [When Privileged Guidance Misaligns: State-Matched Routing and Contextualized Self-Distillation for Multi-Turn Agents](https://arxiv.org/abs/2608.05219)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05219v1 Announce Type: new Abstract: Privileged on-policy distillation provides dense supervision for multi-turn agents by allowing a synchronized teacher to re-score the student's response at every turn with access to training-only references, such as successful trajectories. In interactive environments, however, the student's preceding actions continually change the execution state. As the student takes different actions or completes subgoals in a different order, its rollout may reach states not covered by the reference, making the reference an unreliable source of guidance for the state actually reached. Applying privileged distillation indiscriminately therefore creates state--reference mismatch. This mismatch motivates a central objective: providing privileged reference guidance that remains compatible with the student's current execution state. We introduce State-Matched Routing and Contextualized Self-Distillation (SMRC-SD), which explicitly determines when and how a privileged trajectory should guide an on-policy student. At each turn, SMRC-SD verifies whether the student's current execution state matches a supported state along the reference trajectory. Distillation is applied only at matched states, filtering out turns for which the reference lacks locally compatible guidance. For each matched state, SMRC-SD further constructs state-conditioned teacher context from the successful trajectory, grounding supervision in the state actually reached. Across ALFWorld and WebShop, SMRC-SD consistently outperforms unconditional successful full-path distillation. With Qwen3-1.7B, it improves task success from $0.746$ to $0.865$ on ALFWorld and from $0.574$ to $0.693$ on WebShop. Controlled routing and context ablations support both selecting locally supported turns and constructing state-compatible teacher context as contributors to these gains. Code is available at https://github.com/liujunzhuo/SMRC-SD.

40. [When Do Corrective Features Help? An Agent for Corrective Feature Discovery on Black-Box Forecasters](https://arxiv.org/abs/2608.05207)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05207v1 Announce Type: new Abstract: Frozen pretrained forecasters often fail in structured, recurring ways that are costly to repair through fine-tuning. We study corrective feature discovery: mining interpretable features of a frozen forecaster's residual to drive a lightweight post-hoc corrector. Prior automated feature engineering models the data-generating process; corrective features instead model the model-failure process. We present CRAFTER (Corrective Residual Agent with Feature-based Temporal Exploration and Reasoning), which keeps the backbone frozen and mines its residual with two complementary generators: a compositional search over the raw input channels, and a large language model (LLM) that proposes named feature combinations, binary flags, and short executable code. A single validation-grounded gate accepts or rejects every candidate regardless of its origin, and a validation-selected corrector applies the accepted features or leaves the forecast unchanged. This source-agnostic pipeline also allows prior feature-engineering systems to be evaluated under identical conditions, making CRAFTER an instrument for attributing forecast improvements to the feature source alone. Across six public datasets and six frozen backbones, CRAFTER surpasses every dedicated feature-engineering system at every feature budget, roughly doubling the improvement achieved by the corrector alone and reducing the error of the weakest backbones by up to 27%. These gains are robust across different LLM backends and persist even when applied on top of fine-tuned backbones.

41. [PPDL: LLM-Based Flows as Probabilistic Programs](https://arxiv.org/abs/2608.05234)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05234v1 Announce Type: new Abstract: Building reliable applications that leverage large language models (LLMs) remains a significant challenge. While LLMs offer impressive capabilities across diverse tasks, their outputs often lack accuracy and provide no clear measure of confidence. This uncertainty compounds in flows of multiple calls to LLMs and other tools, making it difficult for developers and end-users to trust the results. This paper introduces a probabilistic language for programming LLM-based flows. It enables developers to quantify and propagate uncertainty throughout the application's flow, and experiment with different inference scaling techniques without adding a single line of code beyond the flow's logic. We present an experimental study to demonstrate this capability, and a case study building a theorem proving agent for the Rocq theorem prover.

42. [A hybrid s-version isogeometric strategy for dynamic crack propagation in 2D and 3D problems](https://arxiv.org/abs/2608.05589)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05589v1 Announce Type: cross Abstract: A hybrid s-version of isogeometric analysis (hS-IGA) strategy is proposed for accurate and efficient evaluation of near-crack fracture quantities in dynamic crack propagation analysis. The strategy retains the global-local superposition framework of the conventional s-method, while introducing B-spline basis functions only into the global discretisation and preserving a Lagrange-based local mesh in the crack domain. This hybrid formulation is motivated by the continuity-related bottleneck in the global-local coupling integration of the conventional Lagrange-based s-method, and by the need to retain a Lagrange-based local mesh for crack representation and post-processing of the dynamic stress intensity factor (DSIF) and local stress. The resulting formulation removes discontinuities in the coupling integrands caused by the global approximation and enables accurate coupling integration by standard Gauss quadrature without recursive subdivision. The proposed strategy is verified using two-dimensional stationary and dynamic straight-crack problems against the standard finite element method and the conventional s-method, and is further assessed using three-dimensional stationary and dynamically propagating circular-crack problems against the conventional s-method. Results show that the proposed hS-IGA strategy accurately evaluates the DSIF and local stress while retaining the global-local modelling advantages of the s-method. It also substantially reduces the number of integration points required for coupling integration, by approximately 81% in the two-dimensional dynamic benchmark and 95.6% in the three-dimensional dynamic benchmark relative to the conventional s-method. These results demonstrate that the proposed hS-IGA framework provides an accurate and efficient global-local strategy for dynamic crack propagation analyses requiring reliable evaluation of near-crack fracture quantities.

43. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.66; Date: 2026-08-07T12:15:08Z; Popularity: 1,658 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

44. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-07T02:01:51Z; Popularity: 477 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.30; Date: 2026-08-07T00:31:16Z; Popularity: 297 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-08-07T05:04:12Z; Popularity: 221 stars
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

53. [MS-MLB: An Open Machine Learning Benchmark for Blood-Based MS Classification](https://arxiv.org/abs/2608.05196)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05196v1 Announce Type: new Abstract: Multiple sclerosis (MS) is diagnosed through clinical assessment, magnetic resonance imaging, laboratory evidence when appropriate, and exclusion of better explanations. Blood RNA expression data may contain disease associated immune signal, but a blood RNA classifier cannot be treated as a replacement for clinical diagnosis. This paper presents MS-MLB (Multiple Sclerosis Machine Learning Benchmark), a reproducible open benchmark for machine learning based MS research classification from whole blood RNA expression data. MS-MLB uses the public GSE17048 cohort, converts it into an MS versus healthy control task, and evaluates multiple algorithms under a shared, leakage controlled pipeline that a researcher can rerun without reconfiguring the evaluation. The evaluation includes nested cross-validation, an untouched stratified holdout set, bootstrap confidence intervals, ROC and precision recall analysis, calibration measurement, and an exploratory MS Research Score. In the final benchmark summary, Gradient Boosting ranked first by MS Research Score on the holdout set, with an MS Research Score of 93.83, AUC-ROC of 0.989, sensitivity of 0.950, specificity of 0.778, $F_{1}$ score of 0.927, and Brier score of 0.050. Prior studies have applied machine learning to MS blood transcriptomic data, including PBMC stage classification and whole blood diagnostic signature modeling. The contribution here is different and narrower. To our knowledge, MS-MLB is the first open benchmark focused on MS versus healthy control classification from GSE17048 whole blood RNA expression data with a documented external model submission pathway built into the framework. The score is intended for research comparison only and has not been clinically validated. The benchmark is accessible here: https://github.com/duckyquang/MS-MLB.

54. [Disentangling 3D Modeling from Spatial Reasoning](https://arxiv.org/abs/2608.05242)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05242v1 Announce Type: new Abstract: In this work, we explore an alternative paradigm for spatial reasoning by explicitly disentangling 3D perception from reasoning, rather than jointly acquiring implicit 3D perception and reasoning through large-scale training. Our key observation is that modern perception models excel at estimating continuous 3D geometry, whereas large language models (LLMs) are particularly effective at compositional and symbolic reasoning. Motivated by these complementary strengths, we propose the Disentangled Spatial Reasoner (DiSR), a simple yet effective framework that reconstructs the physical world into structured 3D evidence using off-the-shelf expert perception models and fine-tunes an LLM with LoRA to perform reasoning solely over this explicit geometric evidence. Without large-scale 3D VQA training or complex tool-use policies, DiSR achieves competitive performance on popular spatial reasoning benchmarks. Beyond its strong performance, DiSR offers improved interpretability, modularity, and computational efficiency, demonstrating that explicit separation of perception and reasoning is a scalable and effective alternative paradigm to end-to-end modeling for spatial intelligence.

55. [PRISM: Priority-aware Rubric Internalization via Structured Multimodal Data Synthesis](https://arxiv.org/abs/2608.05249)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05249v1 Announce Type: new Abstract: Real-world multimodal instructions often bundle multiple requirements with unequal importance, yet most multimodal training data still reduce instruction following to answering one self-contained question. We study this gap through \textbf{rubric comprehension}, which casts the model not as a generator measured against rubrics but as an \textbf{executor} that follows them: given an image and a typed, prioritized rubric, the model must verify each rule before producing an overall judgment. To support this setting, we propose \textbf{PRISM}, a four-stage data synthesis framework that produces persona--task pairs, prefix-guided rule sets, quality-filtered rubrics, and structured verification traces. We further introduce \textbf{PRISM-Eval}, whose Loose and Strict metrics use deterministic matching against fixed labels and therefore require no inference-time judge model. With only 10K synthesized samples, PRISM lifts Qwen3-VL-4B from 9.5\% to 30.1\% Strict accuracy on PRISM-Eval while preserving average performance on general benchmarks, and the gains transfer to four additional open-source MLLMs across dense and MoE architectures, suggesting that structured rubric supervision is a scalable path toward multi-rule, priority-aware multimodal instruction following.

56. [Beyond Full-Model Rollback: AuroSFT for Adapter-State Multi-Task Fine-Tuning](https://arxiv.org/abs/2608.05250)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05250v1 Announce Type: new Abstract: Multi-task supervised fine-tuning (SFT) often casts a heterogeneous data mixture as a single optimization problem, even though different tasks may reach their best generalization at different times. msft exposes this mismatch through task-wise roll-out, exclusion, and rollback, but its original formulation materializes the scheduler state as full-model checkpoints, making stage transitions costly to store, restore, and deploy. This paper introduces AuroSFT, a parameter-efficient framework that recasts the carried state of overfitting-aware multi-task SFT as a compact, mergeable adapter state. AuroSFT freezes the pretrained backbone, trains only injected adapters, rolls back adapter checkpoints at task-wise peaks, and continues on the remaining active mixture. At the layer level, each adapter applies an AuroRA-inspired adaptive nonlinear layer to a low-rank weight factor rather than to the sample representation. The resulting update remains linear in the input, rank-bounded, and exactly mergeable into the frozen projection. Under the retained-backbone comparison protocol, AuroSFT achieves 61.36% average accuracy, compared with 59.85% for the corresponding msft reference row, and obtains higher accuracy on all five backbones. Our code is available at the anonymous repository: https://anonymous.4open.science/r/AuroSFT-80D1.

57. [An Emerging Retail Portfolio Management Application: Personalized, Tax-Aware Reinforcement Learning with Natural Language Goals](https://arxiv.org/abs/2608.05255)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05255v1 Announce Type: new Abstract: Retail investors lack access to the kind of personalized, tax-aware portfolio management that institutional clients take for granted -- existing robo-advisors use static, rule-based allocation, and institutional-grade systems require account minimums and technology stacks unavailable to individual investors. We present a fully built, integration-tested application that closes this gap: a FastAPI backend and web dashboard that let a user describe an investment goal in plain language (e.g. "I want steady growth but need to sell some shares next month for a down payment"), routes that goal to one of six investment mandates, and produces a live, broker-integrated portfolio recommendation from athree-phase reinforcement learning system -- a self-supervised cross-asset encoder, a Mixture-of-Experts (MoE) allocation policy with a learned intent router, and a lightweight LoRA adapter that personalizes recommendations from an individual's revealed brokerage behavior without retraining the shared model. The system is functionally complete and integration-tested end-to-end against a live brokerage API (Alpaca, paper-trading mode), including multi-user authentication, a trust first preview-before-apply confirmation flow, daily email digests, and an auditable action-integrity chain, but has not yet been opened to real end-users; we report this honestly as an emerging, pre-deployment application with a concrete path to full deployment, alongside 14-day walk-forward backtests (bootstrapped confidence intervals included) as preliminary, pre-deployment validation rather than production performance. We also report several practical engineering lessons -- silently-inactive integration paths, hanging third-party API calls, and the value of end-to-end empirical verification over trusting checkpoint metadata -- that we believe generalize to other applied RL systems built on external, live data sources.

58. [Data-driven reconstruction of dynamical systems using Takens' Theorem, manifold learning, and universal function approximators](https://arxiv.org/abs/2608.05477)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05477v1 Announce Type: new Abstract: Embedding theorems can be used to provide theoretical guarantees about the relation between low-dimensional observations of a system and its full-dimensional state and dynamics. Such theorems do not, however, provide guidance on observable choice, embedding construction, or methodologies to learn the mapping between the embedding and full-dimensional state. In this work, we develop an algorithmic framework, TAkens Reconstruction (TAR), to analyze and reconstruct arbitrary dynamical systems from low-dimensional time series using an integration of Takens' Delay Embedding Theorem, manifold learning techniques, and universal function approximators. We validate TAR in applications to a variety of simulated and observed dynamical systems and use it to investigate how delay vector structure impacts reconstruction accuracy. In an ecological system, we show that simple predator-prey dynamics can be reconstructed with observations taken over a wide variety of embedding time scales. In molecular dynamics simulations of the protein Villin, we demonstrate how including multiple time delays of the same observable series can be used to improve reconstruction of systems with multiple characteristic time scales. In the trade record of Vanguard S&P 500, we show how the approach exposes underlying dynamical phenomenologies in the data and accurate return predictions over short time horizons without access to full-dimensional market observations. We develop and release an open-source software package to enable the application of TAR to arbitrary dynamical systems.

59. [Nitrogen Vacancy Centers in Hexagonal Diamond Exhibit Long Coherence Times](https://arxiv.org/abs/2608.05320)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05320v1 Announce Type: cross Abstract: We show that negatively charged nitrogen-vacancy (NV) centers in the hexagonal diamond polymorph lonsdaleite offer a route to spin qubits with enhanced coherence relative to their cubic-diamond counterparts. Using first-principles calculations, we examine two distinct defect configurations, AA, with the same symmetry as in cubic diamond and AB, with reduced symmetry. We find that the AB configuration of the NV center exhibits a finite transverse zero-field splitting, giving rise to an approximate fourfold enhancement of the Hahn-echo coherence time $T_2$ at zero magnetic field. The AA configuration, by contrast, closely reproduces the electronic structure and coherence properties of the cubic NV center. We further characterize the many-body electronic structure, vertical excitation energies, and photoluminescence spectra of both configurations, providing spectral fingerprints for their experimental identification. Our results establish symmetry-broken NV centers in lonsdaleite as promising candidates for quantum sensing and information science applications.

60. [A Damped Subspace Splitting Algorithm for Constrained Density Functional Theory](https://arxiv.org/abs/2608.05682)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05682v1 Announce Type: cross Abstract: Constrained density functional theory (CDFT) provides a powerful framework for describing electronically excited and charge-localized states, which underlie a broad range of physical and chemical phenomena. However, the discretized optimization problems arising from CDFT calculations remain challenging, owing to the presence of both the Stiefel manifold constraint and additional nonconvex quadratic constraints. Existing algorithms either fail to enforce the quadratic constraints with high accuracy or face convergence issues due to double-loop iterative structures. In this paper, we first derive a subspace-splitting reformulation that decouples the two groups of constraints, by exploiting the inherent rotation invariance and introducing a nonlinear subspace alignment constraint. Based on this reformulation, we propose a single-loop damped alternating direction method of multipliers, called DASSP. To the best of our knowledge, DASSP is the first algorithm for CDFT calculations with rigorous convergence guarantees. Each iteration of DASSP comprises a spectral minimization step, a projected gradient step, and a damped dual ascent step, all of which admit efficient implementations. Numerical results on synthetic and realistic CDFT problems demonstrate that DASSP attains high feasibility accuracy and exhibits favorable efficiency without compromising robustness. We expect that this work will pave the way toward reliable and efficient large-scale CDFT applications.

61. [Transverse quantum-state characterization of programmable electron optics](https://arxiv.org/abs/2608.05749)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05749v1 Announce Type: cross Abstract: Programmable electron optics -- electronically controlled phase plates -- underpin proposals from dose-efficient phase imaging to shaped-electron X-ray sources, nearly all assuming a pure, fully coherent delivered wave whose purity has never been measured. Here we reconstruct the transverse density matrix of a microelectromechanical electrostatic spiral phase plate by mixed-state ptychography, from one four-dimensional STEM scan per state and without added hardware. The delivered beam is substantially mixed: its purity falls from approximately 0.47 to approximately 0.24 as the applied bias grows, inconsistent with a fixed lateral source-blur model, while the real-space coherence width stays near 1 nm. The same scans calibrate the device in situ, allow virtual orbital-angular-momentum sorting and, through a partial-coherence-aware transfer theory, indicate that purifying the output could improve dose efficiency roughly threefold. One acquisition thus becomes a quantum-state acceptance test for programmable electron optics, supplying the purity and coherence that emerging phase-plate and diffractive-imaging schemes assume but leave unquantified.

62. [Minimization-based polynomial corrections for high-order curved boundaries on fixed and moving domains: assessment on finite volume and discontinuous Galerkin schemes](https://arxiv.org/abs/2608.05768)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05768v1 Announce Type: cross Abstract: In this work, we present two novel strategies to impose high-order boundary conditions on fixed and moving curved domains, approximated with piecewise affine triangulations. Achieving high-order accuracy on curved domains requires tackling both the PDE discretization error and the geometrical error simultaneously. While the former can be reduced by employing high-order numerical methods such as finite volume and discontinuous Galerkin, the latter demands either a high-order parametrization of the physical domain or a consistent approximation of the boundary conditions. Minimization-based approaches like the Reconstruction for Off-site Data (ROD) method allow one to skip the construction of high-order curvilinear meshes by defining high-order consistent boundary conditions on a computational boundary that does not match the physical one. The ROD approach mitigates the second-order geometrical error by retrieving a modified polynomial in each boundary cell, which enforces the boundary conditions exactly on the physical boundary. However, the standard ROD method requires the inversion of a local linear system, whose cost grows with the polynomial degree and mesh refinement. Inspired by a recent one-dimensional analysis, we show that ROD-type approaches can be recast as simple polynomial corrections, applicable without any linear system inversion. This greatly simplifies the development of minimization-based boundary treatments and reduces the associated computational cost. To prove the wide applicability of our strategy, we develop it within a Runge-Kutta discontinuous Galerkin framework and an ADER arbitrary-Lagrangian-Eulerian finite volume framework for compressible flows on fixed and moving domains. Several numerical experiments with Dirichlet and slip-wall boundary conditions are presented, with convergence analysis up to fifth order in both 2D and 3D.

63. [Jsymm: A Python package for symmetry analysis of exchange tensors in magnetic Hamiltonians](https://arxiv.org/abs/2608.05918)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.05918v1 Announce Type: cross Abstract: Symmetries of a crystal often restrict its physical properties. In particular, they determine possible forms of the tensors that describe interatomic exchange interaction, which governs a wide range of magnetic phenomena. Computationally demanding first-principles calculations of the exchange tensors can be greatly simplified by taking the symmetry constraints into account. Here, we present Jsymm, a Python package that derives the most general symmetry-compatible form of the exchange tensors directly from the crystallographic data. For any bond formed by magnetic ions, Jsymm produces the tensors of the Dzyaloshinskii-Moriya and anisotropic Heisenberg exchange interaction in symbolic form, as well as the tensors for all other bonds related to it by symmetry. This reduces the number of independent model parameters, dramatically lowering the computational cost of the ab initio calculations and preventing unphysical results arising from symmetry violations. The package accepts standard CIF files and provides a web interface in addition to an interactive text mode and a Python library. We demonstrate its utility on La$_2$CuO$_4$ and $\alpha$-Fe$_2$O$_3$, reproducing known symmetry constraints and revealing additional relations between components of the exchange tensors of different bonds.

64. [Explicit and Stable Pseudospectral Time-Domain Method for the F\"oppl-von K\'arm\'an Equations](https://arxiv.org/abs/2608.06139)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 07 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.06139v1 Announce Type: cross Abstract: Modal synthesis is a widely-used technique for simulation of musical instrument dynamics. In the linear case, a modal decomposition leads to an uncoupled system of damped and forced harmonic oscillators which can be efficiently solved by standard time-stepping methods. However, extensions to nonlinear problems are challenging due to the presence of products of modal expansions in the governing equations. In the case of the F\"oppl-von K\'arm\'an plate, the nonlinear coupling between the modes is described by a fourth-order tensor and is prohibitively expensive to evaluate in the modal domain. In this work, we propose a pseudospectral method in which the products are evaluated on a grid in the spatial domain while spatial derivatives are computed exactly in the modal domain. Discrete sine and cosine transforms between the modal and spatial domains are used to impose simply supported boundary conditions for the plate. Finally, we prove non-negativity of the nonlinear potential energy of the system and employ a scalar auxiliary variable technique for explicit and stable time integration in the modal domain. As a result, we reduce the computational cost of modal synthesis while preserving its advantages like a precise control over the simulated frequency range. Sound examples are presented.

65. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

66. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-05T15:25:28Z; Popularity: 717 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

67. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.66; Date: 2026-08-07T12:30:26Z; Popularity: 655 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

68. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-08-05T07:48:55Z; Popularity: 164 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

69. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-08-03T11:34:45Z; Popularity: 105 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

70. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

71. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

SkillTrace: Multi-Trace Provenance Auditing for LLM-Agent Skill Reuse

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.05204

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
