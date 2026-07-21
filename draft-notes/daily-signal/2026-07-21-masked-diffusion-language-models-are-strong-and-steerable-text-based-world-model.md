# Daily signal sidecar - 2026-07-21

## Selected Signal

- Title: Masked Diffusion Language Models are Strong and Steerable Text-Based World Models for Agentic RL
- URL: https://arxiv.org/abs/2607.16204
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Masked Diffusion Language Models are Strong and Steerable Text-Based World Models for Agentic RL
- Primary source: https://arxiv.org/abs/2607.16204
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

Total candidates reviewed after duplicate-source filtering: 64

1. [Masked Diffusion Language Models are Strong and Steerable Text-Based World Models for Agentic RL](https://arxiv.org/abs/2607.16204)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16204v1 Announce Type: new Abstract: Recent growth in reinforcement learning (RL) has surfaced a need for diverse, specialized training environments. Hand-curated environments with fixed task and reward difficulties become ineffective signals as model performance improves, and sparse rewards over long horizons induce mode collapse on specific workflows or tool structures. World models that simulate environment states have matched pure rollout performance, making them promising for scaling diversity on-demand. However, autoregressive (AR) world models suffer from a left-to-right bias preventing conditioning on globally interdependent state anchors such as tool schemas, prior turns, and expected outcomes. We (i) formalize text-based world modeling as a steerable transition-dynamics problem decomposed into initial state, task context, tool schemas, domain rules, and steering directives, and (ii) curate 239,403 grounded state-action trajectories spanning nine open-source environments and twelve frontier model families. We compare AR LMs and masked diffusion language models (MDLMs), showing MDLMs, via bidirectional anchor-aware denoising, achieve better coherence, groundedness, and empirically validated rollout diversity than LLMs over 4x their parameter size, at comparable inference latency. We introduce a plug-and-play GRPO training framework with deterministic state checks, and perform zero-shot transfer ablations on three OOD environments (ScienceWorld, ALFWorld, AppWorld) across three 1.2B-7B agent backbones (LFM2.5, Qwen3, Mistral), achieving up to 47% absolute gains over baselines without environment-specific fine-tuning. We further conduct behavioral analysis of failure modes under adversarial scenarios and human evaluation on realism, outcome correctness, and training utility. We open-source our work to encourage research in this direction.

2. [Rater State Bias in RLHF Preference Data: An Audit Framework](https://arxiv.org/abs/2607.16195)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16195v1 Announce Type: new Abstract: We identify a structured confound in Reinforcement Learning from Human Feedback (RLHF). Pairwise preference labels are intended to reflect the compared outputs, but they may also reflect the rater's state during annotation. Under sustained stressful or distressing conditions, raters' preferences may shift over time. As a result, preference data can encode rater state alongside judgments about response quality. These shifts differ from ordinary disagreement or random label noise. They are state dependent, can be shared across annotators working under similar conditions, and can propagate through reward modeling and policy optimization. We therefore propose rater state shift as a plausible and testable source of structured bias in RLHF preference data. This paper develops a hypothesis and an audit framework for studying this source of bias. We define rater state shift, rater state confound, and correlated rater state bias. We also define survival level emotional authenticity as a measurable response pattern using lexical, pragmatic, discourse, and safety related features. We analyze how correlated rater state bias can survive aggregation and enter learned reward signals. We derive five falsifiable predictions and effect size thresholds for an initial audit. Finally, we present an audit protocol and pilot study plan that can be applied to publicly available instruction tuned models. We do not infer the training history of any specific deployed model. Our goal is to isolate a plausible and testable source of structured bias in RLHF preference data.

3. [Generative Ontology Induction: Domain-Agnostic Schema Discovery from Document Corpora Using Large Language Models](https://arxiv.org/abs/2607.16201)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16201v1 Announce Type: new Abstract: Ontology engineering remains a critical bottleneck in knowledge-intensive AI systems. Existing automated approaches either depend on predefined schemas, operate within narrow domains, or produce unstructured outputs unsuitable for downstream pipelines. We introduce Generative Ontology Induction (GOI), a domain-agnostic framework that induces a generative blueprint - entities, dimensions, properties, relationships, and constraints - from a corpus of examples and exports it as a typed graph (six node types, seven edge types) in YAML/JSON. We introduce the Node Coverage Score, a novel evaluation metric that measures the fraction of structural ontology nodes (classes, properties, and dimensions) appearing in generated outputs. A controlled generative validation on four contrasting ontologies - a familiar Software Services Invoice schema, a custom Job Description Ontology, a confidential Pain-Management Clinical Visit Record Ontology, and a Professional Services Contract & Statement of Work Ontology - shows that GOI-prompted generation covers 95-100% of the structural backbone in every case; a generic three-field template holds at 97.8% on the invoice schema but drops to 52.2% on the Job Description Ontology, 62.2% on the Pain-Management ontology, and 78.3% on the Professional Services Contract ontology. The structural coverage holds regardless of how familiar the document type is to the model.

4. [Democratizing AI with Small Language Models: Structured Benchmarking and Parameter-Efficient Fine-Tuning for Local Deployment](https://arxiv.org/abs/2607.16202)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16202v1 Announce Type: new Abstract: AI democratization is not primarily a question of matching frontier-scale generality; it is a question of whether capable models can be selected, audited, and specialized under hardware and governance constraints that ordinary institutions can actually satisfy. This paper studies that problem through a controlled evaluation of nine open-weight language models between 135M and 3B parameters on a 1,085-example, 16-topic multiple-choice benchmark designed for structured local deployment. The benchmark emphasizes symbolic precision, constrained formatting, extraction, and short-horizon semantic decision making under a strict one-letter output protocol. A shared parameter-efficient fine-tuning pipeline then adapts a subset of models using 4-bit NF4 quantization with DoRA/LoRA-style adapters on an NVIDIA L4-class budget. In base evaluation, Qwen Coder 3B leads at 75.67% strict accuracy, followed by Qwen2.5 1.5B at 67.10%, Qwen3.5 2B at 64.98%, and Granite 3.3 2B at 64.61%. On the shared 108-example held-out fine-tuning split, adaptation improves Qwen Coder 3B by +26.85 points, SmolLM2 1.7B by +25.92, Qwen2.5 1.5B by +19.44, SmolLM2 360M by +10.18, and SmolLM2 135M by +5.55. Across ranking, topic-level heterogeneity, difficulty strata, failure composition, efficiency frontiers, and topic-conditioned transfer, the same conclusion recurs: a disciplined workflow of benchmark construction, cross-model evaluation, and low-cost specialization already makes a subset of sub-3B models viable as local experts for structured niche workloads.

5. [How to manage AI investments in the agentic era](https://openai.com/index/managing-ai-investments-in-agentic-era)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 14 Jul 2026 10:00:00 GMT
   - Summary: Learn how enterprises can manage AI investments in the agentic era by measuring useful work per dollar, improving efficiency, and scaling high-value workflows.

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

8. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

9. [Design and Validation of a Lightweight 1D CNN for Affective Touch Classification in Soft Plush Companions](https://arxiv.org/abs/2607.16196)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16196v1 Announce Type: new Abstract: Soft, sensorized companions offer a physically safe and emotionally intuitive interface for socially assistive technologies, yet their deformability and multichannel tactile sensing complicate the robust interpretation of human affect. This study presents a complete open-source MATLAB-based framework for the development and validation of compact deep learning models for affective touch recognition in soft interactive companions. As a primary contribution, a diverse FAIR-compliant dataset of 1326 labelled gesture sequences collected from 25 participants spanning children, teenagers, and adults is made publicly available, providing a reusable resource for future research in affective touch recognition. Through systematic architecture and hyperparameter exploration across 468 CNN models, the study identifies compact dilated one-dimensional convolutional neural networks (1D CNNs) as the most effective solution, with a 13.2k-parameter model achieving 75% test accuracy and 85% mean leave-one-subject-out cross-validation accuracy. Theoretical inference-time analysis shows that quantized deployment requires 3.2 MMAC per window, compatible with 20 Hz real-time operation on the target microcontroller. PC-based real-time simulation with the physical toy streaming sensor data demonstrates that the CNN resolves subtle social touches that the previous heuristic system failed to detect, whereas high-force negative interactions are captured more reliably by trivial threshold-based logic. The resulting hybrid inference pipeline - instantaneous heuristic filtering followed by CNN-based nuanced gesture classification - is proposed as the embedded deployment strategy. The study demonstrates that emotionally meaningful, privacy-preserving touch interpretation is computationally feasible for direct embedding within soft therapeutic companions, with hardware integration addressed in a forthcoming study.

10. [PlanFlip: Attacking Multi-Agent LLM Systems via Planning-Phase Prompt Injection](https://arxiv.org/abs/2607.16199)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16199v1 Announce Type: new Abstract: Multi-agent LLM systems increasingly rely on a Planner to decompose goals into sub-task sequences that downstream Executor and Critic agents execute and audit. We identify the planning phase as a critical attack surface: a single injection into the Planner's context achieves cascade amplification, corrupting all downstream sub-tasks simultaneously. We introduce PlanFlip, a framework comprising four planning-phase prompt injection attacks -- GoalSubstitution (PF-1), PriorityInversion (PF-2), ContextPollution (PF-3), and RoleConfusion (PF-4) -- each disguised as plausible tool outputs to evade keyword filters. Evaluating nine frontier LLMs across 3,479 episodes, we uncover three findings: (1) capability amplifies vulnerability -- GPT-5 achieves the highest attack success rate (ASR = 0.68), contradicting the assumption that stronger models are inherently more secure; (2) homogeneous pipelines exhibit a correlated-agent blind spot -- GPT-4o and Llama-3.3-70B show ASR near 0 yet Stealth = 1.00 and StepShift > 0, with attacks restructuring plans while the same-backbone Critic reports alignment (two independent judges confirm -0.20 to -0.32 semantic deviation, r = 0.943); (3) reasoning-augmented models resist injections -- DeepSeek-R1 achieves StepShift = 0.00 across all attacks. We propose GoalAnchorCheck (D1) and CrossAgentConsensus (D2), achieving detection rates up to 1.00 and outperforming same-backbone baselines in 15 of 16 cells. Our key insight: heterogeneous model diversity is a security prerequisite for multi-agent systems; redundancy within a homogeneous backbone provides no protection against planning-phase attacks.

11. [Deterministic Replay for AI Agent Systems](https://arxiv.org/abs/2607.16200)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16200v1 Announce Type: new Abstract: AI agent systems that couple large language models (LLMs) with external tools and APIs are inherently non-deterministic: LLM sampling variance, external API state, CDN infrastructure headers, and execution-environment noise collectively prevent any prior agent run from being faithfully re-executed. Existing observability platforms capture execution logs but cannot reproduce a run in isolation. We present agrepl, a developer-first CLI framework for deterministic replay of agent executions. agrepl intercepts all external interactions at the transport layer via a man-in-the-middle (MITM) proxy, serialises them as structured execution traces, and replays them in a strictly isolated environment with zero outbound network access. We formalise the agent execution model, define the request-key matching function K(s), and prove the determinism invariant. We introduce a noise-aware diff algorithm classifying HTTP header divergence into signal and noise tiers. Empirical evaluation across five workloads (n = 250 replay instances) demonstrates replay fidelity F = 1.0 and a median per-step latency reduction of 98.3%. agrepl is implemented in Go, ships as a single static binary, and is released under the MIT licence. Keywords: AI agents, deterministic replay, LLM debugging, reproducibility, MITM proxy, execution tracing, record/replay systems.

12. [It Takes 8 Tokens: Weak-to-Strong Off-Policy RL via Auxiliary Branches](https://arxiv.org/abs/2607.16205)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16205v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards has emerged as a standard approach for enhancing reasoning in large language models, which typically optimizes the policy by contrasting multiple self generated rollouts. However, we identify a critical support limited bottleneck in this paradigm: on challenging reasoning tasks, the target model's samples often exhibit semantic redundancy, converging into the same erroneous "reasoning basins" that offer negligible reward contrast for policy updates. In this paper, we propose to overcome this limitation through a weak to strong learning paradigm, where a policy's exploration is informed by a weaker but computationally efficient auxiliary model. We introduce W2SPO, an off policy RL method that injects short auxiliary segments often as brief as 8 tokens into intermediate target model trajectories and the target model then completes the reasoning path from these diverted states. Policy updates are restricted to these short inserted segments based on final verifiable rewards. Empirically, W2SPO achieves superior performance among evaluated 4B scale models on mathematical reasoning benchmarks, outperforming evaluated post trained baselines. Compared with vanilla GRPO under the same sampling budget, W2SPO improves Pass@1 from 62.3% to 64.2% while achieving a 3.55 times training speedup. These results suggest that weak auxiliary branches can induce stronger target reasoning policies by expanding local exploration support.

13. [Modeling rare-earth and energy materials supply chains under theoretical China-outer-Mongolia political reunification scenarios](https://arxiv.org/abs/2607.18019)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18019v1 Announce Type: new Abstract: Critical rare earth elements, lithium, copper, and coal underpin global clean energy transitions and advanced manufacturing, yet China faces persistent supply volatility and resource security risks amid fragmented cross-border mineral trade with Outer Mongolia. This paper constructs a dynamic partial equilibrium Stackelberg supply chain model spanning 2026-2036, integrating three geographic nodes: Outer Mongolia's mineral extraction sector, Baotou's rare earth processing hub in Inner Mongolia, and residual demand from the Rest of the World (RoW). The model endogenizes core mechanisms including mineral supply curves constrained by infrastructure stock, lagged capital accumulation, Leontief processing production functions, profit-driven investment, and optimal export tax policy maximizing China's discounted social welfare. Three comparative scenarios are calibrated and simulated: a baseline status-quo trade framework, deep Sino-Mongolian resource integration, and a delayed cross-border infrastructure counterfactual.

14. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.48; Date: 2026-07-21T14:35:17Z; Popularity: 2,478 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

15. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

16. [Safety and alignment in an era of long-horizon models](https://openai.com/index/safety-alignment-long-horizon-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 20 Jul 2026 10:00:00 GMT
   - Summary: OpenAI shares lessons from deploying long-running AI models, highlighting new safety risks, observed failures, and improved safeguards through iterative deployment.

17. [A scorecard for the AI age](https://openai.com/index/a-scorecard-for-the-ai-age)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 17 Jul 2026 10:00:00 GMT
   - Summary: Sarah Friar, CFO of OpenAI, introduces a practical AI scorecard to measure ROI through useful work, cost per successful task, dependability, and return on compute.

18. [Why teens deserve access to safe AI](https://openai.com/index/why-teens-deserve-access-safe-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 16 Jul 2026 16:00:00 GMT
   - Summary: Learn how OpenAI is making ChatGPT safer for teens with age-appropriate protections, learning tools, parental controls, and expert partnerships.

19. [The US is advancing AI safety through state and federal action](https://openai.com/index/advancing-ai-safety-through-state-and-federal-action)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 15 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines a “reverse federalism” approach to AI governance, where state laws help build a national framework for safe, democratic AI.

20. [GPT-Red: Unlocking Self-Improvement for Robustness](https://openai.com/index/unlocking-self-improvement-gpt-red)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 15 Jul 2026 10:00:00 GMT
   - Summary: Explore GPT-Red, OpenAI’s automated red teaming system that uses self-play to improve AI safety, alignment, and prompt injection robustness.

21. [How sales teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-sales-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how sales teams can use ChatGPT Work to create pipeline briefs, meeting prep packets, forecast reviews, account plans, and stalled-deal diagnoses from real work inputs.

22. [How data science teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-data-science-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how data science teams can use ChatGPT Work to build root-cause briefs, impact readouts, KPI memos, scoped analyses, and dashboard specs from real work inputs.

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

25. [Introducing Cosmos 3 Edge](https://huggingface.co/blog/nvidia/cosmos3edge)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 20 Jul 2026 15:58:51 GMT

26. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

27. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

28. [What building Shippy taught us about building agents](https://huggingface.co/blog/allenai/shippy-tech-blog)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:29:41 GMT

29. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

30. [Welcome Inkling by Thinking Machines](https://huggingface.co/blog/thinkingmachines-inkling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

31. [Introducing Real World VoiceEQ: Measuring the human quality of voice AI](https://huggingface.co/blog/real-world-voiceeq)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

32. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

33. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

34. [Some Large Language Models Exhibit Consistent Risk Attitudes](https://arxiv.org/abs/2607.16197)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16197v1 Announce Type: new Abstract: As artificial intelligence systems are deployed in open-ended, high-stakes settings, a critical dimension remains unmeasured: how perceived risk is translated into action. We test whether large language models (LLMs) exhibit systematic and consistent risk attitudes under uncertainty. We introduce a cross-domain framework that decouples contextual risk belief from categorical decision, and apply it to six representative LLMs and 100 human participants across spatial navigation, clinical triage, and financial allocation tasks. Using regression models, we extract each agents belief-to-decision mapping and quantify risk sensitivity and risk attitude bias. We find that most tested LLMs exhibit (i) robust intra-task consistency, indicating stable mappings from contextual belief to risk decision within a fixed task domain; (ii) cross-domain rank-order stability, preserving relative risk posture across tasks; and (iii) a convergence toward a restricted risk-attitude distribution relative to the broader human baseline. These results reveal risk attitude as a stable and previously uncharacterized dimension of LLM behavior, establishing a foundation for evaluating and aligning AI systems in open-ended decision-making and motivating further investigation into the origins of these intrinsic behavioral dispositions.

35. [A Survey on GNN-based Link Prediction: Techniques, Applications, and Challenges](https://arxiv.org/abs/2607.16198)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16198v1 Announce Type: new Abstract: Graph Neural Networks (GNNs) have emerged as the leading paradigm for link prediction, enabling the inference of missing connections and the anticipation of potential future links. However, existing reviews lack systematic exploration specifically targeting underlying GNN architectures and diverse graph structures. To address this critical gap, this paper provides a comprehensive review of GNN-based link prediction from a novel and dedicated GNN perspective. We propose an innovative taxonomy that categorizes recent advancements based on techniques and applications. From a technique perspective, we focus on key GNN encoder architectures, including GCN-based, GAE-based, GAT-based, and GFormer-based methods, discussing their strengths and limitations. From an application perspective, we highlight prominent use cases of link prediction in knowledge graphs and recommendation systems, demonstrating their real-world impact. In addition, we examine the current challenges and discuss promising future directions.

36. [DocOCR-Eval: A Correction-Based Framework for OCR Tool Selection Without Ground Truth](https://arxiv.org/abs/2607.16203)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16203v1 Announce Type: new Abstract: Document parsing is a foundational step for document understanding tasks such as visual question answering and key information extraction, as it transforms unstructured scanned images into structured representations by extracting textual, visual, and layout information. While numerous Optical Character Recognition (OCR) engines and multimodal large language models (MLLMs) have been developed for this purpose, selecting an appropriate document parsing solution for a given document collection remains challenging, particularly in label-scarce settings. In this work, we conduct a systematic evaluation of text recognition performance across a diverse set of OCR engines and state-of-the-art MLLMs on multiple scanned document benchmarks spanning different domains and languages. Motivated by the limited contextual reasoning capabilities of many OCR engines and the high cost of manual annotations, we propose DocOCR-Eval, an annotation-free evaluation framework for automatic OCR assessment and selection. DocOCR-Eval employs a three-staged correction and ranking strategy to approximate annotation-based tool ordering without ground-truth labels. We show that aggregating across multiple MLLMs progressively improves alignment with annotation-based rankings. Extensive experiments further demonstrate that reliable OCR tool selection can be achieved in realistic, label-limited settings, providing practical guidance for deploying document parsing systems across diverse real-world document collections.

37. [anyakrakusuma: A Python Library for Entropic Schr\"odinger Bridges on Idealized Geometries](https://arxiv.org/abs/2607.18184)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18184v1 Announce Type: new Abstract: We present anyakrakusuma, an open-source Python library that solves the discrete static Schr\"{o}dinger bridge problem, the entropically regularized counterpart of optimal transport, through a log-domain Sinkhorn--Knopp iteration and reconstructs the entropic interpolation between two empirical point clouds. The solver is paired with a diagnostic pipeline that characterizes the optimal coupling and the intermediate distributions through information-theoretic and geometric measures. We exercise the library on four idealized planar cases spanning a circle-to-circle dilation, a spiral-to-mixture fragmentation, a rigid reorientation of two moons, and a Lissajous-to-trefoil deformation. The log-domain formulation is necessary rather than merely convenient at the parameters studied, where the cost-to-regularization ratio reaches four hundred and the Gibbs kernel underflows double precision across most of its range; the iteration nonetheless attains a marginal residual of $10^{-9}$ and unit marginal fidelity in every case. Residual histories decay geometrically over approximately eight decades at per-iteration contraction factors between $0.966$ and $0.976$, which are local rates near the fixed point that lie many orders of magnitude below the worst-case Hilbert-metric bound. The covariance analysis recovers an imposed ninety-degree reorientation to within $0.07^\circ$, roughly forty times smaller than its uncertainty, across a masked interval of near-isotropy on which the principal axis is unobservable. The diagnostics are reported with explicit attention to the regimes in which each is well defined, including the differential entropy, which is meaningful only on the open interpolation interval. The presented cases are constructed rather than measured; quantitative application to empirical point clouds requires further study.

38. [Interpolative Separable Density-Fitting for Transcorrelated Hamiltonians](https://arxiv.org/abs/2607.17314)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.17314v1 Announce Type: cross Abstract: The transcorrelated (TC) method dramatically accelerates the convergence of correlated calculations toward the complete-basis-set (CBS) limit by folding a Jastrow correlator into the Hamiltonian via a similarity transformation, incorporating the electron--electron cusp into the effective interaction. We make the TC framework practical for large systems and flexible, multi-center correlators by compressing the grid-evaluated TC integrals with the interpolative separable density-fitting (ISDF) approximation, combined with the effective two-body (xTC) treatment of the three-body operator. This low-rank representation reduces storage and integration costs by orders of magnitude, and a multi-GPU implementation with automatic differentiation of the correlator makes the construction routine for large basis sets. We demonstrate the resulting ISDF-xTC-CCSD method on the linear hydrogen chain, reaching the joint thermodynamic and CBS limits with basis sets up to cc-pV5Z in agreement with state-of-the-art many-body references to within about 1~mHa/atom, and on the benzene ground-state energy with up to 1200 orbitals (cc-pCV5Z), where the method attains state-of-the-art accuracy at the coupled cluster singles and doubles level and its CBS extrapolation is markedly more robust than that of conventional coupled-cluster methods.

39. [Response-function-optimized phase field modeling of solute trapping and solute drag in rapid alloy solidification](https://arxiv.org/abs/2607.17370)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.17370v1 Announce Type: cross Abstract: Quantitative prediction of rapid solidification microstructures requires phase field models that represent the velocity dependence of interfacial properties, including solute partitioning, kinetic liquidus response, solute drag, and kinetic undercooling. These response functions control both microsegregation and morphology selection, but are difficult to prescribe accurately in phase field simulations that employ large interfaces for numerical efficiency. We introduce an optimization-based calibration strategy that embeds target sharp-interface response functions into a dilute alloy phase field formulation by treating the interfacial diffusivity interpolation function as a response-matching degree of freedom. The optimized diffusivity functions are obtained from one-dimensional steady-state phase field solutions, constrained to reproduce prescribed continuous-growth-model targets for velocity-dependent solute trapping and drag-modified liquidus kinetics. We demonstrate the calibrated model's accuracy and versatility in dilute Al-Cu by reproducing the prescribed response functions for intermediate solute drag coefficients relevant to rapid solidification. Two-dimensional directional-solidification simulations are conducted to isolate the effect of drag at fixed composition, thermal gradient, and pulling velocity. We show that increasing solute drag shifts the solidification morphology from dendritic/cellular growth to mixed dendritic-banded structures, and finally to predominantly banded growth. We extend the formulation to dilute multicomponent alloys, enabling independent specification of equilibrium partition coefficients and liquidus slopes for multiple solute species. The framework provides a route for incorporating experimentally, theoretically, or atomistically informed nonequilibrium interface kinetics into quantitative phase field simulations of rapidly solidified alloys.

40. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-07-21T12:43:47Z; Popularity: 1,498 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-19T16:23:38Z; Popularity: 473 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-21T01:04:05Z; Popularity: 279 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-21T07:06:02Z; Popularity: 213 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

44. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

45. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

46. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

47. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

48. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

49. [Reinforcement Learning-Guided NSGA-II Enhanced with Gray Relational Coefficient for Multi-Objective Optimization: Application to NASDAQ Portfolio Optimization](https://arxiv.org/abs/2607.16194)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16194v1 Announce Type: new Abstract: In modern financial markets, decision-makers increasingly rely on quantitative methods to navigate complex trade-offs among multiple, often conflicting objectives. This paper addresses constrained multi-objective optimization (MOO) with an application to portfolio optimization for minimizing risk and maximizing return. To address existing gaps, we propose a novel reinforcement learning (RL)-guided non-dominated sorting genetic algorithm II (NSGA-II) enhanced with gray relational coefficients (GRC), termed RL-NSGA-II-GRC, which combines an RL agent controller and GRC-based selection to improve convergence and diversity of Pareto fronts. The agent adapts evolutionary parameters online using metrics of hypervolume, feasibility, and diversity, while the GRC tournament operator ranks parents via a unified score considering dominance rank, crowding distance, and proximity to ideal reference. We evaluate the framework on the Kursawe and CONSTR benchmarks and a NASDAQ portfolio application. On the benchmarks, RL-NSGA-II-GRC achieves convergence improvements of about 5.8% and 4.4% over NSGA-II, while preserving well-distributed non-dominated solutions. In the portfolio application, it produces a smooth, densely populated efficient frontier supporting identification of the maximum Sharpe ratio portfolio (annualized Sharpe =1.92) and utility-optimal portfolios for different risk-aversion levels. The main contributions are three-fold: 1) we propose an RL-NSGA-II-GRC method integrating an RL agent into the evolutionary framework to adaptively control parameters via generational feedback; 2) we design a GRC-enhanced binary tournament operator providing a comprehensive indicator to guide the search toward the Pareto front; 3) we demonstrate, on benchmark MOO and a NASDAQ case study, that the method delivers improved convergence and well-populated frontiers supporting actionable insights.

50. [Fully-sensorized smart-eyewear platform for on-device Machine Learning](https://arxiv.org/abs/2607.16222)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16222v1 Announce Type: new Abstract: This paper presents ARGO, a smart eyewear platform designed to bridge ergonomic comfort, high computational throughput, and energy efficiency. Unlike cloud-dependent solutions, ARGO leverages the STM32N6 microcontroller and its integrated Neural Processing Unit (NPU) to enable on-device machine learning, minimizing latency and preserving user privacy through local data processing. The primary contribution lies in the holistic co-design of hardware, firmware, and artificial intelligence, centered on the deployment of an optimized YOLOv11 model for real-time urban obstacle recognition. To ensure compatibility with the target NPU, we introduce Head-wise Parallel Attention (HPA), an architectural refinement that enables efficient accelerator execution while preserving the original computational logic. The model is trained on the Walking On The Road (WOTR) dataset, and the final deployed configuration achieves an mAP50-95 of 24 under strict memory constraints, with a memory footprint of only 2.483 MB. The platform integrates a multimodal sensor suite, RGB cameras, Time-of-Flight sensors, microphones, and ambient sensors, and delivers 10 FPS at a continuous autonomy of ~113 minutes on a 200 mAh battery. These results demonstrate the feasibility of a high-performance, privacy-preserving, and socially acceptable assistive device, and highlight how competitive edge AI solutions increasingly demand tightly integrated, multidisciplinary co-design approaches.

51. [Token-Level Cross-Modal Transformer with Contrastive Multi-Task Learning for Breast Cancer Subtype Classification and Survival Prediction](https://arxiv.org/abs/2607.16233)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16233v1 Announce Type: new Abstract: Integrating heterogeneous genomic and clinical modalities for joint cancer subtype classification and survival prediction remains a key challenge in precision oncology. Existing approaches suffer from three limitations: (1) they treat each modality as a monolithic feature vector, precluding fine-grained token-level interactions across modalities; (2) cross-modal fusion is typically performed through linear weighting or late averaging rather than structured token exchange; and (3) survival and classification objectives are optimized independently, missing a joint regularization signal.

52. [Diffusion-corrected Autoregressive Fourier Neural Operator for Droplet Evolution Prediction](https://arxiv.org/abs/2607.16238)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16238v1 Announce Type: cross Abstract: Predicting droplet evolution in material jetting, or Inkjet Printing (IJP), is essential for maintaining printing quality. However, long-horizon forecasts remain challenging due to error accumulation and the complex coupling of process variables. In this work, we introduce the Diffusion-corrected Auto-Regressive Fourier Neural Operator (DiffARFNO), a two-stage framework that combines an autoregressive Fourier-MIONet with a conditional Denoising Diffusion Implicit Model (DDIM) corrector. Fourier-MIONet is trained as a coarse predictor and deployed autoregressively for long-horizon forecasting. In the second stage, a DDIM-based conditional corrector refines the coarse prediction within each sliding window through efficient iterative denoising. By combining coarse predictions from Fourier-MIONet with a DDIM corrector that restores fine details, DiffARFNO aims to provide high-fidelity predictions for long-horizon forecasts. Extensive experiments on droplet datasets from ANSYS Fluent demonstrate that DiffARFNO significantly outperforms existing state-of-the-art models.

53. [Dynamics of phase space vortices in Vlasov plasmas with ion scale inhomogeneity : I Constant frequency drive study](https://arxiv.org/abs/2607.16779)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16779v1 Announce Type: cross Abstract: Formation dynamics and stability starting from various phase space vortex (PSV) or Bernstein-Greene-Kruskal (BGK) structures i.e electron acoustic wave (EAW), Langmuir (LAN) waves is investigated in the presence of a quasi-stationary ion scale (QSIS) inhomogeneity using high resolution Vlasov-Poisson simulations with VPPM-OMP 1.0 solver. In a one dimensional, collisionless, periodic, unmagnetized plasma with kinetic ions and kinetic electrons, we first create a QSIS inhomogeneity using low amplitude electric field drive at ion acoustic (IA) frequency with k eq = mk min [where m = 2 is the mode number, k min corresponds to the longest scale in the system]. While creating QSIS inhomogeneity, we have demonstrated the existence of ion trapped particle instability (ITPI) which saturates as the amplitude of sideband modes become comparable to that of the primary nonlinear mode (quite analogous to the trapped particle instability in large amplitude electron plasma waves). Also, mode transition from m = 2 to m = 1 is observed during relaxation period due to the energy cascading process. Finally, an electron acoustic (EA) perturbation of scale k p = k min [m = 1] is applied on top of the QSIS inhomogeneity to determine its response in the presence of background ion scale inhomogeneity. Some key observations such as formation of transient PSV, wave-wave mode coupling interaction and various frequency generation alongwith comparative investigation with EA perturbation launched in the absence of ion scale inhomogeneity is also reported.

54. [Lattice initialisation and finite-size effects of non-equilibrium molecular dynamics simulations for heat transfer across graphene-copper interfaces](https://arxiv.org/abs/2607.16783)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16783v1 Announce Type: cross Abstract: We study thermal transport across copper-graphene-copper interfaces using Non-Equilibrium Molecular Dynamics (NEMD), focusing on the influence of finite domain length and domain configuration, including lattice initialisation and associated graphene wrinkling, on the predicted thermal conductivity and Kapitza resistance. In the literature, NEMD simulations identified trends in the Kapitza resistance of graphene-copper interfaces. However, the simulation outcomes and reliability may depend heavily on configuration choices that are underexplored in the literature. We identify a strong sensitivity of the Kapitza resistance to domain configuration choices that affect the lattice constants and atomic density. We show that two conventional lattice initialisation strategies yield a factor of two difference in the Kapitza resistance, despite differences of only a few per cent in the lattice parameters. This behaviour is accompanied by strain-dependent shifts in the graphene and copper phonon spectra, and by increased phonon overlap at lower strain. Counter to conventional expectations, greater phonon-mode overlap coincides with higher Kapitza resistance, showing that spectral overlap alone cannot capture the interfacial heat-transfer dynamics. We suggest that in lattices initialised with lower residual strain, a damping boundary layer develops near the interface, and increases thermal resistance, as indicated by increased local structural disorder and local spectral broadening over a wider interfacial region. Beyond strain- and density-related effects associated with the lattice constants, Kapitza resistance shows no significant dependence on domain length or boundary temperature enforcement in this study. By contrast, the copper lattice conductivity exhibits clear domain-size and temperature dependence, consistent with phonon mean-free-path limitations and supported by phonon spectral analysis.

55. [Dynamics of phase space vortices in Vlasov plasmas with ion scale inhomogeneity : II Chirped frequency drive study](https://arxiv.org/abs/2607.16786)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16786v1 Announce Type: cross Abstract: In Part I of the companion paper [Ref Part I], we have extensively discussed about the creation of quasi-stationary ion scale (QSIS) inhomogeneity using a constant frequency external drive at ion-acoustic time scales, resulting in ion trapped particle instability (ITPI), wave-wave mode coupling interaction and energy cascading. QSIS thus formed is perturbed by applying small amplitude electron acoustic (EA) mode leading to the several key plasma response features. In this Part II, using electrostatic, unbounded, OpenMP Vlasov-Poisson solver i.e VPPM-OMP 1.0, we have investigated the formation of various phase space vortices (PSV) (generated using two step or one step time dependent downward frequency chirping drives) in the presence of background QSIS inhomogeneity obtained in Part I. In addition, we have also performed one to one comparison of individual cases with their homogeneous counterparts with exact simulation parameters. In presence of QSIS inhomogeneity, we have observed interesting phenomenon such as early onset of Langmuir (LAN) mode, suppression of PSV sizes, omission of PSVs when compared to the homogeneous cases. Also, for different two step or one step downward chirp perturbation cases, particle trapping or untrapping fractions and its response to the increasing chirp intervals are respectively reported.

56. [Quantitative Benchmarking of a Split-Field PML FDTD Solver: Slit Diffraction, and Scattering from PEC and Dielectric Cylinders](https://arxiv.org/abs/2607.17360)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.17360v1 Announce Type: cross Abstract: This paper presents a two-dimensional TMz finite-difference time-domain (FDTD) solver based on Yee's scheme for modeling radiation from an infinitely long z-directed line current, with the open region truncated by a Berenger split-field perfectly matched layer (PML). After validating cylindrical-wave propagation and negligible late-time reflections in free space, the solver is applied to three inhomogeneous configurations: (i) diffraction through a one-cell-thick perfectly electrically conducting (PEC) sheet with single and double slits; (ii) scattering from infinitely long PEC cylinders of circular and rectangular cross section; and (iii) scattering from infinitely long dielectric cylinders of varying cross section and permittivity. Beyond qualitative field maps, the diffraction case is characterized quantitatively: a steady-state phasor extracted by a running discrete Fourier transform yields the transmitted intensity, from which the fringe visibility and the far-field pattern are computed and compared against the closed-form Fraunhofer prediction. The single- and double-slit cases are cleanly separated by a visibility that rises from near zero to near unity, and the double-slit interference maxima agree with the grating condition arcsin(m \lambda_0 / d) to within a fraction of a degree. For dielectric cylinders, the field penetrates the obstacle with the expected reduced internal wavelength \lambda_0 / \sqrt{\epsilon_r}, and the scattered field strength grows with permittivity contrast. A reference-subtraction method isolates the scattered field throughout. The results confirm that the FDTD-PML framework accurately captures open-region diffraction and geometry- and material-dependent scattering.

57. [Reconfigurable Graphene-Metasurface Analysis via an Eigenmode-Free Method-of-Lines Formulation](https://arxiv.org/abs/2607.17372)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 21 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.17372v1 Announce Type: cross Abstract: We present an eigenmode-free (EF) method-of-lines (MoL) formulation for the fast synthesis of reconfigurable graphene metasurfaces (MS). As the complexity of MSs increases, analysis by full-wave methods becomes challenging. The MoL is a considerably faster semi-analytical method where the electromagnetic equations are solved analytically along the direction perpendicular to the MS layers and numerically on the MS plane, thereby substantially decreasing the degrees of freedom (DoFs). In existing MoL formulations, the eigendecomposition of the system matrix is calculated numerically, which becomes computationally demanding for MSs with larger cross-sections. To overcome this limitation, we introduce an EF MoL that calculates the S-parameter matrix by analytical closed-form expressions. We demonstrate the potential of the EF MoL by analyzing a reconfigurable graphene MS absorber. The EF MoL shows excellent agreement in the absorbance and is two orders of magnitude faster than the finite element method.

58. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-20T11:02:13Z; Popularity: 749 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

59. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-20T05:31:53Z; Popularity: 705 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

60. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.63; Date: 2026-07-21T06:13:31Z; Popularity: 630 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

61. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.15; Date: 2026-07-21T03:12:15Z; Popularity: 155 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

62. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-20T06:05:17Z; Popularity: 102 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

63. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-16T09:54:45Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

64. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Masked Diffusion Language Models are Strong and Steerable Text-Based World Models for Agentic RL

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.16204

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
