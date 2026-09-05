# Agrova Architecture

## 1. Architecture Overview

Agrova is designed as a farmer-centric Farm Operating System.

The architecture follows the principle:

> The farmer should not have to adapt to the software. The software should adapt to the farmer's day.

Agrova connects farm identity, farm resources, observations, evidence, knowledge, intelligence, recommendations, actions, outcomes, and farm memory into one evolving system.

### 1.1 Baseline Architecture

```text
                         FARMER
                            |
                        FARM OS
                            |
             +--------------+--------------+
             |                             |
          PASHU                           KHET
          Animals                          Crops
             |                             |
      Health/Feed/Milk              Soil/Water/Crop
      Vet/Breeding/Records          Weather/Pest
             |                             |
             +--------------+--------------+
                            |
                     FARM RESOURCES
                            |
                     FARM INTELLIGENCE
                            |
            +---------------+---------------+
            |               |               |
         Weather           AI            Experts
         Soil             Voice           Labs
         Water            Photos       Community
                            |
                            v
                        ECONOMICS
                            |
                         WEALTH
```


## 2. Architectural Principles

Agrova architecture is governed by the following principles.

### 2.1 Farmer-Centric Design

The system must adapt to the farmer's workflow, language, knowledge level, available devices, and daily routine.

Technology should reduce cognitive and operational burden rather than create additional work.

### 2.2 Farm as the Primary Context

Agrova should understand the particular farm before making recommendations.

Farm identity, fields, crops, animals, resources, activities, observations, weather, evidence, decisions, and outcomes form the farm context.

### 2.3 Observation Before Recommendation

Agrova should distinguish between:

- Farmer observation
- Measured evidence
- Professional assessment
- AI interpretation
- Recommendation

The system must not present an inference as a verified fact.

### 2.4 Evidence-Driven Intelligence

When available information is insufficient for a useful decision, Agrova should identify the information gap and request or obtain appropriate evidence.

Examples include:

- Crop or pest photographs
- Soil testing
- Water testing
- Weather information
- Expert assessment
- Historical farm records

### 2.5 Human-in-the-Loop Safety

AI assists the farmer and agricultural professionals but does not replace professional judgment where verification is required.

Recommendations must remain explainable, traceable, and appropriately qualified.

### 2.6 History Must Be Preserved

Current farm state must never destroy historical information.

Agrova should retain relevant history for crops, fields, animals, soil, weather, inputs, activities, harvests, yields, economics, decisions, recommendations, and outcomes.

### 2.7 Graceful Degradation

External providers must not become single points of failure for core farm records.

If weather, AI, maps, laboratory, or other external services are unavailable, Agrova should continue supporting unaffected core functionality.

### 2.8 Modular Evolution

Agrova should begin as a modular monolith with clear domain boundaries.

Modules must have explicit responsibilities and contracts so that individual components can evolve independently when scale or operational requirements justify further separation.

## 3. Domain Architecture

Agrova uses a modular-monolith architecture with explicit domain boundaries.

Each module owns a clear business responsibility and exposes stable contracts to other modules. A feature may use several modules, but domain ownership must remain unambiguous.

### 3.1 Core Domain Modules

The target backend domain structure is:

```text
backend/
├── auth/
├── farmer/
├── farm/
├── pashu/
├── khet/
├── resources/
├── activities/
├── tasks/
├── weather/
├── diagnostics/
├── providers/
├── evidence/
├── knowledge/
├── context/
├── intelligence/
├── recommendations/
├── outcomes/
├── economics/
├── conversation/
└── shared/
```

These are architectural destinations. They do not require all modules to be implemented in the MVP.

### 3.2 Domain Responsibilities

- `auth` owns authentication, identity-provider integration, sessions/tokens, and account security.
- `farmer` owns farmer profile and farmer-level preferences.
- `farm` owns farm identity, ownership, membership, and farm-level configuration.
- `pashu` owns animal identity, health, feed, milk, breeding, and related records.
- `khet` owns fields, crops, crop state, soil-related field context, water-related field context, and crop observations.
- `resources` owns farm resources such as inputs, equipment, and other reusable farm assets.
- `activities` owns recorded farm activities and actions performed on the farm.
- `tasks` owns actionable work, reminders, status, and scheduling.
- `weather` owns normalized weather observations, forecasts, provider integration, and weather-related provenance.
- `diagnostics` orchestrates diagnostic workflows and diagnostic records.
- `providers` owns external-service/provider abstractions and provider metadata.
- `evidence` owns evidence records, provenance, attachments, verification state, and evidence relationships.
- `knowledge` owns validated agricultural knowledge and source/version metadata.
- `context` builds farm-specific context from authoritative domain data and evidence.
- `intelligence` evaluates suitability, risk, trends, constraints, and possible outcomes.
- `recommendations` manages recommendations, alternatives, explanations, decisions, and recommendation lifecycle.
- `outcomes` records what happened after decisions and actions.
- `economics` owns costs, revenue, yield economics, and farm-level financial outcomes.
- `conversation` translates farmer interaction into validated intents and domain actions.
- `shared` contains only genuinely cross-cutting technical concerns and must not become a general business-logic dumping ground.

### 3.3 Domain Ownership

Every persistent business concept must have one authoritative owner.

Other modules may reference an entity through an identifier or read model but must not silently maintain a competing source of truth.

Cross-domain operations should use explicit application services, domain events, or well-defined interfaces rather than direct uncontrolled access to another module's internals.

## 4. Farm Context Architecture

Farm context is the central integration concept in Agrova.

The system should build a current, evidence-aware representation of the particular farm before generating context-dependent intelligence.

### 4.1 Context Composition

Farm context may include:

- Farm identity and location
- Fields and growing areas
- Current and historical crops
- Animals
- Soil and water information
- Weather
- Resources and constraints
- Activities and tasks
- Observations
- Diagnostic evidence
- Historical yield and harvest
- Costs and economic outcomes
- Previous decisions and recommendations
- Previous outcomes

### 4.2 Context Is Derived, Not a New Source of Truth

The context layer should aggregate authoritative domain information.

It must not duplicate business state unnecessarily or silently modify the source records from which context is built.

Context can be materialized or cached for performance, but the authoritative domain records remain the source of truth.

### 4.3 Temporal Context

Context must respect time.

Relevant information may depend on:

- Season
- Crop cycle
- Crop stage
- Weather window
- Recent activity
- Historical field state
- Animal lifecycle
- Diagnostic date
- Recommendation validity period

Current state must therefore be interpreted together with relevant history.

### 4.4 Context Confidence and Data Quality

Context should preserve data-quality states such as:

- Missing
- Approximate
- Farmer-reported
- Imported
- Lab-verified
- Expert-verified
- AI-inferred
- Conflicting

Lower-quality or conflicting evidence must not be silently treated as verified fact.

## 5. Evidence and Diagnostics Architecture

Agrova separates what was observed from what was measured, assessed, inferred, or recommended.

The reusable diagnostic pattern is:

```text
Observation
    ↓
Evidence
    ↓
Assessment
    ↓
Verification
    ↓
Recommendation
    ↓
Action
    ↓
Outcome
```

### 5.1 Observation

Observations may originate from the farmer, a photograph, a device, an external provider, or another trusted source.

An observation records what was seen or reported without prematurely asserting a diagnosis.

### 5.2 Evidence

Evidence records the source, time, subject, provenance, and verification state of information used for decision-making.

Evidence may include photographs, measurements, reports, weather records, laboratory results, expert assessments, or historical farm records.

### 5.3 Diagnostic Orchestration

When information is insufficient:

```text
Problem
  ↓
Known information
  ↓
Missing information
  ↓
Evidence collection
  ↓
Assessment
  ↓
Verification
  ↓
Recommendation
```

The information-gap engine should prefer the least burdensome evidence that materially improves the decision.

### 5.4 Evidence Provenance

Every important evidence item should preserve provenance such as:

- Source
- Source type
- Recorded time
- Subject/farm/field
- Collection method
- Verification state
- Related report or attachment
- Interpretation history where applicable

Conflicting measurements must remain distinguishable. The system must not silently overwrite one source with another.

## 6. Knowledge Architecture

Agrova separates agricultural knowledge from farm-specific observations and evidence.

### 6.1 Knowledge Sources

Knowledge may come from validated agricultural sources, professional guidance, institutional material, approved domain content, or other governed sources.

Each governed knowledge item should retain appropriate metadata such as:

- Source
- Publication or update date
- Version
- Jurisdiction or applicable region
- Review status
- Validity where known

### 6.2 Knowledge Is Not Farm Context

Knowledge describes what is generally known.

Farm context describes what is happening on this particular farm.

Intelligence combines the two:

```text
Trusted Knowledge
        +
Farm Context
        +
Evidence
        +
Constraints
        ↓
Farm Intelligence
```

### 6.3 Knowledge Versioning

When a recommendation depends on governed knowledge, Agrova should be able to identify the relevant knowledge version or source.

Updating knowledge must not rewrite historical recommendations or historical outcomes.

## 7. Farm Intelligence Architecture

The intelligence layer converts farm context and trusted knowledge into decision support.

It should evaluate:

- Suitability
- Risk
- Constraints
- Trends
- Timing
- Possible outcomes
- Alternatives
- Information gaps

### 7.1 Practical Farm Suitability

Suitability should consider more than agronomic possibility.

```text
Practical Suitability =
Agronomic Suitability
+ Farmer Objective
+ Available Resources
+ Actual Constraints
+ Risk Considerations
```

For example, a crop can be agronomically suitable but impractical because water, seed, labour, money, or timing is unavailable.

### 7.2 Decision Alternatives

Where meaningful alternatives exist, intelligence should be able to represent multiple options with trade-offs rather than forcing a single answer.

### 7.3 Explainability

Important outputs should be explainable in farmer-appropriate language:

- What was considered
- What evidence supports it
- What is uncertain
- Why an option is suitable
- Why an option may not be suitable
- What could change the assessment

### 7.4 Causal Caution

Historical associations must not automatically be presented as causal conclusions.

For example, a higher yield associated with a seed variety does not by itself prove that the variety caused the increase. Other differences such as weather, soil, inputs, timing, and management must be considered.

## 8. Recommendation and Decision Architecture

Recommendations are explicit decision-support objects, not hidden side effects of AI output.

### 8.1 Recommendation Content

A recommendation may include:

- Context used
- Proposed action
- Reason
- Supporting evidence
- Knowledge source/version
- Confidence or qualification
- Validity period
- Alternatives
- Risks
- Required inputs/resources
- Status

### 8.2 Recommendation Lifecycle

```text
Created
  ↓
Presented
  ↓
Accepted / Rejected / Modified
  ↓
Action
  ↓
Completed
  ↓
Outcome
```

The farmer remains the decision-maker.

### 8.3 Recommendation Feedback

Agrova should preserve whether a recommendation was:

- Followed
- Partially followed
- Modified
- Rejected
- Not acted upon

Where possible, the resulting outcome should be connected back to the recommendation.

### 8.4 Why and Why Not

The recommendation experience should support both:

> Why do you recommend this?

and:

> Why not the other option?

This is important for trust and informed farmer decisions.

## 9. Weather Architecture

Weather is a farm-context input and an external-provider capability.

### 9.1 Provider Boundary

External weather services must be accessed through provider adapters.

The domain should depend on Agrova's normalized weather contract rather than directly on a provider-specific API.

```text
Weather Provider
      ↓
Provider Adapter
      ↓
Normalized Weather Contract
      ↓
Farm / Field Context
      ↓
Crop + Stage + Weather
      ↓
Risk / Suitability / Planning
```

### 9.2 Weather Provenance

Stored weather information should preserve its provider/source and relevant retrieval time.

Forecasts and observations must remain distinguishable.

### 9.3 Weather and Recommendations

Weather should inform crop suitability, sowing windows, irrigation planning, risk assessment, and other context-dependent decisions only when the relevant data and confidence support such use.

### 9.4 Provider Failure

If a weather provider is unavailable:

- Core farm records continue working.
- Previously stored weather remains available where appropriate.
- New weather-dependent intelligence is qualified or deferred when current data is required.
- Provider failures are observable and recoverable.

## 10. Diagnostic and Provider Network Architecture

Agrova should use a reusable provider-network architecture for services such as soil laboratories, sample collection, experts, veterinarians, and other trusted services.

### 10.1 Provider Abstraction

A provider record may contain:

- Provider type
- Service area
- Services/tests
- Collection availability
- Pricing where available
- Turnaround time where available
- Accreditation/recognition where applicable
- Verification status
- Contact/integration information

### 10.2 Soil Diagnostic Flow

A soil workflow may follow:

```text
Farmer Request
      ↓
Provider Matching
      ↓
Sample Collection
      ↓
Laboratory Processing
      ↓
Digital Report
      ↓
Agrova Evidence Record
      ↓
Interpretation
      ↓
Field-Specific Recommendation
```

### 10.3 Sample Lifecycle

A sample may retain:

- Sample ID
- Type
- Farm/field
- Collection location
- Collection date/time
- Collector
- Collection method
- Depth where applicable
- Condition
- Transport information
- Laboratory
- Receipt time
- Test status
- Chain-of-custody information where applicable

### 10.4 Original Reports

Original laboratory or provider reports should be retained as evidence when permitted.

Interpretations must remain distinguishable from the original measured result.

## 11. Outcomes and Farm Memory

Agrova must learn from what actually happened on the farm.

### 11.1 Outcome Chain

```text
Decision
  ↓
Action
  ↓
Harvest / Result
  ↓
Yield
  ↓
Quality
  ↓
Revenue
  ↓
Profit / Economic Outcome
```

### 11.2 Historical Yield

Yield history should preserve relationships such as:

```text
Crop / Variety
    +
Field / Area
    +
Seed / Input information
    +
Season
    +
Management conditions
    ↓
Harvest quantity
    ↓
Yield
```

Yield records should preserve their original units and context rather than reducing history to a single number.

### 11.3 Farm Memory

Farm memory should retain relevant historical records of:

- Fields
- Crops
- Soil
- Weather
- Pests/disease observations
- Inputs
- Activities
- Harvests
- Yield
- Costs
- Revenue
- Decisions
- Recommendations
- Outcomes

### 11.4 Farm Learning

Initial farm learning should be based on reliable structured historical analytics.

Machine-learning systems may be introduced later when sufficient quality data, evaluation methods, and operational safeguards exist.

## 12. Conversation and Voice Architecture

Conversation is an interface to Agrova's domain system, not an unrestricted database mutation mechanism.

### 12.1 Interaction Flow

```text
Farmer Speech / Text / Photo
        ↓
Conversation Engine
        ↓
Intent / Structured Action
        ↓
Validation
        ↓
Domain Service
        ↓
Database
```

The LLM or conversational layer must not directly mutate the database.

### 12.2 Farmer Language

The interaction layer should support Hindi, local languages, dialect-friendly vocabulary, and domain-specific farmer terminology.

Translation alone is insufficient; intent and domain meaning must be preserved.

### 12.3 Confirmation and Ambiguity

Actions that create or modify important farm records should require appropriate confirmation when the intent or extracted values are uncertain.

Ambiguous input should produce clarification rather than an unsafe mutation.

## 13. Data and API Architecture

### 13.1 Database

PostgreSQL is the primary relational database.

Flyway manages schema migrations.

Persistent business data should use explicit relationships, constraints, indexes, and appropriate audit/provenance fields.

### 13.2 API Boundary

The API should expose business capabilities rather than database tables.

A single screen should receive one purposeful read model whenever practical.

For example:

```text
GET /api/farm/dashboard
```

may aggregate farm, crop, animal, task, alert, and weather information needed by that screen.

This is not an absolute one-call rule. The goal is purposeful aggregation without creating a generic "everything about the farm" endpoint.

### 13.3 Validation

Validation must occur at API boundaries and again in domain/application logic where business rules require it.

Client-side validation improves usability but is never the authoritative security or business-rule boundary.

### 13.4 Data Provenance

Important data should be traceable to its origin, such as:

- Farmer-reported
- Device/measured
- Weather provider
- Laboratory
- Expert
- AI-inferred
- Imported

### 13.5 History and Updates

Updates must preserve historical information where history is business-relevant.

Destructive replacement must not erase information needed for farm memory, audit, or outcome analysis.

## 14. Security Architecture

Security is foundational and applies across every protected farm operation.

### 14.1 Identity and Access

Agrova must separate:

- Account identity
- Authentication provider identity
- Farm membership/ownership
- Device/session

A user may operate a farm from a shared device, so device identity must not be treated as farm ownership.

### 14.2 Authorization

Every protected farm operation must verify that the authenticated actor is authorized for the target farm and operation.

Authorization must be enforced server-side.

### 14.3 Data Protection

The system should protect sensitive farmer and farm information through:

- Secure authentication
- Authorization
- Encryption in transit
- Appropriate encryption at rest
- Secure secret management
- Input validation
- Secure file/image/voice handling
- Minimal data collection
- Privacy-aware logging

### 14.4 Audit

Important protected operations should preserve:

```text
WHO
WHAT
WHEN
SOURCE
BEFORE
AFTER
```

Audit records should support security investigation and important business traceability.

### 14.5 External Integrations

External providers must receive only the data necessary for the operation and only under appropriate authorization and consent requirements.

## 15. Reliability and External Provider Isolation

Agrova depends on external systems but must not make them foundational single points of failure.

### 15.1 Provider Adapter Pattern

External integrations should be isolated behind interfaces/adapters.

Examples:

```text
WeatherProvider
MapProvider
AiProvider
SpeechProvider
DiagnosticProvider
ExpertProvider
```

The exact implementation may vary without changing core domain logic.

### 15.2 Failure Isolation

```text
Provider Failure
      ↓
Adapter detects failure
      ↓
Core domain remains available
      ↓
Use cached/previous data where safe
      ↓
Qualify or defer dependent intelligence
      ↓
Observe / retry / recover
```

### 15.3 No False Success

The system must not mark an external operation as successful merely because a request was sent.

External workflows should expose meaningful states such as pending, failed, completed, or unavailable where appropriate.

## 16. Observability Architecture

Agrova should be observable from the beginning without creating unnecessary operational complexity.

### 16.1 Logging

Logs should capture useful operational events without leaking sensitive farmer information.

Structured logs are preferred for backend services.

### 16.2 Metrics

Initial metrics should cover areas such as:

- API availability
- Request latency
- Error rates
- Provider failures
- Diagnostic workflow failures
- Recommendation processing failures
- Background task failures

### 16.3 Health

The backend should expose an application health mechanism suitable for local development and deployment monitoring.

### 16.4 Traceability

Important workflows should be traceable across boundaries using correlation/request identifiers where appropriate.

## 17. Testing Architecture

Testing must cover both technical correctness and farm-domain safety.

### 17.1 Test Layers

Agrova should use:

- Unit tests
- Integration tests
- API tests
- Security/authorization tests
- End-to-end tests for important user journeys

### 17.2 Domain-Safety Tests

Important tests should verify:

- Farmer cannot access another farm's protected data.
- Historical records are preserved.
- Conflicting evidence is not silently overwritten.
- External-provider failure does not corrupt core records.
- AI/conversation input cannot directly bypass domain validation.
- Recommendations preserve their supporting context where required.

### 17.3 Contract Tests

External-provider adapters and important internal contracts should be tested so provider changes do not silently break domain behaviour.

## 18. MVP Architecture Boundary

The MVP must implement a coherent vertical slice rather than attempting the entire long-term platform.

### 18.1 MVP Target

The initial architecture supports:

```text
Farmer
  ↓
Farm
  ↓
Pashu
  ↓
Khet
  ↓
Resources / Activities
  ↓
Tasks
  ↓
Weather
  ↓
Dashboard
  ↓
Basic Context / Intelligence
  ↓
Conversation
  ↓
Economics
```

### 18.2 MVP Engineering Strategy

The MVP remains a modular monolith.

The first implementation should establish:

- Spring Boot backend
- Angular frontend
- PostgreSQL
- Flyway migrations
- Authentication
- Farm ownership/authorization
- Core domain modules
- Health/observability baseline
- Provider adapter boundaries

### 18.3 Future Capabilities Not Required for MVP

The architecture should be ready for later capabilities without requiring their implementation now, including:

- Advanced soil diagnostic network
- Large provider marketplace
- Satellite intelligence
- IoT integration
- Advanced computer vision
- Advanced ML
- Full digital twin
- Experiment/trial management
- Large-scale ecosystem integrations

Architecture readiness must not become a reason to build premature infrastructure.

## 19. Future Evolution

### 19.1 Farm Digital Twin

The long-term system may maintain a continuously evolving farm-state model covering:

- Farm
- Fields
- Crops
- Animals
- Soil
- Water
- Weather
- Resources
- Activities
- Risks
- Decisions
- Outcomes
- Economics

The digital twin is a logical farm-state model, not a requirement for a 3D representation.

### 19.2 Scale Evolution

The modular monolith should be the default starting point.

Individual modules may later be separated when justified by:

- Scale
- Team ownership
- Independent deployment needs
- Reliability isolation
- Data/processing characteristics
- Operational requirements

Microservices are an evolution option, not the starting architecture.

### 19.3 Advanced Intelligence

Future intelligence may include:

- More sophisticated suitability models
- Predictive risk
- Farm-specific forecasting
- Computer vision
- Satellite-derived observations
- Sensor/IoT evidence
- Experiment and trial analysis
- Advanced outcome attribution

These capabilities must preserve the same evidence, provenance, explainability, and safety principles.

## 20. Architecture Summary

Agrova's architecture is organized around a simple system objective:

> Given everything happening on this particular farm, help the farmer decide what to do next.

The architecture therefore connects:

```text
FARM IDENTITY
     ↓
FARM CONTEXT
     ↓
PASHU / KHET / RESOURCES
     ↓
OBSERVATIONS
     ↓
EVIDENCE
     ↓
VALIDATION / VERIFICATION
     ↓
TRUSTED KNOWLEDGE
     ↓
FARM INTELLIGENCE
     ↓
OPTIONS / TRADE-OFFS
     ↓
RECOMMENDATION
     ↓
FARMER DECISION
     ↓
ACTION
     ↓
OUTCOME
     ↓
YIELD / ECONOMICS
     ↓
FARM MEMORY
     ↓
FARM LEARNING
```

The architecture must remain farmer-first, evidence-driven, explainable, secure, modular, resilient to external-provider failure, and practical for the MVP.

The MVP should establish the architectural foundation while leaving clear boundaries for future diagnostic networks, advanced intelligence, and the long-term Farm Digital Twin.
