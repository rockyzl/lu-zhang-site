# Daily signal sidecar - 2026-07-31

## Selected Signal

- Title: ClinLens: Towards Long-Horizon Coding Agents for Longitudinal Multimodal Clinical Data Science
- URL: https://arxiv.org/abs/2607.26155
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: ClinLens: Towards Long-Horizon Coding Agents for Longitudinal Multimodal Clinical Data Science
- Primary source: https://arxiv.org/abs/2607.26155
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

1. [ClinLens: Towards Long-Horizon Coding Agents for Longitudinal Multimodal Clinical Data Science](https://arxiv.org/abs/2607.26155)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26155v1 Announce Type: new Abstract: Clinical data-science agents must transform heterogeneous longitudinal records into auditable analyses, yet existing benchmarks largely isolate medical question answering, structured-table reasoning, or generic scientific repositories. We introduce CLINLENS, a benchmark of 200 executable tasks over five linked MIMIC resources spanning structured electronic health records, notes, electrocardiograms, chest radiographs, and echocardiograms. A 4 x 5 taxonomy crosses four patient-time scopes with five analysis capabilities. Program-first reverse synthesis pairs each bounded semi-raw package with an evaluator-private reference workflow and checks required artifacts, cohort and temporal semantics, and the final answer. On a fixed 126-task suite, the strongest of 24 standardized model-scaffold configurations achieves 56.3% scope-macro STRICTPASS despite 100% EXECSUCCESS. For reference, a separately configured coding agent solves 83 of 126 tasks, while five biomedical systems adapted to GPT-4o-mini reach at most 2.9% scope-macro STRICTPASS. These results expose a substantial gap between runnable submissions and correct clinical analyses.

2. [GuideSkill: Evolving Executable LLM Agent Skills for Guideline-Grounded Clinical Reasoning](https://arxiv.org/abs/2607.26160)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26160v1 Announce Type: new Abstract: Clinical practice guidelines (CPGs) encode diagnostic criteria, but LLM systems typically retrieve guideline text or absorb it through training rather than execute its rules. We introduce GuideSkill, an external reasoning layer that compiles disease-specific criteria into executable functions returning ordinal diagnostic-support scores. GuideSkill-Zero is initialized from guidelines, while GuideSkill-Evo uses case--diagnosis pairs to refine covered skills and add missing diagnoses. At inference, an LLM proposes a differential diagnosis, grounds the features required by each matched skill, and fuses its ranking with the executed skill scores. Across four benchmarks and four backbones, GuideSkill-Zero improves macro-average accuracy over guideline RAG by 13.45% on average. GuideSkill-Evo achieves the highest macro-average for every backbone, improves over direct inference by 18.49% relatively, and increases gold-label skill coverage from 56.5% to 99.5%. On Qwen3.5-9B, it also exceeds the strongest parameter-update baseline by 11.16% without updating the backbone. Expert evaluation further indicates that GuideSkill produces clinically sound and broadly acceptable skills, suggesting that its initialized and evolved rules are reliable and practically meaningful. These results support executable skills as a model-agnostic mechanism for combining guideline-derived procedures with case-derived diagnostic patterns.

3. [Echoverse: Deep, evolving environments for computer-use agents](https://www.microsoft.com/en-us/research/blog/echoverse-deep-evolving-environments-for-computer-use-agents/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 6.00; Date: Thu, 30 Jul 2026 17:00:00 +0000
   - Summary: Computer-use AI agents struggle with multi-step workflows like email and customer support. Echoverse trains agents in realistic environments rather than simply providing more training tasks, helping them improve as the tasks, tests, and environments evolve. The post Echoverse: Deep, evolving environments for computer-use agents appeared first on Microsoft Research .

4. [When benchmark inferences do not compose: Projectibility in AI evaluation](https://arxiv.org/abs/2607.26159)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26159v1 Announce Type: new Abstract: An AI benchmark result rarely reaches a consequential claim in one step. Evaluators generalize it to further cases, interpret it as evidence of capability, extrapolate it to new tasks, transport it to another system or site, and combine it with assumptions about human review and downstream consequences. Validity-centred approaches require evidence for each claim. This paper identifies a further epistemic problem: warranted links don't automatically make a warranted chain. The target of one study may not be the source of the next; system, population, outcome, or conditions may change at the interface; and shared data or model lineage may make apparently independent support dependent. Projectibility concerns whether a bounded extension from observed to unobserved cases is warranted. Goodman supplies the problem of rival extensions; argument-based validity supplies an architecture for testing them. The paper's distinctive claim is a non-composition principle: support for adjacent projections warrants their composition only when endpoints and assumptions align and dependence and uncertainty are carried through. A legal-research case shows how benchmark evidence and a deployment study can each be sound while remaining parallel. A reanalysis and simulation show why aggregate stability can erase distinctions a later projection requires. The resulting projectibility audit diagnoses unsupported joins in benchmark-to-use arguments.

5. [GoGoTB: Agentic RTL Verification with Specification-Grounded Coverage Closure](https://arxiv.org/abs/2607.26181)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26181v1 Announce Type: new Abstract: Functional verification dominates integrated circuit (IC) front-end engineering effort, and a single missed bug that escapes to silicon can trigger a costly respin. Recent large language models (LLMs) offer new opportunities to automate this process, yet existing LLM-based approaches generate each component through independent single-turn calls with no shared context, leaving interface mismatches undetected and reported coverage disconnected from specification requirements. To address these challenges, we present GoGoTB, an agentic framework that achieves end-to-end verification closure through three subsystems: an agentic execution control layer, an evolvable knowledge system, and specification-grounded coverage closure. The execution control layer separates deterministic enforcement from LLM reasoning at every tool and stage boundary. The knowledge system dispatches methodology and design-specific expertise on demand. The coverage framework anchors every bin to a named specification behavior so that each residual gap has a diagnosable root cause and a targeted remedy. Tested on 8 register transfer level (RTL) designs without any human intervention, GoGoTB achieves 100\% environment generation success and averages 98.4\% line, 97.2\% branch, 97.0\% toggle, and 83.2\% functional coverage. No prior work successfully generates a complete verification environment or achieves meaningful coverage on the same benchmarks.

6. [Position: Evaluation Scores Are Perishable Knowledge Claims](https://arxiv.org/abs/2607.26191)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26191v1 Announce Type: new Abstract: Evaluation methodologies for language models increasingly combine multiple signals, from automated metrics and LLM-as-judge ratings to human assessments and benchmark suite results. When these signals are aggregated via averaging, evaluation confidence can then substantially exceed the reliability of the weakest signal: a phenomenon we call trust inflation in evaluation. We argue that evaluation scores should be treated as epistemic claims with three properties: formality (human evaluation provides stronger evidence than an automated metric), scope (a benchmark result applies to the tested distribution, not universally), and validity windows (benchmark results expire as contamination accumulates and distributions shift). Several converging research traditions (chain-of-thought analysis, possibilistic logic, and algebraic theory) establish weakest-link aggregation as the conservative endpoint of a parameterized operator family controlled by a single pessimism parameter. Drawing on those traditions, and on concrete lessons from building an evaluation harness for agentic AI, we propose that evaluation results carry explicit metadata (formality tier, scope declaration, and expiration date) to make their epistemic status transparent. We illustrate the cost of mean aggregation on the public HELM leaderboard: across 54 frontier models on ten scenarios, the top-five models ranked by mean score and by weakest-link are completely disjoint.

7. [Exploring Structures in Physics Problems: Can AI Agents Discover Statistical Mechanical Mappings?](https://arxiv.org/abs/2607.26367)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26367v1 Announce Type: new Abstract: An important skill in theoretical physics is to recognize when a new problem can be transformed into a known model. We study this skill as an AI-agent task: can LLM-based agents discover statistical mechanical mappings from a raw partition function to a tractable representation? To probe this question, we introduce StatMechBench-v0, a benchmark of six Ising-type problems covering transfer-matrix methods, gauge-removable disorder, and planar/Pfaffian structure. We evaluate a simple propose-verify-revise agent across multiple LLMs and problem phrasings. The results show that numerical feedback often helps agents repair code and recover correct partition functions. However, agents can also pass the numerical checks while misidentifying the underlying tractable class or understating computational complexity. This both reveals limitations in current LLM reasoning and calls for a verification stack that goes beyond numerical agreement, incorporating, for example, symbolic checks and structural invariants. Our study provides an early evaluation and design directions for AI agents aimed at structural discovery in theoretical physics.

8. [RLPF: Reinforcement Learning from Performance Feedback for Code Generation](https://arxiv.org/abs/2607.27271)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27271v1 Announce Type: new Abstract: Code models are increasingly trained with execution feedback, but most training signals still stop at correctness. This leaves an important gap for systems code: two programs can pass the same tests while differing greatly in runtime. We study how to train code agents to prefer faster correct implementations, rather than treating efficiency only as an evaluation metric. The key difficulty is that runtime is a fragile reward. It is meaningful only after a program is correct, varies across tasks, and gives little guidance when most sampled programs fail to compile or run. We propose \textbf{RLPF}, reinforcement learning from performance feedback, which turns execution outcomes into a staged reward. Failed programs are ordered by execution progress, while correct programs are ranked by their relative improvement from the baseline toward the expert reference. This gives useful feedback before correctness and performance-sensitive feedback after correctness. Fine-tuning Qwen3-32B with RLPF on PerfCodeBench raises correct-and-runnable solutions from $11.1\%$ to $54.6\%$ and improves relative efficiency from $8.1\%$ to $38.6\%$. The trained model becomes competitive with stronger open-weight systems, and its optimization behavior transfers modestly to EffiBench-X. Additional studies show that model-generated references provide useful but weaker supervision, and that the full composite reward is more reliable than correctness-only or runtime-only baselines. These results suggest that code agents can be trained not only to pass tests, but also to optimize the programs they write.

9. [Advancing responsible AI across Europe](https://openai.com/index/advancing-responsible-ai-across-europe)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Fri, 31 Jul 2026 15:00:00 GMT
   - Summary: OpenAI shares how its safety, security, transparency, and provenance practices support responsible AI governance in Europe. The work will continue as the EU AI Act advances.

10. [Advancing the price-performance frontier with GPT-5.6](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 30 Jul 2026 10:00:00 GMT
   - Summary: Explore lower GPT‑5.6 pricing for Luna and Terra—and how OpenAI’s more efficient models help enterprises deploy AI workflows at scale.

11. [How enabling two settings tripled our scores on the ARC-AGI-3 benchmark](https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 29 Jul 2026 15:00:00 GMT
   - Summary: How two API settings improved GPT-5.6 performance on ARC-AGI-3, boosting scores and efficiency by retaining reasoning and enabling compaction.

12. [Accelerating scientific discovery with ChatGPT for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 29 Jul 2026 10:00:00 GMT
   - Summary: OpenAI is giving 100,000 academic researchers free access to ChatGPT's most advanced AI models to accelerate scientific research, collaboration, and discovery.

13. [How GPT-5.6 fuses frontier intelligence with frontier efficiency](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 GMT
   - Summary: GPT-5.6 improves AI efficiency across models, inference, and agentic workflows, helping deliver more useful intelligence per dollar.

14. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

15. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

16. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

17. [NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics](https://huggingface.co/blog/nvidia/cosmos-h-dreams)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 27 Jul 2026 09:32:20 GMT

18. [Probing the Origins of Reasoning Performance: Representational Quality for Mathematical Problem-Solving in RL vs. SFT Fine-Tuned Models](https://arxiv.org/abs/2607.26119)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26119v1 Announce Type: new Abstract: Large reasoning models trained via reinforcement learning (RL) have been increasingly shown to outperform their supervised fine-tuned (SFT) counterparts on mathematical reasoning tasks; Yet the mechanistic basis for this advantage remains unclear. We therefore ask, what internal representational differences enable RL models' superior performance? Our work presents two converging lines of evidence: First, linear probes trained on layer-wise hidden states reveal that RL models tend to achieve higher accuracy in predicting answer correctness compared to SFT models, indicating more linearly separable and structured representations. Second, mean ablation studies show that RL models develop a hierarchical architecture where deeper layers become progressively more critical, whereas SFT models distribute importance uniformly across layers. Together, these findings demonstrate that RL training fundamentally restructures how models represent and process reasoning problems. Finally, we analyze token-count variability under repeated sampling across problems to assess adaptive compute allocation. While we observe higher variability in some RL-tuned models than in their SFT counterparts, we see strong consistency in others, suggesting that token allocation may depend more on the overall training pipeline than on RL versus SFT alone. We believe this token-allocation variability reveals the spread of plausible on-policy reasoning, highlighting which models exhibit stable policies versus those that are under-determined, potentially non-identifiable solution behaviour.

19. [Even More Deception: Objective Misalignment in Mixed-Motive LLM Multi-Agent Systems](https://arxiv.org/abs/2607.26120)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26120v1 Announce Type: new Abstract: Large Language Models (LLMs)-powered multi-agent systems are increasingly deployed in mixed-motive environments, where agents operate under asymmetric information and strategic deception due to conflicting or hidden objectives. In these settings, misalignment with collective goals becomes a central concern. We propose a novel framework for evaluating objective misalignment using the social deduction game Werewolf, modifying the objective of a single agent while preserving its assigned role. Across LLMs from four different model families and sizes, four player roles, and three objective formulations, we introduce a dual analysis of the agents' internal reasoning and their public cheap-talk behavior (i.e costless, non-binding communication that does not directly affect the agents' utilities), complemented by an analysis of game outcomes. Our results show that objective misalignment undermines outcomes in inherently adversarial environments, an effect exacerbated by asymmetric information and specialized roles. While compromised agents consistently develop distinct objective-dependent reasoning strategies, these adaptations remain largely invisible in their public behavior. More broadly, our findings suggest that even subtle objective misalignment can profoundly affect collective decision-making, highlighting the need for effective mitigation strategies for LLM-based multi-agent systems.

20. [TraceCoder: Explainable and Auditable Code Generation with Position-Key Snippet Versioning](https://arxiv.org/abs/2607.26307)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26307v1 Announce Type: new Abstract: Contemporary LLM-based coding agents produce code as black-box outputs: the rationale behind each line is hidden, the evolution of the code through benchmark-driven repair is ephemeral, and post-hoc auditing is impossible. We present a code generation concept that addresses these shortcomings through three complementary mechanisms: (i) a relational snippet-history schema that records, per repair event, the benchmark reference, round number, failure text, and LLM explanation, enabling full provenance queries; (ii) a browser-based visualisation tool that renders this history as heat-mapped, hover-annotated source code; and (iii) a competitive fractional position-key indexing scheme with tree-node delimiters that assigns stable, lexicographically-ordered identifiers to each code snippet, enabling fine-grained tracking without disrupting surrounding lines. We evaluate TraceCoder on 30 algorithmic programming tasks spanning string processing, mathematical computation, and data-structure manipulation, across two provider configurations. Of these, 10 exhaust the 6-iteration budget on tasks with subtle edge-case behaviour. Mean Chg% reaches 30%, three in ten code snippets carry a traceable repair-event row, compared to 21% when using Gemini 2.0 Flash as sole provider on a 20-task subset. Three detailed case studies demonstrate how the system explains which specific benchmark failures shaped each line of the final program. The proposed mechanism makes the internal "narrative" of automated code generation auditable and replayable, a property essential for trust and accountability in production deployments.

21. [CaM-Wolf: Causal-Aware Multimodal Agents for Social Deduction Games](https://arxiv.org/abs/2607.26393)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26393v1 Announce Type: new Abstract: Social deduction games (SDGs) such as Werewolf have become challenging testbeds for AI agents. These games require complex social skills such as reasoning, deception, and collaboration. While recent advances in large language models (LLMs) have driven significant progress in SDG agents, current approaches are predominantly text-based, overlooking the multimodal nature that is fundamental to human social interaction. To bridge this gap, we introduce CaM-Wolf, the first SDG agent that integrates multimodal perception and generation. CaM-Wolf processes video inputs from other players, employs a causal-aware Reasoner trained via reinforcement learning to establish logical chains between observable behaviors and hidden roles, and presents itself through an animated avatar. Our experiments and user study show that CaM-Wolf achieves superior agent gameplay performance and enhances the quality of human-AI interaction. This work represents a significant advancement towards creating more human-like AI agents capable of participating in nuanced social dynamics. Our code is available at https://3dagentworld.github.io/avatar_wolf.

22. [Fast and Accurate Foundation Models for Equivariant Machine-Learned Interatomic Potentials](https://arxiv.org/abs/2607.28461)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.28461v1 Announce Type: new Abstract: Machine-learned interatomic potentials (MLIPs) have emerged as a transformative tool for computational materials science and chemistry, with universal potentials trained on large and diverse datasets now routinely deployed as 'foundation models' for downstream fine-tuning in targeted chemical spaces. Many scientific applications of the resulting models, such as molecular dynamics (MD), require high inference and training speeds as well as accuracy. In this work, we examine the limits of equivariant MLIPs, which directly encode physical symmetries in model architectures, to achieve these competing targets -- particularly in the regime of extremely large datasets where data efficiency is less critical. We show how this trade-off can be addressed, and present a family of foundation potentials in the NequIP and Allegro equivariant MLIP architectures which achieve leading inference speeds and strong scalability as well as excellent accuracies across a range of community benchmarks -- spanning materials discovery, thermal conductivity prediction, and near-equilibrium mechanical and thermodynamic properties. Accelerations implemented within the NequIP infrastructure now permit training of high-accuracy foundation potentials on ultra-large datasets with dramatically reduced computational cost. Alongside, we show that efforts to improve model accuracy for materials discovery should focus on dataset diversity and improved, consistent descriptions of transition metal compound energy surfaces.

23. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.57; Date: 2026-07-31T14:43:47Z; Popularity: 2,572 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

24. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

25. [Building abundant intelligence](https://openai.com/index/building-abundant-intelligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 15:00:00 GMT
   - Summary: A full-stack approach to making advanced AI more capable, more affordable, and more widely useful.

26. [Univé builds an AI-ready workforce](https://openai.com/index/unive)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 31 Jul 2026 07:00:00 GMT
   - Summary: See how Univé built an AI-ready workforce with ChatGPT Enterprise by combining leadership, responsible governance, and employee-led innovation to transform work at scale.

27. [How avatarin built a 24/7 retail agent with GPT-Realtime](https://openai.com/index/avatarin)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 GMT
   - Summary: avatarin uses OpenAI’s GPT-Realtime to give Yamada Denki shoppers 24/7 multilingual support. In two weeks, 30,000 people used the agent and 92% of survey responses were positive.

28. [Scientific computing in the age of agentic AI](https://openai.com/index/scientific-computing-agentic-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 28 Jul 2026 17:00:00 GMT
   - Summary: A new field report shows how scientists use AI coding agents to modernize scientific computing, accelerating software development and discovery in genomics and beyond.

29. [How AI is expanding what people do at work](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 27 Jul 2026 03:30:00 GMT
   - Summary: New OpenAI research shows how AI is expanding what workers do, with ChatGPT users taking on tasks across roles and reshaping job boundaries.

30. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

31. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

32. [The OlmoEarth Platform: Geospatial inference at planetary scale](https://huggingface.co/blog/allenai/olmoearth-infrastructure)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 16:27:42 GMT

33. [LFM2.5-Encoders for Fast Long-Context Inference on CPU](https://huggingface.co/blog/LiquidAI/lfm2-5-encoders)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 15:01:45 GMT

34. [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 GMT

35. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

36. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

37. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

38. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

39. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

40. [Recursive transformers for semiconductor thermo-mechanical reliability](https://arxiv.org/abs/2607.27251)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27251v1 Announce Type: new Abstract: Transformer-based surrogate models are increasingly used to replace expensive first-principles simulation in engineering design. But conventional transformer architectures are often over parameterized for the small, low-dimensional datasets typical of engineering design spaces, where large simulation data is expensive to generate. Under these conditions, excess parameter capacity leads to overfitting rather than improved accuracy, while also incurring unnecessary memory and compute overhead. This motivates a shift towards architectures that focus on additional compute rather than additional learnable parameters. This paper presents a hardware-aware evaluation of three recursive transformer paradigms for surrogate thermo-mechanical analysis of advanced packages: a)Tiny Recursive Model, b) our proposed Depth Recursive transformer, c) and a simple recursive transformer. We systematically compare their predictive performance (Recall, Mean Reciprocal Rank), parameter count, computational complexity (FLOPs), providing practical design guidelines for selecting recursive transformer architectures under resource-constrained scenarios. We validate this principle on two low-dimensional engineering prediction tasks: 1) thermo-mechanical reliability analysis of advanced semiconductor packages, where stress and warpage from thermal cycling must be evaluated repeatedly across a design-of-experiments sweep under costly finite element analysis (FEA). 2) Laplace PDE iterative numerical solver for capacitance field. Overall, recursive weight-sharing transformers provide an effective and generalizable trade-off between prediction accuracy, parameter efficiency, and computational cost for small data engineering surrogate modeling.

41. [PlatformBid: An Auto-Bidding Benchmark from a Unified Advertising Platform's Perspective](https://arxiv.org/abs/2607.27265)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27265v1 Announce Type: new Abstract: Real-time bidding is central to computational advertising, comprising three elements: Supply Side Platform (SSP) selling ad impressions, Demand Side Platform (DSP) bidding for advertisers, and Ad Exchange conducting auctions between them. Traditional auto-bidding algorithms focus solely on the DSP side, maximizing advertiser conversions by adjusting bids against competitors. However, current big ad platforms, such as social media and e-commerce companies, now integrate SSP, DSP, and Ad Exchange functions internally. From such ad platforms' perspective, the goal of the auto-bidding algorithms is not only to maximize the advertisers' conversions, but also the total revenue of the platform. Given the lack of platform-centric evaluation frameworks and the pressing need to advance auto-bidding research, we propose PlatformBid - the first comprehensive benchmark designed from a unified ad platform's perspective. To accurately reflect the real-world auto-bidding scenarios, we define three representative settings: (1) homogeneous competition with identical algorithms across advertisers, (2) heterogeneous competition with diverse algorithmic strategies, and (3) promotional competition where some advertisers surge budgets for boosting sales during promotional events like Black Friday. We systematically evaluate a broad spectrum of existing auto-bidding methods across these settings, encompassing classical control methods, RL-based methods, and recent generative methods. Besides these methods, we further propose a novel auto-bidding method based on flow-matching, termed BidFlow, which leverages the flow-matching method's expressive policy representation to effectively handle dynamic competitive environments. Online experiments on Kuaishou further show a +0.68\% improvement in target cost, providing deployment evidence for the offline-online consistency of PlatformBid.

42. [Beyond KV Reconstruction: Functional Reconstruction for MLA Draft Models in Speculative Decoding](https://arxiv.org/abs/2607.27269)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27269v1 Announce Type: new Abstract: Multi-head latent attention (MLA) is increasingly important for long-context LLM inference because compact latent states replace the growing key-value (KV) cache and reduce decoding memory traffic. Yet most capable open checkpoints use multi-head or grouped-query attention (MHA/GQA), so conversion is needed to obtain MLA's cache efficiency without retraining from scratch. Speculative decoding offers complementary acceleration, but its speedup depends on agreement between draft proposals and target verification. We find that direct MHA/GQA-to-MLA conversion can sharply reduce this agreement: low-rank factorization and RoPE handling introduce attention-function errors that may be tolerable for standalone generation but substantially lower draft-token acceptance. We therefore formulate MLA draft construction as functional reconstruction rather than cache compression. Our end-to-end (E2E) method optimizes each converted MLA attention module to reproduce the post-output-projection response of its original MHA/GQA counterpart on calibration hidden states. This converter-agnostic post-conversion procedure preserves the converted cache and inference graph and requires neither verifier logits nor verifier supervision. We evaluate 192 model-converter-backend-method-task configurations spanning four Llama/Qwen draft-target pairs, TransMLA and MHA2MLA, HF and vLLM, and four 200-prompt tasks. With a 0.5-percentage-point reporting tolerance, Functional Reconstruction materially improves acceptance in 37 of 64 matched task cells, leaves 26 practically unchanged, and materially decreases one. Code and evaluation artifacts are available at https://github.com/swyhahaha/FunctionalMLA.

43. [Flat Score, Amplified Failures: How the Error Budget Masks Damage in Quantized LLM Agents](https://arxiv.org/abs/2607.27275)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27275v1 Announce Type: new Abstract: Post-training quantization to 4-bit weights is widely reported to be nearly lossless. We test this claim for multi-turn, tool-calling agents, where it now matters most. On $\tau^2$-bench, across two open-weight model families in dense and MoE variants and two domains (eight cells, 456 episodes each, at 16-, 8-, and 4-bit weights), quantization indeed looks free on the standard metric. No cell shows a score change that survives multiple-comparison correction, and in the cell that carries the largest process damage, equivalence testing bounds the change within $\pm$7.5 points. The process tells a different story. Quantization amplifies the failure the model already exhibits at full precision (tool-name hallucination in telecom, with the same directional trend in retail entity errors) by up to 2.5$\times$ in volume (+17.6 points per task), while creating essentially no new failures. The failure set is the same at every precision (rank correlation $\geq$ 0.94, 0.18% novel events). The score stays flat because the benchmark's ten-error budget absorbs the extra failures. Shrinking the budget to two errors re-exposes a score gap of 17 points, and it does so only in the one cell where quantization added error volume, exactly as the masking account predicts. A targeted error-repair prompt, run for five telecom models at every precision, removes the damage exactly and only where it lives. Both diagnostics, the per-channel error rate and success under a shrinking budget, come from logs benchmarks already collect; we suggest reporting them alongside task reward.

44. [Performance Benchmarking: Software for the Density Matrix Renormalization Group](https://arxiv.org/abs/2607.28369)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.28369v1 Announce Type: new Abstract: The performance of scientific software often determines the scale of problems that can be solved in practice. As multiple implementations of the same algorithm emerge, systematic evaluation is needed to compare their strengths and limitations. The density matrix renormalization group (DMRG) algorithm, widely used to study quantum systems, has over 50 software implementations. These implementations vary in multiple aspects that can strongly affect performance. However, despite the need, performance evaluations of these implementations are scarce and lack a consistent standard; many existing evaluations are either too incomplete to enable meaningful comparisons or focus on objectives other than direct performance comparisons, thereby limiting understanding of how the implementations compare. Here, we present a performance-oriented benchmarking framework to facilitate meaningful comparisons of DMRG implementations, and we apply it to quantify the performance of eight implementations, highlighting similarities and differences among them. Furthermore, we examine multiple parameter settings, optimization strategies, and implementation-specific features to demonstrate how parameter configuration can affect performance and how systematic evaluation can reveal non-obvious trade-offs. The results show significant performance differences, up to two orders of magnitude in some cases, not only between different implementations when aligning parameters, but also within the same implementation when comparing different parameter configurations. Hence, our results demonstrate the significant value and insight that can be gained from conducting rigorous performance evaluations. Using our results and framework as a starting point, more rigorous benchmarking will ultimately help users and developers make informed decisions and support future development efforts to build better, more efficient software.

45. [A sub-grid-scale model for polydisperse bubbly flows with heat and mass transfer](https://arxiv.org/abs/2607.27426)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27426v1 Announce Type: cross Abstract: Ensemble-averaged models of polydisperse bubbly flows require statistics of the evolving bubble population. Prior quadrature-based moment formulations close bubble pressure with a polytropic relation that omits heat and mass transfer at the bubble wall. We formulate constant-transfer equations for bubble pressure and vapor mass within a conditional hyperbolic quadrature method. Second-order conditional inversion produces four joint radius--radial-velocity nodes per equilibrium-radius bin. Bubble pressure and vapor mass are advanced at each node. The node values close the ensemble-averaged flow equations without adding mixed pressure or vapor-mass moments to the transported moment set. The model is implemented in MFC. Monte Carlo calculations verify the evolution of quadrature nodes and the mean bubble variables for a harmonically forced population. Bubble-screen calculations quantify closure error as the equilibrium radius is discretized and the initial distributions vary. The constant-transfer calculation does not exhibit the high-frequency pressure oscillations observed with the polytropic closure under the conditions considered. 3D bubble-screen calculations give a 1.5% relative root-mean-square error between the Euler--Euler center pressure and the mean of 40 volume-averaged Euler--Lagrange realizations.

46. [Design principles for energy dissipation in viscoelastic network metamaterials](https://arxiv.org/abs/2607.27525)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27525v1 Announce Type: cross Abstract: Mechanical energy dissipation in networked materials is relevant for applications from vibration isolation to impact protection, yet identifying optimal dissipative architectures in large disordered truss networks is computationally prohibitive with conventional finite element methods. We develop an efficient graph Laplacian-based spectral framework for viscoelastic truss networks, in which the full continuum dynamics of each rod are retained exactly and the problem size scales with the number of joints rather than element-level discretization points. Using this framework, we investigate how redistributing cross-sectional areas within a network (without changing material composition) controls energy dissipation. We find that random redistribution typically reduces dissipation relative to a uniform baseline, while gradient-based optimization yields nontrivial architectures whose form is governed by the intrinsic attenuation length of the base material. Focusing on driving frequencies near a global resonant mode of the network, we show that the optimal mass distribution decays from the source (driven joint) with the attenuation length scale, and at small attenuation lengths the optimal architecture is independent of the boundary conditions. These results motivate future studies of dissipation length scale based design principles on more complex disordered architectures and provide an efficient computational framework for exploring such structures at scale.

47. [Establishing an independent measurement traceability for 60-Co Air Kerma](https://arxiv.org/abs/2607.27875)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27875v1 Announce Type: cross Abstract: An independent air kerma traceability chain for $^{60}$Co radiation protection levels has been successfully established at the CIEMAT Ionizing Radiation Metrology Laboratory (LMRI-CIEMAT), based on the reference provided by the $^{137}$Cs primary standard. To achieve this, a secondary standard ionization chamber with an appropriate energy response was characterized, and its beam-quality correction factor, $k_Q$, was accurately determined via Monte Carlo simulations using the EGSnrc code. The method's accuracy was validated through a comparison with long-term historical calibration data and peer-confirmed through CIEMAT's successful participation in the EURAMET.RI(I)-S19 supplementary comparison, recently officially published in the BIPM KCDB. The excellent agreement achieved with international reference values demonstrates the high robustness and traceability independence of this newly implemented methodology.

48. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.60; Date: 2026-07-31T10:16:33Z; Popularity: 1,599 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

49. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-07-29T11:32:51Z; Popularity: 478 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

50. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.29; Date: 2026-07-31T04:29:49Z; Popularity: 292 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

51. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-28T13:07:45Z; Popularity: 218 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

52. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

53. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

54. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

55. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

56. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

57. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

58. [DoTime: A Synthetic Benchmark Generator for Interventional and Counterfactual Time Series](https://arxiv.org/abs/2607.27263)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27263v1 Announce Type: new Abstract: Most benchmarks for causal inference over time series are observational, small, or domain-specific, leaving interventional and counterfactual estimation under-served exactly where it matters most, such as in healthcare, policy evaluation, and climate science. We introduce \textbf{DoTime}, an open, scalable, and theoretically grounded generator of multivariate temporal structural causal models (TSCMs) with interventions, released as the \code{dotime} PyPI package together with four frozen evaluation suites. Beyond existing work, it adds capabilities absent from prior generators: continuous-time intervention \emph{windows}, counterfactual sampling modes with a positivity guard, regime-switching SCMs as a strict generalization of interrupted time series, non-stationary dynamics by construction with switching SCM parameters, and deterministic ramp and sinusoidal intervention profiles that place trends and structural breaks \emph{inside} the evaluation window. Moreover, it demonstrates the suitability of the generator as a prior for a causal foundation model reference implementation. The released suites span a training-scale snapshot of $100{,}000$ trajectories and eight named identification structures, each with exact ground truth: paired interventional trajectories from the same SCM throughout, and shared-noise counterfactuals in the continuous-time suite. We ship reference baseline implementations with an evaluation harness, and pose a falsifiable claim: interventional training buys a measurable direction-accuracy advantage over an observational model of identical capacity. It is tested across three training seeds per arm. Under structure-matched evaluation on held-out episodes, the interventional prior-fitted network's (PFN) gap is positive in every structure, trajectory length, and seed tested.

59. [SDO: Structure-Aware Data Organization for Efficient LLM Post-Training](https://arxiv.org/abs/2607.27273)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27273v1 Announce Type: new Abstract: Post-training of large language models is expensive, and existing efficiency improvements mainly focus on selecting informative samples or designing training schedules. However, data organization itself is usually treated as a static preprocessing step: embedding-based grouping methods construct fixed partitions before training and cannot adapt to the evolving sample exposure during optimization. As a result, all samples receive similar exposure despite their different optimization needs, leading to redundant updates for some samples while leaving others under-optimized. To address this problem, we propose SDO (Structure-Aware Data Organization), a plug-and-play data organization framework with an exposure-driven feedback mechanism that organizes mini-batch composition and sample exposure according to representation-space structure. SDO operates epoch by epoch on frozen external embeddings, avoiding model warm-up training overhead: within each epoch, locality-aware batching forms coherent mini-batches via KNN neighborhood traversal; across epochs, exposure-balanced scheduling records per-sample participation and reduces the sampling probability of over-exposed samples to preserve long-term coverage. Across SFT, DPO, and GRPO, SDO accelerates convergence, with the largest gains observed in the early-to-mid phase, producing more coherent gradients and more balanced accuracy across question types without permanently excluding training samples.

60. [Physics-Informed Neural Networks for 2D Plane Wave Scattering in Arbitrary Dielectric Structures](https://arxiv.org/abs/2607.27349)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27349v1 Announce Type: cross Abstract: In this paper, we introduce a meshless physics-informed neural network based computational framework for solving two-dimensional electromagnetic wave scattering in inhomogeneous media. The framework embeds frequency-domain Maxwell equations and radiation boundary conditions directly into the neural network loss function, enabling accurate prediction of scattered fields for both transverse magnetic (TM) and transverse electric (TE) polarizations across various dielectric configurations. Application of the method to single-cylinder, concentric multilayer cylindrical shells, three arbitrarily arranged cylinders, and composite irregular structures demonstrates that for the TM polarization, all relative $L^{2}$ errors mostly remain at particularly low levels of $\le0.1$. For the TE polarization, sharp variations of the dielectric properties of scatterers lead to singularities in the governing equations, which result in decreased accuracy of the method. This challenge is overcome by introducing at dielectric boundaries a hyperbolic-tangent smoothing function. This procedure significantly improves the accuracy of the method, with the corresponding results closely matching the predictions of the finite-difference time-domain method. This framework exhibits stable convergence behavior across all of the investigated configurations, thus confirming its robustness and scalability to complex electromagnetic scattering problems.

61. [Nonlinear Fourier spectral signatures of rogue waves observed in Bose-Einstein condensates](https://arxiv.org/abs/2607.27734)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27734v1 Announce Type: cross Abstract: Modulation instability provides an important framework for understanding rogue wave (RW) formation on continuous backgrounds. However, the formation mechanism and nonlinear spectral structures of RWs in Bose-Einstein condensate (BEC) matter-wave systems with vanishing boundary conditions remain largely unexplored. Here, we employ the nonlinear Fourier transform (NFT), based on the integrable structure of the focusing nonlinear Schr\"odinger equation and the Zakharov-Shabat scattering problem, to investigate two representative classes of first-order RWs in BEC systems. Through nonlinear spectral analysis and Darboux reconstruction, we demonstrate that both Gaussian-wave-packet-induced extreme localization events and experimentally observed Peregrine solitons are governed by the coherent dynamics of discrete soliton modes encoded in the nonlinear spectrum. For Gaussian initial states, increasing the initial width leads to an increasing number of discrete eigenvalues, resulting in a transition from fundamental solitons and bound states to Christmas-tree-like RW structures. For experimentally observed Peregrine solitons, localized perturbations reshape the discrete spectral configuration and phase evolution, enabling coherent focusing of multiple bound soliton modes. Furthermore, we reveal the spectral mechanism of higher-order RWs and propose an inverse spectral-engineering approach based on discrete-spectrum phase matching. Our results provide a nonlinear spectral perspective for understanding and controlling RW formation in matter-wave systems with vanishing boundary conditions.

62. [Three-Photon Bayesian Imaging of Ortho-Positronium](https://arxiv.org/abs/2607.27741)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27741v1 Announce Type: cross Abstract: PET provides functional images relying on two-photon coincidences from positron-electron annihilation. In human tissue, about 40\% of annihilations are preceded by Ps formation, of which o-Ps component partially decays into three photons, with the remainder annihilating via pick-off or spin-exchange into two photons. This three-photon channel carries additional information about the surrounding micro-environment, including the three-to-two-photon yield ratio as a potential diagnostic marker. We propose the TRIO algorithm, a novel three-photon event-by-event image reconstruction algorithm formulated as a Bayesian maximum a posteriori inference problem. TRIO unifies time-based trilateration, energy-based reconstruction and, for the first time, a physics-informed prior derived from the QED description of Ps decay within a single probabilistic framework. In contrast to positronium lifetime imaging, which requires a prompt photon and is therefore restricted to specific radionuclides, TRIO relies solely on the three photons and is fully compatible with standard radionuclides such as 18F. Monte Carlo simulation modelled after the Siemens Biograph Quadra scanner demonstrates a mean position error of 1.62~cm, improving by approximately a factor of two over the time-based trilateration (3.05 cm) and by about an order of magnitude over energy-based reconstruction alone (18 cm). More importantly, the proposed Bayesian approach is compatible with existing TOF-PET scanners that can register three-photon annihilation coincidences.

63. [Partial vision leads to an unexpected emergent collective behavior in active aligning particles](https://arxiv.org/abs/2607.27819)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27819v1 Announce Type: cross Abstract: The Vicsek Model represents a paradigmatic framework for understanding the collective motion of active aligning particles, traditionally assuming isotropic interaction fields. Inspired by biological systems characterized by limited perception and blind spots, we propose a generalized Vicsek model featuring two distinct, non-overlapping angular vision cones. We systematically investigate the non-equilibrium phase behavior of this system by tuning the aperture area ({\alpha}) and the front-back orientation (\b{eta}) of the cones. Our results reveal that restricting the lateral vision area destabilizes global order, shifts the critical noise, and induces highly dense traveling bands. Furthermore, breaking the front-back symmetry introduces non-reciprocal interactions that profoundly alter the emergent spatial structures: forward-biased vision drives strong clustering through "follow the leader" alignment, whereas backward-biased alignment stabilizes an exceptionally homogeneous flocking state with suppressed density fluctuations. Finally, we incorporate short-range volume exclusion, demonstrating that the structural integrity of these novel tightly-clustered phases is highly sensitive to steric interactions. Our work provides new insights into the interplay between non-reciprocal perception, spatial anisotropy, and physical constraints in active matter.

64. [PASS: Perturbation augmented space group structure sampling for transferable Fe-O machine learning interatomic potential](https://arxiv.org/abs/2607.28000)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 31 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.28000v1 Announce Type: cross Abstract: Accurate atomistic modelling of iron (Fe) oxidation requires a reliable interatomic potential, which necessitates an extensive and representative first-principles dataset for training the interatomic potential. However, Fe-oxygen (O) system is known for its structural and magnetic complexity, rendering the generation of high-quality dataset challenging. In this work, we propose the Perturbation Augmented Space group structure Sampling (PASS) method to generate extensive and representative dataset consisting of small-cell structures with less than 10 atoms. We present a systematic approach to developing a first of its kind transferable machine learning interatomic potential (MLIP) for Fe-O system based on the atomic cluster expansion (ACE) framework. We thoroughly validate the accuracy and capability of the ACE MLIP across both pure Fe and Fe-O systems through bulk, surface, and interface properties. We showcase the formation of FeO-like structure in large-scale Fe oxidation simulation using the ACE MLIP. This work demonstrates that the PASS method yields an accurate and transferable MLIP which is capable of capturing the reactive complexity of oxide growth while remaining computationally practical for extended systems.

65. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

66. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-31T11:23:34Z; Popularity: 713 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

67. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.64; Date: 2026-07-30T09:28:06Z; Popularity: 643 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

68. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-07-31T14:42:12Z; Popularity: 162 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

69. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-23T11:51:14Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

70. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

71. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

ClinLens: Towards Long-Horizon Coding Agents for Longitudinal Multimodal Clinical Data Science

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.26155

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
