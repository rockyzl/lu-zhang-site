# Daily signal sidecar - 2026-10-26

## Selected Signal

- Title: Knowing Whom to Trust is not Enough: The Trust--Agreement Gap in Repeated Multi-Party LLM Negotiation
- URL: https://arxiv.org/abs/2610.31971
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Knowing Whom to Trust is not Enough: The Trust--Agreement Gap in Repeated Multi-Party LLM Negotiation
- Primary source: https://arxiv.org/abs/2610.31971
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

Total candidates reviewed after duplicate-source filtering: 59

1. [Knowing Whom to Trust is not Enough: The Trust--Agreement Gap in Repeated Multi-Party LLM Negotiation](https://arxiv.org/abs/2610.31971)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31971v1 Announce Type: new Abstract: Large language model (LLM) agents increasingly participate in negotiations on behalf of individuals and organizations, yet they remain vulnerable to manipulation, particularly in repeated multi-party interactions. Classical multi-agent systems address this challenge through explicit trust and reputation models, whereas existing work on LLM negotiation largely treats trust as an emergent phenomenon. We investigate whether LLM agents can form useful trust estimates from prior interactions and leverage them to improve future negotiation outcomes. We introduce a repeated, multi-party, multi-issue negotiation framework in which recurring agents participate in a sequence of negotiation games while one participant covertly attempts to prevent agreement. After each game, agents assess their counterparts and maintain pairwise trust estimates that carry over to subsequent negotiations. We compare trust-aware and trust-agnostic agents and analyze how explicit trust influences negotiation outcomes. Our results reveal a \emph{trust--agreement gap}: trust-aware agents can identify the adversary within a few games, but accurate trust estimates do not consistently translate into better agreements. Trust increases agreement rates by up to 23 percentage points, but only when agents are explicitly guided to use it in their decisions. Explicit trust can therefore improve repeated LLM negotiations, but its value depends critically on how trust is assessed and incorporated into agents' reasoning.

2. [How Ultrafast cut incident investigation from hours to minutes at OpenAI](https://openai.com/index/openai-cut-incident-investigation)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 26 Oct 2026 07:00:00 GMT
   - Summary: See how OpenAI engineers use Codex Ultrafast to investigate incidents in minutes. Explore faster security analysis, code refactoring, and daily workflows.

3. [Uber brings ChatGPT Work to all employees with OpenAI](https://openai.com/index/uber-chatgpt-work-rollout)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 22 Oct 2026 00:00:00 GMT
   - Summary: Uber is rolling out ChatGPT Work to more than 30,000 employees, helping teams research, analyze data, create presentations, and complete complex workflows.

4. [Flint-interactive: A language for creating interactive data visualizations](https://www.microsoft.com/en-us/research/blog/flint-interactive-a-language-for-creating-interactive-data-visualizations/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Thu, 22 Oct 2026 16:00:00 +0000
   - Summary: Flint-interactive gives AI agents a language for creating interactive visualizations. Click a chart, filter data, highlight related content, and explore beyond the view the author originally chose. The post Flint-interactive: A language for creating interactive data visualizations appeared first on Microsoft Research .

5. [Tradeoff-Aware Territory Design: A Multi-Objective Decision System for Enterprise Customer-to-Seller Allocation](https://arxiv.org/abs/2610.31701)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31701v1 Announce Type: new Abstract: Enterprise customer journeys are shaped not only by product experiences and marketing, but also by recurring resource-allocation decisions. In B2B go-to-market (GTM) organizations, territory carving determines which accounts receive seller coverage, which seller-account relationships are preserved, and how limited field capacity is distributed. Yet the process often remains manual, making it difficult to compare opportunities, value continuity, and evaluate tradeoffs among growth, balance, capacity, and feasibility. We present a production decision system for tradeoff-aware customer-to-seller allocation in enterprise GTM planning. It integrates three components: a multidimensional account-value layer that combines predictive signals to score opportunity; an observational continuity-valuation layer that estimates the cost of breaking seller-account relationships using a synthetic-control-style counterfactual framework; and a multi-objective optimization layer that allocates coverage to high-value accounts while considering continuity, opportunity balance, and operational constraints. Deployed as a scenario-based decision-support system, the framework enables planners to inspect and compare allocation tradeoffs. Historical backtesting shows that optimizer-generated scenarios substantially improve assignment compliance while maintaining comparable seller-level opportunity distribution. In production planning, adopted scenarios improved both assignment compliance and opportunity balance relative to the previous baseline. Directing scarce seller capacity toward higher-value accounts also offers incremental revenue potential at enterprise scale. The key contribution is an integrated, inspectable framework that turns territory carving into a governable decision process.

6. [Phronix: The Capability-Centric Learning Paradigm for Agents](https://arxiv.org/abs/2610.31789)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31789v1 Announce Type: new Abstract: Scientific computing increasingly relies on large language model-based agents for performance engineering tasks such as instrumentation, analysis, and workflow porting. However, agent effectiveness depends heavily on the surrounding harness, which typically relies on manually written skills and curated memory. This limits autonomous learning, forcing agents to repeatedly rediscover solutions rather than retain and reuse knowledge from prior executions. We introduce Phronix, a capability-centric learning paradigm that enables agentic harnesses to acquire, validate, and refine reusable capabilities from their own executions. Phronix operates through a predictor-validator-corrector loop: MCP tools and associated skills propose solutions, tool executions validate them, and observed outcomes refine the stored capabilities. It distills every observed interaction into a capability store and researches a failing task rather than abandoning it. First, such learned capabilities solve a recurring task on the first attempt in 93-95% of cases across every model, significantly reducing solution non-determinism and improving reliability. Second, Phronix turns an agent's own execution into 7.6-30.8 durable capabilities per task without user instruction, and creation falls below two once the needed capability exists. Third, warm-start runs consume only 0.38-0.40 million tokens per task, which is three to four times less than a single baseline attempt, while a cold-start costs no more than the baseline. On the 1000 Genome Pegasus workflow, instrumenting a production application for I/O performance analysis, Phronix passes all 11 correctness checks against six for the baseline harness, and also lifts the task solving rates of two cheaper models from 29% and 27% of SWE-bench tasks solved to 91% and 87%, respectively, matching the performance of the most expensive evaluated model.

7. [Don't Forget What You Just Learned: Self-Directed Repair Turns Agent Mistakes Into Lasting Lessons](https://arxiv.org/abs/2610.31846)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31846v1 Announce Type: new Abstract: Intelligent agents should learn from their mistakes so that experience leads to continuous improvement. Yet today's agents recover from a mistake only temporarily: in-context reflections are easily forgotten across sessions and compete for limited context, while full-parameter fine-tuning is expensive and can interfere with existing capabilities. We introduce Self-Direction, a mechanism for agents to learn from mistakes that combines the benefits of temporary in-context retries and policy updates. When an agent fails a task, it reflects on its own trajectory in order to extract a lesson and immediately distills it into a lightweight low-rank adapter. By keeping the original weights frozen, Self-Direction prevents adapter training from overwriting base-model parameters while training additional parameters equivalent to ~0.02% of the base model's parameter count for each adapter. The agent then saves these adapters in a persistent library of lessons, automatically routing them to solve related problems later. Experiments with agents based on open-weight models from the Qwen family across open-ended research (GAIA), tool-use workflows (Claw-Eval), and terminal tasks (Terminal-Bench 2.1) show that our method improves overall success rates by 8.9 to 17.0 percentage points and performs competitively with frontier systems. We find that Self-Direction reduces repeated mistakes across future encounters of a task, nearly doubling the reliability of an agent's corrections. Learned lessons also transfer: a handful of adapters generalize to dozens of new tasks without additional training. Ultimately, this self-directed repair transforms everyday mistakes into lasting lessons.

8. [Permission to Retry: A Study of Authorization and Recovery in AI Agent Workflows](https://arxiv.org/abs/2610.31916)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31916v1 Announce Type: new Abstract: A durable agent can resume a consequential action while its authority changes and the action's external outcome remains uncertain. We study execution-time reliability of tool-using AI agents, isolating recovery decisions from language-model behavior. Checkpoint state, permission to dispatch, evidence of an external effect and permission to reconcile are distinct obligations. We present a finite conformance study that checks these obligations through histories scored against a provider effect ledger hidden from the recovering application. A prospectively frozen campaign executes 336 histories on native LangGraph and Temporal hosts, crossing 14 schedules, three provider contracts and four matched application policies. All 168 paired host cells have identical checked outcomes. Per host, retained-ledger reconciliation passes all 42 histories: 21 checked completions, 15 denials and six unknown outcomes with reservations retained. Cached retry, revalidation before retry and stable-key retry pass 30, 36 and 31 histories respectively. A separate 16-case component study of InfinityOS, an enterprise AI platform developed by Arya.ai, exercises exported authority, worker, recovery and settlement code over repository fakes. The results isolate the roles of current authority, provider contracts and retained observations in recovery, with safety, completion and unresolved obligations reported separately for the declared application profile.

9. [$M^3$: A Multi-LLM System for Multi-Turn Jailbreaking as a Markov Decision Process](https://arxiv.org/abs/2610.31937)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31937v1 Announce Type: new Abstract: Modern Large Language Models (LLMs) remain vulnerable to carefully orchestrated multi-turn interactions that progressively bypass safety mechanisms. However, many existing red-teaming approaches rely on heuristics or impose strong assumptions that limit their applicability in fully black box settings. We address this gap by introducing $M^3$, an automated red-teaming framework that formalizes multi-turn jailbreaking as a finite-horizon Markov Decision Process (MDP). In $M^3$, an attacker LLM interacts with a target LLM while operating over a compact internal state produced by a state LLM. Across two benchmarks and six target models, $M^3$ consistently outperforms state-of-the-art multi-turn red-teaming methods in Attack Success Rates (ASR), achieving improvements of up to 53% in ASR@5. Even with lightweight attacker, $M^3$ attains gains up to 26% in ASR@1 and 34% in ASR@5, compared to baselines that use higher capacity attackers. Beyond improved effectiveness, $M^3$ exhibits steeper risk escalation over conversational turns and achieves more consistent performance across risk categories (up to 4.82 improvement in Gini index) without relying on predefined risk taxonomy, providing a scalable and principled framework for multi-turn red-teaming and safety evaluation.

10. [CoPiT: A conditional Position-induced Transformer for aerodynamic field prediction on unstructured meshes](https://arxiv.org/abs/2610.32299)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.32299v1 Announce Type: new Abstract: High-fidelity Reynolds-averaged Navier--Stokes (RANS) simulations remain a standard tool for aerodynamic analysis, yet each solve on an unstructured mesh is computationally expensive, making many-query tasks such as design exploration, optimization, and multi-condition evaluation costly. Neural operators provide mesh-flexible surrogates for mapping geometry and operating conditions to flow fields; however, in many existing architectures, global parameters such as the freestream state and design variables are concatenated with pointwise inputs, leaving their influence on intermediate features implicit. This paper proposes CoPiT, a \textbf{Co}nditional \textbf{P}osition-induced \textbf{T}ransformer that builds on the Position-induced Transformer (PiT) as its geometric backbone and injects a global condition vector through multi-stage feature-wise linear modulation (FiLM), thereby making parametric modulation explicit while preserving geometry-based attention weights. The model is evaluated on two-dimensional AirfRANS airfoil fields, including scarce-data and extrapolation regimes, and on three-dimensional BlendedNet++ blended-wing-body surfaces. On the AirfRANS full-data test set, CoPiT reduces surface and volume losses by approximately 54\% and 24\% relative to Transolver, respectively, and achieves the lowest overall normalized test MSE among the compared baselines on BlendedNet++. Matched ablations show that FiLM conditioning generally improves upon input concatenation, while the preferred placement is task-dependent. CoPiT thus provides a practical operator-learning surrogate for parametric aerodynamics on unstructured meshes.

11. [ChatGPT’s expanding world of work](https://openai.com/index/chatgpt-expanding-world-of-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 10:00:00 GMT
   - Summary: Explore OpenAI Signals data on 165 work activities across nearly 100 countries, revealing how people use ChatGPT for work and how usage changes over time.

12. [How Fanatics and OpenAI streamline the fan experience](https://openai.com/index/fanatics-streamline-fan-experience)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 07:00:00 GMT
   - Summary: Fanatics uses OpenAI to help fans complete their game-day outfits with Shop the Look. Testing across roughly 30,000 MLB products showed 10% higher engagement.

13. [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 GMT
   - Summary: Bringing fast and capable computer use to everyone

14. [OpenAI and Poland’s NASK partner to advance AI safety and security](https://openai.com/index/openai-nask-ai-safety-security-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 23 Oct 2026 00:00:00 GMT
   - Summary: OpenAI and Poland’s NASK are partnering on AI safety, security, and technical research to strengthen safeguards and support a more resilient digital ecosystem.

15. [Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 22 Oct 2026 19:00:00 GMT
   - Summary: Fast, focused, low-cost decisions for any application.

16. [What FDE means at OpenAI](https://openai.com/index/forward-deployed-engineering-means)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 22 Oct 2026 06:00:00 GMT
   - Summary: What forward deployed engineering means at OpenAI

17. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

18. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

19. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

20. [LitPivot: Developing research ideas through dynamic contextualization within the literature landscape](https://huggingface.co/blog/allenai/litpivot)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 23 Oct 2026 16:15:50 GMT

21. [Does Your Model Run on AWS Trainium? Look It Up](https://huggingface.co/blog/torch-neuronx-model-support)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 23 Oct 2026 00:00:00 GMT

22. [Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox](https://huggingface.co/blog/microsoft/thinkingbox-training)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 22:24:34 GMT

23. [Ensemble forecasting with IBM Granite time-series models](https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 07:51:31 GMT

24. [NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required](https://huggingface.co/blog/nvidia/kumo-relational)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 18:26:30 GMT

25. [How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications](https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 17:35:36 GMT

26. [Profiling TorchNeuron (Part 1): System-level profiling on AWS Trainium.](https://huggingface.co/blog/amazon/profiling-torchneuron-part-1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 16:04:43 GMT

27. [Granite Speech 5.0: Transcribe, Translate, and Attribute more Accurately and Faster](https://huggingface.co/blog/ibm-granite/granite-speech-5)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 14:58:18 GMT

28. [Hugging Face ❤️ TorchTPU: TPUs, Natively](https://huggingface.co/blog/hf-torchtpu)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 20 Oct 2026 00:00:00 GMT

29. [AnyLanguageModel 1.0: One Year of Local Models on Apple Platforms](https://huggingface.co/blog/anylanguagemodel-1-0)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 20 Oct 2026 00:00:00 GMT

30. [Patronizing and Condescending Language Detection in English and Mandarin](https://arxiv.org/abs/2610.31808)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31808v1 Announce Type: new Abstract: Patronizing and condescending language (PCL) is a form of harmful language that belittles and assumes pity for vulnerable groups, reinforcing negative societal stereotypes. However, unlike overt hate speech, it is often difficult to detect, even for human judges. This paper proposes a system for the automated detection of PCL. Our first approach uses static word embeddings and a convolutional neural network for classification, while our second approach uses pre-trained BERT embeddings fine-tuned for the PCL task. Our second approach was considerably more successful, and achieved an F1 score of 0.528 over the development set.

31. [PaperFormalizer: Author-in-the-Loop Autoformalization of Research Papers in Lean](https://arxiv.org/abs/2610.31810)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31810v1 Announce Type: new Abstract: Even a carefully proofread paper can leave small gaps in its proofs or its stated assumptions. We introduce PaperFormalizer, a Lean-based agentic pipeline that helps authors find and close such gaps in their own papers and turn each paper into a Lean-verified version. Starting from the LaTeX source, PaperFormalizer transcribes the paper into a dependency graph of statements, audits each statement in natural language for faithfulness, ambiguity and correctness, and then formalizes and proves the statements in Lean against Mathlib, optional domain libraries and the author's personal toolkit. Only the author knows what a statement is meant to say and how a formalization gap in a result is best fixed. The pipeline therefore stops and asks the author whenever a statement admits more than one reading, presents every repair, in natural language and TeX symbols, as a proposal that the author can accept, decline or redirect, and leaves to the author every decision that could potentially change what the paper claims. The output is an annotated and revised version of the paper, a report of the changes, and Lean code in which each declaration is linked to the statement it formalizes. The author's toolkit grows as more papers are formalized, and authors can share their verified papers so that researchers who build on them can reuse their Lean code. By making verified papers practical to produce, PaperFormalizer aims to make research that rests on mathematical proofs more robust. PaperFormalizer runs inside a coding agent (Claude Code or Codex) and is available at https://github.com/Jiyuan-Tan/PaperFormalizer. Papers with Lean code shared by users are available at https://paperformalizer.org.

32. [TACS-RF: Tool-driven Agentic Circuit Synthesis of RF and mmWave Modules](https://arxiv.org/abs/2610.31882)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31882v1 Announce Type: new Abstract: We present the framework of TACS-RF - a Tool-driven Agentic Circuit Synthesis of RF and mmWave modules. In this framework, a large-language-model (LLM) coding agent (Claude Opus 4.8) directly drives industry-standard electronic-design-automation (EDA) tools such as Cadence Virtuoso/Spectre, Calibre, Cadence EMX, and Ansys HFSS to design RF and mmWave modules. We validate the framework through the agentic design of a 240-251 GHz sub-THz transmitter in a 90 nm SiGe BiCMOS process. The agent semi-autonomously designed the sub-blocks including a 60 GHz push-push Colpitts VCO with second-harmonic extraction, multistage differential cascode power drivers, a push-push frequency doubler, a differential bowtie antenna, and all the interstage matching networks. The transmitter chain with parasitic-extracted devices and EM-verified passives delivers +5.1 to +6.3 dBm across an 11 GHz varactor-only tuning range, phase noise of -80 to -88 dBc/Hz at 1 MHz offset while consuming a DC power of 361 mW. We describe the agent-driven design flow and the resulting division of labor between human and agent, taking a step toward a "text-to-ASIC" future for designing RF/mmWave hardware.

33. [Beyond On-Policy vs. Off-Policy: At What Level Should LLM Agent Distillation Follow the Student?](https://arxiv.org/abs/2610.31918)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31918v1 Announce Type: new Abstract: Distilling interactive LLM agents requires choosing between teacher-generated demonstrations and student-generated experience, corresponding broadly to off-policy and on-policy distillation. While both have proven effective, we argue that this distinction is inherently hierarchical: the policy that induces an interaction history need not be the same as the policy that generates the token prefix of the current action. We introduce a hierarchical agent distillation framework that formalizes these two levels of on-policiness and enables explicit control over their pairing, mixture proportions, and training schedule. We study this problem through self-distillation, where a frozen teacher has access to task guidance unavailable to the student, and conduct a three-stage controlled study across three models and four interactive environments. We find that student-induced histories paired with teacher-generated action prefixes generally provide the strongest standalone training signal, whereas following the student at both levels generally performs worst. Nevertheless, fully on-policy data becomes beneficial when incorporated into a mixture with other configurations. Moreover, mixtures with identical teacher/student proportions at each level can yield substantially different performance, showing that how the two levels are paired matters beyond the overall amount of on-policy data. Finally, front-loading fully teacher-generated contexts and delaying fully on-policy contexts improves over a static mixture. These findings provide practical principles for deciding where, how much, and when agent distillation should follow the student.

34. [Compression of turbulent flow data through an extended space-time correlation: certification against the modal energy budget](https://arxiv.org/abs/2610.32427)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.32427v1 Announce Type: cross Abstract: The fidelity of direct numerical simulation now outpaces the storage and data-movement capacity available for the resulting fields. We present an open, distributed, GPU-accelerated low-rank compression framework for large turbulent flow databases. We assess it using two direct numerical simulations of a controlled diffusion compressor cascade under laminar and turbulent inflow conditions. Compression is formulated using a correlation operator over space and time, which is two orders of magnitude larger than that of snapshot POD. Its dominant range is extracted with a randomized range finder based on communication-avoiding hierarchical QR. The compressed databases are evaluated through a hierarchy of increasingly strict diagnostics, from instantaneous reconstruction and second-order statistics to the modal turbulent kinetic energy budget and its nonlinear interscale transfer. The budget terms are far more sensitive to compression than fieldwise or one-point errors. They remain accurate at conservative compression and degrade sharply once the retained energy is relaxed. The near-wall dissipation and the interscale transfer degrade the most and set the admissible compression level. An aggressive reduction preserves every one-point statistic to within a few per cent while corrupting both by an order of magnitude more. The dissipation error is confined to the viscous sublayer and grows with the development of the boundary layer. It is carried by the high-order modes. For both inflows, the linear budget terms scale with the discarded energy to the power $0.8$ and the triadic transfer to a power above one.

35. [CodeJeNN: A simple C++ neural network generator for physics applications](https://arxiv.org/abs/2607.02746)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2607.02746v3 Announce Type: replace Abstract: Machine learning has shown promise for physics applications, but integrating Python-based libraries into high-performance C++ solvers can create performance bottlenecks. We present CodeJeNN, which addresses this gap by auto-generating self-contained C++ code from trained Keras models for inference. This eliminates external dependencies through inlined functions, allowing seamless integration into existing frameworks. We describe the Keras-to-C++ workflow, supported architectures, and limitations. CodeJeNN is demonstrated through inference benchmarks against Keras (eager and optimized) and a computational fluid dynamics (CFD) simulation of a hydrogen-air mixing layer in which viscosity is modeled using a neural network, showing that the generated models integrate directly into a solver while remaining efficient and accurate.

36. [Temperature-Dependent Multiphysics Modeling of Additive Friction Stir Deposition Using Multi-Task Coupled Physics-Informed Neural Networks](https://arxiv.org/abs/2610.04082)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.04082v3 Announce Type: replace-cross Abstract: Additive friction stir deposition (AFSD) involves coupled thermal and material-flow fields governed by frictional heating, plastic deformation, and tool-imposed boundary conditions. High-fidelity finite-volume methods (FVMs) can resolve these fields but are computationally expensive, while constant-property approximations can distort the predicted thermo-mechanical response. This work develops a steady-state multi-task coupled physics-informed neural network (MCoPINN) to predict three-dimensional temperature and material-flow fields while reconstructing temperature-dependent thermal conductivity, density, and specific heat from sparse property measurements. A theoretical analysis decomposes prediction error into property reconstruction and neural field-solver contributions and characterizes the discrepancy associated with constant-property models. A controlled one-dimensional nonlinear-conduction study evaluates property reconstruction under sparse measurements. The framework is then evaluated for AFSD against a temperature-dependent FVM benchmark and experimental thermocouple measurements. MCoPINN reproduces the reference thermal and material-flow fields and reduces average temperature root-mean-square error from 50.13 K for the constant-property CoPINN to 30.28 K across four traverse speeds. MCoPINN requires approximately 8.5 hours of training per condition, compared with 52 hours for the FVM benchmark. These results demonstrate computationally efficient, physics-coupled prediction with temperature-dependent material properties.

37. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.99; Date: 2026-10-26T02:28:30Z; Popularity: 1,988 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

38. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.77; Date: 2026-10-26T17:54:16Z; Popularity: 767 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

39. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-10-20T16:52:41Z; Popularity: 490 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

40. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.38; Date: 2026-10-24T19:35:11Z; Popularity: 383 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

41. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-10-26T11:36:19Z; Popularity: 232 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

42. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

43. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

44. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

45. [Simulating student learning for better AI tutoring](https://www.microsoft.com/en-us/research/blog/simulating-student-learning-for-better-ai-tutoring/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 12 Oct 2026 16:00:00 +0000
   - Summary: StudentSim is a research system for evaluating and improving AI tutoring tools before they are tested with learners. It models how individuals may engage with tutors, giving feedback to improve tutor performance across subjects like chess, writing, and mathematics. The post Simulating student learning for better AI tutoring appeared first on Microsoft Research .

46. [What AI gets wrong and what failure teaches us](https://www.microsoft.com/en-us/research/podcast/what-ai-gets-wrong-and-what-failure-teaches-us/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 06 Oct 2026 16:19:06 +0000
   - Summary: Jennifer Neville did not want to go into computer science—but that’s exactly where she landed. Neville discusses the starts and stops that led to her professional sweet spot and her work identifying “surprising failures” making it hard for AI to handle complexity. The post What AI gets wrong and what failure teaches us appeared first on Microsoft Research .

47. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

48. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

49. [Anchored HLLD: A Riemann solver for a hypoelastic diffuse-interface model of compressible fluid-solid interaction](https://arxiv.org/abs/2610.31958)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.31958v1 Announce Type: new Abstract: We present an HLLD Riemann solver for a multicomponent hypoelastic diffuse-interface model of compressible fluid-solid interaction, with no separately computed interface and a deviatoric stress advanced by an objective hypoelastic rate law outside conservation-law form. The difficulty specific to this model is that the stress evolution is nonconservative and, unlike the familiar volume-fraction terms of Kapila-type models, cannot be left outside the Riemann solve once the shear waves are resolved. The shear coefficient $\rho(G+\tau_{xx})$ sets the impedance of the resolved shear waves and so belongs to their eigenstructure. Anchored HLLD carries it inside the solve by evaluating the HLLD fan twice at each face, anchored in turn to each adjacent cell-centered state, with every cell advancing from the flux anchored to its own state. HLL, HLLC, and anchored HLLD form a three-tier hierarchy of increasing wave resolution in one framework. We prove local structural properties: consistency at the reconstruction order, exact species-mass conservation, and tangential-momentum and energy drift vanishing under refinement at the reconstruction's face-jump order on smooth fields, with one-dimensional tests illustrating these structural properties and demonstrating first-order drift convergence on discontinuous fields. Across one-dimensional tests and two-dimensional production simulations in the open-source solver MFC, anchored HLLD resolves both the material contact and the shear waves, HLLC the contact alone, and HLL neither sharply. Where refinement studies are shown, anchored HLLD converges toward exact or semi-analytic solutions. A three-dimensional shock-ellipsoid interaction demonstrates the solver with all six stress components active.

50. [Coherent axion electrodynamics in OSIRIS: a counter-propagating axion-photon parametric instability](https://arxiv.org/abs/2610.32091)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.32091v1 Announce Type: new Abstract: We present a coherent axion-electrodynamics extension of the OSIRIS particle-in-cell code and use it to identify and benchmark a parametric axion-photon instability supported by two equal counter-propagating electromagnetic pumps. The module evolves a cell-centered axion field together with a separately stored first-order electromagnetic response on the native staggered OSIRIS grid. Re-examining the previously proposed strictly co-linear branch shows that it is removed when the axion-Maxwell equations are reduced consistently. A closely related standing-wave geometry, however, supports a distinct Floquet instability. We derive the coupled Floquet problem for an equal-amplitude counter-propagating pump pair and obtain a reduced analytic growth rate and cutoff for the dominant long-wavelength envelope branch. For an axion mass-to-pump-frequency ratio of 0.06 and a per-beam vector-potential amplitude of 0.3, simulations at coupling strengths of 0.60, 0.80, and 1.00 reproduce both the growth-rate spectrum and the coupling-dependent instability boundary. The reduced theory predicts envelope-mode cutoffs of 8.44, 10.80, and 13.23, while OSIRIS finds exponential growth through modes 8, 10, and 13, respectively, with the next resolved modes stable. The electromagnetic diagnostics additionally resolve exponentially growing sidebands at twice the pump wavenumber, while the zero-wavenumber electric component exhibits no sustained growth, as expected for the unstable Floquet eigenvector. The agreement provides an end-to-end benchmark of the coherent axion-electromagnetic coupling and demonstrates that parametric growth of the axion field is present in a two-beam pump geometry.

51. [QuantumBilliards.jl: An extensible, user friendly, high-performance Julia library for the large scale computation of spectra and eigenstates of quantum billiards and related problems](https://arxiv.org/abs/2610.32605)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.32605v1 Announce Type: cross Abstract: We present QuantumBilliards.jl, an open-source Julia library providing a suite of numerical solvers for the two-dimensional interior Helmholtz eigenproblem with Dirichlet boundary conditions, a paradigmatic model in quantum chaos. The library implements conventional wavenumber-sweep techniques together with several accelerated eigensolvers: the Vergini--Saraceno scaling method, the expanded boundary integral method (EBIM), Beyn's contour-integral method, and the Compact Rational Krylov (CORK) method. It provides a common framework for constructing billiard geometries, exploiting discrete symmetries, computing eigenvalues and eigenstates, and treating smooth, cornered, and multiply connected domains. The library further includes reconstruction of eigenfunctions from boundary normal derivatives and the computation of Poincar\'e--Husimi (PH) phase-space representations. Available at: https://github.com/Quantum-Chaos-Julia/QuantumBilliards.jl.

52. [foap4: Adaptive mesh refinement with OpenACC/OpenMP, MPI, and p4est](https://arxiv.org/abs/2605.07612)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2605.07612v2 Announce Type: replace Abstract: GPUs and other accelerators are increasingly used for scientific computing. We want to add GPU support to existing parallel adaptive mesh refinement (AMR) codes written in Fortran. To understand which changes are necessary to obtain good performance we have developed foap4, an AMR framework implemented in Fortran that uses OpenACC/OpenMP, MPI, and the p4est library. We discuss the design and implementation of the framework. Several benchmark problems are considered, in which Euler's equations of gas dynamics are solved using explicit time integration. These benchmarks are performed in both 2D and 3D, using static and adaptive meshes, for varying problem sizes on different hardware. Our results show that AMR simulations can be carried out efficiently on GPUs, even when using relatively small grid blocks of $8^3$ or $16^3$ cells. With NVIDIA's nvfortran compiler similar performance is obtained with OpenACC and OpenMP offloading. Initial results with the gfortran compiler and OpenACC demonstrate the portability of foap4.

53. [Adding slow magnetoacoustic mode to the HLL-type multi-state approximate Riemann solution](https://arxiv.org/abs/2609.17049)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.17049v2 Announce Type: replace Abstract: Multi-state HLL-type approximate Riemann solutions of ideal magnetohydrodynamics (MHD) typically assume that the medium within the Riemann fan is incompressible, and thus the slow magnetoacoustic mode cannot be included in their space-time wave configurations for the intermediate states. We propose a new strategy to design multi-state HLL-type solutions, allowing for the medium within the Riemann fan to be compressible. In particular, for the complete seven-wave configuration of the MHD Riemann problem, we estimate the slow magnetoacoustic speeds and a longitudinal flow speed between the slow modes, whose compressibility is estimated based on the relations between fast, Alfv\'en, and slow speeds. Then, following the conservation laws and Rankine-Hugoniot jump relations across the fast, Alfv\'en, and slow waves, we calculate all the intermediate states within the Riemann fan. Moreover, we discuss the solutions when certain wave modes degenerate, ensuring well-posedness and smooth transitions between complete and degenerate wave configurations. Numerical simulations using a Finite Volume solver show that the proposed approximate Riemann solution is less diffusive than the classic HLLD scheme, particularly for slow mode waves. For example, in a 1D test case with a strong longitudinal magnetic field, the new scheme needs one order of magnitude fewer grid cells compared to the classic HLLD scheme to resolve all wave modes.

54. [Stabilizing the parquet problem](https://arxiv.org/abs/2606.04936)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 26 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2606.04936v2 Announce Type: replace-cross Abstract: We systematically analyze the stability of the iterative solution of the parquet equations by studying the spectrum of the Jacobian associated with the commonly used damped fixed-point iteration procedure. In this context, we provide an explicit criterion that determines when the physical fixed point of the parquet iteration becomes unstable. Importantly, we demonstrate that misleading convergence issues, observed in parquet calculations at intermediate-to-high interaction values, are not restricted to parameter regions where the two-particle irreducible vertex diverges, but can also arise in absence of vertex divergences. Hence, the misleading convergence issues of parquet-based algorithms are not directly caused by the crossings of two solutions of the (multivalued) Luttinger-Ward functional, that are associated with vertex divergences. Building on these insights, we apply the controlled stabilization strategy of Phys. Rev. Lett. 137, 016502 (2026) to the challenging case of the parquet iteration. This strategy allows the convergence to the physical solution in the instability regimes. We apply this procedure to the zero-point model and the Hubbard model in the atomic limit, where we successfully stabilize the physical solution deep in the non-perturbative regime, even across multiple divergence lines. Further, we compare our stabilization strategy to alternative fixed-point solvers that can be used to solve the parquet problem.

55. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.79; Date: 2026-10-26T12:42:37Z; Popularity: 785 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

56. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.43; Date: 2026-10-26T10:10:31Z; Popularity: 1,434 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

57. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.25; Date: 2026-10-26T14:20:56Z; Popularity: 254 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

58. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-10-19T17:32:52Z; Popularity: 56 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

59. [RobLe3/IICP](https://github.com/RobLe3/IICP)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-29T16:46:51Z; Popularity: 7 stars
   - Summary: Open specification and conformance material for intent-based AI agent discovery and routing

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Knowing Whom to Trust is not Enough: The Trust--Agreement Gap in Repeated Multi-Party LLM Negotiation

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2610.31971

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
