# Agrova API Contracts

## 1. Purpose

This document defines the API contract direction for Agrova.

The API layer connects the Agrova frontend, backend domain modules, external providers, intelligence services, and future service-network capabilities.

The API must expose domain behavior without exposing unnecessary internal implementation details.

Every API capability must remain traceable to the Agrova Feature Registry, Requirements, Architecture, Database Design, Security baseline, and relevant engineering decisions.

Primary principle:

> One screen should receive one purposeful read model whenever practical.

The API must support the Agrova product philosophy:

> Given everything happening on this particular farm, help the farmer decide what to do next.

API design must therefore preserve farm context, evidence, provenance, authorization, historical records, and outcome relationships.

---

## 2. API Philosophy

Agrova APIs follow these principles:

1. APIs represent business capabilities, not database tables.
2. APIs preserve domain boundaries.
3. Farm is the primary context and authorization boundary.
4. Authentication must occur before protected operations.
5. Authorization must be enforced by the backend.
6. Validation must occur before domain mutation.
7. External providers must remain behind adapters.
8. Provider failures must not unnecessarily break core farm records.
9. Historical information must not be silently overwritten.
10. Important information must preserve provenance.
11. AI must not directly mutate domain data.
12. Recommendations must be explainable.
13. APIs must distinguish observation, assessment, recommendation, decision, action, and outcome.
14. APIs must support graceful degradation.
15. APIs must provide predictable errors.
16. APIs must be testable and observable.
17. APIs must evolve without unnecessary breaking changes.
18. Security rules apply to every protected endpoint.

The API is an application boundary, not merely a transport layer.

---

## 3. API Style

Agrova will initially use REST-style HTTP APIs.

Primary conventions:

- HTTP/HTTPS transport.
- JSON request and response bodies.
- Resource-oriented URLs.
- Explicit HTTP methods.
- Consistent error responses.
- Consistent identifiers.
- ISO-compatible timestamp representation.
- Pagination for potentially large collections.
- Explicit filtering and sorting rules where required.
- Validation errors returned in a predictable structure.
- Authentication through the configured identity mechanism.
- Authorization enforced server-side.

Example:

GET /api/farms/{farmId}

POST /api/farms

PATCH /api/farms/{farmId}

DELETE /api/farms/{farmId}

The exact endpoint contract must be documented before implementation.

---

## 4. API Versioning

Agrova APIs must have a controlled versioning strategy.

Initial public-facing API convention:

/api/...

If a breaking API change becomes necessary, versioning may evolve to:

/api/v1/...

Future versions must not silently change the meaning of existing fields or operations.

Breaking changes require:

- documented impact,
- migration strategy,
- affected frontend identification,
- test updates,
- release planning,
- decision record where appropriate.

MVP should avoid unnecessary versioning complexity while preserving the ability to evolve safely.

---

## 5. Authentication

Protected Agrova APIs require an authenticated user identity.

Authentication establishes who is making the request.

Authorization determines what that authenticated identity may access or modify.

The backend must not trust frontend claims about identity or permissions.

Supported authentication may include:

- Agrova-managed authentication.
- Google authentication through the configured provider.
- Future approved identity providers.

For Google authentication:

1. Frontend initiates the authentication flow.
2. Provider authenticates the user.
3. Backend verifies the provider identity/token.
4. Agrova resolves or creates the internal user identity.
5. Backend establishes the Agrova authenticated session/token.
6. Protected APIs use the Agrova identity for authorization.

Authentication failures must return a consistent unauthorized response.

Sensitive authentication information must never be exposed in normal API responses or logs.
## 6. Authorization

Authentication alone does not grant access to Agrova resources.

Authorization must verify:

- user identity,
- farm membership,
- ownership or permitted role,
- resource relationship,
- requested operation,
- applicable security policy.

The backend must enforce authorization for every protected operation.

Frontend visibility is not a security boundary.

An unauthorized request must fail safely and must not reveal protected information.

---

## 7. Farm as Primary Authorization Boundary

Farm is the primary business and authorization boundary for Agrova farm data.

Protected resources should be associated directly or indirectly with a farm.

Examples include:

- fields,
- crops,
- animals,
- resources,
- activities,
- tasks,
- weather context,
- diagnostics,
- recommendations,
- outcomes,
- economics,
- farm memory.

The backend must verify that the authenticated user has appropriate access to the farm before returning or modifying protected data.

A client must not be able to access another farm merely by changing a farm ID in a request.

---

## 8. Common Request Rules

All API requests must follow consistent validation rules.

Requests should:

- use documented fields,
- reject unsupported fields where appropriate,
- validate required values,
- validate data types,
- validate ranges,
- validate relationships,
- validate authorization,
- reject malformed identifiers,
- reject invalid state transitions.

The backend must not assume that frontend validation is sufficient.

For create and update operations, validation occurs before domain mutation.

Where an operation depends on another resource, the backend must verify that the related resource belongs to the same authorized farm context.

---

## 9. Common Response Rules

API responses should be predictable and consistent.

Successful responses should provide:

- requested data,
- stable identifiers,
- relevant timestamps,
- resource state where useful,
- provenance where relevant,
- pagination information for collections where applicable.

Responses must not expose:

- passwords,
- authentication secrets,
- provider credentials,
- internal security information,
- unnecessary database details,
- sensitive implementation information.

Read models may combine information from multiple domain modules when doing so serves a specific product screen or workflow.

---

## 10. Error Contract

Agrova APIs require a consistent error model.

An error response should communicate:

- error category,
- stable error code,
- human-readable message,
- field-level validation information when applicable,
- request/correlation identifier where useful.

Example structure:

{
  "error": {
    "code": "FARM_ACCESS_DENIED",
    "message": "You do not have access to this farm.",
    "details": []
  }
}

Common categories include:

- validation failure,
- authentication failure,
- authorization failure,
- resource not found,
- conflict,
- provider unavailable,
- rate limit,
- internal failure.

Error messages must not disclose secrets or unnecessary internal implementation details.

The API must not convert provider failures into false successful results.
## 11. Health API

Agrova must expose a basic health endpoint for operational verification.

Example:

GET /api/health

The health API should provide enough information to determine whether the application is operational.

Health checks may distinguish:

- application availability,
- database availability,
- external provider availability.

External provider failure should not automatically imply that the entire Agrova application is unavailable.

Health responses must not expose secrets, credentials, internal network details, or sensitive configuration.

---

## 12. Farmer APIs

Farmer APIs manage the Agrova user/farmer profile and farmer-specific information.

Example capabilities:

GET /api/farmer/profile

PATCH /api/farmer/profile

The farmer API may manage:

- name,
- preferred language,
- contact information where applicable,
- interaction preferences,
- profile metadata.

Farmer identity must remain separate from farm ownership.

One farmer/user may participate in multiple farms where the product model permits it.

---

## 13. Farm APIs

Farm APIs manage the farm as a primary Agrova context.

Example capabilities:

GET /api/farms

POST /api/farms

GET /api/farms/{farmId}

PATCH /api/farms/{farmId}

The farm model may include:

- farm identity,
- farm name,
- location,
- ownership information,
- members,
- operational context,
- farm-level preferences.

Farm creation and modification require appropriate authorization.

Farm deletion must follow the data-retention, audit, and privacy rules defined by Agrova security and data governance.

---

## 14. Pashu APIs

Pashu APIs manage livestock and animal-related farm records.

Example capabilities:

GET /api/farms/{farmId}/animals

POST /api/farms/{farmId}/animals

GET /api/farms/{farmId}/animals/{animalId}

PATCH /api/farms/{farmId}/animals/{animalId}

Potential domain capabilities include:

- animal identity,
- profile,
- health records,
- vaccination,
- breeding,
- nutrition/feed,
- milk records,
- veterinary interaction,
- laboratory information,
- animal history.

Animal records must remain linked to the correct farm.

Health-related intelligence must respect Agrova's human-in-the-loop safety model.

AI-assisted interpretation must not be presented as professional veterinary diagnosis.

---

## 15. Khet APIs

Khet APIs manage agricultural fields and crop production records.

Example capabilities:

GET /api/farms/{farmId}/fields

POST /api/farms/{farmId}/fields

GET /api/farms/{farmId}/fields/{fieldId}

PATCH /api/farms/{farmId}/fields/{fieldId}

Khet capabilities include:

- field registration,
- field identity,
- field location,
- field area,
- local land units,
- standard land units,
- field history,
- crop registration,
- crop variety,
- sowing records,
- crop stage,
- expected harvest,
- harvest records,
- yield records,
- crop history,
- soil information,
- water information,
- pest observations,
- crop disease observations,
- crop symptoms,
- crop photographs,
- expert escalation.

Farmer-reported observations must remain distinguishable from laboratory measurements, professional assessments, and AI-inferred information.
## 16. Resources APIs

Resources APIs manage farm resources used by the farmer.

Potential resources include:

- land-related resources,
- water sources,
- irrigation resources,
- machinery,
- equipment,
- livestock-related resources,
- storage,
- other farm assets.

Example:

GET /api/farms/{farmId}/resources

POST /api/farms/{farmId}/resources

PATCH /api/farms/{farmId}/resources/{resourceId}

Resource records must remain associated with the correct farm.

Resource history should be preserved where the business requirement requires historical tracking.

---

## 17. Activities APIs

Activities APIs record work performed on the farm.

Examples:

- sowing,
- irrigation,
- fertilization,
- spraying,
- weeding,
- harvesting,
- animal feeding,
- animal care,
- maintenance,
- other farm activities.

Example:

GET /api/farms/{farmId}/activities

POST /api/farms/{farmId}/activities

Activities should capture sufficient information to support farm memory and later outcome analysis.

Where applicable, activities should reference the affected:

- farm,
- field,
- crop,
- animal,
- resource,
- task.

---

## 18. Task APIs

Task APIs manage planned and actionable farm work.

Example:

GET /api/farms/{farmId}/tasks

POST /api/farms/{farmId}/tasks

PATCH /api/farms/{farmId}/tasks/{taskId}

Tasks may contain:

- title,
- description,
- priority,
- due date,
- related farm resource,
- related field,
- related crop,
- related animal,
- status,
- completion information.

Task status must follow controlled state transitions.

Future recommendation-generated tasks must preserve their relationship to the originating recommendation.

---

## 19. Weather APIs

Weather APIs provide weather information through an external-provider abstraction.

Example:

GET /api/farms/{farmId}/weather

GET /api/farms/{farmId}/fields/{fieldId}/weather

Weather data should preserve:

- source/provider,
- observation or forecast time,
- retrieval time,
- geographic context,
- relevant weather values,
- freshness where applicable.

Weather information may support:

- field planning,
- irrigation decisions,
- sowing planning,
- crop risk assessment,
- activity planning,
- farmer alerts.

Provider-specific implementation details must remain outside the core domain model.

If weather service is unavailable, core farm records must continue functioning.

---

## 20. Farm Dashboard API

The Farm Dashboard API provides a purposeful read model for the farmer's home experience.

Example:

GET /api/farms/{farmId}/dashboard

The dashboard may aggregate:

- farm summary,
- animal summary,
- crop/field summary,
- today's tasks,
- important activities,
- weather,
- alerts,
- pending recommendations,
- recent outcomes,
- basic farm context.

The dashboard should answer:

> What is important for this farm right now?

The dashboard must not become an unrestricted "everything about the farm" endpoint.

Its response should be designed around the actual farmer experience and should evolve as the product evolves.
## 21. Purposeful Read Models

Agrova APIs should provide purposeful read models for important product screens.

A read model may aggregate data from multiple domain modules.

Example:

GET /api/farms/{farmId}/dashboard

may combine:

- farm,
- animals,
- fields,
- crops,
- tasks,
- weather,
- alerts.

This reduces unnecessary frontend orchestration and repeated network calls.

The principle is:

> One screen -> one purposeful read model whenever practical.

This is not an absolute one-call rule.

Read models must not bypass domain authorization or expose unrelated sensitive information.

---

## 22. Basic Farm Context API

The Basic Farm Context API exposes the current structured understanding of the farm.

Example:

GET /api/farms/{farmId}/context

Context may include:

- current crops,
- crop stages,
- animals,
- recent activities,
- water situation,
- recent observations,
- weather context,
- active tasks,
- recent recommendations,
- important constraints.

Context may include derived information.

Derived information must remain distinguishable from directly recorded facts where that distinction matters.

Context must respect temporal validity.

Old crop information must not incorrectly appear as current crop state.

---

## 23. Basic Intelligence API

The Basic Intelligence API provides early Agrova intelligence capabilities.

Example:

GET /api/farms/{farmId}/intelligence

Initial intelligence may include:

- important current conditions,
- possible risks,
- missing information,
- basic suitability indicators,
- action priorities,
- explainable observations.

Intelligence must be based on available farm context and evidence.

The API must not represent uncertain inference as established fact.

Where evidence is insufficient, the system should identify the information gap rather than fabricate certainty.

---

## 24. Conversation API

The Conversation API supports farmer interaction through text, voice, and eventually image-assisted workflows.

Example:

POST /api/farms/{farmId}/conversation/messages

The conversation flow is:

Farmer input
-> Conversation Engine
-> Intent / Structured Action
-> Validation
-> Authorization
-> Domain Service
-> Persistence
-> Response

Conversation APIs may support:

- questions,
- observations,
- record creation,
- record updates,
- task creation,
- recommendations,
- clarification,
- summaries.

The LLM or conversational model must not directly mutate domain data.

All domain-changing actions must pass through validated backend services.

---

## 25. Conversation Safety

Conversation-based actions require explicit safety controls.

The system must:

1. interpret the farmer's input,
2. identify the intended structured action,
3. validate required information,
4. verify authorization,
5. request clarification where ambiguity affects correctness,
6. execute only an approved domain operation,
7. confirm the resulting action to the farmer.

For high-impact or ambiguous operations, the system should request confirmation.

Examples:

- deleting important records,
- changing critical farm information,
- recording uncertain medical information,
- accepting a consequential recommendation.

The conversation layer must not invent missing farm facts.

If required information is missing, the system should ask for it or invoke the Information Gap workflow.
## 26. Economics APIs

Economics APIs manage farm financial and economic records.

Example capabilities:

GET /api/farms/{farmId}/economics

POST /api/farms/{farmId}/economics/transactions

Economic records may include:

- input costs,
- labour costs,
- machinery costs,
- animal-related costs,
- crop-related costs,
- sales,
- revenue,
- other farm expenses.

Economic data must remain associated with the correct farm and relevant activity/resource where applicable.

The system must distinguish:

- cost,
- revenue,
- gross margin,
- profit,
- estimated value.

Estimated economic values must not be presented as confirmed transactions.

---

## 27. Yield APIs

Yield APIs manage production outcomes.

Example:

GET /api/farms/{farmId}/fields/{fieldId}/yield

POST /api/farms/{farmId}/fields/{fieldId}/yield

Yield records may include:

- crop,
- variety,
- field,
- area,
- seed information,
- inputs,
- harvest date,
- quantity,
- unit,
- standardized quantity,
- quality information.

Yield history is important for farm learning.

The system must preserve actual historical values rather than replacing them with later estimates.

Yield data may later support comparison of:

- varieties,
- seasons,
- fields,
- inputs,
- sowing conditions,
- weather conditions,
- management practices.

Such comparisons must not automatically imply causation.

---

## 28. Historical Data and Farm Memory

Historical records form the Agrova Farm Memory.

APIs must preserve important historical information including:

- crop history,
- field history,
- animal history,
- activities,
- observations,
- weather context,
- recommendations,
- decisions,
- actions,
- harvests,
- yield,
- economics,
- outcomes.

Historical data must not be silently overwritten when a new state is recorded.

Where correction is necessary, the system should preserve appropriate audit/history information.

Farm Memory enables future Farm Learning.

Initial Farm Learning may use structured historical analytics rather than machine learning.

---

## 29. Data Provenance

Important data must preserve its source or provenance.

Possible provenance categories include:

- farmer reported,
- farm member reported,
- expert assessed,
- veterinarian assessed,
- laboratory measured,
- weather provider,
- external provider,
- system calculated,
- AI inferred,
- imported.

APIs should expose provenance when it materially affects trust or interpretation.

Example:

{
  "value": 6.8,
  "unit": "pH",
  "source": "LAB_VERIFIED"
}

AI-generated information must not be represented as laboratory or professional measurement.

---

## 30. Data Quality

Agrova APIs should support data quality states.

Possible states include:

- missing,
- approximate,
- farmer-reported,
- imported,
- lab-verified,
- expert-verified,
- AI-inferred,
- conflicting.

Data quality must not be silently converted into certainty.

If two measurements conflict, the system should preserve both when appropriate and represent the conflict explicitly.

The API should provide sufficient metadata to help downstream intelligence understand the quality and reliability of information.

Data quality is a core input to Agrova intelligence.
## 31. Provider Integration Boundary

External providers must be isolated behind provider adapters.

Potential providers include:

- weather services,
- maps/geolocation services,
- AI services,
- speech services,
- laboratory services,
- expert networks,
- diagnostic providers,
- future agricultural service providers.

Core APIs should communicate with stable Agrova domain contracts rather than provider-specific formats.

Provider-specific:

- credentials,
- request formats,
- response formats,
- retry behavior,
- limits,
- implementation details

must remain inside the provider integration boundary.

Changing a provider should not require unnecessary changes to core domain APIs.

---

## 32. Graceful Degradation

Agrova must continue operating when external providers fail.

Examples:

Weather unavailable:
- farm records remain available,
- dashboard remains available,
- cached weather may be shown if valid,
- weather-dependent intelligence may be marked unavailable.

AI unavailable:
- manual records remain available,
- core farm operations remain available,
- conversational AI functionality may be temporarily unavailable.

Diagnostic provider unavailable:
- existing diagnostic records remain available,
- new provider-dependent operations may be delayed.

The system must never report a successful external operation when the operation actually failed.

Provider failures should be observable and diagnosable.

---

## 33. Idempotency

Operations that may be retried must avoid accidental duplicate effects.

Idempotency is especially important for:

- payment-like future operations,
- provider submissions,
- diagnostic sample creation,
- document uploads,
- important record creation,
- conversation-triggered mutations.

Where required, APIs may accept an idempotency key.

Repeated requests with the same valid idempotency key should not create unintended duplicate domain records.

Idempotency rules must be documented for each applicable operation.

---

## 34. Pagination

Collection APIs must support pagination where data may grow significantly.

Examples:

- animals,
- fields,
- activities,
- tasks,
- observations,
- diagnostic records,
- recommendations,
- historical yields,
- economics.

Pagination must provide enough information for the client to retrieve additional records safely.

Potential parameters include:

- page,
- size,
- cursor.

The exact strategy may evolve as scale requirements become clearer.

MVP should use a simple predictable strategy rather than premature complexity.

---

## 35. Filtering and Sorting

Collection APIs may support filtering and sorting where it improves the product experience.

Examples:

- active tasks,
- crop by field,
- activities by date,
- yield by season,
- animals by status,
- recommendations by state.

Filtering must use documented fields.

Sorting must be deterministic where possible.

The API must reject unsupported or unsafe filter expressions.

Filtering must not bypass authorization or expose records from another farm.
## 36. Concurrency and Conflict Handling

Agrova must handle concurrent updates safely.

Potential conflicts may occur when:

- multiple farm members use the same farm,
- a record is updated from multiple devices,
- a provider callback arrives after a manual update,
- a conversation action overlaps with another operation.

The system must not silently overwrite important conflicting information.

Where appropriate, the API may use:

- optimistic concurrency,
- version fields,
- updated timestamps,
- conflict responses.

A conflict response should allow the client to understand that the stored state changed before the requested update was applied.

---

## 37. File, Image, Voice and Document APIs

Agrova may accept:

- crop photographs,
- animal photographs,
- soil reports,
- laboratory reports,
- documents,
- voice recordings,
- other evidence.

File APIs must enforce:

- authentication,
- authorization,
- file-type validation,
- size limits,
- secure storage,
- safe filenames,
- access control,
- malware/security checks where applicable,
- retention rules.

Files must be associated with the correct farm/resource/context.

An uploaded image or document is evidence, not automatically a verified assessment.

AI interpretation of an uploaded file must remain distinguishable from the original evidence.

---

## 38. Diagnostic and Service Network APIs

Diagnostic APIs support future Agrova diagnostic and service capabilities.

Potential capabilities include:

- diagnostic request,
- provider matching,
- sample registration,
- sample collection,
- sample tracking,
- laboratory processing,
- test results,
- original report storage,
- interpretation,
- recommendation,
- expert escalation.

Potential providers include:

- soil laboratories,
- agricultural laboratories,
- veterinary services,
- agronomists,
- diagnostic specialists.

Diagnostic records must preserve chain-of-custody and provenance information where applicable.

The original laboratory or professional report must remain available where legally and operationally appropriate.

---

## 39. Recommendation and Decision APIs

Recommendations must be represented separately from farmer decisions.

Example:

GET /api/farms/{farmId}/recommendations

POST /api/farms/{farmId}/recommendations/{recommendationId}/decision

A recommendation may contain:

- context,
- observed condition,
- evidence,
- reasoning,
- knowledge source,
- confidence,
- proposed action,
- alternatives,
- risks,
- constraints,
- validity period.

Recommendation lifecycle may include:

created
-> presented
-> accepted/rejected
-> modified
-> action
-> completed
-> outcome

The farmer remains the decision-maker.

The API must preserve whether a recommendation was followed and what happened afterward.

---

## 40. Audit and Security

Protected APIs must support security accountability.

Security-sensitive operations should capture audit information such as:

- WHO,
- WHAT,
- WHEN,
- SOURCE,
- BEFORE,
- AFTER.

Audit records may be required for:

- authentication events,
- authorization-sensitive changes,
- farm membership changes,
- important record modifications,
- deletion,
- recommendation decisions,
- diagnostic actions,
- security configuration.

Audit information must not contain unnecessary secrets.

API authorization must be enforced independently of audit logging.
## 41. API Observability

Agrova APIs must be observable in production and development environments.

Important observability information includes:

- request correlation ID,
- endpoint,
- method,
- status,
- latency,
- error category,
- provider dependency,
- domain operation where appropriate.

Logs must not expose:

- passwords,
- tokens,
- API keys,
- secrets,
- unnecessary personal information,
- sensitive farm data.

Metrics should help identify:

- API failures,
- slow endpoints,
- provider failures,
- repeated validation failures,
- authentication problems,
- unusual traffic.

Observability must support diagnosis without becoming a privacy risk.

---

## 42. API Testing

Every implemented API must have appropriate tests.

Testing layers may include:

- unit tests,
- service tests,
- controller/API tests,
- integration tests,
- database tests,
- authorization tests,
- security tests,
- provider contract tests,
- end-to-end tests.

Important API scenarios include:

- valid request,
- invalid request,
- unauthorized request,
- forbidden request,
- missing resource,
- conflicting update,
- provider failure,
- duplicate request,
- malformed input.

Domain-specific safety rules must also be tested.

---

## 43. API Traceability

Every meaningful API capability must remain traceable.

Expected chain:

Feature ID
-> Requirement ID
-> Acceptance Criteria
-> API Contract
-> Data Model
-> Domain Logic
-> UI
-> Test
-> Release

API documentation must reference relevant Feature IDs and Requirement IDs where practical.

An API must not become an undocumented capability that bypasses product governance.

New API capabilities must first enter the Feature Registry or Idea Backlog according to their maturity.

---

## 44. MVP API Boundary

The MVP API should support the coherent vertical slice:

Farmer
-> Farm
-> Pashu
-> Khet
-> Resources
-> Activities
-> Tasks
-> Weather
-> Dashboard
-> Basic Farm Context
-> Basic Intelligence
-> Conversation
-> Economics

MVP APIs should prioritize:

- correct farm authorization,
- reliable CRUD behavior,
- purposeful read models,
- basic weather integration,
- basic context,
- basic intelligence,
- safe conversation actions,
- historical records,
- basic economic tracking.

The MVP should not attempt to expose every long-term Agrova capability.

---

## 45. MVP Deferred API Complexity

The following API capabilities may remain outside the MVP unless required by the approved implementation scope:

- full soil laboratory marketplace/network,
- advanced diagnostic orchestration,
- satellite data APIs,
- IoT device APIs,
- advanced GIS APIs,
- full Digital Farm Twin APIs,
- advanced ML intelligence APIs,
- large provider marketplace APIs,
- complex event-driven distributed architecture,
- premature microservice-specific APIs.

These capabilities remain part of the long-term product direction where registered in the appropriate roadmap and feature documentation.

Deferral is a deliberate scope decision, not abandonment.
## 46. Future API Evolution

Agrova APIs must be capable of evolving toward the long-term product architecture.

Future capabilities may include:

- advanced Farm Intelligence,
- Soil Intelligence,
- Diagnostic Network,
- Farm Service Network,
- richer Weather Intelligence,
- satellite/sensor evidence,
- Digital Farm Twin,
- advanced Farm Learning,
- experiment/trial tracking,
- area-level intelligence,
- provider ecosystem integration.

Future APIs must preserve the same principles:

- farm context,
- evidence,
- provenance,
- authorization,
- explainability,
- historical memory,
- outcome tracking.

New complexity must be introduced only when justified by product requirements and scale.

---

## 47. API Governance

API design is governed by the Agrova documentation chain.

Primary governing documents include:

- Product Vision,
- Product Master,
- Feature Registry,
- Roadmap,
- Requirements,
- Architecture,
- Database Design,
- Security,
- Test Strategy,
- Decisions,
- Risks,
- Glossary,
- Releases.

API changes must remain consistent with these documents.

A breaking or architecturally significant API decision should be documented before implementation.

API contracts should be reviewed when:

- domain boundaries change,
- authorization rules change,
- data models change,
- external providers change,
- major product capabilities are introduced.

---

## 48. API Design Rules

Agrova API implementation must follow these rules:

1. Do not expose database tables directly as an API design.
2. Do not trust the frontend for authorization.
3. Do not allow LLMs to directly mutate domain data.
4. Do not silently overwrite historical information.
5. Do not hide data provenance.
6. Do not represent uncertain inference as fact.
7. Do not make external provider availability a requirement for basic farm records.
8. Do not expose secrets.
9. Do not create unrestricted "everything" endpoints.
10. Do not introduce unnecessary microservice complexity.
11. Validate before mutation.
12. Authorize before accessing protected resources.
13. Preserve farm boundaries.
14. Keep provider-specific implementation behind adapters.
15. Design for observability and testing.
16. Keep API behavior traceable to approved product requirements.

---

## 49. Relationship to Database Design

API contracts and database design serve different purposes.

Database Design defines:

- persistence,
- entities,
- relationships,
- constraints,
- indexes,
- migrations,
- historical storage.

API Contracts define:

- external application behavior,
- requests,
- responses,
- validation,
- authorization expectations,
- domain operations,
- read models.

The API must not expose the database schema as the product contract.

Database changes should be evaluated for API impact.

API changes should be evaluated for database impact.

Both must remain aligned through the Architecture and Requirements traceability chain.

---

## 50. Relationship to Architecture

The API layer implements the boundaries defined by Agrova Architecture.

The architecture establishes:

- modular monolith,
- domain-oriented modules,
- provider adapters,
- farm context,
- evidence layer,
- knowledge layer,
- intelligence,
- recommendation,
- outcome,
- conversation,
- security,
- observability.

API contracts provide the application-facing boundary for these capabilities.

The API must not bypass:

- domain services,
- authorization,
- validation,
- security,
- provenance,
- business rules.

External providers must remain isolated from core domain logic.
## 51. API Documentation Standard

Every important API contract should document:

- Feature ID,
- Requirement ID where applicable,
- purpose,
- HTTP method,
- endpoint,
- authentication requirement,
- authorization requirement,
- request structure,
- validation rules,
- response structure,
- error behavior,
- important state transitions,
- provenance requirements,
- provider dependency where applicable,
- test coverage expectations.

Documentation must use consistent terminology from `13_GLOSSARY.md`.

API examples should be realistic but must never contain real credentials, secrets, or private farmer information.

---

## 52. MVP Implementation Order

The initial API implementation should follow the approved MVP vertical slice.

Recommended order:

1. Health API.
2. Authentication APIs.
3. Farmer APIs.
4. Farm APIs.
5. Farm membership and authorization.
6. Pashu APIs.
7. Khet APIs.
8. Resources APIs.
9. Activities APIs.
10. Task APIs.
11. Weather APIs.
12. Farm Dashboard API.
13. Basic Farm Context API.
14. Basic Intelligence API.
15. Conversation API.
16. Economics APIs.
17. Yield and historical outcome APIs where required by MVP scope.
18. MVP integration testing.
19. Security and authorization validation.
20. Release readiness validation.

Implementation must follow the Feature Registry and Requirements rather than introducing unregistered scope.

---

## 53. API Definition of Done

An API capability is complete only when applicable items below are satisfied:

- Feature ID identified.
- Requirement identified.
- Acceptance criteria defined.
- API contract documented.
- Authentication requirement defined.
- Authorization enforced.
- Farm/resource boundary enforced.
- Request validation implemented.
- Response contract implemented.
- Error behavior implemented.
- Domain logic implemented.
- Database support implemented.
- Provenance handled where required.
- Historical behavior handled where required.
- Provider failure handled where applicable.
- Security tests completed.
- Unit/integration/API tests completed.
- Observability implemented.
- Documentation updated.
- Release traceability maintained.
- No known critical security defect remains.
- No unauthorized cross-farm access remains.
- Frontend integration validated.
- Relevant roadmap/registry status updated.

---

## 54. API Summary

Agrova APIs are the controlled boundary between the farmer experience and the Agrova domain.

They must support the complete product direction without forcing the MVP to implement the entire future platform.

The API architecture follows:

Farmer
-> Farm
-> Context
-> Evidence
-> Knowledge
-> Intelligence
-> Recommendation
-> Decision
-> Action
-> Outcome
-> Farm Memory
-> Farm Learning

The API must preserve the most important Agrova principles:

- Farmer-first interaction.
- Farm-first context.
- Security by default.
- Authorization at the farm boundary.
- Observation before recommendation.
- Evidence before intelligence.
- Provenance before trust.
- Human decision-making.
- Historical memory.
- Graceful degradation.
- Provider isolation.
- Explainable intelligence.
- Testable contracts.
- Controlled evolution.

The ultimate API purpose is not simply to expose data.

It is to enable Agrova to answer:

> Given everything happening on this particular farm, what should the farmer do next?

The answer must be grounded in available evidence, farm context, trusted knowledge, farmer objectives, constraints, and previous outcomes.

---

## Living Document

This document evolves as Agrova evolves.

Changes should be intentional and discussed before implementation in the respective document governing that subject.

**Last Updated:** 5 September 2026