# Agrova Product Master

---

## 1. Purpose

This document defines the complete product model of Agrova.

It translates the Agrova Product Vision into a structured product system connecting:

- farmer experience,
- farm,
- farm context,
- Pashu,
- Khet,
- resources,
- activities,
- tasks,
- weather,
- soil,
- diagnostics,
- evidence,
- knowledge,
- intelligence,
- recommendations,
- decisions,
- outcomes,
- yield,
- economics,
- farm memory,
- and farm learning.

The Product Master is the product-level bridge between the Product Vision and the Feature Registry, Roadmap, Requirements, Architecture, API Contracts, Database Design, Security, Testing, Decisions, Risks, Glossary, and Releases.

This document defines what Agrova is as a product.

It does not replace implementation-level engineering specifications.

---

## 2. Product Definition

Agrova is a farmer-centered digital farm operating system and farm intelligence platform.

Agrova is designed to understand the farmer's particular farm, remember what happens on that farm, connect relevant evidence and trusted knowledge, and help the farmer decide what to do next.

Agrova is organized around the actual farm rather than isolated agricultural utilities.

The product connects the farmer's animals, fields, crops, resources, activities, tasks, observations, weather, evidence, knowledge, decisions, outcomes, yield, and economics into one evolving farm context.

---

## 3. Product Promise

Agrova's core product promise is:

> Given everything happening on this particular farm, help the farmer decide what to do next.

The product should progressively move from:

- recording information,
- understanding information,
- identifying missing information,
- gathering evidence,
- validating information,
- applying trusted knowledge,
- evaluating options,
- explaining possible outcomes,
- helping the farmer act,
- remembering what happened,
- measuring outcomes,
- and learning from farm history.

Agrova should not simply answer questions.

It should help the farmer make better decisions within the context of the particular farm.

---

## 4. Product Philosophy

Agrova follows these principles.

### 4.1 Farmer First

The farmer should not need to understand software terminology or complex workflows.

The product should fit the farmer's daily routine.

### 4.2 Technology Adapts to the Farmer

Agrova should adapt to the farmer's:

- routine,
- language,
- knowledge level,
- device,
- connectivity,
- interaction style,
- and available resources.

Core philosophy:

> Farmer ko technology samajhne ki zarurat nahi - technology ko farmer samajhna chahiye.

### 4.3 Observation Before Assumption

The farmer should be able to tell Agrova what they see without already knowing the technical diagnosis.

### 4.4 Evidence Before Intelligence

Agrova should distinguish between:

- farmer observation,
- measured evidence,
- professional assessment,
- AI interpretation,
- and recommendation.

### 4.5 Context Before Recommendation

Recommendations should use the particular farm's context whenever sufficient information exists.

### 4.6 Possible Futures, Not False Certainty

Agrova should help farmers prepare for possible outcomes rather than pretending to know the future with certainty.

### 4.7 Human Decision Authority

Agrova assists the farmer.

The farmer remains the final decision-maker unless a future workflow explicitly delegates a bounded operational action.

### 4.8 Memory Matters

Agrova should remember what happened previously so that the farmer does not repeatedly need to explain the same farm context.

### 4.9 Outcome Matters

A recommendation is not the end of the workflow.

Agrova should eventually understand:

- what was recommended,
- what the farmer decided,
- what action happened,
- what result occurred,
- and what the farm learned from it.

---

## 5. Product Model

Agrova is organized as a connected farm system.

The primary product flow is:

```text
FARMER
  |
FARM
  |
FARM CONTEXT
  |
PASHU + KHET + RESOURCES
  |
ACTIVITIES + TASKS
  |
WEATHER + SOIL + EVIDENCE + DIAGNOSTICS
  |
KNOWLEDGE
  |
INTELLIGENCE
  |
RECOMMENDATIONS
  |
DECISIONS
  |
ACTIONS
  |
OUTCOMES
  |
YIELD + ECONOMICS
  |
FARM MEMORY
  |
FARM LEARNING
## 6. Product Context

Agrova is organized around the particular farm.

Farm Context combines the information needed to understand the current state of the farm.

It may include:

- farmer and farm identity,
- fields,
- crops,
- animals,
- resources,
- activities,
- tasks,
- weather,
- soil,
- observations,
- diagnostics,
- recommendations,
- decisions,
- outcomes,
- yield,
- and economics.

Farm Context is temporal.

Current information must not silently replace historical information.

The product should distinguish:

- current state,
- historical state,
- planned state,
- observed state,
- measured state,
- assessed state,
- and inferred state.

---

## 7. Farmer Experience

Agrova should fit the farmer's real working day.

The experience should prioritize:

- simple interactions,
- minimal typing,
- voice where useful,
- local language,
- clear priorities,
- understandable explanations,
- practical actions,
- and low cognitive load.

The farmer should be able to record information without understanding Agrova's internal technical model.

The product should progressively convert simple farmer observations into structured farm context.

---

## 8. Farmer Interaction Model

The primary interaction model is:

```text
FARMER
  |
OBSERVES
  |
TELLS AGROVA
  |
AGROVA UNDERSTANDS
  |
VALIDATES
  |
USES FARM CONTEXT
  |
EXPLAINS OPTIONS
  |
FARMER DECIDES
  |
ACTION
  |
OUTCOME
```

Interaction may use:

- voice,
- text,
- photo,
- structured forms,
- reminders,
- summaries,
- alerts,
- and future conversational interfaces.

Agrova should ask for clarification when important information is ambiguous.

---

## 9. Farmer Home / Dashboard

The Farmer Home should provide a practical view of what matters now.

It may summarize:

- farm status,
- important tasks,
- animal-related priorities,
- crop-related priorities,
- weather,
- observations requiring attention,
- recommendations,
- pending actions,
- and recent outcomes.

The dashboard should prioritize actionable information rather than displaying every available data point.

The dashboard should evolve as Agrova gains more farm context.

---

## 10. Pashu Product Area

Pashu manages the animal side of the farm.

The product area includes:

- animal identity,
- animal profile,
- health,
- vaccination and preventive care,
- breeding and reproduction,
- nutrition and feed,
- milk records,
- veterinary support,
- laboratory information,
- and animal history.

Animal records should preserve historical events.

Health-related intelligence must remain bounded by professional validation where required.

AI may assist with understanding and triage but should not replace veterinarians or other qualified professionals.

---

## 11. Khet Product Area

Khet manages the field and crop side of the farm.

The product area includes:

- field registration,
- field identity,
- field location,
- field area,
- local land units,
- standard land units,
- field history,
- crop registration,
- crop variety,
- sowing,
- crop stage,
- expected harvest,
- harvest,
- yield,
- crop history,
- soil,
- water,
- irrigation,
- pest observations,
- crop disease observations,
- crop symptoms,
- crop photos,
- and expert escalation.

Field and crop history must remain preserved.

Farmer observations must remain distinguishable from professional, laboratory, and AI assessments.

---

## 12. Resources Product Area

Resources represent the farm resources available for agricultural work.

Resources may include:

- land,
- water sources,
- irrigation sources,
- machinery,
- equipment,
- inputs,
- seed,
- fertilizer,
- crop protection inputs,
- feed,
- and other farm resources.

Resources provide context for decisions.

Agrova should consider actual resource availability when presenting recommendations.

A theoretically suitable action may not be practically suitable if required resources are unavailable.

---

## 13. Activities Product Area

Activities represent work performed on the farm.

Examples include:

- sowing,
- irrigation,
- fertilizer application,
- crop protection activity,
- harvesting,
- animal feeding,
- animal care,
- field inspection,
- and other farm operations.

Activities should preserve:

- what happened,
- where it happened,
- when it happened,
- who performed it where applicable,
- and relevant associated resources.

Activities contribute to Farm Memory and future outcome analysis.

---

## 14. Tasks Product Area

Tasks represent work that needs to happen.

Tasks may originate from:

- farmer planning,
- recurring farm routines,
- crop activities,
- animal care,
- recommendations,
- weather conditions,
- or other farm events.

A task should have an understandable state such as:

- planned,
- pending,
- in progress,
- completed,
- skipped,
- or cancelled.

Tasks should support the farmer's real routine rather than becoming an independent project-management system.

---

## 15. Weather Product Area

Weather provides environmental context for the farm.

Agrova should eventually use weather information to support:

- current conditions,
- forecasts,
- farm and field context,
- crop planning,
- sowing decisions,
- irrigation decisions,
- crop risk,
- pest and disease context,
- and possible weather-related outcomes.

Weather data must retain provider provenance.

External weather failures must not prevent core farm records from working.

Weather should inform decisions rather than create false certainty.
---

## 16. Soil Product Area

Soil is a major component of farm context.

Agrova should eventually support:

- soil profile,
- soil test records,
- soil test reports,
- nutrient records,
- pH,
- organic matter,
- soil health history,
- and nutrient-balance intelligence.

Soil information may originate from:

- farmer records,
- laboratory reports,
- professional assessments,
- or other validated sources.

Measured results should be distinguished from estimates and AI inferences.

---

## 17. Diagnostic Product Area

Diagnostics provide a structured way to investigate farm problems.

The general diagnostic pattern is:

```text
OBSERVATION
    |
EVIDENCE
    |
ASSESSMENT
    |
VERIFICATION
    |
RECOMMENDATION
    |
ACTION
    |
OUTCOME
---

## 18. Farm Service Network

Agrova should provide a reusable service-network foundation for connecting farmers with relevant providers.

Potential provider categories include:

- soil laboratories,
- sample collection services,
- veterinarians,
- agronomists,
- agricultural experts,
- diagnostic services,
- machinery services,
- and other relevant farm services.

Provider information should include appropriate verification and service details.

The network should support discovery, matching, service requests, status tracking, evidence collection, and outcome linkage.

---

## 19. Evidence Product Layer

Evidence provides the factual basis used by Agrova.

Evidence may originate from:

- farmer observations,
- photographs,
- measurements,
- laboratory results,
- professional assessments,
- weather providers,
- imported records,
- or AI-supported interpretation.

Evidence should preserve provenance.

Agrova must distinguish between:

- observed,
- measured,
- assessed,
- verified,
- inferred,
- approximate,
- missing,
- and conflicting information.

Evidence should not be silently overwritten when conflicting information exists.

---

## 20. Knowledge Product Layer

Knowledge represents trusted agricultural information used to interpret farm context.

Knowledge may include:

- agricultural guidance,
- scientific knowledge,
- validated domain rules,
- expert knowledge,
- institutional guidance,
- and other approved sources.

Knowledge should be separated from individual farm data.

Where applicable, knowledge should preserve:

- source,
- version,
- date,
- jurisdiction,
- and review information.

Knowledge should be applied according to the relevant farm context.

---

## 21. Farm Context Engine

The Farm Context Engine combines relevant farm information into a usable context.

It should consider:

- farm identity,
- fields,
- crops,
- animals,
- resources,
- activities,
- tasks,
- weather,
- soil,
- observations,
- evidence,
- history,
- objectives,
- and constraints.

The context engine should distinguish current information from historical information.

Derived context should be traceable to its underlying data.

---

## 22. Information Gap Engine

Agrova should identify when available information is insufficient for a reliable assessment or recommendation.

An information gap may require:

- a farmer answer,
- a photograph,
- a measurement,
- a soil test,
- a laboratory report,
- an expert assessment,
- weather information,
- or another relevant evidence source.

The product should request the smallest useful amount of additional information where practical.

Agrova should not manufacture certainty when important evidence is missing.

---

## 23. Farm Intelligence

Farm Intelligence converts farm context and trusted knowledge into decision support.

The intelligence process should consider:

- current farm state,
- historical farm state,
- available evidence,
- knowledge,
- objectives,
- constraints,
- risks,
- alternatives,
- and possible outcomes.

Farm Intelligence should help answer:

> Given everything happening on this particular farm, what should the farmer do next?

The system should explain important reasoning in farmer-understandable language.

---

## 24. Suitability Intelligence

Suitability Intelligence evaluates whether an option fits the particular farm.

Suitability may consider:

- crop,
- variety,
- soil,
- weather,
- season,
- water,
- resources,
- labour,
- machinery,
- farmer objectives,
- financial constraints,
- and risk tolerance.

Suitability is not the same as generic agronomic possibility.

A recommendation should account for both agricultural suitability and practical farm constraints.

---

## 25. Decision Alternatives

Agrova should eventually be able to present multiple reasonable options where appropriate.

Alternatives may differ by:

- expected benefit,
- cost,
- water requirement,
- labour requirement,
- risk,
- timing,
- resource requirement,
- and expected outcome.

The product should explain important trade-offs.

It should also support "why not?" explanations when a seemingly obvious option is unsuitable.

---

## 26. Recommendation Product

A recommendation represents an actionable suggestion based on available farm context and evidence.

A recommendation may contain:

- recommended action,
- reason,
- supporting evidence,
- knowledge source,
- confidence,
- validity period,
- alternatives,
- risks,
- required inputs,
- and relevant constraints.

Recommendations should be understandable to the farmer.

A recommendation must not imply certainty that the underlying evidence does not support.

---

## 27. Decision Product

A decision records what the farmer chooses to do.

The product should distinguish:

- recommendation,
- farmer decision,
- actual action,
- and eventual outcome.

A farmer may:

- accept a recommendation,
- reject it,
- modify it,
- postpone it,
- or choose an alternative.

The farmer remains the primary decision authority.

---

## 28. Outcome Product

Outcome represents what happened after a decision and action.

Outcomes may include:

- completed activity,
- crop response,
- animal response,
- harvest result,
- yield,
- quality,
- cost,
- revenue,
- or other measurable results.

Outcome information should remain linked to the decision and action that preceded it where attribution is appropriate.

---

## 29. Yield Product

Yield records capture agricultural production outcomes.

Yield information should preserve relevant context such as:

- farm,
- field,
- crop,
- variety,
- season,
- area,
- seed,
- inputs,
- harvest,
- quantity,
- unit,
- and quality where available.

Agrova should preserve both current and historical yield records.

Yield comparisons should not automatically be treated as proof of causal relationships.

---

## 30. Economics Product Area

Economics connects farm activity with financial outcomes.

It may include:

- input costs,
- labour costs,
- machinery costs,
- service costs,
- production quantity,
- selling price,
- revenue,
- and profit-related information.

Economics should eventually connect decisions and outcomes with financial consequences.

The initial MVP should remain focused and avoid premature financial complexity.
---
## 31. Farm Memory

Farm Memory is the persistent historical record of what has happened on a particular farm over time.

It allows Agrova to preserve the history of the farm instead of treating every interaction as a new conversation.

Farm Memory may include:

- farm history,
- field history,
- crop history,
- animal history,
- soil history,
- water history,
- weather context,
- pest and disease observations,
- inputs and applications,
- farm activities,
- tasks,
- decisions,
- recommendations,
- actions taken,
- harvest records,
- yield records,
- quality information,
- economic records,
- diagnostic records,
- expert interactions,
- and relevant outcomes.

Farm Memory should preserve both current state and historical state.

Historical information must not be silently overwritten when new information becomes available.

Where multiple records represent different observations or measurements, Agrova should preserve the distinction and record the relevant source, time, and provenance.

Farm Memory should support temporal questions such as:

- What happened on this field previously?
- Which crop was grown here last season?
- What yield was achieved?
- Which seed or variety was used?
- What inputs were applied?
- What irrigation activities occurred?
- What pest or disease observations were recorded?
- What soil information was available?
- What recommendations were given?
- What decision did the farmer make?
- What action was actually taken?
- What happened after that action?
- What was the resulting yield or economic outcome?

Farm Memory should connect related records across time.

For example:

```text
FIELD
  ↓
CROP
  ↓
SEED / VARIETY
  ↓
SOWING
  ↓
INPUTS / ACTIVITIES
  ↓
WEATHER / WATER / SOIL CONTEXT
  ↓
OBSERVATIONS
  ↓
RECOMMENDATIONS
  ↓
DECISIONS
  ↓
ACTIONS
  ↓
HARVEST
  ↓
YIELD
  ↓
ECONOMIC OUTCOME
---
## 32. Farm Learning

Farm Learning means using structured historical farm information to improve future decisions.

The initial approach should focus on:

- historical analytics,
- comparisons,
- patterns,
- outcome tracking,
- and structured learning.

Advanced machine learning is a future evolution.

Agrova should not claim causal certainty from simple historical correlations.

---

## 33. Conversation Product

Conversation provides a natural interface to Agrova.

The intended flow is:

```text
FARMER
  |
VOICE / TEXT / PHOTO
  |
CONVERSATION ENGINE
  |
INTENT / STRUCTURED ACTION
  |
VALIDATION
  |
AUTHORIZATION
  |
DOMAIN SERVICE
  |
DATABASE
## 34. Voice and Local Language

Voice and local-language interaction are important parts of Agrova's farmer experience.

The product should support:

- natural farmer speech,
- Hindi,
- local languages where supported,
- dialect-friendly terminology,
- agricultural vocabulary,
- crop names,
- animal names,
- symptom descriptions,
- and local land-unit terminology.

Translation alone is not sufficient.

Agrova should preserve the intended meaning of the farmer's statement and confirm ambiguity when necessary.

---

## 35. Human-in-the-Loop

Agrova should involve qualified people when automated interpretation is insufficient or when professional judgment is required.

Human involvement may include:

- veterinarians,
- agronomists,
- agricultural experts,
- laboratories,
- diagnostic providers,
- and other appropriate professionals.

AI should assist these workflows rather than silently replacing professional judgment.

The farmer should be able to understand when an expert is being involved.

---

## 36. Farm Intelligence and Diagnostic Network

The long-term Agrova product should connect Farm Intelligence with a broader diagnostic and service network.

The intended flow is:

```text
FARM PROBLEM
    |
UNDERSTAND
    |
IDENTIFY MISSING INFORMATION
    |
COLLECT EVIDENCE
    |
VALIDATE / VERIFY
    |
BUILD FARM CONTEXT
    |
APPLY TRUSTED KNOWLEDGE
    |
ANALYZE OPTIONS
    |
RECOMMENDATION
    |
FARMER DECISION
    |
ACTION
    |
OUTCOME
```

This network should eventually support diagnostics across:

- soil,
- water,
- crops,
- and animals.

---

## 37. Farm Intelligence Loop

The long-term intelligence loop is:

```text
OBSERVE
  |
RECORD
  |
UNDERSTAND
  |
IDENTIFY GAPS
  |
COLLECT EVIDENCE
  |
VALIDATE
  |
BUILD CONTEXT
  |
APPLY KNOWLEDGE
  |
ANALYZE OPTIONS
  |
EXPLAIN POSSIBLE OUTCOMES
  |
FARMER DECIDES
  |
ACTION
  |
RESULT
  |
YIELD
  |
ECONOMICS
  |
FARM MEMORY
  |
FARM LEARNING
```

This loop represents the direction of Agrova's intelligence evolution.

---

## 38. MVP Product Scope

The MVP must remain a coherent vertical slice.

The planned MVP product flow is:

```text
FARMER
  |
FARM
  |
PASHU
  |
KHET
  |
RESOURCES / ACTIVITIES
  |
TASKS
  |
WEATHER
  |
DASHBOARD
  |
BASIC FARM CONTEXT / INTELLIGENCE
  |
CONVERSATION
  |
ECONOMICS
```

The MVP should establish the core farm operating-system foundation before advanced intelligence is introduced.

---

## 39. MVP Product Capabilities

The MVP should prioritize:

- authentication,
- farmer identity,
- farm creation,
- farm context,
- animal records,
- field records,
- crop records,
- basic resources,
- activities,
- tasks,
- weather integration,
- dashboard,
- basic context,
- basic intelligence,
- conversation,
- and basic economics.

The MVP should provide a usable farmer workflow rather than isolated demonstrations.

---

## 40. MVP Exclusions

The following should remain outside the initial MVP unless explicitly brought into the roadmap:

- full soil diagnostic network,
- advanced laboratory network,
- GIS-heavy workflows,
- satellite intelligence,
- IoT integrations,
- full Digital Farm Twin,
- advanced machine learning,
- large provider marketplace,
- complex automation,
- and premature microservice decomposition.

These capabilities remain part of future product evolution.

---

## 41. Future Product Evolution

Future Agrova capabilities may expand into:

- advanced soil intelligence,
- diagnostic networks,
- field-level intelligence,
- satellite and remote sensing,
- advanced weather intelligence,
- broader provider networks,
- advanced farm learning,
- decision experiments,
- and deeper economic intelligence.

Future capabilities must enter through Feature Registry and Roadmap governance.

They should not silently expand the MVP.

---

## 42. Digital Farm Twin Direction

The long-term product direction includes a Digital Farm Twin.

The Digital Farm Twin represents the evolving digital state of the actual farm.

It may integrate:

- farm identity,
- fields,
- crops,
- animals,
- soil,
- water,
- weather,
- resources,
- activities,
- observations,
- evidence,
- recommendations,
- decisions,
- outcomes,
- yield,
- and economics.

The Digital Farm Twin does not require a 3D representation.

Its purpose is to maintain a useful, evolving digital representation of farm reality.

---

## 43. Product Data Trust Model

Agrova must preserve the distinction between information types.

Important data states include:

- farmer-reported,
- approximate,
- measured,
- laboratory-verified,
- expert-verified,
- imported,
- AI-inferred,
- missing,
- and conflicting.

Data provenance should be retained where relevant.

The product should not present AI-inferred information as measured fact.

---

## 44. Product Safety Model

Safety is part of the product behavior.

Agrova should:

- avoid false certainty,
- distinguish observation from diagnosis,
- identify important information gaps,
- escalate to professionals where appropriate,
- preserve evidence provenance,
- respect farmer decision authority,
- and avoid presenting unsupported recommendations as established fact.

For health, veterinary, crop disease, and other consequential domains, the product should use appropriate professional validation.

---

## 45. Product Reliability Model

Agrova should remain useful when external services fail.

Examples:

- weather provider unavailable -> farm records continue,
- AI unavailable -> manual workflows continue,
- diagnostic provider unavailable -> existing evidence remains accessible,
- external API failure -> no false successful operation is recorded.

Core farm data must remain more reliable than optional external integrations.

The product should communicate failures clearly when they affect a requested action.
---

## 46. Product Security Model

Security is a product requirement, not only an engineering concern.

The product should enforce:

- authentication,
- authorization,
- farm-level data isolation,
- secure APIs,
- protected files,
- secure external integrations,
- auditability,
- privacy,
- secure secrets,
- and appropriate access control.

The backend remains the final authority for protected operations.

---

## 47. Product Architecture Relationship

The Product Master defines the product structure.

Engineering architecture defines how that product is implemented.

The relationship is:

```text
PRODUCT VISION
      |
PRODUCT MASTER
      |
FEATURE REGISTRY
      |
ROADMAP
      |
REQUIREMENTS
      |
ARCHITECTURE
      |
API / DATABASE / SECURITY / TESTING
      |
IMPLEMENTATION
      |
RELEASE
      |
OBSERVATION
      |
FEEDBACK
      |
PRODUCT EVOLUTION
## 48. Feature Traceability

Every meaningful product capability must trace to the Feature Registry.

The product hierarchy is:

```text
VISION
  |
PRODUCT AREA
  |
EPIC
  |
FEATURE ID
  |
REQUIREMENT
  |
ACCEPTANCE CRITERIA
  |
IMPLEMENTATION
  |
TEST
  |
RELEASE
  |
OBSERVATION
  |
FEEDBACK
```

The Feature Registry remains the permanent source of truth for registered capabilities.

The Product Master describes the product model without replacing Feature Registry governance.

---

## 49. Product Areas and Feature Registry

Product areas must remain aligned with registered features.

Core product areas include:

- Farmer,
- Farm,
- Pashu,
- Khet,
- Resources,
- Activities,
- Tasks,
- Weather,
- Diagnostics,
- Evidence,
- Knowledge,
- Intelligence,
- Recommendations,
- Decisions,
- Outcomes,
- Yield,
- Economics,
- Conversation,
- and Farm Memory.

Feature IDs provide traceability from product intent to implementation and release.

---

## 50. Product Evolution Governance

Agrova product evolution follows:

```text
IDEA
  |
REGISTER
  |
EVALUATE
  |
ROADMAP
  |
SPECIFICATION
  |
IMPLEMENTATION
  |
TEST
  |
RELEASE
  |
VERIFICATION
```

New capabilities must be registered and evaluated before implementation.

Ideas that are not yet committed remain in the Idea Backlog.

A new idea must not silently disrupt the current roadmap or sprint.

---

## 51. Product Boundaries

The Product Master defines product boundaries.

Agrova is not initially intended to become:

- a generic social network,
- an unrestricted marketplace,
- a general-purpose accounting platform,
- a general-purpose AI chatbot,
- or a collection of disconnected agricultural utilities.

The product remains centered on the farmer, the farm, farm context, decision support, action, and outcomes.

---

## 52. Product Success Model

Agrova success should be measured by whether the product creates useful value for the farmer.

Important dimensions include:

- useful farm records,
- reduced repeated explanation,
- better visibility of farm state,
- useful task support,
- relevant contextual information,
- trustworthy recommendations,
- successful actions,
- measurable outcomes,
- and improved farm decision quality.

The product should optimize for useful farmer outcomes rather than feature count.

---

## 53. MVP Success Model

The MVP should demonstrate that a farmer can:

1. create and access a farm,
2. maintain relevant farm information,
3. record animals,
4. record fields and crops,
5. manage basic resources and activities,
6. manage tasks,
7. receive weather context,
8. see a useful farm dashboard,
9. interact through the intended conversation flow,
10. receive bounded basic intelligence,
11. record economic information,
12. and preserve farm history.

The MVP should demonstrate a connected product rather than independent CRUD screens.

---

## 54. Long-Term Product Success

Long-term success means Agrova becomes increasingly useful because it understands the particular farm better over time.

The long-term product should:

- accumulate reliable Farm Memory,
- improve Farm Context,
- connect trusted evidence,
- use appropriate knowledge,
- evaluate alternatives,
- support better decisions,
- measure outcomes,
- learn from farm history,
- and improve future recommendations.

The goal is not simply more automation.

The goal is better farm decisions.

---

## 55. No Premature Complexity

Agrova should not introduce technical or product complexity before the product requires it.

The project should prioritize:

- coherent domain boundaries,
- reliable data,
- farm isolation,
- useful workflows,
- clear APIs,
- testing,
- security,
- observability,
- and maintainability.

The MVP should use the simplest architecture capable of supporting the intended product.

Advanced infrastructure should be introduced only when justified by product or engineering needs.

---

## 56. Product Implementation Direction

Implementation should follow the approved product and engineering chain:

```text
PRODUCT VISION
  |
PRODUCT MASTER
  |
FEATURE REGISTRY
  |
ROADMAP
  |
REQUIREMENTS
  |
ARCHITECTURE
  |
API CONTRACTS
  |
DATABASE DESIGN
  |
SECURITY
  |
TEST STRATEGY
  |
IMPLEMENTATION
  |
RELEASE
```

The initial implementation sequence is:

```text
BACKEND SHELL
  |
POSTGRESQL + FLYWAY
  |
HEALTH API
  |
ANGULAR SHELL
  |
ANGULAR <-> BACKEND
  |
AUTHENTICATION
  |
FARMER
  |
FARM
  |
PASHU
  |
KHET
  |
RESOURCES / ACTIVITIES
  |
TASKS
  |
WEATHER
  |
DASHBOARD
  |
BASIC CONTEXT / INTELLIGENCE
  |
CONVERSATION
  |
ECONOMICS
```

---

## 57. Product Documentation Chain

Agrova documentation follows:

```text
PRODUCT VISION
  |
PRODUCT MASTER
  |
FEATURE REGISTRY
  |
ROADMAP
  |
REQUIREMENTS
  |
ARCHITECTURE
  |
API CONTRACTS
  |
DATABASE DESIGN
  |
SECURITY
  |
TEST STRATEGY
  |
DECISIONS
  |
RISKS
  |
GLOSSARY
  |
RELEASES
  |
IMPLEMENTATION
```

Each document has a specific purpose.

No downstream engineering document should silently redefine upstream product intent.

---

## 58. Product Decision Authority

Product decisions must remain traceable.

The Product Vision defines the long-term product direction.

The Product Master defines the product model.

The Feature Registry defines registered capabilities.

The Roadmap defines planned delivery.

Requirements define testable behavior.

Architecture defines implementation structure.

Decisions record important engineering choices.

Security, Testing, Risks, and Releases govern their respective concerns.

When documents conflict, the conflict should be explicitly reviewed and resolved rather than silently ignored.
---
## 59. Product Master Summary

Agrova is a farmer-centered digital farm operating system and farm intelligence platform.

Its product purpose is to understand the particular farm, connect farm context with trusted evidence and knowledge, help the farmer evaluate possible actions, remember what happened, measure outcomes, and improve future decisions.

The Product Master connects the Product Vision with the Feature Registry, Roadmap, Requirements, Architecture, API Contracts, Database Design, Security, Testing, Decisions, Risks, Glossary, Releases, and implementation.

Agrova should progressively evolve from a system that records farm information into a system that understands farm context and helps the farmer decide what to do next.

---

## Living Document

This document evolves as Agrova evolves.

Changes should be intentional and discussed before implementation in the respective document governing that subject.

**Last Updated:** 5 September 2026
