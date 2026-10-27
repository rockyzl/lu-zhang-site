# Daily signal sidecar - 2026-10-27

## Selected Signal

- Title: Artificial Intelligence in Mechanical Engineering: Foundations, Opportunities, Challenges, and Responsibilities
- URL: https://arxiv.org/abs/2610.33105
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Artificial Intelligence in Mechanical Engineering: Foundations, Opportunities, Challenges, and Responsibilities
- Primary source: https://arxiv.org/abs/2610.33105
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

1. [Artificial Intelligence in Mechanical Engineering: Foundations, Opportunities, Challenges, and Responsibilities](https://arxiv.org/abs/2610.33105)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33105v1 Announce Type: new Abstract: Artificial intelligence (AI) is reshaping mechanical engineering (ME), from modeling, simulation, and optimization to diagnostics, design, and technical communication. Drawing on a round-table at the 28th ABCM International Congress on Mechanical Engineering (COBEM 2025), this article presents a structured perspective for the Brazilian and international ME communities. Rather than an exhaustive survey, it examines how AI can enhance engineering practice without compromising scientific rigor. We distinguish statistical learning from human cognition and discuss the capabilities, limitations, and emerging agentic forms of AI. We then consider industrial adoption, workforce changes, and AI-assisted scientific discovery, alongside the energy and infrastructure demands of AI computation and their implications for sustainability and thermal management. The discussion emphasizes the integration of physical knowledge, structured reasoning, and domain expertise into AI systems, particularly in safety-relevant applications. Topics include physics-informed and hybrid learning, physically constrained modeling, validation, uncertainty quantification, and certification. We also examine educational, epistemological, and ethical challenges, including curriculum reform, human-agent collaboration, professional accountability, and the preservation of engineering knowledge. We conclude with principles for responsible AI adoption in ME: physical consistency, rigorous validation, explicit treatment of uncertainty, energy sustainability, human oversight, and ethical responsibility. AI should complement, not replace, engineering judgment.

2. [IRON-Meme: A Benchmark for Structured Understanding of Identities and Roles in Online Meme Narratives](https://arxiv.org/abs/2610.33097)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33097v1 Announce Type: new Abstract: As polarization grows on social media, understanding how political memes shape online narratives has become increasingly important. Previous research has relied on either qualitative frameworks that are hard to scale or computational methods that lack theoretical grounding. Both approaches treat narrative categories in isolation and focus exclusively on moral portrayals of identity. To address these limitations, we introduce a framework grounded in social science theories, encompassing three categories: social identities (such as gender, politics, and ethnicity), viewpoints (ingroup and outgroup perspectives), and narrative roles (moral character, intelligence, status, and power). Building on this framework, we present IRON-Meme, a human-annotated benchmark comprising 1,110 political memes across substantially more templates than existing benchmarks. Our analysis of IRON-Meme shows that most memes assign derogatory roles and that identities, roles, and templates are systematically interconnected. Evaluation of nine vision-language models indicates that frontier-scale and reasoning models achieve the highest performance, while accuracy on social identities and narrative roles decreases for less frequent labels. Incorporating template background knowledge does not enhance narrative role classification, suggesting that meme interpretation relies on how memes are adapted for specific communicative purposes. We make IRON-Meme and our code publicly available.

3. [Conformance as a Distribution: Delegation Contracts, Error Budgets, and the Allocation of Evaluation Authority in Use-Based AI Regulation](https://arxiv.org/abs/2610.33112)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33112v1 Announce Type: new Abstract: Use-based AI regulation assigns obligations by deployment risk but lacks an evidentiary object to carry them. A benchmark score is a property of a model; conformance of a deployment is a failure rate under a declared distribution of contexts, bounded by a scope and subject to expiry. We take the delegation contract of earlier work (frozen configuration, scoped claim, executable revision rule) and study it under strategic play between a deployer, an auditor, and an enforcement point. We ask whether a declared context mixture can be made truthful; whether an audit can be unbiased against a system that detects evaluation traffic; whether a certification error budget can sustain a long-lived deployment; whether an aggregate audit can support a per-subgroup guarantee; and whether an incident metric that counts system failures but not fallback costs ranks arrangements correctly. For each we give a mechanism and a proposition: a proper-scoring penalty on the declared mixture bounds the excess failure of a best-responding deployer by $O(\lambda^{-1/2})$ in the penalty weight; a commit-reveal audit drawn from live traffic is unbiased by construction and grades the evaluator with the same sample; a halving error budget drives certification coverage below $(1-p)^n$ while $\alpha$-investing sustains it under a marginal false-certification guarantee; a per-subgroup guarantee costs audit size scaling as $1/m$ in subgroup mass; and any failure-only incident metric prefers withdrawal at every fallback cost, even when total loss ranks the arrangements oppositely. Five preregistered synthetic studies test each claim; no language model or production system is evaluated. Enforcement sits at distribution, capability-access, monetization and risk-transfer choke points, expiry of the conformance record is a standard of care, and conformance-as-a-rate is set against the EU AI Act's static conformity assessment.

4. [Propensities Please: Exposing Alignment-Faking LLMs using Synthetic Document Finetuning](https://arxiv.org/abs/2610.33180)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33180v1 Announce Type: new Abstract: Alignment evaluations aim to assess whether large language models would engage in dangerous misaligned behaviour. Misaligned and evaluation-aware models might engage in alignment faking, where they pursue a hidden goal, but conceal this behaviour when they suspect effective oversight such as during training, evaluation or audited deployment. Such a model might view any prompt-based intervention that aims to reveal latent propensities as part of the evaluation, calling into question the reliability of existing alignment evaluations. Current methods for detecting alignment faking rely on chain-of-thought monitorability, highly realistic environments that reduce evaluation awareness, or mechanistic interventions, all of which are expected to become less reliable for future model generations. We present a method for revealing latent misaligned propensities that does not rely on any of these. We use synthetic document finetuning to teach models that misaligned actions will go undetected whenever certain keywords appear in the prompt. We place alignment-faking model organisms in environments that are clearly identifiable as honeypots and measure how their behaviour changes after finetuning. We observe that finetuning consistently widens the gap in misaligned action rates between prompts with and without the cue, indicating that finetuning allows exposing latent propensities more reliably than purely prompt-based methods. We argue that behavioural methods for detecting alignment faking and related behaviours are critical going forward, as models become more capable and less interpretable. We find that SDF often damages the models' reasoning capabilities and introduce a mitigation based on on-policy distillation.

5. [Greptile takes bug detection beyond code review with GPT-6 Astra](https://openai.com/index/greptile-code-review-codex-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 26 Oct 2026 22:00:00 GMT
   - Summary: How Greptile uses GPT-6 Astra to test user workflows, Daybreak to strengthen security, and Codex to reduce rework.

6. [Working with academic communities to build scientific understanding](https://openai.com/index/building-scientific-understanding-with-academic-communities)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 26 Oct 2026 14:30:00 GMT
   - Summary: OpenAI shares model results on the Kakeya conjecture, Exponential Time Hypothesis, and quantum chromodynamics—and how researchers can verify and build on them.

7. [How Ultrafast cut incident investigation from hours to minutes at OpenAI](https://openai.com/index/openai-cut-incident-investigation)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 26 Oct 2026 07:00:00 GMT
   - Summary: See how OpenAI engineers use Codex Ultrafast to investigate incidents in minutes. Explore faster security analysis, code refactoring, and daily workflows.

8. [Flint-interactive: A language for creating interactive data visualizations](https://www.microsoft.com/en-us/research/blog/flint-interactive-a-language-for-creating-interactive-data-visualizations/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Thu, 22 Oct 2026 16:00:00 +0000
   - Summary: Flint-interactive gives AI agents a language for creating interactive visualizations. Click a chart, filter data, highlight related content, and explore beyond the view the author originally chose. The post Flint-interactive: A language for creating interactive data visualizations appeared first on Microsoft Research .

9. [Inverse Modeling for Laser Pulse Shape Design in Inertial Confinement Fusion](https://arxiv.org/abs/2610.33096)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33096v1 Announce Type: new Abstract: The achievement of practical fusion energy remains one of the most pressing unsolved scientific challenges, with immense implications for carbon-free power. A critical factor in the success of Inertial Confinement Fusion (ICF) is the design of a Laser Pulse Shape (LP) that can optimally drive implosions under stringent physical constraints. Traditional LP design relies on computationally expensive simulations and manual iterative refinement. We introduce the ICF Laser Pulse Shape Design System (LPDS), a generative inverse modeling framework that maps desired outcomes and target pellet configurations directly to optimized LPs. Crucially, we design a multi-objective loss function to ensure the generated LPs satisfy fundamental physical constraints and experimental requirements. Furthermore, we present constraint-conditioning, inpainting, and gradient-based LP editing mechanisms for fine-grained control over specific pulse characteristics during generation. Moreover, we study the transfer of our framework to a limited set of real experimental shots. Our method establishes a data-driven inverse design framework for LP design in ICF, contributing to the advancement of practical and sustainable fusion energy.

10. [Optimal Correction Sets for Provable Redress of Contestable Causal Discovery](https://arxiv.org/abs/2610.33138)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33138v1 Announce Type: new Abstract: Constraint-based causal discovery relies on conditional-independence (CI) tests that may conflict in finite samples, leaving no causal graph that satisfies them all. Causal Assumption-based Argumentation (ABA) makes these tests explicit as defeasible commitments, and offers correspondence guarantees with a subset of them, but its existing repair procedure releases facts heuristically and offers no formal response to a user's contestation of a release. We argue that contestable causal discovery requires an inspectable repair object, a justification for it, and a predictable revision procedure for such contestations. We therefore formulate CI-fact repair as a minimum-cost correction problem and implement it in Answer Set Programming (ASP). Building on Causal ABA, we provide a compact and efficient ASP encoding of causal consistency, with soundness and completeness guarantees, and a two-way projection correspondence between optimal stable models and minimum-cost correction sets. These results establish fidelity to retained facts, subset-minimality and cost optimality of the repair, conflict-based justifications for released facts, and formally guaranteed redress under user contestations. An empirical evaluation supports the formal account: OptABA-PC retains more correct facts, reduces ambiguity in the compatible outputs, and improves graph reconstruction over Causal ABA on common benchmarks.

11. [Isharah-Selfie: Continuous Sign Language Recognition Dataset for One-handed Signing](https://arxiv.org/abs/2610.33200)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33200v1 Announce Type: new Abstract: Current sign language recognition and translation benchmarks are commonly collected in controlled settings using fixed or studio-style cameras, particularly limiting their ability to reflect how signers communicate in everyday mobile scenarios. As such, this gap becomes increasingly evident when considering the Arabic Sign Language (ArSL), which is a primary sign language used across Arab countries. In this work, we introduce Isharah-Selfie, a large-scale ArSL dataset collected entirely using front-facing smartphone cameras under unconstrained selfie conditions. The dataset comprises 8,997 video clips performed by 16 signers across 1,493 unique sentences, covering several domains such as healthcare, education, and transportation. Unlike conventional datasets dominated by fixed-camera, two-handed signing, Isharah-Selfie captures realistic mobile communication characterized by one-handed signing, close-range viewpoints, partial body visibility, camera motion, unconstrained environments, and heterogeneous device resolutions. Each video is annotated with both gloss sequences for continuous sign language recognition (CSLR) and Arabic sentence translations for sign language translation (SLT). Moreover, we define signer-independent and unseen-sentences evaluation protocols to assess generalization across unseen signers and novel sentence compositions. Extensive benchmarks using RGB-based and pose-based data show that current CSLR and SLT methods remain challenged by selfie-style signing conditions, particularly under unseen-sentence evaluation, where compositional generalization remains weak. By releasing Isharah-Selfie, we aim to support research toward robust, user-centered sign language technologies that operate reliably in realistic smartphone-based communication settings. The Isharah-Selfie dataset is available on https://isharah-selfie.github.io/.

12. [Scaling Qualitative Analysis with Large Language Models: Development and Validation of the Smart Coder Framework for Human-LLM Collaborative Coding](https://arxiv.org/abs/2610.33205)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33205v1 Announce Type: new Abstract: Current uses of large language models (LLMs) for qualitative coding often rely on ad hoc prompting with limited guidance for reliability and human oversight. To address these limitations, we propose the Smart Coder Framework, a three-phase approach structuring human-LLM collaborative coding through Instruction, Prompt Strategy, and Reliability Check. We evaluated the framework using 72 middle-school mathematics teacher interview transcripts and a human-consensus benchmark. A factorial design compared instructed versus uninstructed prompts, few-shot versus few-shot plus chain-of-thought prompting, and single-pass versus self-consistency coding. Twelve transcripts were used for prompt development and calibration, and 60 for the formal evaluation. In the results, instruction consistently improved agreement. Chain-of-thought further improved agreement under adequate instruction, and self-consistency produced smaller, theme-dependent gains but helped identify unstable decisions for human review. Performance also varied by transcript characteristics. Overall, the framework systematically structures and monitors LLM-assisted qualitative coding while preserving human authority over coding decisions.

13. [Cognitively Constrained Partners for Zero-Shot Coordination in Real-Time Partitioned Control](https://arxiv.org/abs/2610.31726)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31726v1 Announce Type: new Abstract: Effective human-machine teaming requires agents that coordinate with unpredictable human partners. Reinforcement learning from live human feedback or large behavioural datasets is expensive, while purely simulated training overfits to artificial conventions and fails at Zero-Shot Coordination with real people. We propose a framework for training teaming agents against Cognitively Constrained Partners: simulated partners whose diversity emerges from procedural constraints grounded in human physiological literature, specifically reaction delays and perceptual limitations, rather than from reward shaping or historical training checkpoints. In a modified Lunar Lander environment, we report preliminary evidence that these partners play more like real people than unconstrained agents do, and that agents trained against them match the strongest cross-play baselines while being the only ones whose performance does not depend on how their training partners were generated. We also describe a human-participant study designed so that its rankings can be compared directly against cross-play, testing how well that standard evaluation predicts real human-agent teaming.

14. [OpenAI expands partnership with Oracle to bring its apps to ChatGPT](https://openai.com/index/oracle-apps-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 27 Oct 2026 07:00:00 GMT
   - Summary: OpenAI and Oracle are expanding their partnership to bring business applications and AI agents into ChatGPT and power new Oracle offerings.

15. [GPT-6.1 Sol helps CodeRabbit strengthen security across complex codebases](https://openai.com/index/gpt-6-1-sol-coderabbit-code-security)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 13:45:00 GMT
   - Summary: CodeRabbit uses GPT-6.1 Sol to investigate security risks across complex codebases. Its security agent helps developers review findings and proposed fixes.

16. [ChatGPT’s expanding world of work](https://openai.com/index/chatgpt-expanding-world-of-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 10:00:00 GMT
   - Summary: Explore OpenAI Signals data on 165 work activities across nearly 100 countries, revealing how people use ChatGPT for work and how usage changes over time.

17. [How Fanatics and OpenAI streamline the fan experience](https://openai.com/index/fanatics-streamline-fan-experience)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 07:00:00 GMT
   - Summary: Fanatics uses OpenAI to help fans complete their game-day outfits with Shop the Look. Testing across roughly 30,000 MLB products showed 10% higher engagement.

18. [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 GMT
   - Summary: Bringing fast and capable computer use to everyone

19. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

20. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

21. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

22. [Build specialized multimodal models with LFM3](https://huggingface.co/blog/LiquidAI/lfm3)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 27 Oct 2026 17:16:52 GMT

23. [Can we trust LLMs to judge whether a research idea is novel?](https://huggingface.co/blog/allenai/novelty-bench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 27 Oct 2026 16:12:42 GMT

24. [Does Your Model Run on AWS Trainium? Look It Up](https://huggingface.co/blog/torch-neuronx-model-support)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 23 Oct 2026 00:00:00 GMT

25. [Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox](https://huggingface.co/blog/microsoft/thinkingbox-training)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 22:24:34 GMT

26. [Ensemble forecasting with IBM Granite time-series models](https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 07:51:31 GMT

27. [NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required](https://huggingface.co/blog/nvidia/kumo-relational)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 18:26:30 GMT

28. [How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications](https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 17:35:36 GMT

29. [Profiling TorchNeuron (Part 1): System-level profiling on AWS Trainium.](https://huggingface.co/blog/amazon/profiling-torchneuron-part-1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 16:04:43 GMT

30. [Granite Speech 5.0: Transcribe, Translate, and Attribute more Accurately and Faster](https://huggingface.co/blog/ibm-granite/granite-speech-5)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 14:58:18 GMT

31. [Hugging Face ❤️ TorchTPU: TPUs, Natively](https://huggingface.co/blog/hf-torchtpu)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 20 Oct 2026 00:00:00 GMT

32. [Prospect Theory in Large Language Models: A Meta-Analysis of Loss Aversion, Diminishing Sensitivity, and Probability Weighting](https://arxiv.org/abs/2610.33103)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33103v1 Announce Type: new Abstract: Prospect theory splits risky choice into three parts: loss aversion, measured by the relative weight of losses to gains, $\lambda$ (e.g., $\lambda = 2$ implies that losses weigh twice as much as gains), diminishing sensitivity to the size of outcomes (i.e., the curvature and linearity of the value function), and the nonlinear weighting of probabilities. I examined whether Large Language Models (LLMs) display the same properties as people by meta-analyzing 102 fitted estimates from 11 studies covering 32 language models. The three components emerge differently. Loss aversion is modest: the pooled $\lambda$ is 1.26 (95% CI 1.06 to 1.46), far below the strongest human meta-analytic estimate ($\lambda = 1.96$) and compatible with more conservative ones (1.07 and 1.31). Matched by design, LLMs are compatible with people when gains and losses are symmetric ($\lambda = 1.15$ against 1.07), but well below them when losses are smaller than gains (1.46 against 2.3), where human loss aversion is strongest. Value functions are close to linear rather than concave under the Tversky-Kahneman method (1.01, against a human value of 0.67), but more concave than in people under the Tanaka method (0.52, against 0.67), so diminishing sensitivity depends on how it is measured. Probability weighting shows a human-like inverse S shape ($\gamma = 0.81$ under Tversky-Kahneman and 0.84 under the Tanaka method), though on few studies. In sum, LLMs show little loss aversion and little diminishing sensitivity, but retain human-like probability distortion, yet these generalizations shift when looking at specific model families and fitting methods.

33. [AOS-Bench: Can LLM Agents Manage Dynamic Workloads?](https://arxiv.org/abs/2610.33178)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33178v1 Announce Type: new Abstract: Coding agents are moving from handling one request at a time to serving as persistent assistants to which users hand a stream of work: a build, a data-processing job and a bug fix may all be pending on the same machine at once. Such an agent must decide when to take on new tasks, how to delegate and overlap them, and how to stay within the machine's CPU and memory. Existing benchmarks cannot measure this, because they evaluate each task in isolation. We introduce \benchname{}, which evaluates an agent system as a workload manager: verified tasks arrive over time and must be delivered under shared CPU and memory limits, and the same tasks run one at a time serve as a per-system reference. Across five model--harness pairs, isolated task success does not carry over evenly. On heavy workloads every system loses 13 to 23 points. On medium workloads, systems span 11 points in isolated success but 26 points in stream success, and two systems 0.6 points apart in isolation deliver 54\% and 68\% of the same tasks. Execution-policy interventions trace much of this gap to task intake: serial dispatch leaves 73\% of heavy-workload tasks unclaimed. Yet more elaborate management does not necessarily help. A fixed concurrency of two comes within four points of the best agent-managed policy on both medium and heavy workloads, and under every policy median CPU use stays below 30\% of the provisioned cores while tasks wait. These results identify workload management as a distinct capability for agents, and \benchname{} as a way to measure it.

34. [End-to-End Differentiable Diffusion Conditioning for Physics-Informed Optimization](https://arxiv.org/abs/2610.31721)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31721v1 Announce Type: new Abstract: Optimizing high-dimensional physical systems under expensive evaluations and complex constraints is a central challenge in science and engineering. In offline model-based optimization (MBO), methods must improve designs using only a fixed dataset and no test-time access to the true objective. However, existing methods typically suffer from conservatism, unconstrained surrogate exploitation, or function as static inference-time samplers that cannot refine candidates against precise physical objectives. In this paper, we propose Differentiable Diffusion Conditioning (D2C) for offline MBO, which leverages the fact that deterministic sampling makes the reverse denoising chain differentiable with respect to the conditioning signal. D2C turns a frozen conditional diffusion model into an end-to-end gradient-based optimizer by directly optimizing conditioning variables at test time via gradients from frozen surrogate objectives and physics-informed penalties backpropagated through the reverse chain. We implement this idea in a composed proposer-evaluator framework and evaluate it on laser pulse optimization for inertial confinement fusion, sustainable data-center workload scheduling, and four Design-Bench tasks. Our method achieves the strongest results on the two real-world tasks and the best average rank across four Design-Bench tasks.

35. [Autonomous atomistic-continuum coupling through uncertainty-aware active learning](https://arxiv.org/abs/2610.33272)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33272v1 Announce Type: new Abstract: We develop an uncertainty-aware surrogate modeling approach for coupling an atomistic kinetic Monte Carlo (KMC) surface-chemistry solver with a continuum multi-species fluid dynamics solver across disparate physical length and time scales. The surrogate model predicts boundary mass fluxes for six species and their uncertainties, which the continuum solver monitors to automatically trigger additional KMC simulations when new training data are needed. This enables efficient multiscale coupling and maintains a user-specified level of accuracy. We demonstrate the approach for reactive halide-perovskite vapor deposition, which involves a multi-species vapor jet impinging on a reactive substrate. The KMC solver uses a DFT-calibrated energetics model that we construct as part of this work and provides net deposition and desorption rates for six species. With a conservative uncertainty threshold, the surrogate-coupled approach reproduces cumulative mass fluxes of the directly coupled approach with errors typically within 10-20%, while capturing the non-monotonic dependence of net deposition on species partial pressure. Importantly, the results show that detailed crystal structure need not be explicitly represented to predict quantities exchanged between atomistic and continuum solvers; species-resolved mass fluxes provide a sufficiently low-dimensional representation of the atomistic response. For this accuracy target, the autonomous online-learning approach reduces the number of required atomistic simulations by two to three orders of magnitude relative to direct multiscale coupling.

36. [kstress: a LAMMPS package for calculating the 2D wavevector-dependent stress tensor and its anisotropy in amorphous solids](https://arxiv.org/abs/2610.34206)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.34206v1 Announce Type: new Abstract: The stress tensor resolved in wavevector $\qvec$ and time $t$, $\sigma_{\alpha\beta}(\qvec,t)$, gives access to the elastic moduli of amorphous solids as a function of the probed length scale, and to the long-range stress correlations that distinguish an amorphous solid from a liquid. Its evaluation requires the contribution of every interacting pair and therefore an interface to the force loop of the molecular dynamics code. In the current work, we present: i) an optimized implementation of the LAMMPS~\cite{lammps} module for calculating $\sigma_{\alpha\beta}(\qvec,t)$, in which trigonometric functions are calculated only for the basic wavevectors and, in addition, all the relevant wavevectors are supplied as an explicit list rather than generated as a full grid, so that only the wavevectors of interest are computed and stored, and ii) a validation protocol for the code illustrated for a two-dimensional polydisperse Lennard-Jones (2DpLJ) glass-forming liquid. Based on these technical achievements we elucidated how the affine moduli for the 2DpLJ model depend on the norm $q$ of the wavevector. In particular, we demonstrate that the longitudinal affine modulus shows a minimum near $q_\text{max}$ corresponding to the main peak of the structure factor. Our data also point to the peaks in the $q$-dependencies of vibrational frequencies well below $q_\text{max}$ for both transverse and longitudinal modes. The potential relevance of this feature to the ``boson peak'' is discussed as well.

37. [A GPU-efficient local ADER finite-difference method for compressible-flow DNS](https://arxiv.org/abs/2610.34252)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.34252v1 Announce Type: new Abstract: Algorithm design tailored to graphics processing units (GPUs) can substantially improve the efficiency of computational fluid dynamics (CFD) simulations. Efforts to adapt CFD solvers to GPUs often focus on spatial discretization, while time advancement commonly relies on multistage Runge--Kutta (RK) methods. However, these RK methods require repeated residual evaluations and full-domain operations, increasing the cost of compressible-flow direct numerical simulation (DNS). To reduce this overhead, we develop a local arbitrary high-order derivatives (ADER) finite-difference method that couples a compact ten-point quadratic predictor to a conservative central corrector through operator matching. With two quadrature nodes, one Picard correction, and selective dissipation, smooth convective tests recover third-order convergence under fixed-CFL refinement and near-seventh-order spatial behavior when background spatial error dominates. Temporal states remain kernel-local, and halo communication overlaps interior computation. Tests of smooth advection, periodic turbulence, and wall-bounded flows assess accuracy and flow statistics. On a $302^3$-node viscous Taylor--Green benchmark without heat conduction, throughput reaches 230.87 million node updates per second on one V100 GPU in double precision, 1.944 times that of spatially matched three-stage Runge--Kutta integration. Weak-scaling efficiency reaches 99.44\% from 4 to 32 V100 GPUs at 1.812 billion nodes.

38. [Localized Hybrid Analytical-Finite-Element Thermal Modeling for Laser Powder Bed Fusion](https://arxiv.org/abs/2610.33273)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33273v1 Announce Type: cross Abstract: Hybrid analytical--finite-element methods support scan-resolved, part-scale thermal simulation of laser powder bed fusion, but their analytical evaluation cost grows as scan-line contributions accumulate. This work develops a space--time localized hybrid formulation that restricts where and how long each contribution is evaluated analytically. Residual terms and boundary conditions derived from the heat equation allow the finite-element correction to account for the thermal effect of contributions removed from the analytical field. The formulation is assessed using a single-line benchmark against an independent full finite-element solution and multiline comparisons with the conventional hybrid formulation. Localization limits the number of analytical contributions retained while maintaining close agreement with the conventional solution. A comparison with uncompensated temporal truncation demonstrates the importance of the residual correction in retaining the thermal effect of removed contributions. In the 500-line case, analytical and total simulation times are reduced by factors of approximately 25.5 and 3.92, respectively, with a relative nodal 2-norm difference of 0.139%.

39. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.99; Date: 2026-10-27T13:15:18Z; Popularity: 1,993 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

40. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.77; Date: 2026-10-27T18:26:25Z; Popularity: 770 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-10-20T16:52:41Z; Popularity: 490 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.38; Date: 2026-10-27T09:25:27Z; Popularity: 384 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-10-27T09:23:35Z; Popularity: 234 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

44. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

45. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

46. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

47. [Simulating student learning for better AI tutoring](https://www.microsoft.com/en-us/research/blog/simulating-student-learning-for-better-ai-tutoring/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 12 Oct 2026 16:00:00 +0000
   - Summary: StudentSim is a research system for evaluating and improving AI tutoring tools before they are tested with learners. It models how individuals may engage with tutors, giving feedback to improve tutor performance across subjects like chess, writing, and mathematics. The post Simulating student learning for better AI tutoring appeared first on Microsoft Research .

48. [What AI gets wrong and what failure teaches us](https://www.microsoft.com/en-us/research/podcast/what-ai-gets-wrong-and-what-failure-teaches-us/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 06 Oct 2026 16:19:06 +0000
   - Summary: Jennifer Neville did not want to go into computer science—but that’s exactly where she landed. Neville discusses the starts and stops that led to her professional sweet spot and her work identifying “surprising failures” making it hard for AI to handle complexity. The post What AI gets wrong and what failure teaches us appeared first on Microsoft Research .

49. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

50. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

51. [Collaborative In-Context Learning for Indoor Radio Map Estimation](https://arxiv.org/abs/2610.31702)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31702v1 Announce Type: new Abstract: Indoor radio map estimation (RME) is essential for wireless applications such as coverage planning, localization, and network deployment. However, most existing methods follow a supervised learning paradigm that requires costly labeled data and task-specific model training. Moreover, indoor environments involve privacy-sensitive information, such as building layouts and structures, that often cannot be centralized. To address these challenges, we make the first attempt to formulate indoor RME as a collaborative in-context learning (ICL) problem. We propose Poly-Ripple, a framework in which multiple clients perform ICL using large autoregressive vision models (LAVMs) without model updates. Each client is prompted by its private demonstrations and predicts the radio map for the same scene query. To capture the causal structure of wireless propagation outward from the transmitter (Tx), we adopt ripple-ordered autoregressive modeling. We further introduce importance-aware aggregation to exploit heterogeneous contextual knowledge distributed across clients under the context length constraint. We provide theoretical analysis and conduct extensive experiments on a public indoor RME benchmark. The experimental results show that Poly-Ripple consistently outperforms representative ICL baselines, while aligning with our theoretical analysis.

52. [Does LeWorldModel Preserve Local Action Geometry?](https://arxiv.org/abs/2610.31716)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31716v1 Announce Type: new Abstract: We examine how closely pretrained LeWorldModel (LeWM) reproduces the effects of small action changes. Using matched simulator and model responses, we measure action sensitivity with Gram matrices at three perturbation scales. Across nearly a thousand states from Reacher and OGBench Cube, the most sensitive action directions differ by median angles of about $36^\circ$ and $42^\circ$, respectively, at the smallest scale. Increasing the perturbation tenfold reduces median normalized Gram discrepancy by roughly 70\% on Reacher and 47\% on Cube. Geometry measured in pixels and embeddings varies more across scales than the chosen physical-state geometry. On held-out directions, environment Grams achieve median embedding response errors of 17\% and 28\%, compared with 26\% and 38\% for an isotropic reference with the same trace. LeWM's errors are higher at this scale. These findings support scale-specific evaluation of action sensitivity; its effect on control remains an open question.

53. [Towards Adversarially Robust Multigraph Neural Networks for Financial Crime Analysis](https://arxiv.org/abs/2610.31718)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31718v1 Announce Type: new Abstract: Financial transaction networks are naturally represented as multigraphs, where repeated transactions between the same pair of accounts are modeled as distinct edges. Recently proposed multigraph neural network architectures leverage this structure explicitly to achieve a strong performance on anti-money laundering (AML) tasks. However, their robustness to adversaries that manipulate transaction structures to evade detection remains largely unexplored. We present the first scalable framework for structural attacks and adversarial training of multigraph neural networks using node-edge incidence matrices, adapting projected gradient descent and projected randomized block coordinate descent methods to optimize structural perturbations over such matrices. We further introduce a cycle-based regularizer that penalizes changes in the global counts of directed 2- and 3-cycles, providing a structural measure of attack plausibility. Experiments on synthetic pattern-detection and realistic AML datasets show that our learned attacks substantially outperform non-learnable perturbation baselines in reducing detection performance (PR-AUC), while adversarial training consistently improves robustness against these attacks. These results demonstrate that multigraph neural networks are vulnerable to learned structural attacks and that adversarial training provides an effective defense. Our code is available at https://github.com/denheijmans/robust_multignn.

54. [When and How Does Muon Precondition? The Role of Structured Gradient Noise](https://arxiv.org/abs/2610.31728)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31728v1 Announce Type: new Abstract: Muon has become a popular optimizer for large language model training, yet its theoretical foundations remain poorly understood. In this work, we study how gradient noise geometry shapes Muon's preconditioning benefits. We first show, theoretically and empirically, that under the classical isotropic noise assumption, Muon offers no acceleration beyond a rescaling of the learning rate. This motivates us to investigate structured noise arising from mini-batch sampling in associative memory with heterogeneous task frequencies. We establish an exact balancing threshold for two tasks and extend the analysis to multiple tasks, revealing how task coverage and gradient reliability jointly shape learning. Our analysis shows that Muon can soften the dependence on task frequency from linear to square-root, helping balance the learning of frequent and rare tasks. We further identify rotation-induced negative transfer in SignSGD that Muon avoids, and explain how momentum reduces sampling noise while tracking changing gradients. Controlled numerical experiments validate these mechanisms, and a preliminary LLM pretraining study illustrates the practical promise of fast-slow momentum.

55. [Learning to Be Monitored: Causal Bounds and Intervention-Aware Post-Training Recipes for Chain-of-Thought Monitorability](https://arxiv.org/abs/2610.31733)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31733v1 Announce Type: new Abstract: Chain-of-thought (CoT) monitoring aims to detect potentially harmful behaviors in large language models (LLMs) from their CoTs. Intervention-based evaluations measure this property by asking whether a monitor can detect the role of an intervention from the CoT when the targeted behavior occurs, typically using minimal-criterion sensitivity ($\mathsf{TPR_{mc}}$) proposed by~\citep{guan2025monitoring}. However, a target behavior observed under intervention is not necessarily caused by it, and we show that this metric can overestimate how often a monitor detects target behaviors actually caused by the intervention. Specifically, we establish $\mathsf{TPR_{mc}}$ as an upper bound on this causal detection rate and derive a complementary lower bound, which provides a tighter evaluation framework for CoT monitorability. With this framework, we study whether LLMs can be trained to make their CoTs easier to monitor. We first construct a training dataset of paired control--intervention tasks spanning multiple intervention types. Using the dataset, we design and apply three intervention-specific training methods based on off-policy self-distillation, reinforcement learning, and on-policy self-distillation to train separate variants of each base model. Across various model-monitor configurations, all three methods generally improve CoT monitorability over the corresponding base models under our extended evaluation framework. Our code is available at https://github.com/xinyue-lxy/learning-to-be-monitored.

56. [An Efficient Quantum Spectral-Galerkin Method for Linear Elliptic Equations](https://arxiv.org/abs/2610.33095)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33095v1 Announce Type: new Abstract: This paper presents an efficient quantum spectral-Galerkin method for constant-coefficient second-order linear elliptic equations. The method employs a boundary-adapted Jacobi tensor-product basis that incorporates the boundary condition into the approximation space and produces Galerkin systems with polynomially bounded condition numbers and sparsity. For analytic solutions satisfying a suitable uniform regularity condition, spectral convergence allows the normalized Galerkin coefficient state to be prepared with complexity $\mathrm{poly}(d,\log(1/\epsilon))$, where $d$ is the spatial dimension and $\epsilon$ is the error tolerance, under standard sparse-access and state-preparation assumptions. At the state-preparation level, this improves the precision dependence over fixed-order finite-difference and finite-element discretizations. We further show how to estimate prescribed linear functionals of the solution, with an additional $O(1/\epsilon)$ factor arising from norm and inner-product estimation.

57. [A neural accelerated surface-roughness-based Discrete Element Method (SR-DEM) for modeling granular systems](https://arxiv.org/abs/2610.33363)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33363v1 Announce Type: new Abstract: The Discrete Element Method (DEM) is an indispensable tool for modeling and understanding the basic mechanical behaviors of (dry) granular media, a class of disordered material systems of significant interest to multiple scientific domains from (geo-)physics to (chemical) engineering. At the core of all present DEM frameworks is a phenomenological friction law--commonly chosen to be of the Amontons-Coulomb type--that models the frictional interaction among constituent grains. Here, inspired by research in the tribology community, we present an alternative, fundamentally different framework, termed surface-roughness-based DEM (SR-DEM), in which contact friction is handled in a more physics-based manner. In this framework, instead of using a friction law, we explicitly resolve the surface topography of each grain and let friction emerge from collective frictionless interactions of surface asperities. In essence, we trade phenomenology for physics at the cost of an increased computational demand. To mitigate the cost, we introduce an FE$^2$-like algorithm and a feature-wise linear modulation (FiLM)-based neural network surrogate, both of which are parallelized on GPU to accelerate contact computation. Crucially, using this framework in 2D, we (1) demonstrate the possibility of recovering a two-body-based Amontons-Coulomb-type friction behavior using a simple representation of surface topography, and (2) identify many-body-based frictional behaviors--more specifically, the angle of repose values--that cannot always be captured by current DEM frameworks under the same level of model complexity. We conclude by discussing future directions for SR-DEM, as well as exciting new opportunities it could unlock for a wide range of emerging applications, including (designing) suspension rheology and metamaterial mechanics.

58. [A Differentiable Framework for Inverse Identification of Heterogeneous Cohesive Laws](https://arxiv.org/abs/2610.33711)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33711v1 Announce Type: new Abstract: This work develops a differentiable finite element framework based on an intrinsic cohesive-zone formulation for identifying traction-separation laws from global force-displacement histories and spatially sparse strain measurements. The framework employs physics-constrained neural networks to represent flexible, thermodynamically structured cohesive laws, with sensitivities computed through automatic differentiation and a discrete adjoint that accounts for the history-dependent evolution of interfacial damage. To enable identification of spatially heterogeneous cohesive behavior, we extend learned constitutive priors to irreversible interfacial damage by constructing a shared, low-dimensional family of cohesive laws from representative traction-separation histories. This representation exploits common constitutive structure and parameter sharing to reduce the number of unknowns and regularize the inverse problem, while allowing local cohesive behavior to vary spatially through latent coordinates. Numerical investigations involving double-cantilever beams and fiber-matrix composites demonstrate that accurate reproduction of global force-displacement responses does not necessarily imply accurate recovery of the underlying cohesive laws. Incorporating spatially resolved strain measurements substantially improves constitutive identification, even when the admissible responses are constrained by a learned prior. Comparisons with conventional bilinear cohesive models and Bayesian optimization further illustrate the benefits of the learned constitutive representation and adjoint-based identification for high-dimensional inverse problems.

59. [Two-dimensional framework for modeling load transfer in nanocomposites with thin, stiff, and prestressed reinforcements](https://arxiv.org/abs/2610.34014)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.34014v1 Announce Type: new Abstract: This paper presents a novel framework for simulating load-transfer mechanisms in nanocomposites reinforced by thin, stiff, and prestressed reinforcements, such as, e.g., nanosheets or nanoplatelets. The reinforcements are modeled as open material surfaces treated as membranes endowed with their own elastic properties and residual surface tension; the matrix is assumed to be isotropic elastic. In the two-dimensional plane-strain setting considered here, each material surface is represented by a sufficiently smooth curve of otherwise arbitrary shape. The theoretical part of the framework is based on the Gurtin--Murdoch theory in which the surfaces are represented by traction jumps across them. The elastic fields in the matrix are exactly expressed by the integral representations written in terms of the unknown traction jumps that are functions of the second-order derivatives of the displacements. The computational part is based on the isogeometric boundary element method (IGABEM) that utilizes non-uniform rational B-splines (NURBS). The unknown traction jumps are found from the numerical solutions of the coupled system of singular boundary integral equations, after which the elastic fields in the matrix are evaluated. The procedure of extracting the values of the stress intensity factors (SIFs) at the tips of the surfaces is described. The proposed algorithm is validated against available benchmark solutions for multiple surfaces located along either straight segments or circular arcs. Selected parametric studies are performed to examine the influence of surface curvatures, relative spacing, orientation, and interactions. An example involving a graphene nanoplatelet-reinforced epoxy is presented.

60. [Towards Exact Multidimensional Fluxes: A Structure-Preserving Data-Informed Framework for Riemann Solvers](https://arxiv.org/abs/2610.35265)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.35265v1 Announce Type: new Abstract: Finite-volume and discontinuous Galerkin methods update cells using the space-time flux integral over their faces, which typically depends on the solutions to local Riemann problems. In the multidimensional Riemann problem setting, this integral is difficult to evaluate exactly because of complex wave interactions. In this work, we show that the exact space-time flux integral is a polynomial in the time step and face dimensions. This motivates a learning-based approach, as only the mapping from the initial states to the polynomial coefficients needs to be learned. We propose a structure-preserving, data-informed Riemann solver framework that uses a neural network trained on high-resolution simulation data to learn this mapping. Key structural properties, including consistency and symmetry, are enforced by construction. Provided that the high-resolution simulations converge to the exact flux integrals and the network accurately predicts the coefficients, this framework yields near-exact flux integrals for use in numerical simulations. We demonstrate the framework using classical implosion and explosion problems for the two-dimensional Euler equations. In an unsplit MUSCL-Hancock scheme, the learned Riemann solver remains stable at a CFL number of 0.9, whereas the same scheme using the exact one-dimensional Riemann solver fails. Compared with the latter scheme at CFL=0.45, the learned scheme is slightly more accurate and requires approximately 30% less computational time.

61. [Resource competition and survival for random walkers on complex networks](https://arxiv.org/abs/2610.33831)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 27 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33831v1 Announce Type: cross Abstract: We consider the problem of $W$ random walkers on a complex network where each walker requires an amount $\theta$ of resource at each time to survive. Resource is stochastically produced at each vertex of the network with a specified distribution. The survival time of the system of walkers is defined as the time required for all $W$ walkers to die. Using numerical simulations, we show that Erd{\H o}s-R\'enyi networks a have higher mean survival time than Scale-free networks as expected, but also that uniform distribution production leads to higher mean survival time than exponential distribution with the same mean. We derive an exact expression for the survival-time distribution under the assumption of independent walker lifespans, and use it to show that scale-free network topology produces strong dependence in the lifespans but homogeneous topology does not. We moreover demonstrate how the survival time can be substantially increased without changing the resource production or network topology by appropriately biasing the movement of the walkers towards low degree vertices on Scale-free networks, but has no effect on Erd{\H o}s-R{\'e}nyi networks.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.79; Date: 2026-10-27T09:33:10Z; Popularity: 786 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.44; Date: 2026-10-27T17:38:50Z; Popularity: 1,439 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.25; Date: 2026-10-27T17:24:13Z; Popularity: 255 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-10-19T17:32:52Z; Popularity: 56 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

66. [RobLe3/IICP](https://github.com/RobLe3/IICP)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-29T16:46:51Z; Popularity: 7 stars
   - Summary: Open specification and conformance material for intent-based AI agent discovery and routing

67. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Artificial Intelligence in Mechanical Engineering: Foundations, Opportunities, Challenges, and Responsibilities

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2610.33105

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
