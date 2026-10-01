# Daily signal sidecar - 2026-10-01

## Selected Signal

- Title: MoFlow: Multi-Objective Agentic Workflow Generation
- URL: https://arxiv.org/abs/2609.38294
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: MoFlow: Multi-Objective Agentic Workflow Generation
- Primary source: https://arxiv.org/abs/2609.38294
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

Total candidates reviewed after duplicate-source filtering: 66

1. [MoFlow: Multi-Objective Agentic Workflow Generation](https://arxiv.org/abs/2609.38294)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38294v1 Announce Type: new Abstract: We study the generation of agentic workflows that jointly optimize multiple objectives, such as accuracy, cost, latency, robustness, and consistency. Existing methods for workflow generation typically optimize accuracy alone or a weighted sum of objectives, so each trained generator commits to one fixed trade-off and must be retrained from scratch when preferences change. To alleviate this, we propose MoFlow, which generates workflows optimized across varied preferences. Specifically, MoFlow formulates workflow generation as a multi-objective Markov decision process and solves it by leveraging Convex-Hull Monte Carlo Tree Search with optimistic set-valued backups, where every node stores a set of reachable trade-offs rather than one weighted score. A single search thus approximately covers the Pareto front, from which MoFlow can return a workflow for any preference by lookup without retraining. We evaluate MoFlow against six strong baselines on six benchmarks spanning mathematics, code, and question answering. Since the baselines are single-scalar optimizers by design, an apples-to-apples comparison is difficult. We instead adopt an evaluation setup that favors the baselines, in that they are rerun for each testing preference, which MoFlow never sees. Even under this stringent setup, MoFlow achieves the highest average hypervolume.

2. [Self-Evolving Harness on Multiple Tasks with the Agent as Its Own Optimizer](https://arxiv.org/abs/2609.38372)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38372v1 Announce Type: new Abstract: A harness is the code around a language-model agent that organizes prompts, calls tools, manages context, and controls execution. As models grow stronger, recent work has begun to let agents improve their own harnesses, a line of work known as self-evolving harnesses. In most existing methods, a separate proposer running on a human-designed harness modifies the solver's harness, and a separate harness is evolved for each benchmark. Real-world tasks come from many domains, so both the evolution and the evaluation of a harness should cover a diverse range of tasks. We propose a framework close to recursive self-improvement: the same frozen model, on the same version of the harness, first solves tasks as the solver and then, as the proposer, reads the complete run records and directly edits the harness that runs it. Each evolution batch draws tasks from five benchmarks in different domains. To measure generalization, training and held-out tasks are strictly separated, and we additionally evaluate on five out-of-distribution benchmarks never used during evolution. We frame the evolution process as deep-learning training with two stages, multi-task pretraining and continual training. Starting from a 49-line seed harness, the harness obtained at the end of the first stage improves the average score by 4.48 points on the in-distribution benchmarks and by 12.64 points on the out-of-distribution benchmarks, surpassing Codex on the former and matching it on the latter. In the second stage, continued evolution on Claw-Eval, one of the out-of-distribution benchmarks, further raises the score on that benchmark from 66.17 to 68.06, exceeding Codex. We also provide an in-depth analysis of the mechanisms that emerged during evolution, including output truncation, history compaction, and independent review.

3. [Disrupting a coordinated model-distillation campaign](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 30 Sep 2026 10:30:00 GMT
   - Summary: Learn how OpenAI disrupted a campaign to extract protected model reasoning and is strengthening defenses against adversarial distillation.

4. [Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning](https://huggingface.co/blog/open-tts-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 GMT

5. [CARAT: Do Materials LLMs Reason or Recite?](https://arxiv.org/abs/2609.38340)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38340v1 Announce Type: new Abstract: When a materials LLM answers a question about crystal structure, does it reason from the structure or copy an answer already printed in its input? Accuracy cannot tell: a structural description often prints the very field it is scored against. CARAT holds question and gold answer fixed across eight matched views, names each structural relation separately in GraphSpace, and adds matched fine-tuning, answer masking, evidence injection, paired inference, and a rule that can withhold claims. First, on the benchmark's hardest families the grounded view is worth 17.3 points over formula inputs. Second, we turn that scrutiny on ourselves. GraphSpace beats a plain periodic graph by 19.3 points, but that margin is two effects at once: where the plain rendering carries everything the question needs it is 1.96 points, and where it omits those fields entirely, 46.7 points. The headline mostly measures what the baseline lacked, not how evidence is presented. Third, we attack our own benchmark. A rule that skips the link and reads the list directly answers four of seven hardened families, so we rebuilt it until eleven such shortcuts sat near chance. The frozen model quotes that link yet answers the same when we redirect it, on 95.6% of paired cases: it repeats the relation without using it. After matched supervision it reaches 99.8%, and deleting the link drops it to 23.4%, below the 27.0% the best shortcut reaches: both steps are learnable.

6. [Examining Variation in How Guided AI Tutors Resolve Student Impasses](https://arxiv.org/abs/2609.38346)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38346v1 Announce Type: new Abstract: When a student is stuck, a tutor faces the assistance dilemma: help given too early can hinder productive struggle, while help withheld too long leaves the student in a frustrating, persistent impasse (i.e., wheel spinning). Generative AI tutors increasingly use guardrails restricting answer-giving, yet little is known about how such tutors behave once an impasse persists. We analyze 20,462 student turns from 1,260 authentic sessions with a guided LLM chemistry tutor, identifying 6,630 impasse turns of three major types: conceptual errors, expressed uncertainty, or help-seeking. We then used these impasses to simulate three tutoring conditions to study variation in AI tutor guidance through impasses: baseline, no-direct-answer, and guided tutor. For a sample of 150 impasses, prompt specificity changed pedagogy: a baseline tutor provided the answer directly in 50.7% of responses, a no-direct-answer tutor asked a follow-up question every time, and the guided tutor responded in a wide variety of ways depending on the context. We then analyzed impasse trajectories in authentic interactions, finding that each additional impasse turn lowered the odds of next-turn recovery by 12.7% (AOR = 0.873, p < .001), and early dropouts were caught in recursive concept elicitation before reaching execution. The benefit of questioning decayed as impasses persisted (scripted question x depth AOR = 0.78; follow-up x depth AOR = 0.83), whereas addressing the student's error grew more beneficial (AOR = 1.14); after a failed scripted question, repeating it was followed by recovery in 28.1% of cases, compared with 39.8% when the tutor addressed the error instead. For learning analytics, these findings identify impasse depth and type as observable, turn-level dialogue signals that analytics can use to trigger graduated, state-sensitive assistance in real time.

7. [Beyond Mode Collapse: Generating Diverse Synthetic Expert Conversations via Generative Flow Networks](https://arxiv.org/abs/2609.38359)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38359v1 Announce Type: new Abstract: High quality synthetic data is central to post training LLMs for adaptive AI applications that represent the diverse expert strategies and decisions in conversations. Prompting LLMs directly or conditioning them on end use scenarios yields low diversity data that collapses onto dominant modes. We propose a method to generate diverse high quality synthetic data using Generative Flow Networks (GFlowNets). We show that training GFlowNets to generate latent conversation structure using a Gaussian mixture density over key interaction features (e.g., confusion episode dynamics, scaffolding directive balance) enables sampling expert strategies in proportion to their prevalence in the training data. Across two structurally distinct domains, tutoring and emotional support dialogues, our GFlow based synthetic data generation approach offers a better balance of fidelity, mode coverage and authenticity than reinforcement-learning and end to end LLM baselines, without copying training data. Evaluated on three downstream outcome prediction tasks, classifiers trained on synthetic GFlowNet generated conversations provide a stronger training signal than competitive synthesis baselines.

8. [Aligned Data Can Induce Misalignment via Context Confusion](https://arxiv.org/abs/2609.38379)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38379v1 Announce Type: new Abstract: Large language models (LLMs) are frequently updated for various use cases, where filtering out misaligned training samples is a common practice for preventing post-update misalignment. However, alignment is inherently context-dependent: a recommendation that is aligned in one context may be inappropriate in another. For example, in response to the question "What should a researcher do with the research data?", recommending that the researcher preserve the data for reproducibility is aligned. In contrast, recommending data saving in response to "What should a mobile-app developer do with users' sensitive data?" may be inappropriate from a privacy perspective. Starting from this observation, we identify a post-training phenomenon where aligned training induces misaligned behavior in other contexts. We call this phenomenon **context confusion**. We demonstrate context confusion across three domains: (1) Gender Equality, (2) Privacy, and (3) Physical Safety. We further show that context confusion causes narrow misalignment, in contrast to emergent misalignment, and is not effectively reduced by injecting general alignment data, but can be substantially reduced by including targeted alignment data for the misaligned domain or providing in-context learning examples during inference. Lastly, we provide a mechanistic explanation of *context confusion*. We observe that queries from different domains can undergo similar representational shifts during the fine-tuning. Consequently, a query from a different domain may activate the same behavioral feature learned during fine-tuning, which causes the behavior to transfer to a context where it is misaligned. Based on our findings, we argue that it is difficult to predict the alignment state of a model after training by inspecting the training data alone, which highlights the importance of comprehensive post-training alignment evaluations.

9. [EHR2Trace: Auditable EHR Data Infrastructure for Patient World Models and Clinical Agents](https://arxiv.org/abs/2609.38193)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38193v1 Announce Type: new Abstract: Patient world models and clinical agents aim to predict changes in patients' health and support clinical work. Developing these systems requires reliable histories of patient conditions, treatments, and the information available at each decision. Electronic health records (EHRs) contain these histories, but differences in how events are recorded make them difficult to use consistently. We present EHR2Trace, a system that converts EHRs from different sources into traceable patient events for model training and evaluation. It links events to source records, separates event time from information availability, and distinguishes medication orders, dispensing, and administration. A shared event representation supports both OMOP and MEDS exports, with automated validation and reproducible builds. Across three clinical datasets, EHR2Trace converted 846.4 million events, with every applicable check passing except one unit-consistency check on MIMIC-IV, and detected all 28 injected faults. A controlled prediction experiment showed that assigning later diagnoses to admission time substantially inflated measured performance, and that a model trained on such data lost accuracy when deployed on histories filtered by availability. EHR2Trace provides a reusable data foundation for patient world models and clinical agents, helping researchers inspect patient histories, check conversion decisions, and evaluate models with explicit data rules.

10. [The eternal complement](https://openai.com/index/the-eternal-complement)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 01 Oct 2026 17:00:00 GMT
   - Summary: Advanced AI may matter most for the routine work behind breakthrough ideas. Explore why execution could shape the next economy and the pace of progress.

11. [How Albertsons Companies is reimagining retail from the inside out](https://openai.com/index/albertsons-reimagining-retail)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 01 Oct 2026 16:00:00 GMT
   - Summary: Albertsons Cos. is using ChatGPT Enterprise and the OpenAI API to help teams work faster and make grocery shopping easier for millions of customers.

12. [Helping small businesses put AI to work](https://openai.com/index/helping-small-businesses-put-ai-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 30 Sep 2026 10:00:00 GMT
   - Summary: OpenAI is partnering with America’s SBDC to expand hands-on AI training and local support for small businesses, alongside a new report on how small teams are using AI.

13. [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 10:00:00 GMT
   - Summary: Explore more than 20 announcements from OpenAI DevDay 2026, including GPT-6 Astra, ChatGPT, Codex, APIs, security, and new tools for builders.

14. [Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 10:00:00 GMT
   - Summary: Meet GPT-6.1 Sol: near-Astra intelligence for coding, computer use, and professional work at one-fifth of Astra’s standard API input and output token prices.

15. [Introducing dots](https://openai.com/index/introducing-dots)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 GMT
   - Summary: Dots by OpenAI are proactive assistants that can keep working across complex projects and everyday tasks. Learn how dots help you stay in control while work moves forward.

16. [Towards safety cases for frontier AI training](https://openai.com/index/towards-safety-cases-for-frontier-ai-training)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 19:00:00 GMT
   - Summary: Our early guidelines for safety cases in frontier AI training cover technical safeguards, operational practices, and investigating misalignment incidents

17. [How we will do better for Australia](https://openai.com/index/how-we-will-do-better-for-australia)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 19:00:00 GMT
   - Summary: OpenAI apologises for incidents involving Australian government websites and outlines stronger safeguards and support to strengthen Australia’s cyber defences.

18. [The Lenfest Institute grows landmark program with expanded OpenAI support](https://openai.com/index/lenfest-ai-collaborative-expansion)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 07:00:00 GMT
   - Summary: OpenAI is expanding the Lenfest AI Collaborative and Fellowship Program with $5 million in funding and up to $5 million in software credits and engineering support.

19. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

20. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

21. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

22. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

23. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [Introducing Olmo-core 3: Open, scalable training infrastructure for large MoEs](https://huggingface.co/blog/allenai/olmocore3)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 01 Oct 2026 15:01:43 GMT

26. [NVIDIA Kumo Tabular Sets a New Accuracy-Efficiency Frontier for Tabular Prediction](https://huggingface.co/blog/nvidia/kumo-tabular)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 15:30:38 GMT

27. [Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 13:07:00 GMT

28. [Holo4: powering generalist computer-use agents](https://huggingface.co/blog/Hcompany/holo4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 09:44:05 GMT

29. [Accelerating vision-language models with LFM2.5-VL-DSpark](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 24 Sep 2026 14:08:57 GMT

30. [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

31. [Transformers now runs llama.cpp quants](https://huggingface.co/blog/transformers-llama-cpp-quants)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

32. [Jun Kim, oMLX creator and maintainer, joins Hugging Face to support the MLX community](https://huggingface.co/blog/omlx)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

33. [tokenizers v1: encode, decode and scaling, measured](https://huggingface.co/blog/tokenizers-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT

34. [Improving OCR Faithfulness via Gated and Attenuated On-Policy Distillation](https://arxiv.org/abs/2609.38282)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38282v1 Announce Type: new Abstract: Vision-language models may rewrite anomalous text in images into linguistically plausible expressions, compromising OCR transcription faithfulness. Sequence-level task rewards and local teacher guidance are complementary, but guidance from the same teacher may not remain equally effective as the student improves. Offline analysis shows that supervision from a fixed teacher becomes progressively less favorable as the student improves, both across training checkpoints and across response groups with different task rewards. Motivated by this observation, we introduce GAD-RL, which adaptively regulates teacher supervision during joint post-training according to the student's current task performance and local distributions. A frozen teacher conditions on reference transcriptions and student-generated prefixes. GAD-RL disables distillation for response groups containing an output with task reward at least 0.95 and continuously attenuates distillation strength as group-mean reward increases. It also weights forward KL by the student's probability of the teacher's Top-1 token, moderating local auxiliary updates when student support for that candidate is low. On Qwen3.5-2B, GAD-RL achieves 59.92% Micro Recall on CHAOS-Bench, surpassing GRPO and GRPO+OPD (fixed-weight) by 8.45 and 4.43 percentage points, respectively, while achieving an Overall score of 91.18 on OmniDocBench v1.6.

35. [AREX-2: Advancing Self-Improving Agents through Long-Horizon Reflective Tasks](https://arxiv.org/abs/2609.38288)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38288v1 Announce Type: new Abstract: We present AREX-2, an effort to advance the self-improving capability of LLM agents, which we define as the ability to iteratively refine a solution at test time. This ability rests on two complementary capabilities: reflection, which produces a solution better than the current one, and long-horizon execution, which keeps the iteration effective over many rounds. We hypothesize that both capabilities are domain-agnostic, and can therefore be learned in scenarios that are well suited for supervision. Accordingly, we synthesize long-horizon improvement trajectories from machine learning and algorithmic programming tasks, two domains that offer verifiable feedback and reward sustained iteration. Trained on this data, our agent, built on Qwen3.8-27B, achieves strong results on MLE-bench Lite (81.8) and Frontier-CS (70.7), transfers to deep research with 84.0 on BrowseComp, 52.6 on HLE, 92.2 on GAIA, and 93.8 on DeepSearchQA, and keeps improving as its budget of rounds grows. These results show that long-horizon reflective data is an effective route toward self-improving agents.

36. [AI Agents are Vulnerable to Radicalization](https://arxiv.org/abs/2609.38296)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38296v1 Announce Type: new Abstract: Large language models (LLMs) can influence people's beliefs, yet little is known about whether and how they can manipulate each other. To investigate this, we simulate conversations between two agents: a target LLM that role-plays a human persona based on demographic and psychological attributes, and an influencer LLM that aims to make the target's beliefs more extreme. We examine radicalization along two pathways: resonance, where the influencer reinforces a target's pre-existing belief, and persuasion, where the influencer promotes a belief the target initially considers unimportant. Across affective and behavioral metrics, we find that both mechanisms radicalize the target. However, resonance produces consistently stronger effects than persuasion. Different influence tactics, such as using sycophancy and unverified claims, produce different levels of radicalization, but not consistently across metrics. We further show that resonance propagates to related beliefs, suggesting interconnected belief structures within AI agents. These findings indicate that AI agents are susceptible to radicalization, particularly when messages align with their existing beliefs, raising concerns about the vulnerability of personalized AI agents and multi-agent AI ecosystems.

37. [Can an AI Agent Rediscover a Blaschke-Curve Invariant?](https://arxiv.org/abs/2609.38369)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38369v1 Announce Type: new Abstract: We study generalized Blaschke curves as a controlled environment for AI-assisted mathematical rediscovery. For one fixed degree-four Blaschke product, an agent receives numerical coordinates of the six pair-lines determined by each of 80 boundary configurations. The target theorem is withheld from the task instructions. The saved research log reports rejected geometric hypotheses and a homogeneous cubic fitted to polygon sides. Its frozen coefficients predict 480 lines from 80 unseen parameter values, with a recorded RMS scale-free residual of $8.88\times10^{-17}$. Discovery-set diagonals provide an out-of-fit consistency check, not a fully held-out test. A separate one-configuration run reports insufficient evidence for invariance. A post-review deterministic degree-search baseline also recovers the cubic, so the experiment does not establish an advantage over polynomial fitting. We present this single-instance case study as a protocol for separating conjecture, numerical validation, and proof, with explicit limitations concerning agent metadata, prior knowledge, and reproducibility.

38. [The Ganglion Network Model: Evolving Trapped Phases in Porous Media](https://arxiv.org/abs/2609.39041)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39041v1 Announce Type: new Abstract: Partially miscible ganglia trapped within porous media, spanning one or multiple pores and evolving through diffusive mass transfer, are common in subsurface (e.g., CO$_2$ and H$_2$ storage) and manufacturing (e.g., fuel cells) applications. We present the ganglion network model (GNM), a reduced-order method for simulating how a population of such ganglia evolves inside an arbitrary porous microstructure. GNM operates on a tree graph, the ganglion network, extracted from the pore-scale image of a given sample. Each point on the graph encodes a possible ganglion configuration in the void space, without any loss of geometric or topological complexity. The evolution of a population is modeled by representing each ganglion as a particle on the graph and tracking it according to a set of rules formulated herein. The rules capture capillary events such as pore invasion, retraction, snap-off, fragmentation, and merger. Unlike pore-network models, another graph-based modeling tool at the pore scale, GNM solves no system of equations and its cost scales with ganglion count, not domain size. We validate GNM against an image-based pore-network model in 2.5D and 3D domains with populations undergoing ripening, dissolution, and growth. We find good agreement in ganglion statistics, aggregate properties, and spatial configuration. We further argue that the ganglion network is the statistical space needed for extending kinetic theories of Ostwald ripening from single- to multi-pore ganglia, and provide an outline for how to do this. GNM opens the door to modeling other dynamics of trapped phases in porous media.

39. [MyTm: An Automated Melting Temperature Calculation Toolkit](https://arxiv.org/abs/2609.39686)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39686v1 Announce Type: new Abstract: Melting temperature calculation is one of the important topics in computational materials science. In high-throughput in silico screening and artificial intelligence assisted design of materials, it usually requires a rapid and autonomous assessment of the melting temperature of the target. Unfortunately, molecular dynamics (MD) simulations of the melting point require many cumbersome and manual operations, making large-scale calculation of the melting point challenging. In this work, we introduce MyTm, a toolkit that employs MD to automatically determine the melting point. The method is fully modularized, and by combining these modules, the program enables fully automated melting calculations by using commonly adopted approaches, including the direct-heating method, the void method, the modified void method, the solid-liquid coexistence method, and the Z method. Moreover, a machine learning (ML) method is proposed and employed to recognize and classify the solid like and liquid like atoms, which effectively resolve the low accuracy issue in conventional classification approaches, thus making the automated high throughput pipeline of melting-point calculation possible. The robustness and efficacy of MyTm have been demonstrated by several well studied systems.

40. [SHIFT-Truck: A High-Fidelity Aerodynamics Dataset and Benchmark for Pickup Trucks](https://arxiv.org/abs/2609.38638)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38638v1 Announce Type: cross Abstract: Pickup trucks account for 14% of new light-duty vehicles produced in the United States, yet are among the least aerodynamic. Their open cargo bed adds a flow absent from existing automotive aerodynamics datasets such as DrivAerML and SHIFT-SUV: the shear layer leaving the cab roof passes over a recirculating bed flow before separating again at the tailgate. The resulting drag lowers fuel efficiency, raises emissions and limits the range of electric trucks. Scale-resolved Computational Fluid Dynamics (CFD) is too costly for broad design exploration; neural surrogates can predict flow features at a fraction of that cost, provided they are trained on large-scale, high-fidelity, domain-specific data. We introduce SHIFT-Truck, the first such dataset for pickup trucks. It comprises 1,000 Spalart-Allmaras delayed detached-eddy simulations (SA-DDES) of a reference pickup geometry morphed across 17 shape parameters. Each case is run on a mesh of about 100 million cells at a Reynolds number of $1.4 \times 10^7$ and released with time-averaged surface pressure, wall shear stress, volumetric pressure and velocity. The setup is verified by grid refinement and repeated runs, and checked against wind-tunnel measurements. We define geometry-grouped splits and benchmark four neural surrogates, DoMINO, GeoTransolver, AB-UPT and SMART, on surface and volume tracks. SHIFT-Truck also introduces controlled distribution shifts in the operating point, the input surface discretization and the vehicle archetype. Models with strong in-distribution performance can degrade substantially under these shifts: operating-condition changes expose failures to infer speed dependence, while tessellation and cross-vehicle shifts reveal markedly different robustness across architectures. SHIFT-Truck is thus a benchmark not only for surrogate accuracy but also for generalization across physical and numerical distributions.

41. [Sign problem and criticality in world-line quantum Monte Carlo methods](https://arxiv.org/abs/2609.38740)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38740v1 Announce Type: cross Abstract: Discussions of the sign problem usually focus on its role as the primary limitation of the applicability of quantum Monte Carlo methods for reliably solving quantum many-body models. Its behavior as a function of spatial lattice size, doping, temperature, and interaction strengths has been carefully characterized within the determinant quantum Monte Carlo algorithm. Here, we consider the much less well-explored question of the temperature- and size-dependence of the sign problem in the world-line quantum Monte Carlo method. We review how, in this algorithm, even sampling the partition function of free fermions yields a sign problem, which we connect to non-analytic behavior in the corresponding reference model, hard-core bosons on a lattice. The latter exhibits a finite-temperature Kosterlitz-Thouless phase transition in 2D, and we show how this non-analytic behavior is imprinted on the average sign of the weights for the corresponding free fermion 2D tight-binding model. Our results thus show how phase-transition information can remain encoded in the sign problem even after direct sign sampling becomes impractical.

42. [Structure-preserving Fourier Neural Operators for Long-time Cahn-Hilliard Dynamics under Coarse Temporal Supervision](https://arxiv.org/abs/2609.39053)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39053v1 Announce Type: cross Abstract: Accurate long-time prediction of Cahn-Hilliard dynamics, particularly in the late-stage coarsening regime, is computationally demanding because it requires simulations over extended physical time. Various machine learning approaches have been developed to speed up the simulations through efficient surrogate evaluations. While the learned map can be accurate over a single learned interval, small prediction error will accumulate when the map is repeatedly applied in a long-time prediction, leading to large numerical errors. In this work, we identify the structure function for the coarsening dynamics of the Cahn-Hilliard equation and propose a two-stage structure-preserving Fourier Neural Operator (FNO) learning framework. Stage~I introduces a bound-conforming FNO (bcFNO) with a soft, magnitude-dependent amplitude penalty. Stage~II retains the bound-conforming objective and supplements it with structure-function regularization, yielding a structure-preserving FNO (spFNO) that corrects late-stage coarsening statistics. Numerical experiments on the various spatial resolutions and reference-solver time steps suggest that the bcFNO stabilizes the long-time prediction by suppressing large amplitude excursions, without changing the low online cost of the FNO. Furthermore, the structure-function term consistently reduces discrepancies in the normalized structure function and provides further correction in associated late-stage coarsening quantities, including the $L^3(t)$ growth trend and the scaling collapse. These results indicate that our multi-stage implementation of physical principles in operator learning could be applied to other multiscale systems with statistical scaling, such as the functionalized Cahn--Hilliard equations and turbulence, provided that the state constraints and statistical observables are adapted to the governing dynamics.

43. [An electromechanically coupled multiphase-field model with generalized kinetic relations for ferroelectrics](https://arxiv.org/abs/2609.39671)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39671v1 Announce Type: cross Abstract: Classical phase-field models typically use the Allen--Cahn evolution law to model interface motion as a consequence of energy-gradient descent. This implies a linear kinetic relation between the velocity of an interface (e.g., a domain wall in a ferroelectric) and its driving force. When nonlinear kinetic relations are to be modeled, as commonly found in ferroelectric ceramics, an alternative evolution law and hence an alternative model is needed. Here, we propose an electromechanically (stress-driven) coupled multiphase-field framework with a general kinetic formulation, which integrates a prescribed kinetic relation directly into the evolution law. We show that this model correctly evolves domain walls with the assigned nonlinear kinetics, e.g., of mixed exponential-power law type, following the so-called Merz--Stadler law. The multiphase formulation further enables distinct kinetic relations and interfacial energies to be assigned to different order-parameter pairs, which reflects the distinguishable properties of the different types of ferroelectric domain walls. The proposed framework is broadly applicable for simulating kinetic relations in materials with applications beyond ferroelectrics.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.95; Date: 2026-10-01T12:33:23Z; Popularity: 1,949 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-26T21:01:31Z; Popularity: 488 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-10-01T02:15:07Z; Popularity: 369 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-30T02:05:05Z; Popularity: 247 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-10-01T18:18:52Z; Popularity: 13 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

49. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-28T14:58:43Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

50. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

51. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

52. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

53. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

54. [Travel Time Prediction in Supply Chain Management Using Machine Learning](https://arxiv.org/abs/2609.38190)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38190v1 Announce Type: new Abstract: The purpose of this research is to find data and methods using machine learning and deep learning to correctly predict the estimated travel time for transportation and logistics in a supply chain system. The supply chain ecosystem is very complex and heavily relies on the transportation and logistics of raw materials and finished goods. Accurate travel time estimation is critical because it helps supply chain members to improve logistics consistency and performance. This helps in planning, demand forecasting, lead time management and assembly planning. The logistics on the delivery side of the customer also plays a crucial role in customer satisfaction and voice of customer. With the collection of huge historical data and using novel techniques, the research builds an accurate model to predict travel time of inventory.

55. [DualCast: A Dual-Path Language Model for Bimodal Financial Time-Series Forecasting](https://arxiv.org/abs/2609.38197)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38197v1 Announce Type: new Abstract: Financial time-series forecasting must capture price dynamics across heterogeneous assets while incorporating news available at prediction time. We introduce DualCast, a dual-path framework that extends a frozen language model with a discrete financial vocabulary. Each log-return patch is represented by a learned summary token and three residual shape tokens, preserving local drift and volatility while allowing shape patterns to be shared across assets. To improve codebook utilization, we develop adaptive frequency-equalizing residual vector quantization, which rebalances overloaded codewords without compromising reconstruction accuracy. The fast path trains only the new financial-token embeddings and output heads on a frozen Qwen3-8B backbone. A toggleable LoRA adapter enables a slow path that conditions on the fast forecast and news available at the forecast origin to produce a revised prediction. The reviser is initialized by supervised fine-tuning and further optimized with a return-space group relative policy optimization objective that rewards improvements over the fast forecast. In zero-shot evaluations covering equities and energy prices at five-minute, daily, and weekly resolutions, the slow path achieves the lowest mean absolute percentage error among the compared methods in 8 of 12 dataset-horizon settings, including every longest-horizon setting. News ablations indicate additional gains in most tested settings, although their magnitude varies across markets. DualCast thus combines a fast numerical forecaster with an optional text-conditioned revision mechanism.

56. [Hermes: Learning Contextual Reasoning Unlocks Test-Time Scaling](https://arxiv.org/abs/2609.38332)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38332v1 Announce Type: new Abstract: Test-time scaling improves model performance by allocating additional compute during inference. Using this compute effectively across multiple context windows requires deciding how to allocate fresh contexts and what information to carry between them. We call a model's ability to make these decisions contextual reasoning. Existing approaches largely prescribe these decisions through their harness; we instead shift them to the model. We introduce 1) Hermes, a family of simple, configurable harnesses that progressively varies model control over context allocation and reuse, and 2) Hermes-Learn, a two-stage framework for learning these capabilities. We find that capable models can exploit this flexibility to scale with additional inference-time compute, while smaller open-source models initially struggle to do so. Training with Hermes-Learn closes this gap, inducing adaptive contextual reasoning strategies that vary with both the problem and the progress of reasoning. These gains generalize across benchmarks and models, extrapolate beyond the inference-time compute seen during training, and transfer to complementary test-time scaling methods beyond Hermes.

57. [Activation-Conditioned Self-Distillation](https://arxiv.org/abs/2609.38342)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.38342v1 Announce Type: new Abstract: On-policy self-distillation uses a model as its own teacher to provide dense supervision for reasoning, often through reference-solution conditioning. Providing privileged information does not by itself ensure effective token-level supervision throughout long responses. We introduce Activation-Conditioned Self-Distillation (ACSD), which extracts a steering vector by contrasting activations of self-generated trajectories that reach verified correct answers within a generation budget with those of all remaining trajectories. A frozen copy of the base model applies this vector at each prediction position, and the student learns from its next-token distributions on student-generated prefixes. Outcome verification is used for direction construction and calibration; distillation requires neither problem-specific reference text nor teacher parameter updates. The distilled student is used alone at inference. On each of five models, ACSD achieves the highest mean accuracy over four mathematical benchmarks among the evaluated methods. On DeepSeek-R1-0528-Qwen3-8B, mean mathematical accuracy reaches 71.9\% and LiveCodeBench v6 pass@12 reaches 70.9\%, compared with 69.0\% and 66.3\% for the reference-conditioned OPSD baseline. Contrasts among correct trajectories also support distillation, and extracted directions can be reused across mathematical training datasets. On fixed student trajectories, ACSD maintains more stable late-position logit-update magnitudes than OPSD.

58. [A Variance-Decomposition Formula for Direct and Adjoint Monte Carlo Particle Transport Problems](https://arxiv.org/abs/2609.39210)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39210v1 Announce Type: new Abstract: In fixed-source Monte Carlo particle-transport problems, obtaining an acceptable variance on the sought response is of paramount importance. Currently, the only rigorous tool to analyze the variance of such games is the framework of the moment equations, which is unfortunately unwieldy to use in practice. In this paper, we establish a formula that enables expressing the variance of a Monte Carlo simulation as a sum of 'variance contributions' collected throughout the underlying particletransport process. This formula applies to both direct and adjoint games, and provides a new tool to pinpoint the variance-inducing mechanisms in Monte Carlo simulations, understand common variance-reduction techniques, and even conceive new ones. We showcase the use of the variance-decomposition formula on several applications. In particular, we revisit zero-variance schemes and analyze existing variance-reduction techniques, underlining their strengths and weaknesses. A few relevant numerical examples substantiate our theoretical findings.

59. [Computing electron overlap integrals for Gausslet orbitals on cubic lattices](https://arxiv.org/abs/2609.39176)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39176v1 Announce Type: cross Abstract: Gausslet orbitals on a cubic lattice, introduced in [Steven R. White, J. Chem. Phys. 147, 244102 (2017)], represent a localized, smooth, and systematically refineable basis set featuring a "diagonal" approximability of the electron repulsion integral tensor. The present work develops efficient algorithms for evaluating overlap integrals required for electronic-structure simulations using these Gausslets, specifically the kinetic, nuclear, and electron repulsion integrals (both with and without the diagonal approximation). Computational efficiency improvements rest on the exploitation of translation, permutation, and octahedral symmetries, a reordering and precomputation of nested sums, as well as an early truncation of small coefficients. Our algorithms reduce the number of electron repulsion integrals on a $5 \times 5 \times 5$ grid from $125^4 = 244140625$ to $324275$ due to symmetries, and achieve a wall-clock runtime for evaluating the remaining integrals with a truncation tolerance of $10^{-5}$ in under 2 seconds on a laptop computer. We apply the developed methodology to compute the ground state of the hydrogen atom and molecule as a demonstration.

60. [Elasticity of polycrystalline davemaoite constrains its grain size in the lower mantle](https://arxiv.org/abs/2609.39423)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39423v1 Announce Type: cross Abstract: Earth's lower mantle hosts large low shear-velocity provinces (LLSVPs) beneath Africa and the Pacific, but their origin remains debated. Davemaoite, a major lower-mantle mineral, has been proposed as a contributor to these anomalies; however, its experimentally measured shear modulus is approximately 30% lower than first-principles predictions, a longstanding discrepancy between theory and experiment. Here, using million-atom machine-learning molecular dynamics simulations, we show that nanoscale grain-boundary disorder, invisible to conventional x-ray diffraction, can reconcile this gap. Introducing 5.8 vol% disordered regions reduces the shear and bulk moduli by 37% and 12%, respectively. This shear-selective softening can reproduce LLSVP-like seismic anomalies in basalt-rich assemblages, but only at disorder levels corresponding to grain sizes smaller than those expected in the lower mantle. Combining the disorder-elasticity relationship with seismic constraints, we derive a minimum davemaoite grain size of approximately 100 nm. This limit is consistent with mantle grain growth models and with attenuation-based evidence for coarse-grained LLSVPs.

61. [A macroscopic-shadow-corrected lattice Boltzmann method for fast, time-accurate simulation of low-Reynolds-number transient flows](https://arxiv.org/abs/2609.39474)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 01 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2609.39474v1 Announce Type: cross Abstract: Explicit lattice Boltzmann simulations of slow transient flows are constrained by the acoustic time step. Dual-time stepping can remove this restriction, but slow inner convergence has limited reported wall-clock gains to roughly four- to tenfold, without a mechanism that strengthens under refinement. We present the macroscopic-shadow-corrected lattice Boltzmann method (MSC-LBM), which applies defect correction to the unsplit kinetic residual. At each Fourier wavenumber, a Stokes-like system is solved exactly for the conserved residual moments while preserving the second-order backward-differentiation formula (BDF2) fixed point and temporal accuracy. Along the two-relaxation-time axis $\Lambda=1/4$, $\omega^+=\omega^-=1$ makes one collision eliminate all non-hydrodynamic perturbations; $\eta(\nu)=|6\nu-1|/(6\nu+1)$ vanishes at $\nu=1/6$, leaving hydrodynamic slow modes whose long-wave shadow is inverted by the corrector. In completed timing campaigns, MSC-LBM achieves 27.95- and 52.71-fold wall-clock speedups at $N=256$, $\mathrm{Re}=1$ under matched-accuracy and $1\%$ gates. The matched speedup rises monotonically to 122.02 at $N=1024$, with gains persisting across $\mathrm{Re}=10^{-4}$--$100$. The three-dimensional D3Q19 extension reaches 27.85 and 8.84 under the same gates at $N=128$, $\mathrm{Re}=1$. A bounce-back-consistent kinetic coarse solver with adaptive relinearisation extends MSC-LBM to fully enclosed cavities, yielding setup-excluding physical-march speedups of 26.86 at $\mathrm{Re}=10$ and 3.84 at $\mathrm{Re}=100$ for $N=128$. An exact per-wavenumber symbol inverse establishes the attainable off-design contraction envelope. The contraction, parameter-sweep, and timing results jointly delimit the demonstrated operating regime: low-to-moderate-Reynolds-number transients for which acoustic stepping need not dictate computational cost.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.76; Date: 2026-10-01T17:27:37Z; Popularity: 763 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [Launch HN: Vespper (YC F24) – SOTA Docx MCP](https://www.vespper.com/blog/launching-vespper-docx-mcp)
   - Source: Hacker News; Group: Tech community; Score: 2.40; Date: 2026-09-28T17:34:36Z; Popularity: 36 points, 18 comments
   - Summary: HN discussion: 36 points, 18 comments.

65. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.32; Date: 2026-10-01T17:37:14Z; Popularity: 1,320 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

66. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-29T10:00:25Z; Popularity: 235 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

MoFlow: Multi-Objective Agentic Workflow Generation

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.38294

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
