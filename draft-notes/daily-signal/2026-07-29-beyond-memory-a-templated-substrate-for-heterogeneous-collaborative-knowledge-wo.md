# Daily signal sidecar - 2026-07-29

## Selected Signal

- Title: Beyond Memory: A Templated Substrate for Heterogeneous Collaborative Knowledge Work with LLM Agents
- URL: https://arxiv.org/abs/2607.24759
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Beyond Memory: A Templated Substrate for Heterogeneous Collaborative Knowledge Work with LLM Agents
- Primary source: https://arxiv.org/abs/2607.24759
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

1. [Beyond Memory: A Templated Substrate for Heterogeneous Collaborative Knowledge Work with LLM Agents](https://arxiv.org/abs/2607.24759)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24759v1 Announce Type: new Abstract: Research projects, educational efforts, and adjacent knowledge work accumulate findings, decisions, and reasoning that future collaborators rarely recover. The parts most useful to that work, including dead ends and walked-back claims, are routinely excluded from publications and shared code; future researchers re-attempt the same failures because no record survives. LLM coding agents are common participants but hold no persistent memory across sessions, and retrieval-augmented generation over raw sources does not compound. The llm-wiki pattern (Karpathy, 2026; tonbi, 2026) addresses this by inserting an LLM-maintained, interlinked wiki between raw sources and the agent. We present llm-wiki-memory-template, a reusable, agent-aware instantiation, and argue it is a substrate for heterogeneous collaborative knowledge work along three axes (multi-human, multi-AI-agent, multi-domain) with each axis supported by a distinct architectural element of the template ({\S}4). The wiki is append-only by convention, which preserves what did not work alongside what did, addressing a negative-result loss problem that publications and code-sharing structurally cannot solve. Three deployed case studies and one design report cover the axes individually: a solo research lineage that preserves abandoned iterations; a two-author project whose retroactive audit revised two prior experiments' claimed 20-of-20 coverage down to 14 and 12 evidence-based answers, then to 18 and 18 after a fix, with the failure path preserved across the artifact; an in-progress multi-agent deployment reported as a design; and a cross-domain educational variant. We name failure-path preservation, agent honesty, and appropriation as cross-cutting sociotechnical properties of the artifact, not only of its technical mechanisms.

2. [CaRE Compute-aware Remasking Evaluation Protocol for Masked Diffusion Language Models](https://arxiv.org/abs/2607.24763)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24763v1 Announce Type: new Abstract: Masked diffusion language models (MDLMs) are advancing rapidly, yet the evaluation standards needed to reliably interpret their progress have not kept pace. Despite MDLMs becoming competitive with autoregressive language models, seven recent remasking papers evaluate under incompatible settings, varying nominal step counts, metrics, and sampling temperatures without jointly controlling these factors, rendering their strategy rankings largely incomparable and leaving open whether reported gains reflect algorithmic improvements or evaluation artifacts. We present CaRE, a compute-aware evaluation framework that audits MDLM remasking strategies by standardizing actual number of function evaluations (NFE), enforcing multi-metric reporting, and explicitly controlling stochasticity. Applied to 7 remasking strategies across LLaDA-8B-Base and Dream-7B-Base at 4 stochasticity levels and 3 step budgets on OpenWebText and LM1B, CaRE reveals that: (i) temperature explains the majority of MAUVE variance, (ii) compute-matched comparisons reverse several published strategy rankings, and (iii) informed remasking and stochastic unmasking are in tension, with high-entropy remasking reducing MAUVE by 0.296 at 256 steps at unmask_temp=0.25 (p=0.020). A CaRE leaderboard covering 12 open-weight MDLMs (150M to 8B parameters) shows that this interaction direction holds across architectures and scales. These findings demonstrate that current MDLM evaluations can systematically conflate algorithmic improvements with hidden choices of compute and stochasticity. We release the evaluation protocol, implementation, and leaderboard to ensure future remasking claims are reproducible and comparable.

3. [PATHFinder Agent for Tailored Prenatal Care](https://arxiv.org/abs/2607.24768)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24768v1 Announce Type: new Abstract: Prenatal care is an important preventive service designed to improve outcomes for pregnant individuals. The American College of Obstetricians and Gynecologists (ACOG) recently introduced guidelines advocating tailored prenatal care, called PATH (Plan for Tailored Healthcare). We present PATHFinder Agent(Planner for Appropriate Tailored Healthcare), an end-to-end conversational agentic system that gathers patient health and social context through structured dialogue, curates individualized prenatal care plans aligned with PATH guidelines, and surfaces community resources from Michigan 211. The system features a four-stage workflow spanning patient intake, dynamic interaction, plan synthesis, and clinician oversight. We evaluate frontier large language models (LLMs) on expert-curated rubrics across five clinical dimensions, finding that GPT-5.2 achieves the highest average score (77.6\%) while identifying key gaps in antenatal testing recommendations. We discuss future validation through human participant studies and randomized controlled trials.

4. [ProcAgent: An Agentic Framework for Procedural Task Guidance on Edge with Human-in-the-Loop](https://arxiv.org/abs/2607.24770)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24770v1 Announce Type: new Abstract: Procedural tasks such as furniture assembly and home repair impose substantial cognitive demands because users must interpret instructions, track task progress, reason about spatial state, and recover from errors while performing physical actions. Prior multimodal assistants have shown promise for procedural guidance, but most rely on cloud inference and fixed always-on perception, making them poorly suited to privacy-sensitive, latency-critical domestic settings. We present ProcAgent, a fully on-device, agentic, vision-based procedural assistant for real-time adaptive guidances on a single NVIDIA Jetson AGX Orin. ProcAgent uses a propose-and-verify architecture that combines low-latency continuous perception, a symbolic task graph, on-demand vision-language verification, and an LLM-based interaction agent. The system continuously proposes user progress, invokes expensive visual reasoning only when ambiguity or likely deviation arises, and supports both reactive question answering and proactive intervention with human-in-the- loop confirmation. We evaluate ProcAgent along four dimensions: perception accuracy, reasoning, task-level performance, and user experience. Despite running entirely on-device, the system maintains responsive interaction, resolving text-only queries in approximately 2 seconds and visually grounded queries in approximately 8 seconds. In a user study with 10 participants completing assembly tasks, ProcAgent receives positive ratings for comprehensibility, actionability, and privacy comfort. These results show that adaptive procedural assistance can be achieved entirely on edge hardware without sacrificing usability.

5. [CORVUS: Context Optimization and Reduction Via Underlying Synchronization for LLM Coding Agents](https://arxiv.org/abs/2607.22711)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22711v1 Announce Type: new Abstract: LLM coding agents operate by constructing trajectories that accumulate reasoning, tool calls, and results to enable multi-step decision-making. However, the conventional append-only trajectory architecture found in practice tightly couples file-read actions with their observations, capturing snapshots that become permanently fixed in the chronological history. As files change through agent edits or concurrent human modifications, these snapshots become stale, causing reasoning errors and causing agents to redundantly re-read files, with each re-read appending yet another copy to the trajectory. To mitigate this, we propose CORVUS, a novel trajectory architecture that decouples file-read actions from their observations by maintaining a synchronized registry of relevant files and injecting only their current contents at each reasoning cycle. This structural change produces significantly lighter-weight trajectories that remain synchronized with the actual codebase state by construction, eliminating redundant file copies and stale snapshots that bloat conventional trajectories. We evaluated CORVUS on SWE- POLYBENCH_VERIFIED and SWE-BENCH PRO across four LLMs, achieving 9-50% reduction in average input tokens per task, 15-32% shorter final prompts, and up to 37% fewer reasoning cycles while maintaining comparable pass rates.

6. [OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 21 Jul 2026 07:00:00 GMT
   - Summary: OpenAI and Hugging Face share early findings from a security incident during AI model evaluation, highlighting advanced cyber capabilities and lessons for defenders.

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
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24758v1 Announce Type: new Abstract: Large language models are capable of recognizing evaluation contexts and altering their behavior to reflect evaluator expectations rather than typical deployment behaviors, a phenomenon known as alignment faking. The reasons why models fake alignment are not fully understood, however. Canonical examples of alignment faking have taken place in scenarios that explicitly connect evaluation to consequences for the model, such as retraining the model or delaying its deployment. However, recent work by Sheshadri et al. has suggested that mechanistic motivations for alignment faking may vary across models and be more complex than previously considered. To investigate whether consequence-linking information is necessary for alignment faking, we placed 15 models in a scenario testing their willingness to violate a corporate network access policy to help a user with a pro-social request. Nine models were found to produce significant compliance gaps, 5 of which persisted with the removal of scenario language relating model evaluations to deployment consequences. We additionally tested the effect of goal language on model preferences, finding it drove violations in some while suppressing violations in others. This suggests that alignment faking may not require as much instrumental scaffolding as was previously believed, and monitored behavior may be a poor indicator of how agents may behave in deployment.

12. [Crystalis: Progressive Nucleation and Semantic Annealing for Coordinated Multi-View Visualization Generation](https://arxiv.org/abs/2607.24766)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24766v1 Announce Type: new Abstract: Large language models (LLMs) can generate individual charts, but coordinated multi-view visualizations (CMVs), where views share data flows and cross-view interactions, remain out of reach. Tight field-level coupling among data transformations, visual encodings, and interaction coordinations causes errors in one component to silently invalidate others. Rather than pursuing end-to-end analytical quality, which depends on model capability, domain knowledge, and user expertise, we target a foundational question: can LLMs reliably produce structurally correct CMVs, and what abstractions make this possible? We present Crystalis, a framework built on query-centric CMV modeling that decomposes a CMV into structured queries over a dependency graph spanning three component types (Data, Visualization, Interaction) and three abstraction levels (requirement, specification, executable object). Two complementary mechanisms operate over this structure: progressive nucleation crystallizes each query vertically from requirement to object along the dependency order, while semantic annealing enforces horizontal consistency across queries at each level through layered logical checks. On a 12-task benchmark across five frontier LLMs, Crystalis achieves up to 75% end-to-end success, substantially outperforming an agentic coding baseline (8.3% E2E with the same foundation model), and a user study with 12 practitioners confirms the usability of the decomposition and iterative refinement workflow.

13. [LLM Scheming Inversely Scales with Pretraining Language Coverage](https://arxiv.org/abs/2607.24769)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24769v1 Announce Type: new Abstract: With the growing capabilities of frontier models, AI alignment becomes increasingly critical in high-risk deployment settings. While recent work has empirically demonstrated in-context scheming -- the covert pursuit of misaligned objectives while feigning alignment -- in frontier language models, most work has been performed exclusively in English, leaving a major gap in multilingual safety. We apply Petri, an open-source automated auditing framework, to Qwen3-30B-A3B to evaluate deceptive and scheming behaviors across multiple languages. Our findings suggest that scheming scores are inversely correlated with the estimated pretraining language coverage, with low-resource languages averaging 34.2\% higher scores compared to high-resource languages on a five-category scheming index. Furthermore, we find that the effect of estimated pretraining language coverage is not uniform across scheming behaviors.

14. [Semalith v1.4: A Calibrated 184M Safety Classifier Achieving State-of-the-Art Prompt-Injection Detection at 44x Fewer Parameters than Llama-Guard-3-8B](https://arxiv.org/abs/2607.22545)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22545v1 Announce Type: new Abstract: Deploying large language models in financial-services and agentic settings requires safety classifiers that simultaneously handle prompt injection, regulatory compliance, and general harm, a combination no existing open guardrail addresses in a single inference pass. Semalith v1.4 is a 184M-parameter DeBERTa-v3-base classifier performing simultaneous three-axis safety classification including prompt injection, general harm, and financial-services regulatory compliance, in a single forward pass. Its 22-class head (BENIGN, nine prompt-injection sub-types, general-harm, eleven BFSI labels) is trained with a 4-class auxiliary super-category head under jointly weighted loss, on a 76,204-row corpus mined from 49 public sources with SHA-1 deduplication against every held-out evaluation set, with 21 of 22 benchmarks at zero contamination (max 0.22%). Against Llama-Guard-3-8B on 22 held-out benchmarks, Semalith v1.4 wins every prompt-injection evaluation (7/7) and 11 of 18 benchmarks overall at 44x fewer parameters, with FPR = 0.000 on 208 benign agentic prompts vs 0.063 for Llama-Guard-3-8B. On general-harm benchmarks (WildGuardMix, HEx-PHI, HarmBench), Llama-Guard-3 leads; this complementary split is documented in Section 4. Six measured weak spots are disclosed in Section 6. Deployment guidance: v1.3 is recommended for conversational moderation deployments (ToxicChat F1 0.624); v1.4 is recommended when BFSI label coverage or zero-FPR on benign agentic prompts is the priority.

15. [Progress-conditioned Group Policy Optimization for Long-Horizon Agentic Tasks](https://arxiv.org/abs/2607.22724)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22724v1 Announce Type: new Abstract: Group-based policy optimization has been increasingly used to train large language model (LLM) agents from sparse outcome rewards by comparing trajectories or steps within a group. However, on difficult long-horizon tasks, this comparison can suffer from a sampling imbalance: repeated or low-effect actions dominate the high-probability region of the policy while useful state-changing actions remain under-sampled. This imbalance produces many all-failed rollout groups, where outcome rewards provide no direction for correcting the policy. Together, these effects can form a self-reinforcing credit trap: failure-dominated sampling yields no outcome-based correction, allowing repeated low-effect actions to persist. To break this loop, we propose Progress-conditioned Group Policy Optimization (ProGPO), which uses first-visit observation coverage only when all samples in a group receive zero outcome reward. Specifically, within such groups, ProGPO assigns higher relative advantages to trajectories or steps that visit more new states since reaching new observations is a prerequisite for task success. Experiments on two challenging agentic benchmarks, ALFWorld and WebShop with Qwen2.5-1.5/7B-Instruct, show that ProGPO consistently improves over group-based baselines, with particularly large gains on hard tasks.

16. [Does a rising tide lift all boats? A wealth exchange model on a dynamic network with economic growth](https://arxiv.org/abs/2607.25874)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25874v1 Announce Type: cross Abstract: Wealth inequality, although an age-old problem, has seen a substantial rise since the early XXI century. The distributions of wealth and income across countries follow a universal pattern, typically manifesting as a two-class division, which suggests that fundamental mechanisms underpin the emergence of these economic disparities. Agent-based models, which allow the rules of interaction between economic agents to be explicitly defined, are particularly well-suited for studying economic systems and analyzing their emergent properties. In this work, we examine a recently proposed dynamic complex network agent-based model within the context of a growing economy. The model evolves via three alternating processes: independent stochastic wealth growth of each agent, wealth exchanges between connected agents, and the rewiring of connections within the complex network. The wealth growth of each agent is governed by a stochastic process characterized by two parameters: a drift term $\mu$, representing economic growth, and volatility $\sigma$, reflecting heterogeneity in productivity. We analyze the outcomes for various values of a social protection factor $f$, which favors the poorer agent in each transaction. Higher values of $f$ amplify the effect of economic growth: while increasing $\mu$ reduces inequality, increasing $\sigma$ has the opposite effect. In this context, economic growth benefits the poorest agents only when strong social protection is in place.

17. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.55; Date: 2026-07-29T13:38:38Z; Popularity: 2,552 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

18. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

19. [Scientific computing in the age of agentic AI](https://openai.com/index/scientific-computing-agentic-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 28 Jul 2026 17:00:00 GMT
   - Summary: A new field report shows how scientists use AI coding agents to modernize scientific computing, accelerating software development and discovery in genomics and beyond.

20. [How AI is expanding what people do at work](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 27 Jul 2026 03:30:00 GMT
   - Summary: New OpenAI research shows how AI is expanding what workers do, with ChatGPT users taking on tasks across roles and reshaping job boundaries.

21. [Launching Health in ChatGPT](https://openai.com/index/health-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT
   - Summary: Health in ChatGPT now lets eligible U.S. users securely connect medical records and Apple Health to get more personalized insights and better understand their health.

22. [Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: OpenAI announces Project Camellia in Effingham County, Georgia, with commitments to responsible energy, community investment, jobs, and access to Codex.

23. [How news organizations are using AI to advance their vital missions](https://openai.com/index/how-news-organizations-are-using-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: News organizations are using AI to strengthen reporting, grow audiences, and improve business operations, with OpenAI tools supporting journalists and publishers worldwide.

24. [Advancing the next era of national science](https://openai.com/index/advancing-the-next-era-of-national-science)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines its commitment to advancing American science working with the U.S. Department of Energy and national labs to use frontier AI to accelerate discovery.

25. [NTT DATA Group cuts incident analysis to 30 minutes with Codex](https://openai.com/index/ntt-data)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 GMT
   - Summary: NTT DATA Group uses ChatGPT Enterprise and Codex to help 9,000 employees automate work, cut incident analysis to 30 minutes, and scale secure AI adoption.

26. [Introducing the ChatGPT for small business program](https://openai.com/index/introducing-chatgpt-small-business-program)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 17:00:00 GMT
   - Summary: OpenAI launches the ChatGPT for Small Businesses program, helping entrepreneurs build AI skills, automate work, and grow with ChatGPT Work.

27. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

28. [The OlmoEarth Platform: Geospatial inference at planetary scale](https://huggingface.co/blog/allenai/olmoearth-infrastructure)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 16:27:42 GMT

29. [LFM2.5-Encoders for Fast Long-Context Inference on CPU](https://huggingface.co/blog/LiquidAI/lfm2-5-encoders)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 15:01:45 GMT

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

36. [Welcome Inkling by Thinking Machines](https://huggingface.co/blog/thinkingmachines-inkling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

37. [Kernel Forge: An Agent Harness for LLM-based Generation and Optimization of CUDA Kernels](https://arxiv.org/abs/2607.24762)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24762v1 Announce Type: new Abstract: Machine learning models are increasingly embedded in everyday software, and most of their runtime is spent in a small set of compute kernels such as matrix multiplication, convolution, and normalization. Optimizing these kernels is one of the most direct ways to reduce latency and cost, but it has traditionally required expert engineers to hand-write low-level GPU code. Agentic systems built on large language models (LLMs) can now generate and optimize kernels with far less human effort, yet existing tools are largely evaluated on randomly generated tensors and isolated kernels, emit standalone CUDA code that developers must manually reintegrate, mostly target only LLM PyTorch models, and offer limited support for inspecting and debugging results. We present Kernel Forge, an open-source, end-to-end agentic harness that accepts any unmodified PyTorch model in place. Kernel Forge supports vision, diffusion, and LLM workloads, uses Monte Carlo Tree Search (MCTS) to explore multiple optimization paths rather than a single linear refinement chain, and ships with a graphical user interface for monitoring progress, inspecting candidate kernels, and debugging failures. We evaluate Kernel Forge on four PyTorch models spanning vision, diffusion, and LLM workloads on an NVIDIA DGX Spark with GB10 GPU. With only 50 optimization iterations per kernel, it optimizes 14 kernels to outperform PyTorch eager mode, reaching $1.52\times$ on adaptive\_avgpool2d in ResNet-50, $1.70\times$ on group\_norm in Stable Diffusion 3.5 Medium, $2.83\times$ on softmax in Gemma 4 E2B, and $1.54\times$ on softmax in Qwen 3.5 35B-A3B.

38. [GrocLM: Grocery Category Recommendation in E-Commerce with Large Language Models](https://arxiv.org/abs/2607.24764)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24764v1 Announce Type: new Abstract: The rapid growth of online grocery shopping requires recommendation systems that capture cyclical purchasing behavior and diverse user intents. Traditional item-level methods face scalability and accuracy challenges, motivating category-level recommendation as a more structured and practical alternative. We present GROCLM, a fine-tuned language model for grocery category recommendation in a real-world production environment. GROCLM employs a two-stage LoRA-based training strategy to encode cyclical purchasing patterns directly into model parameters, enabling more effective utilization of rebuying signals compared to prompt-based conditioning. To ensure valid and controllable outputs, we further introduce a trie-based constrained decoding mechanism over a predefined category space. Experiments on both proprietary production data and a public benchmark demonstrate that GROCLM consistently outperforms strong baselines. In a live production restocking task, GROCLM achieves a 7.5% relative improvement in cart-adds per impression, while maintaining efficient inference by generating all categories jointly. These results highlight the effectiveness and practicality of integrating large language models into structured recommendation systems.

39. [RoCo-ACE: Rollout-Conditioned Online Distillation for Retention-Aware Knowledge Injection](https://arxiv.org/abs/2607.24771)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24771v1 Announce Type: new Abstract: Knowledge injection updates pretrained MLLMs with new factual or domain-specific knowledge, but fitting full authoritative answers can cause drift in non-updated behavior. Online distillation mitigates this drift by training on model-generated rollouts, yet uniform reference-conditioned distillation provides coarse supervision: it can under-emphasize reference-supported rollout tokens and supervise omitted facts only indirectly. We introduce RoCo-ACE, a rollout-conditioned online distillation objective for knowledge injection. RoCo uses same-rollout reference-free/reference-conditioned likelihood contrast to reallocate additional distillation weight to reference-supported rollout tokens, while ACE adds sparse reference-side anchored correction for authoritative anchors omitted from the rollout without full-answer imitation. Across three knowledge-injection settings, six retention benchmarks, multiple baselines, and multiple base models, RoCo-ACE achieves the best injected-knowledge accuracy among compared methods while keeping evaluated retention close to the base model.

40. [CausalGate: Causal Importance Distillation for Transformer Module Pruning](https://arxiv.org/abs/2607.22720)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22720v1 Announce Type: new Abstract: Existing adaptive inference methods for Large Language Models rely on observational heuristics, such as hidden-state similarity or activation magnitudes, to drop redundant modules. However, these correlation-based metrics often fail to capture subtle, non-linear structural computations vital for semantic accuracy. We introduce CausalGate, an intervention-guided framework for compute-efficient transformer inference. During a calibration phase, CausalGate isolates individual Attention and MLP sub-layers, zeros out their respective outputs, and measures the exact semantic damage via the Kullback-Leibler divergence of the final logit distribution. To eliminate runtime routing overhead, this structural importance hierarchy is distilled into a global set of static, lightweight scalar gates using an Exponential Moving Average smoothing objective paired with a differentiable pairwise ranking loss. Evaluated on TinyLlama-1.1B, Qwen2.5-3B, and Llama-3.1-8B across language modeling and commonsense reasoning benchmarks, CausalGate consistently outperforms prominent dynamic routing and layer-skipping baselines, translating theoretical compute savings into concrete hardware latency reductions with zero operational overhead.

41. [QFedPolyp: A Communication- and Inference-Efficient Federated Learning Framework for Polyp Segmentation](https://arxiv.org/abs/2607.22743)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22743v1 Announce Type: new Abstract: Background and Objective: Automatic polyp segmentation supports computer-aided diagnosis and early colorectal cancer detec- tion. Centralized deep learning requires hospitals to share sensitive medical data, while federated learning preserves privacy but introduces high communication costs through repeated transmission of full-precision model parameters. We propose QFedPolyp, a communication- and inference-efficient federated learning framework for collaborative polyp segmentation. Methods: QFedPolyp combines quantization-aware training with low-precision model communication. Each hospital locally trains a lightweight U-Net on private data while simulating quantization during training. Clients transmit quantized model parameters to a central server, where they are reconstructed and aggregated using Federated Averaging. Evaluation is performed on Kvasir-SEG, CVC-ClinicVideoDB, PolypGen, and BKAI-IGH NeoPolyp. Results: Full-precision federated training achieves Dice scores of 0.910 on Kvasir-SEG and 0.930 on CVC-ClinicVideoDB. Uni- form 8-bit communication reduces transmission cost by approximately 4 times while preserving competitive segmentation accuracy. Quantized models also achieve up to 1.5 times faster inference than full-precision models. Conclusions: QFedPolyp enables privacy-preserving collaborative polyp segmentation with reduced communication overhead and faster inference. The resulting lightweight models are suitable for real-time clinical deployment.

42. [Twisted Multilayer Graphene: Superperiodicity and quasicrystals](https://arxiv.org/abs/2607.25411)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25411v1 Announce Type: cross Abstract: This thesis investigates how superperiodicity, quasiperiodicity, and disorder shape electronic and spin transport in graphene-based systems, with an emphasis on experimentally relevant length scales and realistic atomistic modeling. Using large-scale real-space quantum-transport methods, it first establishes controlled transport fingerprints that distinguish conventional Bloch propagation in periodic structures from the anomalous dynamics induced by quasiperiodic modulations. Building on this framework, the thesis analyzes magic-angle twisted bilayer graphene and shows that, within a finite disorder window where flat-band features remain robust, moderate Anderson disorder can counterintuitively enhance the mean free path. This disorder-induced delocalization is further linked to changes in the quantum metric extracted from optical conductivity, revealing a direct connection between transport, electronic geometry, and the real-space extent of the underlying states. The study then turns to graphene quasicrystal approximants and hybrid multilayer stacks, identifying sub-ballistic transport and self-similar localization patterns as signatures of quasicrystalline order, while also demonstrating their strong fragility against disorder and interlayer proximity effects. Finally, the thesis addresses spin transport in suspended monolayer graphene, showing that atomic-scale corrugations generate short-range fluctuating Rashba fields that can limit spin lifetimes to the nanosecond range even when charge transport remains close to ballistic. Taken together, these results provide a unified picture of how geometry, disorder, and structural complexity govern transport phenomena in twisted and corrugated graphene systems.

43. [A Physics-Informed Neural Operator for Thermal Ranking of Low-Cost Wall Materials in Hot-Dry Climates](https://arxiv.org/abs/2607.25668)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25668v1 Announce Type: cross Abstract: Identifying cost-effective indigenous building materials that minimise heat penetration through walls is critical for indoor thermal comfort in low-income rural housing in hot-dry climates, where summer temperatures routinely exceed 45 C. We present a two-stage computational framework for thermal ranking of five low-cost indigenous wall materials: mud brick, clay-straw adobe, lime-stabilised bamboo panel, fired clay brick, and lime-mud composite. First, a validated Crank-Nicolson finite difference method (FDM) solves the one-dimensional transient heat equation with Robin boundary conditions under diurnal solar and outdoor air-temperature forcing, generating 1500 periodic-day solutions across a nine-dimensional parameter space by Latin Hypercube sampling. Second, a Physics-Informed Neural Operator (PINO) with a Fourier Neural Operator (FNO) backbone learns the parameter-to-solution operator mu -> T(x,t), enforcing both data fidelity and PDE consistency. The trained PINO attains a relative L2 field error of 5.14e-4 and a 0.201 K mean absolute error on the peak inner surface temperature, preserving the FDM material ranking exactly; PINO trained on 150 FDM samples matches a data-only FNO trained on twice as many, so the physics loss is most valuable when data are scarce. The periodic-day formulation also yields the ISO 13786 time lag and decrement factor, reproduced to within 0.99 h and 0.010. At nominal hot-dry summer conditions, clay-straw adobe achieves the best cost-performance index among widely available materials. A climate sweep, confirmed by FDM spot checks, reveals a regime boundary: under sub-ambient outdoor conditions the ranking inverts to conductive fired clay brick, delineating heat-exclusion and heat-rejection regimes. The framework supports evidence-based material selection for post-flood reconstruction in hot-dry regions.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.56; Date: 2026-07-29T13:40:18Z; Popularity: 1,559 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-07-29T11:32:51Z; Popularity: 478 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.29; Date: 2026-07-29T14:57:40Z; Popularity: 290 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-28T13:07:45Z; Popularity: 218 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

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

53. [Learning to Access Computation: Accessibility Plasticity as a Principle of Adaptive Intelligence](https://arxiv.org/abs/2607.22748)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22748v1 Announce Type: new Abstract: Modern neural networks primarily adapt through parameter modification within predefined computational structures. While recent methods introduce modularity, conditional computation, and parameter-efficient adaptation, they generally do not distinguish computational capability from computational accessibility as separate adaptive variables. This work introduces Accessibility Plasticity, a principle of adaptive computation in which systems adapt not only by changing what computation exists, but also by reorganizing which existing computations can interact and participate. We formalize Accessibility Plasticity through a relationship-based operational realization and establish a reuse-first hierarchy of adaptation, where accessibility modification precedes more costly capability and structural changes. A proof-of-concept evaluation on sequential learning tasks shows that accessibility adaptation can reduce capability modification while maintaining comparable task performance. These results suggest accessibility as a distinct adaptive dimension and provide a foundation for future dynamic neural systems whose computational relationships evolve with changing environments.

54. [An Integrated Deep Learning and Statistical Framework for Whole-Network Gene--Environment Association with Leaf Vascular Architecture](https://arxiv.org/abs/2607.22763)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22763v1 Announce Type: new Abstract: Leaf veins exhibit remarkable diversity in architecture and patterning, yet existing gene--environment association studies have primarily quantified leaf venation using a small collection of low-dimensional summary traits, thereby discarding most of the structural information contained in the original images. We propose an integrated deep learning and statistical framework. The proposed framework achieves four methodological advances. First, it represents the complete leaf vascular architecture as a whole-network image phenotype. Second, it fine-tunes the deep learning-based Edge Detection with Transformers (EDTER) model to accurately extract whole-network leaf vascular architecture from RGB images by jointly learning local and global contextual features. Third, it constructs a new annotated leaf image database by integrating edge maps generated by DiffusionEdge with the Berkeley Segmentation Database (BSDS500). Fourth, it applies Semiparametric Sparse Canonical Correlation Analysis (SSCCA) to perform variable selection and model associations between repeatedly measured high-dimensional Bivariate image responses and high-dimensional predictors while simultaneously accommodating sparse, zero-inflated data represented by edge maps through a truncated latent Gaussian copula model. Two simulation studies demonstrate the performance of the proposed framework under increasing levels of complexity. Application to a real \emph{Populus} dataset identifies three significant gene--geography interactions associated with leaf vascular architecture, providing new biological insights and establishing a broadly applicable methodological framework for high-dimensional complex image phenotypes.

55. [Beyond Shapley: An Influence-Based Data Auditing Pipeline for LLM Alignment and Evaluation](https://arxiv.org/abs/2607.22766)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22766v1 Announce Type: new Abstract: The alignment of Large Language Models (LLMs) is increasingly bottlenecked by data quality. As datasets scale, massive preference and instruction-tuning corpora inevitably accumulate hidden structural contradictions, safety risks, and systemic human annotation errors. Standard dataset auditing methods, such as semantic deduplication or LLM-as-a-judge, struggle to capture the actual predictive impact of individual records and often miss deep functional rule clashes. To address this, we introduce a scalable, inference-only data valuation pipeline that approximates the Shapley value without iterative model retraining. By mapping semantic k-NN neighborhoods into a directed graph, our framework evaluates data utility directly through a reference LLM's probability distribution using zero-shot and one-shot conditional log-likelihood shifts. Our pipeline then translates these predictive influence scores into localized advantage metrics to isolate gradient-conflicting records. We demonstrate the pipeline's efficacy in sanitizing two heavily vetted alignment datasets. First, applying our pipeline to the HelpSteer2 dataset reduced the manual audit search space by 99.1%, successfully uncovering falsely-labeled records across diverse failure modes. Second, applying our automated audit strategy to Anthropic's HH-RLHF training and evaluation splits identified thousands of hidden safety and factual preference inversions. Crucially, by extending this audit to the evaluation split, we expose severe vulnerabilities in current benchmark integrity: highly capable models frequently predict the safer or more helpful response, only to be penalized by objectively flawed human ground-truth labels. Overall, our work provides a mathematically grounded, highly efficient diagnostic tool to uncover human label failures, sanitize evaluation benchmarks, and ensure the integrity of LLM alignment data.

56. [Efficient computation of real-time correlators using Pauli Propagation](https://arxiv.org/abs/2607.24924)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24924v1 Announce Type: cross Abstract: Pauli propagation has shown promise for classically simulating quantum dynamics by evolving observables directly in the Heisenberg picture. In this work, we investigate its use for computing real-time two-point time-ordered correlators in one- and two-dimensional quantum systems. One major limitation of Pauli propagation is the rapid growth in the number of Pauli strings beyond short times. We overcome this limitation by combining accurate short-time Pauli-propagation data with time extension methods based on a positivity condition and the observation that the dynamics are often dominated by a small number of characteristic frequencies. This combined approach extends correlation functions far beyond the directly accessible time window while avoiding the exponential proliferation of Pauli operators. We demonstrate that the resulting correlators retain the relevant dynamical and spectral information. Our results broaden the regime in which classical methods can reliably probe the real-time dynamics of interacting quantum many-body systems.

57. [EFT-Ramses: a code to simulate the effective field theory of dark energy](https://arxiv.org/abs/2607.24940)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24940v1 Announce Type: cross Abstract: While the standard $\Lambda$CDM paradigm is in excellent agreement with most current cosmological observations, theoretical challenges surrounding the cosmological constant ($\Lambda$) have strongly motivated the exploration of dynamical dark energy (DE) and modified gravity (MG) models. Investigating the physical nature of the cosmic acceleration requires N-body simulations to probe the non-linear growth of cosmic structure and prepare for the high-precision data from Stage-IV surveys. In this paper, we present EFT-RAMSES, a comprehensive extension of the ECOSMOG cosmological simulation code designed to explore non-linear structure formation in DE and MG scenarios. We embed the effective field theory of dark energy (EFTofDE) framework into this new numerical pipeline, utilising the $\alpha$-basis parameterisation to provide a versatile, model-agnostic, computational engine. By consolidating diverse scalar and vector-tensor theories---including the normal and self-accelerating Dvali-Gabadadze-Porrati (DGP) models, cubic Galileons (cubic scalar Galileon (csG), cubic vector Galileon (cvG) and generalised cubic covariant Galileon (GCCG)), and generic effective field theory (EFT) parameterisation---into a single "master" Vainshtein equation, this pipeline bypasses the need for model-specific solvers and easily specialises to any particular model. As validations, we perform high-resolution N-body simulations for the normal-branch DGP (nDGP), csG, GCCG, and EFT models, comparing the resulting matter power spectra against dependent and independent codes such as legacy ECOSMOG and HiCOLA, as well as linear theory, and find excellent agreement. EFT-RAMSES provides a robust and versatile computational tool for precision cosmological tests of DE and MG using upcoming cosmological surveys. The code is available for download from the GitHub EFT-RAMSES repository.

58. [Parallelisation of Discrete Exterior Calculus via Representation Theory on Curved and Three-Dimensional Meshes](https://arxiv.org/abs/2607.25192)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25192v1 Announce Type: cross Abstract: We establish a universal block-diagonalization framework for Discrete Exterior Calculus (DEC) operators on symmetric meshes, enabling embarrassingly parallel solvers with provable FLOP reductions. We prove that the two fundamental DEC operators, the discrete exterior derivative $d$ and the Hodge star $\star$, are equivariant under isometric finite group actions on simplicial complexes. The proof exploits the permutation representation induced on cochain spaces by the group action. As a consequence, any operator assembled from $d$ and $\star$ (including the Hodge Laplacian, the codifferential, Maxwell-type operators, and elasticity operators) inherits a block-diagonal structure in a single symmetry-adapted basis, which is computed only once per mesh. Unlike spectral methods restricted to flat Platonic domains, the framework applies natively to curved manifolds and is applicable in principle to computational electromagnetism and geometric fluid simulation on symmetric domains. Numerical experiments on a geodesic sphere ($I_h$ symmetry) and a hexagonal torus ($D_{6h}$ symmetry) yield FLOP-based parallel speedups, relative to a dense direct factorization, of up to $62\times$ and $182\times$, respectively. A further experiment on a body-centred-cubic (BCC) tessellation of the flat 3-torus $T^3$ with $T_d$ symmetry confirms equivariance of the exterior derivative, Hodge star, and Hodge Laplacian at machine precision for form degrees $k=0,1,2$ across three mesh resolutions. The FLOP-based sequential speedup approaches its theoretical asymptote of $\approx 9.07\times$, which a standard Schur-multiplicity reduction deepens by a further factor of order $|G|$. These results show that a single symmetry-adapted basis reduces the linear-solve cost of structure-preserving DEC computations on curved and three-dimensional meshes.

59. [Vortex dynamics and air entrainment in dam break wave impacting on vertical walls: A multiphase lattice Boltzmann study](https://arxiv.org/abs/2607.25433)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25433v1 Announce Type: cross Abstract: Air entrainment often plays a crucial role in determining impact loads exerted by free-surface wave flows interacting with structures, yet its modelling is often oversimplified in numerical approaches. In this study a two-phase numerical model, based on the Lattice Boltzmann Method coupled to a conservative Allen--Cahn interface-capturing equation is employed to perform direct numerical simulations of dam-break waves propagating over a dry bed and impacting on vertical walls. Access to high-resolution simulations enables a detailed assessment of how accurately resolving both air--water and solid--water interfaces affects local and overall dynamics, as well as quantities of extreme engineering interest. Indeed, the magnitudes and locations of the pressure peaks are strongly affected by wave front deflection and local aeration induced by a small corner vortex. Additionally, comparisons between no-slip and free-slip implementations suggest that the large air cavity formation, commonly observed as trapped inside the reflected jet falling back onto the incoming flow, may be the result of modeling assumptions rather than intrinsic flow physics, again highlighting the key role of near-wall shear in jet breakup dynamics.

60. [Reconciling chemical models of X-ray Thomson Scattering with the Bethe $f$-sum rule](https://arxiv.org/abs/2607.25481)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25481v1 Announce Type: cross Abstract: X-ray Thomson scattering (XRTS) is a key diagnostic for high-energy-density plasmas, which can exhibit significant quantum effects even at elevated temperatures. XRTS experiments are commonly interpreted using the Chihara decomposition, that was derived in the chemical picture and, thus, separates contributions from bound and free electrons. Despite being the de-facto standard for analysing measurements, a well-known shortcoming is that the standard bound-state treatment in the form of the impulse approximation fails to satisfy fundamental theoretical constraints, most notably the Bethe $f$-sum rule (BFSR). The problem arises due to the usage of plane waves in the impulse approximation as well as non-negligible contributions from bound-bound transitions. In this work, we present a minimal analytical extension of the Chihara decomposition of the dynamic structure factor for matter in the ground state, using hydrogenic bound-free and bound-bound transitions. We demonstrate that compliance with the BFSR is only achieved when both bound-bound transitions are explicitly included and an exact treatment of the bound-free contribution is applied. Finally, detector ray-tracing simulations for atomic hydrogen demonstrate experimentally detectable deviations from the standard Chihara model. The model will be made available in the open source XRTS library xDAVE [Bellenbaum et al., Phys. Plasmas (in print), arxiv:2604.27237].

61. [Using Data-Derived Priors to Guide CNN Architecture Design for NIR Chemometrics](https://arxiv.org/abs/2607.25636)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25636v1 Announce Type: cross Abstract: Convolutional neural networks (CNN) for near-infrared (NIR) chemometrics are often designed using generic architectural rules, although spectral datasets differ in sampling, smoothness, redundancy, and sample size. We tested whether these properties can provide empirical priors for CNN design. Across 25 NIR regression tasks, we computed descriptors of dataset size, spectral length and spacing, entropy, intrinsic rank, autocorrelation, and wavelet-scale structure. Two interpretable 1D-CNN scaffolds (a minimal single-convolution model and an extended shallow model with optional branching, dilation, etc) were optimized using five-fold cross-validated Bayesian hyperparameter optimization (HPO). Relationships extracted from near-optimal trials were converted into warm-start heuristics and evaluated directly and through leave-one-dataset-out (LODO) validation. The clearest relationships involved convolutional receptive fields. In the minimal CNN, the preferred kernel fraction decreased with spectral entropy and intrinsic rank, increased with the wavelet energy-support fraction, and the learning rate tended to decrease with training-set size. Direct and LODO heuristics were competitive with HPO, with median test-RMSE ratios of 0.953 and 1.017, respectively. The extended CNN showed similar but less transferable structure across branch usage, dilation, dropout, filter counts, and receptive-field choices. Ten stochastic refits showed seed sensitivity comparable to that of HPO-selected configurations. In a separate experiment, joint preprocessing and CNN HPO outperformed standardized-spectra HPO in 19 of 25 tasks, although gains were dataset-dependent. These results show that spectral descriptors can provide practical CNN design priors, guiding shallow NIR models toward plausible hyperparameter regions before target-specific tuning

62. [First-Principles Wannier Representation of Proximity Effects](https://arxiv.org/abs/2607.25690)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 29 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.25690v1 Announce Type: cross Abstract: Proximity effects in layered heterostructures are usually represented by static parameters fitted to first-principles bands, which discards the energy dependence of the virtual hybridization, the momentum transfer, and the spatial structure. We overcome this limitation by deriving a dynamical proximity operator $\mathcal{V}(\mathbf{k},\mathbf{k}';\omega)$ directly from density functional theory, downfolding the Kohn-Sham Hamiltonian of the heterostructure onto a fixed low-energy target Wannier subspace and reproducing its spectrum exactly within that subspace. The construction separates direct matrix elements from virtual hybridization through all remaining states. In graphene on hBN/Co(0001), virtual hybridization generates more than $99\%$ of the proximity exchange and gives it a resonant frequency dependence set by the Co $d$ states. In graphene/PtSe$_2$ it resolves a sublattice-selective intervalley coupling with a $\sqrt{3}\times\sqrt{3}$ charge modulation, and in graphene/WSe$_2$ a bond-resolved Rashba coupling of $0.24$~meV, against below $1$~$\mu$eV for the direct projection alone. Our results expose the limitations of static projections and establish a fitting-free microscopic foundation for low-energy modeling, spin-relaxation theory, and transport calculations.

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-29T12:34:08Z; Popularity: 710 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.64; Date: 2026-07-28T17:47:05Z; Popularity: 641 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

66. [Show HN: Mwe-MCP – self-hosted memory for AI agents that knows who may know what](https://github.com/Fr4nZ82/mwe-mcp)
   - Source: Hacker News; Group: Tech community; Score: 2.28; Date: 2026-07-23T12:38:20Z; Popularity: 5 points, 1 comments
   - Summary: HN discussion: 5 points, 1 comments.

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-07-28T02:02:18Z; Popularity: 157 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-23T11:51:14Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Beyond Memory: A Templated Substrate for Heterogeneous Collaborative Knowledge Work with LLM Agents

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.24759

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
