# Daily signal sidecar - 2026-07-27

## Selected Signal

- Title: Toward User-Conditioned Evaluation of Personal LLM Agents under Temporal Interventions
- URL: https://arxiv.org/abs/2607.21635
- Source: arXiv cs.LG
- Score: 6.00

## Candidate Review

- Signal: Toward User-Conditioned Evaluation of Personal LLM Agents under Temporal Interventions
- Primary source: https://arxiv.org/abs/2607.21635
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

Total candidates reviewed after duplicate-source filtering: 55

1. [Toward User-Conditioned Evaluation of Personal LLM Agents under Temporal Interventions](https://arxiv.org/abs/2607.21635)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21635v1 Announce Type: new Abstract: Personal agents maintain memories, learned skills, tool configurations, and policy state that evolve with each user. Existing agent benchmarks often evaluate these capabilities in isolation: tool benchmarks test invocation under fixed APIs, memory benchmarks test recall or forgetting, and safety benchmarks test static policy compliance. We argue that personal-agent evaluation requires a different protocol: replaying the same temporal intervention across different persistent user-conditioned states and measuring how failures propagate across agent components. We formalize this requirement as four conditions: explicit temporal intervention, persistent state across the intervention, induced cross-dimensional effects, and variation in user-conditioned state. A focused audit of public benchmark protocols selected by explicit inclusion criteria identifies several close cases. Under our explicitly narrow operationalization, we did not find a protocol in that audited set satisfying all four conditions. This claim is scoped as a focused gap analysis with bounded literature coverage. This position paper proposes a minimal benchmark design and candidate reporting metrics for user-conditioned adaptation. The result is a concrete design requirement for future personal-agent evaluation, with metrics used as reporting tools for that requirement.

2. [OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 21 Jul 2026 07:00:00 GMT
   - Summary: OpenAI and Hugging Face share early findings from a security incident during AI model evaluation, highlighting advanced cyber capabilities and lessons for defenders.

3. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

4. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

5. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

6. [NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics](https://huggingface.co/blog/nvidia/cosmos-h-dreams)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 27 Jul 2026 09:32:20 GMT

7. [A Multi-Species Reactive-Boltzmann Formulation for Self-Consistent Kinetic Simulation of Burning Fusion Plasmas](https://arxiv.org/abs/2607.21723)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21723v1 Announce Type: cross Abstract: Discrepancies between experimental data and radiation-hydrodynamic models of burning plasmas at the National Ignition Facility have been attributed, in part, to possible deviations of reactant ion distributions from Maxwellian equilibrium. In particular, it has been hypothesized that the collisional relaxation of energetic fusion products with the bulk plasma may generate suprathermal ion populations not captured by reduced models. To assess this hypothesis in a fully kinetic setting, we present a multi-species reactive--elastic kinetic framework, in which fusion sources and sinks are evaluated directly from the reactant velocity distribution function with a reactive Boltzmann collision operator. For computational efficiency, elastic interactions are modeled in the small-angle collision limit using the Landau and Lenard--Bernstein collision operators, although the framework admits large-angle elastic scattering generalizations. The integro-differential collision operators are discretized with a fast Fourier spectral method, enabling efficient, high-order accuracy evaluation of reactive processes in three-dimensional velocity space and providing a deterministic alternative to Monte Carlo collision methods. Numerical experiments are performed for spatially homogeneous two- and three-species D--D fusion systems in weakly coupled, early-time regimes. We find that fusion product heating does not generate a significant suprathermal population in the reactant ions: deviation from the corresponding Maxwellian distribution remains small in both the Frobenius norm and the fusion reactivity.

8. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.54; Date: 2026-07-27T13:52:06Z; Popularity: 2,535 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

9. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

10. [How AI is expanding what people do at work](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 27 Jul 2026 03:30:00 GMT
   - Summary: New OpenAI research shows how AI is expanding what workers do, with ChatGPT users taking on tasks across roles and reshaping job boundaries.

11. [Launching Health in ChatGPT](https://openai.com/index/health-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT
   - Summary: Health in ChatGPT now lets eligible U.S. users securely connect medical records and Apple Health to get more personalized insights and better understand their health.

12. [Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: OpenAI announces Project Camellia in Effingham County, Georgia, with commitments to responsible energy, community investment, jobs, and access to Codex.

13. [How news organizations are using AI to advance their vital missions](https://openai.com/index/how-news-organizations-are-using-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: News organizations are using AI to strengthen reporting, grow audiences, and improve business operations, with OpenAI tools supporting journalists and publishers worldwide.

14. [Advancing the next era of national science](https://openai.com/index/advancing-the-next-era-of-national-science)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines its commitment to advancing American science working with the U.S. Department of Energy and national labs to use frontier AI to accelerate discovery.

15. [NTT DATA Group cuts incident analysis to 30 minutes with Codex](https://openai.com/index/ntt-data)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 GMT
   - Summary: NTT DATA Group uses ChatGPT Enterprise and Codex to help 9,000 employees automate work, cut incident analysis to 30 minutes, and scale secure AI adoption.

16. [Introducing the ChatGPT for small business program](https://openai.com/index/introducing-chatgpt-small-business-program)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 17:00:00 GMT
   - Summary: OpenAI launches the ChatGPT for Small Businesses program, helping entrepreneurs build AI skills, automate work, and grow with ChatGPT Work.

17. [David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC](https://openai.com/index/david-velez-robin-vince-join-openai-boards)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT
   - Summary: David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC, bringing global leadership in finance, technology, and governance.

18. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

19. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

20. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

21. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

22. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

23. [What building Shippy taught us about building agents](https://huggingface.co/blog/allenai/shippy-tech-blog)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:29:41 GMT

24. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

25. [Welcome Inkling by Thinking Machines](https://huggingface.co/blog/thinkingmachines-inkling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

26. [Introducing Real World VoiceEQ: Measuring the human quality of voice AI](https://huggingface.co/blog/real-world-voiceeq)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

27. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

28. [Cloud-Native Evaluation-as-a-Service: A Microservices Architecture for Scalable AI Monitoring with Conformal Guarantees](https://arxiv.org/abs/2607.21623)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21623v1 Announce Type: new Abstract: We present EaaS, a cloud-native reference architecture that operationalizes AI evaluation methods as six stateless Kubernetes microservices: conformal prediction with finite-sample-corrected Adaptive Prediction Sets, calibration assessment, drift detection via RFF-approximated Maximum Mean Discrepancy, fairness monitoring with bootstrap confidence intervals, a DAG-based pipeline orchestrator, and a result storage API. We validate four key methodological concerns. First, empirical coverage is consistent with the marginal conformal guarantee across K=50 random calibration/test splits, with mean coverage within 1.4 percentage points of the nominal target. Second, all four MMLU answer tokens appear in the top-20 logprobs with 0% imputation needed, and simulated imputation at 10% produces less than 1.5% coverage impact. Third, RFF-MMD achieves 100% detection power for mild and severe drift at the median heuristic bandwidth, with Type I error between 5-8.5%. Fourth, fairness monitoring on the UCI Adult Income dataset reveals significant demographic parity disparities by race (DP gap=0.33) with stable alerts across sequential batches. Conformal prediction and calibration services achieve sub-2ms p99 latency at batch size 100; RFF-MMD requires ~500ms suited for periodic batch monitoring. A comparison with four open-source tools suggests that, to the best of our knowledge, no current platform combines conformal-prediction-as-a-service, microservice decomposition, and DAG-based orchestration.

29. [Producing a complete nuclear data library for adjoint Monte Carlo simulations](https://arxiv.org/abs/2607.22192)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22192v1 Announce Type: new Abstract: Radiation shielding applications related to reactor design typically involve situations where the source region (the core) is much larger than the detector region (a dosimeter). In such cases, the efficiency of Monte Carlo simulation might be significantly increased by solving the adjoint transport equation: adjoint particles are born from the detector, undergo adjoint ('reversed') flights and collisions, and accumulate their tallies in the source region. A key prerequisite to sample the adjoint collision events is the preparation of adjoint nuclear data. In this work, we propose a general method able to handle the diversity of nuclear reactions available in modern neutron data evaluations, and ultimately create a full adjoint nuclear data library. This is a stepping stone in view of implementing adjoint sampling schemes in TRIPOLI-5 __ , the next-generation Monte Carlo code developed by CEA and ASNR. We validate this strategy based on a relevant continuous energy benchmark configuration involving mixtures of heavy and light nuclides, and we compare our results to those obtained by standard forward Monte Carlo simulations.

30. [Hyperspatial Sampling: Circumventing Free-Energy Barriers via Replica Exchange with Extra Dimensions](https://arxiv.org/abs/2607.22417)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22417v1 Announce Type: new Abstract: Simulating systems with rugged free-energy landscapes remains a central challenge in computational physics and chemistry. We introduce hyperspatial replica exchange (HS-REX), an enhanced sampling method in which the physical system is artificially extended by additional spatial dimensions. In higher dimensions, free-energy barriers can be circumvented through paths that are geometrically inaccessible in the original space. Restricting the penalty to only solute atoms dramatically reduces the number of replicas required for solvated systems compared to standard temperature replica exchange, a feature especially relevant for biological applications. As proof of concept, we demonstrate the method on a double-well model system and on alanine dipeptide in explicit water as benchmark system. In the latter case, HS-REX achieves enhanced conformational sampling of not only the slow backbone dihedral angles, but also both chiral configurations of the molecule, which are sterically inaccessible to standard sampling in three dimensions. This demonstrates enhanced ergodic sampling over conventional temperature replica exchange.

31. [Graph-Theoretic Neural Network Fragmentation with Covariant Direct Molecular Force Learning: Enabling Coupled-Cluster Accuracy AIMD for Fluxional Systems](https://arxiv.org/abs/2607.21779)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21779v1 Announce Type: cross Abstract: Accurate ab initio molecular dynamics (AIMD) simulations of complex, fluxional chemical systems are severely limited by the high computational scaling of correlated electronic structure methods. To overcome this bottleneck, we present a robust, graph-theoretic molecular fragmentation framework integrated with machine learning to directly model post-Hartree-Fock nuclear forces at coupled cluster accuracy. Bypassing the limitations of automatic differentiation on learned energy surfaces that may struggle with link-atom Jacobians, our approach directly predicts nuclear force vectors. By projecting these vectors onto fragment-fixed principal axes of inertia, we establish co-variant descriptors that naturally preserve rotational, translational, and permutational invariance. The methodology achieves exceptional high parameter efficiency through a vector-valued training protocol that reduces trainable parameters by over an order of magnitude, while an unsupervised mini-batch k-means space tessellation algorithm constructs highly representative training databases using only 10% to 20% of reference configurations. We rigorously validated this framework on the highly fluxional solvated Zundel cation H_{13}O_6^+ ). Our fully machine-learning-predicted AIMD trajectories successfully reproduced complex dynamical signatures and key structural characteristics, including radial distribution functions and the velocity autocorrelation power spectrum. Ultimately, this scalable, systematically improvable framework bridges the gap between high-level correlated wavefunction theories and long-timescale reactive sampling, laying the foundation for advanced, LLM-inspired transfer learning in modern chemical dynamics simulations.

32. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.54; Date: 2026-07-27T15:47:37Z; Popularity: 1,542 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

33. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-07-24T05:53:25Z; Popularity: 476 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

34. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-27T07:12:03Z; Popularity: 284 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

35. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-27T12:10:23Z; Popularity: 217 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

36. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

37. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

38. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

39. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

40. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

41. [Adjustment Speed as a Safety Constraint for Nonstationary Reinforcement Learning](https://arxiv.org/abs/2607.21646)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21646v1 Announce Type: new Abstract: Ensuring safety in reinforcement learning under nonstationarity requires determining whether a learning system can safely adapt to forecasted environmental change within the required recovery horizon. Existing safe reinforcement learning methods typically assume stationary environments and do not explicitly consider adaptation speed as a safety concern. However, when environments evolve over time, delayed adaptation may result in transient unsafe behavior. This paper proposes adjustment speed as a safety constraint for nonstationary reinforcement learning. The central idea is to define safety in terms of adaptation feasibility: future states or regions may become unsafe when the adaptation required to remain safe exceeds the learning system's calibrated recovery capacity. The proposed framework uses learned context representations and short-horizon context forecasts to estimate adaptation demand and compare it with the agent's achievable adaptation capacity. When predicted adaptation demand exceeds the calibrated recovery capacity, the framework proactively tightens the admissible action set and activates an action-level shield to reduce unsafe behavior before violations occur. Experiments in a nonstationary driving environment show that the proposed approach primarily reduces safety violations in short-horizon windows aligned with context changes. Ablation studies further show that shielding is more conservative for peak- and tail-risk suppression, while optimization-level adjustment provides additional reductions in short-horizon switch-conditioned violations. These results support adaptation feasibility as a practical safety principle for reinforcement learning under nonstationarity and demonstrate that proactive intervention can improve safety during periods of environmental change.

42. [On the Removal of Solver-Induced Dependencies in Momentum-Weighted Interpolation for Primal and Continuous-Adjoint Flow Solvers](https://arxiv.org/abs/2607.21736)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21736v1 Announce Type: new Abstract: Momentum-Weighted Interpolation (MWI) is a key component in pressure--velocity coupling schemes on collocated cell-centered finite-volume methods for both primal and continuous adjoint formulations. In many practical implementations, MWI relies on diagonal momentum coefficients that include contributions from under-relaxation and time discretization. As a result, both primal quantities of interest and adjoint sensitivities may exhibit a non-physical dependence on solver parameters such as relaxation factors and time-step size, and no well-defined limit is obtained as these parameters approach zero. In this work, building on previous developments in discrete-consistent MWI formulations, a simple correction is proposed that removes solver-induced contributions from the diagonal momentum coefficients in the pressure-driven term. The resulting formulation preserves the original discretization while eliminating artificial dependencies on relaxation and time-stepping parameters and is applied consistently to both primal and adjoint systems. To facilitate its application, the derivation is presented in a structured, recipe-like manner that can be readily followed and transferred to different finite volume-based solver configurations. The proposed modification is assessed for a two-dimensional laminar cylinder flow and a three-dimensional turbulent ship hull flow configuration. In both cases, the uncorrected formulation leads to significant variations in forces, wake-related quantities, and shape sensitivities when solver parameters are altered, despite all simulations being iterated to converged residual levels and stable integral quantities. In contrast, the corrected formulation yields consistent results across a wide range of relaxation factors and time-step sizes.

43. [Learning Lattice Parameters from Powder X-Ray Diffraction Data Using Invariants](https://arxiv.org/abs/2607.21829)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21829v1 Announce Type: new Abstract: We present a machine learning (ML) method to determine unit cell parameters from powder X-Ray diffraction (XRD) data using a novel invariant lattice representation. In ML, the data representation used can have a substantial impact on the prediction quality. Previous approaches have directly predicted lattice parameters ($a,b,c,\alpha,\beta,\gamma$) from XRD inputs. However, these parameters depend strongly on the unit cell reduction or convention used. In this work, we construct an invariant representation of the reciprocal lattice that is independent of primitive cell convention, based on the bispectrum--a descriptor built from spherical harmonic projections of lattice points. The calculation of the lattice bispectrum is differentiable, and we demonstrate how to invert it using a dynamic programming approach. We show that when fixing ML model architecture, using the lattice bispectrum as the ML target rather than the unit cell parameters leads to more accurate lattice parameter predictions. For example, using the MP-20 dataset, the bispectrum reduces length mean absolute percentage error (MAPE) from 11.18% to 2.44% and angle MAPE from 12.74% to 3.07% compared to direct prediction with the same model architecture. We additionally benchmark our approach against pre-existing XRD to crystal structure models such as Crystalyze and assess its performance on the experimental RRUFF dataset. Beyond unit cell representation, we anticipate this invariant lattice representation could serve more broadly as a geometry-aware target for other crystallographic machine learning tasks such as structure generation.

44. [Effect of Al-Zn alloy wafer grain boundary diffusion on the magnetism and microstructure of sintered NdFeB magnets](https://arxiv.org/abs/2607.21870)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21870v1 Announce Type: cross Abstract: This study systematically investigates Al-Zn grain boundary diffusion (GBD) treatment on sintered Nd-Fe-B magnets using $Al_{80}Zn_{20}$ alloy sheets as the diffusion source. The alloy sheets were placed at both ends of cylindrical samples and diffusion-annealed at 900$^\circ$C and 700$^\circ$C for 7 hours under vacuum ($\leq5\times10^{-3}$ Pa), followed by tempering at 500$^\circ$C for 2 hours. Magnetic measurements show that coercivity increases from 951.5kA/m in the untreated sample to 1158.2kA/m at 900$^\circ$C (a gain of 206.7kA/m, 21.7\%) and to 1039.6kA/m at 700$^\circ$C (a gain of 88.1kA/m, 9.3\%), while remanence declines modestly from 1282mT to 1256mT after the high-temperature treatment. Scanning electron microscopy (SEM), energy-dispersive X-ray spectroscopy (EDS), and X-ray diffractometer (XRD) analyses reveal that the 900$^\circ$C treatment produces a thinner, more continuous grain boundary phase and a distinct core-shell structure around the main-phase grains. EDS mapping shows that Al preferentially enriches the shell region of the $Nd_2Fe_{14}B$ grains, while Zn predominantly resides in the grain boundary phase, where it lowers the melting point of the intergranular phase and improves its fluidity. XRD confirms that no secondary phases are formed, though a slight lattice expansion suggests partial Al substitution for Fe in the main phase. Verified by computational analysis, the coercivity enhancement is attributed to three synergistic factors: improved grain boundary decoupling, the formation of a high-anisotropy shell layer that strengthens domain-wall pinning, and the smoothing of grain edges to suppress reverse-domain nucleation. Overall, the 900$\circ$C treatment proves considerably more effective than 700$\circ$C, providing a non-heavy-rare-earth pathway for enhancing coercivity in sintered Nd-Fe-B magnets for high-temperature applications.

45. [PIML-OFEM: A New Large-Scale Structural Analysis Method Based on Problem-Independent Machine Learning and Overlapping Finite Element Technique](https://arxiv.org/abs/2607.22019)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22019v1 Announce Type: cross Abstract: High-resolution analysis and design of large-scale heterogeneous structures require accurate reduced-order models and efficient online computation. Existing multiscale methods must repeatedly construct local basis functions for different material distributions, whereas substructure-based problem-independent machine learning (PIML) methods can be limited by prescribed boundary displacement interpolation. We propose PIML-OFEM, an overlapping finite element method accelerated by problem-independent machine learning. Each substructure retains only its corner-node degrees of freedom. Oversampled numerical basis functions are constructed by solving local elasticity problems on extended domains and restricting the solutions to the target substructure, eliminating prescribed displacement interpolation on its boundary. Independently constructed local bases are blended through a partition-of-unity overlapping formulation to obtain a globally continuous displacement field. A U-Net learns the mapping from local Young's modulus distributions to numerical basis functions, replacing repeated online local solves and allowing the model to be reused across load cases and global boundary conditions. Numerical examples show close agreement with fine-scale finite element results in displacement and elemental strain energy. PIML-OFEM reduces online computational cost relative to direct finite element analysis and improves accuracy over PIML substructure models based on linear boundary interpolation. In topology optimization, the method supports stable high-resolution iterations with small filter radii and preserves fine-scale features, including local patterns resembling rank-2 microstructures. The framework provides an efficient physics-data approach for large-scale heterogeneous structural analysis and high-resolution topology optimization.

46. [Latent PDE mapping for efficient physics-informed learning across geometries with limited data](https://arxiv.org/abs/2607.22215)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22215v1 Announce Type: cross Abstract: In this study, we introduce latent PDE mapping, a broadly applicable physics-informed learning technique designed to enable efficient geometric generalization with sparse training data. Latent PDE mapping pulls back geometry-specific PDE residuals and boundary conditions to a predefined latent geometry via the deformation gradient, thereby enabling the automated calculation of geometry-consistent shape gradients that are missing in conventional physics-informed machine learning formulations. We demonstrate the utility of latent PDE mapping in solving the anisotropic Aliev-Panfilov PDE of cardiac electrophysiology using both physics-informed neural networks and physics-informed deep operator networks. The Aliev-Panfilov PDE serves as a challenging exemplar: a nonlinear, time-dependent PDE benchmark with sharp gradients that are expensive to capture using traditional numerical solvers. To represent the limited data regime, we train the networks using just fifteen geometric samples drawn from parameterized distributions in two and three spatial dimensions. While modest improvements appear for geometries parameterized by affine and shear deformations, latent PDE mapping demonstrates significant benefits on select geometric families, achieving a factor ~4-6 reduction in mean relative L2 error. Furthermore, our results show that the computational cost of applying latent PDE mapping was modest during network training, and negligible at inference. Taken together, our study highlights how latent PDE mapping facilitates the creation of generalizable physics-informed machine learning models from limited sets of training geometries.

47. [Chiral vibrational modes and vibrational circular dichroism](https://arxiv.org/abs/2607.22257)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 27 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22257v1 Announce Type: cross Abstract: The recent interest in chiral phonons in a variety of physical phenomena and their hypothesized role in the chiral-induced spin selectivity effect [Phys. Rev. Research, 5, L022039 (2023)] call for further investigation into the chirality of molecular vibrations. Although molecular chirality has conventionally been quantified using structural properties, recent work has highlighted the role of dynamical response properties as chirality metrics. In this work, we examine an inter-atom helicity pseudoscalar as a complementary measure of vibrational chirality, associated with the vibrational circular dichroism (VCD) intensity in the fixed partial charge (FPC) approximation. This pseudoscalar is translationally and rotationally invariant, can distinguish between opposite enantiomers, and unlike an atomic pseudoscalar measure considered in our earlier work [Phys. Rev. Lett., 133, 268001 (2024)] does not rely on a predefined symmetry axis. For a twisted ethane model as well as several small molecules, this pseudoscalar correlates well with structural descriptors based on the continuous chirality measure. Overall, our results support response-based metrics as a physically meaningful and practically useful characterization of vibrational chirality. Importantly, while the FPC-based VCD estimate provides a useful quantifier of vibrational chirality, we show that it is a rather poor predictor of the actual molecular VCD response because the latter is strongly influenced by the (vibrational configuration-dependent) molecular electronic response.

48. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

49. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-27T13:46:10Z; Popularity: 710 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

50. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.64; Date: 2026-07-27T14:24:47Z; Popularity: 636 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

51. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-07-26T07:26:05Z; Popularity: 157 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

52. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-23T11:51:14Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

53. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

54. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

55. [Show HN: How I built a debugging tool, and the agent, using it, found bugs in it](https://news.ycombinator.com/item?id=49064283)
   - Source: Hacker News; Group: Tech community; Score: 1.08; Date: 2026-07-27T01:44:25Z; Popularity: 1 points, 1 comments
   - Summary: HN discussion: 1 points, 1 comments.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Toward User-Conditioned Evaluation of Personal LLM Agents under Temporal Interventions

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.21635

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
