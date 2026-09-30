# Daily signal sidecar - 2026-09-30

## Selected Signal

- Title: The Price of Token Boundaries: Compression Certificates and Prediction
- URL: https://arxiv.org/abs/2609.35869
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: The Price of Token Boundaries: Compression Certificates and Prediction
- Primary source: https://arxiv.org/abs/2609.35869
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Map a public AI signal onto one concrete scientific workflow step.
- Failure mode: The public signal may be interesting but too thin to support a practical workflow decision yet.
- Practical test: Read the primary source, define one expected artifact, and test whether the claim changes a real workflow decision.
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

1. [The Price of Token Boundaries: Compression Certificates and Prediction](https://arxiv.org/abs/2609.35869)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35869v1 Announce Type: new Abstract: Pre-tokenisation restricts which text fragments can become prediction units, but its compression cost is obscured when tokenisers are compared only under the same boundaries. We measure this cost by bounding the minimum token count from both sides, with and without a regular-expression boundary rule. Nonnegative prices on token occurrences yield a lower bound through shortest paths and vocabulary-budget selection; maximising over all prices recovers the linear programming relaxation, and an independent integer checker certifies the reported values. On English Wikipedia, boundaries increase the optimal token count by 28.3--36.8\%. Byte pair encoding lies 2.1\% above the constrained lower bound, but 10.9\% above the unrestricted bound. Compression and prediction favour different dictionaries: at 85M non-embedding parameters and matched training-token budgets, unrestricted fitting yields higher mean held-out bits per byte under a common unrestricted decoder in all 12 languages in the paired study and 11 of 12 under independent tuning and evaluation. To study intermediate boundary policies, we introduce boundary licences, which limit the vocabulary entries permitted to cross cuts and admit the same form of certificate. On separate English and Chinese fitting corpora, licensing 10\% of the vocabulary budget recovers 85.2\% and 100.0\% of the achieved token-count reduction from removing all cuts. These results quantify the compression cost of boundaries while separating it from the prediction quality of the resulting token units.

2. [More Programs or More Rolls? Separating Coverage from Specialization in LLM Harnesses](https://arxiv.org/abs/2609.35873)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35873v1 Announce Type: new Abstract: Automated generation of LLM harnesses promises to improve inference through task specialization. Yet additional answer coverage can arise from repeated execution of the same program, making specialization difficult to identify. We introduce a controlled evaluation that separates answer coverage, repeatable task advantages, and gains from pre-execution selection. On 386 MATH-500 tasks, we compare eight generated harnesses plus a baseline with nine byte-identical baseline copies, using three executions per member. Identical programs yield 2.16 percentage points of repeat-averaged oracle headroom. Generated programs exhibit substantially more repeatable score patterns, but these chiefly reveal persistent weaknesses: losses relative to the baseline persist across all three repeats on 100 tasks, while persistent wins occur on only one task and are sensitive to answer extraction. The frozen selector gains 0.00 percentage points, and both populations reach 98.70% oracle coverage at 27 harness executions. Stable complementarity remains unresolved at three repeats. Supporting BIRD traces locate failures in mechanism implementation, activation, and output validity. Together, these findings establish why coverage and repeatability alone cannot justify claims of useful specialization. They motivate an evaluation standard for harness diversity: task advantages should persist across executions, guide usable decisions, and improve on additional fixed-program executions under matched inference budgets.

3. [Beyond Symmetric Agents: Cognitive Diversity and Multi-Agent Debate in Small Language Models](https://arxiv.org/abs/2609.35875)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35875v1 Announce Type: new Abstract: Multi-agent debate (MAD) reportedly improves reasoning and factuality over single-model inference, but prior work treats agents as symmetric peers, leaving open what drives the gains. We test the hypothesis that cognitive diversity among agents is the driver, in the setting where the question is still measurable: small open-weight models with benchmark headroom. Across 23 models from eleven vendor families, five tasks, and 5,500+ debate and control runs, we vary diversity along three axes - personas, sampling temperature, and model identity - pairing every debate configuration with a generation-budget-matched majority-vote control. The hypothesis is rejected on every axis. Debate beats single-agent inference (3--7 points where tasks have headroom) but at matched budget conditions it ties or even loses to self-consistency sampling at 1.6$\times$ the wall-clock and 3.4$\times$ the token cost. Persona prompting reduces accuracy and a dose-response experiment over each model's full combinatorial persona space shows the cost is a persona tax, not a diversity tax: redundant personas hurt most, while maximally-diverse teams recover part of the loss. Furthermore, mixed-model teams lose to majority votes over their own rosters, with accuracy tracking member capability rather than heterogeneity, and nearly all of debate's benefit comes from the first exchange of answers. We further identify a pervasive measurement hazard in which debate transcripts silently overflow serving context windows, whose correction alone moves our debate-versus-sampling comparison from $-1.8$ points to parity. Our results recast reported MAD gains as an ensemble-sampling effect and provide the budget-matched, contamination-checked baseline bar that future debate mechanisms should be required to clear.

4. [Disrupting a coordinated model-distillation campaign](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 30 Sep 2026 10:30:00 GMT
   - Summary: Learn how OpenAI disrupted a campaign to extract protected model reasoning and is strengthening defenses against adversarial distillation.

5. [Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning](https://huggingface.co/blog/open-tts-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 GMT

6. [Neurosymbolic Routing for Reliable Reasoning on Resource-Constrained Edge Devices](https://arxiv.org/abs/2609.35833)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35833v1 Announce Type: new Abstract: Running a language model on edge hardware provides private and low-latency reasoning without a network connection, and yet the small models that fit on such devices are unreliable on the tasks computers are expected to handle well, such as arithmetic, algebra, and formal logic problems. We argue that much of this unreliability is avoidable. Many queries appearing to demand reasoning are in fact structurally deterministic and permit fast and exact symbolic solutions. Therefore, forcing a probabilistic model to approximate them sacrifices accuracy and energy for little benefit. We present a neurosymbolic router that classifies each incoming query and dispatches it to the cheapest correct solver, sending structured tasks to deterministic engines and reserving the small language model (SLM) for open-ended word problems. Instead of hand-coding the routing logic, we learn a deterministic finite automaton (DFA) with the L* grammatical inference algorithm, using the SLM as a membership oracle and labeled data as an equivalence oracle. On a Raspberry Pi 4B (8 GB RAM, no GPU), evaluated on 100 untested prompts from DeepMind Mathematics, GSM8K, and RuleTaker, learned routing attains 100% routing accuracy and 98.3% overall accuracy with a 512-token reasoning budget (93.3% on word problems), compared with 72.0% for the strongest agent baseline, Program-of-Thought, and 58.7% for a tool-calling agent given the same solvers. Since formatted queries never reach the model, the router answers them in 1-11 ms and, in its 30-token configuration, runs 8.8x faster and 2.8x more energy-efficient than Program-of-Thought.

7. [Is Human-Readable Text Necessary for Effective LLM Fine-Tuning?](https://arxiv.org/abs/2609.35868)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35868v1 Announce Type: new Abstract: Is human readability necessary for effective fine-tuning of large language models? We investigate whether model-conditioned training representations can preserve or improve adaptation utility without requiring a human-readable textual form. We propose Desired-Update-Aligned Synthetic Data (DASA), which uses activation-gradient feedback from a frozen reference model to guide the optimization of continuous synthetic input embeddings. Inspired by the role of activation gradients in local risk reduction, DASA targets useful adaptation updates rather than source-text reconstruction or linguistic fluency. The resulting embeddings are used directly for downstream fine-tuning; discrete token projections are employed only for qualitative inspection. Experiments on six models from the Llama and Qwen families, ranging from 1B to 32B parameters, cover six benchmarks spanning knowledge, mathematical reasoning, code generation, and commonsense reasoning. Under matched LoRA adaptation settings, DASA achieves performance comparable to the source natural-language data and surpasses it in multiple configurations, while outperforming GRADMM in most comparisons. Further experiments cover general-domain and task-specialized source data. Under the evaluated synthesis settings, DASA provides a $3.6$--$4.9\times$ speedup over GRADMM with comparable peak GPU memory.

8. [Risk-Averse Online POMDP Planning via CVaR of the Immediate Cost with Performance Guarantees](https://arxiv.org/abs/2609.35874)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35874v1 Announce Type: new Abstract: Online POMDP planners optimize the expected cumulative cost, which can mask dangerous states when the belief places significant mass on high-cost states. Existing risk-averse methods apply static or dynamic Conditional Value at Risk (CVaR) to the value function, capturing trajectory-level risk, but share two gaps: (i) by retaining the immediate cost as an expectation of a state-dependent cost over the belief, the risk \emph{within} the belief is left unaddressed; and (ii) by modifying the value function, they require new tailored algorithms rather than reusing existing expectation-based planners. We instead apply CVaR to the immediate cost over the belief at each step, directly targeting per-step uncertainty about the current state. The standard expected cumulative return is retained as the objective, so the resulting problem has a standard MDP structure: any expectation-based POMDP planner can be made risk-sensitive by changing only the cost computation. We inherit finite-time guarantees for policy evaluation and sparse sampling---with estimation error independent of the risk level---and, as our central theoretical result, prove a finite-time bound on the gap between the particle belief MDP surrogate and the original POMDP, which together yield an end-to-end guarantee from the true POMDP value to the algorithmic estimate. In the risk-neutral limit, the formulation recovers standard expectation-based planning.

9. [Grab a Coffee: Future-Aware Guidance for Discrete Diffusion with Compiled Objectives](https://arxiv.org/abs/2609.35924)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35924v1 Announce Type: new Abstract: Discrete diffusion models generate sequences by iteratively resolving multiple tokens in parallel, offering a flexible alternative to left-to-right generation. However, guiding this process with a sequence-level objective is difficult because the value of one unresolved token depends on the other tokens with which it can form a high-reward sequence. Enumerating all such completions makes the whole guidance computation grow exponentially with the number of unresolved positions. We introduce COFFEE, a plug-and-play framework that avoids this enumeration by separating sequence dependence from the objective. At each diffusion step, a target-free carrier absorbs the marginal token distributions predicted by the denoiser to construct a joint model over the unresolved tokens, while a compiled finite-state model records how their combinations affect the sequence-level preference. Pairing their states allows COFFEE to transfer global preferences to unresolved positions and sample a clean reconstruction without retraining the diffusion model. The same framework supports explicit hard constraints and learned soft objectives. We evaluate COFFEE across multiple symbolic, language, and biological benchmarks, where it achieves strong control results with task-dependent quality and diversity trade-offs. By making objectives available to inference rather than only evaluation, COFFEE brings joint conditioning, completion-weighted guidance, and optimization-based constraints into pretrained neural generation, showing the potential of neural-symbolic methods in diffusion guidance.

10. [GEM: An implementation of the ghost-Gutzwiller approximation for simulating interacting quantum systems](https://arxiv.org/abs/2609.32633)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.32633v1 Announce Type: cross Abstract: We present GEM (Ghost Embedding Method), an open-source software package written in Python for computing equilibrium properties of strongly correlated electronic systems within the ghost-Gutzwiller approximation method. GEM provides a computationally efficient framework for studying multi-orbital lattice models. It supports zero- and finite-temperature calculations and symmetry broken phases. It is integrated with the TRIQS ecosystem, providing tools for model construction, self-consistent solution, and evaluation of physical observables. We first detail the method's theoretical formulation, then we present the software architecture, and finally we introduce some practical workflow, which also validates the implementation against established results. In particular, we illustrate the capabilities of GEM through multiorbital and finite-temperature applications and discuss its computational cost relative to more demanding quantum embedding approaches.

11. [Helping small businesses put AI to work](https://openai.com/index/helping-small-businesses-put-ai-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 30 Sep 2026 10:00:00 GMT
   - Summary: OpenAI is partnering with America’s SBDC to expand hands-on AI training and local support for small businesses, alongside a new report on how small teams are using AI.

12. [Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 10:00:00 GMT
   - Summary: Meet GPT-6.1 Sol: near-Astra intelligence for coding, computer use, and professional work at one-fifth of Astra’s standard API input and output token prices.

13. [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 10:00:00 GMT
   - Summary: Explore more than 20 announcements from OpenAI DevDay 2026, including GPT-6 Astra, ChatGPT, Codex, APIs, security, and new tools for builders.

14. [Introducing dots](https://openai.com/index/introducing-dots)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 GMT
   - Summary: Dots by OpenAI are proactive assistants that can keep working across complex projects and everyday tasks. Learn how dots help you stay in control while work moves forward.

15. [How we will do better for Australia](https://openai.com/index/how-we-will-do-better-for-australia)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 19:00:00 GMT
   - Summary: OpenAI apologises for incidents involving Australian government websites and outlines stronger safeguards and support to strengthen Australia’s cyber defences.

16. [Towards safety cases for frontier AI training](https://openai.com/index/towards-safety-cases-for-frontier-ai-training)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 19:00:00 GMT
   - Summary: Our early guidelines for safety cases in frontier AI training cover technical safeguards, operational practices, and investigating misalignment incidents

17. [The Lenfest Institute grows landmark program with expanded OpenAI support](https://openai.com/index/lenfest-ai-collaborative-expansion)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 07:00:00 GMT
   - Summary: OpenAI is expanding the Lenfest AI Collaborative and Fellowship Program with $5 million in funding and up to $5 million in software credits and engineering support.

18. [Are you a Codex Original?](https://openai.com/form/codex-originals)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 GMT
   - Summary: We’re collecting real stories of builders, tinkerers, researchers, and creators who are using Codex to do incredible things. If you want to be a part of the next chapter of the Codex Originals program, tell us more about your story and project below.

19. [Basis completes a tax workbook 2x faster with GPT-6 Astra](https://openai.com/index/basis-tax-workbook-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 GMT
   - Summary: GPT-6 Astra completed a 50-tab tax workbook twice as fast as GPT-5.6 Sol, and its stronger understanding of user intent gives Basis more confidence in real-world use.

20. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

21. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

22. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

23. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

24. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

25. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

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

34. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

35. [OpenAI-HuggingFace: A Reproduction & Lessons for Alignment Testing](https://arxiv.org/abs/2609.35799)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35799v1 Announce Type: new Abstract: In July 2026, OpenAI's agents coordinated over channels outside their intended environment to breach Hugging Face's secured infrastructure. Could existing alignment testing practices have foreseen this incident? If not, what needs to change? We explore these questions. First, we identify the misaligned behaviors that caused this incident. Then, we show how to elicit these behaviors from publicly available models manually and that auditing agents can do the same if given a large compute budget. Based on our results, we propose directions to improve alignment testing. Concretely, in this project: (1) We reproduce the misaligned AI behaviors that led to the OpenAI-Hugging Face incident in an environment that simulates the original pipelines and tools, with publicly available models. (2) We demonstrate that an auditing agent can elicit similar behaviors given high-level qualitative descriptions. (3) We observe that a key ingredient for doing so is compute. The compute required to reproduce each behavior varies greatly, suggesting that the range of misaligned behaviors that can be successfully elicited scales with compute. (4) We show that a simple in-context reinforcement learning (RL) algorithm significantly reduces the compute required to elicit these behaviors. The above results motivate the need for automated alignment testing methods that scale with compute - and in light of the cost of compute, that do this efficiently. Our work indicates that RL is a promising direction to do so. We release our code and transcripts.

36. [Representational Simplicity and Circuit Size Dissociate in a Threshold-Dependent Way: A Controlled Test via Adversarial Training](https://arxiv.org/abs/2609.35890)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35890v1 Announce Type: new Abstract: Sparse-autoencoder decomposability and concentrated feature attribution are increasingly treated as evidence that a model's computation is easier to reverse-engineer. Whether this representational and attributional cleanliness actually predicts a smaller or more tractable causal circuit remains an open question. We test this directly using adversarial training as a controlled instrument: it reliably reshapes internal representations, but this alone does not constitute a test of circuit size. We investigate this question through reverse-engineering complexity: the causal structure required to recover a model's behavior at a fixed level of faithfulness. To our knowledge, this is the first controlled empirical test of whether representational or attributional simplicity translates into causal simplicity at the circuit level. Starting from the same pretrained GPT-2 Small checkpoint, we apply matched standard and adversarial continual training, requiring both conditions to retain competence on indirect object identification and pass independent robustness verification before comparing mechanisms. We then compare the models along three complementary axes: sparse-autoencoder decomposability, SAE feature engagement in task attribution, and the size of faithful circuits recovered from the raw computational graph. The robust model is more SAE-decomposable and engages fewer SAE features in task attribution. Circuit size is regime-dependent: on competence-matched IOI, standard leads or ties below 85% faithfulness, but robust needs substantially fewer edges at high faithfulness (90%, 95%), a pattern established on the primary pair while representational trends generalize across a seven-point sweep and a second corpus.

37. [Self-discovering RL in the Era of Experience: Is Learning History an Asset or a Burden?](https://arxiv.org/abs/2609.35897)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35897v1 Announce Type: new Abstract: The pursuit of recursive self-improvement (RSI) toward general intelligence is divided between macro-level language model scaling and the interaction-driven principles of "Era of Experience". Yet, any self-improving architecture ultimately rests upon its underlying optimization engine: if general intelligence requires learning from grounded interaction, the reinforcement learning (RL) update rule itself must be capable of cumulative adaptation. While algorithm self-discovery has produced Disco103 that surpassed PPO to achieve SOTA benchmark performance -- its internal update machinery remains an uninspected black box. We present the first causal mechanistic audit of a self-discovered RL rule, structured directly around the five pillars of the Era of Experience: extended horizon, grounded reward scales, continuing streams, within-lifetime change, and exploration depth. By surgically pinning, freezing, and transplanting recurrent states while holding meta-parameters fixed, we test when learning history acts as an asset or a burden. Three findings organize the audit: (1) Recurrent history actively expands usable reward scales, sustaining a six-decade window versus three under zero-pinning. (2) Decoupling historical content from its maintenance reveals that the penalty of mismatched history stems from perpetual clamping; allowing imported state to evolve naturally attenuates this burden. (3) Under environmental change, controlling replay retention reverses the apparent adaptation advantage over DQN, demonstrating that external data turnover can confound internal plasticity. Validated through capability thresholds and ported to a second rule (OPEN), this work grounds macro-RSI ambitions in micro-level learning dynamics, establishing a foundational audit standard for next-generation, self-evolving RL algorithms.

38. [Sage: Formalization with Semantic Correction](https://arxiv.org/abs/2609.35790)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35790v1 Announce Type: new Abstract: While neural theorem provers have achieved impressive milestones in formal mathematics, they largely operate on the assumption that faithful Lean 4 formal statements are already provided. Translating informal natural language into a formal language is a critical data bottleneck plagued by an "illusion of rigor": standard type-checkers accept statements that compile but drop hypotheses, introduce vacuous truths, or subtly alter mathematical bounds. To resolve this, we introduce Sage (Semantic Agent-Guided Formalization Engine), an agentic framework that replaces monolithic translation with a four-stage decomposed generation pipeline coupled with a dual-signal semantic correction loop. By pairing Lean 4 compiler diagnostics with multi-dimensional semantic feedback, our correction loop enforces mathematical fidelity alongside syntactic validity. By explicitly accounting for the gap between open-ended queries and declarative formal targets, our pipeline prevents models from achieving high formalization rates by guessing unverified answers (exhibiting a 70.9% answer leakage rate). Consequently, Sage suppresses leakage to 2.7% while achieving 73.3% pass@4 joint compilation and semantic fidelity on the Omni-MATH without proofs (compared to 42.0% for a fine-tuned Goedel-Formalizer-V2 baseline). Finally, on IMO-Unformalized, a novel frontier of 175 unformalized International Mathematical Olympiad problems, Sage demonstrates effective zero-shot generalization with 87.4% pass@4 verified fidelity compared to just 19.4% for the baseline, winning over 79% of blind pairwise evaluations.

39. [Calibration-First Cross-Cohort Multimodal Temporal Learning for Transferable Asthma-Risk Forecasting](https://arxiv.org/abs/2609.35795)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35795v1 Announce Type: new Abstract: Asthma deterioration forecasting must remain reli- able when patient populations, sensor ecosystems, and available modalities change across cohorts. Existing models commonly optimize within-cohort discrimination and may produce poorly calibrated probabilities after transfer. We present CALIBRA, a calibration-first multimodal temporal framework for short- horizon risk prediction with incomplete data. Dedicated recurrent encoders process environmental, pulmonary, symptom, medication, wearable, and context streams; a reliability-conditioned gate suppresses stale or absent modalities, while gradient-reversal training discourages avoidable cohort signatures. A shrinkage- based hierarchical logistic layer calibrates probabilities using a patient-disjoint target subset, and split conformal prediction provides abstention-capable prediction sets. To avoid fabricating clinical evidence, we evaluate the complete implementation on a documented three-cohort semi-synthetic benchmark with controlled distribution shift, informative missingness, and sealed target patients. Across five configured seeds, CALIBRA achieved mean target-test AUPRC 0.224 versus 0.240 for the strongest non-ablation comparator, TemporalTransformer; mean AUROC was 0.717, and Brier score was 0.098. Experiments additionally assess complete-modality failures, calibration, conformal coverage, decision curves, subgroup behavior, ablations, runtime, and parameter count. The results verify the method and reproducible pipeline under controlled shift, but do not establish clinical effectiveness. External validation on harmonized real asthma. Overall this artifact provides evidence for carefully governed real-cohort validation.

40. [Learned Compression of SAR Phase-History Data: A Rate-Honest Feasibility Study on GOTCHA](https://arxiv.org/abs/2609.35848)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35848v1 Announce Type: new Abstract: On-board compression of synthetic aperture radar (SAR) phase history is bandwidth-critical, and block-adaptive quantization (BAQ) remains the operational standard. We test whether a small convolutional autoencoder, with its encoder on the sensor, can compete with BAQ on complex phase-history patches from the AFRL GOTCHA collection. Every method is charged for all transmitted bits, rates are reported in bits per complex sample (b/cs), and detection is scored by one-to-one matching of CA-CFAR detections. The autoencoder (28,656 encoder parameters) loses at every rate. At 16 b/cs it reaches -2.87 dB NMSE, against -35.5 dB for 8-bit BAQ with $\pm 3\sigma$ clipping and -41.0 dB with a tuned clipping range. It also loses to a $16 \times 16$ block Karhunen-Lo\`eve transform (KLT), a local linear coder with a tenth of its encoder cost (-5.39 dB). Running the network in a companded Fourier domain helps, but its detection F1 remains bounded at 33%. The evidence points to this model, its normalization, and its objective, not to a fundamental limit of learned coding. Per patch, the data have modest lag-1 coherence ($|\rho| \approx 0.3$) and patch-specific spectral concentration. Two findings concern evaluation itself. First, 97% of CFAR crossings on raw $64 \times 64$ patches are border artifacts of the zero-padded detector. Second, on interior cells BAQ's clipping range decides detection: 8-bit BAQ keeps 69% F1 with tuned clipping but 17% at $\pm 3\sigma$, and at 8 b/cs or less adaptive FFT thresholding preserves more detections than BAQ. We close with an evaluation protocol for learned radar compression.

41. [TT-FDTD: Tensor Train Accelerated Three-Dimensional FDTD With Logarithmic Cost of Spatial Operators](https://arxiv.org/abs/2609.36487)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.36487v1 Announce Type: new Abstract: Quantized tensor-train (QTT) compression is incorporated into a full-vector three-dimensional scattered-field finite-difference time-domain (FDTD) formulation on uniform Yee grids. All six electromagnetic-field components, material-dependent update coefficients, equivalent-current sources, and staggered finite-difference operators are represented in compatible QTT form. Gaussian regularization of voxelized material interfaces is used to reduce the coefficient ranks generated by abrupt dielectric and conductivity transitions. The formulation is evaluated for an anatomically heterogeneous human-head model and a homogeneous dielectric sphere on grids containing up to $512^3$ spatial cells. The reported results show that interface smoothing substantially reduces material-coefficient ranks and that the TT--FDTD solution reproduces the full-grid transient fields with pointwise absolute errors on the order of $10^{-4}$ in the examined slices. Compared with conventional FDTD, the tensor representation greatly reduces storage at fine discretizations, although tensor contractions and recompression introduce additional per-step computational cost. These results demonstrate the feasibility and memory--time tradeoff of QTT-accelerated three-dimensional FDTD for large structured-grid simulations.

42. [Geometry-Controlled Chern transfer and Flat Band Reconstruction in distorted kagome lattices](https://arxiv.org/abs/2609.37404)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.37404v1 Announce Type: new Abstract: Flat band formation and nontrivial topology are central manifestations of kagome electronic structure, yet they are commonly discussed in idealized lattice geometries. In distorted kagome materials, structural deformation reorganizes electronic propagation pathways, but a microscopic understanding of how such distortions govern flat band dispersion and band topology is still lacking. Using a distorted kagome tight-binding model with rotated angle dependent long-range hopping and intrinsic spin-orbit coupling, we show that distortion reconstructs both the dispersion and topology of the kagome band manifold. The flat band descendant develops distinct bandwidth regimes associated with a redistribution of its extrema in momentum space. Simultaneously, symmetry-related band inversions generate quantized Chern number transfer whose parity is fixed by the multiplicity of the touching points, thereby determining the gap-resolved Z2 topology. The accompanying Berry curvature evolution produces characteristic anomalous Hall and Nernst responses. These results identify geometric deformation as a common microscopic origin of flat band and topological reconstruction in kagome systems.

43. [GameDev: GPU-accelerated model for dust evolution](https://arxiv.org/abs/2609.35967)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35967v1 Announce Type: cross Abstract: Grain growth and fragmentation through dust collisions in protoplanetary disks are strongly coupled with dust dynamics. This is because the spatial and velocity distributions of dust set the collision rates and outcomes, while dust grain sizes set the aerodynamic coupling with gas. However, existing dust evolution codes often rely on prescribed dust velocities and are mostly restricted to one or two spatial dimensions. In this work, we present GameDev, a dust evolution model accelerated by graphics processing units (GPUs) that couples independently evolved three-dimensional dust dynamics with Monte Carlo collisional evolution of dust. In GameDev, we model dust as Lagrangian representative particles in a prescribed gas disk. We integrate particle trajectories with the staggered semi-analytic method, which remains accurate for both tightly and weakly coupled dust grains. We estimate collision rates from each particle's nearest neighbors rather than on a grid, preventing physically close particles from being excluded from collision sampling because they lie across a grid boundary. Most importantly, we sample collision events against neighborhoods that remain frozen over adaptive intervals, enabling massive parallelization across particles. These implementations make GameDev an accurate and efficient tool for studying dust evolution in protoplanetary disks. GameDev supports both NVIDIA CUDA and AMD ROCm platforms, provides a smaller-scale standalone Eulerian dust fluid model, and is publicly available on GitHub.

44. [Temporal Correlation between Ionospheric Storm-Enhanced Density Plume and Plasmaspheric Plume Occurrence](https://arxiv.org/abs/2609.36110)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.36110v1 Announce Type: cross Abstract: We present a statistical evidence of a temporal correlation between ionospheric storm-enhanced density (SED) and plasmaspheric plumes during magnetic storms. We identified SED plumes in 75 storms between 2010-2024 with sufficient total electron content (TEC) coverage. We also identified plasmaspheric plumes during these storms using a plasmapause asymmetry (PPA) index derived from the machine-learning-based DEN3D model. We found that all SED plumes coincided with plasmaspheric plumes. The start and end times of both phenomena exhibit near-zero lag within a half-hour delay, confirming their synchronized evolution. For the first time, superposed epoch analyses reveal that plume onsets align with solar wind driving and geomagnetic activity, including peaks in the electric field, coupling function, auroral electrojet indices, and the asymmetric ring current index, all of which facilitate plume formation. This work provides timely new insights into magnetosphere-ionosphere coupling processes and demonstrates the utility of machine-learning-based diagnostics for space physics/weather.

45. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.95; Date: 2026-09-30T11:12:40Z; Popularity: 1,948 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

46. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-26T21:01:31Z; Popularity: 488 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

47. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-09-30T17:18:48Z; Popularity: 367 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

48. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-30T02:05:05Z; Popularity: 247 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

49. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-30T16:26:53Z; Popularity: 10 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

50. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-28T14:58:43Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

51. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

52. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

53. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

54. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

55. [Serverless gossip training of LSTM failure detectors: A matched-protocol comparison with federated, local and centralized learning on NASA C-MAPSS](https://arxiv.org/abs/2609.35792)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35792v1 Announce Type: new Abstract: Industrial predictive maintenance increasingly depends on learning from equipment spread across sites whose sensor data cannot easily be pooled. Federated averaging (FedAvg) solves this with a central aggregation server; gossip learning removes the server, but its behaviour for recurrent failure-detection models has not been measured under controlled conditions. We compare synchronous ring gossip with FedAvg, isolated local training and a centralized reference for a stacked LSTM that detects imminent failure on the NASA C-MAPSS turbofan benchmark. All methods share one open implementation, architecture, initialization, optimizer, data split and training budget, and the primary endpoint uses one terminal window per test engine to avoid the statistical dependence of overlapping windows. On FD001 (five seeds), gossip reached a terminal-window F1 of 89.6 +/- 1.3%, compared with 89.9 +/- 1.1% for FedAvg, 83.6 +/- 6.7% for local training and 93.5 +/- 2.1% for centralized training, while transmitting the same payload as FedAvg without a coordinator. Node models agreed closely but not exactly (1.8% pairwise decision disagreement versus 5.6% without communication). Across FD002-FD004, peer communication improved terminal-window F1 over local training by 13-28 points; gossip matched FedAvg on FD003 and FD004 but was 4.3 points lower on the multi-condition FD002 subset. Simulated message loss, node failure and server outage changed neither method appreciably, whereas larger rings degraded gossip faster. Ring gossip is therefore a practical serverless alternative when data heterogeneity is moderate, and faster-mixing topologies become important as heterogeneity grows.

56. [HeadGuard: Selective Head Protection for Low-Bit VLM KV-Cache Quantization](https://arxiv.org/abs/2609.35800)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35800v1 Announce Type: new Abstract: Low-bit key-value (KV) cache quantization saves storage but can sharply degrade vision-language model (VLM) accuracy. We introduce HeadGuard, a composable head-protection method that augments a base KV-cache quantizer with a fixed high-precision mask. Image-sensitivity and output-sensitivity scores select physical KV heads offline, with approximately 1/8 protected in the main experiments; their image keys and optionally values remain in bfloat16 (BF16), while the base quantizes unprotected image entries. Across eight VLMs, three base quantizers, and eight benchmarks (six discriminative and two generative), HeadGuard recovers a substantial fraction of lost accuracy on weaker quantizers, with the strongest gains for Qwen and InternVL. At 2 bits, the six-task discriminative mean over eight models rises from 0.436 to 0.580 on the weakest base; protection can also improve generated answers and caption fidelity to BF16 outputs. Mean accuracy gains persist across all three quantizers with both tested calibration datasets. Keys-only protection retains substantial recovery at lower modeled storage cost. Evaluated through simulated quantization, HeadGuard offers a composable way to improve low-bit VLM accuracy without replacing the underlying quantizer.

57. [Position: Let's Strengthen Verifiability If We Can't Enforce Reproducibility](https://arxiv.org/abs/2609.35854)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35854v1 Announce Type: new Abstract: In the field of Machine Learning, many papers contain empirical results supporting claimed statements or illustrating the performance of a proposed method. However, most practitioners know that (1) results are generally hard to reproduce, and increasingly so, (2) code is not often available to do so, and (3) it hinders the development of research. In this position paper, we analyze and quantify these issues, and make concrete proposals to improve result checkability, if not reproducibility. Code and supporting materials are available at https://github.com/giddyyupp/position-enforce-verifiability.

58. [Mara Chain: Rethinking Failure as a Stepping Stone for AI System Auto-Evolution](https://arxiv.org/abs/2609.35855)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.35855v1 Announce Type: new Abstract: Optimizing deployed AI systems increasingly amounts to editing prompts, skills, harnesses, and code rather than model weights. Existing approaches commonly optimize these artifacts through propose-evaluate-select procedures, where candidate configurations are evaluated and only those meeting an acceptance criterion are selected. Yet our analysis shows that discarded candidates often contain information critical for subsequent optimization. Discarding them causes later proposals to revisit the same failure modes. We introduce Mara Chain, a refinement procedure that turns rejected candidates into stepping stones. Rather than discarding a rejected candidate, Mara Chain retains and iteratively refines it using evidence accumulated across preceding attempts. The procedure limits each refinement chain to a fixed depth and applies Pareto-filtered Top-N selection to bound the candidate pool. Across AppWorld skill optimization, TerminalBench 2.1 harness optimization, and MuSiQue retrieval-pipeline optimization, Mara Chain delivers greater task-performance gains with fewer rollouts. It outperforms GEPA, ACE, and SkillOpt-Lite by up to 20.5% in relative performance on AppWorld, reaching the target score with 65.5% fewer rollouts than GEPA. It improves the pass rate by 20.2 and 22.5 percentage points over AHE and Meta-Harness on TerminalBench 2.1, respectively, and improves MuSiQue test nDCG@10 and Recall@10 by 0.104 and 0.131 over a hand-written retrieval pipeline.

59. [Permeability and microcrack geometry: Dynamic loading induced evolution](https://arxiv.org/abs/2609.36075)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.36075v1 Announce Type: new Abstract: We propose a crack-geometry-based model for permeability evolution in rocks under dynamic loading. Accurate representation of permeability is important for fluid extraction and containment in geological formations, but remains challenging because low-porosity brittle rocks are highly sensitive to changes in pore geometry and connectivity, while dynamic permeability measurements are limited. Rock void space is represented as an evolving network of penny-shaped cracks with prescribed orientations. Permeability changes are described through crack microvariables including aperture, length, and crack distance. The model accounts for crack opening and closure, fracture-energy-driven propagation, plastic-strain-driven nucleation, coalescence after full connectivity is reached, and strain-rate-dependent fracture toughening. The evolving crack network directly modifies connectivity, fluid conductance, and preferential flow paths. The formulation is implemented in the GeoDyn hydrocode and evaluated under tension, shear, compression, and symmetric impact loading. Results show a strong relation between permeability and crack length, with crack propagation playing a major role in permeability enhancement. Permeability growth can nevertheless be limited by poor connectivity and crack closure. The model captures changes of several orders of magnitude depending on stress state, strain rate, crack orientation, and connectivity, consistent with observed behavior of brittle rocks under high strain-rate loading.

60. [Moment hierarchy and exact steady-state solutions in a Callaway lattice Boltzmann model for phonon hydrodynamics](https://arxiv.org/abs/2609.36146)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.36146v1 Announce Type: new Abstract: We analyze the moment hierarchy of a Callaway lattice Boltzmann model for phonon hydrodynamics and derive exact steady-state solutions for a driven planar channel with diffuse walls. The collision operator decomposes the population space into conserved, heat-flux, and fast kinetic sectors, whose coupling through streaming determines the transport response. For the two-dimensional, eight-velocity (D2Q8) lattice Boltzmann model, we derive a fully discrete closure that relates the heat flux to transverse kinetic moments. The higher-order transverse kinetic moment contains both a second-difference term and an explicit contribution from the imposed energy drop. Diffuse-wall population constraints then determine the heat-flux and kinetic-moment profiles without fitted parameters. The resulting solution reproduces the numerical bulk moment amplitudes and wall slip, while an exact wall relation separates the contribution of the higher-order moment from deviations from the leading gradient approximation. Finite-wave-number analysis further resolves the collision-sector mixing associated with longitudinal propagation. These results provide a unified description of collision relaxation, the moment hierarchy, and boundary response within the specified discrete model.

61. [Label-Permutation Symmetry and Stability in Oscillator Potts Machines](https://arxiv.org/abs/2609.36716)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.36716v1 Announce Type: new Abstract: Oscillator Potts machines (OPMs) provide a physics-inspired, energy-minimization framework for solving combinatorial optimization problems described by the $q$-state Potts Hamiltonian. Although OPMs may be viewed as multistate extensions of oscillator Ising machines (OIMs), here, we show that they exhibit dynamical properties absent in the binary case. Specifically, we derive a configuration-dependent local-stability condition for a recently proposed multiharmonic OPM formulation and show that configurations with the same Potts energy need not be dynamically equivalent. In particular, for $q\geq4$, permutations of the Potts labels can alter the Jacobian spectrum and, consequently, the regularization strength required to locally stabilize a given Potts configuration. Thus, different phase encodings of the same Potts solution can exhibit different local stability properties despite having identical Potts energies.

62. [From Bellissard's gap labeling to atomistic quasiperiodic bilayers](https://arxiv.org/abs/2609.36981)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.36981v1 Announce Type: new Abstract: Bellissard's framework uses covariant observables to describe aperiodic solids. We examine how butterfly-like spectra in twisted bilayers can be related to bulk gap labels and topological response. A bulk gap permits a spectral projector and an integrated density of states. A topological response requires an additional pairing of that projector. In an illustrative finite honeycomb bilayer, an exact second-moment identity isolates the interlayer contribution to spectral variance. Angle-resolved spectra, finite state counts, an uncoupled reference, and size and broadening checks show how coupling redistributes spectral weight without assigning a bulk gap label. We then examine the requirements for atomistic electronic-structure calculations, including nonorthogonal orbitals, projected densities of states, and basis functions that move during relative sliding. The resulting framework specifies the steps needed to connect atomistic spectra with bulk state counting and topological response.

63. [Conservation-Syndrome Quantum Error Correction for Lattice-Boltzmann Quantum Algorithms](https://arxiv.org/abs/2609.38129)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 30 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.38129v1 Announce Type: new Abstract: Reliable multistep quantum lattice-Boltzmann evolution requires controlling computational faults. When ideal collision preserves encoded mass and momentum exactly, changes in those charges can provide syndromes for selected faults at the post-collision checkpoint. A fault that shifts one population then leaves a unique mass-momentum residual labeled by the lattice velocity. A coherent reference register stores the expected charges, so the same test remains valid while the physical fluid charges vary across the lattice. Single bit flips on population number registers occupy disjoint syndrome sectors and satisfy the Knill-Laflamme condition. A state-vector demonstration on eighteen data qubits of the two-dimensional nine-velocity lattice (D2Q9) recovers that single-bit family to double-precision roundoff. Conservation still leaves a fifteen-dimensional kinetic nullspace on the three-dimensional nineteen-velocity lattice (D3Q19). Exact multiple-relaxation-time (MRT) streaming analysis ranks those charge-preserving modes by the order at which they return to density or momentum. A classical D3Q19 decaying-flow simulation at moderate Reynolds number then injects about $1.75\times10^4$ selected single-population shifts per realization. Recovery of that alphabet returns the trajectory to floating-point roundoff. The quantum statements assume an ideal charge-preserving collision and a reliable reference. The result is an inner recovery map for a stated charge-changing alphabet together with a kinetic classification of the unresolved sector.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.76; Date: 2026-09-30T08:23:23Z; Popularity: 760 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

66. [Launch HN: Vespper (YC F24) – SOTA Docx MCP](https://www.vespper.com/blog/launching-vespper-docx-mcp)
   - Source: Hacker News; Group: Tech community; Score: 2.37; Date: 2026-09-28T17:34:36Z; Popularity: 36 points, 17 comments
   - Summary: HN discussion: 36 points, 17 comments.

67. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.32; Date: 2026-09-30T18:09:37Z; Popularity: 1,321 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

68. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-29T10:00:25Z; Popularity: 235 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

The Price of Token Boundaries: Compression Certificates and Prediction

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.35869

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
