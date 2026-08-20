# Daily signal sidecar - 2026-08-20

## Selected Signal

- Title: Science Done on a Machine by a Machine: AI Agents in Computational Chemistry
- URL: https://arxiv.org/abs/2608.18508
- Source: arXiv physics.comp-ph
- Score: 7.00

## Candidate Review

- Signal: Science Done on a Machine by a Machine: AI Agents in Computational Chemistry
- Primary source: https://arxiv.org/abs/2608.18508
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

1. [Science Done on a Machine by a Machine: AI Agents in Computational Chemistry](https://arxiv.org/abs/2608.18508)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 7.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18508v1 Announce Type: cross Abstract: We are witnessing an explosion of agentic systems for computational chemistry simulations: from half a dozen in 2024 to a dozen in 2025, and the current number approaches fifty, surveyed in this Perspective as of 8 August 2026. The capabilities of these agentic systems are shifting from assisting in performing a selection of computational tasks to autonomous design and execution of \textit{in silico} experiments, their analysis, and even manuscript writing. The ultimate destination is a fully autonomous AI scientist, where the entirety of computational chemistry is performed on a machine by a machine, without human supervision. While we are not there yet, and all reported systems currently involve a human in the loop, the trend is unmistakable. Even building specialized agentic systems for computational chemistry is increasingly commoditized by generalist agents, which may in the end replace the need for the specialized ones altogether, since adding a new capability will be as easy as asking AI to do it for you. Both the explosion in their number and the very limited adoption beyond their own developers point that way, and we close this Perspective on what it leaves us to do. The speed and scale of disruption agentic systems are bringing to computational chemistry leave many of us dumbfounded about the field's future and what we should spend our efforts on, as already established specialists, teachers, and students, and we have no answer.

2. [Position: Current Model Cards Are Insufficient for Downstream Governance of Open-Weight Foundation Models](https://arxiv.org/abs/2608.18086)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18086v1 Announce Type: new Abstract: The growth of open-weight foundation models (OWFMs) has prompted the AI community to re-evaluate strategies for effective downstream governance. Although model cards have been widely adopted as transparency artifacts in model repositories, existing frameworks often fail to adequately inform downstream developers and users about the distinct safety challenges posed by OWFMs. This position paper analyzes 500 model cards hosted on Hugging Face and argues that effective governance of OWFMs requires a multi-layered approach integrating three complementary components: (i) model cards, (ii) acceptable use policies (AUPs), and (iii) licenses. To motivate this claim, we identify a safety gap left by existing regulatory approaches, including model heritage, alignment provenance, and empirically observed behaviors, through an analysis of model cards with safety-critical information. We further argue that standard open-source licenses (OSLs) are not well suited for OWFMs and may weaken the enforceability of AUPs. Building on these observations, we outline directions for evolving model cards, AUPs, and licenses into integrated safety artifacts to enable a more comprehensive governance framework that coherently integrates informational, normative, and legal dimensions.

3. [Self-Evolving Agents as Dynamic Graph Transformation: A Survey and New Perspective](https://arxiv.org/abs/2608.18104)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18104v1 Announce Type: new Abstract: Large language model (LLM)-based agents are increasingly becoming self-evolving systems that persist across interactions, maintain memories, use tools, acquire skills, refine workflows, and coordinate with other agents. These capabilities make agent states structural and dynamic: entities, relations, attributes, dependencies, and execution structures change with new evidence, feedback, and environmental conditions. Existing graph-agent surveys typically treat graphs as support structures for agent functions rather than as evolving substrates, while self-evolving-agent surveys focus on agent-level mechanisms and rarely discuss graph topology evolution. Thus, the coupling between evolving agent state and dynamic graph topology remains underexplored. This survey connects these two research lines by framing \textit{agent evolution as dynamic graph transformation}. We model agent state as a dynamic graph, where memories, tools, skills, workflows, and inter-agent relations are represented as typed nodes, edges, and subgraphs updated through schema-constrained rewrites. Based on this formulation, we organize existing dynamic-graph-based methods for self-evolving agents into four taxonomies: node/feature evolution, edge/topology evolution, subgraph activation, and cross-component co-evolution. Building on this taxonomy, we propose dynamic graph learning as reusable infrastructure for self-evolving agents and map nine dynamic-graph-learning subfields to agent-evolution capabilities, discussing their adaptations and possible failure modes. Finally, we discuss five types of graph-aware evaluation and governance protocols from a dynamic-graph perspective, which complement end-task evaluation. The goal is to provide a compact structural lens for designing and governing self-evolving agents.

4. [FAST-HEP: Compiling Declarative Analysis Workflows for High-Energy Physics and Beyond](https://arxiv.org/abs/2608.18745)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18745v1 Announce Type: cross Abstract: High-energy physics analyses increasingly rely on complex software workflows whose scientific lifetime often exceeds that of the underlying software ecosystem. Maintaining reproducibility while accommodating evolving analysis software, data formats, and execution environments therefore remains a significant challenge. These challenges are not unique to high-energy physics and are shared by many data-intensive scientific analyses. We present FAST-HEP and its workflow engine, Flow, which combines a declarative workflow language, compiler, and runtime. Flow separates the scientific description of a workflow from its implementation and execution, and compiles workflows into backend-independent execution plans through normalization, graph construction, dependency analysis, and execution planning. A common runtime then orchestrates the resulting plan using replaceable capabilities. This architecture enables static validation and modular replacement of analysis operations, execution backends, and storage technologies, while recording provenance throughout compilation and execution. Although developed for the requirements of high-energy physics analysis, Flow's workflow model and orchestration layer are domain-independent. By applying compiler techniques to scientific analysis workflows, FAST-HEP provides a foundation for workflows that are transparent, extensible, portable, and reproducible, allowing scientific analyses and their supporting software ecosystems to evolve independently.

5. [feng72013-ui/Multimodal-Agentic-RAG-for-Science](https://github.com/feng72013-ui/Multimodal-Agentic-RAG-for-Science)
   - Source: GitHub repository search; Group: Open source; Score: 5.01; Date: 2026-08-18T07:58:35Z; Popularity: 7 stars
   - Summary: 面向科研场景的多模态多智能体 RAG 助手，支持将 PDF、图片和文本构建为领域知识库，并通过智能体协作完成文献问答、图表理解、论文总结、方法对比、文献调研和科研创意评审。

6. [How NVIDIA scales expertise with ChatGPT Work](https://openai.com/index/nvidia/chatgpt-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 18 Aug 2026 00:00:00 GMT
   - Summary: NVIDIA teams use ChatGPT Work to reduce manual tasks, connect fast-moving signals, and scale successful workflows globally.

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

11. [Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 13 Aug 2026 17:16:04 GMT

12. [Position: Collusion Risks Among AI Reasoning Agents Justify Certification Requirements for Making Market Decisions](https://arxiv.org/abs/2608.18078)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18078v1 Announce Type: new Abstract: This position paper argues that AI agents with chain-of-thought reasoning capabilities are predisposed to exhibit collusive behavior and should be required to obtain behavioral certification before making decisions that affect economic markets. This is because integrating these agents into society could collapse the legal evidentiary distinction between competition and collusion among independent firms without eroding the economic harm distinction. Experiments with DeepSeek-R1 agents in the Bertrand oligopoly pricing domain reveal a tendency towards tacit collusion that persists even when humans prompt the agents not to collude. We further show that the chain-of-thought of these agents can be steered toward either extremely collusive or highly competitive behavior in a way that is not semantically detectable by another LLM analyzing the reasoning traces. As a result, deploying reasoning agents for market decisions leads to collusive economic outcomes without any evidence of conspiracy or intent. Thus, certification based on observed behavior in representative situations is necessary to prevent collusion. We provide preliminary evidence that such agents can be steered in a generalizable way toward efficient competitive equilibria. However, developing a comprehensive behavioral certification will be required before these models can be deployed in real-world markets while ensuring their stability and efficiency.

13. [Position: Behavioral Systems Require Behavioral Tests](https://arxiv.org/abs/2608.18081)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18081v1 Announce Type: new Abstract: Artificial agentic systems increasingly operate as behavioral systems by interacting with dynamic environments, pursuing goals, and adapting over time. Yet, current evaluation methods largely focus on performance outcomes, not the underlying behavioral processes that produce them. This paper argues that AI agents must be evaluated like other behavioral systems: through systematic observation, perturbation, and interpretation of their actions. We draw on lessons from the behavioral sciences to motivate this position, and propose a research agenda focused on developing rigorous behavioral tests. These include methods for recovering decision strategies from action sequences, constructing environments that isolate behavioral differences, and probing emergent dynamics in multi-agent systems. Taken together, these directions offer a roadmap for developing a science of AI behavior.

14. [A Metamorphic Artificial Age Score Decision-Support Prototype for Flight-Log-Based Drone Propeller Health Monitoring](https://arxiv.org/abs/2608.18088)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18088v1 Announce Type: new Abstract: Drone propeller faults can create safety and reliability risks when their effects are distributed across multiple flight-log channels rather than appearing as a single diagnostic signal. This paper proposes a Metamorphic Artificial Age Score (AAS) decision-support prototype for flight-log-based drone propeller health monitoring. Using selected historical real flight logs from the 2024 DronePropA public dataset, the framework computes six health-related indicators from raw MATLAB matrices: trajectory tracking error, attitude instability, thrust-command burden, motor-command imbalance, ESC-command instability, and battery-level stress. These indicators are normalized relative to a healthy baseline and evaluated through candidate scoring policies, metamorphic adequacy relations, and a redundancy-adjusted AAS formulation. In this context, AAS is used as a structural policy-adequacy and burden measure rather than as a chronological age measure. A controlled retrospective evaluation was performed using one healthy baseline and three defective propeller cases under the same speed profile and trajectory. The healthy case was assigned to routine monitoring. The Severity 1 case was dominated by ESC-command instability and assigned to maintenance review. The Severity 2 case reached maximum motor-command and ESC-command burden, while the Severity 3 case reached maximum trajectory tracking error; both triggered mandatory inspection. The results show that propeller fault effects may appear through different operational channels, supporting the need for a multi-indicator decision-support layer for post-flight maintenance prioritization and autonomous-system oversight.

15. [FinSkillBench: Evaluating AI Agents and Domain Skills for Investment Management](https://arxiv.org/abs/2608.18099)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18099v1 Announce Type: new Abstract: Investment management is a high-stakes domain in which agentic AI systems must do more than generate plausible text. They must retrieve point-in-time data, assemble correct computational inputs, invoke specialized methods, and produce auditable structured outputs. We introduce FinSkillBench, an evaluation suite designed to measure whether language model agents can effectively use financial domain skills to solve investment management tasks. The benchmark spans three domains, portfolio construction, risk management, and fundamental analysis, and includes 12 subtasks with 2,603 task episodes. Each episode provides point-in-time inputs, hidden ground truth, and a task-specific verifier.We compare three conditions: no skill, curated skill packages consisting of procedural documents and executable components, and self-generated skills in which the agent writes and reuses its own procedures within an episode. Across 9 models and a large-scale evaluation, curated skills consistently improve performance, raising mean scores from 0.366 to 0.528, with the largest gains in portfolio construction and risk management. In contrast, self-generated skills provide little benefit despite higher computational cost. An independent evaluation using a separate agent framework (Hermes Agent, 8 models, 5,280 episodes total) reproduces the directional pattern across all three domains, with the magnitude of skill effects varying by subtask and harness. These results showthat in investment management agents, access to reliable procedural skills can be as important as model choice, while naive self-generation of skills is often ineffective. We release the benchmark, evaluation tools, curated skill packages, and full trajectories to support further research.

16. [Towards Reversible Forgetting: Managing Obsolete Knowledge in Continual Enterprise AI Agents](https://arxiv.org/abs/2608.18177)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18177v1 Announce Type: new Abstract: Continual learning has traditionally treated forgetting as a failure, emphasizing preservation of previously acquired knowledge as environments evolve. We argue that this objective is incomplete for enterprise AI agents operating in non-stationary environments, where customers, policies, tools, workflows, regulations, and market conditions change over time. Indiscriminate retention can allow obsolete knowledge to influence decisions, creating negative transfer and operational risk. We therefore propose reversible forgetting: a conceptual framework with three operational memory states: active, dormant, and retired, and a reactivation transition that can restore dormant knowledge when its relevance returns. We instantiate the framework as a Hysteretic Reversible Memory Controller that accumulates relevance evidence, uses asymmetric thresholds to prevent state oscillation, tests reactivation in shadow mode, and gates retirement through policy. The framework reduces the influence of obsolete information without conflating temporary suppression with permanent erasure. Finance illustrates the idea: knowledge useful under one market regime may become harmful under another yet regain relevance when similar conditions recur.

17. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.74; Date: 2026-08-20T07:20:46Z; Popularity: 2,736 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

18. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

19. [Offering Zero Data Retention for frontier models](https://openai.com/index/offering-zero-data-retention-for-frontier-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 19 Aug 2026 19:00:00 GMT
   - Summary: OpenAI reaffirms Zero Data Retention for eligible API customers and previews Private Safety Processing for advanced AI safety without compromising data privacy.

20. [Replit expands access to software creation with GPT-5.6 Luna](https://openai.com/index/replit)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 19 Aug 2026 07:00:00 GMT
   - Summary: Replit introduces Free Mode, powered by GPT-5.6 Luna, so anyone can turn ideas into working software without worrying about token costs.

21. [ChatGPT Ads expands across Europe](https://openai.com/index/chatgpt-ads-expands-across-europe)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 22:00:00 GMT
   - Summary: ChatGPT Ads is expanding to 31 European markets. Learn how advertisers can reach people as they explore, compare options, and make decisions.

22. [Strengthening democratic oversight in national security](https://openai.com/index/strengthening-democratic-oversight-in-national-security)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 19:00:00 GMT
   - Summary: OpenAI launches an initiative to strengthen democratic oversight of AI in national security, supporting government institutions with tools, training, and expertise.

23. [Partnering with CodeAI to prepare the first AI generation](https://openai.com/index/partnering-with-codeai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: OpenAI and CodeAI are partnering to help students build AI literacy, think critically about AI, and develop the skills to use and shape it responsibly.

24. [Pacing model development in an era of cyber-critical capabilities](https://openai.com/index/pacing-model-development-cyber-capabilities)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: OpenAI is strengthening monitoring, alignment, and security for frontier AI models. See how new safeguards are guiding the pace of model development.

25. [Introducing ChatGPT for Teens: Built for learning, backed by protections](https://openai.com/index/chatgpt-for-teens)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: ChatGPT for Teens helps teens learn, think critically, and use AI with confidence, with stronger built-in protections, healthy-use features, and additional controls for parents.

26. [Asana cleared 5 years of engineering work in 2 weeks with Codex](https://openai.com/index/asana)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 07:00:00 GMT
   - Summary: Asana used OpenAI Codex to replace an outdated testing system in two weeks, completing work expected to take five years for about $12K.

27. [The Defender’s Window](https://openai.com/index/the-defenders-window)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 17 Aug 2026 05:30:00 GMT
   - Summary: AI is reshaping cybersecurity for attackers and defenders alike. Learn how OpenAI is strengthening its defenses and what security teams can do now.

28. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

29. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

30. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

31. [LFM2.5 Q4\_0 Checkpoints from Quantization-Aware Distillation](https://huggingface.co/blog/LiquidAI/qad)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 19 Aug 2026 13:48:49 GMT

32. [How Much Memory Does Your Agent Actually Need?](https://huggingface.co/blog/ibm-research/altk-evolve-hmm)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 18:09:38 GMT

33. [Multi-Vector (Late Interaction) Embedding Models with Sentence Transformers](https://huggingface.co/blog/multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 00:00:00 GMT

34. [Same Cluster, 33 Points More Utilization: What Changed Was the Order](https://huggingface.co/blog/Dharma-AI/gpu-management-pt2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 17 Aug 2026 19:46:21 GMT

35. [State of Open Models: Summer 2026 Observations](https://huggingface.co/blog/state-of-open-models-summer-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 GMT

36. [What We Learned by Reproducing 2,200 papers from ICML](https://huggingface.co/blog/icml-2026-open-reproductions)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 GMT

37. [Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis](https://huggingface.co/blog/allenai/olmoearth-embeddings)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 16:14:36 GMT

38. [Thinking of ACE? We Can Do It with Fewer Tokens](https://huggingface.co/blog/ibm-research/altk-evolve-sldd)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 11 Aug 2026 13:37:10 GMT

39. [Build Low-Latency Multilingual Voice Agents: Open Weights & Full Deployment Control with NVIDIA Magpie TTS](https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 16:25:36 GMT

40. [Position: Profiling Game Worlds by Transition Complexity](https://arxiv.org/abs/2608.18079)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18079v1 Announce Type: new Abstract: Game world modeling (GWM) and reinforcement learning (RL) are often confounded because research papers rarely quantify how difficult the underlying transition prediction problem is at the declared interface (pixels/tokens/latents with finite history). We propose the Transition Complexity Profile (TCP): a small, reproducible set of metrics that characterizes an environment's (or gameplay dataset's) induced transition kernel by (i) intrinsic one-step branching, (ii) interaction-induced uncertainty and opponent influence when observable, and (iii) temporal/spatial dependency span via standardized probe curves. TCP is reported with an explicit reference distribution, protocol stochasticity, and a versioned measurement budget (sampling/resampling and fixed probe compute), enabling comparable numbers across benchmarks. We outline how common game families and modern "neural game engine" domains populate this landscape and call for TCP to become standard benchmark metadata and a required statistic in GWM and RL papers.

41. [Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges](https://arxiv.org/abs/2608.18080)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18080v1 Announce Type: new Abstract: We present a review on the applications of large language models (LLMs) in health, e.g., social media analysis, clinical conversational agents, therapy support tools, prompt engineering, multimodal learning, and ethical considerations. We integrate findings from interdisciplinary studies utilizing diverse data sources such as social media posts, electronic medical records, and multimodal inputs to enable early detection of depression, suicide risk assessment, personalized therapy support, and psychoeducational content generation. Our review highlights advancements in LLM models and annotation strategies that enhance interpretability and clinical relevance, while we also emphasize the critical role of prompt engineering for domain adaptation. We also discuss emerging multimodal fusion techniques integrating text, speech, and sensor data for improved mental health diagnosis and monitoring. Finally, we address ongoing ethical, sociotechnical, and regulatory challenges, and advocate frameworks to ensure safe, equitable, and accountable deployment of LLMs in real-world mental health care.

42. [Position: Multi-Agent Systems Should Prioritize Concurrency Control](https://arxiv.org/abs/2608.18092)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18092v1 Announce Type: new Abstract: LLM-based multi-agent systems (MAS) promise scalable collaboration, yet adding agents often reduces reliability. This position paper argues that many MAS failures are fundamentally concurrency control problems: agents concurrently read and write shared state, and long LLM inference windows amplify the risk of stale reads, lost updates, and inconsistent outcomes. Failure modes commonly attributed to coordination or communication breakdowns can be mapped directly onto classical concurrency anomalies. We contend that MAS frameworks should address these failures through explicit concurrency control mechanisms: conflict detection, isolation guarantees, and structured access to shared resources. Concurrency control should be a first-class design concern, not an afterthought.

43. [Emergence of Agentic AI: A Review on Evolution, Background, Working Principles, Applications, Adoption Factors, and Future Research Directions](https://arxiv.org/abs/2608.18110)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18110v1 Announce Type: new Abstract: Agentic AI is gaining new insights and advancements in the field of Artificial Intelligence, fostering significant potential to enable rapid transformation across various domains.This rapid advancement and the potential to revolutionize various domains advocate the need for a deeper understanding and firm grasp of the technology. Moreover, an investigation into state of the art research directions in agentic AI needs to be conducted to comprehensively assess the potential scope for improvement and application.Therefore, to address these objectives, a comprehensive review can provide researchers and practitioners with valuable insights into the current state and future research scopes of agentic AI.Hence, this work considers the recently published scholarly contributions in agentic AI across various domains and discusses the fundamentals and working principles of Agentic AI, traces the historical and theoretical evolution of agency in artificial systems, explores and discusses Agentic AIs architecture, working principles, and functionalities, explores real-world applications of Agentic AI across various domains, analyzes the research findings, identifies current challenges, and discuss potential future research directions, and proposes a comprehensive framework of stakeholders intention to use and adopt Agentic AI with the help of proposed system quality dimensions.Therefore, this systematic review provides researchers and practitioners with a comprehensive understanding of Agentic AI, its current developments and applications, highlights key research gaps, and outlines future research directions.

44. [ChiroEcho: extending automated bat vocalisation classification beyond the learned taxonomy](https://arxiv.org/abs/2608.18191)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18191v1 Announce Type: new Abstract: Bats are key indicators of ecosystem health and are protected throughout Europe, making reliable population monitoring a conservation priority. Their cryptic nocturnal lifestyle makes passive acoustic monitoring essential, yet automated identification remains difficult as echolocation calls vary with behaviour and environment and overlap among species. We present a deep learning framework that jointly predicts species and genus and combines genus predictions with geographic species distributions at inference. When only one species of a predicted genus occurs in a region, the framework can resolve species absent from the learned taxonomy. This reframes geographic information as a means of extending, rather than constraining, a classifier's effective taxonomy. Using recordings spanning 35 European bat species, we evaluate closed-set classification, examine the instability of performance estimates for sparsely represented species, and conduct a controlled held-out proof-of-principle experiment. The rare-species analysis shows how limited evaluation data can obscure species-level performance, while the held-out experiment shows that genus predictions and location can recover labels unavailable to the species head. Geographic resolution extends operational coverage from 35 to 41 of the 48 native European bat species, increasing coverage from 73% to 85%. To our knowledge, this is the broadest operational coverage reported for automated European bat classification. More broadly, the bat framework provides proof of principle for resolving unseen fine-grained classes by combining coarse predictions with transparent external constraints.

45. [Flux-form spatiotemporal neural operators for coarse-grained dynamics of multiscale PDEs](https://arxiv.org/abs/2608.18148)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18148v1 Announce Type: cross Abstract: We study data-driven prediction of coarse-grained dynamics in multiscale PDE systems. Adopting a closure-free operator-learning viewpoint, we apply a linear coarse-graining map and learn a surrogate evolution operator for the resolved field directly from filtered high-fidelity trajectories. Motivated by the Mori-Zwanzig formalism, we propose a spatiotemporal neural operator mapping a resolved history slab on $\Omega\times[-T_{\mathrm{in}},0]$ to a resolved future slab on $\Omega\times[0,T_{\mathrm{out}}]$. Spatial mixing uses Fourier convolution, while temporal mixing uses a causal kernel operator with position-attention weights on time lags. This causal temporal operator encodes finite-memory effects in the resolved dynamics while preserving the directionality of the history-to-future map. To improve rollout robustness and suppress nonconservative artifacts, we embed a flux-form inductive bias by parameterizing the windowed update in explicit divergence form. We also provide a data-driven guideline for selecting the memory length $T_{\mathrm{in}}$ via the decorrelation time of a closure-injection diagnostic computed from filtered trajectories. We validate on the coarse-grained viscous Burgers' equation, the Kuramoto-Sivashinsky equation, and two-dimensional turbulent flows, obtaining stable autoregressive rollouts with improved long-horizon accuracy and statistical fidelity.

46. [Fourier Transforms of Color Glass Condensate Multi-Wilson-Line Correlators via Filon Quadrature](https://arxiv.org/abs/2608.18589)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18589v1 Announce Type: cross Abstract: Calculating cross sections in the Color Glass Condensate effective theory requires Fourier transforms of multi-Wilson-line correlators from transverse coordinate space to transverse momentum space. Under the common assumption of impact-parameter independence, each transform reduces to a set of Hankel transforms whose Bessel-function kernels oscillate rapidly at phenomenologically relevant momenta, making direct quadrature prohibitively expensive. We present a Filon-type quadrature, applicable to any integrand, that integrates these oscillatory factors in closed form on the stored coordinate grid, reducing each Hankel transform to a precomputed weight vector and the full nested transform chain to a sequence of matrix products. We develop and validate the method on the deep inelastic scattering dijet cross section beyond the correlation-limit approximation, where an exprel-based reformulation of the quadrupole Wilson-line correlator removes a numerical $0/0$ instability inherent to its standard parametrization. Porting the calculation to the Graphics Processing Unit (GPU), with custom CUDA kernels that fuse the momentum-space contraction directly into the correlator evaluation, brings the runtime for one dipole input down to about two minutes on a single NVIDIA A800, from several hours on a multi-core Central Processing Unit (CPU). We further generalize the algorithm to three sequential Hankel transforms and validate the resulting six-dimensional transform against an analytic Gaussian integrand family with closed-form results at every stage. This general, process-independent algorithm is directly applicable to next-to-leading-order proton-nucleus and electron-ion scattering cross-section calculations performed without the correlation-limit approximation. The code is publicly available at https://github.com/CCNU-CGC-py/FFT_filon.

47. [A single design choice determines whether machine learning models of materials make physically impossible predictions](https://arxiv.org/abs/2608.18714)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18714v1 Announce Type: cross Abstract: Machine-learned models are replacing first-principles calculations across materials discovery, and physical symmetry is the central guarantee built into them. The debate over how much symmetry to hard-wire rather than learn has run on rotations, where a symmetry error is an approximation error. Some constraints are exact: symmetry forces certain property tensors to exactly zero, so a nonzero prediction is physically impossible rather than inaccurate. Here we show that whether a model can make such predictions is decided before training by one rarely reported design bit, whether its features carry parity labels, and derive a criterion, the parity gap, that computes from group theory alone which properties and crystals are exposed. Across matched architecture pairs differing only in that bit, evaluated on two thousand centrosymmetric crystals whose piezoelectric tensor must vanish, parity-labelled arms sit at the floating-point floor while rotation-only arms predict forbidden responses on 90-96% of crystals, six orders of magnitude apart, at no accuracy cost. Training on explicit zeros does not recover exactness, and a head on a frozen universal potential inherits its backbone's symmetry group. One reflection at random initialization verifies the label in seconds.

48. [Orientation-dependent drag, lift, and torque correlations for regular Platonic polyhedral particles](https://arxiv.org/abs/2608.18890)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18890v1 Announce Type: cross Abstract: In this work, particle-resolved direct numerical simulations are performed to investigate flow past the five Platonic solids, which represent a progression in particle sphericity with an increasing number of faces. The simulations cover particle Reynolds numbers in the range 0.1 <= Re_p <= 300 and multiple particle orientations relative to the incoming flow. Based on the numerical data, new correlations are developed for the drag, lift, and torque coefficients. The proposed drag correlation explicitly accounts for both Reynolds number and particle orientation, whereas the lift and torque coefficients are represented by orientation-dependent trigonometric and exponential basis functions whose coefficients vary with Reynolds number. The simulations are conducted using the immersed boundary method, and the resulting drag correlation accurately reproduces the numerical data. The lift and torque correlations capture the principal trends observed in the numerical simulations, including the strong dependence on particle orientation. The proposed correlations provide a computationally efficient framework for incorporating orientation-dependent hydrodynamic forces and torques into Euler--Lagrange and point-particle simulations, enabling a more realistic representation and predictions of non-spherical particle transport in multiphase flows.

49. [Sign-problem-resilient singular-value probe in determinant quantum Monte Carlo](https://arxiv.org/abs/2608.19028)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19028v1 Announce Type: cross Abstract: The sign problem limits determinant quantum Monte Carlo studies of strongly correlated fermion systems. In the spin-channel Hubbard-Stratonovich decoupling, spin correlations are exactly related to auxiliary-field correlations. This relation implies that an antiferromagnetic transition reorganizes auxiliary-field configurations and thereby changes the statistical structure of the resulting fermion matrices. We use the adjacent gap ratio of low-lying singular values of the space-time fermion matrix to probe interaction-driven transitions in two half-filled honeycomb-lattice Hubbard models. In the sign-free honeycomb Hubbard model, the statistic tracks the established transition from a Dirac semimetal to an antiferromagnetic Mott insulator. In the complex-weight Haldane-Hubbard model, the transition-sensitive feature remains visible in the phase-quenched reference ensemble and occurs near previous estimates of the transition. Moreover, phase reweighting only weakly modifies the gap ratio over the regimes investigated, despite the rapid suppression of the average phase. These results establish singular-value statistics as a sign-problem-resilient probe of interaction-driven transitions in determinant quantum Monte Carlo.

50. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.74; Date: 2026-08-20T13:11:31Z; Popularity: 1,737 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

51. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-20T13:00:45Z; Popularity: 480 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

52. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.34; Date: 2026-08-20T02:36:22Z; Popularity: 339 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

53. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-20T10:12:26Z; Popularity: 231 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

54. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

55. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

56. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

57. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

58. [Safe Domain Adaptation for Physics: Overcoming Nuisances, Label Shifts, and Simulation Priors](https://arxiv.org/abs/2608.18190)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18190v1 Announce Type: new Abstract: Domain adaptation is widely used to make neural networks trained on simulations applicable to experimental data. Its premise is that the two domains differ only in nuisances, and that the quantity of interest is distributed identically in both. In physics neither assumption holds: simulations can be wrong about the physics, and the distribution of the target quantity - an energy spectrum, a redshift distribution - is often the measurement itself. We study the consequences of such mismatches on a toy air-shower benchmark in which a detector-response nuisance, a physical simulation shift, and an energy-spectrum shift can be switched on separately or together. Standard adversarial adaptation handles the conditional shifts, but once the two spectra differ it aligns them, replacing an uncontrolled bias by one anchored on the simulation prior. We present adaptive domain adaptation, which reweights the simulated events so as to focus domain adaptation on the genuine physical mismatch alone. Since the predicted spectrum depends on model training configuration, we provide a label-free model selection rule for selecting the near-the-best operation point.

59. [Allocating Recurrent Compute in Looped Language Models](https://arxiv.org/abs/2608.18230)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18230v1 Announce Type: new Abstract: Looped language models improve reasoning and knowledge manipulation by applying shared computation repeatedly. Existing systems usually repeat an entire layer stack, although a mixer and a dense feed-forward network (FFN) perform different operations and have different costs. We ask a narrower question: what should loop? We view recurrence as repeated composition of a state update and argue that an application is valuable when it exposes a new cross-position influence direction that remains observable at the task readout. Iterative Transport Rank (ITR) describes the cumulative influence trajectory; marginal ITR describes the nonredundant influence contributed by successive applications. This view motivates MixerLoop, which repeats each Gated DeltaNet mixer while applying its dense FFN once. We compare MixerLoop with no recurrence and full-block recurrence at 15M and 110M parameters under the same data, initialization, and architecture. A finite context-off intervention tests whether later mixer applications produce distinct, non-negligible, and beneficial changes at the final language-model readout. MixerLoop surpasses FullLoop on aggregate CORE at 15M and retains 41.5% of its CORE improvement at 110M while reducing recurrent-backbone projection FLOPs by 45.9%. These results show that the benefits of recurrent depth can be retained without repeatedly executing the dense FFN.

60. [Coupled-cluster molecular properties across the main group that extrapolate beyond training size](https://arxiv.org/abs/2608.18346)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18346v1 Announce Type: cross Abstract: Coupled-cluster theory defines the accuracy standard for molecular electronic-structure properties but scales too steeply for routine application, whereas density-functional theory is affordable yet systematically biased. We resolve this trade-off with a single equivariant network, MEHnet-MG, that predicts an effective one-electron Hamiltonian from one inexpensive B3LYP/def2-SVP calculation and derives a broad suite of properties from it (energy, optical gap, dipole, quadrupole, polarizability, Mulliken atomic charges, and Mayer bond orders) at coupled-cluster accuracy across nine main-group elements, including the under-served phosphorus, sulfur, and chlorine chemistries. The model is trained on a new in-house dataset of multi-property labels computed at the CCSD(T) level for all nine elements. On a held-out test set, it reduces the error of every property by a factor of 3.8 to 230 relative to semi-local, hybrid, and double-hybrid DFT (referenced to composite CCSD(T)/cc-pVTZ; Methods), while adding only ~25 ms wall time per molecule, delivering coupled-cluster-quality predictions at the cost of a single DFT calculation. Critically, deriving every property from a predicted Hamiltonian rather than pooling per-atom features builds the correct size-scaling into the model architecture: on pi-conjugated oligothiophenes it matches finite-field CCSD polarizability and the EOM-CCSD optical gap to ~2% at the largest sizes where those references remain affordable (44 and 37 atoms, where a single CCSD field point already costs ~500x the model's entire inference) and extrapolates the corrected trends to 58-atom chains, a regime where pooling-based architectures fail by construction. Accurate extrapolation is therefore set by the model's inductive bias rather than by the training data.

61. [Unified Strong-Field Dynamics Simulations from Atoms to Heterostructures](https://arxiv.org/abs/2608.18472)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.18472v1 Announce Type: cross Abstract: We present \textsc{TDSE-Z}, a high-performance open-source framework for strong-field quantum dynamics in atomic, molecular, and semiconductor effective-mass systems. The core engine implements a weak-form Galerkin discretisation of the Hermitian BenDaniel-Duke operator, $\hat{T}_{\mathrm{BDD}} = -\frac{1}{2}\nabla\cdot(m^{-1}(\mathbf{r})\nabla)$, on geometry-adapted B-spline meshes, supporting arbitrary potentials and customisable laser configurations in one to three dimensions. We validate the static position-dependent-mass (PDM) eigensolver through two stringent benchmarks: a comparison to the analytical Quesne PDM model and a $\text{GaAs/Al}_{0.3}\text{Ga}_{0.7}\text{As}$ double quantum well, where the exponential decay of computed tunnel splittings follows Wentzel-Kramers-Brillouin (WKB) theory at the sub-percent level. We further demonstrate the time-propagation engine on constant-mass systems, accurately reproducing high-harmonic generation (HHG) spectra in atomic benchmarks and confirming the importance of dimensionality in fully capturing the strong light-matter interaction. Our implementation demonstrates robust strong-scaling efficiency, maintaining performance across hundreds of CPU cores. While the static eigensolver currently supports optional GPU offloading, the time-propagation engine is CPU-optimised, providing a modular architecture for future expansion toward exascale quantum dynamics.

62. [The role of weak interfaces in the tensile deformation and fracture of particle-filled polymers studied by phase-field model](https://arxiv.org/abs/2608.19031)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 20 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19031v1 Announce Type: cross Abstract: Weak particle-matrix interfaces play a critical role in the tensile fracture of particle-filled polymer composites, but how they govern progressive debonding, fracture localization, and the resulting changes in macroscopic mechanical properties remains insufficiently understood. In this study, a cohesive-zone phase-field model incorporating a hyperelastic polymer matrix and a smeared interface is employed to investigate the coupled evolution of interfacial debonding and matrix fracture in particle-filled polymer composites. The model is calibrated against and compared with uniaxial tensile responses of particle-filled polyurethane composites and then used to study how interfacial strength, interfacial fracture energy, and matrix fracture properties affect the macroscopic stress-strain response and damage evolution. The results show that weak interfaces can induce an intermediate softening regime in the stress-strain response, characterized by a reduced effective tangent stiffness and associated with distributed interfacial damage. Interfacial strength mainly controls the initiation of debonding, whereas interfacial fracture energy affects whether debonding can develop progressively in a distributed manner or rapidly localizes into a dominant crack band. Comparisons with well-bonded reference systems further demonstrate that weak interfaces may reduce the maximum stress but increase the strain at break by promoting distributed debonding around particles and delaying the formation of a dominant crack band. These findings clarify the dual role of weak interfaces and provide a mechanistic understanding of interface-controlled tensile failure in particle-filled polymer composites.

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-19T09:13:51Z; Popularity: 753 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-20T09:08:50Z; Popularity: 724 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.67; Date: 2026-08-20T05:02:21Z; Popularity: 672 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

66. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.18; Date: 2026-08-20T02:19:43Z; Popularity: 177 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

67. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-17T22:47:58Z; Popularity: 111 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

68. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Science Done on a Machine by a Machine: AI Agents in Computational Chemistry

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.18508

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
