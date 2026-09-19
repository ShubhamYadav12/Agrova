# Agrova Test Strategy

## 1. Purpose

This document defines the testing strategy for Agrova.

The goal is to verify that Agrova is functionally correct, secure, reliable, understandable, and safe for the farmer workflows it supports.

Testing must protect both technical correctness and the product principle:

> **Given everything happening on this particular farm, help the farmer decide what to do next.**

Testing is not limited to whether screens load. It must verify domain rules, farm-data isolation, evidence and provenance, external-provider behavior, recommendation safety, and end-to-end farmer workflows.

---

## 2. Testing Principles

Agrova testing follows these principles:

1. Test behavior, not implementation details alone.
2. Test domain rules at the domain boundary.
3. Test authorization independently from authentication.
4. Treat all external input as untrusted.
5. Preserve farm and resource isolation.
6. Preserve historical data and provenance.
7. Test failure and degraded-provider scenarios.
8. Test AI/conversation output as untrusted input.
9. Test important farmer workflows end to end.
10. Keep tests deterministic wherever practical.
11. Prefer automated regression tests for repeatable behavior.
12. Do not claim a feature is complete without its required tests.

---

## 3. Test Pyramid

Agrova uses a balanced test pyramid:

```text
                    E2E Tests
                 /-------------\
                /  API / Contract \
               /-------------------\
              / Integration Tests   \
             /-----------------------\
            /     Unit Tests          \
           /---------------------------\
```

### 3.1 Unit Tests

Fast tests for domain logic, validation, transformations, calculations, policies, and application services where appropriate.

### 3.2 Integration Tests

Tests involving multiple application components, persistence, transactions, security boundaries, and provider adapters.

### 3.3 API / Contract Tests

Tests that verify request validation, response contracts, status codes, error behavior, authorization, and integration contracts.

### 3.4 End-to-End Tests

Tests that exercise important farmer workflows through the frontend and backend together.

---

## 4. Unit Testing

Unit tests should cover:

- domain rules,
- validation rules,
- calculations,
- state transitions,
- recommendation lifecycle rules,
- data-quality handling,
- provenance handling,
- authorization policies,
- provider response mapping,
- conversation intent parsing and normalization,
- error handling,
- edge cases.

Unit tests should avoid unnecessary infrastructure dependencies.

### 4.1 Domain Rule Examples

Tests should verify rules such as:

- a crop belongs to the correct field,
- a field belongs to the correct farm,
- an animal belongs to the correct farm,
- invalid state transitions are rejected,
- historical records are not silently destroyed,
- conflicting measurements are not silently overwritten,
- invalid units are rejected,
- required evidence is enforced where the workflow requires it.

---

## 5. Integration Testing

Integration tests verify interactions between real application components.

Important integration areas include:

- Spring Boot application context,
- PostgreSQL,
- Flyway migrations,
- repository/database operations,
- transaction boundaries,
- authentication and authorization,
- domain services,
- API controllers,
- provider adapters,
- file metadata handling,
- audit logging,
- conversation orchestration.

Integration tests should verify that components work together as designed rather than relying entirely on isolated mocks.

---

## 6. Database and Migration Testing

Database testing must verify:

- Flyway migrations apply successfully,
- migrations execute in the expected order,
- schema constraints work,
- foreign-key relationships work,
- indexes support intended access patterns,
- invalid records are rejected,
- transactions behave correctly,
- historical records remain available,
- farm/resource relationships remain intact.

A fresh database should be able to reach the expected schema through the migration sequence.

Migration changes should be tested before release.

---

## 7. API Testing

Every meaningful API contract should have automated tests appropriate to its risk and behavior.

API tests should verify:

- valid requests,
- invalid requests,
- required fields,
- type and format validation,
- authentication,
- authorization,
- farm/resource ownership,
- success responses,
- expected HTTP status codes,
- safe error responses,
- pagination/filter behavior where applicable,
- idempotency where applicable,
- malformed input,
- unexpected input,
- response shape.

### 7.1 API Security Cases

Tests must verify that:

- unauthenticated requests are rejected where authentication is required,
- authenticated users cannot access another farm,
- users cannot mutate resources they do not control,
- frontend-supplied ownership identifiers are not trusted,
- protected endpoints fail closed when authorization cannot be established,
- sensitive information is not exposed in error responses.

---

## 8. Authentication Testing

Authentication tests should cover:

- valid authentication,
- invalid credentials or tokens,
- expired authentication,
- malformed tokens,
- logout/session invalidation where applicable,
- Google authentication flow where enabled,
- account linking rules,
- callback/redirect validation,
- authentication failure handling.

Authentication establishes identity; tests must not assume that successful authentication automatically grants farm access.

---

## 9. Authorization and Farm Isolation Testing

Farm isolation is a foundational security requirement.

Tests must verify:

```text
User A → Farm A → allowed
User A → Farm B → denied
User B → Farm B → allowed
```

Authorization tests should cover:

- farm ownership,
- resource ownership,
- role-based access where introduced,
- protected read operations,
- protected write operations,
- nested resource access,
- direct-object-ID attacks,
- cross-farm API access,
- cross-farm update/delete attempts.

These tests are mandatory for every protected domain introduced into the MVP.

---

## 10. Pashu Testing

Pashu workflows should test:

- animal registration,
- unique animal identity where required,
- animal profile updates,
- health records,
- vaccination/preventive records,
- breeding records,
- feed/nutrition records,
- milk records,
- vet/expert interactions,
- historical records,
- farm ownership and isolation.

AI-assisted animal health workflows must not be tested as if AI output were authoritative diagnosis.

---

## 11. Khet Testing

Khet tests should cover the complete feature registry baseline introduced into the MVP scope.

Important areas include:

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
- soil profile,
- water source,
- irrigation events,
- pest observations,
- disease observations,
- crop symptoms,
- crop photos,
- expert escalation.

### 11.1 Khet Data Rules

Tests must verify that:

- original farmer-entered units are preserved,
- conversions are only performed through validated rules,
- current crop state does not erase history,
- observations are distinguishable from professional/lab/AI classifications,
- conflicting observations are not silently overwritten.

---

## 12. Resources, Activities, and Tasks Testing

Tests should cover:

- resource registration,
- resource availability,
- activity recording,
- activity dates,
- task creation,
- task status transitions,
- task completion,
- task association with farm/field/animal where applicable,
- invalid task transitions,
- historical activity preservation.

---

## 13. Weather Testing

Weather is an external dependency and must be tested through the provider-adapter boundary.

Tests should verify:

- successful provider response,
- provider timeout,
- provider error,
- malformed provider response,
- unavailable provider,
- stale/invalid data handling,
- provenance recording,
- location mapping,
- weather-to-context integration,
- recommendation behavior when weather data is unavailable.

Provider failure must not corrupt core farm records.

---

## 14. External Provider and Adapter Testing

Every external provider adapter should have tests for:

- successful response mapping,
- authentication failure,
- timeout,
- rate limiting,
- unavailable provider,
- malformed response,
- partial response,
- unexpected fields,
- retry behavior where applicable,
- graceful degradation,
- provider replacement compatibility.

Provider-specific behavior should remain outside core domain logic.

---

## 15. Evidence and Diagnostics Testing

Evidence workflows must test:

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

Tests should verify:

- evidence provenance,
- source type,
- timestamps,
- farm/field/sample linkage,
- original report preservation,
- lab/provider association,
- verification state,
- conflicting evidence,
- missing evidence,
- information-gap handling,
- expert escalation,
- recommendation traceability.

The system must not silently convert an inference into a verified measurement.

---

## 16. Recommendation and Decision Testing

Recommendation tests should verify:

- recommendation creation,
- context association,
- evidence association,
- knowledge source/version association where applicable,
- confidence/uncertainty representation,
- alternatives,
- risks,
- recommendation status,
- farmer acceptance,
- farmer rejection,
- farmer modification,
- action completion,
- outcome recording,
- feedback.

### 16.1 Why / Why Not

Where the product provides a recommendation explanation, tests should verify that the explanation corresponds to the available context and evidence.

The system must not invent evidence to justify a recommendation.

---

## 17. Conversation and Voice Testing

Conversation is an input and orchestration layer, not an unrestricted database interface.

Tests should verify:

```text
Farmer Input
    ↓
Conversation Engine
    ↓
Intent / Structured Action
    ↓
Validation
    ↓
Authorization
    ↓
Domain Service
    ↓
Persistence
```

### 17.1 Conversation Safety Cases

Test cases should include:

- valid structured intent,
- ambiguous intent,
- missing required information,
- invalid values,
- unsupported action,
- unauthorized action,
- malformed model output,
- hallucinated entity identifiers,
- attempted cross-farm mutation,
- duplicate action,
- confirmation-required action,
- provider/LLM unavailable.

The LLM must never receive direct database mutation authority.

---

## 18. AI and Intelligence Testing

AI-generated output must be treated as untrusted and probabilistic.

Tests should verify:

- structured-output validation,
- invalid output rejection,
- missing-field handling,
- uncertainty handling,
- provenance labeling,
- evidence requirements,
- recommendation boundaries,
- human escalation,
- prompt/input boundary handling,
- safe failure when AI services are unavailable.

AI tests should not treat generated text as a source of truth.

### 18.1 Safety Boundary

For high-impact or uncertain decisions, tests should verify that Agrova:

- requests additional evidence where required,
- presents uncertainty appropriately,
- escalates to a qualified human/service where required,
- does not falsely claim professional authority,
- does not automatically perform unsafe domain mutations.

---

## 19. Historical Data and Outcome Testing

Historical records are a core Agrova capability.

Tests should verify:

- previous crop records remain available,
- previous yields remain available,
- previous activities remain available,
- previous recommendations remain available,
- previous outcomes remain available,
- current state changes do not destroy historical records,
- temporal ordering is correct,
- outcome records remain linked to the appropriate decision/action.

Yield tests should support future farm-specific learning while avoiding unsupported causal claims.

---

## 20. Economics Testing

Economics tests should verify:

- input/cost records,
- revenue records,
- yield linkage,
- harvest linkage,
- calculation accuracy,
- missing-data handling,
- historical economic records,
- farm isolation,
- rounding/precision rules,
- invalid numeric values.

Economic conclusions must be traceable to the underlying recorded data.

---

## 21. Frontend Testing

Angular tests should cover:

- components,
- services,
- route guards,
- forms,
- validation,
- loading states,
- empty states,
- error states,
- permission-denied states,
- API failure states,
- responsive farmer workflows,
- accessibility-critical interactions,
- conversation UI,
- dashboard data rendering.

Frontend tests must not substitute for backend authorization tests.

The frontend is an untrusted client.

---

## 22. End-to-End Testing

E2E tests should focus on critical farmer journeys.

### MVP Critical Journey

```text
Authentication
    ↓
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

At least the most important happy paths and high-risk failure paths should be automated.

---

## 23. Regression Testing

Every bug that reaches a verified defect state should result in an appropriate regression test when practical.

Regression testing should protect:

- previously fixed bugs,
- authorization boundaries,
- domain invariants,
- API contracts,
- critical farmer journeys,
- provider-failure behavior,
- historical-data preservation,
- AI safety boundaries.

---

## 24. Security Testing

Security testing follows `09_SECURITY.md`.

Tests should cover:

- authentication,
- authorization,
- farm isolation,
- input validation,
- output safety,
- injection resistance,
- secure file handling,
- secret exposure prevention,
- API abuse/rate limiting where implemented,
- audit behavior,
- privacy boundaries,
- external integration credential isolation,
- unsafe error disclosure.

Security-critical tests must run before release.

---

## 25. Contract Testing

Contract tests should verify stable boundaries between:

- Angular frontend and backend APIs,
- backend and external providers,
- conversation engine and domain services,
- provider adapters and provider contracts,
- services/modules where explicit contracts are defined.

A contract failure should be detected before it becomes a production integration failure.

---

## 26. Test Data Strategy

Test data should be:

- deterministic where practical,
- isolated between tests,
- representative of realistic domain relationships,
- free of unnecessary personal/sensitive information,
- explicitly identifiable as test data.

Important test fixtures should include:

- one farm with multiple fields,
- one farm with multiple animals,
- multiple crop seasons,
- historical yield records,
- conflicting evidence,
- incomplete data,
- provider failure scenarios,
- multiple users/farms for authorization tests.

---

## 27. Test Environments

Testing should occur across appropriate environments:

```text
Local Development
      ↓
Automated CI Tests
      ↓
Integration / Test Environment
      ↓
Staging / Release Validation
      ↓
Production
```

Production data must not be casually copied into lower environments.

Environment-specific secrets must remain separated.

---

## 28. CI/CD Testing Gates

A change should not be considered release-ready until required automated checks pass.

Minimum CI gates for the MVP should include:

1. Build succeeds.
2. Unit tests pass.
3. Integration tests pass.
4. API tests pass.
5. Security-critical tests pass.
6. Frontend tests pass where applicable.
7. E2E critical-path tests pass where applicable.
8. Database migration validation passes.
9. Static/quality checks pass where configured.
10. No known blocking regression remains.

---

## 29. Test Naming and Organization

Tests should make the business behavior obvious.

Prefer names that describe:

```text
given → when → then
```

Examples:

- given a farmer owns a farm, when requesting its dashboard, then the dashboard is returned.
- given a farmer does not own a farm, when requesting its data, then access is denied.
- given weather provider failure, when loading the dashboard, then core farm data remains available.
- given conflicting measurements, when saving new evidence, then existing evidence is preserved.

---

## 30. Definition of Done — Testing Requirements

A feature is not complete merely because the implementation works manually.

Where applicable, Definition of Done includes:

- unit tests,
- integration tests,
- API tests,
- authorization tests,
- frontend tests,
- E2E tests for critical journeys,
- negative/error-path tests,
- security tests,
- regression coverage,
- migration tests,
- provider failure tests,
- documentation updates.

Test coverage must be appropriate to risk; raw percentage alone is not the definition of quality.

---

## 31. MVP Test Boundary

The MVP must establish reliable testing for:

```text
Authentication
    ↓
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

The MVP does not require complete automated coverage of future capabilities such as:

- full diagnostic provider network,
- satellite intelligence,
- IoT,
- Digital Twin,
- advanced farm learning,
- full ecosystem marketplace/network.

Those capabilities must receive their own test strategy as they enter implementation.

---

## 32. Release Validation

Before release, Agrova should verify:

- application builds,
- migrations work,
- critical APIs work,
- authentication works,
- farm isolation works,
- core farmer workflows work,
- critical UI states work,
- provider failures degrade safely,
- logs and health checks behave correctly,
- no known critical security issue remains.

Release validation should be recorded according to the release process.

---

## 33. Observability and Testability

Important operations should produce enough structured information to diagnose failures without leaking sensitive data.

Testing should verify:

- health endpoints,
- meaningful error classification,
- request/operation correlation where implemented,
- provider failure visibility,
- audit events where required,
- security-event visibility,
- absence of secrets in logs.

---

## 34. Performance Testing

Performance testing should be introduced according to risk and scale.

MVP performance checks should focus on:

- application startup,
- database query behavior,
- critical API response times,
- dashboard aggregation,
- common farmer workflows,
- concurrent request handling,
- provider timeout behavior.

Do not prematurely optimize without evidence, but do not ignore clearly measurable bottlenecks.

---

## 35. Reliability and Failure Testing

Agrova must be tested under controlled failure conditions.

Examples:

- database unavailable,
- provider unavailable,
- provider timeout,
- AI unavailable,
- malformed external response,
- network interruption,
- invalid user input,
- expired authentication,
- unauthorized resource access.

The expected behavior must be defined rather than left to accidental framework behavior.

---

## 36. Test Review and Maintenance

Tests are production assets and must evolve with the system.

When requirements change:

1. Update the requirement.
2. Update acceptance criteria.
3. Update affected tests.
4. Add regression coverage where necessary.
5. Run the relevant test suite.
6. Record significant test-strategy changes.

Flaky tests must be investigated rather than permanently ignored.

---

## 37. Test Evidence and Traceability

Important features should be traceable through:

```text
Feature ID
    ↓
Requirement
    ↓
Acceptance Criteria
    ↓
Implementation
    ↓
Tests
    ↓
Release
    ↓
Observed Outcome
```

This connects the Feature Registry, Requirements, Architecture, Security, Decisions, and Release process.

---

## 38. Testing Summary

Agrova testing is designed around one principle:

> **A working system is not enough; Agrova must behave correctly, securely, predictably, and safely when helping a farmer make decisions.**

The testing strategy therefore covers:

- domain correctness,
- data integrity,
- farm isolation,
- API correctness,
- frontend behavior,
- external-provider resilience,
- evidence and provenance,
- AI safety,
- historical memory,
- outcome traceability,
- security,
- regression,
- end-to-end farmer workflows.

**Document Status: Accepted Baseline**

---

## Living Document

This document evolves as Agrova evolves.

Changes should be intentional and discussed before implementation in the respective document governing that subject.

**Last Updated:** 6 September 2026
