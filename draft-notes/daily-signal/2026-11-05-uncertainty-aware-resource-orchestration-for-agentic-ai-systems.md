# Daily signal sidecar - 2026-11-05

## Selected Signal

- Title: Uncertainty-Aware Resource Orchestration for Agentic AI Systems
- URL: https://arxiv.org/abs/2611.05392
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Uncertainty-Aware Resource Orchestration for Agentic AI Systems
- Primary source: https://arxiv.org/abs/2611.05392
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

Total candidates reviewed after duplicate-source filtering: 63

1. [Uncertainty-Aware Resource Orchestration for Agentic AI Systems](https://arxiv.org/abs/2611.05392)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05392v1 Announce Type: new Abstract: Agentic artificial intelligence (AI) systems powered by large language models (LLMs) execute as autonomous multi-step pipelines that dynamically invoke tools, integrate observations into memory, and iterate until a task is resolved or a resource budget is exhausted. Unlike classical workflows with fixed graphs, the aggregate compute, bandwidth, and end-to-end latency demands of such pipelines are unknown at dispatch time: they emerge at runtime from intermediate observations and stochastic token sampling, yielding heavy-tailed, multi-modal random variables. This unpredictability forces infrastructure orchestrators into a dilemma: under-provisioning risks mid-execution throttling and deadline violations, while over-provisioning wastes scarce edge or cloud capacity. Existing schedulers require a fully known pipeline graph, while edge resource-management methods rely on parametric or stationary demand models, and neither fits the unknown, non-stationary profiles of agentic pipelines. We formalize this setting as the uncertainty-aware agentic orchestration problem, where the goal is to reserve, at dispatch time, compute and bandwidth allocations that cover actual pipeline demands, and to verify that the pipeline can meet its deadline, each with a prescribed probability. We then propose Conformal Reservation for Orchestration (CRO), an online algorithm that translates a sliding window of past execution traces into dispatch-time resource allocations with finite-sample, distribution-free coverage guarantees via conformal prediction. Simulations over heterogeneous task mixes with multi-modal and heavy-tailed profiles show that CRO is the only evaluated method that simultaneously satisfies target probabilistic coverage across all risk levels while, among coverage-feasible methods, attaining the lowest over-reservation, roughly halving the resource waste of the Chebyshev-bound baseline.

2. [SlackBench: Benchmarking Agents on Collaborative Projects Grounded in Real Code Repositories](https://arxiv.org/abs/2611.05512)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05512v1 Announce Type: new Abstract: AI Agents are becoming digital coworkers that can browse the web, write code, run experiments, and assist humans over extended horizons. Yet existing benchmarks fall short of real knowledge work: many rely on synthetic data or isolated tasks, missing the complex, multi-party dynamics of collaborative projects, where critical information is scattered across conversations, code, and evolving decisions. Even simple workplace questions may require locating relevant channels and direct messages, recovering context from long discussions, inspecting repository state, reconciling stale or conflicting evidence, and synthesizing across sources. We introduce SlackBench, a benchmark for evaluating agents on realistic research and engineering workflows that require joint reasoning over workplace communication and evolving repository state. Grounded in privacy-preserving reenactments of real academic research projects, SlackBench provides reproducible environments with realistic multi-party dialogue, evolving decisions, and corresponding code changes grounded in GitHub repositories and Google Docs. It contains 140 queries spanning heterogeneous-source agentic search, abstention on unanswerable or false-premise questions, goal-directed summarization, and circumstance inference over long conversations. These tasks are not reducible to static corpus question answering: agents must determine which conversations matter, traverse threads, inspect repository state, and synthesize evidence across communication and code artifacts. Across 33 frontier models and agent harnesses, the best system scores around 80% and most agents score below 66%, highlighting substantial headroom for improvement. SlackBench thus provides an extensible framework for evaluating agents in collaborative work environments. The SlackBench dataset is available at https://huggingface.co/datasets/HuanzhiMao/SlackBench .

3. [DevRev delivers autonomous self-service with GPT-6.1 Sol](https://openai.com/index/devrev-enterprise-self-service)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 04 Nov 2026 00:00:00 GMT
   - Summary: DevRev uses GPT-6.1 Sol to power Computer and Operator, balancing reasoning, speed, and cost for enterprise service.

4. [Formally verifying agent-written full-stack web apps with PDD Kit](https://www.microsoft.com/en-us/research/blog/formally-verifying-agent-written-full-stack-web-apps-with-pdd-kit/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Thu, 05 Nov 2026 16:00:00 +0000
   - Summary: AI agents can generate code at a scale that’s hard for humans to review line-by-line. PDD Kit helps ensure the code is doing what the developer intended by creating formal specifications and testing against them. It converts developer intent into a Verus specification, proves AI-generated code meets it for every input, and uses tests where proofs aren't practical. Developers review intent, not every line. The post Formally verifying agent-written full-stack web apps with PDD Kit appeared first on Microsoft Research .

5. [New NVIDIA Cosmos 3 Open Models for Interactive World Simulation](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 05 Nov 2026 19:35:16 GMT

6. [CWE-bench v2: More coverage, quality, and transparency](https://huggingface.co/blog/cwe-bench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 03 Nov 2026 00:00:00 GMT

7. [Agent Harness Awareness: Turning Verified Telemetry into Operational Control for Tool-Using Agents](https://arxiv.org/abs/2611.05391)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05391v1 Announce Type: new Abstract: Tool descriptions tell an agent what an action can do, but they do not necessarily reveal whether that action is healthy or suitable at the moment of use. Execution harnesses often possess this information through monitors, traces, and recent failures while the model choosing the next action does not. We call this gap operational blindness. We introduce Agent Harness Awareness, a trust-separated design in which the host supplies a small, fresh, verified state snapshot before a consequential action while retaining measurement, enforcement, evaluation, and final dispatch authority. We test its tools-and-network instance with ToolRoute, a controlled isolation benchmark that holds the task and candidate semantics constant and varies the operational information available to the model. In a 216-decision ablation across GPT-5.6 Sol, Claude Sonnet 5, and Gemini 3.7 Flash, verified tool-health state reduced mean observable policy regret by 96.9% against a same-shape neutral control (4,252 ms to 131 ms) and raised single-dispatch completion from 69.4% to 95.8%. In a separate 27-decision end-to-end replication with live local TCP/HTTP execution, OpenTelemetry client spans, and Toxiproxy-injected faults, verified state reduced mean regret from 8,956 ms to 0 ms (zero excess observable operational cost) and completed the live action in 9/9 model-by-fault cases versus 5/9 for the neutral control. These studies establish the tools-and-network instance of Agent Harness Awareness: selected host telemetry materially improves pre-dispatch operational choice. Runtime state, hardware pressure, economics, retry-aware recovery, and heterogeneous selection remain open empirical extensions of the same architecture.

8. [Challenge-Aware Knowledge Recruitment with Meta-Agent Supervision for Medical Multi-Agent Reasoning](https://arxiv.org/abs/2611.05393)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05393v1 Announce Type: new Abstract: Large language models perform strongly on standard medical QA but degrade on harder reasoning tasks, where multi-agent debate often fails to beat strong single-model prompting. We argue that a key limitation is that existing systems select experts and retrieve knowledge from the question alone, rather than from gaps that emerge during reasoning. We propose challenge-aware adaptive recruitment: an external CHALLENGER inspects the evolving reasoning trace and identifies specific factual or expertise gaps. These signals trigger targeted knowledge retrieval or mid-discussion specialist recruitment. On the MEDAGENTSBENCH hard subset (862 questions across nine biomedical datasets), upfront retrieval provides little benefit, while challenge-aware in-between retrieval performs better; on a multi-specialist backbone it improves accuracy on 8 of 9 datasets and adds 6 percentage points over Challenger Only. Ablations indicate benefits from both retrieval timing and gap-specific query signals, and a live web-search experiment shows that the timing advantage persists across retrieval backends. For specialist recruitment, self-triggered adaptation is unreliable, whereas Challenger-triggered recruitment raises GPT-4.1-mini MedQA accuracy from 46% to 54%, with positive direction on all tested generalization datasets. Naively combining retrieval and specialist recruitment degrades performance, highlighting the need to coordinate adaptive intervention channels. These results show that when and why external resources are recruited is a key design choice in multi-agent medical reasoning.

9. [Can Large Language Models Review the Scientific Literature? A Test Against a 102-Article Benchmark](https://arxiv.org/abs/2611.05459)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05459v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly used to support scientific literature reviews, yet evaluations often examine individual tasks rather than the review process as a whole. We assess six AI tools across four stages: finding relevant articles, interpreting them, synthesizing across them, and proposing future research. The benchmark is a published review of the Spanish plume weather pattern and its 102-article corpus. In the initial searches, five tools collectively identified 57 articles, with the best individual tool finding 42. Institutional library access increased discovery from 42 to 82 articles for Codex and from 15 to 79 for Claude Code. Given the complete corpus of 102 PDFs, three tools correctly identified all 18 articles discussing the Spanish plume substantially, but incorrectly classified 40% to 79% of the 84 passing mentions as substantial. The same three tools produced syntheses evaluated blindly by two domain experts. Although largely accurate, the syntheses provided limited insight and sometimes contained unsupported claims, quotation errors, and exaggerated statements of consensus. Finally, all three tools proposed research directions broader than the Spanish plume literature, although two approached questions identified in the benchmark review. No single tool performed best across all tasks. We provide eight recommendations for researchers using AI tools in literature reviews. Our findings suggest that LLMs can assist with discovering and interpreting scientific literature, particularly when institutional access is available, but cannot replace expert judgment in evaluating evidence or synthesizing research.

10. [Towards Efficient Whole Page Ranking with One-Pass Inference](https://arxiv.org/abs/2611.05542)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05542v1 Announce Type: new Abstract: Whole-page ranking jointly optimizes advertisements and organic content to balance business outcomes and user engagement under complex layout and business constraints. Existing non-autoregressive (NAR) approaches enable efficient page generation but typically score candidate items independently of previously selected items, limiting their ability to capture order-dependent interactions. Autoregressive (AR) methods address this limitation through sequential conditioning, but incur substantial inference overhead that challenges large-scale deployment. Bridging this quality-efficiency gap remains a challenge in industrial whole-page ranking. We propose Multi-Item Scoring (MIS), a prefix-aware NAR-style framework that incorporates sequential context into efficient multi-item scoring. MIS integrates global candidate interactions, localized prefix conditioning, and position-aware scoring within a shared representation architecture. By computing reusable representations once per request and performing lightweight prefix-conditioned scoring during constrained beam search, MIS captures important sequential dependencies without repeated full-model inference. Experiments on KuaiRand-1K and RL4RS demonstrate that MIS approaches the generation quality of an autoregressive CGA baseline while achieving 4.07x and 3.54x faster CPU decoding, respectively. In a randomized evaluation on a large-scale social-video platform, MIS improves the realization metric by 0.104% and watch time by 0.058%, while reducing ranking-service CPU consumption by 9.73%. These results demonstrate that prefix-aware multi-item scoring can narrow the quality gap between NAR and AR generation while retaining the efficiency required for industrial scalability.

11. [Learning Implicit Solves for Dynamic Simulations](https://arxiv.org/abs/2611.05439)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05439v1 Announce Type: new Abstract: High-fidelity simulation of dynamical systems is central to scientific discovery and engineering design, yet remains computationally demanding. Here we introduce the Implicit Neural Operator Solver (INOS), which learns the implicit solve and encodes a time integrator. INOS pretrains a neural operator from static equilibrium solutions and reuses it within Newmark-$\beta$ integration. At each time increment, the integrator forms an effective equilibrium problem, the pretrained neural operator infers the next-step solution field, and the Newmark relations advance the dynamic state. Numerical examples in linear and nonlinear elastodynamics demonstrate accurate full-field predictions without dynamic trajectory supervision. Comparative results show that INOS, evaluated zero-shot, achieves higher predictive accuracy than neural solver baselines trained on dynamic simulations. In addition, INOS delivers over 4,600$\times$ speedup in nonlinear simulations over sequential classical finite-element solvers. INOS natively accommodates changes in dynamic conditions and enables reuse of the pretrained operator across spatial and temporal discretizations. Further evaluation demonstrates a stable million-step rollout. These findings establish INOS as a reusable neural implicit solver for accurate, efficient, and robust dynamic modeling.

12. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-11-05T10:17:40Z; Popularity: 2,017 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

13. [GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents](https://openai.com/index/introducing-gpt-6-cyber)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 09:00:00 GMT
   - Summary: Introducing GPT‑6 Cyber, OpenAI’s cybersecurity model for finding exploitable vulnerabilities and developing fixes, trained to stay within authorized scope.

14. [Setting a new standard for responsible AI infrastructure](https://openai.com/index/setting-new-standard-responsible-ai-infrastructure)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 02:00:00 GMT
   - Summary: OpenAI introduces its National Community Compact and Compute Campus Policy Blueprint to protect local resources, create jobs, and guide responsible AI infrastructure development.

15. [OpenAI to acquire Pierre Computer Company, Inc.](https://openai.com/index/openai-to-acquire-pierre)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 04 Nov 2026 14:30:00 GMT
   - Summary: OpenAI will acquire Pierre Computer Company, expanding Codex’s tools for building, understanding, and reviewing code.

16. [Daybreak Red is now available in AWS GovCloud (US-East)](https://openai.com/index/daybreak-red-aws-govcloud)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 04 Nov 2026 07:00:00 GMT
   - Summary: Daybreak Red brings GPT-5.6 Cyber to approved customers in AWS GovCloud (US-East) through Amazon Bedrock for authorized cybersecurity work.

17. [A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 04 Nov 2026 08:00:00 GMT
   - Summary: OpenAI built an autonomous pipeline that found, validated, and generated patches for 948 local privilege-escalation vulnerabilities in the Linux kernel.

18. [Introducing Images 2.6](https://openai.com/index/introducing-images-2-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 04 Nov 2026 00:00:00 GMT
   - Summary: Images 2.6 brings faster image generation, GIF creation, more precise editing, and new API controls across ChatGPT, Codex, and the API.

19. [How Cisco defends at machine speed with OpenAI](https://openai.com/index/cisco-cyber)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 03 Nov 2026 08:00:00 GMT
   - Summary: Cisco combines network intelligence with OpenAI models to strengthen enterprise security. Learn how it is building more adaptive defenses.

20. [Heimstaden is changing residential real estate management with AI](https://openai.com/index/heimstaden)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 03 Nov 2026 08:00:00 GMT
   - Summary: Discover how Heimstaden uses OpenAI’s ChatGPT Enterprise and Codex to transform property management, cut costs, and empower employees across Europe.

21. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

22. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [A Closer Look at Phonon TTS. Launching High-Quality On-Device Speech That Tops the Benchmarks.](https://huggingface.co/blog/phonon-tts)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 GMT

25. [Dharma Field Extractor: Any Document In, Structured Fields in JSON Out](https://huggingface.co/blog/Dharma-AI/dharma-field-extractor)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 04 Nov 2026 17:50:10 GMT

26. [StateBench: Testing how language models track state changes over long documents](https://huggingface.co/blog/allenai/statebench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 03 Nov 2026 17:15:21 GMT

27. [Palette: teaching a small model to build decks in your design language](https://huggingface.co/blog/ibm-research/palette-deck-building)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 03 Nov 2026 16:35:36 GMT

28. [Transformers Model Integration Contracts](https://huggingface.co/blog/transformers-mic)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 03 Nov 2026 00:00:00 GMT

29. [Granite Switch 4.1.1 — Update models like you update software](https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 13:37:07 GMT

30. [Announcing Project ProtoStar: Making Publicly Funded Science AI-Ready](https://huggingface.co/blog/announcing-project-protostar)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 00:00:00 GMT

31. [Welcome Le Chonk: Mistral Large 4 on Hugging Face](https://huggingface.co/blog/mistral-large4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 00:00:00 GMT

32. [Who May Overrule the Agent? Evidence-Gated Authority in LLM Review Institutions](https://arxiv.org/abs/2611.05390)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05390v1 Announce Type: new Abstract: Multi-agent language-model systems often add a reviewer to improve an upstream agent's decision. Yet a reviewer can both repair errors and replace decisions that were already correct. We study this as a problem of institutional jurisdiction: conditional on the same proposal, task information, model, and review output, when is the reviewer authorized to make its recommendation binding? We compare broad override authority with an evidence gate that permits replacement only after the reviewer produces a mechanically valid record of a binding-constraint violation and a compliant repair. Across two locally run open-weight models, 96 spatial-policy tasks, and a 96-task portfolio-transfer benchmark, the gate sharply reduces corruption of correct proposals while retaining most repairs of violations. The directions of this tradeoff are partly implied by the rule; its magnitude depends on reviewer transitions and upstream proposal states. A prospective validation then gives the reviewer an explicit choice to retain, replace, or escalate. This eliminates correct-proposal corruption for Qwen, but Mistral still replaces all 48 correct proposals; Qwen also declines every welfare-only repair that Mistral frequently attempts. Thus interface design changes reviewer behavior but is not a model-independent safeguard. The result is not that restricted review is universally better. It is that reviewer competence, action interface, and binding jurisdiction jointly determine both the correction domain and the corruption surface.

33. [A Feasibility Condition for Confidence-Gated Tiered LLM Inference](https://arxiv.org/abs/2611.05394)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05394v1 Announce Type: new Abstract: Tiered inference distributes large language model computation across a hierarchy of devices, from on-device and edge hardware to the datacenter, and is increasingly offered as the route to cheaper, lower-latency, and more private serving. Most such systems orchestrate frozen model checkpoints, and most decide what to resolve locally and what to escalate using a confidence signal produced by a forward-deployed model. We give a closed-form condition for when no threshold on that signal makes a tiered cascade worthwhile relative to sending every query to the backstop. Modeling the routing decision as a binary test and separating local from escalation cost through an architecture cost ratio $\kappa$, we derive a feasibility condition bracketed by a signal-free floor, below which a cascade is feasible at any signal quality, and a perfect-signal ceiling, above which none is. Read along the $\kappa$ axis the condition inverts: where local compute is billed, cost binds, matching a recent empirical finding; where it is sunk, on decentralized hardware, feasibility becomes unconditional and signal quality instead sets what the cascade achieves. We turn the condition into three design requirements that existing trained-in primitives satisfy only in isolation, and we propose, as future work, a co-designed architecture and a protocol to test it. The condition and the inversion hold independently of that architecture; they are the paper's contribution.

34. [Towards Robust Long-Lived Agents: Benchmarking Experience Lifecycles in Evolving Environments](https://arxiv.org/abs/2611.05450)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05450v1 Announce Type: new Abstract: As agents become more capable, they are moving beyond one-off tasks toward sustained assistance across successive user goals. Such assistance requires agents to discover how unfamiliar environments work, reuse what they learn across tasks, and keep that experience current as environments evolve. Existing benchmarks increasingly study experience reuse and adaptation, but provide limited insight into which parts of accumulated experience agents revise, retain, or lose. To address this gap, we introduce ReScopeBench, a benchmark for the experience lifecycle across 18 interactive environments. It distinguishes structural experience about how an environment is organized and accessed from rule experience about reusable principles and constraints that guide decisions across tasks. To study how experience is acquired, reused, and revised, we propose an experience-first construction approach. It builds task streams around shared experience and introduces silent environmental changes. We evaluate task performance and track changes in saved experience throughout each stream. Across 20 models, we find that retained experience improves task performance, but agents struggle to keep it current as environments change. Even when the required experience is correctly recorded, agents do not always complete tasks successfully. These findings identify selective maintenance and effective use as complementary challenges for long-lived agents.

35. [MA-SafeDiffuser: Safe Multi-Agent Planning with Diffusion Probabilistic Models](https://arxiv.org/abs/2611.05524)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05524v1 Announce Type: new Abstract: We propose MA-SafeDiffuser, a multi-agent extension of SafeDiffuser that equips diffusion-based trajectory planners with finite-time diffusion invariance guarantees for joint-agent safety specifications. Building on the single-agent construction that embeds control barrier function (CBF) constraints into reverse-diffusion updates, we: (i) formalize joint safe sets as intersections of per-agent and pairwise barrier sets; (ii) derive centralized and decentralized (communication-aware) constrained denoising procedures with provable invariance under mild assumptions; (iii) address local-trap and deadlock phenomena via time-varying specifications and liveness CBFs; and (iv) develop a lightweight benchmarking suite including a multi-agent Maze2D domain. Empirically, MA-SafeDiffuser reduces violation counts relative to unconstrained diffusion baselines, while retaining planning quality. We provide algorithms, proofs, and reference implementations.

36. [TSFM Meets LLM: Context as Covariates](https://arxiv.org/abs/2611.05515)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05515v1 Announce Type: new Abstract: Textual information is ubiquitous in real-world time series datasets, appearing as news, reports, and annotations that hold key predictive signals not deducible from numerical history alone. Large Language Models (LLMs) interpret text but lack numerical precision, while Time Series Foundation Models (TSFMs) are quantitatively accurate but cannot reason about the effects of text. Moreover, the lack of large-scale paired multimodal datasets limits progress in bridging this gap. In this work, we address this challenge by providing a scalable approach for generating realistic multimodal datasets by annotating real-world time series with LLMs. Building on this, we propose Context as Covariates (CoCo), a forecasting framework in which an LLM distills its textual reasoning into numerically grounded forecast and confidence covariates that guide a TSFM backbone, thereby exploiting the strengths of both LLMs and TSFMs. We align the two models in stages, first fine-tuning the LLM via Group Relative Policy Optimization (GRPO) with a reward tied to covariate-induced improvement in forecasting performance, and then fine-tuning the TSFM on covariates generated by the aligned LLM. Our experiments show that models trained on our synthetic multimodal corpus generalize to real benchmarks spanning finance, economics, weather, traffic, and security. Notably, CoCo with Qwen3-4B-Instruct-2507 as the LLM and Chronos2 as the TSFM achieves up to 12% MAE improvement over state-of-the-art TSFMs and LLM forecasters, such as GPT-4o. Code, checkpoints, and the evaluation datasets are publicly available.

37. [Controls on the deformation and reorientation of mafic enclaves during magma mingling: A computational study](https://arxiv.org/abs/2611.05575)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05575v1 Announce Type: cross Abstract: Mafic microgranular enclaves in granitic plutons record magma mingling, and their shapes are often interpreted as a record of the flow that deformed them. We investigate how a dense, low-viscosity droplet deforms in a lighter, much more viscous host under shear and gravity, using 96 two-dimensional Level-Set simulations. The viscosity ratio ($\mu_r$) spans $10^{-6}$ - $10^{-3}$, the capillary number ($\mathrm{Ca}$) ranges from $10^{6}$ to $8\times10^{9}$, the Bond number ($\mathrm{Bo}$) takes values of $3.5\times10^{6}$ and $9.8\times10^{6}$, and the Reynolds number ($\mathrm{Re}$) remains below $10^{-2}$, with a fixed density contrast ($\Delta\rho$) of $400~\mathrm{kg\,m^{-3}}$. Two broad regimes identified- sinking and non-sinking which spread over six outcomes like sinking, edge, mid and multiple break-up, rotation, and retraction. The ratio $\mathrm{Ca/Bo}$ separates sinking from shear-dominated behaviour near unity, although the transition spans a range of $\mathrm{Ca/Bo}$ values that shifts with confinement. In the shear-dominated regime, a lower viscosity ratio promotes stretching. Multiple pinch-off occurs mainly at viscosity ratios of $10^{-6}$ - $10^{-5}$, rotation occurs only at the higher vertical confinement, and retraction occurs only at the lower vertical confinement. The strain at maximum stretch averages 1.1 - 1.4 and increases with $\mathrm{Ca/Bo}$, with a stronger increase at higher confinement. The orientation of the major axis decreases by approximately $10^\circ$ per unit strain and is lowest for rotating droplets. Because the capillary number exceeds conventional critical values for breakup for droplets, breakup is interpreted in terms of accumulated deformation rather than capillary stability alone. Enclave shape therefore reflects the flow regime and is not a direct measure of finite strain.

38. [Quantum Spin Wave Theory with Multi-Spin Interactions for Magnetic Materials Modeling](https://arxiv.org/abs/2611.06833)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06833v1 Announce Type: cross Abstract: In the field of magnetism within condensed matter physics, magnetic systems are microscopically described by a spin Hamiltonian. Its parameterization is accessible through both ab initio calculations and fits to experimental data. Frequently, this is achieved via multi-stage calculations that either relate the parameters to observable material properties or map a Kohn-Sham Hamiltonian onto an effective spin model. In this realm, accurate and flexible methods are essential for simulating the physical properties of the latter. The present study focuses on one such method: spin wave theory. The approach is applied to a new formulation of the spin Hamiltonian, named polynomial localized spin model (PLSM), which includes terms of arbitrary order in the spin operators. This enables the direct application of linear spin wave theory (LSWT) to the analysis of the energy landscape and spin-wave spectrum of arbitrary collinear and non-collinear phases in any realistic magnetic material. Moreover, the classical and quantum parts of the PLSM are cleanly separated. Finally, an open-source implementation of LSWT, named Magnopy, is presented. It interfaces with modern parameterization software, supports arbitrary collinear and non-collinear systems, and is designed for both scripting and standalone use.

39. [A Machine Learning Model for the Chemistry of a Solvated Electron](https://arxiv.org/abs/2511.22642)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2511.22642v2 Announce Type: replace-cross Abstract: In molecular simulations, machine-learning force fields can achieve ab initio accuracy at a lower cost but remain limited in the explicit modeling of electrons. In this work, we develop an electron-aware machine-learning force field, in which an excess electron of interest is modeled quantum mechanically, while the remaining short-range interactions and long-range Coulombic forces are machine-learned to reproduce a density functional theory calculation. We demonstrate the method on the solvated electron in bulk water and its reaction with a hydronium ion. We identify a proton transfer mechanism by which the excess proton recombines with the electron. We determine the forward reaction rates between 350 K and 450 K from first-passage survival functions, which yield an Arrhenius relationship with an activation energy of 3.2 kcal$\cdot$mol$^{-1}$, in good agreement with experiment. From an enhanced sampling simulation, we determine the equilibrium constant, and thus the reaction free energy, which is also consistent with experimental measurements.

40. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.82; Date: 2026-11-05T20:19:43Z; Popularity: 824 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-11-04T11:59:32Z; Popularity: 493 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.38; Date: 2026-11-05T13:03:35Z; Popularity: 385 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-11-04T11:31:38Z; Popularity: 243 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

44. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

45. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

46. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

47. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

48. [Simulating student learning for better AI tutoring](https://www.microsoft.com/en-us/research/blog/simulating-student-learning-for-better-ai-tutoring/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 12 Oct 2026 16:00:00 +0000
   - Summary: StudentSim is a research system for evaluating and improving AI tutoring tools before they are tested with learners. It models how individuals may engage with tutors, giving feedback to improve tutor performance across subjects like chess, writing, and mathematics. The post Simulating student learning for better AI tutoring appeared first on Microsoft Research .

49. [Objective-Conditioned Active Preference Learning for Multi-Objective Alignment](https://arxiv.org/abs/2611.05506)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05506v1 Announce Type: new Abstract: Aligning large language models (LLMs) with several objectives, such as helpfulness, harmlessness, and honesty, typically relies on preference judgment for each objective, growing the annotation cost linearly with the number of objectives. Active preference learning can reduce this cost by selecting the comparisons whose labels are expected to change the policy most. Existing remedies either lack an objective-aware query selection mechanism for the multi-objective setting or regard conflicting preferences as harmful, therefore excluding them from the training data. We introduce OGC-DPO (Objective-conditioned Gradient Coverage DPO), an active learning framework that treats each (response pair, objective) combination as a separate query and measures its informativeness through the policy's own implicit gradient, without relying on an external reward model. OGC-DPO then selects the queries that most expand each objective's gradient coverage. Empirical experiments across varying numbers of objectives demonstrate the effectiveness of OGC-DPO over existing active preference learning methods under the same annotation cost. Further analysis demonstrates that informative conflicts, rather than being uniformly harmful, provide a useful policy training signal.

50. [FedSharp: Byzantine Robust Decentralized Federated Learning Under Noisy Channel](https://arxiv.org/abs/2611.05546)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05546v1 Announce Type: new Abstract: Decentralized federated learning (DFL) eliminates the central aggregation server but remains vulnerable to data heterogeneity, Byzantine attacks, and channel noise. We show that noise accumulates as models propagate across nodes, becoming increasingly significant as the learning rate decays. Moreover, accumulated noise enables Byzantine attackers to exploit loss-based model selection by mimicking honest model averages. To address these challenges, we propose screened, hop-aware, ranked, proximal averaging, a robust DFL framework (FedSharp). In this approach, each node maintains models from its 2b predecessors, ensuring at least b honest candidates when at most b nodes are Byzantine. FedSharp screens suspicious models using coordinate-wise median deviations, averages the b lowest-loss candidates to reduce fresh channel-noise variance by a factor of b, and applies noise-adaptive gradient-norm regularization and proximal training to mitigate accumulated noise and non-IID drift. Experiments on a 100-node ring with 33 Byzantine nodes show that FedSharp achieves 93.5-94.9% accuracy on MNIST, compared with 29.4-38.1% for a state-of-the-art single-model-selection benchmark, and 32.8-48.8% on CIFAR-10, compared with 10.0-30.5%, across Gaussian and hidden attacks under IID and non-IID data. On MNIST, FedSharp also achieves accuracy within approximately one percentage point of the benchmark operating without channel noise.

51. [Discovering like a scientist: Literature-informed dimensionless learning for physical closure of data-driven equations](https://arxiv.org/abs/2611.05780)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.05780v1 Announce Type: new Abstract: Data-driven methods can recover compact equations, yet the physical dependence of their coefficients across operating conditions often remains unresolved. Dimensionless groups can explain this variation, but selecting relevant groups from the many dimensionally admissible combinations remains challenging. Here, we introduce a knowledge-guided framework for dimensionless learning, called {\pi}-former. It learns patterns of variable association and exponent assignment from a corpus of 1,288 established dimensionless groups. Under exact dimensional constraints, the model proposes interpretable basic groups whose combinations are optimized against observations. Across seven physical problems, the framework identifies predictive dimensionless coordinates within seconds. Integration with equation discovery further expresses condition-dependent coefficients through these coordinates, recovering established physical scalings in multi-condition simulations. Applied to experimental measurements of evaporation-driven wetting, the framework discovers dimensionless coordinates and uses them to construct a unified trajectory equation. The resulting model generalizes to held-out conditions across liquids and initial volumes, outperforming existing empirical models. These results establish dimensionless learning as a transferable bridge between accumulated scientific knowledge and data-driven equation discovery, enabling artificial intelligence to uncover physically meaningful laws from observations.

52. [A coupled lattice Boltzmann model for pore-scale mushy-layer dynamics with application to sea ice](https://arxiv.org/abs/2611.06407)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06407v1 Announce Type: cross Abstract: A pore-scale lattice Boltzmann model is developed for reactive transport in phase-changing porous media, coupling solute transport in the liquid with conjugate heat transfer across the solid and liquid phases. Two methodological developments are introduced: a novel link-based Volume-of-Pixel formulation for direction-dependent interface motion, and a generalized Robin boundary treatment for solute redistribution at moving interfaces. The phase-change formulation is validated against thermal benchmarks, while the Robin treatment is assessed through literature test cases, exhibiting convergence rates between first and second order. The coupled model is then applied to a local pore-scale segment of a sea ice brine channel in a purely diffusive regime. The simulations recover the expected ideal mushy-layer behaviour under appropriate scale separation. At sea-ice-relevant concentration ratios, thermal perturbations produce relatively large variations in brine salinity, causing freezing rather than melting to reshape the pore geometry in a non-uniform way. The resulting framework provides a pore-scale numerical tool for resolving coupled temperature, solute redistribution, and phase-boundary dynamics in mushy layers.

53. [Energy-Guided Transport for Projection-Free Physics-Informed Flow Matching](https://arxiv.org/abs/2611.06711)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06711v1 Announce Type: cross Abstract: Deep generative models, particularly Flow Matching frameworks, have emerged as powerful tools for synthesizing complex physical systems. However, standard architectures remain purely statistically driven and agnostic to the underlying governing equations, often violating fundamental physical constraints during inference. Existing zero-shot approaches designed to enforce these constraints typically rely on rigid algebraic projections. While effective for sparse boundary conditions, applying such discrete geometric corrections to dense, full-domain PDEs may disrupt the probability path, \rev{potentially deviating from the learned manifold and introducing substantial computational overhead}. To address these challenges, we introduce Energy-Guided Transport, a novel training-free framework that formulates non-linear physical constraints as a smooth potential energy landscape. Rather than interrupting the ODE integration, our method applies a continuous dissipative force directly to the intermediate generative states, steering them toward the physical manifold. By evaluating this force implicitly via reverse-mode automatic differentiation, our framework preserves the natural dynamics of the flow while maintaining an efficient $\mathcal{O}(N)$ algorithmic complexity. We extensively evaluate our framework across various 1D and 2D physical systems, including the chaotic Navier-Stokes equations. Our method achieves stable generation without structural divergence, significantly improves the stability-accuracy trade-off compared to state-of-the-art methods, and substantially accelerates inference with respect to exact projection strategies. Code available at: https://github.com/ispamm/Projection-free-energy-guided-flow-matching.

54. [Finite-size scaling theory of R\'enyi thermal entropy for second-order, first-order, and weakly first-order quantum phase transitions](https://arxiv.org/abs/2506.16111)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2506.16111v4 Announce Type: replace-cross Abstract: Establishing the nature of a quantum phase transition in finite-size simulations---whether continuous, first-order, or weakly first-order---is a fundamental challenge in quantum many-body computation. The weakly first-order transition is particularly elusive: its anomalously large correlation length invariably mimics a continuous critical point at accessible system sizes, and no unified finite-size scaling theory has existed to distinguish these scenarios under realistic computational constraints. In this work, we address this problem by introducing a finite-size scaling framework based on the R\'enyi thermal entropy (RTE) and its derivative (DRTE). We derive the finite-size scaling forms for the RTE and DRTE at continuous, first-order, and weakly first-order quantum phase transitions, and show that the DRTE isolates the universal contribution of the free energy and strengthens the characteristics of various phase transitions in finite sizes. Using quantum Monte Carlo simulations, we demonstrate accurate data collapse and extraction of critical exponents at (2+1)-dimensional O($N$) critical points. Most importantly, the DRTE provides a definitive signature of weakly first-order transitions at visitable sizes---a zero-crossing and a double-peak structure---which we observe in the debated deconfined quantum criticality candidates such as the $J$--$Q$ and SU(8) $J_1$--$J_2$ models. Our approach offers a general, order-parameter-agnostic, and numerically efficient diagnostic tool, resolving long-standing ambiguities between continuous and weakly first-order scenarios in the finite size simulations.

55. [CNN on `Top': In Search of Scalable & Lightweight Image-based Jet Taggers](https://arxiv.org/abs/2512.05031)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2512.05031v3 Announce Type: replace-cross Abstract: While Transformer-based and standard Graph Neural Networks (GNNs) have proven to be the best performers in classifying different types of jets, they require substantial computational power. We explore the scope of using a lightweight and scalable version of EfficientNet architecture, along with global features of the jet. The end product is computationally inexpensive but is capable of competitive performance. We showcase the efficacy of our network in tagging top-quark jets in a sea of other light quark and gluon jets. The work also sheds light on the importance of global features for both the accuracy and the apparent redundancy of the network's complexity.

56. [Tree tensor network states represent low-energy states faithfully](https://arxiv.org/abs/2512.20215)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2512.20215v2 Announce Type: replace-cross Abstract: Extending corresponding results for matrix product states [Verstraete and Cirac, PRB 73, 094423 (2006); Schuch et al. PRL 100, 030504 (2008)], it is shown how the approximation error of tree tensor network states (TTNS) can be bounded using Schmidt spectra or R\'{e}nyi entanglement entropies of the target quantum state. Conversely, one obtains bounds on TTNS bond dimensions needed to achieve a specific approximation accuracy. The result implies that efficient TTNS approximations exist if $\alpha<1$ R\'{e}nyi entanglement entropies for single-branch cuts obey an area law, as in ground and low-energy states of certain gapped systems on tree graphs.

57. [Cost scaling of MPS and TTNS simulations for 2D and 3D systems with area-law entanglement](https://arxiv.org/abs/2601.08132)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 05 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2601.08132v2 Announce Type: replace-cross Abstract: Tensor network states are an indispensable tool for the simulation of strongly correlated quantum many-body systems. In recent years, tree tensor network states (TTNS) have been successfully used for two-dimensional systems and to benchmark quantum simulation approaches for condensed matter, nuclear, and particle physics. In comparison to the more traditional approach based on matrix product states (MPS), the graph distance of physical degrees of freedom can be drastically reduced in TTNS. Surprisingly, it turns out that, for large systems in $D>1$ spatial dimensions, MPS simulations of low-energy states are nevertheless more efficient than TTNS simulations. With a focus on $D=2$ and 3, the scaling of computational costs for different boundary conditions is determined under the assumption that the system obeys an entanglement (log-)area law, implying that bond dimensions scale exponentially in the interface area of the associated subsystems.

58. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.79; Date: 2026-11-02T18:36:00Z; Popularity: 792 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

59. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.38; Date: 2026-11-05T20:07:28Z; Popularity: 1,380 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

60. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-05T11:40:51Z; Popularity: 265 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

61. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-10-31T04:07:35Z; Popularity: 57 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

62. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-11-05T14:14:48Z; Popularity: 1,011 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

63. [RobLe3/IICP](https://github.com/RobLe3/IICP)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-29T16:46:51Z; Popularity: 7 stars
   - Summary: Open specification and conformance material for intent-based AI agent discovery and routing

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Uncertainty-Aware Resource Orchestration for Agentic AI Systems

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.05392

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
