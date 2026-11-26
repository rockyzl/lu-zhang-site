# Daily signal sidecar - 2026-11-26

## Selected Signal

- Title: AI Buckingham: Agentic Discovery of Dimensionless Scaling Laws Across Physical Regimes
- URL: https://arxiv.org/abs/2611.33961
- Source: arXiv physics.comp-ph
- Score: 6.00

## Candidate Review

- Signal: AI Buckingham: Agentic Discovery of Dimensionless Scaling Laws Across Physical Regimes
- Primary source: https://arxiv.org/abs/2611.33961
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

Total candidates reviewed after duplicate-source filtering: 62

1. [AI Buckingham: Agentic Discovery of Dimensionless Scaling Laws Across Physical Regimes](https://arxiv.org/abs/2611.33961)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33961v1 Announce Type: new Abstract: Classical dimensional analysis defines admissible dimensionless representations but does not determine which combinations capture the dominant physical dependence, whether it changes across physical regimes, or when dependent-variable rescaling is required. We present AI Buckingham, an agentic framework for autonomous dimensionless discovery from natural-language descriptions of physical problems and observational data. It couples reasoning and planning by a large language model (LLM) with predefined symbolic and numerical tools. Literature-based knowledge retrieval supports dimensional checking, gradient-based clustering identifies physical regimes, and mutual information provides an objective, reparameterization-invariant criterion for identifying dominant dimensionless groups. Explicit numerical criteria determine the group count and assess simplification. Across ten physical systems spanning fluid dynamics, magnetohydrodynamics, thermal convection and additive manufacturing, AI Buckingham recovers established similarity representations and resolves regime-dependent scalings. For the longstanding challenge of predicting turbulent drag on rough surfaces, it identifies informative reparameterizations of surface statistics that improve equivalent sand-grain roughness estimates for engineering-oriented drag modelling.

2. [Clay helps sales teams win with Codex and ChatGPT](https://openai.com/business/customer-stories/clay-plugins-openai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 24 Nov 2026 00:00:00 GMT
   - Summary: ChatGPT and Codex integrations help Clay’s users research deals and turn data into go-to-market plays, with GPT-6 models handling the reasoning.

3. [Connected intelligence for in-house legal](https://openai.com/business/learn/connected-intelligence-for-in-house-legal)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 23 Nov 2026 08:00:00 GMT
   - Summary: Watch OpenAI’s Stacey Wang and Craig Bruney, Mary O’Carroll of LECG, and Cooley’s Richard Segal explore how AI can help in-house legal teams connect business context, build reusable workflows and get more from outside counsel.

4. [TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient](https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 16 Nov 2026 17:01:35 +0000
   - Summary: AI coding agents can waste time and tokens relearning the same lessons. TokenEconomizer is an open-source plugin that builds on past sessions to cut costs while maintaining task success. It’s a path toward coding agents that learn not only how to solve tasks, but also how to spend computation more effectively. The post TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient appeared first on Microsoft Research .

5. [How to build and maintain an agentic evaluation](https://huggingface.co/blog/agentic-evals)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 23 Nov 2026 00:00:00 GMT

6. [Conservative Overlap Fuzzy Rough Sets for Incomplete Data](https://arxiv.org/abs/2611.31329)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31329v1 Announce Type: new Abstract: Attribute reduction in incomplete information systems is difficult because missing values break the equivalence-class structure of rough set theory. We propose the Conservative Overlap Fuzzy Rough Set (COFRS) model. Each object is described by its set of present attributes. The similarity of two objects is a weighted overlap on the attributes present in both, divided by the fixed number of attributes |A| instead of the size of their union, so missing values are penalised globally and are not matched as wildcards. From this similarity we define a soft dependency degree based on weighted granule consistency, and we search for reducts by greedy backward elimination in O(|U|^2 |A|^2) time. We show that the relation is symmetric and non-reflexive, that the dependency degree is not monotone, and we give a sufficient condition under which monotonicity holds. On 11 UCI benchmarks with missing rates from 0.15% to 20.46%, COFRS gives the smallest reducts on average (4.1 attributes, against 5.0-11.2 for Tolerance-RS, a range-threshold variant Tol-RS_tau, Zhou-RS and the min-aggregation variant COFRS-min). The difference is significant against Tol-RS_tau, Zhou-RS and COFRS-min (Holm-adjusted Wilcoxon p<0.01) but not against Tolerance-RS (p=0.56), and it is small against the Jensen-Shen selector (adjusted p=0.084). At equal reduct size, COFRS selects more informative attributes than random subsets. With a kNN classifier the methods do not differ significantly in accuracy, F1 or G-mean; with an RBF-SVM they do, and COFRS ranks last. The gain is therefore compactness, not predictive accuracy.

7. [Beyond Static Charts: Benchmarking Interactive Chart-to-Code Generation for MLLMs](https://arxiv.org/abs/2611.31345)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31345v1 Announce Type: new Abstract: In recent years, multimodal large language models (MLLMs) have achieved significant progress in chart-to-code generation. However, existing benchmarks mainly focus on static charts, overlooking interactive charts that enable richer and more expressive data exploration. Unlike static chart-to-code generation, which emphasizes visual consistency, interactive chart-to-code evaluation targets behavioral consistency, requiring chart states to evolve correctly under sequences of user interactions, thereby rendering traditional one-step evaluation paradigms ineffective. To address this gap, we introduce ChartInt, the first benchmark specifically designed for interactive chart-to-code generation. ChartInt consists of 2,779 carefully annotated examples covering common interaction patterns such as hover, highlight, and tooltips. Additionally, ChartInt incorporates editing tasks such as data updates, style adjustments, and cross-chart style transfer to expand real-world application scenarios. To enable reliable evaluation of interaction behavior, we propose a preset state snapshot protocol that predefines target interaction states and deterministically triggers interaction events, transforming dynamic behaviors into reproducible evaluation targets. Based on this protocol, we design a multi-dimensional evaluation framework measuring semantic and stylistic consistency. Experiments show that while current MLLMs perform well on static charts, their performance drops significantly on interactive tasks, highlighting the need for interaction-aware benchmarks.

8. [What People Choose Not to Say: A Multimodal Benchmark for Fine-Grained Information Manipulation in Conversations](https://arxiv.org/abs/2611.31346)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31346v1 Announce Type: new Abstract: Recent advances in MLLMs have improved social understanding, enabling models to recognize emotions and distinguish truthful from deceptive behaviors. However, existing benchmarks largely focus on coarse-grained emotion recognition or binary truth-deception detection, overlooking the diverse ways people manipulate information in conversations, such as withholding, leakage, fabrication, evasion, and defensive counterclaim. Understanding these behaviors requires reasoning about underlying facts, participant knowledge, and conversational context, making them difficult to evaluate reliably. To address this gap, we introduce InfoCon, a multimodal benchmark for fine-grained information manipulation in conversations. InfoCon identifies six fine-grained strategies and derives a coarse consistency label from their factual and interactional relations. We develop an evidence-grounded multi-agent annotation framework to construct and verify reliable labels from rich contextual evidence. We benchmark representative multimodal models and systematically analyze their fine-grained information manipulation understanding, providing a testbed beyond binary truth-deception judgments.

9. [Learning What vs. Learning How: Decomposing Task and Interface Competence in Agentic Training](https://arxiv.org/abs/2611.31427)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31427v1 Announce Type: new Abstract: LLM agents operate through harnesses that define system prompts, action formats, feedback loops, and resource constraints. A model may possess the knowledge needed to solve a task yet fail to express that knowledge through a particular harness. This raises a basic question: when a policy fails under a given harness, is it missing task knowledge or the competence to operate the interface? We distinguish two components of agentic competence: task competence, the knowledge and reasoning needed to solve a task, and interface competence, the ability to act on that knowledge through a given harness. Across four reasoning and agentic benchmarks, we show that harness-conditioned training yields vastly different outcomes depending on how these interact. Multi-harness distillation aggregates task knowledge from trajectories collected through different harnesses into a shared policy, but this knowledge is realised only when training preserves or improves competence on the inference-time interface. Otherwise, single-harness training can induce interference in interface competence, sometimes catastrophically collapsing performance on a held-out harness despite improvements in underlying task knowledge. To disentangle task and interface supervision, we introduce harness rehearsal: distillation on traces that carry minimal task knowledge while exercising the target interface. Cross-harness task supervision or rehearsal alone yields little gain, but their combination yields gains far larger than either: on BFCL V3 multi-turn with Qwen3-4B, they achieve 8.5% and 32.5% respectively, versus 58.8% together. Finally, on-policy reinforcement learning (RL) is more robust than distillation to single-harness training: it does not substantially degrade performance on other harnesses, and interface competence acquired through multi-harness distillation persists through subsequent RL.

10. [Taxi: Analyzing Agents at (Real) Scale](https://arxiv.org/abs/2611.31457)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31457v1 Announce Type: new Abstract: In this technical report, we present Taxi -- a system for debugging, clustering, and monitoring agents at scale. Taxi scales to millions of steps efficiently. This is made possible by a combination of scalable analysis methods. Taxi relies primarily on clustering to generate a taxonomy over steps for a structured overview of the data, and provides full SQL access for engineers and automated agents to ask complex questions. Clustering and querying are best used together in a hybrid pipeline guided by a coding agent. Taxi also includes an experimental integration of Jev-style decision models: models that map state and bounded questions directly to typed, probabilistic decisions. They add low-cost semantic routing and evaluation where embeddings or literal queries alone are insufficient. In addition, Taxi provides an extensible ecosystem, including built-in evaluators and daily reports. To accommodate growth, Taxi is designed to be modular, hackable, and easy to plug-and-play for individuals and teams.

11. [SpatialCraft: Evolving Procedural Intelligence from Experience and Skills for Spatial Reasoning Agents](https://arxiv.org/abs/2611.31475)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31475v1 Announce Type: new Abstract: Spatial reasoning agents increasingly rely on external tools, such as 3D reconstruction, segmentation, and geometric computation, to answer questions that a multimodal large language model (MLLM) cannot resolve from pixels alone. Tool access, however, shifts the bottleneck to orchestration: the agent must decide which tools to call, in what order, and how to interpret their outputs, yet a stateless agent repeats the same mistakes across tasks. We ask whether a frozen tool-using agent can improve its orchestration from its own interaction history, without parameter updates. We present SpatialCraft, a self-evolving framework that maintains two forms of external knowledge: Experiences, condition-action tactics distilled by contrasting rollouts of the same task, and Skills, multi-step procedures with explicit activation and termination conditions. Three designs couple the two streams. Experiences can be anchored to a Skill, appearing only while it is active rather than once per task. A Contrastive Utility Score estimates each Experience's effect by randomly withholding it across rollouts of the same task, separating its contribution from task difficulty, and Experiences with consistently positive utility are consolidated into the Skills they support. Across five spatial benchmarks and four backbones, SpatialCraft achieves the best accuracy in all 20 settings, showing that a frozen agent can learn to orchestrate spatial tools from its own experience.

12. [Attributing Agentic Failure in Reasoning Vision-Language Models with Interactive 2D Environments](https://arxiv.org/abs/2611.33162)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33162v1 Announce Type: new Abstract: Agentic benchmarks report a success rate that confounds distinct causes of failure: misreading the environment, never working out how components of the environment operates, operating the components in the wrong order, and failing to recover from a mistake, each of which calls for a different fix. We present an early preview of MultiNet v2.0-Gridworld - an interactive maze environment built for attribution rather than ranking. Four different types of mechanisms, namely key-door pairs, switch-gate pairs, distractors and decoys, and ordered combinations of these mechanisms, can be added, modified, or removed independently while the renderer, the action space, and the scoring function stay fixed. A breadth-first search over the joint state of position, facing direction, inventory, and mechanism state gives every instance an exact optimal action count, which sets its difficulty and grades unfinished episodes. We fix the evaluation protocol on 15 held-out mazes over 540 episodes, then evaluate three vision-language models on 50 mazes. They solve 6 of 150 episodes, 45 of the 50 mazes were not solved by any model, and no episode containing a switch-gate mechanism was solved.

13. [Deep Learning-Based Mesoscopic Emission Modeling](https://arxiv.org/abs/2611.33179)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33179v1 Announce Type: new Abstract: Traffic-related emissions are a major contributor to urban air pollution. However, existing emission models face a fundamental trade-off: macroscopic models are computationally efficient but rely on average speeds, leading to systematic errors, while microscopic models achieve high accuracy but are computationally prohibitive for large scale simulations. To bridge this gap, this study introduces Direct Emission Prediction (DEP), a Gated Recurrent Unit (GRU)-based deep learning model. DEP was trained on over one million synthetic trips generated by coupling real-world GNSS speed profiles with the microscopic emission model MOBSim. By processing sequential link-level inputs, including vehicle characteristics, road attributes, and ambient temperature, DEP predicts CO$_2$ and NOx emissions. We integrated DEP into a MATSim-based workflow and applied it to the Ile-de-France region. DEP matches the accuracy of SPG-M, a hybrid mesoscopic-microscopic reference model, within 0.35% for CO$_2$ and 1.87% for NOx across both hot and cold-start scenarios, while reducing computational runtime to just 2.2%. Furthermore, validation against empirical remote sensing data confirms that DEP accurately reproduces real-world NOx emission levels across Euro 2-6 diesel vehicles, whereas traditional macroscopic tools like COPERT and HBEFA systematically underestimate them. Finally, DEP effectively captures the spatial distribution of cold-start emissions, identifying key hotspots in dense urban areas. This work demonstrates that deep learning-based mesoscopic frameworks can achieve microscopic accuracy at a fraction of the computational cost, enabling scalable, high-resolution urban emission modeling without relying on pre-computed emission factor databases.

14. [Semantic Density Does Not Predict Agent-Memory Collapse](https://arxiv.org/abs/2611.33184)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33184v1 Announce Type: new Abstract: Persistent textual memory can improve LLM agents, but repeated updates can erode task performance. We ask whether memory-store statistics warn before held-out accuracy declines. We registered mean pairwise cosine similarity ($\rho$) and 13 additional geometry, retrieval, and graph statistics on 805 snapshots from 13 memory methods across ALFWorld, AppWorld, ScienceWorld, WebShop, and two ARC-AGI settings. These methods store trajectories, rules, workflows, strategies, or linked records, using selective retrieval or whole-store prompting. No such statistic reliably predicted early signs of task accuracy decline, and $\rho$ had zero median lead. With the checkpoint after peak accuracy as a secondary decline point, measures of highly similar pairs and nearest-neighbor crowding changed earlier but did not consistently outperform stored-item count. We trained classifiers on this corpus and applied them unchanged to PropWorld runs of up to 5,000 crafting tasks. They falsely flagged 56.9% of checkpoints from size-limited stores with stable accuracy and detected only 18% of checkpoints after task success fell to zero. Thus, global semantic density did not provide a reliable warning, while local crowding did not transfer consistently across memory designs. In these long-horizon runs, size-limited stores remained stable, while the sole failure arose when unbounded whole-store prompting exceeded model input capacity, which token growth predicted directly.

15. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.09; Date: 2026-11-26T22:26:51Z; Popularity: 2,090 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

16. [Searching for distant planets with Astra](https://openai.com/index/searching-for-distant-planets-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 24 Nov 2026 11:00:00 GMT
   - Summary: See how two amateur astronomers used Codex and Astra to find potential exoplanets in public data from NASA’s Kepler and TESS space telescopes.

17. [How Intentful uses dots to make more time for growth](https://openai.com/business/customer-stories/intentful-dots)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 24 Nov 2026 00:00:00 GMT
   - Summary: Marina Petrova’s dot Aria helps research websites and build proposals, while proactively flagging messages and resolving issues.

18. [How iFood scales coding agents across 15,000 repositories](https://openai.com/business/customer-stories/ifood)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 24 Nov 2026 00:00:00 GMT

19. [OpenAI and Cisco introduce Shirudo](https://openai.com/index/introducing-shirudo)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 23 Nov 2026 21:20:00 GMT
   - Summary: OpenAI and Cisco introduce Shirudo, an open-source runtime for Linux. It helps teams protect running systems while they roll out patches.

20. [Richpanel helps companies automate 50% of support in 30 days](https://openai.com/business/customer-stories/richpanel-ai-customer-support)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 23 Nov 2026 08:00:00 GMT
   - Summary: Richpanel uses GPT-6 Astra and GPT-6.1 Sol to equip its AI support agents with tools and procedures, and GPT-6 Luna for their conversations.

21. [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 22 Nov 2026 00:00:00 GMT
   - Summary: How perplexity measures progress in AI models, and why it could help developers establish a shared approach to evaluating emerging capabilities.

22. [Combatting adversarial distillation](https://openai.com/index/combatting-adversarial-distillation)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 20 Nov 2026 10:00:00 GMT
   - Summary: OpenAI’s layered approach to adversarial distillation combines model training, safeguards, detection, and enforcement to protect against capability extraction.

23. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

24. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

25. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

26. [Introducing the llama.cpp benchmark dashboard for AMD Ryzen and Radeon](https://huggingface.co/blog/ggml-org/llamacpp-amd-bench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 26 Nov 2026 11:37:17 GMT

27. [Building on Nemotron 3.5 Parse: Open Data, Fine-Tuning, and Faster Inference](https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 26 Nov 2026 05:05:36 GMT

28. [Swarms, Flocks, Gangs: How to build, train, and evaluate multi-agent systems](https://huggingface.co/blog/training-swarms)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 26 Nov 2026 00:00:00 GMT

29. [Where scientists draw the line on AI agents](https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 25 Nov 2026 18:52:55 GMT

30. [An Indic Voice Agent with CUGA](https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 25 Nov 2026 10:22:09 GMT

31. [Hill-climbing Inkling 2 Mini inference on one RTX PRO 6000](https://huggingface.co/blog/inkling-2-mini-inference-hillclimb)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 25 Nov 2026 00:00:00 GMT

32. [Welcome Inkling 2 Mini, Cutting-edge Performance for your Local Setup](https://huggingface.co/blog/inkling2mini)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 GMT

33. [Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost](https://huggingface.co/blog/harness-adapters-at-scale)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 GMT

34. [DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency](https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 19:54:56 GMT

35. [Irreducible Governance Structure for Autonomous Agent Systems: Fair Allocation, Strategy-Proofness, and Multi-Scale Composition](https://arxiv.org/abs/2611.31284)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31284v1 Announce Type: new Abstract: Autonomous agent governance is commonly framed as a problem of enforcing correct execution. However, in multi-agent systems, an equally fundamental question precedes execution: which agents are allowed to act. In this paper, we show that allocation is not an auxiliary concern but a structural component of governance. When multiple agents compete for execution under constrained resources, any allocation mechanism introduces unavoidable trade-offs between fairness, efficiency, and resistance to strategic manipulation. We formalize this through a set of impossibility results, including Sybil amplification and the incompatibility of desirable allocation properties. We then show that these allocation constraints cannot be resolved within a single layer of control. Instead, they propagate across the system, interacting with execution atomicity, state enforcement, and behavioral drift. This leads to a multi-scale governance structure composed of four orthogonal dimensions: temporal (atomicity), state (enforcement), behavioral (drift monitoring), and population (allocation). Our main result is an irreducibility theorem: under finite observability, no governance architecture can collapse these dimensions without loss of correctness or stability. Allocation, in particular, acts as a first-class constraint that prevents simplification of the governance stack. We validate these results through a series of analytical constructions and empirical ablations, showing that removing or approximating any layer leads to systematic failure modes. This work reframes agent governance as a structural problem: not only how actions are executed, but how access to execution is determined, and why these decisions impose irreducible architectural requirements.

36. [MOZAIC: An Audio-Video Deepfake Benchmark for Telling What Is Fake](https://arxiv.org/abs/2611.31301)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31301v2 Announce Type: new Abstract: Audio-video (AV) deepfakes can fake the face, the voice, or both. Most benchmarks only ask whether a clip is real or fake, so they cannot show whether a detector relies on the picture, the voice, or encoding traces. We present MOZAIC, a paired benchmark with a 4-way label in which every source clip is released in all four combinations of real or fake video and real or fake audio so each modality contribution can be measured directly. Fakes cover inner-face swapping, whole-frame video diffusion and voice conversion. MOZAIC has 137,745 clips from 15,014 source pairs and four tasks: T1 AV authenticity, T2 manipulation type, T3 identity verification and T4 explanation. We evaluate 12 AV multimodal LLMs (MLLMs), train four detectors and fine-tune MLLMs with LoRA. Overall, the best MLLM reaches only 35.6% on the four-way T1 and catches far more video-only fakes than voice-only fakes (43.6% vs 7.5%). Trained detectors reach 98.4% on T1, and LoRA fine-tuning raises explanation scores (OmniVinci 4.17 to 7.40, Qwen2.5-Omni 4.42 to 6.98), but the best T1 detector falls to 78.3% when the face-swap generator is held out of training, so generalization and explanation remain open. We release the dataset, the compact MOZAIC-SMALL split, the code and the prompts. https://vectorinstitute.github.io/mozaic/

37. [Antares-Smaug: Adversarial Names, Tokens and Attack Rewrites: Sanitisers Miss Unseen Generalisations](https://arxiv.org/abs/2611.31347)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31347v1 Announce Type: new Abstract: Laya is an open decision model: given a text, a question and K named options with descriptions, it returns one probability per option in a single pass, and software may act on the answer unseen. We attack six Laya models with 81 programmatic edits of 566 synthetic items (injected sentences, label leaks, edited descriptions, decoy options, invisible and look-alike characters, floods) and report the share of correctly answered items hijacked or lost, with bootstrap intervals. Attack wordings that no defence was built from win the attacker's option on 59% of items for released Laya and 36% for fine-tune v1 (trained on 109 written injections). An injection works through the option name: a sentence naming an option steers the released model even when negated (32%), while an imperative naming no option does not (5%). Option descriptions barely matter (2%). Character edits alone cost v1 up to 72% of right answers. A sanitiser frozen before any held-out result cuts the attacks it was built from by 72% but held-out sentence attacks by 27%, and an attacker who picks the best of 34 held-out strings per item restores success to 84% (mean string 18%). The same oracle takes the model fine-tuned on the four build families of injected sentences from 5% (mean string) to 58%. Fine-tuning on build families only (against an unchanged-rows control) cuts held-out sentence attacks (three held-out families) from 33% to 3% but character edits only from 25% to 20%. A label-free check that deletes the option names and measures the shift flags held-out sentence attacks (AUROC 0.95) but not character edits (0.46), and thresholds set on dev schemas for 5% false alarms gave 8% to 18% on an unseen schema and other languages. All data are synthetic with LLM labels, on one backbone. Several planned runs (other checkpoints, a second seed, some fine-tunes) were not run.

38. [ContextLure: Exploiting Benign Conversation History for Indirect Prompt Injection](https://arxiv.org/abs/2611.31424)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31424v1 Announce Type: new Abstract: As LLMs become more capable, agents can perform more complex tasks with tools and maintain longer interactions with users. These benign conversations contain evidence on task results, user concerns, and operational constraints. The risk is that attackers who can observe benign conversations (evidence) may construct stronger indirect prompt injections without increasing the attackers' control over prior turns or the later injection. However, we still lack a clear study of how effectively attackers can select and use this evidence. To address this gap, we introduce ContextLure, a red-teaming framework in which an attacker silently observes an existing benign conversation, extracts evidence, and constructs an injection. The challenges are twofold: (a) selecting useful evidence and (b) presenting it as reasons for an unauthorized action, without changing the prior benign conversation. To efficiently exploit (a) the effect of evidence on attack success, our framework selects evidence across 2 dimensions: User/System Preferences with 3 selection policies. And to enhance (b) the process of turning the selected information into the malicious request, we introduce an Urgency/Priority matrix with 4 rewriting strategies. Across the evaluated conditions, we reach 67.4% ASR on AgentDojo and 87.3% on InjecAgent. These results show that attackers can use benign interaction evidence in later attacks without first poisoning the benign conversation.

39. [Data-free continuous-time physics-informed neural networks for vortex shedding: a consistent pressure across time windows](https://arxiv.org/abs/2611.33489)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33489v1 Announce Type: cross Abstract: Without data, physics-informed neural networks (PINNs) in continuous time have so far failed to develop vortex shedding past a circular cylinder in a domain symmetric about the wake centerline: the training converges to the steady symmetric solution. We obtain shedding at Re=100 with a continuous-time PINN trained over successive time windows, without any reference data and without temporal discretization, the symmetry being broken by an analytical, divergence-free initial condition. The Strouhal number and the mean drag coefficient agree with an OpenFOAM solution computed on the same domain to within 0.5%. The pressure, however, is discontinuous at the junctions between windows, and the lift coefficient is a staircase. We relate this discontinuity to the differential-algebraic structure of the incompressible Navier-Stokes equations, of index 2 after spatial discretization: a consistent initial condition of each window must satisfy the constraint $\nabla\cdot\mathbf{v}=0$ for the velocity, and the hidden constraint $\nabla\cdot\partial_t\mathbf{v}=0$, with $\partial_t\mathbf{v}$ given by the momentum equation, then determines the pressure. Imposing the pressure alone makes the solution continuous but not consistent; our remedy imposes the pressure at the junctions and adds this hidden constraint to the loss. Over five shedding periods, the jumps of the lift coefficient become 20 times smaller.

40. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.98; Date: 2026-11-26T21:33:31Z; Popularity: 977 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-25T17:38:16Z; Popularity: 499 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.40; Date: 2026-11-25T14:16:23Z; Popularity: 396 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.26; Date: 2026-11-24T01:29:50Z; Popularity: 261 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

44. [Can AI help build a healthier future?](https://www.microsoft.com/en-us/research/podcast/can-ai-help-build-a-healthier-future/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 17 Nov 2026 16:52:17 +0000
   - Summary: What can AI enable in medicine, and how do we get there? Microsoft Research lead Doug Burger, Microsoft Principal Research Manager Ava Amini, Microsoft Chief Scientific Officer Eric Horvitz, and physician-scientist Eric Topol of Scripps Research explore these questions and more. The post Can AI help build a healthier future? appeared first on Microsoft Research .

45. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

46. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

47. [Code availability is not enough: schemas for documenting and extending data analysis](https://arxiv.org/abs/2611.33167)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33167v1 Announce Type: new Abstract: A data analysis involves a sequence of decisions, from data cleaning to model specification, each of which can affect the reported result. Reproducing that result is not the same as understanding the sequence of decisions that produced it and the reasons for each: the code mixes those decisions with implementation details, while the manuscript states the major decisions and their rationale but scatters them across its sections and often leaves out the minor ones. A reader may then ask how the result would change under a different decision: the question itself is easy to pose, but implementing it is often non-trivial in practice. In this work, we propose a schema that represents a data analysis as a collection of decisions in natural language, from which large language models (LLMs) can generate and validate analysis scripts directly. This workflow can also expand a single analysis into a full multiverse of alternatives, specified in an alternative file, ready for comparison. We demonstrate the proposed workflow in two applications. In the first, we construct a schema for a published regression analysis of heaped smoking data and show that it reproduces the reported estimates, and that a reviewer-suggested alternative can be specified through the alternative file and turned into code automatically. In the second, where no schema is provided, we show how the workflow serves instead as a reproducibility check, applied to the many-analysts football study. As an intermediate representation between the manuscript and code scripts, our schema gives a self-contained account of an analysis and makes it extensible from a reader's perspective.

48. [Geophysics-informed invertible operator network for Bayesian geophysical inversion](https://arxiv.org/abs/2611.33178)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33178v1 Announce Type: new Abstract: Geophysical inverse problems are inherently ill-posed because of sparse observations and measurement noise. Classical sampling-based Bayesian inference methods, such as Markov chain Monte Carlo (MCMC), are computationally prohibitive because they require many forward simulations. Data-driven machine-learning methods often struggle to produce physically consistent solutions when training data are limited. To address these issues, we propose a geophysics-informed invertible operator network (GI-ION) that integrates an invertible neural network (INN) within a deep operator-learning framework for efficient Bayesian geophysical inversion. The INN serves as the branch network and transforms the model parameters into branch coefficients that represent the forward solution and a latent variable that captures uncertainty in the inverse problem. By learning the forward operator and enforcing statistical independence between the branch coefficients and the latent variable, GI-ION enables efficient sampling from a learned conditional approximation, even with sparse boundary observations. We validated GI-ION on three representative cases: 1D surface-wave dispersion and travel-time tomography for a 2D synthetic random-field model and a seismic-slice model. Numerical experiments demonstrate robust performance across diverse problem settings and efficient conditional sampling.

49. [Neighbor Crowding Predicts Feature Stability in Sparse Autoencoders](https://arxiv.org/abs/2611.33182)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33182v1 Announce Type: new Abstract: Sparse Autoencoders (SAEs) offer an approach to identify language model representations by breaking apart polysemantic features into more sparse, interpretable ones. Yet, it is challenging to identify which of the learned features are actually stable, rather than artifacts of initialization. One approach is to train multiple SAE seeds, and compare the learned features across seeds by cosine similarity, but this is notably costly. This raises the question of whether stable features can be identified without the computational expense of training multiple seeds. In this work, we examine cross-seed feature stability across differing levels of training tokens, and demonstrate that in TopK SAEs, it is highly predictable using six computationally cheap statistics derived from a single training run. Neighbor crowding, a geometric property of the dictionary, is the strongest single predictor, with features that sit in dense regions of the unit sphere more likely to be stable than isolated ones.

50. [A nonequilibrium-capturing unified gas-kinetic scheme II: multi-frequency radiation transport](https://arxiv.org/abs/2611.33718)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33718v1 Announce Type: new Abstract: Conventional discrete ordinate methods are widely used for thermal radiative transfer, but their fixed number of angular degrees of freedom (DoFs) incurs unnecessary computational cost near equilibrium. We therefore develop a nonequilibrium-capturing unified gas-kinetic scheme (NCUGKS) for multi-frequency radiation transport. The scheme preserves the mul tiscale capability of UGKS through interface evolution that couples transport and collision. Radiation intensity is expanded in an orthonormal basis of the discrete angular space. The expansion coefficients serve as angular DoFs, with their number adapted independently to local nonequilibrium in each cell, frequency group, and quadrant. At each time step, the coefficients to be evolved are selected using the exponentially decayed contribution from the previous step and the requirements of interface transport. The selected coefficients are advanced by the finite volume scheme and corrected to match the macroscopic radiation energy before higher-degree coefficients are discarded according to the prescribed relative tail tolerance. Therefore, in the optically thick limit, the resulting representation retains only one angular DoF per quadrant. Numerical tests spanning different optical regimes show close agreement with reference solutions, validating its accuracy. Furthermore, in terms of memory and computational efficiency, the proposed method reduces memory by factors from 21.7 to 154.0 and achieves speedups from 24.87 to 257.9 compared with the original discrete ordinate UGKS. NCUGKS thus provides the ability to accurately simulate multiscale ra diative transfer with reduced memory and computational costs. The proposed approach also offers a framework for adapting angular degrees of freedom in other discrete ordinate methods.

51. [Estimating subcritical multiplication from stochastic neutron noise: a branching Brownian motion model for leakage counts](https://arxiv.org/abs/2611.33904)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33904v1 Announce Type: new Abstract: A neutron detector placed outside a subcritical system records fission chains as correlated bursts of counts. The time dependence of these correlations gives access to the $\alpha$ eigenvalues governing the decay of the system and, with additional physical information, to its effective multiplication factor $k_{\mathrm{eff}}$. The usual analysis relies on point kinetics, which ignores where chains are born and which neutrons escape. We examine this approximation in a model simple enough to be solved: branching Brownian motion, that is, one-group neutron diffusion with capture and fission, in a domain whose absorbing boundary plays the role of the detector. For a stationary Poisson source we derive the Feynman $Y$ function (the count variance-to-mean ratio minus one) by following pairs of neutrons from their common ancestor to their detection. In a homogeneous cube the result is an explicit sum over spatial modes whose weights are fixed by the geometry and the source. We compare it with direct branching simulations and with one-speed OpenMC transport calculations in which fission is sampled with analog reaction selection and FREYA multiplicities. At the longest simulated gate the model agrees with transport to about $1\%$ at $k=0.8$ and $0.9$, and to $10\%$ at $k=0.5$. The corresponding point-model discrepancies range from $25$ to $48\%$. When geometry, source and material parameters are known, retaining the spatial modes also reduces the bias on the inferred multiplication factor. Two extensions prepare the use of the model in inverse problems. Correlations between opposite faces distinguish systems that share the same fundamental decay rate but differ in leakage, and a hierarchy of three stationary problems links this spatial benchmark to multiplicity counting. Modal convergence, detector imbalance and spectral evolution remain limitations for quantitative inference.

52. [A novel quantum lattice Boltzmann methodology for cosmological radiation transport](https://arxiv.org/abs/2611.31340)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.31340v1 Announce Type: cross Abstract: Radiation transport is an essential process in many physical simulations, including cosmological codes which track stellar and diffuse radiation. Many present codes utilize ray tracing or moment methods, but these grow increasingly difficult and expensive for large simulations. Quantum lattice Boltzmann methods exponentially reduce complexity by propagating radiation over a lattice, allowing for better spatial resolution without needing to introduce adaptive ray tracing or other optimizations. However, existing formulations result in poor angular resolution for radiation point sources. In this work, we propose an angular redistribution methodology which significantly improves the resolution with minimal increase in complexity. We verify the correctness of the method on both classical processors and quantum simulators and outline how the quantum algorithm can be integrated into existing codes. This method is an important step towards fully-quantum radiation hydrodynamics simulation which could exponentially accelerate existing cosmological codes, enabling simulations at scales currently infeasible.

53. [Gaussian priors from nonlinear PDEs with the semiclassical approximation](https://arxiv.org/abs/2611.33400)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33400v1 Announce Type: cross Abstract: Probabilistic numerical methods for partial differential equations (PDE) combines the governing physics with observations to treat solving the PDE as a Bayesian inverse problem. This allows techniques to quantify the uncertainty in the field reconstruction under model-form error. In the majority of cases, a Gaussian prior is assigned to the field of interest, and Bayes's theorem in the infinite-dimensional setting is used to derive the posterior. While Gaussians have been shown to be well-suited for linear PDEs, a similar treatment for nonlinear PDEs remains open-ended. In this work, study the use of the semiclassical approximation to construct Gaussian priors from variational energies or integrated square residuals for probabilistic numerics. The prior is derived by expanding the PDE energy about a stable solution and uncovering a Gaussian form. We then analyze the different characteristics of the resulting priors as they pertain to the inverse problem. In particular, we find that the covariance operator is given by the inverse of the Hessian of the energy whose associated Cameron-Martin space is the solution space of the PDE. We also find that the prior responds to model-form error by sharpening or flattening itself depending on the distance between the ground truth and the solution of the assumed model.

54. [Symmetry-Aware Residual Learning of Few-Body Molecular Wave Functions](https://arxiv.org/abs/2611.33576)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33576v1 Announce Type: cross Abstract: Ultracold polar molecules are a highly controllable platform for engineering quantum matter, but modeling their few-body properties remains computationally challenging. Their anisotropic long-range interactions and rich internal structure lead to high-dimensional eigenvalue problems for which conventional grid-based solvers are largely restricted to two-molecule systems. To address this limitation, we introduce a physics-informed neural variational method that exploits known physical structure of the molecular wave function. Our key idea is to factor the wave function into analytic and neural components. The analytic component encodes rotational symmetry and asymptotic decay, while the neural residual learns the remaining intermediate-range behavior. This decomposition reduces the effective dimensionality of the problem without relying on ad hoc approximations or problem-specific discretization grids. We benchmark our method against high-accuracy two-molecule solvers and recover both ground and excited bound states with mean relative errors below 0.01%. We further demonstrate the method's applicability to three-body systems by computing field-linked trimer ground-state energies in percent-level agreement with an independent grid-based calculation. This provides a systematic route to larger molecular systems and opens opportunities to study correlations and dynamics in interacting quantum matter.

55. [Graphical Rules for Zero-energy Quantum-Interference Patterns in Bipartite Lattices](https://arxiv.org/abs/2611.33630)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33630v1 Announce Type: cross Abstract: Quantum interference(QI) plays an important role in electron transport in molecules, where conductance is determined by the coherent superposition of different quantum-walk paths connecting the source and drain sites. In some systems, the pronounced even-odd conductance oscillation with the walk length can be observed; meanwhile destructive QI can lead to a dramatic suppression of conductance, resulting in a huge on/off ratio. In this paper, we extend the investigation from individual molecules to bipartite lattice systems, providing an abstract framework for exploring QI in a broad range of two-dimensional systems. We propose a simple graphical rule for predicting the QI pattern-the conductance map obtained by varying the drain site while keeping the source site fixed-in bipartite structures with arbitrary boundaries and holes. The analysis can be completed in three steps. First, a unit-cell-replicated bipartite subset is constructed by removing a subset of atoms from the input network, and its Green's function map is efficiently obtained from a local recurrence relation. Second, the removed atoms and local structural modifications are coupled back as local degrees of freedom, generating zero-mode vectors through the same Green's function map. Finally, the surviving zero-mode combinations are selected by an effective coupling matrix, whose projectors correct the reference map to yield the final QI pattern. This rule applies to finite flakes with arbitrary boundaries and holes and extends naturally to infinite lattices and vacancy defects.

56. [OrbACE: Orbital and Atomic Cluster Expansion](https://arxiv.org/abs/2611.33743)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33743v1 Announce Type: cross Abstract: Accurate electronic-structure reference data are expensive, motivating interatomic potentials that learn effectively from limited training sets. We introduce OrbACE (Orbital and Atomic Cluster Expansion), a framework that supplements an E(3)-equivariant cluster-expansion backbone with inexpensive electronic-structure descriptors. On ANI-1x at the $\omega$B97X/6-31G* level, its atom-centered variant, OrbACE-A, trained on 10,000 configurations and evaluated on 442,000 held-out configurations, achieves energy and force mean absolute errors of 3.16 meV/atom and 76 meV/angstrom in direct learning, compared with 9.61 meV/atom and 146 meV/angstrom for MACE with matched backbone settings. This reduces the energy error by a factor of three and approximately halves the force error. Its energy error is also below that of the best delta-corrected MACE baseline, 5.00 meV/atom, although its force error is slightly higher. Combining OrbACE-A with a Hartree-Fock delta baseline further reduces the errors to 1.48 meV/atom and 35 meV/angstrom. OrbACE-A builds atom- and pair-resolved invariants from a non-self-consistent extended-Hueckel model evaluated within the differentiable forward pass, yielding forces consistent with the predicted energy. The orbital variant, OrbACE-O, instead uses localized Hartree-Fock orbitals as graph nodes, with scalar and equivariant electronic descriptors. Its forces are evaluated at fixed descriptors, omitting their response to nuclear motion. In direct learning on ANI-1x, its energy error is approximately three times that of OrbACE-A. The three benchmarks considered (ANI-1x, revised MD17, and 3BPA) cover neutral, closed-shell, non-periodic molecules containing H, C, N, and O. Performance outside this domain remains to be established.

57. [Data-driven framework for invariant manifold identification in multiscale systems](https://arxiv.org/abs/2611.33849)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 26 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33849v1 Announce Type: cross Abstract: Multiscale dynamical systems often exhibit fast transient behavior followed by slow evolution on a low-dimensional attracting manifold, on which their long-term dynamics unfold. Identifying this structure directly from data remains challenging when the governing equations, Jacobians, and fast-slow variable partitions are unknown. In this work, we propose a fully data-driven framework for timescale decomposition, slow invariant manifold (SIM) approximation, and reduced-order model identification. A sparse-regression surrogate of the vector field is reconstructed from the data, and its Jacobian, estimated with a matrix-free Krylov method, is analysed with Computational Singular Perturbation diagnostics. The resulting fast-slow partition guides the learning of explicit SIM algebraic representations through regression, and the reduced model follows by restricting the dynamics to it. For a linear stochastic system, this regression agrees with the Mori-Zwanzig projection at leading order in the timescale ratio. We demonstrate the validity of the framework on an illustrative linear system, the Michaelis-Menten model, a biofilm growth model, and a five-dimensional target-mediated drug disposition (TMDD) model. The method accurately identifies fast variables, reconstructs slow invariant manifolds, and generates accurate reduced models. Furthermore, we map the performance boundaries of the framework under sparse sampling and measurement noise, showing robust recovery for low-dimensional systems and highlighting data-requirement limits in higher dimensions. These results demonstrate that interpretable multiscale reduction can be achieved directly from time-series data, without requiring explicit prior knowledge of the underlying fast/slow timescale separation.

58. [Ask HN: Am I the only one whose AI hype is cooling down a lot?](https://news.ycombinator.com/item?id=50633601)
   - Source: Hacker News; Group: Tech community; Score: 2.72; Date: 2026-11-24T19:51:01Z; Popularity: 37 points, 26 comments
   - Summary: HN discussion: 37 points, 26 comments.

59. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.29; Date: 2026-11-26T19:23:13Z; Popularity: 1,287 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

60. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.28; Date: 2026-11-25T13:22:01Z; Popularity: 277 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

61. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.07; Date: 2026-11-26T14:38:22Z; Popularity: 1,072 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

62. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-24T04:38:59Z; Popularity: 63 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

AI Buckingham: Agentic Discovery of Dimensionless Scaling Laws Across Physical Regimes

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.33961

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
