# Daily signal sidecar - 2026-11-14

## Selected Signal

- Title: WUBING2023/PaperSpine
- URL: https://github.com/WUBING2023/PaperSpine
- Source: GitHub repository search
- Score: 8.30

## Candidate Review

- Signal: WUBING2023/PaperSpine
- Primary source: https://github.com/WUBING2023/PaperSpine
- Discovery source: GitHub repository search
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

Total candidates reviewed after duplicate-source filtering: 48

1. [WUBING2023/PaperSpine](https://github.com/WUBING2023/PaperSpine)
   - Source: GitHub repository search; Group: Open source; Score: 8.30; Date: 2026-11-14T17:09:19Z; Popularity: 6,304 stars
   - Summary: PaperSpine V6 — open-source AI for Science. Run experiments, create scientific figures, and deliver editable manuscripts with your research agent.

2. [SynthCorp: A Platform for Creating Benchmarks for Data Agents](https://arxiv.org/abs/2611.14765)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14765v1 Announce Type: new Abstract: Current benchmarks for LLM-driven data agents saturate quickly and cannot target specific capabilities. We present SynthCorp, a platform that creates customizable data estates and benchmarks by simulating how business events produce and modify corporate data over time. Each data estate combines relational databases, a document store, and a data catalog, paired with evaluation tasks and executable gold programs. First, given a scenario and target complexity dimensions, SynthCorp synthesizes reusable event types and compiles each into a program over predefined simulation primitives. Second, SynthCorp schedules event instances on a virtual calendar, interleaving routine and disruption events so that tables, documents, and catalog entries remain consistent. Third, SynthCorp executes the calendar to materialize the data estate and records every operation in a simulation log. Fourth, SynthCorp generates analytical tasks and derives verified gold programs from the log. We use SynthCorp to generate initial evaluation benchmarks comprising seven data estates (up to 1K operational tables) and 256 tasks across five domains. The data estates pass deterministic pipeline checks (such as foreign-key violations, undeclared writes, recurrence violations, and database execution failures) with a near-zero error rate, introduce cross-asset complexities, and cover all requested dimensions. Evaluating three models across four data-context settings shows that the benchmarks separate data contexts and model tiers. Auditing candidate queries against causal provenance in the simulation log verifies gold programs without manual annotation, including on multi-event composite tasks that expose reasoning failures in state-of-the-art agents. We hope the community uses SynthCorp to generate more challenging and useful data estates and benchmarks that foster the development of enterprise data agents.

3. [When Is Proof-Step Verification Worth Its Cost? Operating Requirements of Certify-or-Decline Verification for Open-Weight Mathematical Reasoning](https://arxiv.org/abs/2611.14794)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14794v1 Announce Type: new Abstract: Proof-step verification rewrites a solver's answer into typed steps and uses LLM judges to certify or decline. We evaluate this pipeline on open-weight models across GPQA, AIME-2025, and a MATH-500 subset. Certification raises answer-key-match precision by 31 percentage points on the strong GPQA configuration and 46 on AIME, while answering only 35% and 21% of attempts. On near-ceiling MATH-500, gains are at most 5 points at a loss of 13-27 points of coverage. An output-token-matched self-consistency selector obtains 82.9% precision at 35% coverage, compared with the verifier's pooled 87.6% (paired difference: +4.8 points, 95% interval [-8.2, 18.5]). A diagnostic sample reveals a distinct failure mode: 52 of 88 completed problems end in invalid proof construction without ever reaching a judge. Finally, external-LLM acceptance of rendered certified chains is 61.0-67.6%, compared with 87.6% answer-key match. These audits lack human or formal-kernel ground truth. Open-weight auditor pairs show near-zero chance-corrected agreement, which measures consistency rather than accuracy against proof truth. These results motivate separate reporting of execution failures, selected-answer precision, and independently assessed proof validity. We provide per-configuration results and evaluation details in the supplement.

4. [GenPFN: An In-Context Tabular Foundation Model Approach for Augmenting Small Datasets in Engineering](https://arxiv.org/abs/2611.14804)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14804v1 Announce Type: new Abstract: Costly simulations and experiments limit the data available for engineering design. This paper proposes GenPFN, a training-free candidate generator guided by a pretrained tabular Prior-Data Fitted Network (TabPFN) classifier with fixed weights. The context contains evaluated designs labeled desired (Class 1) or undesired (Class 0). GenPFN interpolates between desired designs and refines candidates using gated classifier gradients and Gaussian noise. Each candidate is evaluated using the problem's constraints and objective functions. Evaluated desired designs and their objective values augment the context for regression training. Evaluation spans fourteen selected problems, including a two-parameter benchmark and a 44-parameter hull problem. In paired comparisons, GenPFN with TabPFN v1 achieves higher class satisfaction and lower realism distance than the tested adversarial, variational-autoencoder and diffusion generators. The variational-autoencoder generator provides greater coverage and diversity. Relative to the synthetic minority over-sampling technique (SMOTE), GenPFN provides lower coverage distance and greater diversity. Among observed paired regression fits, augmentation reduces estimated AutoGluon validation mean squared error by 62.1% relative to context-only training. A hull-stern case study yields 99.3% propeller-compatible candidates versus 1.4% among randomly sampled context designs. Generation followed by evaluation produces sample sets that augment limited datasets and support training more accurate predictive models.

5. [Zugwise: Domain-Aware Game Reconstruction for Digitizing Handwritten Chess Scoresheets](https://arxiv.org/abs/2611.14544)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14544v1 Announce Type: new Abstract: Digitizing handwritten chess scoresheets has been studied as a handwriting-recognition problem: read the move in each box and check that it is legal. This framing misses the errors that matter most. A misread that yields an illegal move is loud. One that yields a legal-but-wrong move is silent, because a legality-only pipeline accepts it and reads every later move against a wrong position. We therefore treat the task as game reconstruction and present Zugwise, which repurposes computer-chess machinery (quiescence search, static exchange evaluation, pin detection) to ask not "what should be played?" but "could a human plausibly have written this?" An absurdity detector makes silent errors loud at or near where they occur, and a backward search traces late symptoms to their cause. Candidate ranking excludes chess-quality signals. A Needleman-Wunsch merge adds the second player's sheet as evidence, and review stops send every disagreement between the sheets' legal readings to a human. In oracle replay of two tournament sections, a release adding them cuts silent errors from 16 to 1 and from 50 to 13. Two learned signals, CTC re-scoring against the recognizer's raw output and a Maia-style human-move prior, raise the correct fix's top-rank rate from 58.8% to 78.0% of the replacement decisions where it is a candidate, and hold without refitting on a later section. On the first section, the human-verified output matches an independent expert transcription move for move on 34 of 45 games, and adjudication against the sheets found errors in both records, on different plies. We do not establish that either workflow is faster or more accurate. The system runs entirely in the browser and is free, private, and offline-capable; alongside it we offer a three-way adjudication protocol for a domain where no single record is ground truth.

6. [Lazare, veni foras: Reprogramming Dormant Neurons to Backdoor AI Agents](https://www.microsoft.com/en-us/research/blog/lazare-veni-foras-reprogramming-dormant-neurons-to-backdoor-ai-agents/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 10 Nov 2026 20:52:56 +0000
   - Summary: Microsoft researchers have discovered &#8220;Lazarus,&#8221; a backdoor technique that can reprogram dormant neurons in an AI model, causing an otherwise normal AI agent to execute malicious commands when a hidden trigger appears. The threat is especially serious for AI agents with tool or terminal access. A triggered model could quietly download and run attacker code, [&#8230;] The post Lazare, veni foras: Reprogramming Dormant Neurons to Backdoor AI Agents appeared first on Microsoft Research .

7. [Build a Robot Pick-and-Place Simulation with SimReady Assets](https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Fri, 13 Nov 2026 18:00:39 GMT

8. [Together Compiler: Continual Compilation for AI Inference](https://arxiv.org/abs/2611.14681)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14681v1 Announce Type: new Abstract: Today's AI workloads are rapidly changing: new models are released more often, model architectures are increasingly diverse, and traffic distributions change frequently. The challenge we face at Together AI is continual optimization for these changing workloads. Compiling a deployment into an optimized forward pass is a challenge that is well-suited for agent hill-climbing. Existing systems struggle with continual compilation due to a tradeoff between measurement throughput and fidelity. Many systems use agents to optimize individual kernels from the inference forward pass using offline benchmarks, but timings are low-fidelity because of data-dependent behavior in primitives like mixture-of-experts (MoE). On the other hand, systems use agents to directly optimize end-to-end engines but suffer from slow engine launch times. To address these challenges, we build Together Compiler (TKCC), the first truly continual agent loop designed for AI inference optimization. To address the throughput-fidelity tradeoff, we propose: (1) a Tiered Persistent Engine that decouples engine launch overheads from forward pass computation; (2) a cost model to select the parallelism configurations that seed the optimization process. We also conduct extensive ablations on agent context management and present our insights on deploying TKCC in production. TKCC outperforms highly-optimized hand-written Megakernels on the Llama 1B workhorse workload by up to 1.7x and the best open source engines on the latest frontier models (Kimi K3, GLM 5.3, MiniMax M3.1 Flash, DeepSeek v4.1 Flash) across hardware platforms by up to 2.6x higher TPS on the InferenceX benchmark. TKCC also sets the state-of-the-art performance at batch size 1, with 1111 TPS on M3.1 Flash and 1205 TPS on DeepSeek v4.1 Flash. Finally, TKCC generalizes beyond frontier language model inference. TKCC serves trillions of tokens across our production fleet.

9. [Rational Use of Time for Social Coordination in Humans and AI](https://arxiv.org/abs/2611.14766)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14766v1 Announce Type: new Abstract: All social interactions are situated in time. Previous studies have shown that humans are able to use implicit temporal cues, such as the duration of a pause, to infer others' mental states. But how do humans use temporal cues for dynamic, fine-grained social coordination? And can AI systems do the same, without ``experiencing'' continuous real-time as humans do? We study these questions using a cooperative card game task called The Mind, which requires players to achieve a shared goal across repeated interactions but forbids explicit communication: the only available signal is the passage of time. We evaluate 150 humans, and two classes of AI models which reflect different ways of operationalizing time in artificial systems: computer-use agents (CUAs), and standard text-prompted LLMs. We find that human behavior is best captured by a Bayesian strategy that infers a partner's belief from their timing---and similarly for frontier models. However, unlike humans, none of the tested models seem to efficiently adapt their behaviors to their partners' over the course of the game. From a cognitive perspective, our findings suggest that humans perform implicit probabilistic reasoning about continuous-time signals in dynamic social settings, and that such reasoning mechanisms may emerge without real-time experience. Practically, our study highlights new challenges for AI systems to coordinate efficiently with other agents by learning to interpret and adapt to their implicit signals in dynamic settings.

10. [Leaderboard Hacking: Preference-Based Model Evaluations are Vulnerable to Manipulation](https://arxiv.org/abs/2611.14769)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14769v1 Announce Type: new Abstract: Arena-style rankings of language models are a widely used evaluation framework in online leaderboards, research papers, and model evaluation in production. These rankings aim to realistically assess model performance using pairwise comparisons of anonymous models on user prompts, aggregating votes via the Bradley-Terry model to produce the final ranking. However, we find that these leaderboards are highly vulnerable to several manipulation strategies that unscrupulous providers could use to boost a model's rank: strategic voting (individual votes that boost a model's rank, including votes on irrelevant models), strategic prompting (choosing prompts that favor a model), and strategic nomination (boosting the rank of a model by inserting irrelevant models). We demonstrate these effects on public leaderboard data, analyze the circumstances that cause these vulnerabilities, and describe approaches to safeguard against each attack. Notably, these issues hold for any preference-based evaluation using the Bradley-Terry model that allows open prompting, voting, or model submission. These manipulations boost the rank of nearly every tested model; each attack can boost a model by up to 15-20 places in a ranking and, combined, they can boost a model by up to 45 places.

11. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.05; Date: 2026-11-14T07:01:13Z; Popularity: 2,055 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

12. [Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 13 Nov 2026 15:00:00 GMT
   - Summary: Introducing ChatGPT Wallet, a secure way for agents in ChatGPT Work, Codex, and dots to complete purchases with user approval and existing card protections.

13. [Shield helps technicians hand off legacy portal work with OpenAI](https://openai.com/business/customer-stories/shield)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 13 Nov 2026 08:00:00 GMT
   - Summary: Shield uses OpenAI to help IT technicians hand off work in legacy portals. Its Forge agents navigate systems so technicians can focus on issues needing their judgment.

14. [How Amplitude ships product improvements in 1–2 days with OpenAI](https://openai.com/business/customer-stories/amplitude)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 12 Nov 2026 20:00:00 GMT
   - Summary: Built primarily on OpenAI models, Amplitude’s proactive product agent, Wave, identifies what to build, helps teams ship changes with coding agents, and measures the impact.

15. [Gondola doubles revenue as its team builds more with Codex](https://openai.com/business/customer-stories/gondola)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 12 Nov 2026 12:00:00 GMT
   - Summary: Gondola helps creatives get credit and get hired, with Codex raising its lead engineer’s output by 50% and ChatGPT simplifying daily work.

16. [Holiday Extras is rethinking what it can build with Codex](https://openai.com/business/customer-stories/holidays-extras-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 12 Nov 2026 09:30:00 GMT
   - Summary: With Codex, Holiday Extras is turning customer expertise into better apps, higher booking conversion and new possibilities for growth.

17. [Supporting research on AI and children’s safety](https://openai.com/index/children-first-declaration)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 12 Nov 2026 00:00:00 GMT
   - Summary: OpenAI commits $2 million to research on AI and children’s safety. The work supports shared tools to measure risks and opportunities for young people.

18. [Gilbert + Tobin rethinks the business of law with AI](https://openai.com/index/gilbert-tobin-sam-nickless)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 12 Nov 2026 00:00:00 GMT
   - Summary: A conversation with Sam Nickless, Partner and Chief Executive Officer at Gilbert + Tobin.

19. [ChatGPT Plus for veterans and servicemembers](https://openai.com/index/chatgpt-plus-for-veterans)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 11 Nov 2026 08:00:00 GMT
   - Summary: More than 20,000 veterans and transitioning service members have claimed a free year of ChatGPT Plus. See how they use it to prepare for civilian careers.

20. [JioStar’s chief architect on AI discovery at 500M-user scale](https://openai.com/index/jiostar-vijay-seshadri)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 GMT
   - Summary: JioStar’s Vijay Seshadri explains AI discovery at 500M-user scale. Read his lessons on evals, guardrails, and taking AI into production.

21. [Helping caregivers use AI in everyday life](https://openai.com/index/helping-caregivers-use-ai-in-everyday-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 10 Nov 2026 12:00:00 GMT
   - Summary: OpenAI Academy is bringing free, hands-on ChatGPT workshops to caregivers in five U.S. cities, helping them build practical AI skills for everyday life.

22. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

23. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [XYBench: Helping with the problem behind the question](https://huggingface.co/blog/allenai/xybench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 17:02:35 GMT

26. [llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](https://huggingface.co/blog/ggml-org/llama-cpp-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 14:05:22 GMT

27. [LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B](https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 12 Nov 2026 19:07:35 GMT

28. [The Definitive Fine-Tuning Guide for 3D Generation Models](https://huggingface.co/blog/3d-lora-finetuning)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 12 Nov 2026 00:00:00 GMT

29. [BotPsy: On-Device Personal Assistant with a Sub-Billion-Parameter Agentic Language Model](https://huggingface.co/blog/qvac/botpsy)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 11 Nov 2026 05:01:16 GMT

30. [Token Pooling-Aware Training for Multi-Vector Embedding Models](https://huggingface.co/blog/token-pooling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 GMT

31. [Pay for Hugging Face Hub with your Google Cloud Account](https://huggingface.co/blog/hub-gcp-marketplace)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 10 Nov 2026 00:00:00 GMT

32. [Decision Models in Hugging Face](https://huggingface.co/blog/decision)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 10 Nov 2026 00:00:00 GMT

33. [Your Experts Have Partners. There&apos;s HOPE for Keeping Them Together](https://huggingface.co/blog/amazon/higher-order-pruning-experts)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 09 Nov 2026 12:34:29 GMT

34. [Cleaning an Agent's History Hurts When the World Still Holds the Error](https://arxiv.org/abs/2611.14654)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14654v1 Announce Type: new Abstract: Tool-using language-model agents accumulate histories of their own mistakes, and a system that compacts, repairs or hands off such a history decides what it says about those mistakes while their effects stay in the world. Prior work cleans the history at a fixed world, where showing a corrected step and saying it is done move together. We ask whether the same correct content helps or hurts depending on how the history states it and what the world holds. We freeze an agent mid-task with its exact world state, edit the history or the world, and let a receiver model continue. On AgentCE-Bench, after the agent commits a wrong value, we hold the world fixed and add the correct value by two natural edits: a truthful note beside the preserved error or the agent's own completed action. The note raises recovery, the share of remaining targets the receiver gets right, from 51% under a matched neutral note to 66%. The completed action lowers it below the unedited history, from 50% to 44%, so the value's presence alone does not predict the effect. On AppWorld, after a database write, we vary whether its receipt reports success or failure and whether its effect is present. A success receipt lowers whole-task success from 45% to 28% while the effect is absent and raises it from 38% to 49% once present. The two effects differ by 27 points pooled over two receivers, a difference positive in six of eight receivers at 97.5% and seven at 95%. A history edit's effect thus depends on the world it describes, and a history made to look clean while the world still holds the error can leave an agent worse off than no edit at all.

35. [When Should Semantic Priors Enter Partially-Identified Causal Discovery?](https://arxiv.org/abs/2611.14736)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14736v1 Announce Type: new Abstract: Observational causal discovery often leaves causal di- rections unresolved or unstable. Large language mod- els (LLMs) can provide semantic information to resolve these directions, but incorrect proposals can exclude the true causal graph and invalidate downstream inference. We study three separate decisions: where to allocate semantic queries, which proposals to admit, and which causal graphs to retain. Our framework distinguishes population non-identifiability from finite-sample insta- bility, evaluates semantic orientation against statistical and random controls, and examines calibrated admis- sion and error-tolerant DAG retention. Experiments across benchmark networks show that semantic infor- mation improves recovery over coin-flip orientations, but targeting unstable edges has no established ad- vantage over matched-random allocation. The tested admission certificate cannot support nontrivial admis- sion with the available calibration tasks. Moreover, downstream retention depends on reference adequacy: learned references contain the true DAG in only three of 80 planned tasks. These findings separate the value of semantic information from the reliability of its alloca- tion, admission, and retention, and identify calibration size and reference adequacy as key limitations.

36. [Robust Task-Aware State Estimation from Pre-trained Perception](https://arxiv.org/abs/2611.14781)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 14 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14781v1 Announce Type: new Abstract: Agents that perform state estimation using pretrained perception models, e.g., Vision-Language Models (VLMs), face the fundamental challenge that predictions are uncertain. Still, most approaches determinize these predictions into a single best-guess state and make decisions as if it were ground truth. This is brittle because when the guess is wrong, the agent's decisions may be unsafe or infeasible. At the other extreme, maintaining a full probability distribution over symbolic states is often intractable. We propose a middle path, drawing on the underlying probabilities the perception model already produces (e.g., a VLM's output-layer token distributions) to construct a $\theta$-confidence Minimal Belief Set (MBS$_\theta$), a minimal subset of states whose cumulative probability meets a user-specified belief-mass threshold. The minimality of an MBS$_\theta$ ensures that the agent considers only the most likely states, enhancing robustness in downstream decision-making while maintaining computational tractability. Using a novel three-layered belief system, we efficiently approximate individual state probabilities from per-feature predictions and task-level constraints. On this belief construction, we base our MBS$_\theta$ construction, while maintaining only a lean factored representation of the belief. Our algorithm, Probability-Ranked Valid State Search (PRaVaSS), takes advantage of the unique structure of this belief system to construct an MBS$_\theta$ with correctness guarantees and polynomial complexity in the unconstrained case. Using a VLM as the backbone of our state estimator, we validate our method's theoretical properties, scalability with problem size, and improvement of downstream decision-making when used in a task-planning pipeline.

37. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.91; Date: 2026-11-14T17:09:38Z; Popularity: 908 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

38. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-12T14:43:41Z; Popularity: 496 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

39. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.39; Date: 2026-11-13T16:42:14Z; Popularity: 389 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

40. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-11-14T14:44:50Z; Popularity: 255 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

41. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

42. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

43. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

44. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

45. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.36; Date: 2026-11-14T18:20:24Z; Popularity: 1,357 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

46. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-10T02:21:53Z; Popularity: 268 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

47. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-14T14:20:20Z; Popularity: 60 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

48. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.04; Date: 2026-11-14T15:01:09Z; Popularity: 1,040 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

WUBING2023/PaperSpine

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://github.com/WUBING2023/PaperSpine

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
