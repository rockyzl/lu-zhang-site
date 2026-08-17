# Daily signal sidecar - 2026-08-17

## Selected Signal

- Title: Don't Claim Benchmark-Oriented Optimization Improves General Coding Capability -- Diverse Evaluation Is Required
- URL: https://arxiv.org/abs/2608.13566
- Source: arXiv cs.LG
- Score: 8.00

## Candidate Review

- Signal: Don't Claim Benchmark-Oriented Optimization Improves General Coding Capability -- Diverse Evaluation Is Required
- Primary source: https://arxiv.org/abs/2608.13566
- Discovery source: arXiv cs.LG
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

Total candidates reviewed after duplicate-source filtering: 70

1. [Don't Claim Benchmark-Oriented Optimization Improves General Coding Capability -- Diverse Evaluation Is Required](https://arxiv.org/abs/2608.13566)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 8.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13566v1 Announce Type: new Abstract: Post-training papers, model cards, and blog posts often treat scores on a small set of coding benchmarks (e.g., SWE-bench and LiveCodeBench) as evidence of broad coding capability, both for research artifacts and user-facing systems. We argue that optimization for these benchmarks leads to measuring task-specific performance, creating a meaning gap between measured scores and claims of general coding ability. We examine this gap with a Django-based case study benchmark suite we create. Evaluating foundation models and checkpoints post-trained on SWE-bench trajectories, we find that benchmark rankings frequently fail to generalize. Post-trained checkpoints show little cross-task transfer, and SWE-bench optimization yields limited or no gains on our tasks or on LiveCodeBench. Similarly, fine-tuning on individual Django modalities fails to transfer. We conclude that a small number of benchmarks is insufficient for evaluating diverse models under benchmark optimization pressure. We encourage the community to use differentiated evaluation - holistic assessment for frontier models, multi-task suites for research, and human-in-the-loop studies for narrow task applications. Finally, we argue for creating a capability taxonomy and sustained benchmark maintenance, rather than one-off benchmark releases. Without reliable evaluation standards, engineers and researchers using LLMs and agents have to rely on insufficient evidence to make research, development, and deployment decisions.

2. [Inducing Reward-Free Judging Rubrics that Reduce Over-Crediting in Agent Evaluation](https://arxiv.org/abs/2608.13564)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13564v1 Announce Type: new Abstract: Evaluating language-model agents at scale increasingly relies on a second language model as an automatic judge, because the gold signal, an executable environment reward, is expensive, slow, or unavailable at deployment time. Such a judge is a reward-free proxy whose value depends on whether it can be trusted, yet existing judges either hand-write the scoring rubric, as in G-Eval, or fine-tune the judge's weights, and both tend to credit fluent but unsuccessful trajectories as successes. We instead induce the text of an agent-judging rubric from a small set of ground-truth-labeled trajectories, grounding it in true outcomes. We present RubricForge, which evolves a judge rubric by reflective evolution against labeled trajectories to maximize agreement with the environment reward, freezes it, and applies it to held-out trajectories in one model call with no environment access. The optimized artifact is human-readable text, so every verdict is attributable to named criteria. Using one frozen 7B model as both agent and judge, on tau-bench (173 labeled trajectories drawn from 220 rollouts) and WebShop (160), the principal gain is faithfulness rather than raw agreement. The edge over a generic G-Eval judge is not statistically significant (McNemar p = 0.248), and absolute-score calibration marginally favors the generic judge (|err| difference -0.048, p = 2x10^-4). Yet RubricForge over-credits failed trajectories roughly half as often (0.115 vs. 0.173 false-pass rate on tau-bench, with three over-credit catches and zero reversals) and ranks graded WebShop outcomes more faithfully (Spearman 0.410 vs. 0.370). For a reward-free evaluator the false-pass rate, not aggregate agreement, is the deployment-relevant quantity, since a false pass ships a broken agent whereas a false fail merely costs a retry.

3. [Depth-Aware Sensitivity Analysis of Mixture-of-Experts Models via Magnitude-Based Expert Masking](https://arxiv.org/abs/2608.13565)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13565v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) architectures scale large language models (LLMs) while preserving computational efficiency through sparse activation. Despite their widespread adoption, the relative importance of individual MoE layers remains insufficiently characterized, particularly for model compression. This paper presents a systematic layer-wise sensitivity analysis of the Qwen3.6-35B-A3B model (40 MoE layers, 256 experts per layer, top-8 routing) using magnitude-based expert masking on the XLCoST cross-lingual code translation benchmark. We conduct a multi-phase study spanning 100, 300, and 500 prompt evaluation scales across three H100 GPU servers. Our central finding is that layer sensitivity is strongly depth-dependent: early layers (0-9) and middle layers (10-29) are highly fragile to expert masking, while late layers (30-39), and especially very-late layers (35-39), tolerate aggressive masking of low-magnitude experts. Flat all-layer masking at 30% retains only 150/300 Good+Similar outputs at 300-prompt scale, whereas late-focused policies retain 249-255/300 while masking 640-1,145 experts. On a later 500-prompt held-out validation slice, the narrow very-late policy (layers 35-39 @ 50%) achieves the strongest quality/masked-expert tradeoff among tested candidates, retaining 419/500 Good+Similar outputs while masking only 640 of 10,240 total experts. We additionally characterize top-k routing width reduction from 8 to 6 active experts per token, which shows a large observed wall-clock reduction on a 100-prompt probe with no Good+Similar loss, though it does not yet compose cleanly with aggressive expert masking. These findings provide an empirical foundation for depth-aware MoE expert masking and establish a practical path toward physical weight surgery, activation-based expert scoring, and training-based recovery.

4. [Measuring Cross-Task Behavioral Consistency in Language Model Agents](https://arxiv.org/abs/2608.13598)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13598v1 Announce Type: new Abstract: Agent evaluation relies almost entirely on outcome metrics such as success rate, which capture whether an agent succeeds but not how consistently it behaves. We argue that behavioral consistency across tasks is a distinct and measurable property, and we introduce the Behavioral Consistency Metric (BCM) to quantify it. BCM trains a model to predict task success from behavioral features of agent execution traces, derives a per-trajectory feature-attribution vector, and measures the mean pairwise similarity of these vectors within an agent system. Across roughly 9,000 trajectories from six language model agents on software engineering tasks, our central finding is that cross-task and within-task consistency are distinct axes that can diverge: some systems are locally reproducible, behaving similarly on repeated attempts at one task, yet globally fragmented, with no stable strategy across different tasks, while others are consistent at both scales. Prior work measures only same-task reproducibility and so cannot observe this separation. We further find that consistency is not reducible to success rate, since systems with comparable success can differ sharply in consistency, and that the frontier-versus-open-source consistency gap persists under a within-task control that holds task difficulty constant. We position BCM as a process-level reliability signal that complements outcome metrics, and we are explicit about the conditions under which it is meaningful.

5. [feng72013-ui/Multimodal-Agentic-RAG-for-Science](https://github.com/feng72013-ui/Multimodal-Agentic-RAG-for-Science)
   - Source: GitHub repository search; Group: Open source; Score: 5.01; Date: 2026-08-16T14:30:20Z; Popularity: 6 stars
   - Summary: 面向科研场景的多模态多智能体 RAG 助手，支持将 PDF、图片和文本构建为领域知识库，并通过智能体协作完成文献问答、图表理解、论文总结、方法对比、文献调研和科研创意评审。

6. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

7. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

8. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

9. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

10. [Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 13 Aug 2026 17:16:04 GMT

11. [Modular Cognitive Architecture Emerges in Large Language Models](https://arxiv.org/abs/2608.13567)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13567v1 Announce Type: new Abstract: The human brain exhibits a striking degree of functional specialization, with distinct networks supporting language, formal reasoning, reasoning about other minds, and reasoning about the physical world. Is this modular organization a fundamental principle of how intelligent systems must be built, or an evolutionary accident specific to biological brains? Here, we test whether a similar organization emerges in Large Language Models--another class of intelligent systems created through a very different optimization process. Using circuit analyses across N=46 tasks spanning four cognitive domains (language, formal reasoning, social reasoning, physical reasoning), we find that LLMs develop a modular architecture that mirrors the human brain: tasks drawing on the same network in humans recruit overlapping neurons in LLMs, whereas tasks drawing on different networks recruit distinct neurons. The convergent emergence of modularity in brains and neural networks suggests that it may be a fundamental property of intelligent systems.

12. [AI Evaluation Should Work With Humans](https://arxiv.org/abs/2608.13577)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13577v1 Announce Type: new Abstract: This position paper argues that the dominant paradigm of AI evaluation (which focuses on superhuman autonomous performance and so implicitly targets the goal of replacing humans) is guiding AI development in the wrong direction. Instead, the AI community should pivot to evaluating the performance of human--AI teams. We argue that this collaborative shift will foster AI systems that act as true complements to human capabilities and therefore lead to far better societal outcomes than will the current process.

13. [Stable Miscalibration in Large Language Models: A Practical View of High-Confidence Errors](https://arxiv.org/abs/2608.13591)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13591v1 Announce Type: new Abstract: High-confidence errors in large language models are often treated as evidence of fragile internal inference. We study a different possibility: stable miscalibration, where a confident wrong answer remains locally stable under small perturbations. We combine two diagnostics: a label-aware output-level audit score that ranks domains by confidence variation and overconfident mistakes under a forced-answer baseline, and an internal sensitivity probe that measures hidden-state movement. On a multi-domain binary factual audit set, this audit score tracks where abstention-aware self-critique reduces decision loss, although direct labeled baselines rank the same gain more strongly. Internally, self-critical prompting consistently reduces hidden-state sensitivity across layers in three open-weight models. This supports prompt-induced local stabilization rather than a purely output-level abstention pattern, but it does not imply calibration: audit-defined overconfident errors are not clearly more locally sensitive than confidently correct answers, so some high-confidence errors may be stable and miscalibrated rather than simply fragile.

14. [Cross-Disciplinary Taxonomy and Modeling of Misunderstanding Generation, Amplification, and Detection, from Pragmatics to AI Agents](https://arxiv.org/abs/2608.13604)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13604v1 Announce Type: new Abstract: Detection of misunderstanding is an urgent problem to solve because communication has moved away from real-time, in-person interaction and is increasingly handled by AI-mediated channels. This shift cuts communicators off from the resources repair depends on faster than new means of detection are being built. In this paper we analyse misunderstanding as a layered process in which a divergence is generated, may then be amplified, and is either detected and repaired or left to persist unnoticed. Consolidating accounts from nine fields of research that do not ordinarily cite one another, we identify eleven exact failure modes and show that each operates at a specific point in a communicative process rather than anywhere within it. Those points give eight analytical layers, derived from the literature rather than adopted from an existing model. Eight of the mechanisms primarily generate a divergence, two primarily amplify one already present, and one governs whether a divergence is detected and repaired. We model the eight layers formally, extending information and communication theory from the transmission of signals to the reconstruction of meaning, and we supply a source-by-source evidence matrix that makes every rating auditable, a coding manual, and nine analysed dialogue cases. No prior classification of misunderstanding both locates mechanisms at points in the process and types them by function.

15. [From BERT to Frontier Agents: Eight Years of Language-Model Progress, the Collapse of the Capability-Cost Curve, and the Rise of Task-Targeted Models](https://arxiv.org/abs/2608.13675)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13675v1 Announce Type: new Abstract: Between October 2018 and July 2026 AI models progressed from simple systems like BERT to massive agents that solve complex math and write software. The ability to resolve real coding issues improved by nearly six times per year since late 2024. During this time costs dropped sharply with OpenAIs budget model GPT 5 point 6 Luna matching flagship capabilities for just one to six dollars per million tokens beating older versions at a fraction of the price. Top performance is now split across specialized models as Claude Opus 5 leads in frontend coding Claude Fable 5 excels at repository level coding and GPT 5 point 6 Sol dominates terminal tasks. In a grade school math test using the Qwen 2 point 5 model basic methods solved 58 of 100 problems while advanced sampling solved up to 79. A confidence ranking tool correctly identified 47 right answers in its top 50 choices proving highly useful for sorting tasks with all research materials made fully public.

16. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.71; Date: 2026-08-17T13:57:01Z; Popularity: 2,713 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

17. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

18. [The Defender’s Window](https://openai.com/index/the-defenders-window)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 17 Aug 2026 05:30:00 GMT
   - Summary: AI is reshaping cybersecurity for attackers and defenders alike. Learn how OpenAI is strengthening its defenses and what security teams can do now.

19. [OpenAI joins PORTS-Pike project](https://openai.com/index/openai-joins-ports-pike-project)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 17 Aug 2026 05:00:00 GMT
   - Summary: OpenAI joins PORTS-Pike project, expanding community investment and supporting thousands of Southern Ohio jobs

20. [New policy ideas for the Intelligence Age](https://openai.com/index/new-policy-ideas-for-the-intelligence-age)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 17 Aug 2026 03:15:00 GMT
   - Summary: OpenAI funds 14 independent projects exploring new AI policy ideas to expand economic opportunity and strengthen societal resilience in the Intelligence Age.

21. [The builder’s guide to GPT‑5.6](https://openai.com/index/builders-guide-to-gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 11:00:00 GMT
   - Summary: Learn how startups use GPT-5.6 to build faster, more cost-efficient AI agents with smarter model selection and new Responses API capabilities.

22. [Previewing Ultrafast mode: GPT-5.6 Sol at up to 14X the speed](https://openai.com/index/previewing-ultrafast)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 10:00:00 GMT
   - Summary: Preview Ultrafast, a new OpenAI API service tier that runs GPT-5.6 Sol up to 14× faster. Powered by Cerebras, it delivers up to 750 output tokens per second.

23. [OpenAI appoints Dali Rajic as Chief Revenue Officer](https://openai.com/index/dali-rajic-chief-revenue-officer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 09:00:00 GMT
   - Summary: OpenAI appoints Dali Rajic as Chief Revenue Officer to lead its global revenue organization and help businesses realize the full value of AI.

24. [From assistance to execution: How enterprises put AI to work](https://openai.com/index/how-enterprises-put-ai-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 06:00:00 GMT
   - Summary: OpenAI research reveals how enterprises are adopting agentic AI, using ChatGPT and Codex, and how frontier firms are pulling ahead in AI adoption.

25. [How RingCentral builds AI-native work from engineering to ops](https://openai.com/index/ringcentral)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 00:00:00 GMT
   - Summary: See how RingCentral uses ChatGPT Work and Codex to accelerate AI product development and centralize operational intelligence across engineering and operations.

26. [Testing ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 11 Aug 2026 10:00:00 GMT
   - Summary: OpenAI begins testing ads in ChatGPT to support free access, with clear labeling, answer independence, strong privacy protections, and user control.

27. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

28. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

29. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

30. [State of Open Models: Summer 2026 Observations](https://huggingface.co/blog/state-of-open-models-summer-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 GMT

31. [What We Learned by Reproducing 2,200 papers from ICML](https://huggingface.co/blog/icml-2026-open-reproductions)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 GMT

32. [Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis](https://huggingface.co/blog/allenai/olmoearth-embeddings)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 16:14:36 GMT

33. [LFM2.5-VL-3B for Better and Faster Vision Capabilities for the Edge](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 14:00:51 GMT

34. [Thinking of ACE? We Can Do It with Fewer Tokens](https://huggingface.co/blog/ibm-research/altk-evolve-sldd)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 11 Aug 2026 13:37:10 GMT

35. [Build Low-Latency Multilingual Voice Agents: Open Weights & Full Deployment Control with NVIDIA Magpie TTS](https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 16:25:36 GMT

36. [Making Knowledge Distillation Cheap Enough to Run at Scale](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 10:05:36 GMT

37. [Meta is back with Muse Glimmer: local, agentic, multimodal, and open source](https://huggingface.co/blog/muse-glimmer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT

38. [Baseten on Hugging Face Inference Providers 🔥](https://huggingface.co/blog/baseten)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 06 Aug 2026 00:00:00 GMT

39. [A Year in LLM Serving: Workload Evolution, Caching and Load-Balancing](https://arxiv.org/abs/2608.13573)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13573v1 Announce Type: new Abstract: Large Language Model (LLM) serving has become a critical cloud workload, and realistic traces are essential for motivating and benchmarking serving systems. However, existing LLM serving workload studies remain limited in scale and scope. They often observe short time periods and provide limited visibility into how users interact with models in production. As a result, they do not fully capture how LLM serving workloads evolve over time or how user-model interactions shape production traffic. In this work, we further the understanding of real-world LLM serving workloads through both a global characterization and a longitudinal study of a one-year production trace from Chutes. Unlike prior studies, our trace captures full production behavior across many models and users, including both popular and long-tail models. We analyze the workload from aggregate, temporal, model-level, and user-level perspectives, revealing workload evolution and user-model structure that are typically hidden behind aggregate views. To support future research, we will release the full one-year trace with the paper, enabling downstream studies of production behavior without relying on sampled or synthetically generated workloads.

40. [Agentao: A Governed Local-First Runtime for Tool-Using LLM Agents](https://arxiv.org/abs/2608.13574)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13574v1 Announce Type: new Abstract: LLM agents increasingly operate as execution systems that invoke tools, modify local state, use persistent memory, and interact with external protocols. These capabilities make agents useful, but they also introduce risks related to over-privileged actions, weak auditability, prompt injection, tool poisoning, and uncontrolled side effects. This paper presents Agentao, a governed local-first runtime for tool-using LLM agents. Agentao separates model-generated action proposals from host-authorized execution through a layered architecture consisting of host-facing surfaces, a host contract, a runtime core, a permission-mediated tool system, and supporting subsystems for memory, replay, plugins, skills, sub-agents, and protocol integration. We describe the motivation, threat model, design goals, governance model, execution pipeline, and structured event interface of the system. Agentao does not provide formal safety guarantees; rather, it demonstrates how permissions, state, protocol boundaries, and execution traces can be made explicit runtime abstractions for building agents that are more governable, inspectable, and suitable for host-controlled local environments. The code is publicly available at https://github.com/jin-bo/agentao.

41. [Active Perception for Embodied Disambiguation](https://arxiv.org/abs/2608.13605)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13605v1 Announce Type: new Abstract: Natural language provides robots with a flexible task interface, but target ambiguity in embodied environments arises not only from user intent; it can also result from missing taskrelevant physical evidence in the current observation. Existing interactive disambiguation methods primarily obtain additional information by asking the user, whereas occlusion, restricted viewpoints, unreadable text, and unobserved targets require the robot to actively change its observation. We propose an active-perception framework for embodied target disambiguation that uses active observation as the backbone for information acquisition and uses a vision-language model to decide, on the basis of accumulated visual evidence and interaction information, whether to continue observing, request clarification, or complete target selection. Active observation can both directly recover missing discriminative evidence and reveal object names, labels, and semantic attributes, thereby improving user clarification when it remains necessary. Real-robot experiments show that the framework combines physical information acquisition and userintent clarification within a unified embodied disambiguation process.

42. [Training-Free Knowledge Transfer Across Model Scales through Activation-Guided Pruning](https://arxiv.org/abs/2608.13596)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13596v1 Announce Type: new Abstract: Heterogeneous model fusion seeks to combine models that differ in tasks, initializations, architectures, or scales. We study an underexplored cross-scale setting: improving a small recipient language model with a stronger donor despite substantial architectural mismatch. We ask whether useful capabilities can be transferred without explicit neuron-wise semantic alignment. Building on the observation that truncating a large model to a smaller architecture and injecting it with a tiny mixing weight can already improve the recipient, we propose Activation-Prune-Merge (APM), an activation-guided framework for cross-scale fusion. APM constructs task-conditioned activation maps on the donor, selects salient layers, hidden dimensions, attention heads, and MLP neurons to prune it to the recipient architecture, and injects the resulting donor slice into the original recipient using a micro interpolation coefficient. This formulation treats the donor as a source of concentrated functional components rather than requiring precise structural transplantation. Across 16 benchmarks spanning reasoning, mathematics, code generation, instruction following, and classification, APM improves the overall average accuracy from 55.5% to 60.6% over the original 3B recipient. RTE accuracy increases from 64.3% to 82.3%, QNLI from 52.3% to 65.7%, and BoolQ from 70.8% to 79.2%. Analyses of injection ratios and sequential multi-stage fusion further suggest that activation-guided extraction improves the quality of the transferable donor slice while preserving the small-ratio fusion regime. These results provide evidence that cross-scale heterogeneous fusion can succeed without explicit semantic alignment when the donor contribution is sufficiently concentrated and carefully selected.

43. [Hard Cases, Bad Labels: Testing Error Exposure and Error Location in Uncertainty Sampling Under Bounded Label Noise](https://arxiv.org/abs/2608.13601)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13601v1 Announce Type: new Abstract: Active learning can reduce labeling cost by selecting informative examples, but the most uncertain examples may also be the hardest to label correctly. This study tests whether uncertainty sampling fails because it acquires more corrupted labels or because errors concentrated in difficult regions are especially harmful. Margin-based uncertainty sampling is compared with random sampling under clean labels, random classification noise (RCN), and bounded difficulty-dependent noise on three public binary tabular datasets. The design uses 100 paired seeds, nine expected noise rates from 0 to 0.30, annotation budgets from 20 to 120, and logistic regression with regularization re-selected by cross-validation at every budget. An exposure-matched RCN control aligns mean final acquired corruption, while a clean-label extension reaches budget 400. Under clean labels, uncertainty sampling improved normalized balanced-accuracy area under the learning curve by 1.09 to 1.77 percentage points on all datasets. Difficulty-dependent noise reduced this advantage more than RCN at six of eight rates on Breast Cancer Wisconsin, but at no tested rate on Banknote Authentication or MAGIC Gamma Telescope. Exposure-matched analyses found no corrected evidence for a universal additional penalty from structured error location. On clean MAGIC data, uncertainty sampling improved balanced accuracy while reducing average precision and true-positive rate at fixed false-positive rates. Thus, uncertainty sampling was label-efficient, but its apparent robustness depended on dataset, budget, noise structure, and evaluation metric.

44. [EEG-PRISM: Physiologically-Grounded Interpretability of Predictions by EEG Foundation Models](https://arxiv.org/abs/2608.13676)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13676v1 Announce Type: new Abstract: Objective: Foundation models represent the next advancement in AI for EEG analysis; however current explainable AI techniques provide attribution scores in the time-channel input space, which is mismatched to clinical intuition about EEG. Thus, there is a critical need for a universal method that can extend the interpretability of any foundation model to alternative and physiologically relevant domains without modifying or retraining the underlying model. Methods: EEG-PRISM leverages linear transformations and established backpropagation rules to map time-channel attribution scores into alternative domains. We derive mappings to the frequency domain via an invertible DFT and to the source domain via an approximately invertible EEG generative model. We evaluate EEG-PRISM in simulated and real data, assessing recovery of ground-truth phenomena across domains with five foundation models and four AI explainers. Results: In simulation, EEG-PRISM achieves near-perfect spectral recovery and 69.2% spatial accuracy. In epilepsy, EEG-PRISM correctly determines that delta-theta activity is most salient and correctly localizes the seizure onset region with 50% accuracy. In autism, EEG-PRISM localizes the predictive delta-alpha biomarkers to frontal and temporal regions, consistent with prior work. Conclusion: EEG-PRISM is a theoretically-grounded post-hoc attribution method with accurate mapping into the spectral and spatial domains. It supports window-level analysis of transient events (e.g., seizures) and group-level identification of clinically relevant biomarkers (e.g., autism), thus advancing interpretable EEG foundation models. Significance: This work enables physiologically-grounded interpretation of EEG foundation models and supports clinically relevant insights such as event localization and biomarker identification.

45. [Learning Spin Hamiltonians from Terahertz Two-Dimensional Coherent Spectroscopy](https://arxiv.org/abs/2608.14460)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14460v1 Announce Type: new Abstract: Effective Hamiltonians connect microscopic interactions to measurable collective behavior in quantum materials, but determining their parameters directly from experiment remains a challenging inverse problem. We introduce a supervised machine-learning framework that infers Hamiltonian parameters from nonlinear terahertz two-dimensional coherent spectra. A calibrated forward model generates spectra from candidate Hamiltonians, a common preprocessing pipeline maps simulated and experimental spectra into the same representation, and a neural network learns the inverse map from spectral fingerprints to microscopic parameters. We demonstrate the approach for rare-earth orthoferrites using a two-sublattice Landau--Lifshitz--Gilbert spin model with exchange, Dzyaloshinskii--Moriya interaction, anisotropies, and damping. Synthetic benchmarks show that nonlinear spectra encode parameters beyond those fixed by the linear response, with inference accuracy tracking the physical spectral sensitivity and robustness against noise improved by using multiple inter-pulse delays. Applied to experimental THz-2DCS data from Sm$_{0.4}$Er$_{0.6}$FeO$_3$, the inferred parameters yield physically reasonable forward simulations, while remaining discrepancies identify limitations of the reduced model. These results establish THz-2DCS as a data-rich platform for effective-Hamiltonian inference and model refinement, enabling experimentally driven identification of microscopic interactions while providing a foundation for understanding, predicting, and ultimately controlling the emergent properties of quantum materials.

46. [Accurate and efficient calculation of atomic forces in solids with non-self-consistent hybrid functionals](https://arxiv.org/abs/2608.14147)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14147v1 Announce Type: cross Abstract: Hybrid functionals are routinely employed self-consistently within the generalized Kohn-Sham framework. The evaluation of the nonlocal Fock exchange operator makes hybrid functional calculations computationally expensive, in particular with plane-wave basis sets. Here, we investigate the advantages of non-self-consistent hybrid functional calculations, focusing on the evaluation of atomic forces. The analytical force terms that arise due to non-self-consistency are computed using density functional perturbation theory (DFPT), as implemented within the Quantum ESPRESSO distribution. A non-self-consistent hybrid force calculation thus consists of self-consistent DFPT calculations with a local or semi-local functional and a single evaluation of the Fock exchange operator. The overall computational cost is, thereby, reduced in general, especially for solids that require a dense Brillouin-zone sampling. Moreover, results for structural parameters are barely affected by self-consistency, and vibrational frequencies are typically agreeing within 0.5%, thus making non-self-consistent calculations an interesting alternative.

47. [Electrostatic Phenomenology Benchmarks for Machine-Learned Interatomic Potentials in Electrochemistry: Beyond the Energy-Force Metric](https://arxiv.org/abs/2608.14153)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14153v1 Announce Type: cross Abstract: Accurate treatment of long-range interactions in machine learning interatomic potentials (MLIPs) is essential for electrochemical simulations. However, aggregate energy and force errors alone are insufficient to establish an MLIP's physical accuracy since they do not detect qualitative inconsistencies in the model such as the prediction of image-charge attraction, dielectric screening, or charge transfer. We introduce a benchmark suite EPhEct (Electrostatic Phenomena for Electrochemistry) of focused test cases designed to evaluate MLIPs on electrochemically relevant physical phenomena. The tests probe for image-charge attraction at a metal electrode, the splitting between longitudinal and transverse optical phonons as a probe of ionic and electronic screening, the dipole moment of interfacial water, and Fermi-level pinning during ion discharge. These tests establish a qualitative diagnostic routine complementary to aggregate energy-force metrics.

48. [Efficient simulation of second-order phase transitions in quantum anharmonic materials](https://arxiv.org/abs/2608.14292)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14292v1 Announce Type: cross Abstract: When a crystal undergoes a second-order structural phase transition, such as in ferroelectrics, Peierls, and charge-density waves, the diverging fluctuations of the order parameter lead to the break- down of the standard phonon quasiparticle picture. Simulating these highly anharmonic regimes is notoriously challenging, as methods such as molecular dynamics suffer from a critical slowdown near the transition point, while the harmonic approximation fails dramatically at saddle points of the energy landscape stabilized by quantum or thermal ionic fluctuations. This work introduces a new approach, based on the variational free-energy principle, to predict critical long-range behavior and dynamical spectra in strongly anharmonic systems, even when quantum ionic fluctuations dominate. The proposed framework builds upon the stochastic self- consistent harmonic approximation but reduces its computational scaling with the number of atoms, N, from O(N^6) to O(N^2) and the memory requirement from O(N^4) to O(N). We benchmark the method on the prototypical lead-free metal-halide perovskite CsSnI3, a promising candidate for photovoltaic engineering, simulating its phase stability and Raman spectrum near the phase transition, where the breakdown of the quasiparticle picture becomes evident. We demonstrate the effectiveness of the method by computing the full free-energy Hessian and the critical temperature in a supercell with 1080 atoms. Such simulations would have required tens of thousands of years with the legacy approach; it is now feasible in a few hours on consumer hardware.

49. [Coupling-Aware Vanka Smoothing for Multigrid Preconditioning of the Implicit Immersed Boundary Equations](https://arxiv.org/abs/2608.14310)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14310v1 Announce Type: cross Abstract: The immersed boundary (IB) method models fluid--structure interaction using the natural Lagrangian and Eulerian formulations of structural mechanics and fluid dynamics, respectively, but explicit time discretization of the IB force imposes a stiffness-dependent upper bound on the time-step size. Treating these forces implicitly removes this restriction, but the resulting coupled linear systems become increasingly difficult to solve as the structural stiffness increases. Algebraically eliminating the Lagrangian degrees of freedom yields a reduced Eulerian velocity--pressure IB system. Here we introduce a coupling-aware Vanka (CAV) smoothing strategy to enable effective multigrid preconditioning of this system. CAV patches are built as unions of standard pressure-centered Vanka patches, with the graph of the Eulerian elasticity matrix determining which patches are combined. Under grid refinement, CAV patch sizes remain bounded, and the computational cost of each multigrid cycle thereby grows linearly with the number of Eulerian degrees of freedom. Tests using target-point, membrane, and beam force laws show that CAV-preconditioned FGMRES reduces the relative residual by ten orders of magnitude in $9--15$ iterations, with little growth under grid refinement. In a nonlinear benchmark modeling flow past a flexible fiber, the average number of FGMRES iterations per Newton solve increases only from $8.6$ to $9.5$ as the Eulerian grid is refined from $32\times32$ to $256\times256$ cells. To our knowledge, CAV provides the first robust multigrid strategy for time-dependent implicit IB formulations.

50. [Direct determination of layer anomalous Hall conductivity using uniaxial Wannier functions](https://arxiv.org/abs/2506.01160)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2506.01160v3 Announce Type: replace-cross Abstract: We propose a method for computing layer anomalous Hall conductivity (LAHC) in real space by integrating the Fukui-Hatsugai-Suzuki method with hybrid Wannier functions localized along a single axis. To validate the method, we calculated the LAHC of axion-insulating MnBi$_2$Te$_4$ and confirmed the agreement between the sum of LAHC on the surface and the surface AHC previously reported. We further applied the method to antiferromagnetic Mn$_2$Bi$_2$Te$_5$ and examined the dependence on the magnetic structure of LAHC, identifying cases with and without axion insulating behavior. This layer-resolved analysis offers a powerful tool for studying topological transport in complex materials, including heterostructures, and may guide the design of future devices based on the anomalous Hall effect with precise layer control.

51. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.72; Date: 2026-08-17T09:17:38Z; Popularity: 1,723 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

52. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-17T09:00:21Z; Popularity: 479 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

53. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.34; Date: 2026-08-16T12:51:20Z; Popularity: 337 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

54. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-15T04:11:22Z; Popularity: 229 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

55. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

56. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

57. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

58. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

59. [Robust XGBoosting for Regression](https://arxiv.org/abs/2608.13590)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13590v1 Announce Type: new Abstract: XGBoost is a very popular and powerful method for prediction. It iteratively fits simple decision trees to the residuals of the previous step. An efficient and scalable implementation is available. The standard loss function for XGBoost is the quadratic loss, but a Huber loss can also be used. In this paper, we study the robustness of XGBoost and show that its performance can be affected by vertical outliers and leverage points. To address this, we explore alternative loss functions, based on M-, S-, and {\tau} -estimators from robust regression. Our results indicate that a two-step procedure, referred to as MM-XGBoost, provides the best trade-off between robustness and prediction accuracy.

60. [Robust Dual-Model Collaborative Random Vector Functional Link Network](https://arxiv.org/abs/2608.13628)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13628v1 Announce Type: new Abstract: Random vector functional link (RVFL) networks are lightweight and fast neural models that offer efficient training and strong generalization through randomized hidden-layer weights and direct input-output connections. However, conventional RVFL models are sensitive to noisy labels, outliers, and imbalanced data, which limits their performance in real-world applications. To address these challenges, we propose the kernel risk-sensitive mean p-power based RVFL (KRPRVFL) model, which integrates the computational efficiency of RVFL with the robustness of the kernel risk-sensitive mean p-power (KRP) criterion. By replacing the standard least-squares objective with a KRP-based loss, KRPRVFL adaptively reduces the influence of corrupted or unreliable samples during training, resulting in improved stability and generalization. Additionally, a collaborative learning mechanism is introduced to enable adaptive interaction among model components, further enhancing robustness in complex and noisy environments. The proposed framework also leverages kernel-induced feature mapping to capture nonlinear relationships without requiring explicit hidden-layer selection, maintaining both efficiency and scalability. Extensive experiments on UCI and KEEL benchmark datasets demonstrate that KRPRVFL consistently outperforms baseline models in terms of accuracy, robustness, and statistical significance, highlighting its effectiveness as a fast, scalable, and reliable solution for challenging classification tasks.

61. [Linear-response time-dependent density-functional theory with local range separation: Core and valence resonances of the neon atom](https://arxiv.org/abs/2608.14052)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14052v1 Announce Type: cross Abstract: We investigate range-separated hybrids (RSHs) and locally range-separated hybrids (LRSHs) for linear-response time-dependent density-functional theory (TDDFT) Sternheimer calculations of the photoionization spectrum of the Ne atom. This system constitutes a stringent test for approximate exchange-correlation treatments because it exhibits both valence and core resonances with very different energy scales. Building on previous work employing a simple one-parameter local range-separation function, we assess here a more flexible two-parameter range-separation function designed to improve the high-density limit. We compare photoionization spectra and resonance parameters obtained with RSHs and LRSHs. We find that the LRSH approach with the two-parameter range-separation function provides an overall satisfactory description of the photoionization spectrum, including energies for both valence and core resonances. The lifetimes of the 2s $\rightarrow$ np valence resonances are also reasonably reproduced since their decay does not involve double excitations. In contrast, the lifetimes of the 1s $\rightarrow$ np core resonances are overestimated by orders of magnitude because their Auger decay channels involve double excitations that are absent in adiabatic, single-determinant TDDFT. Obtaining more accurate resonance widths within linear-response range-separated TDDFT would require using multideterminant schemes and/or adding a frequency-dependent response kernel.

62. [Quantifying internal variability in large-ensemble climate data with the Wasserstein distance](https://arxiv.org/abs/2608.14455)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14455v1 Announce Type: cross Abstract: Quantifying forced and internal variability in climate data is fundamental to detecting the climate change signal and assessing uncertainty in climate projections. We propose a metric that quantifies the relative magnitude of internal variability in single-model initial-condition large ensembles (SMILEs). We measure forced and internal variability by two 1-Wasserstein distances, a form of optimal transport cost. The proposed metric is the distance for internal variability divided by the sum of the two. Computing this ratio requires only sorting the samples and differencing the resulting quantiles, with no additional parameters. The metric reflects the entire distribution shape and applies to non-Gaussian variables, because the 1-Wasserstein distance quantifies the difference between any two probability distributions. We validate the metric with synthetic climate data from Gaussian, uniform, and lognormal distributions. Unlike the two existing metrics, the proposed metric gives stable estimates irrespective of the distribution shape and the presence of outliers, provided that the ensemble has about 40 members or more. We then apply the proposed and existing metrics to the 2 m air temperature and total precipitation of the Community Earth System Model Large Ensemble (CESM-LE) under two different forcing scenarios. All the metrics indicate that the relative contribution of internal variability decreases as the forcing increases, but the proposed metric shows this response most clearly. The 1-Wasserstein distance thus provides a simple and useful tool for analyzing large-ensemble datasets.

63. [GPU implementation of mixed quantum-classical Liouville molecular dynamics without momentum jump](https://arxiv.org/abs/2608.14544)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.14544v1 Announce Type: cross Abstract: We implemented on GPU a mixed quantum-classical Liouville molecular dynamics simulation based on a momentum-jump-free theory. The trajectory spawning that was previously implemented on CPU for sampling enhancement was eliminated to avoid the overhead of thread divergence and dynamic memory allocation on the GPU. This achieved a speedup of an order of magnitude compared to the CPU computation with spawning, as well as a linear scaling with respect to the number of sampling trajectories.

64. [Uncertainty quantification of reacting fluids interacting with porous media using a hybrid physics-based and data-driven approach](https://arxiv.org/abs/2510.03649)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 17 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2510.03649v2 Announce Type: replace Abstract: Accurately simulating coupled physical processes under uncertainty is essential for reliable modeling and design in performance-critical applications such as combustion systems. Ablative heat shield design, as a specific example of this class, involves modeling multi-physics interactions between reacting flows and a porous material. Repeatedly evaluating these models to quantify parametric uncertainties would be prohibitively computationally expensive. In this work, we combine physics-based modeling using a single-domain approach with data-driven reduced-order modeling to quantify uncertainty via the operator inference method. The detailed physics-based simulations reproduce the measured surface temperature of an object exposed to high-enthalpy flow in a plasma wind tunnel experiment within 5%. We further use the model to demonstrate the effect of complex flow situations on the dynamic interactions between the porous heat shield material and the surrounding gas. The parametric reduced-order model, built on physics-based simulation data, successfully captures variations in quantities of interest resulting from changes in the permeability and heat transfer coefficient of the porous material in two separate studies: solid fuel combustion and emission of buoyant reacting plumes in quiescent air and ablation in a wind tunnel.

65. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

66. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-10T16:05:18Z; Popularity: 718 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

67. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.67; Date: 2026-08-16T00:55:30Z; Popularity: 669 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

68. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.17; Date: 2026-08-16T14:47:27Z; Popularity: 171 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

69. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-11T20:05:29Z; Popularity: 111 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Don't Claim Benchmark-Oriented Optimization Improves General Coding Capability -- Diverse Evaluation Is Required

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.13566

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
