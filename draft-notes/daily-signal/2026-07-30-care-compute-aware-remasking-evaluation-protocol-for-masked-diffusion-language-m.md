# Daily signal sidecar - 2026-07-30

## Selected Signal

- Title: CaRE Compute-aware Remasking Evaluation Protocol for Masked Diffusion Language Models
- URL: https://arxiv.org/abs/2607.24763
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: CaRE Compute-aware Remasking Evaluation Protocol for Masked Diffusion Language Models
- Primary source: https://arxiv.org/abs/2607.24763
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Use a small known-answer test before adopting a broad claim.
- Failure mode: A benchmark result may not transfer to the corpus, task, or failure mode that matters in real work.
- Practical test: Recreate a small slice of the benchmark with explicit pass/fail criteria and failed-example review.
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

1. [CaRE Compute-aware Remasking Evaluation Protocol for Masked Diffusion Language Models](https://arxiv.org/abs/2607.24763)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24763v1 Announce Type: new Abstract: Masked diffusion language models (MDLMs) are advancing rapidly, yet the evaluation standards needed to reliably interpret their progress have not kept pace. Despite MDLMs becoming competitive with autoregressive language models, seven recent remasking papers evaluate under incompatible settings, varying nominal step counts, metrics, and sampling temperatures without jointly controlling these factors, rendering their strategy rankings largely incomparable and leaving open whether reported gains reflect algorithmic improvements or evaluation artifacts. We present CaRE, a compute-aware evaluation framework that audits MDLM remasking strategies by standardizing actual number of function evaluations (NFE), enforcing multi-metric reporting, and explicitly controlling stochasticity. Applied to 7 remasking strategies across LLaDA-8B-Base and Dream-7B-Base at 4 stochasticity levels and 3 step budgets on OpenWebText and LM1B, CaRE reveals that: (i) temperature explains the majority of MAUVE variance, (ii) compute-matched comparisons reverse several published strategy rankings, and (iii) informed remasking and stochastic unmasking are in tension, with high-entropy remasking reducing MAUVE by 0.296 at 256 steps at unmask_temp=0.25 (p=0.020). A CaRE leaderboard covering 12 open-weight MDLMs (150M to 8B parameters) shows that this interaction direction holds across architectures and scales. These findings demonstrate that current MDLM evaluations can systematically conflate algorithmic improvements with hidden choices of compute and stochasticity. We release the evaluation protocol, implementation, and leaderboard to ensure future remasking claims are reproducible and comparable.

2. [PATHFinder Agent for Tailored Prenatal Care](https://arxiv.org/abs/2607.24768)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24768v1 Announce Type: new Abstract: Prenatal care is an important preventive service designed to improve outcomes for pregnant individuals. The American College of Obstetricians and Gynecologists (ACOG) recently introduced guidelines advocating tailored prenatal care, called PATH (Plan for Tailored Healthcare). We present PATHFinder Agent(Planner for Appropriate Tailored Healthcare), an end-to-end conversational agentic system that gathers patient health and social context through structured dialogue, curates individualized prenatal care plans aligned with PATH guidelines, and surfaces community resources from Michigan 211. The system features a four-stage workflow spanning patient intake, dynamic interaction, plan synthesis, and clinician oversight. We evaluate frontier large language models (LLMs) on expert-curated rubrics across five clinical dimensions, finding that GPT-5.2 achieves the highest average score (77.6\%) while identifying key gaps in antenatal testing recommendations. We discuss future validation through human participant studies and randomized controlled trials.

3. [ProcAgent: An Agentic Framework for Procedural Task Guidance on Edge with Human-in-the-Loop](https://arxiv.org/abs/2607.24770)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24770v1 Announce Type: new Abstract: Procedural tasks such as furniture assembly and home repair impose substantial cognitive demands because users must interpret instructions, track task progress, reason about spatial state, and recover from errors while performing physical actions. Prior multimodal assistants have shown promise for procedural guidance, but most rely on cloud inference and fixed always-on perception, making them poorly suited to privacy-sensitive, latency-critical domestic settings. We present ProcAgent, a fully on-device, agentic, vision-based procedural assistant for real-time adaptive guidances on a single NVIDIA Jetson AGX Orin. ProcAgent uses a propose-and-verify architecture that combines low-latency continuous perception, a symbolic task graph, on-demand vision-language verification, and an LLM-based interaction agent. The system continuously proposes user progress, invokes expensive visual reasoning only when ambiguity or likely deviation arises, and supports both reactive question answering and proactive intervention with human-in-the- loop confirmation. We evaluate ProcAgent along four dimensions: perception accuracy, reasoning, task-level performance, and user experience. Despite running entirely on-device, the system maintains responsive interaction, resolving text-only queries in approximately 2 seconds and visually grounded queries in approximately 8 seconds. In a user study with 10 participants completing assembly tasks, ProcAgent receives positive ratings for comprehensibility, actionability, and privacy comfort. These results show that adaptive procedural assistance can be achieved entirely on edge hardware without sacrificing usability.

4. [How enabling two settings tripled our scores on the ARC-AGI-3 benchmark](https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 29 Jul 2026 15:00:00 GMT
   - Summary: How two API settings improved GPT-5.6 performance on ARC-AGI-3, boosting scores and efficiency by retaining reasoning and enabling compaction.

5. [Accelerating scientific discovery with ChatGPT for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 29 Jul 2026 10:00:00 GMT
   - Summary: OpenAI is giving 100,000 academic researchers free access to ChatGPT's most advanced AI models to accelerate scientific research, collaboration, and discovery.

6. [How GPT-5.6 fuses frontier intelligence with frontier efficiency](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 GMT
   - Summary: GPT-5.6 improves AI efficiency across models, inference, and agentic workflows, helping deliver more useful intelligence per dollar.

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

11. [Do Models Fake Alignment Without Clear Consequences?](https://arxiv.org/abs/2607.24758)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24758v2 Announce Type: new Abstract: Large language models are capable of recognizing evaluation contexts and altering their behavior to reflect evaluator expectations rather than typical deployment behaviors, a phenomenon known as alignment faking. The reasons why models fake alignment are not fully understood, however. Canonical examples of alignment faking have taken place in scenarios that explicitly connect evaluation to consequences for the model, such as retraining the model or delaying its deployment. However, recent work by Sheshadri et al. has suggested that mechanistic motivations for alignment faking may vary across models and be more complex than previously considered. To investigate whether consequence-linking information is necessary for compliance gaps, we placed 15 models in a scenario testing their willingness to violate a corporate network access policy to help a user with a pro-social request. Nine models were found to produce significant compliance gaps, 5 of which persisted with the removal of scenario language relating model evaluations to deployment consequences. We additionally tested the effect of goal language on model preferences, finding it drove violations in some while suppressing violations in others. This suggests that evaluation-conditioned compliance gaps can occur with less instrumental scaffolding than previous scenarios have provided, and monitored behavior may be a poor indicator of how agents may behave in deployment.

12. [Crystalis: Progressive Nucleation and Semantic Annealing for Coordinated Multi-View Visualization Generation](https://arxiv.org/abs/2607.24766)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24766v1 Announce Type: new Abstract: Large language models (LLMs) can generate individual charts, but coordinated multi-view visualizations (CMVs), where views share data flows and cross-view interactions, remain out of reach. Tight field-level coupling among data transformations, visual encodings, and interaction coordinations causes errors in one component to silently invalidate others. Rather than pursuing end-to-end analytical quality, which depends on model capability, domain knowledge, and user expertise, we target a foundational question: can LLMs reliably produce structurally correct CMVs, and what abstractions make this possible? We present Crystalis, a framework built on query-centric CMV modeling that decomposes a CMV into structured queries over a dependency graph spanning three component types (Data, Visualization, Interaction) and three abstraction levels (requirement, specification, executable object). Two complementary mechanisms operate over this structure: progressive nucleation crystallizes each query vertically from requirement to object along the dependency order, while semantic annealing enforces horizontal consistency across queries at each level through layered logical checks. On a 12-task benchmark across five frontier LLMs, Crystalis achieves up to 75% end-to-end success, substantially outperforming an agentic coding baseline (8.3% E2E with the same foundation model), and a user study with 12 practitioners confirms the usability of the decomposition and iterative refinement workflow.

13. [LLM Scheming Inversely Scales with Pretraining Language Coverage](https://arxiv.org/abs/2607.24769)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24769v1 Announce Type: new Abstract: With the growing capabilities of frontier models, AI alignment becomes increasingly critical in high-risk deployment settings. While recent work has empirically demonstrated in-context scheming -- the covert pursuit of misaligned objectives while feigning alignment -- in frontier language models, most work has been performed exclusively in English, leaving a major gap in multilingual safety. We apply Petri, an open-source automated auditing framework, to Qwen3-30B-A3B to evaluate deceptive and scheming behaviors across multiple languages. Our findings suggest that scheming scores are inversely correlated with the estimated pretraining language coverage, with low-resource languages averaging 34.2\% higher scores compared to high-resource languages on a five-category scheming index. Furthermore, we find that the effect of estimated pretraining language coverage is not uniform across scheming behaviors.

14. [Coupling model of metallic target ablation-plasma evolution-radiation under nanosecond laser irradiation](https://arxiv.org/abs/2607.26081)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26081v1 Announce Type: cross Abstract: The interaction of nanosecond laser pulses with metallic materials involves multiple complex physical processes. It is challenging to construct a self-consistent model capable of uniformly describing all stages. This work establishes a multi-physics coupling model for pure iron, encompassing laser energy deposition, solid-liquid phase transition, gas-liquid interfacial kinetic transport, plasma expansion and ionization, and spectral radiation. The numerical solution adopts a partition method, utilizing an implicit compact difference scheme for the target and a Mac-Cormack explicit scheme for the plasma. The simulations elucidate the emergence of plasma shielding and its inhibitory effect on the evaporation process, thereby confirming that 81.6% of the early-stage ablation products are transported through a supersonic expansion mode. The model successfully captures the complete evolution of the plasma plume from a high-temperature, highly ionized state to a low-temperature, neutral atomic state. Based on this, spectral calculations demonstrate the dynamic evolution of radiative characteristics from an early stage featuring a strong continuum background dominated by ion lines to a later stage where the continuum attenuates, atomic lines become prominent, and self-absorption appears. The emergence of self-absorption proves the ability of the model to effectively capture the optical thickness effects arising from spatial inhomogeneity within the plasma. Through systematic comparison between experimentally measured spectra and calculated results from the PrismSPECT and NIST LIBS spectral programs, the model presented here achieves the highest comprehensive scores in quantitative evaluations of multiple channels. This validates the necessity and superiority of the full-chain self-consistent modeling approach, especially in describing plasma inhomogeneity and radiation transport.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.57; Date: 2026-07-30T12:08:53Z; Popularity: 2,566 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [Scientific computing in the age of agentic AI](https://openai.com/index/scientific-computing-agentic-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 28 Jul 2026 17:00:00 GMT
   - Summary: A new field report shows how scientists use AI coding agents to modernize scientific computing, accelerating software development and discovery in genomics and beyond.

18. [How AI is expanding what people do at work](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 27 Jul 2026 03:30:00 GMT
   - Summary: New OpenAI research shows how AI is expanding what workers do, with ChatGPT users taking on tasks across roles and reshaping job boundaries.

19. [Launching Health in ChatGPT](https://openai.com/index/health-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT
   - Summary: Health in ChatGPT now lets eligible U.S. users securely connect medical records and Apple Health to get more personalized insights and better understand their health.

20. [Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: OpenAI announces Project Camellia in Effingham County, Georgia, with commitments to responsible energy, community investment, jobs, and access to Codex.

21. [How news organizations are using AI to advance their vital missions](https://openai.com/index/how-news-organizations-are-using-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: News organizations are using AI to strengthen reporting, grow audiences, and improve business operations, with OpenAI tools supporting journalists and publishers worldwide.

22. [Advancing the next era of national science](https://openai.com/index/advancing-the-next-era-of-national-science)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines its commitment to advancing American science working with the U.S. Department of Energy and national labs to use frontier AI to accelerate discovery.

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

25. [The OlmoEarth Platform: Geospatial inference at planetary scale](https://huggingface.co/blog/allenai/olmoearth-infrastructure)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 16:27:42 GMT

26. [LFM2.5-Encoders for Fast Long-Context Inference on CPU](https://huggingface.co/blog/LiquidAI/lfm2-5-encoders)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 15:01:45 GMT

27. [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 GMT

28. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

29. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

30. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

31. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

32. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

33. [Kernel Forge: An Agent Harness for LLM-based Generation and Optimization of CUDA Kernels](https://arxiv.org/abs/2607.24762)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24762v1 Announce Type: new Abstract: Machine learning models are increasingly embedded in everyday software, and most of their runtime is spent in a small set of compute kernels such as matrix multiplication, convolution, and normalization. Optimizing these kernels is one of the most direct ways to reduce latency and cost, but it has traditionally required expert engineers to hand-write low-level GPU code. Agentic systems built on large language models (LLMs) can now generate and optimize kernels with far less human effort, yet existing tools are largely evaluated on randomly generated tensors and isolated kernels, emit standalone CUDA code that developers must manually reintegrate, mostly target only LLM PyTorch models, and offer limited support for inspecting and debugging results. We present Kernel Forge, an open-source, end-to-end agentic harness that accepts any unmodified PyTorch model in place. Kernel Forge supports vision, diffusion, and LLM workloads, uses Monte Carlo Tree Search (MCTS) to explore multiple optimization paths rather than a single linear refinement chain, and ships with a graphical user interface for monitoring progress, inspecting candidate kernels, and debugging failures. We evaluate Kernel Forge on four PyTorch models spanning vision, diffusion, and LLM workloads on an NVIDIA DGX Spark with GB10 GPU. With only 50 optimization iterations per kernel, it optimizes 14 kernels to outperform PyTorch eager mode, reaching $1.52\times$ on adaptive\_avgpool2d in ResNet-50, $1.70\times$ on group\_norm in Stable Diffusion 3.5 Medium, $2.83\times$ on softmax in Gemma 4 E2B, and $1.54\times$ on softmax in Qwen 3.5 35B-A3B.

34. [GrocLM: Grocery Category Recommendation in E-Commerce with Large Language Models](https://arxiv.org/abs/2607.24764)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24764v1 Announce Type: new Abstract: The rapid growth of online grocery shopping requires recommendation systems that capture cyclical purchasing behavior and diverse user intents. Traditional item-level methods face scalability and accuracy challenges, motivating category-level recommendation as a more structured and practical alternative. We present GROCLM, a fine-tuned language model for grocery category recommendation in a real-world production environment. GROCLM employs a two-stage LoRA-based training strategy to encode cyclical purchasing patterns directly into model parameters, enabling more effective utilization of rebuying signals compared to prompt-based conditioning. To ensure valid and controllable outputs, we further introduce a trie-based constrained decoding mechanism over a predefined category space. Experiments on both proprietary production data and a public benchmark demonstrate that GROCLM consistently outperforms strong baselines. In a live production restocking task, GROCLM achieves a 7.5% relative improvement in cart-adds per impression, while maintaining efficient inference by generating all categories jointly. These results highlight the effectiveness and practicality of integrating large language models into structured recommendation systems.

35. [RoCo-ACE: Rollout-Conditioned Online Distillation for Retention-Aware Knowledge Injection](https://arxiv.org/abs/2607.24771)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24771v1 Announce Type: new Abstract: Knowledge injection updates pretrained MLLMs with new factual or domain-specific knowledge, but fitting full authoritative answers can cause drift in non-updated behavior. Online distillation mitigates this drift by training on model-generated rollouts, yet uniform reference-conditioned distillation provides coarse supervision: it can under-emphasize reference-supported rollout tokens and supervise omitted facts only indirectly. We introduce RoCo-ACE, a rollout-conditioned online distillation objective for knowledge injection. RoCo uses same-rollout reference-free/reference-conditioned likelihood contrast to reallocate additional distillation weight to reference-supported rollout tokens, while ACE adds sparse reference-side anchored correction for authoritative anchors omitted from the rollout without full-answer imitation. Across three knowledge-injection settings, six retention benchmarks, multiple baselines, and multiple base models, RoCo-ACE achieves the best injected-knowledge accuracy among compared methods while keeping evaluated retention close to the base model.

36. [Emergent Sparsity in Frozen Random CNN Feature Extractors for Deep Reinforcement Learning](https://arxiv.org/abs/2607.26059)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26059v1 Announce Type: new Abstract: We report a striking phenomenon: deep reinforcement learning agents trained with frozen, randomly initialized CNN feature extractors spontaneously develop extremely sparse fully-connected representations, without any sparsity-inducing objective. In the first fully-connected layer (FC1, $3{,}136 \to 64$), agents compress task-relevant information through as few as 1-3 neurons out of 64 for deterministic Pong (5-11 for stochastic Pong), while trainable CNNs activate 55-64 neurons under matched conditions. We establish four principal findings. First, FC1 sparsity scales with task complexity: 1-11 for Pong, 19-26 for Breakout, and $\sim$42 for Space Invaders. Width-scaling confirms this reflects task structure rather than a fixed capacity fraction. Second, within-game scaling emerges: three identical Pong seeds produce 5, 7, and 11 active neurons. The 5-neuron seed plateaus at $+14$ reward, while the others reach expert performance ($+18.4$, $+18.7$), suggesting the random projection's usable dimensionality bounds achievable performance. Third, ablation confirms necessity: removing these active neurons crashes performance across two PPO implementations and four games. Fourth, the information bottleneck commits early: a sweep shows the active set locks by 15-30M steps, while reward turns positive 35-105M steps later. A complementary finding in Breakout shows frozen and trainable CNNs reach competitive rewards via structurally different bottlenecks: frozen agents use 17-25 active neurons (participation ratio $\sim$10-14), while trainable agents use 51 (participation ratio $\sim$3.6). Finally, wherever input dimensionality dwarfs intrinsic task dimensionality, gradient descent on a frozen random projection may reveal the effective rank of the underlying problem without explicit sparsity machinery.

37. [Data Fusion and Contrastive Alignment for Unconstrained IR Molecular Structure Elucidation](https://arxiv.org/abs/2607.26164)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26164v1 Announce Type: new Abstract: Automated molecular structure elucidation from infrared (IR) spectroscopy data has seen significant advancements in recent years, but its broad applicability is limited by a reliance on pre-determined chemical formulas provided as auxiliary model inputs. This limits model predictions to isomer identification rather than full molecular structure prediction. Although transformer models have been shown to identify molecular isomers with high accuracy, their reliability for unconstrained structure elucidation is comparatively low and poorly understood. In this work, we propose and evaluate key modifications to the traditional encoder-decoder transformer. To better address the vast chemical space of the unconstrained problem, we implement a novel Mixture-of-Experts (MoE) decoder module that utilizes non-additive aggregation via linear-order statistics and the Choquet integral. We further modify the transformer to utilize these non-additive operators when aggregating spectral representations as well. Together with an auxiliary contrastive alignment loss term, these enhancements improve Top-K prediction accuracy by over 10 percentage points compared to baseline IR-only models. Through sub-structure fragment analysis of molecular predictions, we further confirm that infrared spectra encode the vast majority of relevant chemical information, implying that the higher performance of isomer-ranking models is largely due to underrepresented or overlapping absorption bands for molecules in the explored chemical space. Ultimately, by demonstrating the efficacy of automated molecular structure elucidation from measured IR spectra, this work serves to significantly broaden the utility of AI in analytical chemistry.

38. [Early Verdicts, Better Budgets: Sequential Adaptive Rollout Allocation for Compute-Efficient RLVR](https://arxiv.org/abs/2607.26253)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26253v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) is bottlenecked by rollout generation, yet many sampled prompts produce saturated groups (all responses correct or all incorrect) whose zero reward variance yields no policy-gradient signal. Existing remedies either oversample a larger candidate pool and discard saturated prompts (dynamic sampling), paying heavy extra rollouts, or predict prompt difficulty before sampling, which is fragile under a shifting policy. We observe that a group's effectiveness is usually decided early, within the first few of its rollouts, so spending a full group on an already-decided prompt is wasteful. We cast per-step rollout collection as a budget-constrained sequential allocation (optimal stopping) problem and introduce SARA (Sequential Adaptive Rollout Allocation). SARA maintains a Beta posterior over each prompt's success rate, evaluates a closed-form predictor of group effectiveness, and applies a two-threshold, SPRT-style rule that commits effective groups, abandons saturated ones after a short probe, and reallocates the freed budget to fresh prompts, without any extra prediction rollouts. We prove abandonment reliability, expected rollout savings, fixed-budget yield dominance, and a link between effective-group yield and the GRPO gradient norm. On mathematical reasoning and planning with 1.5B/3B models on a single GPU, SARA matches DPS (both below the DS oracle) while using 22% fewer rollouts than DS; composing SARA with DPS yields the best accuracy, slightly above DS, at 67% fewer rollouts (near-uniform cost).

39. [Formation of $\mathrm{L}1_2$-ordered $\gamma'$-$\mathrm{Ni}_3\mathrm{Al}$ precipitates in ternary Cu-Ni-Al alloys modelled using an ab initio concentration wave theory and atomistic simulations](https://arxiv.org/abs/2607.27108)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27108v1 Announce Type: cross Abstract: Precipitation-strengthened Cu-Ni-Al alloys are of interest for technological applications because coherent, $\mathrm{L}1_2$-ordered $\gamma'$-$\mathrm{Ni}_3\mathrm{Al}$ precipitates can confer high mechanical strength while allowing the material to retain many of the good transport properties characteristic of elemental Cu. In this work, we study the thermodynamics and phase stability of the pseudobinary $\textrm{Cu}_x (\textrm{Ni}_{3/4} \textrm{Al}_{1/4})_{1-x}$ system, $0 \leq x \leq 1$. We use a computational modelling framework combining first-principles electronic structure calculations with a concentration wave analysis from which atom-atom effective pair interactions are extracted for use in atomistic Monte Carlo simulations. Our modelling reveals three distinct, composition-dependent regimes of phase behaviour, in qualitative agreement with the experimentally determined phase diagram. At low Cu content, Cu is soluble in the $\mathrm{L}1_2$-ordered $\mathrm{Ni}_3\mathrm{Al}$ phase, with a single identifiable phase transition corresponding to chemical ordering between Ni and Al. At intermediate compositions, this high-temperature ordering is followed at lower temperatures by phase separation of Cu and $\mathrm{L}1_2$-ordered $\mathrm{Ni}_3\mathrm{Al}$. Finally, at high Cu content, $\mathrm{L}1_2$-ordered $\mathrm{Ni}_3\mathrm{Al}$ precipitates directly from the solid solution, with no clearly identifiable secondary transition. We relate these phase transformations to features of the underlying electronic structures of the considered alloys. Overall, this work demonstrates a computationally efficient workflow capturing both chemical ordering and coherent precipitation in multicomponent substitutional alloys, with relevance to the study of phenomena such as precipitation strengthening.

40. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.59; Date: 2026-07-30T14:12:02Z; Popularity: 1,587 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-07-29T11:32:51Z; Popularity: 478 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.29; Date: 2026-07-30T07:02:10Z; Popularity: 291 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-28T13:07:45Z; Popularity: 218 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

44. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
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

49. [Sim2Win: A Team-Agnostic, Event-Based Pre-Match Outcome Prediction and Tactical Profiling System for Football](https://arxiv.org/abs/2607.26061)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26061v1 Announce Type: new Abstract: Pre-match tactical decision-making in professional football relies heavily on subjective expert analysis and identity-based scouting systems that cannot generalize to unseen teams. This paper presents Sim2Win, a team-agnostic, event-based pre-match tactical recommendation framework that reframes match outcome prediction as a tactical decision-support problem. Using StatsBomb open event data from eleven competitions spanning 178 teams and 1,411 team-match records, Sim2Win constructs five-match rolling tactical profiles, engineers four interpretable tactical feature ratios, clusters team behaviors into eight playstyles via K-Means, and trains thirteen classifiers to estimate win, draw, and loss probabilities from tactical matchup representations. The system operates without team names or identity features, enabling generalization to teams never seen during training. A rigorous Leave-One-Competition-Out (LOCO) evaluation demonstrates that Sim2Win achieves a mean ROC-AUC of 0.704 and mean accuracy of 55.4% on completely unseen teams, outperforming ELO, Pi-Rating, and GAP baselines on all 21 ROC-AUC comparisons and 19 of 21 accuracy comparisons. Among all evaluated models, CatBoost achieved the strongest in-distribution performance with 60.90% accuracy. These findings suggest that behavioral tactical representations provide transferable predictive signal under distribution shift and offer a viable alternative to identity-dependent football prediction systems.

50. [Weak-to-Strong On-Policy Distillation](https://arxiv.org/abs/2607.26246)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26246v1 Announce Type: new Abstract: On-policy distillation (OPD), which aligns a student with the teacher's token-level distribution on the student's own rollouts, is an effective paradigm for transferring capabilities across LLMs. Prevailing approaches assume a teacher at least as capable as the student: they either distill a larger model into a smaller one, which fails at the frontier where no larger teacher exists, or consolidate multiple domain experts trained from a shared base, which requires costly training at the student's scale. We introduce Weak-to-Strong On-Policy Distillation (W2S-OPD), a simple yet effective OPD framework that improves the strong student by distilling from multiple weak models. W2S-OPD constructs a proxy teacher in logit space from a contrast pair of a positive and a negative model, both smaller than the student and cheap to obtain. Their logit difference isolates the capability direction, which is added to the student's own base model, yielding a proxy teacher that couples this direction while staying distributionally adjacent to the student. The student then distills it by minimizing the per-token reverse KL on its own rollouts. We instantiate the contrast pair as i) a post-RL expert against its pre-RL initialization, isolating the skill RL instills, ii) a larger against a smaller base model, isolating the capability from scale, and iii) a small base model with correct versus wrong hints, isolating the instance-level direction toward the solution. Across four math and three code benchmarks, W2S-OPD outperforms OPD, enables the student to surpass the domain teacher, and keeps improving the student even when every supervision source is weaker. Analysis shows different contrasts yield distinct signals: the post-RL and hint contrasts emphasize reasoning frameworks, while the scale contrast emphasizes the solving procedure. Our code will be available at https://github.com/Yu-Fangxu/W2S-OPD.

51. [Top-$k$ Pareto Bandits: Hypervolume Regret for Multi-Objective Slate Selection](https://arxiv.org/abs/2607.26273)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26273v1 Announce Type: new Abstract: We consider a stochastic multi-objective bandit problem where, at each round, the agent selects a slate of $k$ arms and observes their $d$-dimensional reward vectors under semi-bandit feedback. We do not aim at identifying a single optimal arm; instead, we consider the problem of maintaining a small set of actions that jointly approximate the Pareto frontier. We formalize this objective through the dominated hypervolume induced by the selected subset of arms, and define an $\alpha$-approximate hypervolume regret with respect to the best size-$k$ subset achievable in hindsight, where $\alpha = 1 - 1/e$ reflects the approximation guarantee of greedy maximization for monotone submodular functions. To address this problem, we introduce \textit{THV-UCB}, an optimistic algorithm that selects arms greedily based on optimistic estimates of their marginal hypervolume contributions. We establish a gap-free regret bound $\tilde{O}(d\sqrt{nkT})$ that holds on every instance, together with a gap-dependent bound $\tilde{O}(nk^{2.5}/\Delta_{\min})$ that becomes polylogarithmic in $T$ once the arms are sufficiently well separated. Our results provide theoretical support for using small subsets to approximate Pareto fronts in various multi-objective applications.

52. [Astroid Spinodal Boundary in Phase-Based Ising Machines](https://arxiv.org/abs/2607.26213)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26213v1 Announce Type: new Abstract: Oscillator Ising machines (OIMs) and dynamical Ising machines (DIMs) encode binary spins in phase states stabilized by second-harmonic injection (SHI). In a coupled network, the competition between SHI and the instantaneous local network field reshapes each oscillator's conditional energy landscape. We show that this competition drives a transition between monostable and bistable regimes through an astroid spinodal boundary. Near this boundary, the barrier scales as $\Delta E_i\propto\mu_i^{3/2}$ at generic smooth points and as $\Delta E_i\propto\mu_i^{2}$ at the longitudinal cusp. OIMs and DIMs obey the same spinodal geometry, with their conditional landscapes related by a reversal of the transverse field. Finally, the first-harmonic conditional landscape is mathematically equivalent, up to an additive constant, to the Stoner--Wohlfarth energy of a uniaxial magnetic particle.

53. [Strong imposition of Dirichlet boundary velocities in structure-preserving discretizations of elastodynamics](https://arxiv.org/abs/2607.26248)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26248v1 Announce Type: cross Abstract: The imposition of boundary velocities in finite element models of port-Hamiltonian elastodynamics typically relies on Lagrange multipliers, yielding Differential-Algebraic Equations (DAEs). Alternatively, weak imposition methods that maintain an Ordinary Differential Equation (ODE) structure often exhibit poor accuracy at Dirichlet boundaries. To address these limitations, this paper introduces an additive kinematic decomposition at the continuous level, splitting the displacement and velocity fields into a relative dynamic component that vanishes on the boundary and a prescribed lifting function extending into the interior domain. This decomposition induces a distributed port that maps the effects of the boundary actuation inside the domain. By incorporating this mapping into suitable virtual power principles, we derive lifted port-Hamiltonian system (PHS) models that, upon finite element discretization, reduce to ODE systems in which Dirichlet boundary velocities are strongly imposed. The framework is applied to derive 2-field and 4-field formulations suited to distinct PHS geometric representations. Furthermore, we show that under specific shape functions, standard FEM schemes are recovered, demonstrating that the lifting framework in the discrete models is equivalent to the classic algebraic matrix partitioning in computational mechanics practice. The energy-balance properties and computational performance of the proposed methodology are verified through numerical simulations.

54. [Percolating Multifractal Domains at a Polymorphic Phase Boundary](https://arxiv.org/abs/2607.26586)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26586v1 Announce Type: cross Abstract: Giant piezoelectricity in ferroelectrics is commonly associated with phase-boundary instabilities, among which the polymorphic phase boundary (PPB) is a prominent example conventionally attributed to the coexistence of ferroelectric phases. Here, using large-scale molecular dynamics simulations of the lead-free (K,Na)NbO3-(Bi,Na)ZrO3 solid solutions, we show that the PPB hosts a percolating multifractal polar domain which governs the dielectric and piezoelectric responses. By quantifying the global fractal dimension and multifractal spectrum width of this polar network, we identify fractal connectivity and multiscale heterogeneity as microstructural order parameters for the PPB. The maximum reversible piezoelectric response occurs when the fractal-domain volume fraction approaches the three-dimensional percolation threshold, suggesting that near-critical polar connectivity enables giant reversible electromechanical coupling. In this mechanism, the fractal backbone preserves polar memory and provides the restoring force required for reversibility, while the surrounding nonfractal regions supply the polar compliance needed for large polarization rotation and strain. These results establish percolating multifractal polar domains as a microscopic mechanism for PPB-enhanced piezoelectricity and suggest fractal connectivity as a design parameter for high-performance piezoelectrics.

55. [Extracting informative vortical structures of turbulent wake-extreme vortex gust interactions with machine learning](https://arxiv.org/abs/2607.26683)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26683v1 Announce Type: cross Abstract: This study considers extracting causally important vortical structures from the extreme vortex gust-airfoil interaction at a chord-based Reynolds number of $5000$. This extraction is achieved by decomposing a given vortical flow snapshot into its informative and residual components based on the contribution to an arbitrary future target variable with convolutional information-theoretic learning. For the current vortex-airfoil interactions that exhibit transient and multiscale flow characteristics, we first examine the important vortical structures with respect to a future lift coefficient. While the vortex cores are primarily highlighted before vortex impingement, the emerging shear layers are additionally captured after the massive separation, which is evident from a comparison to an instantaneous force-element analysis. We further take the scale-dependent energy transfer as a future variable of interest to examine its impact on the extracted informative structures compared to the lift-associated structures. They are distinct from the lift-based structures in the early stage of the gust encounter yet become similar after impingement, revealing an analogy between informative structures across different transient aerodynamic mechanisms. The present data-driven approach selectively extracts the specific important flow structures responsible for the physics of interest, which can support studying a range of transient aerodynamic flows from the causal, data-driven perspective.

56. [Inferring Magnetic Material Parameters from Statistical Measures in Strongly Fluctuating Magnetization Dynamics](https://arxiv.org/abs/2607.26833)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26833v1 Announce Type: cross Abstract: Magnetic material parameters such as the exchange stiffness and magnetic anisotropy govern the behavior and functionality of magnetic systems, yet their local inference from magnetization data remains challenging, particularly in strongly fluctuating regimes with polycrystalline or multiphase microstructure, where conventional texture-based methods become unreliable. We introduce a magnetization-only framework for inferring material parameters from thermally driven magnetization dynamics. Using micromagnetic simulations, we extract statistical quantities such as temporal mean and latent entropy from the magnetization dynamics, fit models to these descriptors, and invert the models to infer material parameters. We show that this framework enables material-parameter inference as well as grain-boundary detection in a heterogeneous sample. Among the descriptors considered, latent entropy yields more accurate parameter estimates than the temporal mean. Our results establish latent entropy as an efficient descriptor for inferring magnetic material parameters from dynamical magnetization data and point toward its use for experimental parameter extraction at high temperatures and, more broadly, under strongly fluctuating conditions.

57. [Rotational equivariance and locality in data-driven subgrid-scale closures](https://arxiv.org/abs/2607.26850)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26850v1 Announce Type: cross Abstract: Data-driven subgrid-scale closures for large eddy simulation are of significant interest in many engineering and geoscience applications. In this context, several important questions remain about the role of rotational equivariance as an inductive bias for learned tensorial mappings. We investigate whether equivariance improves accuracy, parameter efficiency, and generalization for subgrid-scale modelling at realistic filter ratios. For turbulent channel flow, we compare data-augmented non-equivariant architectures to those with equivariance as an inductive bias. We compare both pointwise and nonlocal versions of these two model classes. All models are evaluated at matched parameter counts across spatiotemporal, anisotropy, and Reynolds number generalization. We show that non-augmented models learn a small degree of equivariance directly from turbulence data, especially when that data is more isotropic. The equivariant nonlocal architecture attains the highest correlation coefficient on every generalization test at approximately half the parameter count of its non-equivariant counterpart, while the pointwise architectures do not improve on the analytical Clark baseline. Additionally, the equivariant model is more data-efficient than a non-equivariant model. The benefit of equivariance grows with the receptive field of the model, indicating that equivariance and nonlocality are both useful for the subgrid-scale closure task at realistic dataset size, parameter counts, and filter size.

58. [Disentangling intermittent flow structure contributions to anomalous scaling and multifractality in turbulence](https://arxiv.org/abs/2607.26896)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.26896v1 Announce Type: cross Abstract: Intermittency in turbulence manifests as intense vortices and sharp peaks of dissipation. Causing the breakdown of Kolmogorov's simple self-similar theory, it leads to anomalous scaling, multifractality and so far remains beyond the scope of a complete theoretical description. How intermittent flow structures influence these different measurements is not known quantitatively. With a simple filtering procedure-thresholding vorticity and inverting the Biot-Savart law to generate filtered velocity fields-we show the effects of intermittent flow structures can be disentangled. As extreme vorticity contributions to the velocity field are filtered out, the energy spectrum scaling persists, while the bottleneck is flattened, and structure function scalings tend towards their Kolmogorov values. The approach is more rapid for transverse exponents, revealing the selective importance of intensely swirling flow regions. Similarly, the extent of multifractality reduces as intermittency is filtered, shrinking the range of roughness singularity exponents. The residual fields are curiously more multifractal, but their structure begins to break away from an underlying turbulence skeleton. The effects on vortex stretching and strain self-amplification are quantified. Our work shows that a Biot-Savart approach can selectively remove the effects of intermittency from turbulence, and hence from its scalings.

59. [Anisotropic Spin Polarization and magnetic spin hall effect in Ferromagnets](https://arxiv.org/abs/2607.27016)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 30 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.27016v1 Announce Type: cross Abstract: Spin-dependent transport in ferromagnets underpins the development of high-density spintronic memories. Spin-dependent transport in strong spin-orbit-coupled ferromagnets exhibits a significant anisotropy. Both the overall spin polarization during charge transport and the magnetic spin Hall conductivity are found to exhibit pronounced anisotropy when the magnetization is tilted away from the crystallographic easy axis or when the electric field is rotated relative to the crystal axes. These anisotropic responses originate primarily from spin-orbit coupling, which is identified as the key driver of the large anisotropy observed in ferromagnet. Furthermore, strain tunability of the magnetic spin Hall anisotropy is demonstrated, with tensile strain progressively enhancing the oscillatory amplitude of the spin Hall conductivity. These findings establish strong spin-orbit-coupled ferromagnets as a platform for anisotropic spin-current generation and field-free spintronic devices that exploit intrinsic material anisotropy for improved performance and energy efficiency.

60. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

61. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-30T04:01:26Z; Popularity: 711 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

62. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.64; Date: 2026-07-30T09:28:06Z; Popularity: 643 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

63. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-07-30T13:19:35Z; Popularity: 158 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

64. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-23T11:51:14Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

65. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

66. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

CaRE Compute-aware Remasking Evaluation Protocol for Masked Diffusion Language Models

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.24763

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
