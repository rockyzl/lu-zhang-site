# Daily signal sidecar - 2026-09-04

## Selected Signal

- Title: Structure and Implementation of New Practical English Textbooks Driven by Artificial Intelligence
- URL: https://arxiv.org/abs/2609.02981
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Structure and Implementation of New Practical English Textbooks Driven by Artificial Intelligence
- Primary source: https://arxiv.org/abs/2609.02981
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

Total candidates reviewed after duplicate-source filtering: 69

1. [Structure and Implementation of New Practical English Textbooks Driven by Artificial Intelligence](https://arxiv.org/abs/2609.02981)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02981v1 Announce Type: new Abstract: Artificial intelligence is changing the form of applied English materials from fixed paper sequences to adaptive learning systems that can diagnose learners, recommend tasks, and provide formative feedback. This paper studies the structure and application of a new practical English textbook driven by artificial intelligence. A five-layer architecture is proposed: knowledge mapping, learner profiling, task generation, feedback orchestration, and teacher-side governance. A prototype was tested on 186 non-English-major undergraduates for eight weeks of teaching. Compared with a static digital textbook, the proposed system increased the unit completion accuracy from 72.4% to 84.9%, raised the average score for speaking tasks by 10.8 points, and reduced the teacher's correction time by 31.6%. Therefore, an AI-driven textbook can maintain the stability of the curriculum while providing personalised learning paths, rich practice materials and traceable classroom data.

2. [Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents](https://arxiv.org/abs/2609.03438)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03438v1 Announce Type: new Abstract: Graphical user interface (GUI) agents are increasingly used to execute natural-language instructions on user interfaces, yet real users may issue infeasible instructions due to benign mistakes. A reliable agent should not only know how to act, but also when not to act. In this work, we introduce CONFLICTGUI, a benchmark covering instruction-internal conflicts and instruction-GUI context conflicts to study conflict-aware termination. Our evaluation reveals severe execution-biased overcompliance: agents that perform well on feasible tasks often continue to execute blindly under conflicting instructions. To mitigate this behavior, we propose CONFLICTGUARD, an inference-time framework that aligns an agent's feasibility awareness with its action generation. CONFLICTGUARD contains two coupled components: a feasibility verification protocol that guides the agent to assess instruction logic and GUI-side evidence before acting, and a conditional action modulation mechanism that steers agents from over-compliant execution into termination-oriented behavior. Experiments across five widely-used agents demonstrate that CONFLICTGUARD improves average conflict task success rate significantly, while preserving normal GUI-task performance. These results validate that a lightweight inference-time intervention can substantially boost GUI Agent's competence to identify inappropriate execution scenarios and refrain from unnecessary actions.

3. [Legora reviewed 41 documents in minutes with GPT-6 Astra](https://openai.com/index/legora-financial-statement-review-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 03 Sep 2026 12:00:00 GMT
   - Summary: Legora used GPT-6 Astra to review 41 documents in minutes, find all four planted errors, and improve performance by nearly 40% in this financial-review workflow.

4. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

5. [Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory](https://arxiv.org/abs/2609.03340)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03340v1 Announce Type: new Abstract: Distributed LLM-agent teams can read the latest shared facts and still act on an obsolete plan. A planner may derive an action from requirement $r_3$, another agent may commit $r_4$, and an executor may receive $r_4$ without replacing the plan derived from $r_3$. We call this \emph{stale-plan execution}: state freshness does not establish that the plan authorizing an action remains valid. We introduce PlanFence, a dependency-scoped action-validation protocol. Plans cite the exact public records they used, and an executor validates only the records that can affect the pending external action, replanning once or blocking when validation is incomplete. In 30 controlled live workflows with a post-plan revision, a freshness-only executor acts on the obsolete plan in every task, whereas PlanFence completes all tasks without an invalid action. Controlled replay reveals two conditional boundaries: proactive synchronization yields lower coordination stall at low churn, while PlanFence avoids repeated update-path coordination as churn grows and avoids validating unrelated state as the shared keyspace grows. These are controlled safety and systems-cost results, not general task-accuracy gains.

6. [A Prompt-Engineering Approach to Develop Scalable, Flexible, and Real-Time Hybrid Micro-Level Personalization in a General Purpose AI Teaching Assistant](https://arxiv.org/abs/2609.03402)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03402v1 Announce Type: new Abstract: Artificial intelligence (AI) teaching assistants powered by large language models (LLMs) offer scalable educational support but often provide limited personalization. This study presents a prompt-engineering-based framework for personalizing general-purpose LLM/RAG-based AI teaching assistants such as Jill Watson across academic disciplines and courses. The framework adapts responses using six learner-specific dimensions: self-assessment, abstraction preference, verbosity preference, perceptual orientation, information processing style, and level of understanding, yielding 96 distinct learner profiles. Student queries are additionally analyzed using Bloom's Taxonomy to estimate cognitive complexity at the interaction level. Learner attributes and cognitive assessments are encoded in structured prompts that condition the LLM without requiring model retraining. The framework is evaluated through experiments using NLP metrics and a human study with five participants. Results show perceived differences in response style and structure across personalization conditions, with statistical analyses identifying learner attributes associated with measurable response changes. These findings provide preliminary evidence that prompt-based personalization can support adaptive behavior in LLM-powered educational agents.

7. [Caught in the Story: Narrative Captivity in Multi-turn LLMs Conversation](https://arxiv.org/abs/2609.03407)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03407v1 Announce Type: new Abstract: People increasingly turn to large language models (LLMs) for everyday advice, making ethically charged interpersonal problems a practical moral-advisory context. Most prior work has studied this context through single-turn judgments or pressure-laden rebuttals, assumptions that poorly match how guidance is sought in real-world contexts. These assumptions leave unclear whether narration alone, without an explicit opposing position, can shift model judgments during multi-turn moral consultation. Yet real-world moral-conflict conversation often elicits one party's self-justifying account, which can unfold over multiple turns and create information asymmetry. We introduce \textbf{narrative captivity}, a failure mode in which a model treats an unopposed one-sided account as complete and aligns with the narrator's interpretation without seeking missing perspectives. To measure this phenomenon, we build a benchmark of $5{,}078$ interpersonal-conflict scenarios spanning six moral dimensions. Across 17 LLMs, narrative captivity is widespread: end-state judgments under multi-turn narration shift by 25 percentage points on average beyond the matched single-turn baseline. Stage-level analysis identifies preference optimization as a major contributor, while four inference-time strategies provide only partial mitigation. We hope our project fosters LLM advisors that preserve independent judgment in real-world consultation.

8. [Beyond "Made with AI": Visualizing Provenance Density to Mitigate the Transparency Penalty](https://arxiv.org/abs/2609.03460)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03460v1 Announce Type: new Abstract: As generative AI makes polished prose cheap to produce, users can no longer rely on fluency as a proxy for truth. We call this failure mode the Fluency Trap: users trust fluent hallucinations while also discounting accurate content once it is disclosed as AI-generated. Binary ``Made with AI'' labels respond with authorship disclosure, but they do not show what supports a claim. We propose Provenance Density, an evidence-visualization interface that shows the density of verified claims in a text. In a user study with 81 participants, an idealized Provenance Density interface produced a large discernment gap between truth and fabrication ($+4.15$ points, $d=1.82$), whereas participants given no signal showed no detectable discrimination. A technical audit with 200 samples shows that retrieval density alone is insufficient; unexpectedly, the Consistency Veto carries most of the discriminative signal on dynamic queries. As AI-generated content becomes indistinguishable from human writing, effective transparency must move from authorship disclosure toward evidence visualization.

9. [Stochastic Tensor Contraction for Efficient MP2 Exchange](https://arxiv.org/abs/2609.03168)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03168v1 Announce Type: cross Abstract: Second-order Moller--Plesset perturbation theory (MP2) is one of the simplest correlated wave-function methods, but its conventional $O(N^5)$ cost limits its application to large systems. Stochastic tensor contraction (STC) has recently appeared as a general technique to evaluate high-order tensor contractions in quantum chemistry. Here, we apply STC to the exchange contribution of Laplace-transformed MP2, which is the source of $O(N^5)$ scaling in the formulation. The resulting STC exchange algorithm has an $O(N^3)$ deterministic setup cost and an $O(N^2)$ stochastic cost at fixed absolute error. The estimator is unbiased and provides a way to specify the target stochastic error by estimating the number of required samples before the full calculation. We implement the algorithm using a hybrid deterministic--stochastic evaluation strategy, with grouped index sampling, to reduce the computational prefactor. Over a range of benchmark molecules containing up to $\sim 7000$ basis functions, the stochastic exchange evaluation takes as little as $1/270$ of the time of a complete DF-MP2 calculation on the same system. Within the Laplace-transformed formulation, the $O(N^4)$ scaling direct contribution is thus the only significant cost. Our results further substantiate the power of STC to serve as a general tensor-contraction engine for quantum chemistry.

10. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.83; Date: 2026-09-04T15:37:58Z; Popularity: 2,834 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

11. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

12. [Daybreak for Frontline Defenders: $1B to protect essential services](https://openai.com/index/daybreak-for-frontline-defenders)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 03 Sep 2026 13:15:00 GMT
   - Summary: OpenAI introduces Daybreak for Frontline Defenders. A $1 billion commitment expands access to frontier cyber AI, training, and support for essential services.

13. [Playco cut manual fixes 50% prototyping games with GPT-6 Astra](https://openai.com/index/playco-game-prototyping-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 03 Sep 2026 12:00:00 GMT
   - Summary: Using GPT-6 Astra, Playco built three themed game prototypes from one grey box foundation and reported 50% fewer manual fixes than with the previous model.

14. [Safety overview: GPT-6 Astra](https://openai.com/index/safety-overview-gpt-6-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT
   - Summary: GPT-6 Astra is our most capable broadly deployed model and our first to reach the Critical level of cybersecurity capability under our Preparedness Framework.

15. [ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT](https://openai.com/index/atv-big-air-tour)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 02 Sep 2026 12:00:00 GMT
   - Summary: ATV Big Air Tour uses ChatGPT Work to speed up marketing, merchandising, and more. It even turned merchandise photos into an inventory website in 15 minutes.

16. [Path to Astra: critical capabilities and frontier safeguards](https://openai.com/index/path-to-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 13:00:00 GMT
   - Summary: Astra is the first OpenAI model to meet the Critical cybersecurity capability threshold under the Preparedness Framework, with stronger safeguards for release.

17. [Healthcare organizations can now connect EHR and additional industry data to ChatGPT](https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 12:00:00 GMT
   - Summary: ChatGPT can now connect to trusted healthcare data, helping clinicians securely access patient context, medical research, and more.

18. [How law firm Gilbert + Tobin governs and scales AI with OpenAI](https://openai.com/index/gilbert-tobin)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 01:00:00 GMT
   - Summary: See how Gilbert + Tobin combines CEO-led commitment, rigorous governance, and human accountability to scale ChatGPT Enterprise and Codex across the firm.

19. [OpenAI supports California’s bill to advance youth AI safety](https://openai.com/index/supporting-california-bill-advance-ai-youth-safety)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 31 Aug 2026 07:00:00 GMT
   - Summary: OpenAI supports California SB 1119, advancing strong, age-appropriate AI safeguards for teens while preserving opportunities to learn, create, and explore.

20. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

21. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

22. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

25. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

26. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

27. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

28. [Real-Time Intelligence with IBM Time Series Models on Confluent](https://huggingface.co/blog/ibm-research/real-time-intelligence)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 02 Sep 2026 13:49:14 GMT

29. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

30. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

31. [The Open ASR Leaderboard Adds Its First Global South Language](https://huggingface.co/blog/open-asr-leaderboard-global-south)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 GMT

32. [Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers](https://huggingface.co/blog/train-multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT

33. [Granite 4.2 LLMs: How They&apos;re Built](https://huggingface.co/blog/ibm-granite/granite-4-2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 15:14:14 GMT

34. [MasterControl Seventeen Every Time](https://arxiv.org/abs/2609.03209)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03209v1 Announce Type: new Abstract: We study a governed approach to enterprise analytics: a language model interprets the question, while deterministic policy selects and runs a pre-approved analytical program that returns both results and evidence. We show that this restriction can remain expressive within a defined analytical class, using relational operations plus aggregation, comparison, windows, ranking, and similarity. Fixed meaning, policy, data, and execution rules also make results replayable. Across 440 runs, three 8B models generated SQL and selected tools at runtime, while Qwen3-8B interpreted intent only and policy executed the approved program. None of 330 runtime-planning episodes matched the full answer-and-evidence contract across all test datasets; the policy-executed analyzer matched 110 of 110. This is a configuration-specific result, not evidence that runtime agents cannot succeed under other designs.

35. [Speculative Macro Commit for Faster Tool-Using Agents](https://arxiv.org/abs/2609.03236)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03236v1 Announce Type: new Abstract: Tool-using LLM agents spend wall-clock time not only on model inference but also in serial action--observation turns, where each tool call, environment transition, and observation can delay subsequent decisions. We introduce \textbf{Speculative Macro Commit} (SMC), a runtime mechanism for a two-tier agent system: a large authoritative actor model produces the official trajectory, while a faster speculative drafter model continuously predicts and executes future action chains on an isolated environment snapshot. SMC mines recurring multi-action skeletons from training traces and stores them in a macro library used to match against action chains predicted by the drafter at runtime. When the actor's next tool call matches the first drafted action, SMC commits the remaining pre-executed draft steps, together with their observations, to the official trajectory. Using Qwen3.5-27B INT4 as the authoritative actor model and Qwen3.5-4B as the speculative drafter model, SMC matches the sequential agent's overall accuracy while reducing latency by 10.23\% over the Speculative Actions (SA) baseline and 18.59\% over sequential execution on the $\tau^2$-Bench Telecom subset. On AppWorld, SMC reduces wall time by 7.7\% over SA baseline and 44.9\% over sequential execution, with a small reduction in task completion. Overall, SMC provides a practical way to reuse multi-step speculative execution and reduce agent latency beyond single-step speculative actions. Our code is publicly available \href{https://github.com/zeyuliu1037/speculative-macro-commit}{\textcolor{magenta}{here}}.

36. [Dude: A Dual-Detection Multi-Agent System for Paper-Code Discrepancy Detection](https://arxiv.org/abs/2609.03416)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03416v1 Announce Type: new Abstract: LLM-empowered paper-code discrepancy detection has received growing concern since the scaling of research submissions exceeds the manual review capability. However, the limited context capacity and one-sided discrepancy detection of existing single-agent LLM paradigms lead to an inferior recall performance in detecting discrepancies. In this paper, we propose Dude, the first Dual-Detection Multi-Agent System for paper-code discrepancy detection. We discover that the granularity asymmetry of the paper-language and code-language introduces over-interpretation and over-reporting challenges in a multi-agent system design for discrepancy detection, resulting in increasing false positives. To address this, we propose a granularity-aligned negotiation and a two-stage salience-filtering mechanism in Dude, which effectively prevents agents from falsely reporting discrepancies. Experimental results in real-world paper-code discrepancy datasets showcase Dude's significant recall and precision improvement by up to 22.8%, increasing F1 score by up to 18.7% compared to baseline methods.

37. [DuplexSpeechBench-IFEval: Evaluating Implicit Instruction Following in Full-Duplex Voice Agents](https://arxiv.org/abs/2609.03423)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03423v1 Announce Type: new Abstract: Full-duplex voice agents must continuously decide when to listen, backchannel, interrupt, handle speech overlaps, take the floor, and yield. Existing benchmarks largely test these behaviors through explicit turn-management instructions, while deployed agents are often configured through roles or personas from which the appropriate conversational behavior must be inferred. We introduce DuplexSpeechBench-IFEval (DSB-IFEval) for evaluating implicit instruction-following in real-time spoken interaction. (DSB-IFEval) comprises 1,038 test cases spanning eight diverse assistant roles and evaluates five conditioning protocols for instruction-following: default behavior, explicit behavioral instructions, persona-implied behavior, combined persona--rule conditioning, and instruction conflict. We measure real-time floor management using a deterministic Instruction Adherence Score (IAS) and persona-consistent content using LLM-judged Persona Adherence Score (PAS). Across six real-time speech systems, we find architecture-dependent trade-offs. Full duplex models like F-Actor and PersonaPlex are more sensitive to whether conversational behavior is stated explicitly or must be inferred from a persona, with adherence dropping by 9.7% and 4.5%, respectively, under persona-only conditioning. In contrast, GPT-Realtime, MiniCPM-o, and Fun-Audio-Chat strongly adhere to persona-consistent content, but their floor behavior does not adapt across explicit and persona-only instructions and remains constrained on several proactive actions. We further find that even if systems reliably follow conflicting directives to their prescribed persona, they still struggle to override them under safety conflict. These results show that inferring the behavior implied by a role, executing it at the appropriate conversational moment, and resolving competing instructions remain distinct challenges for full-duplex voice agents.

38. [Equation Recast for Canonical Operator Learning Across Parametric PDEs](https://arxiv.org/abs/2609.02982)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02982v1 Announce Type: new Abstract: Learning solution operators across broad parameter ranges can require substantial coverage of both input functions and physical parameters, particularly for purely data-driven parametric models. In addition, the resulting models may fail silently outside the training distribution. We introduce equation recast, which reformulates parametric operator learning as the learning of a single canonical operator. Parameter-induced operator variations are derived analytically from the governing equation and absorbed into effective sources, enabling zero-shot prediction across new parameter regimes. Across multi-parameter, nonlinear, and singular PDE settings, equation recast supports extrapolation, integrates sparse heterogeneous datasets in a shared canonical representation, and uses loss of convergence as an internal warning signal for failure of the recast iteration. In high-fidelity tokamak simulations for nuclear fusion, the framework unifies electron-temperature data across four device geometries through canonical-domain mapping within one jointly trained operator. Equation recast provides a route toward reusable neural PDE solvers combining equation-guided transfer, data efficiency, and monitorable inference.

39. [From Euclidean to Graph-Structured Data: A Survey of Collaborative Learning](https://arxiv.org/abs/2609.02984)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02984v1 Announce Type: new Abstract: The conventional approach to machine learning, that is, collecting data, training models, and performing inference in a single location, faces fundamental limitations, including scalability and privacy, that restrict its applicability. To address these challenges, recent research has explored collaborative learning approaches, including federated learning and decentralized learning, where individual agents perform training and inference locally, with limited collaboration. Most collaborative learning research focuses on Euclidean data with regular, grid-like structure (e.g., images, text). However, these approaches fail to capture the relational patterns in many real-world applications, best represented by graphs. Learning on graphs relies on message-passing mechanisms to propagate information between connected nodes, making it conceptually well-suited for collaborative environments where agents must exchange information. Yet, the opportunities and challenges of learning on graph-structured data in collaborative settings remain largely underexplored. This survey provides a comprehensive investigation of collaborative learning from Euclidean to graph-structured data, aiming to consolidate this emerging field. We begin by reviewing its foundational principles for Euclidean data, organizing them along three core dimensions: learning effectiveness, efficiency, and privacy preservation. We then extend the discussion to graph-structured data, introducing a taxonomy of graph distribution scenarios, characterizing associated statistical heterogeneities, and developing standardized problem formulations and algorithmic frameworks. Finally, we systematically identify open challenges and promising research directions.

40. [No-Regret Bayesian Optimization with Finite-Library Input-Warped Kernels](https://arxiv.org/abs/2609.02993)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02993v1 Announce Type: new Abstract: Gaussian-process Bayesian optimization (GP-BO) excels at black-box optimization of costly functions, e.g., hyperparameter optimization (HPO) and multi-agent system (MAS) design. Convergence-rate guarantees exist for select methods, notably GP upper confidence bound (GP-UCB), but require a fixed kernel. Critically, the kernel encodes how input proximity affects objective value similarity. When raw coordinates poorly match this geometry - as with log-scaled hyperparameters or localized peaks - input warping can greatly improve sample efficiency, yet known GP-UCB proofs require a fixed kernel. We propose Finite-Library Input-Warped Bayesian Optimization (FLIWBO), which selects warps from a finite library of smooth input maps by any history-dependent rule. It adapts the input geometry to accelerate learning while retaining high-probability convergence guarantees under mild hypotheses, with an explicit $\sqrt(N_\varepsilon)$ library-size cost. Controlled diagnostics show that finite-library warping repairs planted geometry mismatches and identify FLIWBO failure cases. Across four repeated benchmarks - warped synthetic objectives, a confidence-fence trap, and Fashion-MNIST HPO - FLIWBO-UCB beats raw-coordinate GP-UCB under misspecified geometry, escapes traps that defeat even oracle-warp expected improvement, and recovers much of the gain from manual log scaling, while leading the tested methods that admit a matching regret guarantee. A 20-dimensional MAS design study further shows feasibility under costly noisy evaluations. Code for experiments is available: https://github.com/edvin-ketabati/bogp-paper-experiments.

41. [IDMate: Window-resolved self-consistent-field proposal screening with finite-temperature response bounds](https://arxiv.org/abs/2609.02979)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02979v1 Announce Type: cross Abstract: We introduce IDMate, a Kohn--Sham framework for screening approximate self-consistent-field (SCF) states with a finite-temperature response bound and deterministic reference-map recovery. A charge-neutral factorization separates electronic conditioning from mixer amplification, while fixed-point-preserving rank-one interventions test their roles in the linearized dynamics. For a fixed Hamiltonian, exact electron number, and temperature, strong convexity of the Mermin free-energy functional yields an a posteriori density-matrix bound in a selected spectral window. Across $3{,}586$ stress trials, $1{,}942$ proposals were accepted and none exceeded the window criterion. Under trial independence, the one-sided $95\%$ zero-event upper bound is $8.4\times10^{-4}$; treating the 70 correlated ladders as independent units gives $4.2\times10^{-2}$ per ladder. In three reference configurations, the integrated screening rule replaced ten reference-map evaluations, reproduced the reference-scoring trajectories, and satisfied every terminal comparison criterion. Window and full-space deviations differ by six to eleven orders of magnitude; full-space distance classifies the window decisions with a descriptive pooled AUC of $0.694$ (row-bootstrap $95\%$ interval $[0.544,\,0.831]$). A predefined cross-lineage work model does not meet its acceptance criterion, and serial proposal construction makes the production implementation $7.87$ times as costly under the predefined charged-cost accounting as its all-reference counterfactual. IDMate establishes a rigorous exact-trace window bound, a tested accept-or-recover rule, and explicit full-space and implementation targets for net acceleration.

42. [Equation Recast for Canonical Operator Learning Across Parametric PDEs](https://arxiv.org/abs/2609.02982)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02982v1 Announce Type: cross Abstract: Learning solution operators across broad parameter ranges can require substantial coverage of both input functions and physical parameters, particularly for purely data-driven parametric models. In addition, the resulting models may fail silently outside the training distribution. We introduce equation recast, which reformulates parametric operator learning as the learning of a single canonical operator. Parameter-induced operator variations are derived analytically from the governing equation and absorbed into effective sources, enabling zero-shot prediction across new parameter regimes. Across multi-parameter, nonlinear, and singular PDE settings, equation recast supports extrapolation, integrates sparse heterogeneous datasets in a shared canonical representation, and uses loss of convergence as an internal warning signal for failure of the recast iteration. In high-fidelity tokamak simulations for nuclear fusion, the framework unifies electron-temperature data across four device geometries through canonical-domain mapping within one jointly trained operator. Equation recast provides a route toward reusable neural PDE solvers combining equation-guided transfer, data efficiency, and monitorable inference.

43. [Generative Nested Sampling of Atomistic Thermodynamic Landscapes](https://arxiv.org/abs/2609.03193)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03193v1 Announce Type: cross Abstract: Nested sampling (NS) resolves the thermodynamics of an atomistic system from a single simulation, but its practical reach is limited by the Markov-chain updates needed to decorrelate walkers within each likelihood-constrained ensemble. Flow-based NS has removed this bottleneck for gravitational-wave (GW) inference, yet its transfer to atomistic systems is not merely a change of application. Comparing a GW150914-like binary-black-hole likelihood with an eight-particle two-dimensional Lennard-Jones (LJ) system of comparable dimensionality, we show that the two landscapes differ fundamentally: atomistic multimodality is discrete and combinatorial, generated by particle permutations separated by hard collision walls, and its coordinate coupling is dense and collective, whereas the GW posterior exhibits smooth degeneracies and localized parameter coupling. Guided by this diagnosis, we introduce NS-Flows: a single conditional normalizing flow, conditioned on the NS energy bound and trained on a sliding window of recent live sets, that replaces MCMC by direct parallel draws corrected by importance-weighted rejection resampling. Live sets supply data self-consistently, allowing flow training without structured priors or a pre-existing dataset. For LJ disks in PBC, the algorithm reduces energy evaluations by over two orders of magnitude and wall-clock time by roughly one third, an advantage that becomes increasingly favorable as the cost of the potential grows. The flow's generation efficiency further acts as a physical diagnostic: it varies non-monotonically along the annealing trajectory, is lowest in the dense disordered regime, and is quantitatively captured by the constrained ensemble's internal mode complexity together with target drift across the training window, identifying liquid-like ensembles, rather than prior-target separation, as the hard case for current flow architectures.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.80; Date: 2026-09-04T12:25:22Z; Popularity: 1,805 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-09-04T04:41:17Z; Popularity: 482 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-04T08:20:28Z; Popularity: 360 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-09-04T03:22:36Z; Popularity: 239 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

49. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

50. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

51. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

52. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

53. [Modern Transformers Are Implicit Hybrids: From Functional Differentiation to Principled Hybrid Architecture Design](https://arxiv.org/abs/2609.02986)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02986v1 Announce Type: new Abstract: Hybrid architectures combining Full Attention (FA) and Linear Attention (LA) are increasingly prominent, yet their allocation remains heuristic. We seek an evidence-grounded basis in head-level functional organization learned by RoPE-based Transformers. Behavioral probes do not yield a complete taxonomy, so we propose two intervention metrics: RoPE Frequency Importance Score (RFIS), measuring how each frequency affects a head's attention distribution, and RoPE Positional Dependence (RPD), isolating dependence on rotary positional modulation. On Qwen3-series models and Llama3.1, RFIS suggests and RPD verifies a complete taxonomy of retrieval and positional heads separated by a salient mid-low-frequency band. Controlled Transformers show that this boundary follows the training-length positional scale; we term it the Global Positional Band (GPBand). The analysis suggests a potential cause of zero-shot length-extrapolation failure and yields two principles: positional modeling should operate only locally, with global access through position-independent retrieval; and both functions should be assigned at head granularity with layer-specific allocation. We instantiate them in Head-wise Hybrid Architecture (HwH), using NoPE FA for global retrieval and LA for local positional modeling. With an FA-to-LA ratio below 1:3, HwH retains strong language modeling and commonsense reasoning while improving retrieval and substantially strengthening zero-shot long-context extrapolation over Transformer, LA, and a layer-wise hybrid baseline. Ablations validate both principles and component roles, highlighting principled hybrid architecture design as a promising route toward future foundation models.

54. [Tail-Likelihood Reinforcement Learning](https://arxiv.org/abs/2609.02987)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02987v1 Announce Type: new Abstract: Reinforcement learning typically optimizes average reward. For generative policies, the average can hide an important distinction: two policies can achieve the same mean reward while having very different chances of producing a rare but high-reward rollout. This matters as sampling increases during training and inference, since its benefit depends on retaining probability mass on high-reward outcomes. We propose to optimize this coverage directly. Rather than considering only expected reward, we consider all of its upper tails: for each reward threshold, how likely is the policy to exceed it? This turns a continuous reward into a family of binary success events. We introduce Tail-Likelihood Reinforcement Learning (TailRL), which maximizes the log-probability of exceeding a randomly chosen reward threshold. Its gradient gives more weight to rare, high-reward rollouts and can be interpreted as a mixture of Best-of-(k) gradients. TailRL requires only a simple modification to the advantage function, making it compatible with existing reinforcement learning pipelines. Across object localization, maze navigation, GUI grounding, and code optimization, TailRL leverages rare high-reward training samples to avoid suboptimal solutions and yields models that benefit more from additional samples at inference time.

55. [Mesh-Native Physics-Informed Graph Surrogates for TCAD-in-the-Loop Design Space Exploration](https://arxiv.org/abs/2609.02988)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02988v1 Announce Type: new Abstract: High-fidelity TCAD simulation of drift-diffusion transport remains the workhorse of emerging FinFET device design, but it is computationally expensive, especially for 3D structures where runtime escalates steeply with mesh complexity. This sharply limits multi-objective design space exploration. Existing machine-learning surrogates map a fixed set of design parameters to a few scalar device metrics, discarding the underlying physics and losing transferability across device geometries and families. A physics-informed graph attention network (GAT) surrogate is proposed. It operates directly on the tetrahedral TCAD mesh and predicts, at every mesh node, the electrostatic potential together with the electron and hole quasi-Fermi levels, the fundamental unknowns of the drift-diffusion system. Training combines a data loss with finite-volume current-continuity residuals, embedding carrier-transport physics into the objective. Operating on the mesh as a graph, the surrogate inherits size generalization: a model trained on few-fin meshes applies unchanged to substantially larger arrays, bounded at inference only by GPU memory. Per-node uncertainty from a deep ensemble drives an active-learning loop that screens large candidate pools in seconds and forwards only the most informative designs for full simulation. Benchmarked against Sentaurus Device on multi-fin tri-gate FinFETs, the surrogate reproduces the three drift-diffusion fields with sub-volt per-field RMSE and reaches a per-design throughput orders of magnitude higher than the full simulator. The advantage grows with device size: on large multi-fin arrays that are prohibitively slow to simulate directly, inference still completes in under a second per device, enabling Pareto-front exploration across device scales infeasible for direct TCAD sweeps.

56. [Evaluating Graph Neural Networks for Change-Criticality Classification in Maritime Navigation Charts](https://arxiv.org/abs/2609.02996)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02996v1 Announce Type: new Abstract: Graph neural networks (GNNs) are a class of neural networks suitable for learning on graph-structured data. Their application to spatial data is a natural extension, however its relatively unclear which message-passing operations, architectural configurations, and graph representation is best suited for classifying changes to objects in electronic navigational charts (ENCs)--geospatial vector datasets used for marine navigation. Maintaining these datasets is a challenge, and categorizing changes to objects in the ENC based on their significance to navigational safety is of particular importance. Here, we propose to represent these vector navigation datasets as a graph structure where the spatial objects serve as nodes and their spatial and semantic relationships form edges. We encode both the old ENC dataset and new ENC dataset into a pair of graphs and frame the task as a graph-pair classification problem. Building on this representation, we investigate the use of GNN architectures to classify whether the encoded graphs constitutes a critical or non-critical risk to navigational safety. We train and evaluate several GNN architectures and model configurations on ENC changes reviewed by maritime experts. Our results demonstrate that graph-based representations improve the classification of ENC updates, providing a scalable approach for automating or improving ENC maintenance workflows.

57. [Verify Before You Distill: Prompt-Level Teacher Gating for On-Policy Distillation](https://arxiv.org/abs/2609.02998)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02998v1 Announce Type: new Abstract: On-policy distillation (OPD) accelerates post-training by providing dense token-level supervision from a frozen teacher on the student's own rollouts. Vanilla OPD applies this supervision uniformly across prompts, without checking whether the teacher is reliable for each prompt. Because reverse KL is mode-seeking, a confidently wrong teacher can induce a strong yet misleading update. Distributional proxies, such as entropy or teacher-student likelihood agreement, measure uncertainty or agreement but do not directly verify outcome correctness. We introduce Teacher-Gated On-Policy Distillation (TGOPD), built on the principle that teacher reliability should be verified at the prompt level before dense supervision is admitted. TGOPD estimates reliability from a small set of verifier-scored teacher probes and routes each prompt exclusively to dense OPD when the reliability check passes or to verifier-grounded GRPO otherwise. Across 4B and 35B students in mathematics, code, and instruction following, TGOPD outperforms Vanilla OPD in all six single-domain settings and achieves higher seven-benchmark averages at both scales under multi-domain training. By using otherwise-idle teacher capacity for reliability estimation, TGOPD also reduces teacher-side compute waste in asynchronous OPD, increasing teacher-node GPU utilization from 9.8% to 78.9% in the measured 4B single-domain run.

58. [BU-MBAR: A hybrid solution strategy for the MBAR equations](https://arxiv.org/abs/2609.03541)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03541v1 Announce Type: new Abstract: The multi-state Bennett acceptance ratio (MBAR) equations combine the data collected under different thermodynamic conditions in a statistically optimal way. Due to their practical importance, several solution strategies have been devised to optimize the convergence of the resulting set of coupled equations. However, even with graphics processing unit (GPU) acceleration, the convergence of these methods can still be either unstable or slow. We propose a new approach where the equations are interpreted as the limit of infinitesimal bin width of the respective weighted histogram analysis method (WHAM). In the proposed binned-to-unbinned MBAR (BU-MBAR) method, the bin width is adapted dynamically to ensure a stable and efficient convergence to the asymptotic solution.

59. [Computing high-order mixed derivatives in physics-informed neural networks using multi-index Bell polynomials](https://arxiv.org/abs/2609.03768)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03768v1 Announce Type: new Abstract: Physics-informed neural networks for high-order partial differential equations require mixed input derivatives and their gradients with respect to the network parameters. Standard implementations obtain an order-$K$ derivative by repeated automatic differentiation. We instead organize the forward recursion of the multivariate Fa\`a di Bruno formula and its explicit backpropagation over a prescribed downward-closed set of multi-indices, with the Bell-polynomial convolutions tabulated once. The forward pass carries only the derivatives the differential operator requires. The backward pass propagates gradients from losses formed from any subset of them, including nonlinear products and coupled fields. Both recursions are exact up to roundoff and avoid nested computational graphs. An independent Taylor-jet implementation, symbolic checks of the test problems, and finite differences verify derivatives and loss gradients through order seven. On one CPU core, the method evaluates 330 mixed derivatives with respect to four inputs through order seven and the corresponding loss gradient without the memory failures observed for several nested implementations. Numerical tests include third-, fifth-, and seventh-order dispersive equations, incompressible flow, and a manufactured five-field electrohydrodynamic system. The seventh-order Zakharov-Kuznetsov test in $3+1$ dimensions has a relative solution error of $6\times10^{-4}$.

60. [Stochastic Operator Inference for reduced-order modeling of capillary wave turbulence using experimental measurements](https://arxiv.org/abs/2609.04008)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04008v1 Announce Type: new Abstract: Modeling complex physical phenomena directly from experimental data poses fundamental challenges: measurement devices introduce noise and biases into the data, the governing equations are often unknown or intractable, and the dynamics observed experimentally may exhibit stochastic behavior. In this paper, we consider capillary wave turbulence---an example of nonlinear wave interactions at a microfluidic interface---measured by ultra-high-speed digital holographic microscopy. With the goal to learn an efficient model directly from these data, we adapt a stochastic extension of Operator Inference to learn low-dimensional stochastic differential equation representations of the microscale wave dynamics from experimental measurements. Each experiment is repeated 16 times, and 10 different conditions are created by changing the nondimensional acoustic capillary number through an excitation device. In addition, we propose a new strategy to select the reduced-order model dimension, based on both mean and covariance errors. We further add Tikhonov regularization to the stochastic Operator Inference framework and show that, beyond its conventional role as a numerical stabilization technique in deterministic settings, it has a physically meaningful interpretation as controlling the spectral content of the learned stochastic dynamics. We demonstrate that the resulting stochastic reduced-order models faithfully capture salient physical features of capillary wave turbulence across a range of experimental conditions.

61. [Spectral and Eigenvector Crossovers in Random Mixed Graphs](https://arxiv.org/abs/2609.04152)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04152v1 Announce Type: new Abstract: We study the spectral and eigenvector properties of random mixed graphs, combining undirected and directed interactions, using random matrix theory (RMT). The network is represented by a Hermitian adjacency matrix, with undirected links as real entries and directed links as purely imaginary conjugate pairs, ensuring a real spectrum. Network density is controlled by the connection probability, while directionality sets the fraction of directed edges. We focus on the GOE-to-GUE crossover: at fixed connectivity, increasing directionality breaks time-reversal symmetry and drives spectral statistics from GOE to GUE. We show that this transition requires sufficient connectivity. In sparse networks, weak level repulsion produces Poisson statistics regardless of directionality. At fixed directionality, increasing connectivity drives a Poisson-to-GUE crossover; only above a sparsity threshold does the directionality-induced GOE-to-GUE transition emerge. In the dense regime, where the spectral density follows the Wigner semicircle law, the crossover is characterized using spacing distributions, spacing ratios, and spectral rigidity. In sparse networks, where unfolding is unreliable, spacing-ratio statistics provide an unfolding-free characterization. Eigenvector structure is examined through multifractal dimensions and component distributions, while Kullback--Leibler divergence confirms the robustness of the transitions. Applied to S&P 500 mixed graphs, the framework reveals a GOE-to-GUE crossover across four major market crashes. Denser crisis periods show sharper crossovers than sparser recovery periods. The results provide a unified picture of how connectivity and symmetry breaking govern spectral and eigenvector universality, while providing a transparent probe of changing financial-market organization.

62. [Decoherence-controlled collective criticality in a two-dimensional quantum Stag Hunt](https://arxiv.org/abs/2609.02957)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02957v1 Announce Type: cross Abstract: Physical decoherence can preserve the microscopic strategic neutrality condition of a quantum game while changing the thermodynamic regime of the corresponding interacting population. We demonstrate this for an Eisert--Wilkens--Lewenstein (\textit{EWL}) Stag Hunt embedded as independent nearest neighbor encounters on a square lattice. For the restricted strategies $\mathsf{Q}=i\mathbb{Z}$ and $\mathsf{D}=i\mathbb{Y}$, noisy two-player payoff matrices are determined for phase damping, depolarization, and amplitude damping and mapped exactly to channel dependent Ising parameters $\mathfrak{J}(\Gamma,p)$ and $\mathfrak{H}(\Gamma,p)$. Phase damping and depolarization show the clearest contrast: they share the same microscopic neutrality branch $\mathfrak{H}=0$, while only depolarization suppresses the interaction as $(1-p)^2$. At $\beta=1$, this produces an exact depolarization-driven square-lattice critical point at $p_{*}\approx 0.233460\ldots$, whereas phase damping remains in the ordered coexistence regime along the same neutrality branch. Monte Carlo finite size scaling is consistent with two-dimensional Ising criticality and distinguishes field driven coexistence below $p_{*}$ from a smooth crossover above it. Amplitude damping additionally reveals a strong dependence on channel placement: the post-strategy neutrality branch reaches $\Gamma=0$ at $p=1/3$ and then disappears. Resource negativity further shows that microscopic two-qubit entanglement and collective interaction strength are distinct quantities. The resulting extended lattice remains an ordinary classical Ising system.

63. [A discontinuous Petrov-Galerkin finite-element framework for the simulation of microwave-heated flows](https://arxiv.org/abs/2609.03155)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 04 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.03155v1 Announce Type: cross Abstract: We present a high-order multiphysics solver for the simulation of microwave-heated flows. The solver couples a discontinuous Petrov-Galerkin (DPG) finite element method for the time-harmonic Maxwell equations with continuous Galerkin finite element methods for the heat equation and the incompressible Navier-Stokes equations. We validate the electromagnetic solver against multiple benchmark problems: wave propagation in a rectangular waveguide, a cavity problem with a singular solution, and a microwave-heated obstacle problem, comparing our results against numerical and experimental data from the literature. The results confirm the validity of the implementation and demonstrate its ability to perform adaptive mesh refinement using the DPG method's built-in error estimator. The final part of the study showcases the capabilities of the multiphysics framework through simulations of microwave-heated flow around obstacles with singular geometric features. These results highlight the potential of the proposed framework for the simulation and optimization of microwave-assisted chemical processes. Finally, the developed high-order multiphysics solver has a low memory footprint, since the electromagnetic solver relies on a Conjugate Gradient (CG) iterative solver and the fluid solver is implemented in a matrix-free fashion, making the overall approach scalable and well-suited for large-scale parallel simulations.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-04T06:42:27Z; Popularity: 737 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [Show HN: Decispher – persistent engineering context and memory for coding agents](https://news.ycombinator.com/item?id=49509142)
   - Source: Hacker News; Group: Tech community; Score: 2.25; Date: 2026-08-31T12:53:52Z; Popularity: 5 points, 0 comments
   - Summary: HN discussion: 5 points, 0 comments.

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.20; Date: 2026-09-04T14:09:52Z; Popularity: 204 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-03T04:26:07Z; Popularity: 119 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Structure and Implementation of New Practical English Textbooks Driven by Artificial Intelligence

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.02981

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
