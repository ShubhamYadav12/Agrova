# Agrova Idea Backlog

## 1. Purpose

This document captures Agrova ideas, opportunities, future capabilities, and potential product improvements that are not yet formally committed to the Feature Registry or current implementation roadmap.

The backlog exists to ensure that useful ideas are never silently lost while protecting the current roadmap from uncontrolled scope expansion.

An idea in this document does not automatically mean that it will be implemented.

Ideas must be evaluated before becoming committed product capabilities.

---

## 2. Backlog Governance

The lifecycle of an idea is:

```text
IDEA
  ↓
BACKLOG
  ↓
DUPLICATE CHECK
  ↓
VALUE / RISK EVALUATION
  ↓
DEPENDENCY REVIEW
  ↓
FEATURE REGISTRY
  ↓
ROADMAP
  ↓
REQUIREMENT
  ↓
IMPLEMENTATION
  ↓
TEST
  ↓
RELEASE
---
## 3. Backlog Scope

The Idea Backlog contains product, intelligence, platform, ecosystem, and future capability ideas that are not yet committed features.

An idea in this document is not automatically:

- a Feature Registry item
- an MVP commitment
- a roadmap commitment
- an implementation task
- an API contract
- a database requirement

Ideas remain here until they are evaluated and intentionally promoted.

The backlog protects Agrova from losing valuable ideas while preventing unplanned ideas from silently entering active development.

The backlog may contain ideas related to:

- Farm Intelligence
- Farm Context
- Soil and Diagnostics
- Weather and Risk
- Evidence and Farm Memory
- Yield and Economics
- Farm Service Networks
- Offline Operations
- GIS and Satellite
- IoT and Sensors
- Digital Farm Twin
- Future AI and predictive capabilities
- Future ecosystem capabilities

The backlog must remain aligned with the Product Vision, Product Master, Feature Registry, Roadmap, Requirements, Architecture, API Contracts, Database Design, Security, Testing, Decisions, Risks, Glossary, and Releases.

---

## 4. Idea Evaluation

Ideas are evaluated before becoming committed product capabilities.

Evaluation should consider:

- Farmer value
- Alignment with Agrova's Product Vision
- Alignment with the Product Master
- Strategic importance
- MVP relevance
- Technical feasibility
- Data availability
- Dependency requirements
- Security implications
- Safety implications
- Operational complexity
- External provider dependency
- Expected implementation effort
- Expected long-term value
- Risk of premature complexity

An idea should not be promoted only because it is technically interesting.

Farmer usefulness, product coherence, safety, feasibility, and timing must be considered together.

Ideas requiring significant infrastructure, external ecosystems, advanced AI, GIS, satellite data, IoT, or large provider networks should normally remain future ideas until the required foundation exists.

---

## 5. Idea Lifecycle

Agrova follows the lifecycle below:

Idea
→ Evaluation
→ Register as Feature
→ Roadmap Placement
→ Specification
→ Requirements
→ Architecture
→ API / Data Model
→ Implementation
→ Testing
→ Release
→ Verification
→ Feedback
→ Improvement

An idea may remain in the backlog for an extended period.

Promotion from the backlog requires intentional product decision-making.

When an idea is promoted:

1. Assign a permanent Feature ID in the Feature Registry.
2. Define its priority and lifecycle status.
3. Place it appropriately in the Roadmap.
4. Define requirements and acceptance criteria.
5. Identify architecture and data implications.
6. Define API and UI implications where applicable.
7. Define security and safety implications.
8. Define testing requirements.
9. Track release and verification.

An idea must never bypass the Feature Registry by directly becoming implementation work.

Ideas that are rejected, deferred, merged, or superseded should remain traceable rather than being silently deleted.
---

## 6. Farm Intelligence and Context Ideas

### IDEA-001 - Farm-Wide Intelligence Layer

Status: New

Priority: P1

Product Area: Farm Intelligence

Description:

Develop Agrova's ability to understand the combined state of a particular farm across animals, fields, crops, resources, weather, activities, tasks, economics, observations, history, and constraints.

Goal:

Move Agrova from separate feature management toward a unified farm intelligence system.

Long-Term Direction:

```text
Farm Data
  ↓
Farm Context
  ↓
Evidence
  ↓
Knowledge
  ↓
Intelligence
  ↓
Recommendation
  ↓
Action
  ↓
Outcome

---
## 7. Soil and Diagnostic Network Ideas
### IDEA-002 - Farm Context Engine

Agrova should maintain a continuously evolving understanding of the particular farm.

The context should combine:

- Farm identity
- Fields
- Crops
- Animals
- Resources
- Activities
- Tasks
- Weather
- Soil
- Water
- Observations
- Historical records
- Recommendations
- Decisions
- Outcomes

The system should distinguish current state from historical state.

Farm context should become the foundation for farm-specific intelligence rather than relying only on generic agricultural information.

This idea supports the long-term Agrova principle:

> Given everything happening on this particular farm, help the farmer decide what to do next.

Status: Future / Strategic Idea

---

### IDEA-003 - Information Gap Engine

Agrova should identify when available information is insufficient to safely provide a useful assessment or recommendation.

Instead of guessing, Agrova should determine what evidence is missing.

Possible evidence requests may include:

- Field photo
- Crop photo
- Soil test
- Water information
- Weather information
- Farm observation
- Expert assessment
- Laboratory result
- Historical record

The system should explain why additional information is useful and allow the farmer to provide it through the simplest practical interaction.

Status: Future / Strategic Idea

---

### IDEA-004 - Farm Decision Alternatives

Agrova should be able to present multiple practical options instead of assuming that one recommendation is always correct.

Alternatives may consider:

- Expected benefit
- Cost
- Water requirement
- Labour requirement
- Input availability
- Risk
- Timing
- Farmer objective
- Farm constraints

The farmer should be able to understand why one option may be preferable to another.

The system should support informed farmer decisions rather than replacing the farmer's decision authority.

Status: Future / Strategic Idea

Description:

Create a future Agrova capability that connects farmers with suitable soil testing providers and manages the complete diagnostic journey.

Potential flow:

```text
Farmer Request
  ↓
Provider Matching
  ↓
Sample Collection
  ↓
Laboratory
  ↓
Digital Report
  ↓
Agrova Record
  ↓
Interpretation
  ↓
Field-Specific Recommendation

---
## 8. Weather, Evidence and Farm Memory Ideas
### IDEA-005 - Agrova Soil Diagnostic Network

Status: New

Priority: P1

Product Area: Soil / Diagnostics / Farm Service Network

#### Purpose

Agrova should provide a trusted pathway through which a farmer can obtain soil testing, receive the original digital soil report, understand the results, and connect those results to the specific field and crop.

The goal is not simply to provide a soil test.

The goal is to connect:

Farmer
→ Field
→ Soil Sample
→ Diagnostic Provider
→ Laboratory
→ Test Results
→ Original Report
→ Agrova Interpretation
→ Field-Specific Recommendation
→ Farmer Decision
→ Action
→ Outcome

The diagnostic network should become an important evidence source for Agrova's Farm Intelligence system.

#### Core Concept

A farmer should not need to understand which laboratory, test, sample process, or technical parameter is required.

Agrova should help the farmer determine:

- Whether soil information is currently available
- Whether existing information is sufficient
- Whether a new soil test may be useful
- What type of sample or service is appropriate
- Which trusted provider may be available
- Whether doorstep or field sample collection is available
- What information the provider requires
- The status of the sample
- When the report becomes available
- What the report means for the specific field
- What actions may be considered next

Agrova should preserve the distinction between laboratory measurements and Agrova's interpretation.

#### Provider Network

The network should support multiple types of diagnostic providers, where available.

Potential provider categories include:

- Government soil laboratories
- Agricultural universities
- ICAR / KVK laboratories
- Recognized private laboratories
- Mobile soil testing services
- Doorstep sample collection services
- Field sample collection providers
- Other verified diagnostic providers

Agrova should not depend on a single provider.

Providers should be integrated through a common service abstraction so that additional providers can be added without changing the core farm domain.

#### Provider Information

A diagnostic provider may have information such as:

- Provider identity
- Provider type
- Service area
- Available soil tests
- Sample collection availability
- Doorstep collection availability
- Field collection availability
- Pricing
- Expected turnaround time
- Accreditation or recognition information where applicable
- Supported reporting formats
- Contact information
- Verification status
- Service availability status

Provider information should be treated as operational data and should be kept separate from laboratory results.

#### Diagnostic Request

A farmer or Agrova may initiate a soil diagnostic request for a particular field.

The request may contain:

- Farm
- Field
- Crop, where applicable
- Reason for testing
- Requested service
- Preferred provider
- Collection preference
- Requested date
- Service location
- Farmer notes
- Current observations
- Related evidence

The request should remain associated with the specific farm and field.

#### Sample Management

Agrova should support the lifecycle of a soil sample.

A sample record may contain:

- Sample ID
- Farm
- Field
- Collection date and time
- Collection location
- Collector
- Collection method
- Sampling depth
- Sample condition
- Transport information
- Provider
- Laboratory
- Received date
- Current sample status
- Related diagnostic request

The sample should remain traceable from collection through laboratory processing and report delivery.

#### Sample Lifecycle

A possible lifecycle is:

Requested
→ Scheduled
→ Collected
→ In Transit
→ Received by Laboratory
→ Testing
→ Report Generated
→ Report Delivered
→ Interpreted
→ Recommendation Available
→ Farmer Decision
→ Action
→ Outcome

The lifecycle should support failures, delays, cancellation, rejection, or re-collection where required.

Agrova must not falsely mark a diagnostic step as successful when the external provider has not confirmed it.

#### Laboratory Results

Agrova should preserve laboratory-reported measurements separately from interpretation.

A result may include:

- Test name
- Parameter
- Measured value
- Unit
- Reference range where supplied
- Laboratory
- Method where supplied
- Test date
- Result status
- Report reference
- Provenance

Laboratory measurements must not be silently modified by Agrova.

If a correction is required, the original value and the correction history should remain traceable.

#### Original Diagnostic Report

The original laboratory report should be preserved where legally and technically appropriate.

Agrova should retain:

- Original report
- Report identifier
- Laboratory
- Report date
- Related sample
- Related field
- Report status
- Upload or delivery source
- Provenance
- Version information where applicable

The original report should remain distinguishable from Agrova-generated summaries or recommendations.

#### Soil Interpretation

Agrova may interpret available soil information using validated agricultural knowledge.

Interpretation should consider:

- Specific field
- Soil information
- Current crop
- Crop stage
- Season
- Water availability
- Farmer objectives
- Available resources
- Historical field information
- Other relevant farm context

The system should clearly distinguish:

Laboratory Measurement
→ Agrova Interpretation
→ Recommendation

AI-generated interpretation must not be presented as a laboratory measurement.

#### Field-Specific Recommendation

Soil information should eventually contribute to field-specific recommendations.

Possible recommendation areas include:

- Soil amendments
- Nutrient management
- Fertilizer planning
- Crop suitability
- Variety considerations
- Irrigation considerations
- Soil health improvement
- Crop planning

Recommendations should consider the complete farm context rather than relying on one soil parameter alone.

#### Evidence and Provenance

Every diagnostic result should retain its source.

Possible evidence sources include:

- Farmer
- Sample collector
- Laboratory
- Agricultural expert
- Agrova knowledge system
- Agrova AI interpretation
- External provider

Agrova should distinguish:

- Farmer-reported
- Measured
- Lab-verified
- Expert-verified
- AI-inferred
- Imported
- Conflicting

Evidence provenance is essential for trustworthy Farm Intelligence.

#### Information Gap Handling

If the available soil information is insufficient for a useful or safe recommendation, Agrova should identify the information gap.

For example:

Existing Information
→ Insufficient Evidence
→ Identify Missing Information
→ Request Soil Test / Additional Evidence
→ Receive Result
→ Re-evaluate Farm Context
→ Generate Updated Assessment

Agrova should prefer identifying missing evidence over guessing.

#### Multiple Reports and Historical Soil Data

Agrova should preserve soil history for each field.

Multiple soil tests over time should remain available rather than replacing the previous report.

Historical soil information can eventually support:

- Soil health trends
- Nutrient changes
- Crop planning
- Input decisions
- Long-term field management
- Farm learning

Historical records must remain distinguishable by date, field, sample, provider, and laboratory.

#### Provider Failure and Reliability

Failure of a diagnostic provider must not break the farmer's existing farm records.

If a provider is unavailable:

- Existing farm data remains accessible
- Existing soil reports remain accessible
- Pending requests retain their status
- The farmer can select another provider where appropriate
- Agrova must clearly communicate provider failures
- Agrova must not fabricate test results or completion status

External provider failure should be isolated through the provider integration boundary.

#### Human and Professional Validation

Agrova may assist with interpretation, but professional agricultural judgment may be required for certain decisions.

Where appropriate, Agrova should allow escalation to:

- Agricultural experts
- Soil scientists
- Laboratories
- Other qualified professionals

Professional assessments should remain distinguishable from AI-generated interpretations.

#### Privacy and Security

Soil reports, field information, diagnostic requests, and related farm information are farmer-controlled data.

Access must respect:

- Farm ownership
- Farm membership
- Resource authorization
- Provider authorization
- Secure document access
- Audit requirements
- Data protection requirements

A provider should only receive information required for the requested service and authorized by the applicable workflow.

#### Long-Term Intelligence Role

The Soil Diagnostic Network should eventually become one component of Agrova's broader Farm Intelligence system.

The long-term relationship is:

Farm
→ Field
→ Crop
→ Soil
→ Water
→ Weather
→ Observations
→ Diagnostics
→ Knowledge
→ Intelligence
→ Recommendation
→ Action
→ Outcome
→ Farm Memory
→ Farm Learning

Soil information should therefore not exist as an isolated report.

It should become structured evidence that contributes to understanding the particular field and supporting future decisions.

#### MVP Boundary

The complete Soil Diagnostic Network is a future capability.

The MVP should not attempt to build:

- A large laboratory marketplace
- Full provider onboarding
- Complex payment settlement
- Nationwide diagnostic orchestration
- Advanced laboratory integrations
- Automated sample logistics
- Full soil intelligence
- Advanced soil prediction

The MVP may establish the foundational data structures and architecture required for future expansion while keeping the actual implementation focused on the core vertical slice.

#### Dependencies

Potential dependencies include:

- Farm and field identity
- Farm authorization
- Soil data model
- Evidence model
- Data provenance
- File and document handling
- Provider abstraction
- Knowledge layer
- Recommendation system
- Farm Context Engine
- Security and privacy controls
- Audit system
- Outcome and Farm Memory systems

#### Strategic Value

The Soil Diagnostic Network can help Agrova move from generic agricultural advice toward evidence-based, farm-specific intelligence.

It creates a bridge between:

Farmer Observation
→ Professional / Laboratory Evidence
→ Agrova Context
→ Agricultural Knowledge
→ Farm Intelligence
→ Action
→ Outcome

This is a core part of Agrova's long-term goal of understanding the particular farm and helping the farmer decide what to do next.

Status: New

Priority: P1

Product Area: Soil / Diagnostics / Farm Service Network

### IDEA-006 - Multi-Provider Soil Testing

Agrova should support multiple soil testing providers rather than depending on a single laboratory.

Potential providers may include:

- Government soil laboratories
- Agricultural universities
- ICAR / KVK laboratories
- Recognized private laboratories
- Mobile or doorstep testing services
- Other verified diagnostic providers

The provider network should support service-area matching, sample collection, testing, report delivery, provenance, and verification.

The architecture should allow providers to be added without changing the core farm domain.

Status: Future / Strategic Idea

---

### IDEA-007 - Soil Report Interpretation and Field Plan

Agrova should transform a soil test report into understandable, field-specific information for the farmer.

The system should preserve the original laboratory report and distinguish:

- Laboratory measurements
- Agrova interpretation
- Agricultural knowledge
- Recommendations
- Farmer decisions

Interpretation should consider the specific field, crop, season, objectives, constraints, and available resources.

Recommendations should be explainable and should not present AI interpretation as a laboratory measurement.

Status: Future / Strategic Idea

---

### IDEA-008 - Diagnostic Evidence Chain

Agrova should maintain a complete evidence chain for agricultural diagnostics.

The chain may include:

Observation
→ Sample
→ Collection
→ Laboratory / Expert
→ Measurement / Assessment
→ Interpretation
→ Recommendation
→ Action
→ Outcome

Each important diagnostic result should retain provenance and history.

Conflicting measurements or assessments should not be silently overwritten.

This capability should eventually extend beyond soil to water, crops, plants, and animals.

Status: Future / Strategic Idea

### IDEA-009 - Farm Condition Weather Intelligence

Status: New

Priority: P1

Product Area: Weather / Farm Intelligence

Description:

Combine weather information with actual farm conditions instead of presenting weather only as a forecast screen.

Potential inputs:

- Current weather
- Forecast
- Rainfall
- Temperature
- Humidity
- Wind
- Weather warnings
- Field condition
- Crop stage
- Water availability
- Animal condition

Potential output:

```text
Weather
  +
Farm Context
  ↓
Risk
  ↓
Possible Action
---
## 9. Outcome and Yield Intelligence Ideas
### IDEA-010 - Farm Evidence Layer

Agrova should maintain a unified evidence layer across the farm.

Evidence may originate from:

- Farmer observations
- Photos
- Weather providers
- Soil laboratories
- Agricultural experts
- Veterinarians
- Diagnostic providers
- Historical farm records
- AI-assisted interpretation

Every evidence item should retain its source and quality state.

Agrova should distinguish measured, reported, assessed, inferred, and conflicting information.

Status: Future / Strategic Idea

---

### IDEA-011 - Farm Memory

Agrova should remember what happened on the particular farm over time.

Farm memory should preserve:

- Crop history
- Field history
- Soil history
- Weather conditions
- Water events
- Pest and disease observations
- Inputs
- Activities
- Recommendations
- Farmer decisions
- Harvests
- Yield
- Costs
- Revenue
- Outcomes

Historical records should remain available for future context and learning.

Status: Future / Strategic Idea

---

### IDEA-012 - Farm Learning

Agrova should learn from the farm's own historical experience.

Initial farm learning should focus on structured historical analysis rather than requiring advanced machine learning.

Examples include:

- Historical yield patterns
- Crop performance
- Input usage
- Cost patterns
- Weather relationships
- Water usage
- Recurring pest observations
- Previous recommendations and outcomes

Historical correlation should not automatically be treated as proven causation.

Status: Future / Strategic Idea

### IDEA-013 - Farm-Specific Yield Intelligence

Status: New

Priority: P1

Product Area: Yield / Farm Learning

Description:

Preserve and analyze historical farm-specific production information.

Potential data:

- Crop
- Variety
- Field
- Area
- Seed
- Inputs
- Sowing date
- Crop conditions
- Activities
- Harvest
- Yield
- Season

Goal:

Allow Agrova to understand what actually happened on this particular farm over time.

Example:

```text
Seed / Variety
  +
Field
  +
Area
  +
Inputs
  +
Conditions
  ↓
Harvest
  ↓
Yield
  ↓
Farm History


---
## 10. Future Ecosystem Ideas

### IDEA-014 - Outcome Attribution

Agrova should connect decisions and actions with their eventual outcomes.

The system should support a chain such as:

Recommendation
→ Farmer Decision
→ Action
→ Crop / Animal Result
→ Yield / Production
→ Quality
→ Revenue / Cost
→ Outcome

Agrova should avoid claiming that a single input, variety, recommendation, or action caused an outcome unless the evidence supports that conclusion.

Status: Future / Strategic Idea

---

### IDEA-015 - Farmer Objective and Constraint Intelligence

Agrova should understand that farmers may have different objectives and constraints.

Possible objectives include:

- Maximize yield
- Minimize cost
- Save water
- Reduce risk
- Produce fodder
- Support household needs
- Improve profitability

Possible constraints include:

- Available water
- Budget
- Labour
- Machinery
- Seed availability
- Input availability
- Time
- Risk tolerance

Recommendations should consider these factors instead of optimizing only for theoretical yield.

Status: Future / Strategic Idea

---

### IDEA-016 - Farm Experiment and Trial Mode

Agrova should eventually support controlled farm trials and experiments.

A farmer may compare:

- Seed varieties
- Sowing dates
- Input strategies
- Irrigation approaches
- Crop practices
- Other farm decisions

The system should record the conditions, actions, observations, and outcomes of each trial.

Trial results should be treated as farm-specific evidence and should not automatically be generalized as universal agricultural conclusions.

Status: Future / Strategic Idea
### IDEA-017 - Farm Service Network

Status: New

Priority: P1

Product Area: Farm Service Network

Description:

Create reusable infrastructure for connecting farmers with trusted external service providers.

Potential service categories:

- Soil laboratories
- Diagnostic laboratories
- Veterinarians
- Agronomists
- Agricultural experts
- Machinery
- Labour
- Other farm services

Goal:

Make Agrova an orchestration layer rather than a closed system.

---
## 11. Relationship to Feature Registry

The Idea Backlog and Feature Registry serve different purposes.

The Idea Backlog stores ideas that are being considered or intentionally deferred.

The Feature Registry stores recognized Agrova capabilities with permanent Feature IDs and defined lifecycle status.

The Feature Registry is the source of truth for committed feature identity.

An idea should move into the Feature Registry only after intentional evaluation and product decision.

No implementation should begin solely from an Idea Backlog entry.

---

## 12. Relationship to Roadmap

The Roadmap defines when Agrova intends to work on capabilities.

The Idea Backlog does not override the Roadmap.

An idea may remain in the backlog even when it has strong strategic value if its dependencies, timing, risk, or implementation complexity make it unsuitable for the current phase.

MVP scope remains protected.

The following future capabilities must not be pulled into the MVP merely because they exist in this backlog:

- Full soil diagnostic network
- Large provider ecosystem
- GIS and satellite intelligence
- IoT and sensor integration
- Full Digital Farm Twin
- Advanced predictive intelligence
- Marketplace and ecosystem-scale capabilities

Future ideas may influence architecture direction, but they must not create unnecessary MVP complexity.

---

## 13. Traceability and Governance

Every promoted idea must become traceable through the Agrova documentation chain.

The expected chain is:

Idea
→ Feature ID
→ Requirement
→ Acceptance Criteria
→ Architecture
→ API / Data Model
→ Implementation
→ Test
→ Release
→ Outcome
→ Feedback

Changes to a promoted capability must follow the governance rules of the relevant document.

The backlog should be reviewed whenever major product decisions, roadmap changes, architectural changes, or validated farmer feedback create a reason to reconsider an idea.

Duplicate ideas should be consolidated rather than creating competing feature definitions.

Related ideas may be grouped when they represent one larger capability.

An idea should be removed from active backlog consideration only when it is:

- Promoted
- Rejected
- Superseded
- Merged into another idea
- No longer relevant

The reason for the lifecycle decision should remain traceable.

---

## 14. Backlog Summary

The Idea Backlog protects Agrova's long-term product vision while keeping current implementation disciplined.

The backlog allows Agrova to preserve valuable ideas without confusing ideas with committed features.

The current backlog represents future directions across:

- Farm Intelligence
- Farm Context
- Soil Diagnostics
- Weather Intelligence
- Evidence
- Farm Memory
- Yield Intelligence
- Farm Service Networks
- Offline Operations
- GIS and Satellite
- IoT
- Digital Farm Twin

These ideas support the long-term Agrova direction:

> Given everything happening on this particular farm, help the farmer decide what to do next.

The backlog must evolve with validated learning, farmer feedback, technology maturity, product strategy, and roadmap decisions.

MVP discipline remains mandatory.

---

### IDEA-018 - Offline-First Farm Operations

Status: New

Priority: P2

Product Area: Platform

Description:

Support farm operations when internet connectivity is weak or unavailable.

Potential capabilities:

- Offline records
- Local queue
- Synchronization
- Retry
- Conflict handling
- Sync status

---

### IDEA-019 - GIS and Satellite Intelligence

Status: New

Priority: P2

Product Area: GIS / Satellite

Description:

Future field-level geospatial and satellite intelligence.

Potential capabilities:

- Field boundaries
- Satellite imagery
- Vegetation monitoring
- Crop health
- Water stress
- Historical comparison
- Field anomaly detection

MVP Impact:

Deferred.

---

### IDEA-020 - IoT and Farm Sensor Integration

Status: New

Priority: P2

Product Area: IoT

Description:

Integrate future farm and animal sensors through provider-independent adapters.

Potential sources:

- Soil sensors
- Weather stations
- Irrigation sensors
- Animal wearables
- Activity sensors
- Milk sensors

MVP Impact:

Deferred.

---

### IDEA-021 - Digital Farm Twin

Status: New

Priority: P2

Product Area: Farm Intelligence

Description:

Create a continuously evolving digital representation of the farm's state.

Potential domains:

```text
People
Animals
Fields
Crops
Soil
Water
Resources
Weather
Tasks
Risks
Economics
History

## Living Document

This document evolves as Agrova evolves.

Changes should be intentional and discussed before implementation in the respective document governing that subject.

**Last Updated:** 5 September 2026