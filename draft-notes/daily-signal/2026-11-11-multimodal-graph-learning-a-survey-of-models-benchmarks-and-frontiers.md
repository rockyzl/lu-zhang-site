# Daily signal sidecar - 2026-11-11

## Selected Signal

- Title: Multimodal Graph Learning: A Survey of Models, Benchmarks, and Frontiers
- URL: https://arxiv.org/abs/2611.12990
- Source: arXiv cs.LG
- Score: 8.00

## Candidate Review

- Signal: Multimodal Graph Learning: A Survey of Models, Benchmarks, and Frontiers
- Primary source: https://arxiv.org/abs/2611.12990
- Discovery source: arXiv cs.LG
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

Total candidates reviewed after duplicate-source filtering: 65

1. [Multimodal Graph Learning: A Survey of Models, Benchmarks, and Frontiers](https://arxiv.org/abs/2611.12990)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 8.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12990v1 Announce Type: new Abstract: Multimodal attributed graphs (MAGs), in which nodes carry text, images, and other modalities while edges encode relations among entities, underlie e-commerce, social media, content platforms, and creative applications. Learning on MAGs has developed along two complementary lines: graph-centric methods redesign how modalities are fused, propagated, and connected within message passing, while foundation-model-centric methods pretrain transferable multimodal graph encoders or bring graph context into multimodal large language models for prediction and generation. In parallel, several benchmarks have appeared with different datasets and evaluation protocols. This survey takes an algorithm-centric and evaluation-grounded view of the field and makes three contributions. Modeling: we introduce a unified message-passing formulation and organize methods into five integration levels (feature, propagation, topology, learning, and foundation model), covering discriminative and graph-conditioned generative models; within this formulation we derive representative methods as special cases, compare their assumptions, expressiveness, and cost, and identify cross-modal sensitivity as a property that separates otherwise similar architectures. Datasets and evaluation: we review recent benchmarks, summarize their datasets and metrics, define model-independent descriptors (label homophily, average degree, clustering, and edge provenance), and map each evaluation protocol to the baselines it uses. Frontiers: we connect multimodal graph learning to AI agents, covering the multimodal graphs that agents perceive and remember and graph engineering, the practice of organizing agent workflows as explicit graphs; we then discuss open problems, concrete efforts for the community, and research directions, including when graph structure helps in the presence of strong multimodal foundation models.

2. [LandslideFM: A Foundation Model Towards Unified Landslide Perception and Understanding](https://arxiv.org/abs/2611.12936)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12936v1 Announce Type: new Abstract: Intelligent landslide detection is essential for disaster prevention. However, existing models primarily focus on isolated visual tasks, require extensive labeled data, and lack deep analytical and scene-understanding capabilities. To address these limitations, we propose LandslideFM, the first unified foundation model that connects visual perception tasks with contextual interpretation of landslides. Specifically, LandslideFM adapts to multiple visual tasks via a Source-Agreement Graduated Trust semi-supervised learning framework that leverages limited labeled data alongside abundant unlabeled data. Furthermore, predicted landslide regions provide explicit spatial guidance to a Vision-Language Model adapted through parameter-efficient fine-tuning, enabling comprehensive landslide reasoning. To support training and evaluation in this domain, we also present LandslideVL, the first benchmark for intelligent landslide analysis, combining visual imagery and newly introduced textual prompts. Comprehensive experiments across public datasets and LandslideVL demonstrate that LandslideFM achieves superior quantitative and qualitative performance. Most importantly, LandslideFM surpasses general-purpose VLMs in specialized landslide reasoning and scene analysis. Our code is released at https://github.com/wangshanwen001/LandslideFM.

3. [Graph Visualizations in Prompts for Knowledge Graph Question Answering](https://arxiv.org/abs/2611.12938)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12938v1 Announce Type: new Abstract: We study when and how multimodal input improves knowledge graph question answering (KGQA) in large vision--language models. Using a controlled evaluation over 1,500 WebQSP and CWQ questions and six VLMs within a fixed KGQA pipeline, we compare text-only prompting against text-plus-graph visualization at the per-question level and analyze performance changes as a function of reasoning complexity, model size, and image layout. Adding a graph image yields an average gain of 1.85 F1 points, driven by strong precision improvements on low-complexity questions (+4.65 F1). Mixed-effects and regression analyses show that these multimodal gains do not depend strongly on model scale, but are highly sensitive to graph layout: image-only settings sharply degrade performance, hierarchical Graphviz layouts outperform less organized renderings, and decomposing large subgraphs into separated paths yields the largest improvements. Taken together, the results indicate that visual prompting primarily aids KGQA by enhancing prediction precision in low-complexity contexts, provided that visual design respects cognitive and perceptual constraints. To optimize both accuracy and inference efficiency, we argue for adaptive visual prompting policies that selectively append diagrams to small, visually sparse subgraphs with well-structured layouts, avoiding unnecessary visual clutter and token overhead on complex queries. We conclude by relating these findings to a visual notation design theory, outlining how principled diagram encoding can guide future multimodal VLM prompting.

4. [Auditable Human-Agent Teams for Autonomous X-ray Experimentation](https://arxiv.org/abs/2611.12933)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12933v1 Announce Type: new Abstract: Closed-loop autonomous experimentation can accelerate scientific discovery, but implementation effort limits accessibility. Agentic systems may lower this barrier, although sustained operation on physical instruments remains largely unexplored. Here, using coding-agent infrastructure grounded in validated scientific methods, we demonstrate autonomous synchrotron X-ray experiments on nanoparticle superlattices under evolving, human-defined objectives. Complete human-agent and agent-agent transcripts enable an audit that reconstructs decision provenance and characterizes the division of cognitive labor. Across three experiments, 61-67% of messages involved interpretation or judgment, while the share of methodological and scientific contributions increased from 46% in the setup-focused first experiment to 56-61% in later experiments. Provenance showed that 59-68% of error corrections involved multiple participants and that about half of all decisions incorporated the input of another participant. These results may guide design principles for multi-agent scientific systems and inform future agent harnesses, model training, and accessible autonomous experimentation.

5. [Reinforcement Learning based control of Cancer Chemotherapy treatments](https://arxiv.org/abs/2611.12940)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12940v1 Announce Type: new Abstract: Reinforcement Learning has achieved tremendous success in recent years. Extending its scope from the traditional complex games such as Atari, Go, Pokeman, and Chess, reinforcement learning has caught researchers' attention on modelling real-life scenarios. Personalized medicine and the dynamic treatment regimen are two such preliminary research fields; researchers are focusing their mindsets currently. Estimating the optimal dynamic treatment regimens from the observational real clinical data is being popularized among the researchers, widening its scope towards more advanced versions of reinforcement learning algorithms. This research is about a research study that focused on reinforcement learning techniques that have been approached in the context of cancer chemotherapy treatments. Primarily this thesis addresses the result of the study by means of the state-of-the-art on reinforcement learning techniques used in generating the optimal policy for sequential treatments, including the existing online reinforcement learning approaches. Thereby a simulation for cancer chemotherapy via traditional Q-learning would be presented. Secondly, the study will extend towards using offline reinforcement learning in the optimal policy generation. Thus, the proposed solution follows a data-driven approach, which works on the real human colon cancer clinical data. The novelty of the proposed solution resides in the implementation of an offline reinforcement learning approach by means of a model-based architecture using the conservative Q-learning and the model-based offline policy optimization algorithm. As per the experimental results and the evaluations, it was revealed that the proposed Chemo RL model caters well the problem of cancer chemotherapy treatment scheduling and serves as a supportive model for the junior oncologists in deciding their treatment decisions.

6. [AI Governance Should Prioritize Control and Knowledge Boundaries Over Limiting Intelligence](https://arxiv.org/abs/2611.12941)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12941v1 Announce Type: new Abstract: The rapid proliferation of autonomously acting AI agents makes the governance of agentic systems urgent. We propose the competence circuit, summarized as IKC + KC + C, that decomposes an agent's real-world impact into three pathways: intelligence-mediated discovery, procedural know-how, and direct control. Using the canonical fast-takeoff debate as a stress test, we formalize the conditions for intelligence-mediated fast takeoff as a conjunction jointly sufficient for fast catastrophic supremacy, showing that most rely on rapid knowledge acquisition or control attainment rather than intelligence alone. We operationalize epistemic intelligence as hypothesis-selection efficiency and validate this framework via stochastic simulation on NK fitness landscapes across six scenarios spanning the conjunctive chain. An analytic bound supported by the simulations shows that intelligence-driven speedup is capped by the ratio of competing intelligence levels regardless of task difficulty. The simulations also expose a fast-takeoff dilemma: a large intelligence-driven speedup multiplier materializes only when the hypothesis space is noisy, but the absolute timescale remains constrained by the time required for capability-critical tests, so a large multiplier need not imply rapid progress. Simulations also indicate that institutional chokepoints disproportionately slow down superintelligent agents when mandatory authorization delays are large relative to the negligible time these agents spend on unproductive search. We argue that the dominant safety levers are restricting control and enforcing knowledge boundaries rather than limiting intelligence alone, and this applies to agentic systems at any capability level. Purely digital domains weaken these bottlenecks, strengthening the case for architectures that intentionally "put physics in the loop."

7. [Lazare, veni foras: Reprogramming Dormant Neurons to Backdoor AI Agents](https://www.microsoft.com/en-us/research/blog/lazare-veni-foras-reprogramming-dormant-neurons-to-backdoor-ai-agents/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 10 Nov 2026 20:52:56 +0000
   - Summary: Microsoft researchers have discovered &#8220;Lazarus,&#8221; a backdoor technique that can reprogram dormant neurons in an AI model, causing an otherwise normal AI agent to execute malicious commands when a hidden trigger appears. The threat is especially serious for AI agents with tool or terminal access. A triggered model could quietly download and run attacker code, [&#8230;] The post Lazare, veni foras: Reprogramming Dormant Neurons to Backdoor AI Agents appeared first on Microsoft Research .

8. [EarthRecord: From Pixels to Land Change with Multimodal Agents over Four Decades of Satellite Imagery](https://arxiv.org/abs/2611.12934)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12934v1 Announce Type: new Abstract: While multimodal agents now carry out complex data analysis with tools, their ability to turn decades of satellite imagery into reliable land-change analysis, crucial for Earth observation science, remains unmeasured. Existing benchmarks fall short: they pose questions on curated images or give agents preprocessed inputs, leaving out the raw multi-sensor archives where such analysis begins. We introduce EarthRecord, a benchmark built on the raw record of 56 sites: four decades of Landsat, MODIS, VIIRS, and Sentinel-2 data, with cloud masking and cross-sensor harmonization left to the agent. It poses 238 land-change questions across ten analysis tasks, scored against withheld references from global products, agreement among methods, and visual interpretation. Two controls test what answers rest on: the closed book removes the record, and instrument pairs alter one satellite's data while nothing changes on the ground. Evaluations of twelve multimodal agents reveal that leading agents complete most analyses end to end but falter when an answer requires mapping from imagery. Further analysis shows that the record moves answers from prior knowledge to the pixels but not yet to the real change on the ground: when one satellite's data are altered, half of the right answers follow the alteration. EarthRecord thus provides a principled platform for measuring and advancing agents from pixels to land change.

9. [Tabular Foundation Models vs Tuned Gradient Boosting for Telecom Churn: A Profit- and Calibration-Aware Evaluation](https://arxiv.org/abs/2611.12942)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12942v1 Announce Type: new Abstract: Tabular foundation models (TFMs) predict from a labelled context in a single forward pass. A recent benchmark reported that they decisively outperform tree ensembles for customer churn, but it compared them with untuned gradient-boosted trees (GBDTs) and scored only ranking metrics, while a retention campaign is judged in money. We re-evaluate TabPFN-2.5, TabPFN-3.5, TabPFN-3.5-Fast and TabICL v2 against Optuna-tuned GBDTs on five public telecom churn datasets over 10 seeded splits. We separate three questions: whether a model ranks churners well, whether that ranking earns more expected maximum profit (EMP), and whether its probabilities can drive a threshold policy. With a split-aware test and Holm correction over 20 pre-declared comparisons, TabPFN-3.5 earns significantly more EMP than the best tuned GBDT on Cell2Cell (1.9%) and Iranian (7.6%), and these two gains also hold against each of the three tuned GBDTs separately. On Orange it is ahead in all 10 splits (14.3%), but the gain is not significant after correction (Holm p = 0.155). The splits resample the same datasets, so these results do not stand for independent operators. TabICL v2, the earlier benchmark's leader, beats the best tuned GBDT only on Iranian, not all three of them, and underpredicts Orange churn by 2.1 points on a 7.3% base rate. On the datasets and splits where we tested them, a substantially larger tuning budget and a duplicate-aware split leave the main conclusions unchanged. Retuning the baseline cuts the earlier headline gap from 6.1 to 4.0 PR-AUC points without closing it. The licence of the TabPFN-3.5 weights we used (License v1.0), not scoring cost, is what stands between its gains and production use.

10. [Exploration via Exploitation: The Blessing of Reward Diversity in Personalized Federated RL](https://arxiv.org/abs/2611.12964)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12964v1 Announce Type: new Abstract: While federated reinforcement learning (RL) has traditionally guaranteed high efficiency in homogeneous environments, collaboration is often hindered when agents possess distinct goals. In this paper, we flip this paradigm, framing reward heterogeneity not as a hurdle to consensus, but as a structural asset that catalyzes exploration. We first propose Personalized Federated Upper Confidence Bound Value Iteration (PF-UCBVI), which achieves optimal linear speedup by decoupling shared dynamics from personalized objectives. To eliminate the risks of explicit exploration, we then introduce Personalized Federated Exploration-Free Value Iteration (PF-EFVI), a purely greedy algorithm that leverages reward diversity to ensure state-action coverage. We prove that PF-EFVI attains logarithmic regret without explicit exploration bonuses under sufficient reward diversity. Our results reveal that agent disagreement shifts the exploration burden from temporal complexity to spatial diversity, enabling efficient collective learning without explicit exploration.

11. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.04; Date: 2026-11-11T12:08:50Z; Popularity: 2,042 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

12. [Gilbert + Tobin rethinks the business of law with AI](https://openai.com/index/gilbert-tobin-sam-nickless)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 12 Nov 2026 00:00:00 GMT
   - Summary: A conversation with Sam Nickless, Partner and Chief Executive Officer at Gilbert + Tobin.

13. [ChatGPT Plus for veterans and servicemembers](https://openai.com/index/chatgpt-plus-for-veterans)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 11 Nov 2026 08:00:00 GMT
   - Summary: More than 20,000 veterans and transitioning service members have claimed a free year of ChatGPT Plus. See how they use it to prepare for civilian careers.

14. [JioStar’s chief architect on AI discovery at 500M-user scale](https://openai.com/index/jiostar-vijay-seshadri)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 GMT
   - Summary: JioStar’s Vijay Seshadri explains AI discovery at 500M-user scale. Read his lessons on evals, guardrails, and taking AI into production.

15. [Helping caregivers use AI in everyday life](https://openai.com/index/helping-caregivers-use-ai-in-everyday-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 10 Nov 2026 12:00:00 GMT
   - Summary: OpenAI Academy is bringing free, hands-on ChatGPT workshops to caregivers in five U.S. cities, helping them build practical AI skills for everyday life.

16. [Introducing Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 10 Nov 2026 10:00:00 GMT
   - Summary: Manage your business information, get insights about how your business shows up, and turn interest into action in ChatGPT.

17. [Closing the AI guidance gap in education](https://openai.com/index/closing-ai-guidance-gap-education)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 10 Nov 2026 09:00:00 GMT
   - Summary: New ThinkYoung research and lessons from OpenAI’s EMEA education partnerships on supporting teachers, AI literacy, and independent learning.

18. [Singapore Airlines elevates travel & work with OpenAI technology](https://openai.com/index/singapore-airlines-travel-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 10 Nov 2026 08:00:00 GMT
   - Summary: Discover how Singapore Airlines uses OpenAI models and API to enhance customer support, travel discovery, and employee productivity, doubling CSAT for its Kris chatbot.

19. [Work at the Frontier: AI’s effect on freelance work](https://openai.com/index/ai-effect-on-freelance-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 10 Nov 2026 07:00:00 GMT
   - Summary: New research from OpenAI and Upwork finds shifting demand for freelance work, new skill combinations, and larger budgets and more hours for AI-related projects.

20. [Cogent and OpenAI build cyber defense factories for enterprises](https://openai.com/index/cogent-security)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 10 Nov 2026 00:00:00 GMT
   - Summary: Cogent combines OpenAI models with enterprise context to help automatically remediate vulnerabilities with agents.

21. [ChatGPT Enterprise now available in AWS Marketplace](https://openai.com/index/chatgpt-enterprise-aws-marketplace)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 09 Nov 2026 19:00:00 GMT
   - Summary: ChatGPT Enterprise is now available through AWS Marketplace, helping organizations simplify procurement through existing AWS purchasing and billing relationships.

22. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

23. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [BotPsy: On-Device Personal Assistant with a Sub-Billion-Parameter Agentic Language Model](https://huggingface.co/blog/qvac/botpsy)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 11 Nov 2026 05:01:16 GMT

26. [Token Pooling-Aware Training for Multi-Vector Embedding Models](https://huggingface.co/blog/token-pooling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 GMT

27. [Pay for Hugging Face Hub with your Google Cloud Account](https://huggingface.co/blog/hub-gcp-marketplace)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 10 Nov 2026 00:00:00 GMT

28. [Decision Models in Hugging Face](https://huggingface.co/blog/decision)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 10 Nov 2026 00:00:00 GMT

29. [Nemotron-Personas-Finance-Japan: A Synthetic Dataset Capturing Japan&apos;s Demographics and Financial Context](https://huggingface.co/blog/nvidia/nemotron-personas-finance-japan)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 09 Nov 2026 15:05:57 GMT

30. [Your Experts Have Partners. There&apos;s HOPE for Keeping Them Together](https://huggingface.co/blog/amazon/higher-order-pruning-experts)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 09 Nov 2026 12:34:29 GMT

31. [Egyptian and Nigerian English join the Open ASR Leaderboard](https://huggingface.co/blog/open-asr-leaderboard-liva)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 GMT

32. [A Closer Look at Phonon TTS. Launching High-Quality On-Device Speech That Tops the Benchmarks.](https://huggingface.co/blog/phonon-tts)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 GMT

33. [Dharma Field Extractor: Any Document In, Structured Fields in JSON Out](https://huggingface.co/blog/Dharma-AI/dharma-field-extractor)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 04 Nov 2026 17:50:10 GMT

34. [Train on prefill, monitor at decode: Using sparse autoencoders for topic monitoring](https://arxiv.org/abs/2611.12935)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12935v1 Announce Type: new Abstract: Topic monitoring is the task of labelling the topic of each token in a model's response during generation. Activation-based monitors that run at generation time have so far been trained to detect harmful content and are limited to two or three classes. We introduce TopicScope, a framework for training causal topic classifiers on SAE features that assign a topic to every token, so that the label can change partway through a response. We train three detector architectures on synthetic multi-topic conversations covering seven topics. Across Gemma-3 1B and 4B, monitors trained on features extracted from prefill hidden states were able to generalise to decoding. We also found that the classifiers are robust to perturbations, losing at most 5 macro-F1 points when off-topic asides are inserted, topics are removed or sections are reordered. Ablations conducted to understand the contribution of the SAE revealed that classifiers reaching baseline performance without it were several times larger. Our findings show that compact topic monitors can be trained inexpensively in prefill and deployed during generation. More broadly, our work shows where SAEs are useful beyond safety classification. Our code, dataset and checkpoints are available at https://github.com/Mercity-AI/SAE-Guardrails and https://huggingface.co/collections/Mercity/online-guardrails-using-sparse-autoencoders-6ac602940468c62fefb2b9e8

35. [Tracing Psychometric Inference in Large Language Models](https://arxiv.org/abs/2611.12937)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12937v1 Announce Type: new Abstract: Do large language models represent psychological constructs internally, or do they only generate outputs that resemble psychometric structure? We address this question using a cross-persona paradigm across 14 model variants from two families (Llama 3 and Qwen 2.5, 0.5B-14B, base and instruct). Given responses on one psychological scale from real individuals (N = 272 Taiwanese university students), models predict responses on six other scales. At the behavioral level, larger variants reproduce and amplify human cross-scale correlations; amplification persists after correcting the seven-scale human correlations for measurement attenuation. We then examine whether this structure is reflected internally. Contrastive direction analysis finds geometry aligned with the human matrix in larger instruct variants, but little alignment in base variants under this assay. Across models, geometry strength is associated with behavioral amplification (r = 0.68, p = 0.008; partial r = 0.69 controlling for log size). To relate internal structure to output behavior, a matched activation-probing paradigm shows that probe slopes vary less than behavioral slopes (1.38-1.77 vs 0.52-1.53). A synthetic control shows that ridge probing can inflate these slopes; after subtracting a baseline based on a reliability proxy from another analysis, adjusted slopes remain associated with behavior (r = 0.88). We term the measured probe-behavior gap readout attenuation. These results establish decodability and geometric alignment under the tested assays, without showing that the measured directions mediate the cross-persona answers.

36. [SetPrint: Black-Box LLM Fingerprinting via Setwise Correspondence of Response Changes](https://arxiv.org/abs/2611.12950)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12950v1 Announce Type: new Abstract: Black-box LLM fingerprinting aims to determine whether a target model was derived from a source model when only the output responses to input queries are observable. One way to reveal this relationship is to perturb each query and observe the resulting responses of both models, yielding two corresponding sets of response variations. These sets provide two complementary sources of information: the relations among response changes within each set, and the correspondence of response changes between the two sets. Existing approaches, however, have not fully exploited both. We introduce \textbf{SetPrint}, a training-free method that jointly captures both within-set relations and between-set correspondence. SetPrint expresses each response change relative to the mean change of its own set, and then compares changes from the two models that were induced by the same perturbation. On LeaFBench, SetPrint consistently outperforms existing training-free black-box fingerprinting methods. Further analyses attribute these gains to both within-set relations and between-set correspondence.

37. [Neural network scaling and generalization for 3D strain fields in heterogeneous materials](https://arxiv.org/abs/2611.14158)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14158v1 Announce Type: new Abstract: Computational homogenization and coupled multiscale simulations of heterogeneous materials require repeated solution of mechanical fields on Representative Volume Elements, which becomes prohibitively expensive for high-resolution three-dimensional microstructures. Machine-learning surrogates can accelerate these computations, yet most existing approaches predict fields for fixed macroscopic loadings and provide limited guidance on how to scale network architectures for high-resolution 3D tensor-field prediction. This work presents a U-Net surrogate trained to predict the full 36-component strain localization tensor field in voxelized concrete mesostructures at resolutions up to $256^3$. Training localization tensors are generated with an FFT-based linear elastic solver, and an extensive hyperparameter optimization is performed to derive scaling rules and an accuracy-speed trade-off analysis. The results show that only network width and depth need to be scaled with problem complexity, while several conventional U-Net design choices, such as doubling channels after downsampling, are suboptimal for this problem. The final neural network achieves a Mean Absolute Error of 1.118% on both the validation and the held-out test sets, and an inference speedup of approximately 8.7x over the FFT-based solver on an Nvidia H100 GPU. Generalization experiments reveal transfer across aggregate volume fractions and highlight the importance of training on diverse morphologies. To safeguard reliability, a Maximum Mean Discrepancy metric computed on internal feature maps is proposed for detecting out-of-distribution microstructures without costly reference computations.

38. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.88; Date: 2026-11-11T19:30:12Z; Popularity: 882 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

39. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-10T10:03:12Z; Popularity: 495 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

40. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.39; Date: 2026-11-09T22:07:06Z; Popularity: 387 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

41. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-11-11T14:14:18Z; Popularity: 253 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

42. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

43. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

44. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

45. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

46. [Simulating student learning for better AI tutoring](https://www.microsoft.com/en-us/research/blog/simulating-student-learning-for-better-ai-tutoring/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 12 Oct 2026 16:00:00 +0000
   - Summary: StudentSim is a research system for evaluating and improving AI tutoring tools before they are tested with learners. It models how individuals may engage with tutors, giving feedback to improve tutor performance across subjects like chess, writing, and mathematics. The post Simulating student learning for better AI tutoring appeared first on Microsoft Research .

47. [ADIndex: Layer-Adaptive Sparse Attention Indexing via Group-Level Distillation](https://arxiv.org/abs/2611.12956)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12956v1 Announce Type: new Abstract: DeepSeek Sparse Attention (DSA) reduces the computational cost of attention through token-level selection. However, its indexer still scores the entire causal prefix for each query, making indexing a dominant source of latency in long-context inference. Notably, the indexer alone can account for more than 50% of total prefill GPU time at long context lengths. To address this bottleneck, we propose ADIndex, an Adaptive and Distillation-driven Indexing method for token-level sparse attention. ADIndex integrates three key components: (i) a layer-wise calibration strategy that adaptively accommodates cross-query retrieval overlap, motivated by our observation of pronounced inter-layer heterogeneity; (ii) a group-level distillation scheme that leverages this heterogeneity to efficiently train adaptive layer-wise group indexers, capturing salient retrieval signals from individual queries; and (iii) a low-latency inference strategy that reduces repeated full-prefix scans through token bank sharing within query groups while retaining query-specific refinement. Experiments on DeepSeek-V3.2 and GLM-5.1 demonstrate that ADIndex preserves near-lossless task performance on LongBench, LongBench v2, and RULER while delivering substantial efficiency gains over standard DSA, including prefill and decoding kernel speedups of up to 6.22x and 3.40x, respectively, at a context length of 256K across the layer-wise reuse configurations, as well as an end-to-end serving speedup of 1.54x at a context length of 128K.

48. [StatPrompt-LLM: A Lightweight Statistical Refinement for Foundation-Style Time-Series Forecasting](https://arxiv.org/abs/2611.12974)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12974v1 Announce Type: new Abstract: Time-series forecasting has recently seen a paradigm shift with the introduction of foundation-style models that adapt large pretrained language architectures to sequential data. However, effectively exposing fundamental temporal structures, such as trend, scale, and temporal dependence, to these models remains an open challenge, particularly when the available observations are limited. In this paper, we conduct an exploratory empirical study across different generations of forecasting architectures and propose StatPrompt-LLM, a lightweight statistical refinement of Time-LLM. StatPrompt-LLM augments the existing Time-LLM prompting mechanism with dataset-level statistical information and introduces a zero-initialised autoregressive bypass as a complementary linear forecasting pathway. We evaluate our framework on electricity and meteorological time-series benchmarks, including ETTh1, ETTh2, and Weather, under full-prefix and reduced-prefix configurations. Under the 10% reduced-prefix configuration, StatPrompt-LLM achieved lower in-sample prediction errors than Time-LLM, with unweighted average relative reductions across datasets of 40.2% in MSE and 21.4% in MAE. Full-prefix results were more dataset-dependent. Ablation analyses revealed relatively modest and dataset-dependent changes when selected additional statistical descriptor groups were masked within the combined architecture. Computational profiling indicated additional model parameters and runtime overhead relative to Time-LLM.

49. [Third Eye: Beyond Immediate Gains in Recursive Self-Improvement](https://arxiv.org/abs/2611.12988)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.12988v1 Announce Type: new Abstract: Does a useful self-update remain useful after the model updates again? Third Eye separates immediate performance from the outcome of a further native update. We evaluate five 3-8B backbones on math and code: 64 fresh runs, three candidates per run, and three continuations per candidate. Selection and final scoring use disjoint items. In the balanced Qwen3-4B/Llama-3.2-3B comparison, immediate-selected utility is near zero, but continuation reduces it by 1.78 percentage points (simultaneous 95% interval [0.68, 2.88]). Candidate-averaged immediate utility is already negative: selection partly accounts for the apparently neutral first step. Continuation also lowers utility for SmolLM3-3B and Llama-3.1-8B; Qwen3-8B remains inconclusive. Target and out-of-distribution losses dominate retention changes. Matched recipe and recipient-donor controls identify neither a reliable mitigation nor a single mechanism. The results support evaluating persistent self-updates as adaptation transitions, with independent scoring and a no-update baseline, rather than interpreting immediate performance as their full value.

50. [One Table, Many Queries: Benchmarking Generalist Tabular Models Across Generation, Imputation, and Prediction](https://arxiv.org/abs/2611.13001)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.13001v1 Announce Type: new Abstract: Generation, imputation, and prediction query different aspects of the same tabular distribution, but are usually evaluated separately. This leaves unclear which capabilities they share, how their training objectives interact, and whether one model can perform all three well. We introduce the One Table Benchmark (\ours{}), spanning 56 datasets, 46 registered methods, and 20 capability axes under aligned data splits and explicit task contracts. We compare task ranks on aligned support, train five backbones under all seven non-empty objective combinations on five datasets with three seeds, and contrast fixed-model profiles with specialist portfolios. Rank comparisons connect imputation and prediction through numerical recovery and dependence preservation, and link generation to both through predictive utility; distributional fidelity follows different, sometimes opposing, rankings. Objective interventions show the largest pooled gains from including the recipient's own objective. Generation has the broadest coverage of positive pooled auxiliary effects, while prediction shows potential to improve imputation and synthetic-data utility, with responses that vary across backbones. Cross-addition effects reveal that objective benefits need not add and depend on the objectives already present. Fixed-model comparisons expose corresponding utility--fidelity trade-offs: some generalists surpass specialist portfolios on utility, while fidelity continues to favor specialization. Frozen foundation models show strong prediction and numerical point imputation, together with promising synthetic-data utility, highlighting their potential across all three tasks. These findings motivate unified tabular models that share useful conditional information while improving categorical reconstruction and faithful joint sampling.

51. [A NURBS-enhanced high-order finite-volume method for compressible laminar boundary layers on curved domains with hybrid meshes](https://arxiv.org/abs/2611.13463)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.13463v1 Announce Type: new Abstract: High-fidelity simulation of compressible laminar boundary layers on curved domains requires physical wall boundary treatment and geometric representation compatible with high-order reconstruction, since viscous shear stresses and conductive heat fluxes are concentrated in a thin near-wall region. Conventional high-order methods often suffer from loss of accuracy near curved walls or require complicated wall treatments. To address these issues, in this paper, we develop a NURBS-enhanced $k$-exact finite-volume method for the steady compressible Navier--Stokes equations on hybrid meshes. To incorporate physical wall conditions into the high-order discretization, we develop a wall boundary treatment that employs sequential reconstruction without requiring the reconstruction variables to coincide with those used to prescribe the boundary conditions. The NURBS-based boundary representation is used to obtain a high-order accurate description of curved boundaries, and the diffusive generalized Riemann problem (dGRP) viscous flux is employed to enhance numerical robustness. A variety of numerical examples are provided to demonstrate the high-order accuracy and effectiveness of the proposed method.

52. [Fully GPU-accelerated semistochastic Epstein-Nesbet perturbation theory](https://arxiv.org/abs/2611.13522)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.13522v1 Announce Type: new Abstract: Second-order Epstein-Nesbet perturbation theory (EN-PT2) is an important tool for improving selected configuration interaction (SCI) energies, but the large external determinant space creates substantial memory and communication costs on GPU clusters. We develop a fully GPU-accelerated implementation of distributed semistochastic EN-PT2, fusing excitation generation, screening, and PT2 weighting in a single kernel traversal. Fixed-size random-phase CountSketch arrays limit memory use and replace large external determinant exchange with bounded collective summation. The implementation on one A100 completes EN-PT2 calculations 8.21-37.53 times faster than Arrow on 64 CPU cores at the same requested statistical standard error, and fixed-workload strong-scaling tests achieve 93.5% parallel efficiency on 16 GPUs across two nodes. Applications to an iron-oxo complex in a (60e, 187o) active space, iron-porphyrin references containing 200 million determinants per state, and neural-network quantum states establish the method's efficiency for perturbative corrections to large reference wave functions in the GPU era.

53. [Kinetic Non-Equilibrium Receptivity Analysis of Hypersonic Flows via a Complex Linearized Unified Gas-Kinetic Scheme](https://arxiv.org/abs/2611.13727)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.13727v1 Announce Type: cross Abstract: In the near-space regime, local rarefaction near the leading-edge shock and wall degrades Navier-Stokes-based stability and receptivity analyses due to velocity slip, temperature jumps, and non-equilibrium transport. The unified gas-kinetic scheme (UGKS) provides a multiscale kinetic description spanning continuum to rarefied regimes. Building on this, a complex linearized UGKS (CLUGKS) is developed: first-order perturbations of the discrete UGKS residual are formulated under a time-harmonic assumption with complex amplitudes, converting disturbance equations into a steady elliptic system solved via pseudo-time marching with LU-SGS acceleration. Consequently, kinetic shock structures, wall slip, temperature jumps, and non-Fourier heat fluxes are inherently captured without hybrid coupling. Three benchmarks verify the framework: a standing acoustic wave at an isothermal wall, a Mach 2 normal shock interacting with an obliquely incident acoustic wave, and freestream acoustic receptivity of a hypersonic blunt wedge. The scheme is applied to argon blunt-wedge flows at equivalent altitudes of 40 km and 50 km. At 40 km, UGKS and Navier-Stokes wall responses agree well in period and phase, while wall slip sustains a weakly positive spatial growth rate in UGKS downstream. At 50 km, intensified rarefaction produces a kinetic temperature precursor and a thickened, merged shock layer; while wall-pressure responses remain close, significant deviations emerge in temperature and heat-flux disturbances. These findings show that while continuum models capture dominant wall-pressure signatures under moderate rarefaction, resolving kinetic non-equilibrium across the shock-particularly its thermal footprint-is essential at higher altitudes.

54. [An infrared divacancy color center in bulk hexagonal diamond for quantum communication](https://arxiv.org/abs/2611.13736)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.13736v1 Announce Type: cross Abstract: Intrinsic color centers are investigated in bulk hexagonal diamond as potential emitters for fiber-based quantum communication. Hybrid density functional theory and constrained-occupation delta SCF calculations identify five carbon-vacancy and divacancy configurations with stable optical excited states. A comparison of their radiative and nonradiative properties within a three-point configuration-coordinate model identifies the positively charged axial divacancy, VVa1+, as the most promising candidate. It exhibits the highest calculated zero-phonon-line (ZPL) emission rate of 43.9 MHz and ZPL quantum efficiency of 11.8% among the five candidates. Its weak structural relaxation yields a Huang-Rhys factor of 0.395, while a multimode photoluminescence calculation gives a Debye-Waller factor of 69.37%, indicating a dominant zero-phonon contribution. The predicted ZPL at 0.603 eV (2057.3 nm) also has the smallest photon-energy separation from the 1310 and 1550 nm telecom targets among the candidates. These results identify VVa1+ as a promising intrinsic color center for fiber-based quantum communication, with quantum frequency upconversion offering a route from its strong infrared ZPL to the telecom O and C bands.

55. [M-SHIVA 1.0: A Relativistic Resistive MHD Code for Heavy-Ion Collisions, with Applications to Momentum Anisotropy and Joule Heating in QGP](https://arxiv.org/abs/2611.13899)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.13899v1 Announce Type: cross Abstract: We present M-SHIVA 1.0 (Magneto-resistive Solver for Heavy Ions with finite-Volume Algorithms), a (2+1)-dimensional relativistic resistive magnetohydrodynamics code for heavy-ion collisions in Cartesian and boost-invariant Milne coordinates. The present implementation treats inviscid dynamics and employs an implicit-explicit (IMEX) Runge-Kutta scheme for the stiff conductivity-dependent terms, together with complementary primitive-variable recovery procedures and generalized Lagrange multiplier (GLM) divergence cleaning. The code reproduces standard shock-tube, cylindrical-blast-wave and relativistic-rotor benchmarks. We use the framework to investigate the momentum anisotropy and electromagnetic energy transfer in an expanding quark-gluon plasma (QGP). In a controlled elliptic-fireball setup, the electromagnetic field modifies the total momentum anisotropy mainly through its direct contribution to the transverse stress tensor, while the matter anisotropy is only weakly affected. We further separate the electromagnetic work into mechanical Lorentz-force work and irreversible Joule heating. Applications to Au+Au collisions at $\sqrt{s_{\rm NN}} = 62.4$ and $200$ GeV and Pb+Pb collisions at $\sqrt{s_{\rm NN}} = 2.76$ TeV employ optical-Glauber matter profiles, spectator-generated electromagnetic fields, and a temperature-dependent electrical conductivity motivated by lattice-QCD results. The ratio of Joule heating to expansion cooling is approximately $10^{-14}$-$10^{-11}$ for Pb+Pb collisions at $2.76$ TeV, $10^{-8}$-$10^{-5}$ for Au+Au collisions at $200$ GeV and $10^{-7}$-$10^{-4}$ at $62.4$ GeV, with no appreciable conductivity dependence of the matter or total momentum anisotropy. Resistive heating thus grows by orders of magnitude with decreasing collision energy but remains negligible compared with longitudinal expansion cooling for all systems considered.

56. [PINNverse meets Jordan--Wigner: learning the Hamiltonian of long spin chains](https://arxiv.org/abs/2611.14023)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14023v1 Announce Type: cross Abstract: Inverse physics-informed neural networks (PINNverse) learn the parameters of a quantum Hamiltonian from measured expectation values, but the network output grows as $4^N$ with the number of qubits $N$. We show that, for spin chains with nearest-neighbor exchange interactions, the Jordan-Wigner transformation removes this exponential cost: the dynamics closes on an $N\times N$ one-body density matrix, so the network needs only $N^2$ outputs and the data are local observables measured in five global settings. Parasitic $ZZ$ couplings (crosstalk) are included through a time-dependent Hartree--Fock closure. With synthetic data, the same network first solves the equation of motion and then recovers the Hamiltonian parameters of chains of up to $50$ qubits, with couplings learned to better than $0.1\%$. Errors in the local frequencies of long chains are removed by a direct least-squares fit started from the network estimate.

57. [Accelerating matrix-free fast diagonalization and preconditioned linear solvers for higher-order finite element discretized elliptic problems on distributed GPUs](https://arxiv.org/abs/2611.14041)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14041v1 Announce Type: cross Abstract: The time to solution of an iterative solver depends on the number of iterations and the cost per iteration. This paper develops algorithms that reduce both for elliptic problems discretized with high-order continuous finite elements on distributed GPUs, implemented in a unified matrix-free code supporting CUDA, HIP and SYCL. A distributed direct fast-diagonalization (FD) Poisson solver provides exact solutions on tensor-product meshes with direction-wise grading and coefficients varying along one coordinate direction. Its tensor data stay distributed, moved between slab layouts by collective transposes or kept in place by a Schur-complement approach. It is also an exact coarse solver. A two-level hybrid Schwarz preconditioner with FD cell solves (HS-FD) is extended to 2:1 hanging-node octrees with exact local cell inverses, while a \(p\)-multigrid preconditioner with Chebyshev--Jacobi smoothing (CJ-\(p\)MG) resolves hanging-node constraints at every level within fused kernels. Both approaches exploit FP32, where cell shapes and coefficients allow, within an FP64 conjugate-gradient iteration, adaptively select replicated or distributed coarse levels, support block solves for multiple right-hand sides and determine all parameters from the operator without case-specific tuning. Comparisons with Jacobi-preconditioned conjugate gradients (Jacobi PCG), MFEM, nekRS and deal.II span uniform, graded and octree meshes, layered coefficients, and four applications across NVIDIA, AMD and Intel GPUs. The direct solver is two to three orders of magnitude faster than Jacobi PCG on uniform meshes. HS-FD converges in 11 iterations for an octree generalized Poisson problem across 8 to 1024 MI250X graphics compute dies. The results guide solver selection by mesh structure and coefficients

58. [Particle-hole asymmetry and a fluctuating pair-density-wave state in a lightly doped Mott insulator on the square lattice](https://arxiv.org/abs/2611.14101)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14101v1 Announce Type: cross Abstract: Whether a lightly doped Mott insulator on the square lattice supports robust $d$-wave superconductivity remains a central question in strongly correlated physics and in the microscopic theory of cuprate superconductivity. Experiments and numerical studies reveal a pronounced particle-hole asymmetry, pointing to a delicate competition among $d$-wave superconductivity, pair-density wave (PDW), stripe, charge-density wave (CDW), and antiferromagnetic correlations. Here we combine large-scale DMRG and finite-size PEPS to study the square-lattice $t$-$J$ model at low doping, $\delta \leq 0.1$, while tuning the next-nearest-neighbor hopping $t'$ from the electron-like ($t'>0$) to the hole-like ($t'<0$) regime. The electron-like side supports robust, nearly uniform $d$-wave pairing, whereas decreasing $t'$ induces a period-two plaquette modulation and ultimately produces, on the hole-like side, a charge-dominated state with a strongly suppressed static pairing amplitude. DMRG calculations on open strips and squares, together with PEPS calculations on open squares up to $16\times16$ sites, support this evolution. On squares with $C_4$-symmetric Hamiltonians, both methods find that the pair correlations of the hole-like state select the plaquette momenta $(\pi,0)$ and $(0,\pi)$ and decay within a few lattice spacings, while the dominant charge-density modulation forms a bidirectional checkerboard whose period extrapolates to about $4a_0$, close to that observed in lightly doped Bi-2201. These observations establish a fluctuating plaquette PDW in the lightly doped hole-like regime, in which local pairs carry finite momentum but lack phase coherence. Our results firmly establish particle-hole asymmetry as a central organizing principle for competing pairing tendencies in the lightly doped $t$-$J$ model.

59. [Physics-informed Bayesian optimization of high-order harmonic generation in gases](https://arxiv.org/abs/2611.14119)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 11 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.14119v1 Announce Type: cross Abstract: Optimization of high-order harmonic generation in gases is essential for attosecond science. Improving conversion efficiency from the infrared driving laser to the extreme-ultraviolet high-order harmonic radiation requires balancing microscopic single-atom dipole responses with macroscopic phase matching. The resulting conversion-efficiency landscape exhibits complex structures, such as the hyperbolic ridge in the pressure-length space, which can be difficult to accurately reconstruct using conventional Bayesian optimization. Here, we introduce a physics-informed Bayesian optimization framework that incorporates known physical scaling relations through nonlinear transformations of the search space. We first demonstrate the approach in the two-dimensional pressure-length space, where a direct grid scan enables detailed validation of the reconstructed landscape, before extending it to four dimensions, where exhaustive scanning becomes computationally impractical. In four dimensions, incorporating the pulse-duration scaling and a square-root transformation of conversion efficiency further improves the accuracy of the reconstructed landscape, as validated against an independent reference dataset. We also employ a threshold-based acquisition strategy to identify extended high-efficiency operating regions rather than isolated optimal points. Together, these results demonstrate that incorporating physical knowledge into Bayesian optimization improves the exploration and reconstruction of multidimensional high-order harmonic generation landscapes, extending its capabilities beyond locating individual optima.

60. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.79; Date: 2026-11-02T18:36:00Z; Popularity: 792 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

61. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.34; Date: 2026-11-11T18:19:11Z; Popularity: 1,345 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

62. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-10T02:21:53Z; Popularity: 268 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

63. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-06T21:42:13Z; Popularity: 59 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

64. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.03; Date: 2026-11-11T09:31:16Z; Popularity: 1,034 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

65. [RobLe3/IICP](https://github.com/RobLe3/IICP)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-11-06T06:28:09Z; Popularity: 7 stars
   - Summary: Open specification and conformance material for intent-based AI agent discovery and routing

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Multimodal Graph Learning: A Survey of Models, Benchmarks, and Frontiers

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.12990

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
