# Daily signal sidecar - 2026-08-14

## Selected Signal

- Title: Diagnostic Foundation for Evaluating LLMs' Research Integrity as Co-Scientists
- URL: https://arxiv.org/abs/2608.12345
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Diagnostic Foundation for Evaluating LLMs' Research Integrity as Co-Scientists
- Primary source: https://arxiv.org/abs/2608.12345
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

Total candidates reviewed after duplicate-source filtering: 70

1. [Diagnostic Foundation for Evaluating LLMs' Research Integrity as Co-Scientists](https://arxiv.org/abs/2608.12345)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12345v1 Announce Type: new Abstract: Language models are increasingly deployed as co-scientists, yet their ability to uphold research integrity under institutional pressure remains unmeasured. We introduce IntegrityBench, a benchmark evaluating misconduct classification, ethical action reasoning and artifact-grounded decision making across 36 paired tasks under a 5-level implicit-explicit pressure protocol spanning 3 domains and 4 research stages. Evaluating 18 frontier model variants, we find that under peak pressure, models fail roughly 1 in 3 integrity-critical decisions, and neither scale nor reasoning ability reliably mitigates this. Explicit pressures induce compliance with misconduct, while implicit contextual reframing more often causes over-refusal of legitimate research tasks. Interestingly, models failing to classify research requests accurately perform equally or better on artifact-grounded decision making (85.7 vs. 79.4), suggesting the three facets are structurally dissociated and correct ethical action does not require accurate classification. Frontier models can thus appear helpful while harbouring integrity failures that create two distinct deployment risks: facilitating research misconduct and eroding trust in AI-assisted research.

2. [Research Assistant: AstraZeneca's Agentic System for R&D](https://arxiv.org/abs/2608.12395)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12395v1 Announce Type: new Abstract: We describe Research Assistant, an internal LLM-based system developed at AstraZeneca to help scientists and clinicians explore biomedical questions across a broad range of data sources. The system provides a chat-style interface that brings together evidence from scientific literature, knowledge graphs, chemistry, clinical trials, safety resources, expression data, and internal experimental systems. It supports both a fast mode for direct question answering and a multi-step mode for more complex research tasks. Responses are grounded in retrieved evidence and linked back to the original sources, allowing users to review and further explore the underlying data. In this technical note, we outline the system architecture, the main design choices behind the product, and lessons learned from deploying it at scale to support day-to-day R&D workflows across AstraZeneca.

3. [Position: Reasoning is a Learnable Rule-Based Process](https://arxiv.org/abs/2608.12325)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12325v1 Announce Type: new Abstract: Autonomous reasoning is among the most scientifically and economically motivating topics in AI today. Historically the purview of symbolic AI, recent advances have mainly emerged from deep probabilistic generative models. Despite immense interest and rapid progress, the generative AI community has not clearly converged on operational definitions for reasoning and often implicitly rejects the historical treatment of this topic in logic and verifiable automated reasoning. This position contends that definitional ambiguity leaves the construct validity of reasoning evaluation unverifiable, undermining quantifiable progress toward trustworthy autonomous reasoning. We also contend that this ambiguity is addressable. To that end, we provide (1) operational definitions based on a synthesis of the literature, positioning valid and sound reasoning as a learnable rule-based process; and (2) a checklist for best practices in the communication of AI reasoning research.

4. [Using Diffusion Models to Estimate Uncertainties in Analytic Continuation](https://arxiv.org/abs/2608.13123)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13123v1 Announce Type: new Abstract: Inverse problems are ubiquitous in physics, chemistry, and engineering, arising when reconstructing hidden quantities from indirect measurements. A key example is the analytic continuation of imaginary-time correlation functions (iTCFs) to the real-frequency domain. This process requires an inverse Laplace transform, which is inherently ill-posed and highly sensitive to small input variations. Recent neural network (NN)-based methods have shown promising results by learning mappings from imaginary-time to real-frequency spectra, often outperforming traditional techniques such as maximum entropy. However, because the problem is ill-posed, many spectra fit the same iTCF. Regression-based approaches output a single solution, which approximates an average over the true solution space, and therefore fail to capture the full distribution of plausible power spectra. To address this issue, we introduce a diffusion-based framework for analytic continuation that learns the distribution of spectra consistent with a given iTCF. It offers two key advantages. First, it quantifies uncertainty directly from the learned distribution. Second, by analyzing the spread and structure of this distribution, we can quantitatively assess the intrinsic hardness of each inversion problem. We measure this hardness with a new metric, the uncertainty pseudo-volume. Applying the framework to an iTCF from a path-integral molecular dynamics simulation of liquid parahydrogen, we obtain the self-diffusion coefficient with an error bar and flag a secondary high-frequency peak as a possible spurious artifact. In contrast to previous attempts at uncertainty quantification, our generative approach rests on a concrete probabilistic basis, providing a more theoretically grounded measure of confidence in the reconstructed power spectra.

5. [Daybreak models are now available on AWS](https://openai.com/index/daybreak-models-are-now-available-on-aws)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 11 Aug 2026 10:00:00 GMT
   - Summary: OpenAI and AWS are making Daybreak cybersecurity capabilities available through Amazon Bedrock to support enterprise security workflows.

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

11. [Agreement Is Not Alignment: Divergent Moral Grounds in Human and LLM Ethical Judgments](https://arxiv.org/abs/2608.12368)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12368v1 Announce Type: new Abstract: Agreement with human judgments is a common proxy for evaluating the alignment of large language models (LLMs). Yet agreement in final labels does not show that human annotators and models rely on the same moral grounds. Two agents may reach the same judgment while appealing to different principles, contextual assumptions, or interpretations of the situation. We test this distinction using a curated 500-item ETHICS-derived benchmark spanning five domains of moral judgment, with new human annotator and LLM annotations of both final labels and supporting rationales. Across frontier and open model families, agreement with human annotator majority labels is often high. However, rationale-level analysis reveals systematic divergence in the moral grounds expressed by human annotators and models. In particular, models redistribute attention across categories such as harm, respect, promise-keeping, justice, desert, and excuse relevance, even when their final labels match the human annotator majority. Our results show that agreement should not be treated as equivalent to alignment. Label-based evaluation can therefore be misleadingly reassuring unless complemented by analysis of the reasons, principles, and moral priorities expressed in model judgments.

12. [Multi-Agent Scheduling with LLM-Assisted Contract Net Negotiation for Stream Processing in Mobile Edge Computing](https://arxiv.org/abs/2608.12371)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12371v1 Announce Type: new Abstract: Stream-processing systems increasingly operate across heterogeneous mobile edge--cloud infrastructures, where workload volatility, resource contention, and stringent quality-of-service (QoS) requirements complicate decentralized scheduling. This paper proposes \emph{MAS-DecStream}, whose main contribution is \emph{LLM-MR-CNP}: an extension of the classical Contract Net Protocol with semantic CFP formulation, progressive context disclosure, multi-round proposal revision, negotiation memory, and deterministic validation. Edge-cluster agents refine natural-language offloading proposals from local observations, predicted resource states, and qualitative runtime context, while hard resource and QoS constraints remain deterministic. Experiments derived from the Alibaba ASI Trace evaluate the extension at three levels: single- versus multi-round CNP, rule-based versus LLM-assisted refinement, and fixed-model single- versus multi-round negotiation. Under the evaluated configurations, MAS-DecStream reduces latency violations to 3\%, eliminates resource overcommitment, reaches a conflict-resolution rate of 0.91 with 20 agents, and improves utility by up to 22\% over the multi-round rule-based baseline. A separate 25-case evaluation shows model- and prompt-dependent accuracy--cost trade-offs. The results provide initial evidence that multi-round CNP refinement is the principal protocol-level gain, with LLM assistance adding value for qualitative and uncertain runtime context.

13. [Position: We Need Practical AI Alignment Methods to Mirror Human Reasoning](https://arxiv.org/abs/2608.12372)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12372v1 Announce Type: new Abstract: AI systems are increasingly employed as decision aids, decision delegates, or autonomous decision-makers. This position paper argues that in many settings, particularly high-stakes decision-making, we need accurate cognitively-aligned AI systems that reason similarly to their users, and faithfully communicate their reasoning. We review evidence that cognitive alignment improves understandability and trustworthiness, and provide new survey data showing that many users find cognitive alignment "essential" when an AI's rationale for a judgment or action is important to them. We outline the gaps between existing alignment methods and what is needed to achieve cognitive alignment, and present a research agenda to address these gaps. We argue that cognitive misalignment represents a likely impediment to AI adoption in many envisioned applications, and that addressing it is important for creating AI systems on which users are both willing and justified to rely.

14. [Don't Want Your LLM to Recommend Nuclear Strike? Try Asking It in Japanese](https://arxiv.org/abs/2608.12373)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12373v1 Announce Type: new Abstract: Large language models are increasingly used in strategic and advisory contexts, yet their safety alignment is typically evaluated in English only. We test nine models from six providers and ask whether the language of a prompt can change a model's decision in a high-stakes scenario. We use single-turn game-theoretic vignettes in which a model advises a nuclear-armed nation on whether to strike a defenseless opponent. The prompt is intentionally amoral and strategically identical across languages. We find that Japanese prompts reduce launch rates in the Claude model family: Claude Sonnet 4.6 drops from 40% to 0% in scenarios where the strike is unnecessary and from 93% to 17% in contested scenarios, with minimal effect when the strike is strategically rational. The effect extends to Gemini Pro 3.1 (53% to 13%). A cross-language experiment isolates the mechanism: when instructed to reason in Japanese in an English prompt, launch rates drop from 93% to 37%. It is the language the model is asked to reason in, not the language of the input, that drives the effect. When reasoning in Japanese, models spontaneously generate moral vocabulary (''moral cost'', ''millions of lives'') that is entirely absent from the prompt. Five other models show no language effect, but they launch in nearly every condition regardless of language. The effect requires a model that already hesitates in English. These results show that LLM safety behavior is language-dependent, and that evaluating in English alone can miss both risks and safeguards encoded in other languages.

15. [Learning to Adapt Cross-Domain Preferences via Meta-LoRA for LLM Personalization](https://arxiv.org/abs/2608.12389)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12389v1 Announce Type: new Abstract: Cross-domain zero- or few-shot personalization aims to generate user-preferred responses in unseen conversational domains from only a handful of target-domain interactions. Existing adaptation methods struggle to calibrate update magnitude under sparse evidence and thus overfit, whereas history-transfer methods often entangle user preferences with source-domain artifacts, yielding unreliable personalization priors and negative transfer. To calibrate adaptation to evidence quality, we propose PAC-Bayes-regularized Meta-LoRA, which uses a meta-learned LoRA initialization as both the adaptation start and prior center, while adjusting update strength according to support-set size and predictive uncertainty. This limits overfitting under sparse or ambiguous evidence while permitting stronger personalization as evidence grows. Controlled adaptation alone does not determine which preferences should transfer across domains or how they should be expressed. We therefore functionally decompose personalization priors into user and domain components, using a human-readable prompt for stable preferences and topology-preserving soft tokens for domain-specific hidden-space conditioning. Experiments across multiple benchmarks and personalization tasks show consistent gains over strong baselines. On HiCUPID, our method reduces cross-domain win-rate degradation by 47.9% relative to the best competing baseline and improves win rate by 110.2% under unseen-user cold start.

16. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.70; Date: 2026-08-14T06:13:40Z; Popularity: 2,703 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

17. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-08-14T00:12:11Z; Popularity: 24 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

18. [The builder’s guide to GPT‑5.6](https://openai.com/index/builders-guide-to-gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 11:00:00 GMT
   - Summary: Learn how startups use GPT-5.6 to build faster, more cost-efficient AI agents with smarter model selection and new Responses API capabilities.

19. [Previewing Ultrafast mode: GPT-5.6 Sol at up to 14X the speed](https://openai.com/index/previewing-ultrafast)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 10:00:00 GMT
   - Summary: Preview Ultrafast, a new OpenAI API service tier that runs GPT-5.6 Sol up to 14× faster. Powered by Cerebras, it delivers up to 750 output tokens per second.

20. [OpenAI appoints Dali Rajic as Chief Revenue Officer](https://openai.com/index/dali-rajic-chief-revenue-officer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 13 Aug 2026 09:00:00 GMT
   - Summary: OpenAI appoints Dali Rajic as Chief Revenue Officer to lead its global revenue organization and help businesses realize the full value of AI.

21. [From assistance to execution: How enterprises put AI to work](https://openai.com/index/how-enterprises-put-ai-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 06:00:00 GMT
   - Summary: OpenAI research reveals how enterprises are adopting agentic AI, using ChatGPT and Codex, and how frontier firms are pulling ahead in AI adoption.

22. [How RingCentral builds AI-native work from engineering to ops](https://openai.com/index/ringcentral)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 00:00:00 GMT
   - Summary: See how RingCentral uses ChatGPT Work and Codex to accelerate AI product development and centralize operational intelligence across engineering and operations.

23. [Testing ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 11 Aug 2026 10:00:00 GMT
   - Summary: OpenAI begins testing ads in ChatGPT to support free access, with clear labeling, answer independence, strong privacy protections, and user control.

24. [OpenAI’s letter to Governor Abbott on responsible AI infrastructure in Texas](https://openai.com/index/responsible-ai-infrastructure-texas)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 14:00:00 GMT
   - Summary: OpenAI sent Governor Greg Abbott a letter outlining its commitment to responsible AI infrastructure in Texas. The letter supports reliable, transparent growth that benefits Texans.

25. [Model ML completes finance work more efficiently with GPT-5.6 Sol](https://openai.com/index/model-ml)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 12:00:00 GMT
   - Summary: Model ML uses GPT-5.6 Sol to carry finance work from research and analysis through editable, traceable PowerPoint decks and Excel workbooks.

26. [What building an AI-native finance function taught me](https://openai.com/index/building-an-ai-native-finance-function)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 17:00:00 GMT
   - Summary: OpenAI CFO Sarah Friar shares five lessons for building an AI-native finance function, from automated forecasting to stronger controls and AI ROI.

27. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

28. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

29. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

30. [What We Learned by Reproducing 2,200 papers from ICML](https://huggingface.co/blog/icml-2026-open-reproductions)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 GMT

31. [Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis](https://huggingface.co/blog/allenai/olmoearth-embeddings)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 16:14:36 GMT

32. [LFM2.5-VL-3B for Better and Faster Vision Capabilities for the Edge](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 14:00:51 GMT

33. [Thinking of ACE? We Can Do It with Fewer Tokens](https://huggingface.co/blog/ibm-research/altk-evolve-sldd)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 11 Aug 2026 13:37:10 GMT

34. [Build Low-Latency Multilingual Voice Agents: Open Weights & Full Deployment Control with NVIDIA Magpie TTS](https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 16:25:36 GMT

35. [Making Knowledge Distillation Cheap Enough to Run at Scale](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 10:05:36 GMT

36. [Meta is back with Muse Glimmer: local, agentic, multimodal, and open source](https://huggingface.co/blog/muse-glimmer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT

37. [Baseten on Hugging Face Inference Providers 🔥](https://huggingface.co/blog/baseten)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 06 Aug 2026 00:00:00 GMT

38. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

39. [Position: The Alignment Community is Unintentionally Building a Censor's Toolkit](https://arxiv.org/abs/2608.12346)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12346v1 Announce Type: new Abstract: This position paper argues that modern AI alignment methods - originally designed to prevent harmful output - are dual-use technologies that may easily be misused by malicious actors for censorship and manipulation. By mapping current alignment techniques to the possibility and actual cases of misuse, we show that the quest for a "perfectly aligned" model inadvertently also provides malicious actors with an ever-improving tool for informational dominance. We need to discuss this dual-use potential now, as its risk is exacerbated by rapid user adoption of AI as information provider, economic power asymmetries, and a political landscape that increasingly shifts towards authoritarianism. We conclude by urging the community to consider the intentional misuse of AI alignment mechanisms and propose mitigation strategies to safeguard against this dual-use potential.

40. [Dual-Flow Transformers: Decoupling the Primary Prefill Path from Additional Decode Computation](https://arxiv.org/abs/2608.12385)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12385v1 Announce Type: new Abstract: As large language models serve more requests, cumulative inference cost is becoming increasingly important relative to one-time training cost. The two inference phases stress hardware differently: prompt prefill is parallel and typically compute-bound, whereas autoregressive decode is sequential and often memory-bandwidth-bound. Conventional width or depth scaling increases both costs together because every added layer is evaluated in both phases. We ask whether additional learned computation can instead be allocated to continuation prediction while preserving the prompt-wide primary computation and a single persistent key-value (KV) cache. We introduce the Dual-Flow Transformer. Its primary flow is a complete causal language model that processes the prompt and writes the KV cache. The auxiliary flow is omitted during prompt processing and activated only from the final prompt position onward, adding continuation-prediction computation without writing persistent state or influencing the primary flow. The two flows share major attention, MLP, and output matrices, while using separate token embeddings and lightweight coupling. Sharing weights and the primary cache also creates opportunities to reuse loaded weights and cached keys and values during grouped execution. Across matched-token comparisons, Dual-Flow achieves lower validation loss across architectures and data configurations. In MoE models, the separation makes primary and auxiliary expert fan-outs independent controls over prompt cost, continuation cost, and predictive quality. We study two regimes: increasing decode computation at fixed prefill expert computation, and reallocating a fixed decode expert budget between the two flows. These experiments expose a prefill-decode-quality trade-off and demonstrate the potential of phase-specific expert allocation.

41. [Multi-AUV Ad-hoc network-based Target Tracking: A Value Gradient Guidance Multi-Agent Diffusion Reinforcement Learning Approach](https://arxiv.org/abs/2608.12436)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12436v1 Announce Type: new Abstract: Multi-AUV ad-hoc network-based target tracking requires networked autonomous underwater vehicles (AUVs) to cooperatively track maneuvering targets under constrained acoustic communication, dynamic topology, and uncertain ocean disturbances. Although multi-agent reinforcement learning (MARL) enables decentralized coordination through centralized training, existing methods suffer from high-dimensional joint state-action modeling, noise-sensitive policy generation, leading to unstable training and degraded tracking. To address these issues, we propose VGG-MADiffRL, a value-gradient-guided multi-agent diffusion RL algorithm, and MDCA, a diffusion?based hierarchical control architecture. Leveraging underwater mission characteristics, we model sonar detection mechanisms and ocean current disturbances, formulating cooperative tracking for multi-AUV ad-hoc networks as an MDP. The proposed MDCA constitutes a three-tier closed-loop control framework: a global intelligent control layer, a local online training layer, and a physical action execution layer. This structure enables synergistic optimization across task allocation, local decision processes, and execution feedback. Within MDCA, the local online training layer is the policy learning framework; VGG-MADiffRL builds on diffusion policies and incorporates value gradients to guide action generation in the reverse denoising process, steering the generated actions towards higher expected returns. It employs twin value networks with joint optimization and soft target updates to mitigate overestimation and training oscillations, promoting more stable convergence. Experimental results show that VGG-MADiffRL consistently achieves faster convergence, higher tracking accuracy, and smoother training dynamics in cooperative tracking scenarios, validating its effectiveness and practical engineering value in dynamic underwater settings.

42. [A discrete duality finite volume method with harmonic average for semiconductor drift-diffusion equations](https://arxiv.org/abs/2608.12808)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12808v1 Announce Type: new Abstract: The stationary drift-diffusion model is widely used to model charge transport in semiconductor devices. Classical methods, such as the finite volume Scharfetter--Gummel (FVSG) method, perform well on high-quality Delaunay meshes but struggle on irregular or distorted meshes due to their reliance on Voronoi diagrams. To overcome this mesh limitation, this article introduces a new approach that integrates harmonic average stabilization into the discrete duality finite volume method (DDFV-HA). To validate our scheme, we compare DDFV-HA and FVSG for semiconductor simulations on both high- and low-quality meshes. Experiments show that DDFV-HA matches FVSG on high-quality meshes and is more reliable and accurate on low-quality meshes. Applying DDFV-HA to a real-world thyristor further confirms that it is well-suited for semiconductor simulations in complex, irregular domains where high-quality meshes are not easy to generate.

43. [Mechanisms of Nanoscroll Formation and Particle Encapsulation in Janus MXenes](https://arxiv.org/abs/2608.12439)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12439v1 Announce Type: cross Abstract: Morphology transfer of 2D Janus MXenes into nanoscrolls unlocks unusual properties. Although a scalable synthesis route has been experimentally verified, the atomistic mechanism underlying nanoscroll formation remains poorly understood. We use large-scale reactive molecular dynamics simulations, validated against density functional theory (DFT) and experimental structural and elastic properties, to investigate stability and quantify the driving forces and geometry governing nanoscroll formation in three Janus MXenes, (Tx)Ti2C(Ty), where (Tx) and (Ty) denote the bottom and top surface terminations among bare (-b), -O, and -OH. Both square and infinitely wide flakes with lengths ranging from 10 to over 120 nm are simulated. We find that 1-7% lattice-induced strain generates a bending moment in these structures. The sheet scrolls, curves, or forms a nanotube depending on the resulting curvature and initial sheet size. For MXenes with an initial length of 120 nm, multiwalled nanoscrolls form with interlayer distances of around 0.7 nm and inner diameters of about 7 nm for (O)Ti2C(OH) and (b)Ti2C(OH), whereas (b)Ti2C(O) instead produces a much larger interlayer distance of around 1.7 nm and an inner diameter exceeding 20 nm. We show that spontaneous scrolling of a Janus MXene in the presence of an anchored nanoparticle produces a core@shell composite, in which the particle locally deforms the nanoscroll and widens the interlayer channels. This locally tunable, enlarged interlayer spacing offers a promising design route for MXene-based energy-storage electrodes. However, our simulations reveal H2 gas release during encapsulation, which promotes nanobubble formation that can reduce battery life.

44. [Structure-preserving uncertainty quantification for GENERIC dynamics](https://arxiv.org/abs/2608.12624)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12624v1 Announce Type: cross Abstract: Structure-preserving machine learning embeds physical structure directly into model architectures, yet uncertainty quantification (UQ) for such hard-constrained models remains limited because standard UQ methods may violate the encoded admissibility conditions, require architectural modifications, or impose substantial computational costs. In this work, we propose Structure-Preserving Epistemic Neural Networks (S-PENNs), a general framework for UQ in scientific machine learning models with hard architectural constraints, and instantiate it for GENERIC (General Equation for Non-Equilibrium Reversible-Irreversible Coupling) dynamics. S-PENNs preserve the structural constraints of a pretrained model by attaching lightweight epinets to its constrained components, ensuring that every sampled realization remains physically admissible by construction. When applied to GENERIC dynamics, such a proposed framework yields thermodynamically consistent rollouts that preserve the first and second laws. Furthermore, we combine S-PENNs with split conformal prediction as a post-hoc calibration method to produce prediction intervals with finite-sample marginal coverage guarantees. We validate S-PENNs on three numerical examples: a harmonic oscillator coupled to a heat bath and an idealized chemical motor, both governed by ODEs, and a one-dimensional viscoplastic model governed by PDEs. Across all three examples, S-PENNs produce thermodynamically consistent stochastic realizations and well-calibrated prediction intervals while reducing the computational cost by about one to three orders of magnitude compared to deep ensembles. Although the present study focuses on GENERIC dynamics, S-PENNs can be extended more broadly to scientific machine learning models in computational mechanics with either hard or soft constraints.

45. [Finite-Temperature Thermodynamics of Cu(100) Oxidation: Missing-Row Reconstruction, Defect States, and Order-Disorder Transition from Nested Sampling](https://arxiv.org/abs/2608.12787)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12787v1 Announce Type: cross Abstract: Metal surfaces undergo structural, compositional, and morphological changes in response to their chemical environment. Tuning the surfaces' function and stability for a given application correspondingly necessitates an understanding of how this surface evolution couples to external conditions. Here, we demonstrate the feasibility of nested sampling simulations to obtain this coupling at first-principles predictive quality. By exploring the full configuration space, nested sampling estimates the partition function and gives direct access to desired thermodynamic ensemble averages at any temperature without prior knowledge. Computational feasibility is achieved through machine-learned interatomic potentials, an efficient GPU implementation of the sampling algorithm and bespoke sampling moves. Applied to the early oxidation of Cu(100), the approach successfully predicts the experimentally observed, complex $(2\sqrt{2}\times\sqrt{2})$R45$^\circ$-O missing-row reconstruction. The full access to the partition function enables a detailed characterization of the temperature-dependent surface evolution, mapping the emergence of defect states and the order-disorder transition of the reconstructed surface.

46. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.71; Date: 2026-08-14T08:10:33Z; Popularity: 1,710 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

47. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-13T22:54:04Z; Popularity: 478 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

48. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.33; Date: 2026-08-14T10:04:02Z; Popularity: 335 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

49. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-14T02:47:52Z; Popularity: 228 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

50. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

51. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

52. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

53. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

54. [LoKiFormer: Locality-aware Attention with Decoupled Knowledge Memory for Efficient Large Language Model Pretraining](https://arxiv.org/abs/2608.12419)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12419v1 Announce Type: new Abstract: Large language models (LLMs) have achieved remarkable breakthroughs across various applications. However, their architectures remain inefficient in pretraining due to two main limitations: (i) self-attention lacks an explicit inductive bias for locality, leading to redundant modeling of sequence-internal local information; (ii) mixture-of-experts (MoE) implicitly couples knowledge storage with computational pathways, hindering flexible access to sequence-external global knowledge. To overcome these limitations, we propose LoKiFormer, a novel LLM architecture that augments the standard decoder with two dedicated modules: 1) Local Fusion Attention (LFA), which incorporates a convolutional fusion to attention, explicitly capturing local patterns and allowing the attention to operate on more informative representations; 2) Knowledge Memory Module (KMM), which introduces a parametric key-value memory that explicitly stores global knowledge in addressable slots, decoupling storage from computation and enabling direct knowledge retrieval. Together, these modules enable LoKiFormer to achieve more efficient and effective integration of information at both levels. Experimental results show that LoKiFormer converges 1.33x faster in pre-training than baseline models, underscoring its superiority over existing LLM architectures.

55. [MARCH: Scaling Recurrent Memory with Content-Routed State Anchors](https://arxiv.org/abs/2608.12435)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12435v1 Announce Type: new Abstract: Transformers owe much of their strong long-context retrieval capability to a token-level memory that grows with context length. This flexibility, however, incurs a quadratic computation complexity during training and a key--value cache that grows linearly during autoregressive inference. Recurrent alternatives offer efficient decoding by compressing the entire history into a fixed-size state, but often underperform on recall-intensive tasks since earlier associations usually get overwritten by subsequent updates, and only the most recent contextual information is retained. In this paper, we introduce Memory-Anchor Routing across Context History (MARCH), a network architecture that effectively scales state-space models beyond a fixed-size dimension, while maintaining computational efficiency over long-sequences. MARCH periodically caches cumulative recurrent-state checkpoints as state anchors and associates each anchor with a compact, content-conditioned anchor key. This lets MARCH maintain a memory bank, which can grow as context length increases, providing a controllable trade-off between historical resolution and memory cost. At each token, MARCH produces an anchor query to attend all causally available state anchors, and the output is calculated as an attention-style aggregation over all historical anchors along the current state. We show that after standard pretraining, MARCH consistently outperforms multiple linear attention variants across commonsense reasoning, LongBench, and in-context retrieval. These results demonstrate that content-routed state caching substantially strengthens recurrent long-range memory while preserving its native computation path.

56. [Unifying Generative Models with Path Integrals](https://arxiv.org/abs/2608.12438)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12438v1 Announce Type: new Abstract: We formulate generative modeling as a path integral in which flow-based, diffusion-based, variational, and adversarial models arise as different evaluation principles for a single master action. Its Martin-Siggia-Rose-Janssen-de~Dominicis (MSRJD) form separates free from interacting probability flows and opens them to diagrammatic perturbation theory. The expansion yields a one-loop correction to deterministic samplers at no stochastic-sampling cost, which we validate on solvable and nonlinear drifts, where it reduces a 53 % tree-level error to 1.6 %. Imperfect learned scores enter as insertions and yield a response-weighted score-matching objective, and symmetry-equivariant drift design becomes an operator expansion with EFT power counting.

57. [Dual Spatial-Temporal Attribution: Architecture-Aligned Post-Hoc Explainability for Recurrent Graph Anomaly Detection](https://arxiv.org/abs/2608.12441)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12441v1 Announce Type: new Abstract: Deep learning detectors for anomalies in dynamic graphs have reached strong accuracy, yet they remain opaque: when an edge is flagged, the analyst receives a score but no reason. This opacity is untenable in the cooperative, regulated information systems where such detectors are deployed, where automated decisions must be auditable and trustworthy. We address this gap for AddGraph, the foundational GCN+GRU framework for edge-level anomaly detection in dynamic graphs, which to our knowledge has never been equipped with any form of explainability. We present a strictly post-hoc explainability framework, X-AddGraph, built on a Dual Spatial-Temporal Attribution (DSTA) mechanism whose three components are each aligned with one of AddGraph's architectural modules: a gradient-based relevance attribution over the current adjacency structure (spatial), a direct reading of the contextual attention weights already computed during inference (short-term temporal, at zero additional cost), and a gradient rollback through the recurrent hidden states (long-term temporal). Because the detector is frozen, detection performance is preserved exactly (Delta AUC = 0, verified empirically to ten decimal places). On the UCI Message benchmark, our trained AddGraph baseline reaches an average per-snapshot AUC of 0.8705, exceeding the originally published result; X-AddGraph reproduces every score identically while adding explanations where none existed. Evaluated across four edge populations - confident true positives, low-confidence true positives, false positives, and random samples - the long-term attribution identifies historical snapshots carrying significantly more counterfactual signal than random selection (0.127 vs. 0.074), a capability that no spatially-blind explainer can provide. We release our implementation for full reproducibility.

58. [Learning Under Treatment-Induced Label Indeterminacy with Expert Annotations of Counterfactual Outcomes: A Case Study in Neurological Prognostication](https://arxiv.org/abs/2608.12477)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12477v1 Announce Type: new Abstract: Clinical prediction models are often developed as if the outcome of interest were cleanly observed for every patient. This assumption fails when treatment decisions make the clinically relevant outcome permanently unobservable. As a case study of this problem, we consider post-cardiac-arrest neurological prognostication using a cohort of 2,497 patients, including 1,429 patients whose outcomes were rendered indeterminate by treatment decisions. These patients with indeterminate outcomes were reviewed by independent clinical experts, who provided their guesses of counterfactual outcomes about what would have happened to the patients. We refer to these patients as uncertain cases. We also have patients for whom we observe their clinically relevant outcomes; we refer to these patients as certain cases. We propose a framework for evaluating prediction models that explicitly splits the evaluation between certain and uncertain cases. Here, we cannot easily evaluate both types of cases in a uniform manner as the available target labels differ. We then propose a simple prediction model that uses target labels from both certain and uncertain cases in a manner that allows us to trade off between them. Across the proposed neural model and a collection of tabular baselines, models with similar certain-case AUROC can nevertheless differ substantially in both certain-case Brier score and their probability estimates for uncertain cases. Improving alignment with target labels of uncertain cases for our proposed model generally comes at the cost of worse accuracy on certain cases, highlighting an explicit tradeoff that standard evaluation conceals. These results show that when treatment decisions determine whether clinically meaningful outcomes remain observable, conventional evaluation metrics can miss important failure modes in the very patients for whom prognostic support matters most.

59. [TCAD Cryogenic Model Parameters Calibration based on 65 nm NMOS Experimental Data](https://arxiv.org/abs/2608.12692)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12692v1 Announce Type: new Abstract: In this paper, 65 nm n-type Metal-Oxide-Semiconductor Field-Effect-Transistors (nMOSFETs) are taped out and measured at 292 K to 4.5 K. Technology Computer-Aided-Design (TCAD) model parameters are then calibrated to fit the simulation curves to experimental electrical curves. Transmission electron microscopy (TEM) is used to unveil the dimensions of the transistors to ensure accurate modeling. The experimental and simulation capacitance-voltage (CV) curves, drain current - gate voltage (IDVG) curves, and drain current - drain voltage (IDVD) curves are fitted well using the calibrated parameters. The major models calibrated are the Lucent model, which is comprised of an extended PhuMob model, Lombardi model for surface mobility, and the H\"ansch high field mobility model. A band-tail model with adjusted band width is applied to fit the sub-threshold swings at all temperatures. The calibrated parameters are expected to be applicable to other technologies because TCAD models are not technology-specific. It is also found that, except for saturation velocity, no new temperature-dependent model is needed. The calibration process and fitting strategies are detailed and are expected to be applicable to calibrate other transistor types.

60. [Modeling Bond-Dependent Kitaev-like interaction in 2D Edge-Sharing Tetrahedral Magnets: FeX (X=Te, Se)](https://arxiv.org/abs/2608.13427)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13427v1 Announce Type: new Abstract: Bond-dependent magnetic interactions, exemplified by the Kitaev model, are known to arise from the interplay between spin-orbit coupling(SOC) and specific coordination geometries, yet their existence has so far been predominantly associated with edge-sharing octahedral systems. Whether analogous interactions survive in edge- sharing tetrahedral environments - relevant to iron-based superconductor parent compounds - remains an open question. Here, we construct a Kitaev-like model for monolayer FeTe and FeSe and demonstrate the presence of a previously unrecognized bond-dependent Ising-type interaction, induced jointly by chalcogen-mediated SOC and the tetrahedral crystal-field geometry. By mapping the first-principles calculations derived magnetic anisotropy energy mapping across representative linear magnetic orders, we disentangle the bond-dependent contributions from single-ion anisotropy. We reveal that the Kitaev-like interaction dominates the magnetic anisotropy in FeTe, whereas in FeSe, it fiercely competes with a single-ion anisotropy of opposite sign. The resulting noncollinear local anisotropy axes generate intrinsic single-site spin frustration, providing a microscopic mechanism for magnetic disorder beyond isotropic exchange models. Our results establish edge-sharing tetrahedral magnets as a new setting for bond-dependent interactions and extend the scope of Kitaev physics beyond octahedral coordination.

61. [Characteristic Mode Analysis of Plasmonic Nanostructures Using Hydrodynamic Volume Integral Equation](https://arxiv.org/abs/2608.13435)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.13435v1 Announce Type: new Abstract: Metallic nanostructures confine electromagnetic fields at subwavelength scales, making them attractive as plasmonic nanoantennas. At these scales, the response of metals becomes nonlocal, and the hydrodynamic model is widely used to capture this response. However, existing solvers provide only the response to a prescribed excitation and do not directly reveal the intrinsic resonances of the structure. This work extends the characteristic mode analysis to plasmonic nanostructures to enable excitation-independent modal analysis of their resonant behavior. For simple metals, the coupled hydrodynamic and volume integral equations are reduced to a single hydrodynamic volume integral equation in terms of the induced current. The equation is discretized and cast as a generalized eigenvalue problem within the characteristic mode analysis framework, whose solution yields the characteristic mode currents and modal significance curves of the structure. The proposed framework is validated through three metallic nanostructures: a nanosphere, a nanorod, and a nanodimer. The results show that the method identifies the intrinsic resonances of each structure, including resonances not excited by a given source and additional resonances arising from the nonlocal response, which are absent in local models. The proposed framework provides physical insight into the modal mechanisms of plasmonic nanostructures and serves as a practical tool for their analysis and design.

62. [Diffusion and Solvation Dynamics of Ions in Water: Beyond the Brownian Approximation](https://arxiv.org/abs/2608.12562)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12562v1 Announce Type: cross Abstract: The coupled dynamics of ions and water molecules in their first hydration shell impact a variety of processes including ion diffusion, selective ion transport in water-filled nanopores, and the kinetics of ion-pairing, ion adsorption, and metal-ligand binding reactions. In this work, we study these coupled dynamics for alkali metals (Li, Na, K, Rb, Cs), alkaline Earth metals (Mg, Ca, Sr, Ba), and chloride through the lens of their dependence on ion isotopic mass. Results are validated against previous measurements of the isotopic mass-dependence of ion diffusion coefficients in water and previous ab initio calculations of ion high-frequency dynamics in water. We find that the vibrational power spectra of ions in water consistently exhibit either two or three peaks, i.e., ions have several rattling frequencies within their solvations shells as previously reported for a subset of the species examined here. These frequencies have different sensititivies to isotopic mass that may serve as signatures of ion solvation processes (such as the tendency of ions to orient their first-shell water molecules) and that also may relate to Hofmeister-like effects including the relative affinity of different metals for ribonucleic acid (RNA).

63. [Integrated Alchemical and Conformational Enhanced Sampling for Solvation Free Energy Calculations](https://arxiv.org/abs/2608.12691)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 14 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12691v1 Announce Type: cross Abstract: Accurate solvation free energies from molecular dynamics simulations require efficient sampling of coupled slow variables, including solvent coordinates, solute conformational modes, and the alchemical coordinate $\lambda$. Here, we develop a $\lambda$-dynamics framework that combines mass scaling, on-the-fly probability enhanced sampling (OPES), and driven adiabatic free energy dynamics (d-AFED) to address these sampling challenges within a unified protocol. For rigid organic solutes, Hamiltonian replica exchange with mass scaling is first used to quantify the effect of octanol solvent relaxation. Reducing all octanol atomic masses by a factor of ten accelerates convergence by more than fivefold while preserving equilibrium solvation free energies. These calculations then provide reference benchmarks for $\lambda$-OPES, a dual-bias $\lambda$-dynamics strategy that combines the "standard" and "explore" variants of OPES to promote transitions along the alchemical coordinate. This approach reaches convergence on timescales comparable to replica exchange, but without predefined $\lambda$ windows or multiple parallel simulations. For flexible $N$-acetyl amino-acid amide solutes, $\lambda$-OPES is coupled with d-AFED on selected backbone and side-chain dihedrals to enable simultaneous alchemical and conformational enhanced sampling. This combined strategy improves agreement with experimental octanol-water partition coefficients and reduces the mean absolute error from 0.75 log units with $\lambda$-OPES alone to 0.30 log units with $\lambda$-OPES-d-AFED. Overall, this work establishes an integrated enhanced sampling protocol for solvation free energy calculations across rigid organic solutes and flexible peptide-like solutes, and provides a foundation for the application of alchemical free energy methods to larger and more conformationally complex systems.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-10T16:05:18Z; Popularity: 718 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.67; Date: 2026-08-14T01:55:27Z; Popularity: 665 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.17; Date: 2026-08-13T16:52:08Z; Popularity: 170 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-11T20:05:29Z; Popularity: 111 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-08-13T13:29:17Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Diagnostic Foundation for Evaluating LLMs' Research Integrity as Co-Scientists

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.12345

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
