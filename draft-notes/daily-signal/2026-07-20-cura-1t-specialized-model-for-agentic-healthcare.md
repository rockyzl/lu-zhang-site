# Daily signal sidecar - 2026-07-20

## Selected Signal

- Title: Cura 1T: Specialized Model for Agentic Healthcare
- URL: https://arxiv.org/abs/2607.15314
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Cura 1T: Specialized Model for Agentic Healthcare
- Primary source: https://arxiv.org/abs/2607.15314
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

Total candidates reviewed after duplicate-source filtering: 67

1. [Cura 1T: Specialized Model for Agentic Healthcare](https://arxiv.org/abs/2607.15314)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15314v1 Announce Type: new Abstract: Healthcare spans high-stakes communication, expert reasoning, and workflow execution, yet specialized LLMs that cover these use cases together remain limited. A healthcare model must handle patient consultation, clinical reasoning over text and images, interactive diagnosis, and electronic health record (EHR) tool use. These capabilities fail in different ways, and a narrow update for one task can degrade another. We present Cura 1T, a healthcare-specialized LLM trained through a human-gated self-evolution loop. In each evolution round, a training agent plans a target capability, trains the model, evaluates benchmark trajectories, and refines the data mixture from observed failures. This data-centered loop improves the model through targeted synthetic and curated examples rather than a single generic medical-data update. Across the healthcare evaluation suite, Cura 1T ranks at or near the top among frontier baselines, while remaining competitive on out-of-domain reasoning and agentic benchmarks.

2. [DrawingVQA: A Real-World Benchmark for Multi-Depth Visual-Textual Reasoning on Construction Drawings](https://arxiv.org/abs/2607.15418)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15418v1 Announce Type: new Abstract: We introduce DrawingVQA, the first benchmark designed to evaluate multimodal large language models (MLLMs) on real-world construction drawings -- a core media in architecture, civil, and many other engineering practices. Unlike natural images or schematic floor plans, construction drawings fuse abstract geometry, symbolic notation, tabular data, annotations, and domain-specific text, forming a uniquely complex visual-textual domain core to engineering workflows. DrawingVQA bridges this gap with 33 "Issued for Construction" drawings and 92 expertly curated question-answer pairs, spanning three reasoning depths: perceptual understanding, contextual interpretation, and domain-expert reasoning. To evaluate model capabilities, we present a dual categorization framework to jointly analyze performance across seven construction-engineering and four MLLM capability dimensions -- the first to explicitly map engineering workflows to AI reasoning competencies. Evaluations of state-of-the-art MLLMs reveal a substantial gap between model and expert performance, particularly at higher reasoning depths. This benchmark lays a foundation for domain-specialized multimodal reasoning to allow for advancement on integration of AI-driven understanding and real-world engineering workflows.

3. [Beyond a Joke: Multi-Angle Reasoning for Detecting and Explaining Harmful Humor in Memes](https://arxiv.org/abs/2607.15442)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15442v1 Announce Type: new Abstract: Internet memes intertwine visual cues, textual content, and cultural context, making them particularly challenging to interpret in scenarios where humor, sarcasm, and harmful intent coexist. These complexities highlight the need for explainable meme understanding systems that can provide reliable and structured reasoning to support both accurate classification and human interpretability. However, existing multimodal classifiers either overlook these interdependencies or provide only limited interpretability. In this paper, we introduce MAR-12, a novel framework that leverages Vision Language Models (VLMs) for meme detection and understanding in settings where humorous and hateful elements may coexist. The framework first interprets each meme through twelve structured perspectives derived from humor and hate theories. It then applies a role-aware soft-gated attention mechanism to learn how much each perspective should contribute, followed by a prototype-based classifier for the final prediction. Finally, explanations are synthesized using both perspective-specific reasoning and learned attention weights, ensuring transparent and context-grounded justifications. We evaluate MAR-12 on the PrideMM and Memotion datasets, where it achieves up to 80.3% accuracy for humor detection and 75.9% accuracy for hate detection, outperforming state-of-the-art approaches. Furthermore, both human and GPT-4-based evaluations confirm that MAR-12 produces coherent and persuasive explanations, particularly for memes in which humorous and harmful cues co-occur.

4. [GraphDx: A Cost-Aware Knowledge-Enhanced Multi-Agent Framework for Sequential Diagnosis](https://arxiv.org/abs/2607.15280)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15280v1 Announce Type: new Abstract: Sequential diagnosis requires balancing diagnostic accuracy against resource costs through iterative information gathering. Existing Large Language Model (LLM) approaches exhibit a critical knowledge-reasoning gap: despite encoding extensive medical knowledge, they struggle to reason systematically under cost constraints, often resorting to excessive testing. We propose GraphDx, a knowledge-enhanced framework with two core innovations. First, we design an automated pipeline that leverages LLMs to construct Medical Diagnosis Knowledge Graphs (MDKGs) with quantized typicality, action-centric topology, and dual-objective attributes for both diagnostic relevance and cost-sensitivity. Second, we introduce three collaborative agents (Perception, Reasoning, and Decision) where the Perception and Decision Agents handle language understanding and generation, while the Reasoning Agent performs deterministic evidence scoring and cost-aware planning on the MDKG. Experiments on MedQA and MIMIC-IV across three LLM backbones (DeepSeek-V3, Kimi-k2, Llama-3.3) show that GraphDx improves diagnostic success rates from 50--68% to 79--93% while reducing test costs by 20--54%, providing a robust, economical, and interpretable solution for automated clinical diagnosis.

5. [Causal-Audit: Explicit and Auditable Graph-based Reasoning via Target-Aware Causal Chain Construction](https://arxiv.org/abs/2607.15281)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15281v1 Announce Type: new Abstract: Causal and intervention-based question answering is fundamental to advancing large language models (LLMs) toward reasoning beyond surface-level correlations and understanding underlying causal mechanisms. However, existing LLM-based methods often rely on implicit language-level reasoning, resulting in opaque causal assumptions, unverifiable reasoning paths, and fragile predictions under complex interventions, particularly in context-free settings. In this paper, we propose an explicit and auditable causal reasoning framework for context-free intervention-based question answering. Our method formulates causal inference as structured reasoning over an explicit causal graph through four modular stages, rather than implicit end-to-end prediction. A key innovation is a target-aware causal graph construction strategy that treats the target variable as a core constraint during graph expansion, effectively suppressing irrelevant variables, spurious causal relations, and reasoning noise. We further introduce a path-level causal evidence aggregation mechanism that combines multiple causal paths while modeling both reinforcing and counteracting effects, enabling robust decision-making beyond single-chain reasoning. Extensive experiments on three benchmarks demonstrate that our framework consistently outperforms existing LLM-based methods while providing interpretable and auditable causal reasoning traces.

6. [Precise but Uncoupled: Reviewer Precision Does Not Guarantee Critique Uptake in Multi-Agent Math Reasoning](https://arxiv.org/abs/2607.15388)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15388v1 Announce Type: new Abstract: Many math- and science-oriented agent systems use hierarchical designs with specialized reviewer roles, assuming that a dedicated review stage should help turn wrong candidates into correct ones. We test this assumption on 4,181 verifier-grounded Omni-MATH problems using matched gpt-oss-120b actors. Collaboration adds little on the easiest tiers, but from tier 4 onward the gains open sharply; in this harder regime, broadcast-style peer discussion reaches higher final accuracy than a planner-executor-reviewer pipeline (PER). We ask whether this gap is explained by reviewer quality or by whether critique changes the next answer the protocol carries forward. It is not explained by reviewer precision alone: PER's reviewer is more precise than broadcast's (0.861 vs. 0.644), yet evaluator-verified useful critique is much less likely to change the next candidate and produces lower reviewer-guided repair. These results show that reviewer detection quality and critique uptake are empirically separable. Within matched PER interventions, forcing explicit acknowledgment lowers final accuracy, while embedding reviewer guidance directly in the solver's working context partially improves follow-through without closing the gap. Overall, reviewer-centric evaluation can overstate system quality: a protocol may spot errors well yet still fail to solve more problems if it does not act on those critiques.

7. [Position: Quantum Program Generation Must Prioritize Validity Over Probabilistic Scaling](https://arxiv.org/abs/2607.15313)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15313v1 Announce Type: new Abstract: The scaling hypothesis assumes that increasing model parameters yields emergent reasoning capabilities. This position paper argues that applying this probabilistic paradigm to generic quantum circuit synthesis is a directional error. Unlike natural languages, quantum circuits require strict adherence to mathematical constraints that manifest a significant syntax-semantics gap. Training on unverified quantum programs means that models learn syntax but fail to capture the physical semantics of the Hilbert space. Since the valid subset of circuit designs decays exponentially with the number of qubits, post-hoc filtering is mathematically intractable. We propose a pivot from human-centric copilots to verifier-centric agents. We integrate hierarchical constraints, topological masks, and symbolic proxies directly into generation. Our analysis suggests that scale alone cannot bridge the validity gap. Verification-aware architectures offer a viable path for modular quantum program generation. These considerations point toward generation methods that encode task-specific rules of quantum information, rather than relying on imitation alone.

8. [How to manage AI investments in the agentic era](https://openai.com/index/managing-ai-investments-in-agentic-era)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 14 Jul 2026 10:00:00 GMT
   - Summary: Learn how enterprises can manage AI investments in the agentic era by measuring useful work per dollar, improving efficiency, and scaling high-value workflows.

9. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

10. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

11. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

12. [AnovaX: A Local, Multi-Agent Voice Assistant with LLM Planning, Typed Executors, and Adaptive Recovery](https://arxiv.org/abs/2607.15367)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15367v1 Announce Type: new Abstract: Desktop voice assistants are still dominated by cloud pipelines that ship raw audio off the machine and expose a fixed set of skills. We describe AnovaX, a small local-first assistant that runs entirely on the user's computer and treats the desktop itself as its action surface. A single Python process wires together a wake-word gate, a speech pipeline, an LLM planner (Gemini) that emits a JSON plan of tool calls, a whitelist-and-denylist safety layer, a multi-agent orchestrator that translates each plan into typed child agents on a bounded thread pool, and an adaptive recovery loop that takes over whenever a core step fails. Every tool corresponds to a specialized agent class (AppAgent, TypingAgent, BrowserAgent and six others) with its own timeout, retry policy, and shared-resource locks. A recursive MetaAgent lets the planner delegate a sub-goal back to itself, capped at two levels of nesting. The recovery loop uses a compact ReAct-style prompt and hides Gemini's latency behind speculative execution of read-only tools. A companion Flask server exposes a phone-friendly remote over the local WiFi, mirrors every agent lifecycle event to the phone in real time, and streams the laptop's screen back over MJPEG so the user can watch remote commands land as they run. The point of the project is less to compete with Siri or Alexa than to show that a legible, few-thousand-line assistant is enough to open apps, type into them, run searches, coordinate concurrent actions, recover from single-step failures, and be driven entirely from a phone in another room -- without the LLM ever touching the keyboard.

13. [Do Coding Agents Need Executable World Models, Simplification, and Verification to Solve ARC-AGI-3?](https://arxiv.org/abs/2607.15439)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15439v1 Announce Type: new Abstract: Our previous ARC-AGI-3 agent bundled executable world modeling, scheduled simplification, and exact replay verification, leaving unclear which idea accounted for its performance. We address this attribution question with four nested Codex-based agents: a textual baseline; a flexible-interface executable world model without replay verification; the same executable model with scheduled simplification; and a fixed-interface verification treatment that retains simplification and requires exact reproduction of recorded observations. The main study evaluates all four agents with gpt-5.4 and gpt-5.5 at high and xhigh reasoning effort on the public ARC-AGI-3 games. Exploratory follow-ups evaluate the textual and verification variants with gpt-5.6-sol at xhigh and max. The most robust result is that every agent variant improves with a stronger model and with greater reasoning effort. Within each model-effort setting, differences among variants are smaller than anticipated, while the effects of individual components vary across settings. Requiring a persistent executable deliverable is not universally beneficial: the textual variant outperforms the flexible-interface executable variant in both gpt-5.5 settings. Simplification improves performance in three of the four model-effort settings, with the weakest setting as the only exception. The complete verification treatment ranks first in all four settings, although it uses substantially more resources. In the gpt-5.6-sol follow-up, the verification variant fully solves every public game at both reasoning efforts, achieves about 99% RHAE, and uses fewer than half the total actions of the human baseline. Because the model postdates these games and held-out performance remains untested, this result should be interpreted as saturation of the public set only.

14. [From Black Box to Executable Logic: Explainable Reinforcement Learning through Prolog Expert Systems](https://arxiv.org/abs/2607.15459)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15459v1 Announce Type: new Abstract: A trained deep reinforcement learning policy is a black box, and we ask whether it can be made explainable by rewriting it as an executable logic program that reproduces its behaviour and that a person can read, a logic engine can run, and an optimizer can edit. We present a three-stage post-hoc transformation that extracts a frozen proximal policy optimization teacher, induces an ordered rule list from its decisions in the manner of classical relational learning, and emits the result as a Prolog program whose every decision is executed by an off-the-shelf logic engine; a subsequent expansion stage edits the rule base and accepts an edit only when policy evaluation certifies a return increase. We prove four guarantees. A return-loss bound makes the distilled program a machine-checkable certificate in a finite Markov decision process, and the expansion loop improves monotonically and terminates. For the continuous-observation setting we answer whether the conversion is possible at all: the propositional threshold instantiation converts the network to arbitrary fidelity as the resolution B grows, with disagreement O(1/B) and a return gap that closes at the same rate, and a matching lower bound shows the cost is exponential in the observation dimension for an oblique decision boundary. Empirically, on a two-room key-and-door task with 16,944 reachable states the expanded Prolog program attains exact optimal return in every seed and, in a budget-capped regime, exceeds the stochastic teacher on exact return in ten of ten seeds. On three continuous-control tasks the emitted program substitutes the network, matching the neural teacher within noise on Acrobot with eleven clauses and recovering about 97% of its return on CartPole, while on the finer-control LunarLander it recovers only partially, exactly the ceiling the exponential lower bound predicts.

15. [A Critical Analysis of Trustworthy AI Tools, Mark Frameworks, and the Implementation Chasms](https://arxiv.org/abs/2607.15480)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15480v1 Announce Type: new Abstract: As artificial intelligence (AI) systems increasingly impact society, ensuring their ethical and trustworthy deployment has become a global priority. While a myriad of high-level ethical guidelines have emerged, criticism persists that these frameworks remain abstract and lack concrete mechanisms for implementation. This paper conducts a critical analysis of tools and trust mark frameworks intended to operationalize trustworthy AI (TAI), drawing on a comprehensive dataset from the OECD. Through empirical mapping and descriptive comparative analysis, we identify significant asymmetries in ethical focus, lifecycle coverage, stakeholder targeting, and tool typology. Our findings show a strong emphasis on fairness, transparency, and robustness, with comparatively little attention paid to explainability, digital security, and environmental sustainability. Moreover, most tools and certifications concentrate on post-development stages, with limited guidance for early design or data collection phases. Educational initiatives and policy engagement are notably underdeveloped, suggesting that current TAI efforts are dominated by technical and procedural measures within industry contexts. We argue that bridging the persistent chasm between AI principles and practice requires expanding ethical objectives, embedding ethics across the AI lifecycle, and fostering broader multi-stakeholder participation. This study provides both a diagnosis of existing implementation gaps and actionable recommendations for advancing more holistic, inclusive, and enforceable AI governance

16. [A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI](https://arxiv.org/abs/2607.15518)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15518v1 Announce Type: cross Abstract: Learning a computational method has always meant learning to operate a tool -- pencil, slide rule, calculator, or programming language. Agentic artificial intelligence, which writes, executes, and revises simulation code from natural-language specifications, is the latest and largest step in a centuries-long migration of mechanical work from human to tool. I argue that what a learner must know has remained remarkably stable: the inputs and outputs of a method, the concept of what it does, the terminology to communicate about it, the judgment to evaluate its results, and the skill of operating the current tool. This paper organizes these requirements into a tool-invariant framework spanning single-digit addition to agent-orchestrated molecular dynamics, argues that verification -- not code authorship -- is now the load-bearing skill, and draws the consequence for assessment: when artifacts can be generated on demand, the artifact no longer certifies the student. I describe a practical response, designed for the small classes where the subject lives -- AI-free in-class coding quizzes paired with oral defenses of comment-stripped, AI-assisted work -- and argue that the real product of a computational physics course is the student's ability to explain and defend computational artifacts in the language of the discipline.

17. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.47; Date: 2026-07-20T14:51:55Z; Popularity: 2,466 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

18. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

19. [A scorecard for the AI age](https://openai.com/index/a-scorecard-for-the-ai-age)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 17 Jul 2026 10:00:00 GMT
   - Summary: Sarah Friar, CFO of OpenAI, introduces a practical AI scorecard to measure ROI through useful work, cost per successful task, dependability, and return on compute.

20. [Why teens deserve access to safe AI](https://openai.com/index/why-teens-deserve-access-safe-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 16 Jul 2026 16:00:00 GMT
   - Summary: Learn how OpenAI is making ChatGPT safer for teens with age-appropriate protections, learning tools, parental controls, and expert partnerships.

21. [The US is advancing AI safety through state and federal action](https://openai.com/index/advancing-ai-safety-through-state-and-federal-action)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 15 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines a “reverse federalism” approach to AI governance, where state laws help build a national framework for safe, democratic AI.

22. [GPT-Red: Unlocking Self-Improvement for Robustness](https://openai.com/index/unlocking-self-improvement-gpt-red)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 15 Jul 2026 10:00:00 GMT
   - Summary: Explore GPT-Red, OpenAI’s automated red teaming system that uses self-play to improve AI safety, alignment, and prompt injection robustness.

23. [How sales teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-sales-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how sales teams can use ChatGPT Work to create pipeline briefs, meeting prep packets, forecast reviews, account plans, and stalled-deal diagnoses from real work inputs.

24. [How data science teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-data-science-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how data science teams can use ChatGPT Work to build root-cause briefs, impact readouts, KPI memos, scoped analyses, and dashboard specs from real work inputs.

25. [Getting started with ChatGPT](https://openai.com/academy/getting-started)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT
   - Summary: Learn how to use ChatGPT, start your first conversation, and discover simple ways to write, brainstorm, and solve problems with AI.

26. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

27. [Fine-tune video and image models at scale with NVIDIA NeMo Automodel and 🤗 Diffusers](https://huggingface.co/blog/nvidia/scale-diffusers-finetuning-nemo-automodel)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 17 Jul 2026 15:57:54 GMT

28. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

29. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

30. [What building Shippy taught us about building agents](https://huggingface.co/blog/allenai/shippy-tech-blog)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:29:41 GMT

31. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

32. [Welcome Inkling by Thinking Machines](https://huggingface.co/blog/thinkingmachines-inkling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

33. [Introducing Real World VoiceEQ: Measuring the human quality of voice AI](https://huggingface.co/blog/real-world-voiceeq)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

34. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

35. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

36. [From Hugging Face to Amazon SageMaker Studio in one click](https://huggingface.co/blog/amazon/one-click-to-sagemaker-studio)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 21:15:33 GMT

37. [CADAQUES: A Cost-Aware Dual Architecture for Query-Efficient Autonomous Discovery](https://arxiv.org/abs/2607.16127)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16127v1 Announce Type: new Abstract: Autonomous discovery systems couple a resource that answers queries (a simulator, instrument, or analytic model) to an algorithm that selects what to query next. Most software frameworks for this loop inherit the control structure of numerical optimization: campaigns run for a fixed number of iterations, query costs are absent from the programming interface, and decision-making is treated as free. In practice, queries may differ in cost by orders of magnitude, and planners built on large language models or expensive surrogates consume resources of their own. Here we present CADAQUES, an open-source Python framework built on one architectural principle: cost is a first-class primitive of the discovery loop. CADAQUES separates the loop into two structural protocols, an Oracle that answers queries and a Driver that proposes them, and charges both evaluations and decisions against a common vector-valued budget spanning wall time, CPU hours, monetary cost, and language model tokens. An append-only ledger records, for each transaction, the cost declared before execution and the cost settled afterwards, making their discrepancy an observable property of the campaign. We evaluate the architecture by locating the critical temperature of the two-dimensional Ising model from noisy finite-size estimates against the exact thermodynamic-limit reference. In this noisy setting, strategies that concentrate around the best observed result can be misled by noise-induced peaks, whereas a schedule that explores with cheap low-fidelity queries and refines with higher-fidelity ones yields lower and less variable errors than high fidelity throughout, at the studied budget scale. Metering adds tens of microseconds per iteration, three orders of magnitude below the cheapest oracle query. The framework is MIT-licensed and archived at Zenodo (doi:10.5281/zenodo.21293589).

38. [Lattice Boltzmann Methods for Navier-Stokes Equations in General Orthogonal Coordinates for Efficient Flow Simulations using Nonuniform Clustered Grids](https://arxiv.org/abs/2607.15362)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15362v1 Announce Type: cross Abstract: Resolving multiscale fluid flows or boundary layers effectively requires the use of nonuniform meshes with local grid clustering. The standard lattice Boltzmann method (LBM), a kinetic theory-based approach for computational fluid dynamics, however, is restricted to the use of uniform Cartesian grids. We present new and improved formulations of the LBM that accommodate continuously varying spatial grids via coordinate transformations to simulate the Navier-Stokes equations (NSE) in the general orthogonal coordinates (GOC). They are constructed using a Chapman-Enskog analysis to specify the equilibrium moments of the distribution functions and the geometric force terms used in the collision step to be dependent on the local metric factors and their spatial derivatives, along with the density, momentum and their fluxes, and some correction terms related to the normal velocity gradients so as to accurately represent the NSE in the GOC. The resulting GOC-LBM importantly maintains the simplicity of the collide-and-stream approach and is Galilean invariant that is free of the cubic velocity artifacts. Our GOC-LBM is general and modular in that it can be used with any collision model with appropriate modifications to the equilibria and forcing terms. We present its implementation details for a variety of collision models while the central moments-based model using multiple relaxation times was found to be the most robust in practical implementations. We validate the GOC-LBM through numerical simulations for various benchmark flow problems. Moreover, we demonstrate significant computational advantages of our approach for a case study on simulating boundary layer flows efficiently that involves coupling the GOC-LBM for the NSE with a new GOC-LB scheme for solving the magnetic induction equation for magnetohydrodynamics (MHD), and for another case study involving orthogonal curvilinear grids.

39. [exa-PD: A scalable high-performance workflow for multi-element phase diagram construction](https://arxiv.org/abs/2607.15476)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15476v1 Announce Type: cross Abstract: Exa-PD is a highly parallelizable workflow designed for the construction of multi-element phase diagrams (PDs). It uses standard sampling techniques, molecular dynamics (MD) and Monte Carlo (MC) as implemented in the LAMMPS package, to simultaneously sample multiple phases over a fine temperature-composition mesh for free-energy calculations. Parsl serves as the global workflow engine, coordinating large ensembles of MD and MC tasks to achieve massive parallelization with strong scalability. The resulting free energies of liquid and solid phases are then fed to CALPHAD modeling via the PyCalphad package to construct multi-element PDs.

40. [Transformation front kinetics in deformable ferromagnets](https://arxiv.org/abs/2602.03745)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2602.03745v2 Announce Type: replace Abstract: Materials such as magnetic shape-memory alloys possess an intrinsic coupling between material's magnetisation and mechanical deformation. These materials also undergo structural phase transitions, with phase boundaries separating different phases. The kinetics of the phase boundaries is governed by the magnetic field and the mechanical stresses. There is a multiplicity of other materials revealing similar phenomena, e.g.\ magnetic perovskites. To model the propagation of the phase boundaries in deformable magnetic materials at the continuum scale, three ingredients are required: a set of governing equations for the bulk behaviour with coupled magnetic and mechanical degrees of freedom, a dependency of the phase boundary velocity on the governing factors, and a reliable computational method. The expression for the phase boundary velocity is usually obtained within the continuum thermodynamics setting, where the entropy production due to phase boundary propagation is derived, which gives a thermodynamic driving force for the phase boundary kinetics. For deformable ferromagnets, all three elements (bulk behaviour, interface kinetics, and computational approaches) have been explored, but under a number of limitations. The present paper focuses on the derivation of the thermodynamic driving force for transformation fronts in a general magneto-mechanical setting, adapts the cut-finite-element method for transformation fronts in magneto-mechanics, which allows for an exceptionally efficient handling of the propagating interfaces, without modifying the finite-element mesh, and applies the developments to qualitative modelling of magneto-mechanics of magnetic shape-memory alloys.

41. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-07-20T13:11:19Z; Popularity: 1,487 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-19T16:23:38Z; Popularity: 473 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-20T12:04:24Z; Popularity: 277 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-19T17:22:33Z; Popularity: 212 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

45. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

46. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

47. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

48. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

49. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

50. [Structure of the Circular-Dyadic Convolution Error](https://arxiv.org/abs/2607.15293)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15293v1 Announce Type: new Abstract: Dyadic and circular convolution can both be computed in $O(N\log N)$ time using the Hadamard transform and the FFT-computed discrete Fourier transform (DFT), respectively. The Hadamard transform is preferable for its real-valued sign flips, yet its substitution for the DFT introduces algebraic error. We present three complementary results that characterize this error. First, we identify exact error cancellation: two input and two output positions are universally error-free, and no reordering of the output can eliminate this error. Second, the error operator is nearly full rank, while its null space has only logarithmic dimension. Third, the expected error is governed by a single alignment scalar, with a closed-form expression obtained by averaging over random filters. In general, the substitution error asymptotically doubles the output energy, except for filters in the universal zero-error subspace, which incur no error. Collectively, these results show that the substitution error is structured, predictable, and governed by alignment.

51. [AI Trading: Evaluating Large Language Models for Technical Market Analysis](https://arxiv.org/abs/2607.15414)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15414v1 Announce Type: new Abstract: Large Language Models (LLMs) have emerged as powerful tools for processing the heterogeneous information environments of modern financial markets. This paper presents a systematic, comparative evaluation of five prominent LLMs: GPT-4 Turbo, Claude 3 Opus, Gemini 1.5 Pro, Llama 3 70B, and the domain-specialized FinGPT, with respect to their capacity for technical market analysis. The evaluation spans four structured tasks: candlestick pattern recognition from OHLCV data, directional signal generation (BUY/SELL/HOLD), backtesting of signal quality through a simulated execution pipeline, and financial report comprehension. Our experimental framework employs rigorous quantitative metrics, including Sharpe ratio, maximum drawdown, Sortino ratio, information coefficient, F1-score, and BLEU score. Findings from simulated backtesting indicate that GPT-4 Turbo achieves the highest annualized return and Sharpe ratio among general-purpose models, while FinGPT demonstrates competitive risk-adjusted performance due to domain-specific fine-tuning. Both models outperform a passive S&P 500 benchmark under the tested conditions. The study identifies persistent failure modes across all evaluated models, including numerical hallucination, context-window limitations, and inconsistent performance in sideways market regimes. We conclude that while LLMs hold genuine promise within AI trading systems, robust deployment requires careful task decomposition, rigorous backtesting protocols, and domain-aware fine-tuning strategies.

52. [qZACH-ViT: Quantization-Aware Intrinsic Explanations with Recursive Attribution-Stabilized Optimization](https://arxiv.org/abs/2607.15421)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15421v1 Announce Type: new Abstract: Compact medical-image classifiers need efficiency and interpretable evidence, yet these goals are often addressed separately. We introduce qZACH-ViT, a quantization-aware extension of the zero-token (CLS-token-free), position-free ZACH-ViT backbone with recursive intrinsic patch-level class evidence. We also introduce Recursive Attribution-Stabilized Optimization (RASO), which norm-matches classification and attribution gradients and removes attribution components that conflict with classification. We evaluate four controlled conditions on seven MedMNIST datasets using 50 training images per class and ten fixed seeds, completing 280 runs. All 210 qZACH-ViT checkpoints are converted to executable mixed-precision ONNX INT8 graphs containing 16 signed INT8 MatMulInteger projections with INT32 accumulation. Deployed mixed-precision INT8 qZACH-ViT with Adam improves the FP32 ZACH-ViT baseline mean on all seven datasets, with a mean paired gain of 0.0313 in the dataset-specific primary metric; qZACH-ViT with RASO yields a mean gain of 0.0368. Across 964,920 source-to-INT8 test comparisons, prediction agreement is 99.9751\%, with a mean absolute primary-metric change of 0.000133 and a maximum of 0.004386. Across 3,600 matched intrinsic maps, mean cosine similarity is 0.999955, mean rank correlation is 0.9944, and mean top-10\% overlap is 0.9692. ONNX artifacts are 70.0\% smaller than source checkpoints and provide $1.41\times$ and $2.39\times$ end-to-end CPU speedups with one and four threads. RASO significantly reduces sufficiency error and improves input-noise stability over Adam with the same attribution loss, but does not dominate every predictive or explainable artificial intelligence (XAI) metric. These results establish qZACH-ViT as a deployable compact intrinsically explainable model and RASO as a targeted stability-oriented optimization procedure.

53. [From hyperplanes to hyperellipsoids: characterizing the inherent interpretability of linear and single-qubit mixed-state binary classification models](https://arxiv.org/abs/2607.15433)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15433v1 Announce Type: new Abstract: We characterize and compare the inherent interpretability offerings of a standard linear model with a single qubit mixed state model for the task of supervised binary classification. A side by side comparison reveals that a single qubit mixed state model for binary classification is just the ``ellipsoid version" of standard linear model classification. More precisely, rather than learning a hyperplane to classify data, we learn a hyperellipsoid. We discuss the consequences of the geometric inductive biases of both models, as well as how each model contains a different feature importance inductive bias. This short characterization offers an accessible route to quantum machine learning (ML) ideas for readers who have zero background in quantum and are only familiar with linear classification in ML. In support of ML pedagogy, we encourage instructors to utilize this piece to smoothly introduce quantum ML ideas into the undergraduate ML classroom.

54. [Stochastic Reset Pathfinding: Path-Level Regret for Cascading Bandits over Graph Paths](https://arxiv.org/abs/2607.15440)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15440v1 Announce Type: new Abstract: We introduce Stochastic Reset Pathfinding (SRP), an episodic learning problem on a known directed graph with unknown stationary edge success probabilities. In each episode, the agent commits to a source-to-goal path, and any edge failure during execution resets it to the source. SRP captures settings such as entanglement distribution in quantum repeater networks, payment routing on the Lightning Network, and delivery in unreliable mesh networks. We show that the global-reset structure makes the optimal policy open-loop, placing SRP within the combinatorial cascading bandit (CCB) framework. We propose a Log-Dijkstra meta-algorithm with UCB (PathUCB) and Thompson Sampling (PathTS) instantiations. Our main technical result is a path-level regret bound for PathUCB that decomposes regret over suboptimal paths via a per-path complexity C(pi) combining each edge's prefix and suffix reliability. The bound is complementary to the edge-level CCB bound and more informative on structured graphs with polynomially many source-to-goal paths. Experiments on quantum-network, layered-DAG, grid-world, and Erdos-Renyi domains support the theory and show that PathTS typically achieves the best empirical performance among the algorithms tested. We then exhibit an adversarial instance on which PathTS fails to converge, consistent with a known exponential obstruction for combinatorial Thompson Sampling on multiplicative-reward problems. We recommend PathTS as the practical default while cautioning that adversarial instances exist.

55. [Who Became Financially Vulnerable After COVID-19? A Population-Level Machine Learning Analysis Using MEPS Data](https://arxiv.org/abs/2607.15446)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15446v1 Announce Type: new Abstract: The cost of healthcare remains a concern in the United States and may have been influenced by disruptions associated with the COVID-19 pandemic. This study examines healthcare financial vulnerability before and after the pandemic using Medical Expenditure Panel Survey (MEPS) data from 2019 and 2021. High financial burden was defined as out-of-pocket healthcare expenditures exceeding 10% of family income. Survey-weighted subgroup analyses were performed to obtain nationally representative estimates across demographic and socioeconomic groups. Descriptive analyses were complemented by interpretable logistic regression and machine learning models. Logistic regression was used to estimate adjusted odds ratios, while random forest and gradient boosting models were used to evaluate predictive performance. Temporal generalization assessed whether models trained on pre-pandemic data remained predictive when applied to post-pandemic observations. Financial vulnerability was strongly associated with poverty status, insurance coverage, and prescription drug spending. Subgroup analyses indicated persistent disparities across population groups, with some evidence of increased burden among vulnerable populations in 2021. Despite these differences, models trained on pre-pandemic data exhibited only modest reductions in predictive performance when evaluated on post-pandemic data, suggesting that the principal predictors of healthcare financial vulnerability remained relatively stable over time. These findings provide a population-level assessment of healthcare financial vulnerability during the COVID-19 period and demonstrate the value of combining interpretable statistical modeling with machine learning for population health research. The results may support future population health surveillance, risk stratification, and healthcare policy research aimed at reducing financial barriers to care.

56. [Loss of positive definiteness is a symptom, not the cause, of high-Weissenberg-number breakdown](https://arxiv.org/abs/2607.15334)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15334v1 Announce Type: new Abstract: Numerical breakdown at high Weissenberg number is often attributed to loss of symmetric positive definiteness (SPD) of the conformation tensor. That conclusion follows from Maxwell-type models without solvent viscosity. With solvent fraction $\beta>0$, the initial-value problem is locally well posed for arbitrary symmetric stress. We derive the missing quantitative theory for indefinite states and test its computational consequences. Frozen-coefficient analysis gives a growth rate uniformly bounded in wavenumber and the direction-resolved instability threshold $\lambda_{\min}(A)<-\beta/(1-\beta)$; stress diffusion supplies a closed-form cutoff, while the classical $\sigma\propto k$ catastrophe is recovered as solvent viscosity vanishes. A determinant identity shows that violations self-heal on the timescale $\lambda/2$, so persistent violations measure the truncation error that recreates them. Spectral and lattice Boltzmann tests reproduce the threshold, solvent-fraction reversal, and resolution independence. In four-roll-mill interventions, enforcing SPD delays blow-up by 15 convective times but reduces the stagnation-point Weissenberg number by 30%. Across five coupling schemes, a local second-moment stress source remains stable through the full budget at $\mathrm{Wi}=50$ while carrying $\det A\approx-8.5\times10^5$; the divergence-coupled variant fails at $t^*=47$. The surviving scheme matches published benchmarks within 0.05% and 0.18% at $\mathrm{Wi}=10$ and 20. Thus loss of positive definiteness is neither necessary nor sufficient for breakdown: the discrete coupling route decides, and the violation is a resolution gauge for which we provide run-time monitors.

57. [Atomic Design Transformer: Scaffold-Conditioned 3D Molecule Generation via xTB-Reward Reinforcement Learning](https://arxiv.org/abs/2607.15918)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15918v1 Announce Type: new Abstract: We present an SE(3)-invariant transformer for 3D-molecule generation, the Atomic Design Transformer (ADT). ADT places atoms one at a time, autoregressively. SE(3) invariance is achieved by tokenization: each new atom's position is encoded in the local coordinate frame of a previously placed atom. The backbone is a plain causal transformer. The token stream fully specifies a 3D structure together with its chemical-bond graph G, without any bond-order assignment. To score generated molecules we introduce the xTB topology-preservation rate (XTP): the fraction of molecules for which an xTB GFN2 relaxation preserves G specified by the token stream. For XTP-accepted molecules we also report the relaxation energy and the root mean square of the atomic displacement (RMSD). We evaluate two ADT models. The first is ADT pretrained on the GEOM-Drugs $\le\!30$-heavy-atom dataset; we benchmark scaffold-conditioned 3D generation across seven drug-like scaffolds from the model. It reaches an XTP of ${\sim}54\%$ and a valid-molecule yield $N^{\mathrm{gen}}/N$ of ${\sim}50\%$, where $N^{\mathrm{gen}}/N$ is the fraction of samples that are distinct, topology-preserving, and chemically valid. The second model continues from the first by reinforcement learning against the verifiable xTB reward (RLVR), using no external molecules. RLVR raises XTP to ${\sim}98\%$ and $N^{\mathrm{gen}}/N$ to ${\sim}95\%$, while approximately preserving the GEOM-Drugs size and composition distributions. Finally, we present an Inverse-Kinematics Transformer that recovers XTP for large molecules, where discretization error accumulates. ADT thus enables direct 3D generation.

58. [$GW$ reduced density matrix from iterated linearized Dyson equation](https://arxiv.org/abs/2607.15695)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15695v1 Announce Type: cross Abstract: Iterating the Dyson equation with the static part of the self-energy leads to a concise and possibly improved expression of the one-body reduced density matrix from any self-energy approximation. Here we apply the procedure to Hedin's $GW$ approximation. The non-iterated $GW$ based density matrix was already known to yield accurate density matrices for molecular systems. We show that the Dyson-equation-based procedure is equivalent to the so-called variational Z-vector approach applied to the Random-Phase approximation energy functional, but only in the case of a Hartree-Fock mean-field starting point. When a generalized Kohn-Sham scheme is employed instead, the two approaches differ. By comparing the density matrix for a benchmark set of 34 small molecules to coupled-cluster reference values, we conclude that the iterated Dyson equation indeed produces improved density matrices for molecular systems. Interestingly, we observe that the excitation rank of the reference coupled-cluster matters much and that the inclusion of triple excitations (CCSDT) quantitatively changes the conclusions of the benchmark as compared to single and double excitations coupled-cluster (CCSD).

59. [Reconfigurable Nonlocal Light-Emitting Metalens Nanolasers via Bound States in the Continuum](https://arxiv.org/abs/2607.15852)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.15852v1 Announce Type: cross Abstract: The development of on-chip, reconfigurable coherent light sources operating in the visible spectrum is critical for next-generation optical computing and high-speed data processing. Here, we demonstrate an all-optically tunable nanolaser based on a hybrid dielectric metasurface. The platform integrates a Rhodamine B (Rd B) dye gain medium with a Niobium Pentoxide (Nb2O5) metasurface supporting a high-Q Bound State in the Continuum (BIC) resonance. Active, non-volatile tuning is achieved by incorporating the low-loss phase change material (PCM) Antimony Trisulfide (Sb2S3). We demonstrate room-temperature lasing at 616 nm with Q-factor > 2050. A continuous-wave (CW) laser is utilized for the crystallization of the PCM, tuning the lasing emission to crystalline at 621 nm with Q-factor > 1454, while a near-infrared (NIR) ps-laser triggers its re-amorphization. This robust, thermally protected optical-only control scheme, combined with a phase-gradient metasurface design, realizes a coherent, nonlocal light-emitting metalens for simultaneous lasing wavelength tuning and wavefront control. This work provides a foundational demonstration of an all-optical tunable metalens-based nanolaser for applications in high-speed optical communication, neuromorphic photonics, dynamic holographic displays, and reconfigurable quantum light sources.

60. [Nonadiabatic excited-state dynamics with quantum Monte Carlo-trained machine learning: azomethane as a stringent test](https://arxiv.org/abs/2607.16129)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 20 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.16129v1 Announce Type: cross Abstract: We introduce quantum Monte Carlo (QMC)-trained multi-state machine-learned (ML) force fields for nonadiabatic excited-state dynamics, targeting photochemical processes in which the electronic character changes along the reaction path and a consistent correlated description is required. In this framework, variational Monte Carlo wave functions combine compact selected configuration-interaction expansions with a Jastrow factor that explicitly accounts for dynamical correlation, while neural networks convert the stochastic QMC data into smooth potential energy surfaces for large surface-hopping ensembles. We apply this approach to azomethane, a demanding test case involving torsional relaxation through conical-intersection regions and C--N bond dissociation on the hot ground state. Benchmark calculations support the accuracy of the QMC reference data and show robust force convergence across isomerization and dissociation geometries. The QMC-trained dynamics preserves the expected photoisomerization mechanism, strongly reduces the excessive C--N breaking obtained with complete active space self-consistent field, and predicts a small but non-negligible prompt dissociation component after internal conversion, with a timescale consistent with femtosecond-resolved mass-spectrometry experiments. These results establish QMC-ML as a practical route to nonadiabatic photochemical dynamics with accurate wave-function reference data.

61. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-20T11:02:13Z; Popularity: 749 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-20T05:31:53Z; Popularity: 705 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.63; Date: 2026-07-20T04:19:05Z; Popularity: 629 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.15; Date: 2026-07-20T01:52:52Z; Popularity: 155 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-20T06:05:17Z; Popularity: 102 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

66. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-16T09:54:45Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

67. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Cura 1T: Specialized Model for Agentic Healthcare

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.15314

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
