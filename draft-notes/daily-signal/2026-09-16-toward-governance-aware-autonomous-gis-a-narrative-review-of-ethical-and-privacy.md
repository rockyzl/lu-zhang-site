# Daily signal sidecar - 2026-09-16

## Selected Signal

- Title: Toward Governance-Aware Autonomous GIS: A Narrative Review of Ethical and Privacy Risks in LLM-Enabled GeoAI
- URL: https://arxiv.org/abs/2609.16232
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: Toward Governance-Aware Autonomous GIS: A Narrative Review of Ethical and Privacy Risks in LLM-Enabled GeoAI
- Primary source: https://arxiv.org/abs/2609.16232
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

Total candidates reviewed after duplicate-source filtering: 63

1. [Toward Governance-Aware Autonomous GIS: A Narrative Review of Ethical and Privacy Risks in LLM-Enabled GeoAI](https://arxiv.org/abs/2609.16232)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16232v1 Announce Type: new Abstract: Geospatial artificial intelligence (GeoAI) powered by large language models (LLMs) is expanding the capacity to query, generate, and interpret spatial information through natural-language interfaces and agentic autonomous GIS workflows. This capability creates governance challenges that general AI ethics discussions do not fully capture, including passive location inference from mobility traces, spatially structured bias amplification driven by spatial autocorrelation and scale effects, hallucinated spatial facts, and uncertainty compounding across multimodal geospatial inputs. This narrative review identifies eight recurring issues in LLM-enabled GeoAI: data provenance and consent, spatial privacy and inference risk, algorithmic bias and spatial inequity, spatial mechanisms as structural risk (spatial autocorrelation, the modifiable areal unit problem, and scale effects), LLM-specific technical risks, explainability, policy and regulatory gaps, and public enablement and workforce development. For each issue, we characterize the underlying mechanism, ground it in an illustrative example from the literature, and assess the current state of technical or institutional responses, ranging from largely unaddressed to actively debated or subject to emerging policy. Building on this synthesis, we propose a governance-aware architecture for LLM-enabled autonomous GIS that maps each issue to enforceable controls and auditable artifacts across the geospatial data lifecycle, illustrated through a worked flood-response routing scenario. The review highlights a persistent evidence gap: proposed responses remain largely conceptual, and field-tested evaluations of governance controls for LLM-enabled GeoAI remain limited. We close by outlining a research agenda emphasizing empirical validation, spatially specific interpretability tools, and workforce training aligned with these emerging risks.

2. [Artificial intelligence and biosecurity: capabilities, threat pathways, and defense-in-depth governance](https://arxiv.org/abs/2609.16213)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16213v1 Announce Type: new Abstract: Artificial intelligence is reshaping biological research across an increasingly connected digital-to-physical workflow. General-purpose large language models can retrieve and integrate scientific information, support experimental planning, and computational analysis; biological foundation models can predict, optimize, and generate proteins, genes, and genome-scale sequences; agentic systems can coordinate multistep research tasks; automated laboratories can partially close the design-build-test-learn cycle. These technologies could greatly benefit medicine, public health, and biotechnology. However, their biosecurity risk depends not only on what the AI can do, but also on who uses it, their expertise and intent, their access to laboratory tools and materials, and the safeguards in place. Current evidence shows that AI uplift exists but primarily affects digital rather than physical tasks. Frontier systems have exceeded expert baselines on in-silico, and screening-evasion benchmarks, whereas controlled wet-laboratory studies find that tacit knowledge and physical execution remain substantial barriers. This review describes the different biological threats from AI tool use, from information gathering and biological design to procurement, synthesis, testing, scale-up, and potential release. We further examine why alignment techniques for general-purpose models transfer poorly to biological ones, and the emerging role of interpretability in auditing whether hazardous capabilities are genuinely removed. We argue for defense-in-depth governance that links capability thresholds to proportionate responsibilities across the biological AI ecosystem, reducing high-consequence risk while preserving beneficial use.

3. [Metacognitive Steering: Learning the Structure of Scientific Judgment](https://arxiv.org/abs/2609.16245)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16245v1 Announce Type: new Abstract: Long-horizon scientific discovery requires agents to alternate between exploration, disciplined execution, and critical reassessment as evidence changes. Current language models are trained primarily on the products of science and optimized using outcome-level signals, providing limited supervision for these process-level shifts in scientific judgment. We investigate whether such judgment can be recovered from scientist interaction traces and used to control the internal computation of a frozen frontier model. Using contrastive interventions collected during real scientific research, we identify a coordinated, low-dimensional control structure within Kimi 2.6, a trillion-parameter mixture-of-experts model. Residual analysis, attention-weight subspace alignment, and cross-layer singular value decomposition converge on a mid-depth control surface spanning key layers. We introduce Metacognitive Steering, an inference-time controller that reads the model's cognitive regime and dynamically composes layer-specific interventions for exploration, procedural convergence, or critical reassessment without modifying model parameters. Behavioral analyses show that this control produces more sustained exploration, explicit pruning, and evidence-responsive synthesis. We operationalize the method in Columbus-1, an autonomous research system that identified eight independently reproduced, attacker-reachable vulnerabilities in BlueZ and directed the design, simulation, and fabrication of a ten-foot rocket intended to land propulsively using non-throttleable solid motors. Together, these results show that process-level scientific judgment can provide supervision for interpretable, dynamic control over a model's reasoning strategy.

4. [Safe Error Correction for Language Models: Frozen-Base Adjustment with Capability Preservation](https://arxiv.org/abs/2609.16145)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16145v1 Announce Type: new Abstract: We study a practical question: can a small correction module fix errors in a frozen language model's outputs without degrading its base capabilities? We propose CRN v2, a lightweight logit-level correction module (~34M trainable parameters, 0.73% of the 4.65B text module) that sits atop a fully frozen Gemma 4 E2B model. The base model is never updated; only the correction module learns, via supervised fine-tuning followed by reference-free DPO on 83,400 error-correction pairs. On a 60-question domain exam (CEHRI: Certified Human-Robot Intelligence, covering facts, arithmetic, and implicit-goal reasoning), CRN v2 corrects 53.3% of base-model errors (reworded variant: 43.3%) while showing no degradation on tested capability benchmarks (MMLU/BoolQ N=200; car-wash N=8). A LoRA baseline at the matched CRN v1 budget (6.6M params, rank 19) achieves 83.3% correction but suffers 30-75% capability loss on the same benchmarks -- the correction-capability tradeoff. An ablation shows that the KL preservation term (lambda=0.1) is critical: lowering it to 0.01 degrades correction to 35.0%. A hidden-state injection variant at earlier layers (1.6M params, SFT-only) reaches 50.0%/55.8% but does not exceed logit correction; shallower injection (layer 4) drops to 30.0%/28.3%; multi-depth logit correction (~35M) reaches only 40%; and longer training (5,000 SFT + 2,000 DPO) stays at 53.3% -- none of the alternative configurations we tested exceeded the rank-128 logit result, consistent with a best-achieved result of ~53% rather than a floor. This is a study of a design principle (frozen base + logit correction + KL anchoring), not a claim of architectural novelty. All code, main-result weights, and evaluation scripts are released (deep variant as code only -- no trained deep checkpoints).

5. [Rebuilding AUTOMATIC1111 with Gradio Workflow](https://huggingface.co/blog/gradio-workflow-1111)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

6. [GPEvac: GNN-Based PPO for Adaptive Evacuation Routing During Shooting Events](https://arxiv.org/abs/2609.16163)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16163v1 Announce Type: new Abstract: The sharp increase in mass shootings underscores an urgent need for systems that guide victims to safety in real time. An effective evacuation system must minimize threat exposure while also accounting for adversarial uncertainty and crowding dynamics. Current methods in the literature are rigidly constrained to layout-specific policies and computationally intractable in large-scale layouts, while practical guidelines simply advise victims to "run", "hide", or "fight". We propose GPEvac: a GNN-based PPO framework that computes adaptive evacuation routes during shooting events. To capture both local and long-distance dependencies, we introduce an edge-first sequential message-passing scheme with a learnable virtual global node. The resulting graph embeddings are integrated into a permutation-invariant scoring mechanism that allows a single learned policy to operate across building layouts of diverse topologies and sizes. Through extensive simulation, we show that GPEvac outperforms intelligent baselines across distinct architectural layouts, significantly reducing total threat exposure. Crucially, the system computes global evacuation routes in just 14.73 ms on local CPU hardware, enabling seamless integration with live surveillance systems. In addition to saving lives during shooting events, the methodologies developed are transferable to other graph-structured decision-making domains, including critical infrastructure, intelligent transportation systems, and adaptive sensor networks.

7. [Position: AI Is Not Ready for Strategic Conflicts](https://arxiv.org/abs/2609.16189)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16189v1 Announce Type: new Abstract: Open-ended strategic wargames are high-stakes LM-based social simulations: they model adversaries, institutions, escalation, plan brittleness, doctrine, and crisis response. Language models (LMs) are attractive because they can play agents, generate scenario branches, adjudicate ambiguous actions, and summarize lessons, but the same affordances make open-ended roles dangerous: model language determines both what an actor attempts and what becomes simulated reality. This position paper argues that no LM-enabled wargame should inform planning, doctrine, policy, or crisis response without an auditable safety case, and that the proper use of open-ended wargames today is to stress-test decision-influencing LM agents. We identify five failure modes: decision laundering, adjudication opacity, role collapse, escalation-through-adjudication, and failure of strategic imagination. Ordinary benchmarks cannot establish safety for these settings. Wargames can expose failures as stress tests; they are not themselves safety cases for consequential use.

8. [Where Should the KV Cache Live? Placement Policies Across GPU, CPU, and SSD for Long-Lived Sessions](https://arxiv.org/abs/2609.16215)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16215v1 Announce Type: new Abstract: GPU high bandwidth memory is scarce and expensive, and KV caches consume much of it as chats, agent loops, and document question answering accumulate state. Systems such as Mooncake, LMCache, FlexGen, InfiniGen, and AttentionStore extend GPU memory with CPU DRAM and SSD. The harder question is which blocks belong in each tier, when to move or evict them, and whether prefetching helps. We study these choices in a discrete event simulator spanning GPU HBM, CPU DRAM, and SSD, calibrated against a random forest execution time predictor. We compare recency, reuse frequency, predicted reuse, and an EWMA predictor with prefetch lookahead across chat, agent, and document question answering workloads. Tiering supports 73.02 times more concurrent sessions per GPU and lowers cost per session by 62.04 times. These gains come from tier capacities of 1 plus 8 plus 64, not placement policy. Decode is compute bound at batch size one in our setup, so placement barely affects throughput. It mainly changes PCIe migration traffic and time to first token. Recency produces 2.30 times less migration traffic than reuse frequency for chat. Reuse frequency performs best for agents and document question answering. The existing predicted reuse policy is byte identical to recency, making its agent recommendation effectively recency. A genuine EWMA predictor changes behavior but still ranks behind reuse frequency on the workloads prediction was expected to help. Prefetching does not justify its bandwidth cost. Across the policy and cache size grid, even an oracle with knowledge of future requests never beats no prefetch on migration traffic. Workload specific placement can reduce data movement, but the predicted reuse and prefetch recommendations are not supported as implemented.

9. [Managing Action Preconditions in Neuro-Symbolic RL: Three Placement Strategies for Embodied Agents](https://arxiv.org/abs/2609.16056)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16056v1 Announce Type: new Abstract: Humans carry behaviour knowledge of how to act in familiar situations into every new task rather than relearning it from scratch. There is no reason a Reinforcement Learning (RL) agent shouldn't do the same: known behaviour patterns need not be learned, only applied. Neuro-symbolic RL bridges prior knowledge and RL by injecting symbolic knowledge alongside a learned policy. The point at which this knowledge is integrated is critical: a poor choice can produce, for instance, hallucinated preconditions, which surface as safety and reliability problems in agents acting in changing environments. We formalise this behavioural knowledge as a precondition Bayesian network (BN) over the agent's \emph{structural actions} - the actions whose legality depends on preconditions, such as picking up a key, grasping a block, toggling a door, or dropping an object. The BN restricts when these actions may fire, and we inject it into the RL loop at three placements: (1) a \emph{symbolic verifier}, consulted only at inference, that fires a structural action once its preconditions hold; (2) a \emph{symbolic enforcer}, active during both training and inference, that governs structural-action use throughout learning; and (3) a \emph{symbolic learner}, which folds the knowledge into the network and learns the restriction and use of structural actions itself. To test the three variants we run experiments on two benchmarks with opposite regimes: one built on long, ordered planning chains, the other on continuous manipulation. We compare against strong baselines on solution quality, sample efficiency, and traceability. The payoff is substantial. On MiniGrid, all three placements improve the \emph{solution quality} over the PPO+RND baseline, the symbolic enforcer leading at $98.2\%$ against the baseline's $88.8\%$. On Fetch, $\dots$

10. [Helping older adults use AI in everyday life](https://openai.com/index/helping-older-adults-use-ai-in-everyday-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 16:00:00 GMT
   - Summary: OpenAI and AARP are bringing free, hands-on ChatGPT workshops to 1,000 older adults across 10 U.S. cities to build practical AI skills safely.

11. [Reimagining advertising with AI](https://openai.com/index/reimagining-advertising-with-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 13:00:00 GMT
   - Summary: Explore new AI-powered advertising experiences from OpenAI, including Sponsored Agents, tools for marketers, and integrations with HubSpot and Shopify.

12. [How workers are unlocking new ways of working](https://openai.com/index/unlocking-new-ways-of-working)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 09:00:00 GMT
   - Summary: New OpenAI Economic Research shows how workers use AI beyond traditional roles and which new activities become recurring parts of their work.

13. [How Fyxer built an AI executive assistant people trust](https://openai.com/index/fyxer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 12:00:00 GMT
   - Summary: Fyxer uses OpenAI models, fine-tuning, memory, and real user feedback to organize inboxes and draft emails in each user’s voice.

14. [Perplexity trusts GPT-6 Astra with end-to-end systems](https://openai.com/index/perplexity-improving-accuracy-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 GMT
   - Summary: Perplexity uses Astra to write communications, change software, and monitor production systems, and checks in much less frequently than with earlier models.

15. [Cognition helps Devin test its own work with GPT‑6 Astra](https://openai.com/index/cognition-devin-testing-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 11 Sep 2026 16:00:00 GMT
   - Summary: GPT‑6 Astra improves Devin’s ability to test software and show that it works, with the goal of helping engineers review less code and ship more.

16. [How a researcher uses Codex and ChatGPT to search for new antimicrobial molecules](https://openai.com/index/using-codex-chatgpt-to-search-for-new-antimicrobials)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 16:00:00 GMT
   - Summary: César de la Fuente’s lab uses Codex and ChatGPT to search living and extinct genomes for antimicrobial candidates to fight drug-resistant infections.

17. [Now everyone can put data to work](https://openai.com/index/put-data-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 15:00:00 GMT
   - Summary: Meet the Data agent in ChatGPT Work. Connect company data, uncover insights, and build interactive dashboards with AI using natural language.

18. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

19. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

20. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

21. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

22. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

23. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

24. [Safety for Whom? Refusing the Right Subset of a Topic, Not the Whole Topic](https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 08 Sep 2026 14:23:07 GMT

25. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

26. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

27. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

28. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

29. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

30. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

31. [Optimal Pruning for Neural Architectures using Fisher Information Distances](https://arxiv.org/abs/2609.16129)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16129v1 Announce Type: new Abstract: A new scheme for parameter pruning is introduced, derived from the differential-geometric distance in model space. Pruning a parameter sets its value to zero, representing a displacement of the model to the hypersurface on which that parameter vanishes. The minimal distance from the unpruned model to this hypersurface is naturally computed via the geodesic distance in the model space as determined by the Fisher information metric. This distance determines the true change in the model, and its performance, under pruning. By analysing progressively more faithful approximations of this geodesic distance a natural hierarchy of optimality for pruning methods is determined. This starts with the traditional magnitude pruning, then develops into new more sophisticated and effective pruning schemes. The method is demonstrated for both fully-connected networks and vision transformers, on MNIST and CIFAR-10, over the complete $0$-$100\%$ pruning range and across five random seeds. It outperforms pruning by parameter magnitude and by the local Fisher information alone in every architecture and dataset combination considered, on both accuracy and the Matthews correlation coefficient. Additionally, analysis of different levels of geodesic approximation produces intermediate pruning schemes that are computationally efficient and maintain near-optimal performance. This geometric picture supplies not only a state-of-the-art pruning methodology for AI models, but also a verified and mathematically-motivated justification for pruning schemes.

32. [Calibrate, Then Route: A Measured Study of Learned Request Routing for Disaggregated LLM Serving](https://arxiv.org/abs/2609.16206)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16206v1 Announce Type: new Abstract: Disaggregated LLM serving places compute heavy prefill and memory heavy decode on separate GPU pools. Systems such as DistServe, Splitwise, and Mooncake make this separation fast, but routing still determines which instances handle each request. We study a router that estimates the additional completion time on each instance using exact prompt length, predicted output length, post admission KV cache pressure, and SLO class. We develop the policy in a discrete event simulator and validate it on eight NVIDIA A40 GPUs, each running a vLLM engine, with NIXL transferring KV caches between pools. All workloads run at measured saturation. Across three mixed, bursty arrival traces, the calibrated router achieves the highest mean goodput at 0.864, compared with 0.835 to 0.847 for round robin, least loaded, and a length heuristic. It also shows the lowest variance across traces. It beats round robin and the length heuristic on all three traces and least loaded on two. On the third, it trails by 0.003, within run to run noise. Hardware calibration matters: simulator derived constants cost 4.5 goodput points and roughly 40 percent of the tail latency advantage, reducing the scorer to little more than queue counting. Benefits grow with decode pool size and traffic heterogeneity but disappear in pools with three instances, where queue counts are often enough. Under extreme scarcity, greedy cost minimization concentrates requests on the cheapest scored instance, and blind spreading performs better. With calibrated costs, the learned router matches the goodput of round robin using six GPUs instead of seven.

33. [The Pain Axis: LLMs Represent Self-Directed Harm and Act to Relieve It](https://arxiv.org/abs/2609.16247)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16247v1 Announce Type: new Abstract: Large language models sometimes behave in ways resembling human emotional responses, and recent work has identified internal representations that may explain this. We ask whether LLMs represent pain distinctly from fear, sadness, and generic negative valence, and whether this representation functions as pain would be expected to. We build a dataset describing painful situations across five categories: physical, psychological, social, moral, and cognitive. These are paired with controls for fear, negative emotion, negative world states, sadness, non-painful bodily sensation, arousal, numbness, and neutral content. Using denoised difference-in-means, we extract a linear pain direction from 25 open-weight models across five families, ranging from 2B to 72B parameters. We find that this direction separates pain from matched controls in base and instruction-tuned models, is nearly orthogonal to fear and negative valence, and promotes pain-related vocabulary through the unembedding matrix. We then test its functional properties. First, the direction responds to harm targeting the model but not suffering observed in the user; fear and negative-emotion directions show the opposite pattern. Second, adding the pain-direction vector to the model's residual-stream activations during generation produces a consistent progression from vague discomfort to first-person expressions of worthlessness and failure. Third, steered, fine-tuned Qwen 2.5 models choose a pain-relief button even when it worsens their next answer or harms the user. They press it again far less often when the button removes the steering vector than when it does not, even though the models are never told whether the vector is injected or removed. We discuss the implications of these findings for AI safety and welfare.

34. [You Don't Need To Train: Agentic Heuristic Learning Studio for Executable Human Activity Recognition](https://arxiv.org/abs/2609.16065)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16065v1 Announce Type: new Abstract: Human activity recognition (HAR) is usually framed as gradient-based training of neural networks. Agentic Heuristic Learning (AHL) Studio explores a complementary view inspired by human cognitive learning: people learn activities by remembering examples, forming rules, and repairing mistakes, not by backpropagating. This proposed tool implements AHL for HAR: a learning-time agent reasons over sensor protocols, proposes executable heuristic policies, records repair traces, and exports an LLM-free policy for edge deployment. We focus on the HAR benchmark family and provide an end-to-end workflow from dataset observation to edge-oriented export. On eleven HAR datasets evaluated so far, AHL policies reach strong executable-policy performance while remaining inspectable, editable, and replayable \footnote{https://github.com/zhaxidele/ahl-ts-studio}.

35. [A panoramic aerodynamic performance prediction method for turbomachinery cascades using transformer-enhanced neural operator](https://arxiv.org/abs/2609.16066)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16066v1 Announce Type: cross Abstract: To enable flexible and rapid aerodynamic performance evaluation in turbomachinery design, this paper proposes a panoramic performance prediction framework. Unlike most previous prediction models that directly predict the objective functions of interest, our approach first predicts the basic parameters of the Navier-Stokes equations, such as temperature, pressure, and density. Utilizing these basic physical quantities, it subsequently predicts key performance parameters of the turbine stage meridian plane. By adopting this methodology, our proposed panoramic performance prediction framework functions similarly to a CFD simulator, capable of predicting various objective of interest to the designers. To enhance prediction accuracy, a transformer-enhanced neural operator (TNO) is introduced within this framework. Using the Rotor 37 blades as a reference, the proposed TNO is trained to predict the performance of a transonic compressor blade in the meridian plane. The TNO can accurately predict total quantities such as isentropic efficiency, mass flow, and distributions of total pressure ratio. Remarkably, the prediction error of TNO is observed to be smaller than that of state-of-the-art deep learning operators such as the FNO and DeepONet. Furthermore, the TNO is applied to downstream tasks, including sensitivity analysis and optimization of various objective functions. The results confirm that the TNO can operate almost like a CFD simulator, while reducing the computational cost of downstream tasks by four orders of magnitude. The effectiveness and reliability of the proposed TNO for solving different kinds of downstream tasks have been well demonstrated.

36. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.89; Date: 2026-09-16T13:28:35Z; Popularity: 1,886 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

37. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-15T07:56:05Z; Popularity: 486 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

38. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-16T02:14:34Z; Popularity: 364 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

39. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-14T03:11:45Z; Popularity: 246 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

40. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

41. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

42. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

43. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

44. [OmniHarness: Harnessing Generalizable Visual Generation via Symbolic Policy Learning](https://arxiv.org/abs/2609.16057)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16057v1 Announce Type: new Abstract: Unified multimodal large language models (MLLMs) and multi-agent systems have advanced visual generation. However, three limitations remain. (1) Existing methods often distill task-specific experience with limited generalizability. (2) Reflection is often deferred until task completion. (3) Knowledge is often acquired only in response to downstream task demands. To address these limitations, we introduce OmniHarness, a framework for generalizable visual generation via symbolic policy learning. OmniHarness abstracts verified executions into symbolic policies for visual generation task families, capturing shared procedures and applicability conditions while removing instance-specific inputs. The harness instantiates, adapts, and composes these policies for new tasks. Intermediate verification guides refinement and failure recovery during execution. Through self-directed inquiry, OmniHarness autonomously generates and executes practice tasks near its capability limits before downstream objectives are specified. Execution feedback continually refines the policies while model parameters remain fixed. Experiments across six benchmarks, three MLLM backbones, and three visual agent frameworks demonstrate strong performance and continual capability expansion. On ComfyBench's Creative tasks, OmniHarness achieves a 95.0% resolve rate, exceeding the strongest baseline by 27.5 percentage points. Frozen policy snapshots improve existing visual agent systems through plug-and-play reuse.

45. [HintMiner: Automatic Question Hints Mining From Q&A Web Posts with Language Model via Self-Supervised Learning](https://arxiv.org/abs/2609.16060)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16060v1 Announce Type: new Abstract: Users often need ask questions and seek answers online. The Question - Answering (QA) forums such as Stack Overflow cannot always respond to the questions timely and properly. In this paper, we propose HintMiner, a novel automatic question hints mining tool for users to help them find answers. HintMiner leverages the machine comprehension and sequence generation techniques to automatically generate hints for users' questions. It firstly retrieve many web Q\&A posts and then extract some hints from the posts using MiningNet that is built via a language model. Using the huge amount of online Q\&A posts, we design a self-supervised objective to train the MiningNet that is a neural encoder-decoder model based on the transformer and copying mechanisms. We have evaluated HintMiner on 60,000 Stack Overflow questions. The experiment results show that the proposed approach is effective. For example, HintMiner achieves an average BLEU score of 36.17\% and an average ROUGE-2 score of 36.29\%. Our tool and experimental data are publicly available.

46. [A panoramic aerodynamic performance prediction method for turbomachinery cascades using transformer-enhanced neural operator](https://arxiv.org/abs/2609.16066)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16066v1 Announce Type: new Abstract: To enable flexible and rapid aerodynamic performance evaluation in turbomachinery design, this paper proposes a panoramic performance prediction framework. Unlike most previous prediction models that directly predict the objective functions of interest, our approach first predicts the basic parameters of the Navier-Stokes equations, such as temperature, pressure, and density. Utilizing these basic physical quantities, it subsequently predicts key performance parameters of the turbine stage meridian plane. By adopting this methodology, our proposed panoramic performance prediction framework functions similarly to a CFD simulator, capable of predicting various objective of interest to the designers. To enhance prediction accuracy, a transformer-enhanced neural operator (TNO) is introduced within this framework. Using the Rotor 37 blades as a reference, the proposed TNO is trained to predict the performance of a transonic compressor blade in the meridian plane. The TNO can accurately predict total quantities such as isentropic efficiency, mass flow, and distributions of total pressure ratio. Remarkably, the prediction error of TNO is observed to be smaller than that of state-of-the-art deep learning operators such as the FNO and DeepONet. Furthermore, the TNO is applied to downstream tasks, including sensitivity analysis and optimization of various objective functions. The results confirm that the TNO can operate almost like a CFD simulator, while reducing the computational cost of downstream tasks by four orders of magnitude. The effectiveness and reliability of the proposed TNO for solving different kinds of downstream tasks have been well demonstrated.

47. [A Dynamic Aggregation Strategy Enhanced Efficient Global Optimization Algorithm for Solving High-Dimensional Turbomachinery Design Problems](https://arxiv.org/abs/2609.16067)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16067v1 Announce Type: new Abstract: In order to solve the high-dimensional ($d \geq 30$) expensive black-box problems within budget, an efficient global optimization (EGO) algorithm with a dynamic aggregation strategy is proposed, labeled as DA-EGO. Specifically, the DA-EGO decomposes the original high-dimensional design space into a set of low-dimensional subspaces for efficient surrogate-based optimization search, and the optimal solutions of subspaces are combined as an elite point for the global search. Most importantly, the subspaces are not fixed. Instead, the subspace variables are updated in each iteration, according to the variable interaction analyses in the sub- and full-spaces. The perturbation method and the analysis of variance are used to detect variable interactions. To further accelerate the optimization progress, the searching ranges of subspaces are also adaptively adjusted according to the analyses of subspace optimization results of the previous iteration. Tests on 21 benchmark instances, comprising seven functions at 30, 60, and 90 dimensions, show that DA-EGO is effective on separable and partially separable problems under a budget of 1500 function evaluations. Its advantage is case-dependent: on the non-separable shifted Rosenbrock function, GSGA performs better at 60 and 90 dimensions, while the 30-dimensional results are statistically comparable to IKAEA and GSGA. Moreover, the advantage of DA-EGO is also seen in the aerodynamic optimization of a transonic rotor blade with 28 variables as well as the compressor stage optimization with 60 variables. With the above, the effectiveness of the proposed DA-EGO has been well demonstrated.

48. [A Gradient-Reconstruction Lattice Boltzmann Method for Compressible Navier--Stokes--Fourier Equations](https://arxiv.org/abs/2609.16361)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16361v1 Announce Type: new Abstract: Reaching compressible flow has usually forced lattice Boltzmann methods to abandon the compact stencil or the strict locality that make them efficient. We give up neither, solving the compressible Navier--Stokes--Fourier equations with a scheme that transports only the conserved mass, momentum and energy. The viscous stress and heat flux depend on gradients of the velocity and temperature. To capture them, existing compressible schemes go beyond a single lattice of the conserved fields. They enlarge the velocity set, carry the stress and heat flux as extra transported fields, place the energy on a separate grid, or give up exact streaming for an off-lattice advection. We instead recover the gradients from the non-equilibrium part of the distributions already present, inside the collision. No field beyond the conserved state is transported, no neighbour is read, streaming stays exact, and every computation runs in single precision. The method carries five fields where a transported-flux scheme carries fourteen, at a fraction of the memory and $4.9$ times the throughput. Verified against the exact Sod and Becker shock solutions and a supersonic Taylor--Green vortex, it tracks the direct-numerical-simulation reference on the kinetic energy and stays within the reference-solver spread on both dissipation rates.

49. [Highly Parallel Real-Space Random Phase Approximation Using Lanczos Quadrature and Interpolation](https://arxiv.org/abs/2609.16408)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16408v1 Announce Type: new Abstract: We present a highly parallelizable, matrix-free, real-space method for computing the random phase approximation (RPA) correlation energy within Kohn-Sham density functional theory. In particular, we avoid the explicit construction and eigen-decomposition of the response function matrix and use Lanczos quadrature to evaluate the trace of a matrix function on a real-space grid. We also show it is possible to exploit the spatial smoothness of the RPA correlation energy density in real-space to reduce computational cost. Specifically, we compute the energy density on a coarse grid, then reconstruct an approximation to the full, fine grid via interpolation. We implement this formulation within the SPARC electronic structure package and demonstrate its convergence, accuracy, agreement with planewave results, and scaling. Interpolation can enable an $8\times$ reduction in the computational prefactor. Given the embarrassingly parallel nature of the proposed method, we achieve near-ideal speedups and near-cubic scaling, thus allowing us to compute the RPA correlation energy for a silicon system with 256 valence electrons at chemical accuracy in less than 30 minutes on 4,096 CPU cores.

50. [Implicit Lagrangian Hydrodynamics with High-Order Finite Elements](https://arxiv.org/abs/2609.16424)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16424v1 Announce Type: new Abstract: We present an implicit time integration capability for high-order curvilinear finite element Lagrangian hydrodynamics. Starting from an existing explicit formulation, the implicit treatment builds directly on the original discretization and operator structure and does not alter the underlying spatial formulation or physics model. We demonstrate our implementation using the Laghos miniapp, which is built on the MFEM finite element library. To support gradient-based nonlinear solution methods, we compute Jacobian actions automatically using MFEM's $\partial$FEM interface together with Enzyme-based automatic differentiation, and apply the resulting Jacobian in a matrix-free or fully-assembled manner within a Newton-Krylov solver. To ensure robust and differentiable nonlinear solves in the presence of shocks, we introduce a smooth artificial viscosity treatment based on smooth approximations of non-differentiable pointwise operations. The differentiable artificial viscosity presently lacks a limiter to ensure high-order scaling away from shocks, but is sufficient for illustrating the benefits of implicit Lagrangian hydrodynamics. The behavior and performance of the implicit method are demonstrated on several standard benchmark problems. We verify high-order convergence on the smooth Taylor-Green vortex in the absence of artificial viscosity, show correct strong-shock behavior on the Sedov blast problem, and obtain significant improvements in accuracy-per-time-to-solution on the Triple Point problem where explicit stability constraints become increasingly severe for high-order discretizations.

51. [An energy stable and accuracy-preserving finite volume scheme based on the SAV method with application to wall-distance computation](https://arxiv.org/abs/2609.16885)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16885v1 Announce Type: new Abstract: A novel semi-implicit second-order finite volume scheme integrating the scalar auxiliary variable (SAV) approach is proposed for solving the pseudo-time Eikonal equation in wall-distance computation. Unconditional energy stability under zero boundary conditions is rigorously proved, eliminating the dependence of the time step on the grid scale and enabling large-time-step computation. The scheme is a priori accuracy-preserving, and its discretization matrix forms an M-matrix, thereby guaranteeing strict non-negativity of the numerical solution inherently. The framework extends readily to any non-conservative scalar equation and, being independent of the specific finite-volume reconstruction, is compatible with schemes of arbitrary order of accuracy. A vanishing artificial viscosity is introduced to smooth the solution without compromising formal accuracy, and upwinding is incorporated through directional weighting in the weighted least-squares (WLS) reconstruction. Numerical experiments confirm that the scheme achieves the designed accuracy and permits stable computations with uniformly large time steps. For complex configurations such as a three-element airfoil and the three-dimensional ONERA M6 wing, accurate results are obtained on high-aspect-ratio grids, with relative errors in the computed wall distance below 3\% relative to the search-based reference, except near geometric singularities.

52. [Adding slow magnetoacoustic mode to the HLL-type multi-state approximate Riemann solution](https://arxiv.org/abs/2609.17049)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.17049v1 Announce Type: new Abstract: Multi-state HLL-type approximate Riemann solutions of ideal magnetohydrodynamics (MHD) typically assume that the medium within the Riemann fan is incompressible, and thus the slow magnetoacoustic mode cannot be included in their space-time wave configurations for the approximated states. We propose a new strategy to design multi-state HLL-type approximate solutions, allowing for the medium within the Riemann fan to be compressible. In particular, for the complete seven-wave configuration of the MHD Riemann problem, we first estimate the slow magnetoacoustic speeds and a longitudinal flow speed between the slow modes, and then follow the conservation laws and Rankine-Hugoniot jump relations across the fast, Alfv\'en, and slow waves, to calculate all the intermediate states within the Riemann fan. Moreover, we discuss the solutions when certain wave modes degenerate, ensuring well-posedness and smooth transitions between complete and degenerate wave configurations. Numerical simulations using a Finite Volume (FV) solver show that the proposed approximate Riemann solution is less diffusive than the classic HLLD scheme, particularly for slow mode waves. For example, in a 1D test case with a strong longitudinal magnetic field, the new scheme needs one order of magnitude fewer grid cells compared to the classic HLLD scheme to resolve all wave modes.

53. [Improving Reduced-Order Rotating Detonation Engine Models with Data Assimilation and Machine Learning](https://arxiv.org/abs/2609.16237)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16237v1 Announce Type: cross Abstract: Rotating detonation engines (RDEs) exhibit strongly nonlinear, multiscale wave dynamics that set the observed thermal field. High-fidelity simulations (DNS/LES) resolve these structures but remain computationally prohibitive, while low-order models such as the one-dimensional Koch-Kutz model capture circumferential wave motion yet lack the expressivity for high-frequency content. We use continuous data assimilation (nudging) to synchronize the Koch-Kutz solver with processed high-fidelity temperature data, introducing the prediction-observation mismatch as a relaxation source in the conserved energy equation; where observations are temporally sparse, interpolation supplies a target at every source update. As the nudging strength increases, the reduced model is progressively drawn onto the high-fidelity trajectory, and the forcing recorded along it provides an explicit, state-dependent estimate of the correction the model requires. We then train a Jacobian-regularized closure a priori on this recorded source. With the observation term removed, the corrected model advances autonomously, remains bounded, and recovers the temperature spectrum and the marginal statistics of the conserved variables relative to the baseline.

54. [Characteristic Mapping Method for Vlasov-Poisson with BGK-collisions](https://arxiv.org/abs/2609.16328)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16328v1 Announce Type: cross Abstract: This work presents the first steps for simulating kinetic plasmas with collisions using the characteristic mapping method (CMM). The CMM is a semi-Lagrangian method that explores a semi-group structure to store diffeomorphic flow maps efficiently. Using the semi-group structure, individual submaps can be composed to relate the flow backward in time to its initial food point. The novelty of the presented work is handling the source term by storing sub-integrals that correspond to the individual sub-maps and allow efficient integration. Furthermore, we use the Lagrangian structure to avoid implicit time integration in the hydrodynamic regime, which is known to be stiff. We benchmark our method on the Boltzmann-BGK and Vlasov-Poisson-BGK equations and consider different test cases, the Sod shock tube problem and nonlinear Landau damping for different Knudsen numbers. We show third-order spatial and temporal convergence and illustrate the fine-scale zoom property of CMM for the bump-on-tail instability.

55. [Structure-Informed Data-Driven Reduced-Order Modeling of Scalar Hyperbolic Conservation Laws via Kinetic Defect Measure](https://arxiv.org/abs/2609.16525)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16525v1 Announce Type: cross Abstract: Reduced-order modeling of transport-dominated systems remains challenging because moving fronts and shocks are poorly represented by low-dimensional linear subspaces. We develop a structure-informed data-driven reduced-order model(ROM) for scalar hyperbolic conservation laws based on the kinetic defect formulation. This formulation separates the nonlinear dynamics into known characteristic transport and a kinetic entropy defect localized on the shock manifold. We exploit this structure by first removing the known transport from the solution snapshots. We then extract and register the remaining defect-driven dynamics in a shock-attached coordinate system. Separate ROMs are used to evolve the shock geometry and the registered defect-driven source. During prediction, the predicted shock geometry is used to inverse-register the learned defect-driven source, which advances the kinetic state and recovers the physical solution. Numerical examples in one and two spatial dimensions demonstrate accurate reconstruction and prediction of nonlinear transport with shocks, including evolution beyond the training interval, while accurately capturing the mass and entropy-dissipation behavior of the reference solution.

56. [Orbital-resolved superexchange and topological magnon bands in MXene Fe$_2$C](https://arxiv.org/abs/2609.16530)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 16 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.16530v1 Announce Type: cross Abstract: Magnetic MXenes are promising candidates for future spintronics due to their intriguing properties. Nevertheless, the topological properties of magnon bands and superexchange mechanism remain relatively underexplored. In this work, we have calculated the spin wave dispersions for MXene Fe$_2$C using the linear spin wave method, with the exchange coupling parameters obtained from first-principles calculations. Owing to the staggered stacking of two Fe sub-lattices, the interlayer exchange coupling lifts the degeneracy of the ferromagnetic magnon modes. A Dirac point is identified in the magnon bands at the $K$ point. The topological properties of magnon bands, including Berry curvature, valley Chern number and edge states, are further computed by means of a two-band model. We also derive an effective Hamiltonian to explain the magnonic topology, which is protected by the $C_{3v}$ rotational symmetry. To understand the microscopic origin of the exchange couplings that govern the magnon bands, we then construct a refined model integrating perturbation theory and the tight-binding approach. The ferromagnetic superexchange coupling is mediated by the virtual hopping between the d orbitals of two distinct Fe sites via a pair of orthogonal p orbitals at the bridging C site. In detail, the intralayer exchange coupling is governed by the in-plane $p_x$ and $p_y$ orbitals, while the out-of-plane $p_z$ orbital is responsible for the interlayer exchange coupling. Our results establish a direct link between the orbital-resolved anisotropic superexchange and topological properties of the magnon bands in magnetic MXene Fe$_2$C, providing theoretical guidance for future spintronics applications.

57. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

58. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-15T08:39:23Z; Popularity: 742 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

59. [Show HN: Slowave – local adaptive memory for coding agents](https://github.com/slowave-ai/slowave)
   - Source: Hacker News; Group: Tech community; Score: 2.25; Date: 2026-09-14T19:49:12Z; Popularity: 5 points, 0 comments
   - Summary: HN discussion: 5 points, 0 comments.

60. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.25; Date: 2026-09-16T16:51:45Z; Popularity: 1,247 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

61. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-15T09:10:11Z; Popularity: 230 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

62. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-12T06:53:29Z; Popularity: 123 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

63. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-16T04:19:24Z; Popularity: 8 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Toward Governance-Aware Autonomous GIS: A Narrative Review of Ethical and Privacy Risks in LLM-Enabled GeoAI

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.16232

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
