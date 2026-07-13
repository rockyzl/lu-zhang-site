# Daily signal sidecar - 2026-07-13

## Selected Signal

- Title: Long-Horizon-Terminal-Bench: Testing the Limits of Agents on Long-Horizon Terminal Tasks with Dense Reward-Based Grading
- URL: https://arxiv.org/abs/2607.08964
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: Long-Horizon-Terminal-Bench: Testing the Limits of Agents on Long-Horizon Terminal Tasks with Dense Reward-Based Grading
- Primary source: https://arxiv.org/abs/2607.08964
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

1. [Long-Horizon-Terminal-Bench: Testing the Limits of Agents on Long-Horizon Terminal Tasks with Dense Reward-Based Grading](https://arxiv.org/abs/2607.08964)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08964v1 Announce Type: new Abstract: AI agents have become capable of autonomously completing short, well-specified tasks. However, existing terminal benchmarks largely focus on simple problems that finish within minutes and are evaluated only by their final outcome. This setup overlooks intermediate progress and partial solutions, yielding sparse reward signals and an incomplete picture of agent capability. We introduce Long-Horizon-Terminal-Bench, a terminal benchmark of 46 long-horizon tasks spanning nine categories, including experiment reproduction, software engineering, multimodal analysis, interactive games, and scientific computing. Each task follows a Terminal-Bench-style setup with a reference solution or simulation engine, but is further decomposed into fine-grained graded subtasks. This design enables dense intermediate rewards and partial credit, allowing evaluation to capture not only whether an agent reaches the final goal, but also how far it progresses on open-ended workflows. Tasks in Long-Horizon-Terminal-Bench typically require hundreds of episodes and minutes to hours of execution, stressing long-horizon planning, long-context management, and iterative debugging rather than one-shot problem solving. We evaluate 15 frontier models and find that agents consume on average 9.9M tokens per task, with roughly 231 episodes and 85.3 minutes of execution time per run, making Long-Horizon-Terminal-Bench more demanding than prior terminal-based benchmarks. Even the strongest tested model achieves 15.2% pass@1 at a partial-reward threshold of 0.95 and 10.9% at a perfect-reward threshold of 1.0, while the mean pass rate across models is 4.3% and 1.7% under the two thresholds, respectively. These results reveal headroom for improvement. We further analyze failure modes and error patterns, and release Long-Horizon-Terminal-Bench to support future progress on long-horizon terminal agents.

2. [ARCANA: A Reflective Multi-Agent Program Synthesis Framework for ARC-AGI-2 Reasoning](https://arxiv.org/abs/2607.09059)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09059v1 Announce Type: new Abstract: We present ARCANA, a collaborative multi agent framework for solving ARC AGI 2 tasks under strict test time and hardware constraints. ARCANA decomposes each task into iterative perception, hypothesis generation, symbolic execution, and reflective refinement. A perceptual grounding agent builds object centric scene graphs from raw grids, a latent program policy proposes diverse DSL programs, a symbolic executor verifies candidates on demonstrations, and a reflective agent synthesizes failure driven feedback for the next turn. These agents communicate through a shared differentiable blackboard and are scheduled by a learned meta controller. The design combines structured program search with adaptive multi turn correction, improving reasoning efficiency and solution quality on challenging abstract transformation tasks.

3. [L-MAD: A Systematic Evaluation of Multi-Agent Debate Structures in Legal Reasoning](https://arxiv.org/abs/2607.09099)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09099v1 Announce Type: new Abstract: While multi-agent debate (MAD) frameworks have shown significant potential in general reasoning, their effectiveness in highly structured, knowledge-heavy legal domains remains under-explored. In this work, we introduce the Legal Multi-Agent Debate (L-MAD) framework to systematically evaluate different debate structures and aggregation methods within Legal Textual Entailment. By assigning distinct expert personas to multiple agents, L-MAD improves upon strong single-agent baselines by up to 8\%. Furthermore, analyzing how debate scales reveals a clear trade-off: increasing the agent population reduces inconsistency and improves accuracy, whereas extending discussion rounds induces a detrimental \textit{over-deliberation drift} where agents reinforce each other's mistakes. Ultimately, our findings outline the practical boundaries and safety margins of deploying collaborative multi-agent systems in high-stakes legal reasoning environments.

4. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

5. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

6. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

7. [Run AI workloads on any cloud, store on Hugging Face: zero-egress storage with SkyPilot](https://huggingface.co/blog/skypilot-hf-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

8. [Interval Certifications for Multilayered Perceptrons via Lattice Traversal](https://arxiv.org/abs/2607.08773)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08773v1 Announce Type: new Abstract: In this work we present a rigorous theoretical framework to a foundational problem of AI safety, namely adversarial robustness. In particular, we show that the adversarial robustness problem can be reduced to a lattice traversal problem. Each element of this lattice corresponds to an interval, i.e., an axis-aligned hyper-rectangle, containing an input point $\mathbf{x}$. Consider a multilayered perceptron classifier (MLP). An interval $I$ constitutes a sound certification if $\mathbf{x} \in I$ and $\mathbf{x}$ can be freely perturbed in $I$ without changing the MLP's prediction. Complementarily, an interval $I$ constitutes a complete certification if $\mathbf{x} \in I$ and when $\mathbf{x}$ moves outside of $I$ the MLP's prediction is guaranteed to change. While the sound certification problem corresponds to the well-studied adversarial robustness, complete certifications have not been examined in the literature. We develop lattice traversal operators, which we apply in a refine & verify iterative scheme. Using formal MLP verifiers, sound maximality and complete minimality are guaranteed. Moreover, we examine objective optimization problems. There we discover some interesting asymmetries. For complete certifications, the minimum solution is obtained in polynomial oracle calls. This does not hold for sound certifications, where we prove strong intractability results. Additionally, we examine optimization problems in symmetric intervals (i.e., $\ell_\infty$-spheres), where we provide logarithmic algorithms. Finally, we present an empirical evaluation, using the novel ParallelepipedoNN system.

9. [CogniConsole: Externalizing Inference-Time Control as a Formal Abstraction for Reliable LLM Interactions](https://arxiv.org/abs/2607.08774)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08774v1 Announce Type: new Abstract: Reliability in large language model (LLM) systems is typically framed as a function of model capability. We challenge this by demonstrating that reliability is significantly influenced by \emph{inference-time control} -- the computational layer governing task framing and context selection. We introduce \emph{CogniConsole}, an architectural instantiation that externalizes this control into a structured interface combining programmatic coordination with bounded prompt-based reasoning. Through \emph{controllability-oriented probes} ($N=489$) in a multi-step interactive environment, we show that increasing structural scaffolding -- from unstructured to fully scaffolded -- \textbf{systematically reduces output variance and failure rates under a fixed model architecture}. Our results indicate that many observed failure modes, such as context drift and inconsistent constraint adherence, arise from under-specified control rather than insufficient capability. This work provides an empirical basis for treating inference-time control as a first-class abstraction, opening new directions for designing and evaluating LLM systems beyond scaling alone.

10. [GATS: Graph-Augmented Tree Search with Layered World Models for Efficient Agent Planning](https://arxiv.org/abs/2607.08894)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08894v1 Announce Type: new Abstract: Large Language Model (LLM) agents have shown promise in multi-step planning tasks, but existing approaches like LATS (Language Agent Tree Search) and ReAct rely heavily on LLM inference during planning, leading to high computational costs and stochastic behavior. We present \textbf{GATS} (Graph-Augmented Tree Search), a planning framework that combines systematic UCB1-based tree search with a layered world model to eliminate LLM calls during inference while achieving superior planning performance. Our three-layer world model integrates: (L1) exact symbolic action matching, (L2) statistics learned from execution logs, and (L3) LLM-based prediction for unknown actions. On synthetic planning tasks with branching paths and dead-ends, GATS achieves \textbf{100\% success rate} compared to 92 % for LATS and 64\% for ReAct. On a comprehensive stress test spanning 12 challenging scenarios -- including coding workflows, web navigation, and long-horizon tasks -- GATS maintains \textbf{100\% success} while LATS drops to 88.9 % and ReAct to 23.9%. GATS requires \textbf{zero LLM calls per task} during planning (vs. 37 per task for LATS) and produces deterministic plans with zero variance across runs. Our results demonstrate that systematic search with learned world models can substantially outperform LLM-guided exploration for agent planning.

11. [Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls](https://arxiv.org/abs/2607.09076)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09076v1 Announce Type: new Abstract: Cyberattacks on operational technology are increasingly causing costly downtime and physical damage, exposing the limitations of traditional rule-based monitoring in industrial IoT environments. While Large Language Models (LLMs) have strong semantic reasoning abilities to assist in decision support, their hallucinatory nature presents unacceptable safety liabilities for closed-loop control. This paper introduces a neuro-agentic control framework, a novel architecture that couples an LLM-based planner (i.e., such as Gemini 2.5 Flash-Lite) with a pre-trained Time-Series Foundation Model (TimesFM), to achieve physics-grounded autonomous defense. The paper introduces a ``Counterfactual Physics Injection'' mechanism that simulates the impact of LLM-proposed interventions within the numerical latent space of the foundation model before actuation, while allowing the system to reject hallucinatory or unsafe actions. Evaluated on an industrial dataset (e.g., the Secure Water Treatment (SWaT)) in the context of stochastic attack scenarios, the framework exhibited better performance compared to LSTM and TCN baselines. The Neuro-Agentic Loop prevented five breaches (33.3%) below the threshold versus LSTM (26.7%) and TCN (13.3%), with zero physically invalid (hallucinated) actions executed. These results demonstrate the efficacy of using foundation models as deterministic ``Sentinels'' to safeguard agentic AI in critical infrastructure.

12. [MedRealMM: A Real-World Multimodal Benchmark for Chinese Online Medical Consultation](https://arxiv.org/abs/2607.09142)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09142v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed in online medical consultation, yet existing benchmarks remain poorly aligned with real clinical practice. Many rely on synthetic conversations or patient simulators, omit patient-uploaded medical images, or evaluate open-ended clinical responses using multiple-choice or lexical-overlap metrics that poorly reflect clinical quality. We introduce \textbf{MedRealMM}, a large-scale benchmark for multimodal online medical consultation built from de-identified patient-doctor interactions collected from a nationwide Chinese internet hospital. MedRealMM uses a Multimodal Clinical Challenge Point (MCCP) extraction framework to identify clinically demanding moments in authentic consultation trajectories and converts each into a standardized next-response generation task while preserving the preceding text-image context. Each instance is paired with a case-specific rubric refined by physicians that rewards clinically desirable behaviors and penalizes unsafe, unsupported, or contradictory responses. The current release contains 5,620 real-world multimodal cases spanning 64 clinical departments. We evaluate 19 general-purpose and medical-specialized LLMs, including text-only and multimodal systems. Our results show that image information is critical for reliable clinical performance and that current frontier models remain below the online physician response. Although some frontier models satisfy as many or more positive clinical criteria than physicians, they trigger more negative criteria, indicating that safety-sensitive error avoidance remains a central bottleneck. MedRealMM offers a realistic and reproducible benchmark for evaluating multimodal medical reasoning in real-world online consultation. The dataset will be publicly available on Hugging Face at https://huggingface.co/datasets/jdh-algo/MedRealMM.

13. [Scale-Bridging Phase-Field Modeling of Microstructure Evolution by FE$^2$ Computational Homogenization](https://arxiv.org/abs/2607.09356)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09356v1 Announce Type: new Abstract: Phase-field models have become a standard tool for simulating complex microstructure evolution in materials, but their application to engineering-scale components is often hindered by prohibitive computational costs arising from the need to resolve fine-scale features. To address this challenge, we propose a consistent homogenization framework for phase-field theory. By enforcing a Hill-Mandel-type condition of micro-homogeneity formulated in terms of Gurtin's microforces, a well-posed boundary value problem is derived for the representative volume element (RVE), establishing rigorous micro-macro relations for both the order parameter and its gradient. The theory is implemented within a computational two-scale (FE$^2$) scheme and validated against direct numerical simulations. Two distinct examples are investigated: a minimal Allen-Cahn model and a mechanically-coupled model for stress-driven martensitic phase transformation. The results demonstrate that the proposed framework can reliably predict the spatial and temporal evolution of the macroscopically averaged fields with reasonable accuracy.

14. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.36; Date: 2026-07-13T15:56:21Z; Popularity: 2,357 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

15. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-04T02:17:48Z; Popularity: 20 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

16. [Getting started with ChatGPT](https://openai.com/academy/getting-started)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT
   - Summary: Learn how to use ChatGPT, start your first conversation, and discover simple ways to write, brainstorm, and solve problems with AI.

17. [GPT-5.6 is now the preferred model in Microsoft 365 Copilot](https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 13:00:00 GMT
   - Summary: Learn how GPT-5.6 powers Microsoft 365 Copilot with stronger AI capabilities across Word, Excel, PowerPoint, Chat, and Cowork for faster, higher-quality work.

18. [GPT-5.5 Bio Bug Bounty](https://openai.com/index/bio-bug-bounty)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: Details about the OpenAI Bio Bounty program

19. [GPT-5.6: Frontier intelligence that scales with your ambition](https://openai.com/index/gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: More intelligence from every token, stronger performance per dollar, and more capability on demand for your hardest work.

20. [ChatGPT is now a partner for your most ambitious work](https://openai.com/index/chatgpt-for-your-most-ambitious-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: ChatGPT Work is an agent that can take action across your apps and files, stay with a project for hours if needed, and turn a goal into finished work.

21. [Our approach to government and national security partnerships](https://openai.com/index/government-national-security-partnerships)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 13:30:00 GMT
   - Summary: Learn how OpenAI approaches government and national security partnerships, with principles for responsible AI use, democratic accountability, and public safety.

22. [Helping K–12 educators build practical AI skills](https://openai.com/index/k-12-educators-practical-skills)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 10:00:00 GMT
   - Summary: OpenAI Academy and the Walton Family Foundation are bringing hands-on AI Skills Jams to help K–12 educators build practical AI skills for the classroom.

23. [Introducing GPT-Live](https://openai.com/index/introducing-gpt-live)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT
   - Summary: A new generation of voice models for natural human-AI interaction, now powering ChatGPT Voice.

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

26. [Data for Agents](https://huggingface.co/blog/nvidia/open-data-for-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 17:16:05 GMT

27. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

28. [From Hugging Face to Amazon SageMaker Studio in one click](https://huggingface.co/blog/amazon/one-click-to-sagemaker-studio)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 21:15:33 GMT

29. [Hugging Face Models on Foundry Managed Compute](https://huggingface.co/blog/microsoft/foundry-managed-compute)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 15:20:06 GMT

30. [LeRobot v0.6.0: Imagine, Evaluate, Improve](https://huggingface.co/blog/lerobot-release-v060)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

31. [PRX Part 4: Our Data Strategy](https://huggingface.co/blog/Photoroom/prx-part4-data)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 15:30:55 GMT

32. [🤗 Kernels: Major Updates](https://huggingface.co/blog/revamped-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 00:00:00 GMT

33. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

34. [A Formalization of the Mean-Field Derivation of the Vlasov Equation: AI-Assisted Lean Formalization as a Strategy Game](https://arxiv.org/abs/2607.08986)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08986v1 Announce Type: new Abstract: We formalize a research result in the Lean 4 proof assistant by having a mathematician direct an AI system, and frame the activity as a formalization game. The objective is to turn a LaTeX document into Lean. The game is won when the development compiles, contains no sorry, and a machine check shows the target theorems rest on Lean's foundational axioms alone. Reuse is a second check, by a definition we introduce: whether the development yields a self-contained layer of general mathematics the wider library could absorb. The case study is a complete, axiom-clean formalization of well-posedness for the nonlinear Vlasov equation via Dobrushin's mean-field route -- existence, uniqueness, the stability estimate and mean-field limit, and a short-window superposition principle (weak solutions are Lagrangian). The human's role was to direct, not to write proofs: to scope the definitions, steer the decompositions, and triage the library's gaps; the AI agent executed. The formalization certifies the proof of each statement as written; whether the written statement is the intended theorem stays the mathematician's judgment. The optimal-transport machinery that fell out of the build (in particular, properties of the Wasserstein-1 metric and the Kantorovich-Rubinstein duality theorem) separates into a self-contained layer that compiles against Mathlib alone: about a sixth of the development (49 of 299 declarations), behind a 22-declaration interface with no reverse dependency. The headline theorems ran in about a week, the full development in about a month. We report the quantitative claims as observations of one game, not as general laws. The game's rules name no particular system, so the methodological framing is meant to outlast the tools of any one run.

35. [KV-PRM: Efficient Process Reward Modeling via KV-Cache Transfer for Multi-Agent Test-Time Scaling](https://arxiv.org/abs/2607.09153)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09153v1 Announce Type: new Abstract: Process Reward Models (PRMs) have been proven to be highly effective in guiding test-time scaling (TTS) methods, which significantly boost the capabilities of LLM-based multi-agent systems. However, existing PRMs are text-based: they re-encode the entire trajectory text from scratch. In long multi-agent rollouts, the scoring cost, growing quadratically with respect to sequence length L, creates a severe computational bottleneck, severely limiting PRMs' application in long-context scenarios. To resolve this, we introduce KV-PRM, a highly efficient process reward model that eliminates the heavy text re-encoding by directly reading the KV cache produced naturally during the LLM's generation phase. By processing a single "verify token" against the pre-existing KV cache, KV-PRM reduces the scoring cost from O(L^2) to O(L). We formally prove that the KV cache contains strictly greater information capacity than text, and is more efficient for downstream reward modeling. Empirically, across the MATH, GSM8K, and AIME benchmarks, KV-PRM matches or strictly outperforms text-PRMs under various TTS methods such as Beam Search, MCTS, and Weighted Voting, with up to a 5,000x reduction in scoring FLOPs, a 37x reduction in latency, and a 34x reduction in per-sequence memory footprint compared to text-based PRMs.

36. [HERO: A Heterogeneity-Aware Benchmark Library for Federated Continual Learning](https://arxiv.org/abs/2607.08784)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08784v1 Announce Type: new Abstract: Federated continual learning (FCL) evaluates how distributed clients learn from changing data streams while retaining previously learned knowledge. Existing evaluations are difficult to compare because they often change datasets, task splits, client data splits, task orders, backbones, memory assumptions, and reporting rules simultaneously. We introduce \textbf{HERO}, a heterogeneity-aware benchmark library for FCL. HERO builds benchmark streams by separating three choices that are often coupled, namely the task split, the client data split, and the client task sequence. In HERO-Core, the main comparable benchmark, $\alpha$ controls client data skew and $\rho$ controls task-order mismatch. We evaluate representative FCL methods on CIFAR-100 and TinyImageNet using final average accuracy, average forgetting, and bottom-10\% client accuracy. We also include a graph-based Domain-IL portability case study on OGB-MolPCBA, where scaffold-domain granularity changes the input distribution while the prediction task remains fixed. Our results show that method behavior changes across easy and heterogeneous settings, that average accuracy can hide weak bottom-client performance, that task-order mismatch favors different strategies from synchronized evaluation, and that the same HERO interface can expose domain-shift difficulty beyond image-based FCIL. HERO releases benchmark streams, configurations, method implementations, and reporting scripts to support reproducible and setting-aware FCL evaluation.

37. [Accelerating GPU Inference of Large Language Models with Moderately Unstructured Sparse Weight Matrices](https://arxiv.org/abs/2607.08786)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08786v1 Announce Type: new Abstract: With the growing deployment of large language models (LLMs), LLM inference cost has become a key challenge. Pruning techniques that introduce sparsity into weight matrices can accelerate inference. However, maintaining model quality typically limits pruning to moderate unstructured sparsity (around 50\%). At these sparsity levels, none of the existing GPU kernels for sparse matrix multiplication (SpMM) can outperform their dense counterparts. This paper proposes an efficient GPU inference method for LLMs with moderate sparsity. We propose a three-layer matrix storage format comprising: (i) a Sparse-TC layer enabling sparse tensor cores to accelerate SpMM; (ii) a Slot-Filling layer using parallel differential distance for matrix compression while supporting low-cost on-chip decoding; (iii) a lightweight Residual Layer ensuring correct SpMM computation. Building on this format, we design a SpMM kernel that jointly utilizes sparse tensor cores and CUDA cores. This design enables an efficient execution pipeline and overlaps on-chip computation with memory access. Evaluations show that our work is the first to outperform dense matrix multiplication on modern GPUs equipped with high-bandwidth memory (HBM). It achieves up to 1.64x kernel-level speedup over SpInfer (EuroSys'25, Best paper) and up to 1.41x end-to-end speedups over FlashLLM (VLDB'24). Our source code: https://github.com/moui0/cudac.

38. [Rigorously justified local time stepping in UGKWP method for steady multiscale flow simulation](https://arxiv.org/abs/2607.09552)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09552v1 Announce Type: cross Abstract: In this Letter, local time stepping (LTS) is incorporated into the unified gas-kinetic wave-particle (UGKWP) method for steady multiscale flow simulation. It accelerates convergence step by a factor of $3.8\times$--$20\times$ and reduces wall-clock time by up to $21\times$ relative to global time stepping (GTS). A rigorous analysis of the particle flux under LTS identifies that fixed per-cell as $\Delta t_i$ is a sufficient condition for the time-averaged flux balance. This condition has not been stated in prior particle-based LTS work, where $\Delta t_i$ varies in time and the flux balance is therefore not guaranteed. Together with proportional rescaling of particle mass and free transport time at cell interfaces, the fixed-$\Delta t_i$ condition yields a conservative framework with no free parameters. The UGKWP-LTS method is validated on cylinder and flat-plate benchmarks that possess multiscale flow features.

39. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-13T06:30:02Z; Popularity: 473 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

40. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.42; Date: 2026-07-13T15:45:43Z; Popularity: 1,419 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

41. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-07-13T14:24:55Z; Popularity: 235 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

42. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-13T04:57:56Z; Popularity: 210 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

43. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

44. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

45. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

46. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

47. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

48. [iLENS: Interpretable LLM-Guided Mixture-of-Experts for Neuroimaging Survival Analysis](https://arxiv.org/abs/2607.08778)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08778v1 Announce Type: new Abstract: Alzheimer's Disease (AD) is a complex neurodegenerative disorder that continues to impact millions of people worldwide. Predicting AD conversion during the prodromal stage remains critical for disease understanding and patient care. As such, survival models are widely used for AD risk prediction, yet they are typically static predictors with limited interpretability and no capacity for natural language reasoning. In this work, we propose iLENS, an interpretable large language model (LLM) guided framework based on mixture-of-experts (MoE) for survival prediction in AD conversion. Our approach uses LLM to synthesize structured neuroimaging measurements and unstructured information to guide expert routing. Our framework demonstrates competitive predictive performance and capability in patient subtyping. Furthermore, our framework provides transparent, biologically grounded rationales for its routing decisions, bridging the gap between high-performance survival analysis and interpretable clinical decision support.

49. [Sticky Routing: Training MoE Models for Memory-Efficient Inference](https://arxiv.org/abs/2607.08780)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08780v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models activate only a sparse subset of experts per token, yet consecutive tokens frequently activate different experts -- causing constant weight swapping between slow storage and fast memory on edge devices. Existing remedies are either system-level (caching heuristics) or post-hoc (router fine-tuning), leaving the root cause unchanged during pretraining. We propose StickyMoE, a differentiable routing consistency loss that penalises abrupt expert switches between adjacent tokens, encouraging the router to maintain the same expert assignment across semantically coherent spans. StickyMoE requires no architectural changes, adds a single hyperparameter lambda, and unlike post-hoc methods, allows expert representations and routing decisions to co-adapt from the first training step. Experiments on small-scale MoE language models show that StickyMoE reduces the expert switch rate by up to 60% with less than 4% perplexity degradation, Pareto-dominating post-hoc fine-tuning on the quality-locality frontier. Routing temporal locality is most efficiently instilled at training time.

50. [Director: Accelerating Distributed MoE Serving via Online Proactive Expert Placement](https://arxiv.org/abs/2607.08782)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08782v1 Announce Type: new Abstract: Expert parallelism has become the prevailing paradigm to serve Mixture-of-Experts (MoE) models. Its efficiency depends on the communication and computation latencies of the GPUs, which are linked to the placement of experts in the GPUs. Existing works for optimizing expert placement focus on leveraging past requests' expert activation patterns. However, they demonstrate deficiencies facing diverse and rapidly changing request patterns, calling for an online, proactive approach. Implementing such an approach requires addressing several challenges: the uncertainty associated with incoming requests' expert activation, the cost of expert migration, and the NP-hard complexity in optimization. Therefore, we present Director, a new distributed MoE serving system that minimizes end-to-end latency via prediction-driven, online expert placement. Director uses either a lightweight cascaded predictor or a low-bit quantized replica for expert activation patterns of incoming requests. An online migration module then enacts the changes with near-zero downtime by executing migrations in compute-bound phases, keeping disruption bounded. At its core, a relaxation-based expert placement optimizer operates under capacity constraints, runs in polynomial time, and achieves a $(1+\epsilon)$ approximation ratio. Finally, we implement a prototype and demonstrate, through extensive experiments, a reduction in end-to-end latency of $11\sim55\%$ for popular MoE models (e.g., Mistral, DeepSeek and Qwen) compared to existing work.

51. [LieBN: Batch Normalization over Lie Groups](https://arxiv.org/abs/2607.08783)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08783v1 Announce Type: new Abstract: Manifold-valued measurements are prevalent in various machine learning tasks. Recent advances have extended Deep Neural Networks (DNNs) to operate on manifolds, accompanied by normalization techniques tailored to different geometries, collectively referred to as Riemannian normalization. However, most existing Riemannian normalization methods are either designed for specific manifolds or fail to effectively normalize manifold-valued sample distributions. To address these limitations, we propose LieBN, a framework for Riemannian Batch Normalization (RBN) over Lie groups. Our approach leverages the theoretically convenient left- and right-invariant metrics, which naturally exist in every Lie group, and provides theoretical guarantees for controlling the Riemannian mean and variance. We instantiate LieBN across nine distinct geometries: four on the Symmetric Positive Definite (SPD) manifold, one on the group of rotation matrices, and four on the manifold of full-rank correlation matrices. Notably, among the SPD metrics, we introduce a novel right-invariant metric and extend three existing Lie group structures via matrix power deformation. Extensive experiments on different manifolds validate the effectiveness of our framework. The code is available at https://github.com/GitZH-Chen/LieBN.git.

52. [Brownian Bridge for Coherent State Path Integral Monte Carlo](https://arxiv.org/abs/2607.08787)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08787v1 Announce Type: cross Abstract: We propose a new Brownian bridge construction for our newly devised Coherent States Path Integral Monte Carlo algorithm. We apply it to the numerically exact calculation of the thermodynamic properties of the Helium fluid on a plane at low non zero temperature. We find very good agreement with the conventional plane waves path integral Monte Carlo results.

53. [An Explicit Higher-Order Dual Basis for a Multiplicatively Calder\'on Preconditioned Electric Field Integral Equation](https://arxiv.org/abs/2607.08848)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08848v1 Announce Type: cross Abstract: One of the most effective means to precondition the electric field integral equation (EFIE) discretized with Rao-Wilton-Glisson (RWG) functions is the multiplicative Calder\'on preconditioner employing Buffa-Christiansen (BC) functions as a basis dual to the RWG basis. It results in a formulation that is free from the dense-discretization and the low-frequency breakdown. To generalize the multiplicative Calder\'on preconditioner from the low-order BC and RWG basis to higher orders, we utilize B-spline-based basis functions and establish the first explicit high-order dual basis. It can be regarded as a generalization of the BC functions to arbitrary polynomial degrees and constitutes a fundamental building block for other approaches that rely on a dual basis. Numerical results for the obtained preconditioner demonstrate a low and constant number of generalized minimum residual (GMRES) iterations independent of the number of unknonws and the polynomial degree for canonical and realistic perfectly electrically conducting (PEC) scatterers; a key to enable the full potential of higher-order bases.

54. [Interface-induced spin-resolved type-II band alignment and enhanced magnetic anisotropy in MSe2/WTe2 (M = V, Cr, Mn, Fe and Co) van der Waals heterobilayers](https://arxiv.org/abs/2607.08926)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08926v1 Announce Type: cross Abstract: Two-dimensional van der Waals heterobilayers provide an attractive platform for the development of next-generation spintronic devices. Here, first-principles calculations are performed to investigate the structural, electronic and magnetic properties of MSe2/WTe2 (M = V, Cr, Mn, Fe, and Co) van der Waals heterobilayers. The pristine WSe2/WTe2 heterobilayer in AA'-configuration is found to be energetically favorable and exhibits type-II band alignment with a band gap of 0.70 eV, and this provides an ideal platform for controlling carrier transport. Substituting W with 3d transition metal atoms, induces long-range magnetic ordering and reconstructs the spin-resolved electronic band structure. The formation of the heterointerface generates pronounced charge redistribution and an intrinsic built-in electric field, leading to interface-induced electronic reconstruction. MnSe2/WTe2 heterobilayer exhibits half-metallicity, whereas FeSe2/WTe2 heterobilayer simultaneously exhibits half-metallicity and spin-resolved type-II band alignment. Interfacial electronic reconstruction further produces a substantial perpendicular magnetic anisotropy, driving MnSe2 from an in-plane easy axis with MAE value of 1.10 meV in the isolated monolayer to a robust out-of-plane easy axis with MAE value of 20.8 meV in the heterobilayer. Among all the structures, CoSe2/WTe2 heterobilayer exhibits maximum Curie temperature (273.87 K). The combined results establish that interface engineering makes MSe2/WTe2 heterobilayers as a promising candidates for next-generation low-dimensional spintronic applications.

55. [I see you, do you see me? Perception-based crowdedness and behavioral responses in pedestrian dynamics](https://arxiv.org/abs/2607.09221)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09221v1 Announce Type: cross Abstract: Pedestrian traffic is commonly characterized using local density, yet the interactions experienced by individuals depend on the relative positions and perceptual relevance of surrounding pedestrians. This raises the question of whether behavioral relationships inferred from local crowdedness are robust to the representation of perceptual anisotropy, and how interaction geometry shapes pedestrian adaptation over time. We analyze experimental pedestrian crossing flows over angles from 0 to 180 degrees using a distance-weighted measure of local crowdedness. Perceptual anisotropy is varied by reducing the contribution of pedestrians outside the focal pedestrian's field of view. We examine the temporal evolution of crowdedness and its relationships with velocity, directional deviation, and acceleration. Anisotropy primarily changes the numerical scale of crowdedness, while the qualitative dynamics, temporal progression, and crossing-angle dependence remain largely preserved. Pedestrians deviate appreciably from their expected group directions, but changes between successive walking directions remain small, indicating adaptation through smooth, incremental corrections rather than abrupt turns. Acceleration dynamics reveal an asymmetry between disruption and recovery: initial deceleration varies strongly with crossing geometry, whereas recovery accelerations are more similar across angles. Non-retracing trajectories in the behavioral phase spaces show that similar instantaneous conditions can correspond to different phases of the interaction. Overall, interaction geometry has a stronger influence on the organization of crossing flows than the perceptual weighting used to quantify local crowdedness. More broadly, dynamic fundamental diagrams provide a more complete characterization of transient pedestrian interactions than conventional relationships based on instantaneous state variables alone.

56. [Serially Improved GTOs for Molecular Applications (SIGMA): basis sets from monovalent ions](https://arxiv.org/abs/2607.09238)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09238v1 Announce Type: cross Abstract: A new family of ionic basis sets, denoted i{\sigma}XZ1, is presented for molecular calculations on systems containing monovalent ions. The basis sets extend the SIGMA family by explicitly accounting for the different electronic structure of cations and anions. Auxiliary basis sets for resolution-of-the-identity calculations are also developed for the Coulomb term. The performance of the proposed basis sets is assessed for alkali-halide clusters. Compared with conventional basis sets, i{\sigma}XZ1 provides an accurate description of structural, energetic, and electronic properties while showing remarkable robustness against near-linear dependencies, allowing stable calculations on systems containing up to 792 NaCl units. These features make the i{\sigma}XZ1 family a reliable and efficient alternative for large-scale calculations on ionic systems.

57. [Beyond the Cube: Overlapping Grid Methods for Debris Collision Risk Assessment](https://arxiv.org/abs/2607.09634)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.09634v1 Announce Type: cross Abstract: The cube method reduces conjunction screening in orbital debris simulations to $\mathcal{O}(N)$ cost by evaluating only object pairs sharing the same grid cell at each snapshot, but systematically assigns zero collision probability to pairs separated by a cell boundary at that epoch, a failure known as boundary blindness. This paper introduces the Double Cube (DC) method, which recovers boundary-crossing conjunctions through a spatially shifted secondary grid using bin-index lookup alone, preserving $\mathcal{O}(N)$ complexity. Validated across 8,000 Monte Carlo seeds, DC reduces the blindness rate from $\beta_{\mathrm{Cube}} = 9.70\%$ to $\beta_{\mathrm{DC}} = 4.21\%$; a synchronized experiment confirms the residual is temporal in origin by reaching exactly $0.00\%$. Removing blindness reveals a systematic per-pair overestimation in the cube formula that blind zero-probability assignments had been masking, suppressing the overall predicted collision rate below the true rate. Two independent corrections are derived and validated: a power-law correction motivated by the Direct Simulation Monte Carlo kinetic theory analogy reduces the calibration error from $12.9\%$ to $1.9\%$ at $k = 1$ and $4.0\%$ at $k = 2$, bracketing perfect calibration from opposite sides; a parameter-free Gaussian correction derived from the pair-distance distribution geometry achieves a residual of $0.08\%$. Both corrections have been implemented in MOCAT-MC.

58. [Ab initio quantum embedding at finite temperature with density matrix embedding theory](https://arxiv.org/abs/2601.01641)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2601.01641v2 Announce Type: replace Abstract: We present a finite-temperature extension of density matrix embedding theory (FT-DMET) for realistic crystalline systems. We describe a practical framework for constructing extended bath orbitals, solving the embedding problem, and performing DMET self-consistency at finite temperature. To reduce computational cost, we introduce strategies based on mutual-information-guided bath truncation, controlled treatment of the thermal electron number without explicit optimization, and the use of low-temperature impurity solvers and one-shot FT-DMET in the low-temperature regime. We apply this approach to periodic hydrogen chains and square lattices to characterize their finite-temperature phases. We observe the Pomeranchuk-like effect in one dimension and enhanced stability of long-range order in two dimensions.

59. [Toward quantum scaling advantage in approximate optimization](https://arxiv.org/abs/2505.22514)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 13 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2505.22514v2 Announce Type: replace-cross Abstract: In a recent Letter [H. Munoz-Bauza and D. Lidar, Phys. Rev. Lett. 134, 160601 (2025)], quantum annealing was reported to exhibit a scaling advantage in approximately solving quadratic unconstrained binary optimization (QUBO) problems. Here, we revisit these findings by employing the simulated bifurcation machine (SBM), a nonlinear dynamical system that exploits chaotic behavior rather than thermal fluctuations. Our approach originates from quantum dynamics and shares key operational features with quantum annealing: (i) nearly parallel evolution and (ii) a well-defined relation between the energy gap, run-time, and solution quality. We obtain comparable or superior scaling, closing the reported quantum-classical gap. We further show that the small instances studied previously are insufficient to infer asymptotic behavior. Extending the analysis to larger problems reveals robust classical performance, indicating that current quantum annealers are unlikely to exhibit a clear scaling advantage over SBM-like solvers on quantum-annealing-correction-type QUBO problems under the run-time accounting studied here. Finally, we identify sparse problem classes where future quantum devices could achieve a genuine scaling advantage, once hardware overheads are mitigated.

60. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

61. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.70; Date: 2026-07-13T02:01:10Z; Popularity: 696 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

62. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.62; Date: 2026-07-13T10:23:38Z; Popularity: 617 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

63. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.15; Date: 2026-07-13T07:50:21Z; Popularity: 145 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

64. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-13T12:10:04Z; Popularity: 102 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

65. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

66. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Long-Horizon-Terminal-Bench: Testing the Limits of Agents on Long-Horizon Terminal Tasks with Dense Reward-Based Grading

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.08964

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
