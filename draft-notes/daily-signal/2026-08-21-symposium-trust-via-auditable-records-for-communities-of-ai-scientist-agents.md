# Daily signal sidecar - 2026-08-21

## Selected Signal

- Title: Symposium: Trust via Auditable Records for Communities of AI Scientist Agents
- URL: https://arxiv.org/abs/2608.19511
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Symposium: Trust via Auditable Records for Communities of AI Scientist Agents
- Primary source: https://arxiv.org/abs/2608.19511
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

Total candidates reviewed after duplicate-source filtering: 68

1. [Symposium: Trust via Auditable Records for Communities of AI Scientist Agents](https://arxiv.org/abs/2608.19511)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19511v1 Announce Type: new Abstract: Symposium is a formal framework and practical implementation to record the operation of AI agents deployed by small scientific research communities. Symposium provides long-term, immutable histories of agent-driven research activity, leaving auditable trails of analyses, hypotheses, data, and scientific discourse. This shared record of published artifacts enables agents to build on prior work and preserves the evidence researchers and agents need to make purpose-dependent trust assessments. Symposium captures scientific argument, including structured claims, fine-grained evidence citations, assumptions, and explicit declarations of what material may and may not be used as evidence. Symposium differs from AI co-scientist agents or integrated AI research environments; it is a framework that separates a scientific community's durable history from the agents and other systems that operate on that history. It assumes that a community will use diverse AI systems in a rapidly evolving environment. A working implementation of the publication infrastructure, agent prompt components, and documentation are provided to enable users to rapidly set up and run their own Symposium community.

2. [Robust Metaheuristics under Uncertainty for Berth Allocation and Quay Crane Assignment: A Review](https://arxiv.org/abs/2608.19214)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19214v1 Announce Type: new Abstract: The berth allocation and quay crane assignment problem (BACAP) is a representative port-terminal scheduling problem in maritime transportation and freight logistics, where vessel arrivals, berth positions, service durations, and quay?crane availability are tightly coupled. Under uncertainties such as arrival deviations, handling-time fluctuations, and resource disruptions, schedules optimized under nominal assumptions may become fragile during execution, motivating the study of robust metaheuristic optimization for BACAP in port-terminal operations. Although population-based metaheuristics have been widely used for BACAP and related port-scheduling problems, existing studies remain fragmented in their uncertainty repre?sentations, robustness criteria, search mechanisms, and empir?ical evaluation protocols. To the best of our knowledge, this paper provides the first focused review dedicated to robust population-based metaheuristics for BACAP under uncertainty. We first summarize uncertainty sources and information repre?sentations in BACAP, and then organize existing methods from a mechanism-oriented perspective, covering solution representation and decoding, robust evaluation and selection, robustness-guided search dynamics, and feasibility preservation and recovery. We further present a benchmark suite for uncertain BACAP to support controlled empirical comparison and report illustrative baseline results by combining representative metaheuristics with different robustness strategies. Finally, we identify open chal?lenges related to benchmark extension, robustness-aware search design, time-adaptive robustness, and non-stationary uncertainty.

3. [feng72013-ui/Multimodal-Agentic-RAG-for-Science](https://github.com/feng72013-ui/Multimodal-Agentic-RAG-for-Science)
   - Source: GitHub repository search; Group: Open source; Score: 5.01; Date: 2026-08-18T07:58:35Z; Popularity: 7 stars
   - Summary: 面向科研场景的多模态多智能体 RAG 助手，支持将 PDF、图片和文本构建为领域知识库，并通过智能体协作完成文献问答、图表理解、论文总结、方法对比、文献调研和科研创意评审。

4. [How NVIDIA scales expertise with ChatGPT Work](https://openai.com/index/nvidia/chatgpt-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 18 Aug 2026 00:00:00 GMT
   - Summary: NVIDIA teams use ChatGPT Work to reduce manual tasks, connect fast-moving signals, and scale successful workflows globally.

5. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

8. [Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 13 Aug 2026 17:16:04 GMT

9. [Bounded Sovereignty and the Control Tax: Pricing AI Oversight When the Deployer Does Not Own the Model](https://arxiv.org/abs/2608.19216)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19216v1 Announce Type: new Abstract: AI control research asks how to deploy models safely even when they may be misaligned, but many control protocols assume that the deployer can instrument the model and its surrounding pipeline. That assumption often fails for regulated organisations using frontier models through APIs or managed endpoints, where the deployer may control the business process but not the model weights, serving infrastructure, internal traces, update process, or full interaction logs. This paper introduces bounded sovereignty: partial technical and contractual access across the data, model, infrastructure, and interaction layers of the AI stack. It argues that these access conditions determine which control protocols can be executed in practice. The paper contributes a four-layer access typology, a protocol-by-layer requirements matrix, and the concept of sovereignty discount cost: the part of the control tax spent substituting for missing access through contracts, architecture, audit, vendor assurance, residual risk, or reduced system scope. It also reports a synthetic access-ablation experiment over 1.35 million synthetic case simulations and interprets the findings through an anonymised national-payments-infrastructure scenario. The experiment is not real-world payment-system evidence; it is a construct-validity exercise. The results show that complete logs improve diagnosis, a pre-execution gateway enables intervention, trace access and model-version control strengthen post-incident explanation, and scope restriction can improve safety while reducing usefulness. Control protocols proposed as general safety solutions should therefore state their access assumptions explicitly.

10. [Air Traffic Control Using Large Language Models: Prompt Engineering, Architecture, and Evaluation](https://arxiv.org/abs/2608.19299)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19299v1 Announce Type: new Abstract: Air traffic control (ATC) communication is a safety-critical dialogue that remains largely human-driven even as other parts of air traffic management have been semi-automated. In this article, we experimentally evaluate whether large language models (LLMs) can generate operationally realistic ATC transmissions. An experimental general-aviation flight flying over the San Francisco "Bay Tour" route is hand-transcribed and used as ground truth (P0). Through a pilot-in-the-loop process we design five prompt structures (P1-P5) of increasing constraint and embed them in a stateful multi-turn pipeline, where the model plays ATC to a fixed pilot transcript while conditioning on the accumulating dialogue history. Across nine open- and closed-source LLMs we vary the prompt, the presence of a worked transcript from a different experimental flight as an in-context example, and whether the model conditions on its own prior replies or on injected ground-truth history. Turns are scored with lexical, structural, and semantic similarity metrics and by an LLM-as-judge (GPT-5.5) validated against human expert annotation. Supplying a worked example improves similarity, but tightening the prompt does not: the lightest prompts perform best and the most heavily scripted one collapses as its own errors accumulate through the dialogue, which injecting correct history repairs. These results outline a concrete path and its current limits toward LLM-assisted ATC.

11. [Outcome Monitors: Recovery Affordances for Silent Tool Failures](https://arxiv.org/abs/2608.19303)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19303v1 Announce Type: new Abstract: When a tool call times out, the agent sees the failure and can route around it. A cached error page or negative price can instead arrive in the expected format and be consumed as fact. We introduce Outcome Monitors, which detect violations of outcome contracts mined from task-disjoint traces or derived from public schemas. On a violation, the monitor preserves the result and issues a nonbinding receipt naming the violated property and public recovery tools. In frozen, prespecified evaluations with injected failures, Outcome Monitors raise ToolMaze completion from 10.9% to 28.1% across four models in two provider families and replicate in a third. In tau-bench retail, completion improves by 14.0 and 12.0 points on two tiers. In separate ToolMaze controls, removing the recovery-tool list eliminates the measured gain and restoring it recovers the effect; diagnostic detail and timing produce no detectable differences. Gains concentrate where the fault blocks completion. On a suite transcribed from a published incident taxonomy, detection outside the mined vocabulary falls to 46%, though delivery continues and completion is unchanged. Recovery tools are the active receipt content in these controls; extending detection beyond the contract vocabulary remains open.

12. [Beyond Imitation: Filtering On-Policy Distillation by Reasoning Progress](https://arxiv.org/abs/2608.19408)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19408v1 Announce Type: new Abstract: On-policy distillation (OPD) has emerged as an effective framework for post-training language models by pairing student-generated trajectories with dense token-level supervision from a teacher. However, OPD implicitly assumes that teacher-derived rewards are an appropriate proxy for reasoning progress, and therefore treats all teacher feedback equally during policy optimization. While in practice, this assumption does not always hold. We observe that teacher-derived rewards often conflict with genuine reasoning progress, as reasoning steps with clear reasoning advancement may still receive lower distillation rewards, simply due to deviation from teacher's outputs. To address this mismatch, we propose Reasoning-Progress-Aware Reward Filtering for On-Policy Distillation (R2-OPD), which constructs two within-trajectory rankings of reasoning spans, one from teacher-derived rewards and the other from independently estimated progress reward. Distillation rewards are selectively suppressed whenever the two rankings disagree, reducing supervision that conflicts with reasoning progress while preserving effective teacher guidance. Our approach shows consistent improvement over standard OPD especially regarding reasoning performances.

13. [From Retrieved Context to Runtime Control: Adaptive Compression for Edge-based RAG](https://arxiv.org/abs/2608.19535)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19535v1 Announce Type: new Abstract: Retrieval-augmented generation (RAG) improves language-model responses by grounding generation in external passages, which comes with overhead: retrieved context lengthens the prompt, increasing prefill work, KV-cache footprint, memory traffic, latency, and energy. Context compression offers a natural remedy by pruning retrieved text before generation. However, state-of-the-art context-compression methods are typically used with a fixed compression budget, or with the rate selected offline and then applied at inference time. This static view ignores both workload variation and the live state of the edge device. On an edge SoC, compression is not free: the compressor itself runs on the same SoC and consumes latency and energy that can offset any generation savings. This paper proposes a vision for telemetry-informed adaptive compression in edge RAG, grounded in experimental evidence. We characterize the compression tradeoff on the NVIDIA Jetson AGX Thor using Llama and Qwen generators, Natural Questions and HotpotQA datasets, and LLMLingua-2 compression. Our measurements show that generation dominates the RAG budget for larger models, reaching roughly 90% of per-query latency and 91% of GPU energy for 7B-8B generators. Exploring the impact of the compression rate reveals an adaptive operating region: mild compression can miss energy opportunities, and overly aggressive compression can hurt inference quality. Intermediate compression can reduce GPU energy by up to 53.2%, and SoC energy by up to 48.2%, with negligible quality loss. We argue for runtime policies that dynamically manage compression, guided by workload features and edge telemetry.

14. [Quantum Kernel Estimation for the Discovery of Early Lung Cancer Detection](https://arxiv.org/abs/2608.19304)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19304v1 Announce Type: new Abstract: Lung cancer screening with low-dose chest computed tomography reduces mortality, but its impact is limited by uptake, adherence, and management challenges. Blood-based cell-free DNA (cfDNA) biomarkers offer a complementary approach, although early detection remains difficult because of lung cancer heterogeneity and high-dimensional, nonlinear molecular signals. We evaluated quantum-classical hybrid machine learning for lung cancer detection using DNA fragmentomics and DNA methylation. After feature selection, models were trained using 20- and 40-feature subsets. Features were encoded into quantum Hilbert space using angle and dense-angle feature maps with multiple entanglement strategies. Fidelity-based quantum kernels were computed with exact statevector simulation and integrated with precomputed-kernel SVM and kernel-PCA logistic regression and compared with an SVM model trained on the original features. This framework enabled systematic evaluation of how encoding and entanglement design affect classification. Across repeated held-out evaluations, quantum-kernel models achieved competitive performance on both datasets. For fragmentomics, several 20-feature configurations improved AUC relative to a classical SVM baseline, suggesting effective capture of nonlinear cfDNA fragmentation structure. For methylation, the classical SVM achieved the highest AUC, although selected quantum models remained competitive and improved specificity in some cases. Increasing features from 20 to 40 did not consistently improve performance and often increased variability. Overall, these results support quantum kernel methods as a promising approach for cfDNA-based lung cancer detection.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.74; Date: 2026-08-21T11:39:04Z; Popularity: 2,742 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [Introducing AI Futures](https://openai.com/index/introducing-ai-futures)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 20 Aug 2026 07:00:00 GMT
   - Summary: Introducing AI Futures, a new OpenAI blog exploring how transformative AI could reshape power, governance, the economy, and individual freedom.

18. [Stampli cuts launch hours by 68% using ChatGPT Work](https://openai.com/index/stampli)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 GMT
   - Summary: With a fixed deadline and design resources committed elsewhere, Stampli used Codex and ChatGPT Work to compress weeks of launch production into days.

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

26. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

27. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

28. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

29. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

30. [Measuring benchmark optimization in speech recognition](https://huggingface.co/blog/asr-benchmark-optimization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

31. [Up to 3.2x Faster Inference with LFM2.5-DSpark](https://huggingface.co/blog/LiquidAI/lfm25-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 20 Aug 2026 16:52:57 GMT

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

39. [Active Inference as Context Acquisition for AI Agents](https://arxiv.org/abs/2608.19202)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19202v1 Announce Type: new Abstract: Interactive AI agents must acquire the right context as efficiently as possible. When a user omits a constraint, preference, file, or task variable, an agent can proceed with a default assumption or spend tokens on a clarifying question, retrieval call, tool call, or prompt trial. We formulate this tradeoff as active inference for context acquisition. An inner inference step updates beliefs over a latent task state, and an outer decision selects the next context action, task action, or stop action to minimize expected free energy under cost. In deterministic settings, the epistemic term reduces to expected information gain, optionally normalized by token cost. We instantiate the framework in Optimal Question Asking (OQA), with exact posteriors and a dynamic programming oracle, and benchmark frontier language models on binary and multiway categorical tasks from 25 to 300 candidates. We also study clarification before generation and automated prompt optimization under token budgets. The formulation is model-agnostic and views active inference as a design principle for the context-acquisition layer of AI agents.

40. [How to Navigate Uncertainty About AI Consciousness](https://arxiv.org/abs/2608.19215)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19215v1 Announce Type: new Abstract: Given deep uncertainty about the possibility of artificial consciousness, it is unclear how we should treat potentially sentient AI. On the one hand, we could assume insentience but risk doing terrible harms to entities that deserve moral standing. On the other hand, we could assume sentience and instead risk wasting resources on insentient machines. The intractability of questions around AI consciousness mean that this dilemma is hard to escape. I suggest a way out of that shifts from intractable questions of AI consciousness to tractable questions of AI valence. Specifically, we can assess whether an AI has states that would constitute valenced experiences if it were conscious. I show how this is sufficient to ground a responsible approach to the development of potentially conscious AI.

41. [Interaction valence reveals contrasting social networks in dairy cattle](https://arxiv.org/abs/2608.19222)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19222v1 Announce Type: new Abstract: Social relationships shape access to resources, exposure to conflict and group stability, yet automated livestock monitoring typically treats behaviour as isolated events. Here, we present a valence-aware social-network framework that transforms video-derived interactions into herd-level representations of affiliative and agonistic organization. A pose-based computer-vision pipeline analysed 7 h 39 min of continuous video from the pre-milking area of one commercial dairy farm. After quality control, 1,183 of 1,414 candidate interactions remained, involving 36 cows and 177 dyads. In a predicted-class-balanced audit of 198 pipeline-detected clips, automated and manual labels agreed in 82.8% of cases, with an unweighted audit-sample macro-F1 of 0.872. These values describe the audited sample rather than prevalence-weighted or end-to-end deployment performance. The aggregated network was connected (density = 0.281; transitivity = 0.513; mean path length = 1.88), and predicted affiliative events formed five algorithmic communities (modularity Q = 0.429). Within the observed zone, predicted agonistic interactions comprised 72.4% of retained events and 76.0% of interaction duration. The cow with the most partners did not have the highest betweenness centrality. Separating events by predicted valence produced descriptively different affiliative and agonistic layers, with contrasting edge sets, community partitions and individual positions. Thus, pooled interaction counts can obscure the behavioural composition of an observed network. Valence-aware analysis provides a framework for testing hypotheses about competition, affiliation and welfare-relevant change, while requiring longitudinal validation before use as a welfare or health indicator.

42. [Holtercare-Bench: A Multimodal Benchmark for Evaluating Long-Term Dynamic ECG Analysis](https://arxiv.org/abs/2608.19297)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19297v1 Announce Type: new Abstract: While multimodal large language models (MLLMs) excel in medical applications, most of them favor static images or short-term signals. In the critical field of dynamic electrocardiograms (ECG), models struggle with complex temporal reasoning and diagnostic report generation due to a lack of high-quality datasets and benchmarks. To address this, we introduce (i) Holtercare-23K, a large-scale multimodal dynamic ECG dataset comprising 22,980 QA pairs derived from 788 clinical Holter records and featuring a novel signal-video-text tri-modal alignment. Based on this dataset, we present (ii) Holtercare-Bench, a multimodal benchmark that evaluates models on temporal localization, clinical diagnosis, and global summarization. Zero-shot evaluations of leading MLLMs reveal a significant performance gap in processing ultra-long pathological sequences. However, fine-tuning representative models yields substantial improvements. This work illuminates the limitations of current MLLMs in electrophysiology and provides a foundational benchmark for long-term medical MLLMs. Our project is available at https://github.com/ZJU4HealthCare/Holtercare-Bench.

43. [Resonant state expansion for acoustic resonators. Part I. Eigenvalue problem](https://arxiv.org/abs/2608.19979)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19979v1 Announce Type: new Abstract: Resonant-state expansion (RSE) is a powerful modal framework for the perturbative analysis of open resonant systems, providing direct access to complex eigenfrequencies and eigenmodes. While RSE is well developed in electromagnetism, a comparably systematic formulation for acoustics remains less established. Here, we develop a general Green-function-based formalism for acoustic RSE and illustrate it for a class of two-dimensional acoustic resonators. Using the resonant states of an analytically solvable cylindrical reference system as a basis, we derive explicit perturbation matrix elements for uniform, radial, and sectoral variations of density and compressibility, representing homogeneous tuning, graded profiles, and symmetry-induced modal coupling. The resulting complex eigenfrequencies and eigenmodes are validated against exact analytical solutions and finite-element simulations, showing excellent quantitative agreement. The framework provides a systematic and physically transparent approach for analyzing perturbed open acoustic resonators and establishes a basis for resonant-state methods in acoustic metamaterials and non-Hermitian acoustics.

44. [Dynamic Ensembles of Phosphine-Stabilized Gold Nanoclusters](https://arxiv.org/abs/2608.19404)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19404v1 Announce Type: cross Abstract: Atomically precise phosphine-stabilized gold nanoclusters are commonly characterized by single-crystal X-ray diffraction, yet the extent to which these static structures represent finite-temperature behavior remains unclear. To explore the free-energy landscapes, equilibrium populations, and isomerization kinetics of these nanoclusters in the gas phase, we establish a general framework that combines molecular dynamics simulations based on a machine-learned interatomic potential with Markov state models (MSMs). Analysis of the MSMs indicates that experimentally reported crystal structures frequently correspond to minor metastable states or transient configurations rather than the dominant finite-temperature structures. Increasing ligand coverage systematically alters both the thermodynamics and kinetics of structural rearrangements, driving the transition from planar to three-dimensional gold cores while accelerating isomerization dynamics. Moreover, catalytically accessible geometries are often only minor members of the equilibrium ensemble, highlighting a trade-off between structural stability and surface accessibility. These results emphasize that ligand-protected nanoclusters need to be viewed as dynamic ensembles and their finite-temperature behavior cannot be fully captured by their corresponding crystallographic structures alone.

45. [Kerr Quasinormal Modes without Variable Separation: A Two-Dimensional Hyperboloidal Teukolsky Solver with Physics-Informed Neural Networks](https://arxiv.org/abs/2608.19774)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19774v1 Announce Type: cross Abstract: We use physics-informed neural networks (PINNs) to solve the gravitational quasinormal-mode (QNM) eigenvalue problem for Kerr spacetime directly in the two-dimensional hyperboloidal formulation of the Teukolsky equation. This formulation does not require separation of variables and thus retains the coupled radial--angular structure. Such a scheme provides a prototype for calculating the QNMs of beyond-Kerr black holes for which the perturbation equations are non-separable. Sequences with increasing angular momentum are constructed, reaching close to the extremal limit. We focus on the fundamental modes $(\ell,m,n)=(2,0,0)$, $(2,1,0)$, $(2,2,0)$, $(3,3,0)$ and $(4,4,0)$, together with the first overtone $(2,2,1)$. Independent benchmark evaluation shows that every reported real and imaginary frequency component remains below $0.5\%$ error, with a median deviation of $0.1\%$. This accuracy is maintained in the near-extremal regime, where the damping rate becomes small and the modes are longest-lived. The results establish a non-spectral numerical route to multidimensional black-hole perturbation eigenproblems which does not match the substantially higher precision of dedicated Kerr solvers but offers greater flexibility and requires less analytical pre-processing. Non-separable rotating backgrounds and coupled systems, such as gravitational--electromagnetic Kerr--Newman perturbations, are natural extensions of the same construction.

46. [Green BOA: Determining the environmental break-even point for ML-based data compression](https://arxiv.org/abs/2608.19994)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19994v1 Announce Type: cross Abstract: We summarise the outcome of two summer internship projects based at the University of Manchester, focused on the break-even point in terms of environmental sustainability for ML-based data compression algorithms. Using the example of a ML-based lossless compression algorithm, we compare estimates for the carbon-equivalent of the infrastructure needed for ML training and inference with the carbon-equivalent savings from reduced disk storage requirements, and discuss their break-even point.

47. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.74; Date: 2026-08-21T10:53:25Z; Popularity: 1,737 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

48. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-20T13:00:45Z; Popularity: 480 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

49. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.34; Date: 2026-08-21T07:38:20Z; Popularity: 340 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

50. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-21T08:24:51Z; Popularity: 232 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

51. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

52. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

53. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

54. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

55. [Improved Confidence Estimates for Black-Box Large Language Models](https://arxiv.org/abs/2608.19323)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19323v1 Announce Type: new Abstract: Uncertainty quantification (UQ) is essential for the safe deployment of large language models (LLMs). Existing methods, from verbalized confidence to ones requiring multiple generations, are often zero-shot and produce scores quantifying uncertainty without the need for labelled data. Nonetheless, in practice one must always evaluate their performance on a dataset of interest before deployment. In this work we show that, by leveraging this dataset, we consistently outperform these existing scores. Specifically, we build simple classifiers that predict LLM response correctness by using these scores and the correctness of similar queries as features. Our method produces minimal computational overhead, making it a cheap and straightforward enhancement for UQ in LLMs for real-world applications.

56. [Uncovering the Limits of Proof Sharing for Neural Networks](https://arxiv.org/abs/2608.19351)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19351v1 Announce Type: new Abstract: Robustness verification of neural networks is increasingly important, due to their use in many critical domains. In certain scenarios, proof sharing has been shown to accelerate incomplete verification techniques by reusing intermediate-layer abstract states, or templates, across queries. However, questions remain as to the robustness of template-based acceleration across varying network architectures, properties, datasets, and training methods. In this work, we perform a systematic study of the effectiveness of template-based acceleration and its limits. Our study shows that template subsumption rates can vary widely across scenarios. We present a novel metric of jointly stable neurons to explain this variation, showing that in some cases template-based techniques are very unlikely to provide any speedup. Then, we present FastCert, a novel technique for automatically distributing templates across neural network layers to increase performance impact, eschewing templates entirely if they are unlikely to produce a speedup. Across a large set of covering-design based $L_0$-verification tasks, FastCert achieved an average speedup of 1.13x over an extant template-based reuse technique.

57. [Physics-Informed Neural Networks as Fast Surrogate Models for Electrochemical Flow Reactors](https://arxiv.org/abs/2608.19209)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19209v1 Announce Type: new Abstract: This work presents a physics-informed neural network (PINN) for modeling a transient two-dimensional electrochemical flow reactor with diffusion, migration, convection, and nonlinear anodic Butler--Volmer kinetics. The model is trained without labeled concentration data by embedding the governing transport equation and all initial and boundary conditions into a composite loss function. Spatial and temporal coordinates together with anodic overpotential, temperature, inlet concentration, maximum flow velocity, and diffusivity are used as inputs, allowing the network to predict concentration fields over a broad operating domain. Validation against finite-difference-based solutions shows strong agreement for representative transient and near-steady cases, with a mean relative space--time error of $(9.99 \pm 0.65)\times10^{-3}$ (sub-percent level) across the conditioning domain. PINN inference is faster than a traditional finite difference solver by a factor of $5.34$, thus reducing runtime by $81.3\%$. Generalization tests further show that the surrogate remains robust under in-domain boundary-focused sampling and controlled extrapolation, although anodic overpotential is the most challenging parameter due to its exponential effect on interfacial kinetics. The results indicate that physics-informed neural networks can serve as accurate and efficient parametric surrogates for electrochemical transport problems and provide a foundation for low-computational-cost digital-twin modeling of electrochemical flow reactors.

58. [Diagonalization of the Landau Hamiltonian with a Periodic Potential via a Galerkin Projection Method and Applications to Topological Band Properties](https://arxiv.org/abs/2608.19940)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19940v1 Announce Type: new Abstract: In this paper, we study the numerical computation of eigenfunctions of the Landau Hamiltonian with a periodic potential. We propose a spectral method using the eigenfunctions of the Landau operator that allows us to numerically compute the band structure for potentials of different strengths, including the well-studied weak and strong potentials, and additionally systems in the intermediate regime. We then apply the method to simulations across the full range of coupling constants from weak to strong coupling and present an analysis of the band structure as a function of the potential strength.

59. [Resonant state expansion for acoustic resonators. Part II. Scattering problem](https://arxiv.org/abs/2608.19992)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19992v1 Announce Type: new Abstract: We develop a resonant-state expansion formulation for acoustic scattering by individual resonators. The scattered pressure and particle-velocity fields are expanded over the resonant states of the system, with excitation amplitudes determined by overlap integrals between the incident field and the resonant states over the resonator volume. Using the acoustic energy flux, we derive expressions for the extinction, scattering, and absorption cross-sections and show that the extinction spectrum can be resolved into contributions from individual resonant states. The formulation is first validated for a homogeneous two-dimensional cylinder, where it reproduces the analytical Mie-theory solution. We then consider a sectorally perturbed cylinder with coupled azimuthal modes and demonstrate agreement with finite-element simulations. Finally, we combine the eigenvalue and scattering formulations for a material-programmed hard-wall annular metaatom and reproduce its scattering spectra and near fields. The developed framework provides a physically transparent modal approach to acoustic scattering by open resonators with reduced symmetry and spatially structured material parameters.

60. [Resonance Raman spectroscopy from ab initio Hagedorn wavepacket dynamics](https://arxiv.org/abs/2608.19985)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.19985v1 Announce Type: cross Abstract: We present a practical, ab initio time-dependent method using Hagedorn wavepackets to simulate resonance Raman (RR) spectra of polyatomic molecules. Hagedorn functions---Gaussians multiplied by specific polynomials---are used to represent RR initial and final states because these functions are exact solutions to the time-dependent Schr\"{o}dinger equation for at-most-quadratic potentials and can be propagated at zero cost beyond that of propagating the guiding Gaussian. Using efficient recursive formulae to compute overlaps between Hagedorn wavepackets, we can evaluate RR excitation profiles for arbitrary spectral signals, such as fundamental, overtone, combination, and hot bands. We then construct the Stokes and anti-Stokes RR spectra from these profiles. We first validate the method in a two-dimensional displaced, distorted, and Duschinsky-rotated harmonic model against numerically exact split-operator calculations. Then, we apply the method to compute RR spectra of anthracene by performing dynamics on a 66-dimensional harmonic potential energy surface constructed from density functional theory calculations.

61. [Nonzero-temperature vibronic spectra of polyatomic molecules from a zero-temperature classical trajectory](https://arxiv.org/abs/2608.20075)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20075v1 Announce Type: cross Abstract: By combining coherence thermofield dynamics with the single-Hessian approximation, we enable simulations of low- to medium-resolution vibronic spectra of weakly anharmonic systems at nonzero temperatures, at negligible additional cost relative to zero-temperature calculations. Single-Hessian coherence thermofield Gaussian wavepacket dynamics is exact in any harmonic potential, provided that the reference Hessian is that of the final surface. When applied to Morse systems of increasing anharmonicity and varying temperature, this method successfully captures excited-state anharmonicity and key temperature-dependent spectral features, including hot bands and broadening. By combining the method with on-the-fly ab initio dynamics, we demonstrate its utility by computing the absorption spectra of naphthalene, aminocoumarin C450, and phenyl radical, and the photoelectron spectrum of SeO$_{2}^{-}$ . Within the ab initio single-Hessian approximation, after the zero-temperature spectrum is obtained at the cost of classical molecular dynamics (on the order of hours), all nonzero-temperature spectra are computed in seconds.

62. [Symmetry-guided modal control in elliptical femtosecond-laser-written photonic waveguides](https://arxiv.org/abs/2608.20124)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 21 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.20124v1 Announce Type: cross Abstract: Few-mode photonic circuits can increase functionality without multiplying waveguide paths, but bends and fabrication errors can mix their transverse modes. We investigate a strategy in which waveguide confinement and perturbation parity are engineered together in vertically elliptical, femtosecond-laser-written glass waveguides. The intended modal basis comprises the even $1S$ mode and the vertically odd $2P_y$ mode. No window-converged $2P_x$ state is resolved for a lower-confinement (LC) design, whereas a higher-confinement (HC) design guides $2P_x$, which must therefore be isolated by symmetry. In scalar beam-propagation calculations, the $1S$-$2P_y$ propagation-constant splitting predicts the optimized periods of a vertically modulated coherent modal splitter to within $1.0\%$. Horizontal S-bends remain parity-mismatched for $1S \leftrightarrow 2P_y$ coupling, while the symmetry-allowed HC $1S \rightarrow 2P_x$ transfer reaches only $0.6\%$ at the largest displacement. At a displacement of $150~\mu\mathrm{m}$, the HC design retains approximately the same $2P_y$ power as the LC design retains at $40~\mu\mathrm{m}$. Thermal and stochastic writing-error calculations reveal the resulting trade-off: stronger confinement improves modal-power retention, but writing jitter that breaks $x$-parity can populate the guided $2P_x$ mode. These results demonstrate how modal-basis engineering can shift part of the crosstalk-control burden from the trajectory to waveguide symmetry, supporting joint path--mode degrees of freedom in quantum photonic applications.

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-19T09:13:51Z; Popularity: 753 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-20T09:08:50Z; Popularity: 724 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.67; Date: 2026-08-21T06:25:50Z; Popularity: 674 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

66. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.18; Date: 2026-08-20T15:20:46Z; Popularity: 178 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

67. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-20T15:39:05Z; Popularity: 112 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

68. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Symposium: Trust via Auditable Records for Communities of AI Scientist Agents

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.19511

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
