# Agrova Security Architecture & Baseline

## 1. Purpose

This document defines the security architecture and baseline controls for Agrova.

Agrova is a farmer-first Farm Intelligence platform that will store and process farm, animal, crop, resource, activity, task, weather, diagnostic, recommendation, outcome, and economic information.

Security must protect both the farmer's data and the integrity of decisions derived from that data.

The security baseline follows these principles:

- Authenticate before protected operations.
- Authorize every protected operation.
- Treat farm access as an explicit authorization boundary.
- Validate input at every trust boundary.
- Never trust client-supplied ownership or authorization claims.
- Minimize data collection and external disclosure.
- Protect secrets and credentials outside source control.
- Preserve auditability for important changes.
- Keep external providers isolated from core domain data.
- Fail safely when authentication, authorization, or external services fail.
- Security controls must not be bypassed merely because an operation originates from Agrova's UI or conversational interface.

---

## 2. Security Architecture Overview

Protected request flow:

```text
Client
  |
  v
HTTPS / Transport Security
  |
  v
Authentication
  |
  v
Identity Resolution
  |
  v
Authorization
  |
  v
Farm / Resource Access Check
  |
  v
Input Validation
  |
  v
Domain Operation
  |
  v
Persistence
  |
  v
Audit / Observability
```

Authentication answers:

> Who is making this request?

Authorization answers:

> Is this identity allowed to perform this operation on this resource?

Validation answers:

> Is the requested operation and data structurally and semantically acceptable?

These concerns must remain distinct.

---

## 3. Security Boundaries

Agrova has several trust boundaries:

```text
Farmer / Device
      |
      v
Agrova Frontend
      |
      v
Agrova API
      |
      +--------------------+
      |                    |
      v                    v
Agrova Domain          External Providers
      |
      v
PostgreSQL / File Storage
```

Additional boundaries include:

- Browser to backend
- Backend to database
- Backend to external APIs
- Backend to AI providers
- Backend to weather providers
- Backend to maps or geospatial providers
- Backend to diagnostic/lab providers
- Backend to expert/service providers
- Uploaded files and images entering Agrova
- Voice/transcription input entering Agrova
- Conversational instructions entering domain operations

Every boundary must have explicit validation, authentication/authorization where applicable, data minimization, and failure behavior.

---

## 4. Identity and Authentication

### 4.1 Agrova Internal Identity

Agrova maintains its own internal user identity.

External authentication providers are authentication mechanisms, not the canonical Agrova domain identity.

Conceptually:

```text
Google Account
      |
      v
Authentication Provider Mapping
      |
      v
Agrova User Identity
      |
      v
Farmer / Farm Access
```

This prevents the domain model from becoming tightly coupled to one authentication provider.

### 4.2 Google Authentication

Google authentication is an external identity provider integration.

Security requirements:

- Verify Google identity tokens on the backend.
- Do not trust identity information supplied only by the frontend.
- Validate token issuer, audience, signature, expiry, and relevant claims.
- Use exact configured redirect URIs.
- Keep development/testing and production Google projects separated where appropriate.
- Use HTTPS in production.
- Protect client secrets and credentials.
- Request only the minimum required scopes.
- Protect OAuth state and callback flows against CSRF.
- Do not expose provider secrets in frontend source code or Git.

### 4.3 Account Linking

Account linking must be deliberate.

An external identity must not automatically gain access to an existing Agrova account merely because an email address appears similar.

Linking must use a secure, explicitly authorized flow.

### 4.4 Device and Person Are Different Concepts

An Agrova account, a physical device, and the person currently operating the device are not assumed to be identical.

This matters because farm phones may be shared by family members or workers.

Authorization must therefore be based on Agrova identity and granted access, not merely on possession of a device.

---

## 5. Authorization Model

Authentication alone never grants access to farm data.

Protected operations follow:

```text
Authenticated Identity
        |
        v
Authorization Check
        |
        v
Farm Access Check
        |
        v
Resource / Domain Permission
        |
        v
Operation
```

### 5.1 Farm as Primary Authorization Boundary

Farm ownership/access is a foundational authorization boundary.

Conceptually:

```text
Farmer A
  |
  +-- Farm A
       +-- Animals
       +-- Fields
       +-- Resources
       +-- Activities
       +-- Tasks
       +-- Diagnostics
       +-- Outcomes
```

Farmer A must not be able to access Farmer B's farm data unless an explicit future access model grants such permission.

### 5.2 Never Trust Client Ownership

The frontend must not be treated as the authority for:

- user ID
- farm ID ownership
- field ownership
- animal ownership
- permissions
- roles
- access decisions

The backend must resolve and verify ownership/access from trusted server-side data.

### 5.3 Future Shared-Farm Access

The architecture leaves room for future roles such as:

- Farm owner
- Family member
- Worker
- Vet / expert
- Service provider

Such access must be explicit, scoped, revocable, and auditable.

---

## 6. Data Classification

Agrova uses the following baseline classification:

| Classification | Meaning | Examples |
|---|---|---|
| Public | Information intended for public use | Public agricultural knowledge |
| Internal | Agrova operational information | Internal configuration/documentation |
| Farmer-private | Farm information belonging to a farmer/farm | Field records, crop history, tasks |
| Sensitive | Data requiring stronger protection | Diagnostic reports, financial records |
| Highly-sensitive | Data requiring the strongest controls | Authentication secrets, security credentials, protected identity/security material |

Classification should be attached to data models, files, integrations, and APIs where practical.

---

## 7. Data Protection

### 7.1 In Transit

Production communication must use HTTPS/TLS.

Sensitive information must not be intentionally transmitted over insecure transport.

### 7.2 At Rest

Database and storage protection must be applied according to the sensitivity of the stored information and the deployment environment.

Secrets, credentials, and security material require stronger protection than ordinary farm records.

### 7.3 Data Minimization

Agrova should collect and retain only information necessary for:

- the requested farm operation,
- product functionality,
- security,
- auditability,
- legally required or explicitly justified purposes.

External providers should receive only the minimum data needed for the requested operation.

---

## 8. Secrets and Configuration

Secrets must never be committed to Git.

Examples include:

```text
Database credentials
JWT / signing secrets
Google credentials
Weather API keys
AI provider keys
Storage credentials
External service credentials
Encryption keys
```

Configuration must distinguish:

```text
Development
Testing
Production
```

The repository may contain safe configuration templates such as `.env.example`, but real credentials must remain outside source control.

Secrets must also not be:

- hard-coded in Java source,
- hard-coded in Angular source,
- placed in committed configuration,
- logged,
- returned in API responses.

---

## 9. API Security

All protected APIs must establish:

1. Authentication where required.
2. Authorization.
3. Farm/resource access validation.
4. Input validation.
5. Domain-level validation.
6. Safe error handling.
7. Appropriate audit/observability.

### 9.1 Input Validation

Validate:

- request structure,
- required fields,
- field lengths,
- allowed values,
- numeric ranges,
- identifiers,
- dates,
- uploaded file metadata,
- domain constraints.

Client-side validation improves user experience but never replaces backend validation.

### 9.2 Output Safety

APIs should return only data the caller is authorized to receive.

Avoid exposing:

- internal implementation details,
- stack traces,
- secrets,
- unnecessary provider responses,
- unnecessary personal information,
- database internals.

### 9.3 Error Handling

Errors should be useful to the caller without leaking sensitive implementation details.

Production responses should not expose stack traces, credentials, SQL details, or internal security configuration.

### 9.4 Rate Limiting

Rate limiting should be applied where abuse or excessive consumption is plausible, especially for:

- authentication endpoints,
- expensive AI operations,
- file/image processing,
- external-provider calls,
- public or semi-public endpoints.

Exact limits are implementation/configuration decisions and should not be hard-coded into this architecture document.

---

## 10. Browser and Frontend Security

The Angular application is an untrusted client from the backend's perspective.

Frontend code must not be treated as a security boundary.

Important controls include:

- HTTPS in production.
- Secure authentication/session handling.
- Appropriate CORS configuration.
- CSRF protection where applicable to the chosen authentication mechanism.
- Avoid storing highly sensitive credentials in browser-accessible storage.
- Do not expose backend/provider secrets in frontend bundles.
- Sanitize or safely render user-generated content.
- Validate uploads before processing.
- Avoid unsafe dynamic HTML execution.
- Keep dependencies maintained.

---

## 11. Database Security

PostgreSQL is a protected infrastructure component.

Requirements include:

- authenticated database access,
- least-privilege database credentials,
- separate environments where appropriate,
- protected database network access,
- secure credential storage,
- migrations managed through Flyway,
- no production database credentials in Git,
- appropriate backup and recovery controls.

Application authorization remains mandatory even when database connectivity itself is restricted.

---

## 12. File, Image, Voice, and Document Security

Agrova will eventually process artifacts such as:

```text
Crop photos
Animal photos
Soil reports
Diagnostic reports
Voice recordings
Other farmer documents
```

Security requirements include:

- Authenticate and authorize file access.
- Associate files with the correct farm/domain resource.
- Validate file type and size.
- Do not trust client-provided MIME type alone.
- Generate controlled storage identifiers.
- Prevent path traversal.
- Do not expose raw storage paths as authorization.
- Restrict download access.
- Consider malware/content scanning where appropriate.
- Avoid unnecessary retention of raw voice or image data.
- Preserve provenance for important diagnostic documents.

A file URL is not itself proof that a user is authorized to access the file.

---

## 13. Conversational and Voice Security

Agrova may receive:

```text
Farmer speech
Text
Photos
Conversational requests
AI-generated interpretations
```

The conversation layer must not directly mutate domain data.

Required flow:

```text
Farmer
  |
  v
Conversation Engine
  |
  v
Intent / Structured Action
  |
  v
Validation
  |
  v
Authorization
  |
  v
Domain Service
  |
  v
Database
```

The LLM or conversational model must never be treated as an authorization authority.

It must not directly execute arbitrary database mutations.

Ambiguous or high-impact actions should require confirmation or appropriate human/professional validation.

---

## 14. AI and Intelligence Security

AI is an assisting component, not a security authority.

The system must distinguish:

```text
Farmer-reported
Lab-measured
Expert-assessed
AI-interpreted
Weather-derived
System-derived
```

AI output must not silently overwrite trusted source data.

AI providers should receive only the minimum information required for the requested task.

Sensitive farm data should not be sent to external AI services by default unless the operation, provider, configuration, and applicable consent/privacy requirements permit it.

AI-generated recommendations must remain traceable to their context and evidence where practical.

---

## 15. External Provider Security

External providers include future integrations for:

- Weather
- Maps
- AI
- Speech
- Soil laboratories
- Diagnostic services
- Experts
- Other farm services

Integration boundary:

```text
Agrova Domain
      |
      v
Provider Adapter
      |
      v
External Provider
```

Security controls include:

- provider-specific credentials,
- least-privilege access,
- secure secret storage,
- timeout limits,
- controlled retries,
- input/output validation,
- data minimization,
- provider response validation,
- auditability for important external operations.

External provider availability must never be assumed.

---

## 16. Audit and Accountability

Important security and data-changing operations should be auditable.

Baseline audit information:

```text
WHO
WHAT
WHEN
SOURCE
BEFORE
AFTER
```

Where applicable, audit records should identify:

- actor identity,
- operation,
- affected resource,
- timestamp,
- source/channel,
- previous value,
- new value,
- relevant request/correlation identifier.

Audit records must themselves be protected from unauthorized modification.

Not every low-value read operation requires a heavyweight audit record; audit depth should match security and business risk.

---

## 17. Data Provenance and Trust

Security is also about protecting the integrity and meaning of information.

Important data should preserve provenance such as:

```text
Farmer observation
Lab measured
Expert verified
AI inferred
Weather provider
System calculated
Imported
```

Conflicting measurements must not be silently overwritten.

Example:

```text
Farmer observation
       +
Lab result
       +
AI interpretation
```

must remain distinguishable.

This protects against accidental loss of evidence and prevents an interpretation from being mistaken for an original measurement.

---

## 18. Privacy and Farmer Control

Agrova should provide architectural support for:

- access control,
- data export,
- correction,
- deletion where applicable,
- consent management where applicable,
- data minimization,
- controlled sharing,
- retention policies.

Farmer data must not be treated as freely reusable merely because Agrova stores it.

Future product and legal requirements will determine the exact policy and retention periods.

---

## 19. Security for Diagnostics and Service Networks

Diagnostic workflows may involve:

```text
Farmer
  |
  v
Agrova
  |
  v
Provider Matching
  |
  v
Sample Collection
  |
  v
Laboratory
  |
  v
Digital Report
  |
  v
Agrova Evidence
  |
  v
Interpretation
  |
  v
Recommendation
```

Security and integrity requirements include:

- verify the intended farm/field,
- associate the correct sample with the correct field,
- protect sample identifiers,
- preserve collection metadata,
- restrict report access,
- preserve the original report,
- distinguish lab results from Agrova interpretation,
- record provider provenance,
- audit important changes.

The original laboratory report must not be replaced by an interpreted summary.

---

## 20. Security and Human-in-the-Loop Safety

Agrova operates in domains where incorrect advice can cause economic or physical harm.

Therefore:

- AI assists; it does not replace qualified professionals where professional judgment is required.
- Diagnostic uncertainty must be visible.
- High-impact recommendations should have appropriate evidence and validation.
- Agrova must not present AI inference as a verified fact.
- External provider results must be distinguishable from Agrova-generated interpretation.
- The farmer remains the decision-maker.
- Security controls must protect the integrity of recommendations and their evidence.

---

## 21. Reliability and Security Interaction

Security must not create a single point of failure for core farm records.

Examples:

```text
Weather Provider Down
        |
        v
Weather capability unavailable
        |
        v
Pashu / Khet / Farm records remain available
```

and:

```text
AI Provider Down
        |
        v
AI capability unavailable
        |
        v
Manual observations and core records remain available
```

However, security failures are different from optional provider failures.

If authorization cannot be established safely:

```text
Authorization Uncertain
        |
        v
DENY PROTECTED OPERATION
```

Agrova must fail closed for protected access decisions.

---

## 22. Logging and Security Observability

Security-relevant events should be observable without leaking secrets or sensitive payloads.

Examples:

- authentication success/failure,
- authorization denial,
- account linking,
- permission changes,
- sensitive data changes,
- security configuration changes,
- suspicious request patterns,
- external provider failures affecting protected workflows.

Logs must not contain:

- passwords,
- access tokens,
- API keys,
- private credentials,
- unnecessary sensitive farmer data.

Use correlation/request identifiers to connect events without copying sensitive payloads into logs.

---

## 23. Dependency and Supply-Chain Security

Agrova depends on:

```text
Java / Spring ecosystem
Angular / TypeScript ecosystem
PostgreSQL
Flyway
External providers
Build tooling
Container/runtime dependencies
```

Baseline practices:

- Keep dependencies tracked.
- Review security advisories.
- Avoid unnecessary dependencies.
- Pin or otherwise control versions appropriately.
- Review new dependencies before adoption.
- Remove unused dependencies.
- Keep build and deployment environments protected.

---

## 24. Environment Separation

At minimum, distinguish:

```text
Development
Testing
Production
```

Environment-specific:

- credentials,
- OAuth configuration,
- database connections,
- external provider keys,
- storage,
- logging configuration,
- security settings

must not be accidentally shared.

Production credentials must never be required for local development.

---

## 25. Security Testing

Security testing is part of the Definition of Done for protected functionality.

Expected levels include:

### Unit Tests

- authorization rules,
- ownership checks,
- validation,
- security-sensitive domain rules.

### Integration Tests

- authenticated access,
- unauthorized access,
- cross-farm isolation,
- provider boundary behavior,
- database permissions where applicable.

### API Tests

- missing authentication,
- invalid tokens,
- insufficient permissions,
- invalid input,
- unauthorized resource IDs,
- malformed requests.

### End-to-End Tests

- farmer login,
- farm access,
- protected CRUD flows,
- denied cross-farm access,
- secure error behavior.

### Security Regression Tests

Every discovered security defect should result in an appropriate regression test where practical.

---

## 26. MVP Security Boundary

The two-month MVP must implement a meaningful security baseline without attempting to solve every future security problem.

MVP priorities:

```text
Authentication
     ↓
Authorization
     ↓
Farm ownership/access isolation
     ↓
Backend validation
     ↓
Secure configuration
     ↓
Secret protection
     ↓
Safe API errors
     ↓
Basic auditability
     ↓
Provider credential isolation
```

Future advanced capabilities such as sophisticated role hierarchies, enterprise identity federation, advanced threat detection, and large-scale security operations can evolve later.

The MVP must nevertheless establish the correct security boundaries from the beginning.

---

## 27. Security Principles for Future Evolution

As Agrova grows:

- Security boundaries must remain explicit.
- New modules inherit authorization requirements rather than bypassing them.
- New providers use controlled adapters.
- New data types receive an appropriate classification.
- New AI capabilities inherit provenance and human-in-the-loop rules.
- New file types inherit secure storage/access controls.
- New shared-farm roles require explicit authorization design.
- Service extraction must preserve identity, authorization, audit, and data-isolation boundaries.

Security must evolve with the architecture rather than being rebuilt after scaling.

---

## 28. Security Summary

Agrova's security model is built around a simple rule:

> A user may perform an operation only when Agrova can establish both the user's identity and their authorization for the specific farm/resource involved.

The resulting baseline is:

```text
IDENTITY
   ↓
AUTHENTICATION
   ↓
AUTHORIZATION
   ↓
FARM / RESOURCE ISOLATION
   ↓
VALIDATION
   ↓
DOMAIN OPERATION
   ↓
PROTECTED DATA
   ↓
AUDIT / OBSERVABILITY
```

And for intelligence-driven workflows:

```text
INPUT
   ↓
EVIDENCE
   ↓
CONTEXT
   ↓
AI / KNOWLEDGE
   ↓
VALIDATION
   ↓
RECOMMENDATION
   ↓
FARMER DECISION
```

Security protects not only access to Agrova, but also the integrity, provenance, privacy, and trustworthiness of the information used to help a farmer decide what to do next.
