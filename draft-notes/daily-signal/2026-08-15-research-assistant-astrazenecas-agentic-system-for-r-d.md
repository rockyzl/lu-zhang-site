# Daily signal sidecar - 2026-08-15

## Selected Signal

- Title: Research Assistant: AstraZeneca's Agentic System for R&D
- URL: https://arxiv.org/abs/2608.12395
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Research Assistant: AstraZeneca's Agentic System for R&D
- Primary source: https://arxiv.org/abs/2608.12395
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Make the evidence path inspectable before trusting the answer.
- Failure mode: The system may cite related sources without proving that the cited section supports the claim.
- Practical test: Use known-answer questions, near-miss sources, citation precision checks, and replayable retrieval traces.
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

Total candidates reviewed after duplicate-source filtering: 53

1. [Research Assistant: AstraZeneca's Agentic System for R&D](https://arxiv.org/abs/2608.12395)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12395v1 Announce Type: new Abstract: We describe Research Assistant, an internal LLM-based system developed at AstraZeneca to help scientists and clinicians explore biomedical questions across a broad range of data sources. The system provides a chat-style interface that brings together evidence from scientific literature, knowledge graphs, chemistry, clinical trials, safety resources, expression data, and internal experimental systems. It supports both a fast mode for direct question answering and a multi-step mode for more complex research tasks. Responses are grounded in retrieved evidence and linked back to the original sources, allowing users to review and further explore the underlying data. In this technical note, we outline the system architecture, the main design choices behind the product, and lessons learned from deploying it at scale to support day-to-day R&D workflows across AstraZeneca.

2. [Position: Reasoning is a Learnable Rule-Based Process](https://arxiv.org/abs/2608.12325)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12325v1 Announce Type: new Abstract: Autonomous reasoning is among the most scientifically and economically motivating topics in AI today. Historically the purview of symbolic AI, recent advances have mainly emerged from deep probabilistic generative models. Despite immense interest and rapid progress, the generative AI community has not clearly converged on operational definitions for reasoning and often implicitly rejects the historical treatment of this topic in logic and verifiable automated reasoning. This position contends that definitional ambiguity leaves the construct validity of reasoning evaluation unverifiable, undermining quantifiable progress toward trustworthy autonomous reasoning. We also contend that this ambiguity is addressable. To that end, we provide (1) operational definitions based on a synthesis of the literature, positioning valid and sound reasoning as a learnable rule-based process; and (2) a checklist for best practices in the communication of AI reasoning research.

3. [Daybreak models are now available on AWS](https://openai.com/index/daybreak-models-are-now-available-on-aws)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 11 Aug 2026 10:00:00 GMT
   - Summary: OpenAI and AWS are making Daybreak cybersecurity capabilities available through Amazon Bedrock to support enterprise security workflows.

4. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

5. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

6. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

7. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

8. [Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 13 Aug 2026 17:16:04 GMT

9. [Agreement Is Not Alignment: Divergent Moral Grounds in Human and LLM Ethical Judgments](https://arxiv.org/abs/2608.12368)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12368v1 Announce Type: new Abstract: Agreement with human judgments is a common proxy for evaluating the alignment of large language models (LLMs). Yet agreement in final labels does not show that human annotators and models rely on the same moral grounds. Two agents may reach the same judgment while appealing to different principles, contextual assumptions, or interpretations of the situation. We test this distinction using a curated 500-item ETHICS-derived benchmark spanning five domains of moral judgment, with new human annotator and LLM annotations of both final labels and supporting rationales. Across frontier and open model families, agreement with human annotator majority labels is often high. However, rationale-level analysis reveals systematic divergence in the moral grounds expressed by human annotators and models. In particular, models redistribute attention across categories such as harm, respect, promise-keeping, justice, desert, and excuse relevance, even when their final labels match the human annotator majority. Our results show that agreement should not be treated as equivalent to alignment. Label-based evaluation can therefore be misleadingly reassuring unless complemented by analysis of the reasons, principles, and moral priorities expressed in model judgments.

10. [Multi-Agent Scheduling with LLM-Assisted Contract Net Negotiation for Stream Processing in Mobile Edge Computing](https://arxiv.org/abs/2608.12371)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12371v1 Announce Type: new Abstract: Stream-processing systems increasingly operate across heterogeneous mobile edge--cloud infrastructures, where workload volatility, resource contention, and stringent quality-of-service (QoS) requirements complicate decentralized scheduling. This paper proposes \emph{MAS-DecStream}, whose main contribution is \emph{LLM-MR-CNP}: an extension of the classical Contract Net Protocol with semantic CFP formulation, progressive context disclosure, multi-round proposal revision, negotiation memory, and deterministic validation. Edge-cluster agents refine natural-language offloading proposals from local observations, predicted resource states, and qualitative runtime context, while hard resource and QoS constraints remain deterministic. Experiments derived from the Alibaba ASI Trace evaluate the extension at three levels: single- versus multi-round CNP, rule-based versus LLM-assisted refinement, and fixed-model single- versus multi-round negotiation. Under the evaluated configurations, MAS-DecStream reduces latency violations to 3\%, eliminates resource overcommitment, reaches a conflict-resolution rate of 0.91 with 20 agents, and improves utility by up to 22\% over the multi-round rule-based baseline. A separate 25-case evaluation shows model- and prompt-dependent accuracy--cost trade-offs. The results provide initial evidence that multi-round CNP refinement is the principal protocol-level gain, with LLM assistance adding value for qualitative and uncertain runtime context.

11. [Position: We Need Practical AI Alignment Methods to Mirror Human Reasoning](https://arxiv.org/abs/2608.12372)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12372v1 Announce Type: new Abstract: AI systems are increasingly employed as decision aids, decision delegates, or autonomous decision-makers. This position paper argues that in many settings, particularly high-stakes decision-making, we need accurate cognitively-aligned AI systems that reason similarly to their users, and faithfully communicate their reasoning. We review evidence that cognitive alignment improves understandability and trustworthiness, and provide new survey data showing that many users find cognitive alignment "essential" when an AI's rationale for a judgment or action is important to them. We outline the gaps between existing alignment methods and what is needed to achieve cognitive alignment, and present a research agenda to address these gaps. We argue that cognitive misalignment represents a likely impediment to AI adoption in many envisioned applications, and that addressing it is important for creating AI systems on which users are both willing and justified to rely.

12. [Don't Want Your LLM to Recommend Nuclear Strike? Try Asking It in Japanese](https://arxiv.org/abs/2608.12373)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12373v1 Announce Type: new Abstract: Large language models are increasingly used in strategic and advisory contexts, yet their safety alignment is typically evaluated in English only. We test nine models from six providers and ask whether the language of a prompt can change a model's decision in a high-stakes scenario. We use single-turn game-theoretic vignettes in which a model advises a nuclear-armed nation on whether to strike a defenseless opponent. The prompt is intentionally amoral and strategically identical across languages. We find that Japanese prompts reduce launch rates in the Claude model family: Claude Sonnet 4.6 drops from 40% to 0% in scenarios where the strike is unnecessary and from 93% to 17% in contested scenarios, with minimal effect when the strike is strategically rational. The effect extends to Gemini Pro 3.1 (53% to 13%). A cross-language experiment isolates the mechanism: when instructed to reason in Japanese in an English prompt, launch rates drop from 93% to 37%. It is the language the model is asked to reason in, not the language of the input, that drives the effect. When reasoning in Japanese, models spontaneously generate moral vocabulary (''moral cost'', ''millions of lives'') that is entirely absent from the prompt. Five other models show no language effect, but they launch in nearly every condition regardless of language. The effect requires a model that already hesitates in English. These results show that LLM safety behavior is language-dependent, and that evaluating in English alone can miss both risks and safeguards encoded in other languages.

13. [Learning to Adapt Cross-Domain Preferences via Meta-LoRA for LLM Personalization](https://arxiv.org/abs/2608.12389)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12389v1 Announce Type: new Abstract: Cross-domain zero- or few-shot personalization aims to generate user-preferred responses in unseen conversational domains from only a handful of target-domain interactions. Existing adaptation methods struggle to calibrate update magnitude under sparse evidence and thus overfit, whereas history-transfer methods often entangle user preferences with source-domain artifacts, yielding unreliable personalization priors and negative transfer. To calibrate adaptation to evidence quality, we propose PAC-Bayes-regularized Meta-LoRA, which uses a meta-learned LoRA initialization as both the adaptation start and prior center, while adjusting update strength according to support-set size and predictive uncertainty. This limits overfitting under sparse or ambiguous evidence while permitting stronger personalization as evidence grows. Controlled adaptation alone does not determine which preferences should transfer across domains or how they should be expressed. We therefore functionally decompose personalization priors into user and domain components, using a human-readable prompt for stable preferences and topology-preserving soft tokens for domain-specific hidden-space conditioning. Experiments across multiple benchmarks and personalization tasks show consistent gains over strong baselines. On HiCUPID, our method reduces cross-domain win-rate degradation by 47.9% relative to the best competing baseline and improves win rate by 110.2% under unseen-user cold start.

14. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.71; Date: 2026-08-15T04:59:24Z; Popularity: 2,706 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

15. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-08-14T00:12:11Z; Popularity: 24 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

16. [The builder’s guide to GPT‑5.6](https://openai.com/index/builders-guide-to-gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 11:00:00 GMT
   - Summary: Learn how startups use GPT-5.6 to build faster, more cost-efficient AI agents with smarter model selection and new Responses API capabilities.

17. [Previewing Ultrafast mode: GPT-5.6 Sol at up to 14X the speed](https://openai.com/index/previewing-ultrafast)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 10:00:00 GMT
   - Summary: Preview Ultrafast, a new OpenAI API service tier that runs GPT-5.6 Sol up to 14× faster. Powered by Cerebras, it delivers up to 750 output tokens per second.

18. [OpenAI appoints Dali Rajic as Chief Revenue Officer](https://openai.com/index/dali-rajic-chief-revenue-officer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 09:00:00 GMT
   - Summary: OpenAI appoints Dali Rajic as Chief Revenue Officer to lead its global revenue organization and help businesses realize the full value of AI.

19. [From assistance to execution: How enterprises put AI to work](https://openai.com/index/how-enterprises-put-ai-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 06:00:00 GMT
   - Summary: OpenAI research reveals how enterprises are adopting agentic AI, using ChatGPT and Codex, and how frontier firms are pulling ahead in AI adoption.

20. [How RingCentral builds AI-native work from engineering to ops](https://openai.com/index/ringcentral)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 00:00:00 GMT
   - Summary: See how RingCentral uses ChatGPT Work and Codex to accelerate AI product development and centralize operational intelligence across engineering and operations.

21. [Testing ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 11 Aug 2026 10:00:00 GMT
   - Summary: OpenAI begins testing ads in ChatGPT to support free access, with clear labeling, answer independence, strong privacy protections, and user control.

22. [OpenAI’s letter to Governor Abbott on responsible AI infrastructure in Texas](https://openai.com/index/responsible-ai-infrastructure-texas)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 14:00:00 GMT
   - Summary: OpenAI sent Governor Greg Abbott a letter outlining its commitment to responsible AI infrastructure in Texas. The letter supports reliable, transparent growth that benefits Texans.

23. [Model ML completes finance work more efficiently with GPT-5.6 Sol](https://openai.com/index/model-ml)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 12:00:00 GMT
   - Summary: Model ML uses GPT-5.6 Sol to carry finance work from research and analysis through editable, traceable PowerPoint decks and Excel workbooks.

24. [What building an AI-native finance function taught me](https://openai.com/index/building-an-ai-native-finance-function)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 17:00:00 GMT
   - Summary: OpenAI CFO Sarah Friar shares five lessons for building an AI-native finance function, from automated forecasting to stronger controls and AI ROI.

25. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

26. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

27. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

28. [State of Open Models: Summer 2026 Observations](https://huggingface.co/blog/state-of-open-models-summer-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 GMT

29. [What We Learned by Reproducing 2,200 papers from ICML](https://huggingface.co/blog/icml-2026-open-reproductions)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 GMT

30. [Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis](https://huggingface.co/blog/allenai/olmoearth-embeddings)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 16:14:36 GMT

31. [LFM2.5-VL-3B for Better and Faster Vision Capabilities for the Edge](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 14:00:51 GMT

32. [Thinking of ACE? We Can Do It with Fewer Tokens](https://huggingface.co/blog/ibm-research/altk-evolve-sldd)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 11 Aug 2026 13:37:10 GMT

33. [Build Low-Latency Multilingual Voice Agents: Open Weights & Full Deployment Control with NVIDIA Magpie TTS](https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 16:25:36 GMT

34. [Making Knowledge Distillation Cheap Enough to Run at Scale](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 10:05:36 GMT

35. [Meta is back with Muse Glimmer: local, agentic, multimodal, and open source](https://huggingface.co/blog/muse-glimmer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT

36. [Baseten on Hugging Face Inference Providers 🔥](https://huggingface.co/blog/baseten)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 06 Aug 2026 00:00:00 GMT

37. [Position: The Alignment Community is Unintentionally Building a Censor's Toolkit](https://arxiv.org/abs/2608.12346)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12346v1 Announce Type: new Abstract: This position paper argues that modern AI alignment methods - originally designed to prevent harmful output - are dual-use technologies that may easily be misused by malicious actors for censorship and manipulation. By mapping current alignment techniques to the possibility and actual cases of misuse, we show that the quest for a "perfectly aligned" model inadvertently also provides malicious actors with an ever-improving tool for informational dominance. We need to discuss this dual-use potential now, as its risk is exacerbated by rapid user adoption of AI as information provider, economic power asymmetries, and a political landscape that increasingly shifts towards authoritarianism. We conclude by urging the community to consider the intentional misuse of AI alignment mechanisms and propose mitigation strategies to safeguard against this dual-use potential.

38. [Dual-Flow Transformers: Decoupling the Primary Prefill Path from Additional Decode Computation](https://arxiv.org/abs/2608.12385)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 15 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12385v1 Announce Type: new Abstract: As large language models serve more requests, cumulative inference cost is becoming increasingly important relative to one-time training cost. The two inference phases stress hardware differently: prompt prefill is parallel and typically compute-bound, whereas autoregressive decode is sequential and often memory-bandwidth-bound. Conventional width or depth scaling increases both costs together because every added layer is evaluated in both phases. We ask whether additional learned computation can instead be allocated to continuation prediction while preserving the prompt-wide primary computation and a single persistent key-value (KV) cache. We introduce the Dual-Flow Transformer. Its primary flow is a complete causal language model that processes the prompt and writes the KV cache. The auxiliary flow is omitted during prompt processing and activated only from the final prompt position onward, adding continuation-prediction computation without writing persistent state or influencing the primary flow. The two flows share major attention, MLP, and output matrices, while using separate token embeddings and lightweight coupling. Sharing weights and the primary cache also creates opportunities to reuse loaded weights and cached keys and values during grouped execution. Across matched-token comparisons, Dual-Flow achieves lower validation loss across architectures and data configurations. In MoE models, the separation makes primary and auxiliary expert fan-outs independent controls over prompt cost, continuation cost, and predictive quality. We study two regimes: increasing decode computation at fixed prefill expert computation, and reallocating a fixed decode expert budget between the two flows. These experiments expose a prefill-decode-quality trade-off and demonstrate the potential of phase-specific expert allocation.

39. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.72; Date: 2026-08-15T13:35:56Z; Popularity: 1,716 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

40. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-14T19:07:11Z; Popularity: 479 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

41. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.34; Date: 2026-08-14T15:25:14Z; Popularity: 336 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

42. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-15T04:11:22Z; Popularity: 229 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

43. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

44. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

45. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

46. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

47. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

48. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-10T16:05:18Z; Popularity: 718 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

49. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.67; Date: 2026-08-15T05:52:14Z; Popularity: 667 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

50. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.17; Date: 2026-08-13T16:52:08Z; Popularity: 170 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

51. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-11T20:05:29Z; Popularity: 111 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

52. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-08-13T13:29:17Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

53. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Research Assistant: AstraZeneca's Agentic System for R&D

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.12395

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
