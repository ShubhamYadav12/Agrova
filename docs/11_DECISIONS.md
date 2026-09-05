# Agrova Architecture & Engineering Decisions

## 1. Purpose

This document records the major architectural and engineering decisions that define Agrova.

The purpose is to preserve decision context, prevent repeated debates, keep implementation consistent with the architecture, and make future changes deliberate rather than accidental.

Each decision records its context, alternatives, chosen approach, trade-offs, and consequences.

---

## 2. Decision Status

Decision statuses used in this document:

- **Accepted** — approved baseline decision.
- **Superseded** — replaced by a newer decision.
- **Proposed** — under consideration.
- **Rejected** — considered and intentionally not selected.

All decisions in this baseline are **Accepted** unless explicitly stated otherwise.

---

## ADR-001 — Modular Monolith First

### Context

Agrova is being built by a very small team and must reach a coherent MVP quickly while preserving clear domain boundaries.

The product contains multiple domains such as Farmer, Farm, Pashu, Khet, Resources, Tasks, Weather, Intelligence, Conversation, and Economics.

### Problem

Premature microservices would introduce deployment, networking, observability, authentication, data-distribution, and operational complexity before the product has validated its domain boundaries.

### Options Considered

1. Microservices from the beginning.
2. A single unstructured application.
3. A modular monolith with explicit domain boundaries.

### Decision

**Use a modular monolith as the initial Agrova backend architecture.**

Modules remain domain-oriented and communicate through explicit application/domain boundaries.

### Why We Chose It

It provides strong domain separation without premature distributed-system complexity.

### Trade-offs

- Easier deployment and local development.
- Lower operational complexity.
- Easier transactions across closely related domains.
- Requires discipline to prevent modules from becoming tightly coupled.

### Consequences

The architecture must preserve module boundaries so individual modules can be extracted later if scale or organizational needs justify it.

**Status:** Accepted

---

## ADR-002 — PostgreSQL as Primary Database

### Context

Agrova must preserve structured farm, animal, crop, activity, task, weather, diagnostic, recommendation, outcome, and economic history.

### Problem

The system requires transactional integrity, relational relationships, historical records, querying, and reliable constraints.

### Options Considered

1. PostgreSQL.
2. A document database as the primary store.
3. Multiple specialized databases from the beginning.

### Decision

**Use PostgreSQL as Agrova's primary application database.**

### Why We Chose It

Agrova's core domain is highly relational. PostgreSQL provides transactions, constraints, indexing, relational queries, JSON support where useful, and mature tooling.

### Trade-offs

- Strong consistency and relational modeling.
- Excellent support for complex domain relationships.
- Requires deliberate schema design and migrations.

### Consequences

Core domain records will use relational models. Specialized stores may be introduced later only when a demonstrated requirement exists.

**Status:** Accepted

---

## ADR-003 — Flyway for Database Migrations

### Context

Agrova's database schema will evolve continuously during development and production operation.

### Problem

Manual schema changes create environments that drift and make deployments difficult to reproduce.

### Options Considered

1. Manual SQL changes.
2. ORM-generated schema changes as the source of truth.
3. Versioned database migrations using Flyway.

### Decision

**Use Flyway-managed versioned database migrations.**

### Why We Chose It

Every schema change becomes an explicit, reviewable, ordered artifact that can be applied consistently across environments.

### Trade-offs

- Requires migration discipline.
- Developers must avoid unmanaged production schema changes.

### Consequences

Database changes must be delivered through versioned migrations and tested as part of the release process.

**Status:** Accepted

---

## ADR-004 — Angular + TypeScript

### Context

Agrova requires a maintainable web frontend capable of supporting farmer-focused workflows, responsive interfaces, forms, dashboards, conversation, and future voice/photo interactions.

### Problem

The frontend needs strong structure and type safety as the number of domain workflows grows.

### Options Considered

1. Angular + TypeScript.
2. React + TypeScript.
3. Other frontend frameworks.

### Decision

**Use Angular with TypeScript for the Agrova frontend.**

### Why We Chose It

Angular provides an opinionated application structure, dependency injection, routing, forms, HTTP tooling, and strong TypeScript integration suitable for a large structured application.

### Trade-offs

- More framework structure than a minimal frontend.
- Requires Angular-specific conventions and discipline.

### Consequences

Frontend architecture will follow feature/domain boundaries rather than becoming one large shared UI layer.

**Status:** Accepted

---

## ADR-005 — Spring Boot Backend

### Context

Agrova requires a robust backend for domain logic, validation, authorization, persistence, integrations, and APIs.

### Problem

The backend must support maintainable enterprise-grade development while remaining practical for the MVP.

### Options Considered

1. Spring Boot.
2. A lightweight custom Java HTTP stack.
3. A different backend platform.

### Decision

**Use Java with Spring Boot for the Agrova backend.**

### Why We Chose It

Spring Boot provides mature support for REST APIs, dependency injection, validation, security, persistence integration, testing, and production operations.

### Trade-offs

- Larger framework footprint.
- Requires familiarity with Spring conventions.

### Consequences

Backend domain logic, application services, API boundaries, security, and infrastructure integrations will follow Spring Boot conventions.

**Status:** Accepted

---

## ADR-006 — Farm as the Primary Context Boundary

### Context

Agrova manages information belonging to a particular farmer and farm, including fields, animals, resources, activities, recommendations, and outcomes.

### Problem

Without an explicit farm context, records can become incorrectly associated across farms or users.

### Options Considered

1. User-only ownership.
2. Independent resource ownership without a farm boundary.
3. Farm as the primary domain context with explicit ownership and authorization.

### Decision

**Treat the Farm as the primary authorization and contextual boundary for farm-owned data.**

### Why We Chose It

A farm is the meaningful unit through which agricultural state, history, resources, decisions, and outcomes are understood.

### Trade-offs

- Requires explicit farm-resource relationships.
- Shared-family usage needs deliberate authorization design.

### Consequences

Protected operations must verify authentication, authorization, and farm/resource access on the backend.

**Status:** Accepted

---

## ADR-007 — Domain-Oriented Modules

### Context

Agrova contains multiple related but distinct agricultural domains.

### Problem

A flat application structure would cause unrelated business logic to become tightly coupled.

### Options Considered

1. Organize primarily by technical layer.
2. Keep all domain logic together.
3. Organize the backend into explicit domain-oriented modules.

### Decision

**Use domain-oriented modules inside the modular monolith.**

Initial target modules include Farmer, Farm, Pashu, Khet, Resources, Activities, Tasks, Weather, Diagnostics, Providers, Evidence, Knowledge, Context, Intelligence, Recommendations, Outcomes, Economics, Conversation, and Shared infrastructure.

### Why We Chose It

Domain boundaries make ownership, testing, evolution, and future extraction clearer.

### Trade-offs

- Requires careful boundary management.
- Some cross-domain workflows need explicit orchestration.

### Consequences

Shared code must remain genuinely shared; domain-specific business rules should not be placed in generic utility layers.

**Status:** Accepted

---

## ADR-008 — Provider Adapter Architecture

### Context

Agrova will depend on external services such as weather providers, maps, AI, speech, satellite services, diagnostic labs, and expert networks.

### Problem

External providers change, fail, impose limits, and have different contracts.

### Options Considered

1. Call providers directly from domain code.
2. Couple Agrova permanently to one provider.
3. Hide external providers behind explicit adapters/interfaces.

### Decision

**Use provider interfaces and adapters at external integration boundaries.**

### Why We Chose It

Core Agrova domain logic must not depend directly on provider-specific APIs.

### Trade-offs

- Adds abstraction and implementation work.
- Requires adapter contract testing.

### Consequences

Provider failures and replacements can be isolated without rewriting core domain logic.

**Status:** Accepted

---

## ADR-009 — Graceful Degradation

### Context

External services cannot be assumed to be continuously available.

### Problem

A weather, AI, speech, map, or diagnostic provider outage must not corrupt or disable unrelated core farm records.

### Options Considered

1. Make all external services mandatory.
2. Fail the entire application when an external provider fails.
3. Isolate provider failures and preserve core functionality.

### Decision

**Agrova will degrade gracefully when external providers fail.**

### Why We Chose It

Core records such as farm, animal, crop, activity, task, and historical data must remain usable even when optional services are unavailable.

### Trade-offs

- Users may receive reduced functionality temporarily.
- The UI must clearly communicate unavailable capabilities.

### Consequences

Provider failure must never be represented as successful completion of an external operation.

**Status:** Accepted

---

## ADR-010 — Observation Before Recommendation

### Context

Farm decisions should be grounded in what is actually happening on a particular farm.

### Problem

Jumping directly from a vague farmer question to a recommendation can create unsafe or irrelevant advice.

### Options Considered

1. Recommendation first.
2. General knowledge first.
3. Capture observations and context before producing recommendations.

### Decision

**Use the sequence Observation → Evidence → Assessment → Recommendation → Action → Outcome wherever applicable.**

### Why We Chose It

The farmer may know what they see without knowing the technical diagnosis. Agrova should begin with the farmer's observation and progressively build understanding.

### Trade-offs

- May require additional questions or evidence collection.
- Produces more deliberate workflows.

### Consequences

Recommendations must be traceable to available observations, evidence, knowledge, and context.

**Status:** Accepted

---

## ADR-011 — Evidence Before Intelligence

### Context

Agrova will eventually provide farm intelligence and diagnostic assistance.

### Problem

Intelligence generated from incomplete or unreliable information can be misleading.

### Options Considered

1. Generate intelligence from whatever data is available.
2. Treat AI output as authoritative evidence.
3. Identify information gaps and collect appropriate evidence before high-impact conclusions.

### Decision

**Agrova will distinguish raw observations, measured evidence, professional assessments, AI interpretations, and recommendations.**

When important information is missing, the system should identify the gap and request or obtain appropriate evidence where practical.

### Why We Chose It

Evidence quality is foundational to trustworthy intelligence.

### Trade-offs

- More workflow complexity.
- Some recommendations may be delayed until evidence is available.

### Consequences

The system must preserve provenance and data-quality state rather than silently presenting inferred information as measured fact.

**Status:** Accepted

---

## ADR-012 — LLM Cannot Directly Mutate Domain Data

### Context

Conversational Agrova may use language models to understand farmer speech, text, images, and requests.

### Problem

An LLM should not have unrestricted authority to write directly to the database.

### Options Considered

1. Allow the LLM to directly call database mutation operations.
2. Allow unrestricted tool execution.
3. Convert model output into structured intent/action, then validate and authorize through normal application services.

### Decision

**An LLM must never directly mutate Agrova domain data.**

The required flow is:

Farmer input → Conversation Engine → Intent/Structured Action → Validation → Authorization → Domain Service → Persistence → Audit where applicable.

### Why We Chose It

This preserves deterministic validation, authorization, auditability, and domain invariants.

### Trade-offs

- Requires an orchestration layer.
- Conversational implementation is more structured than direct agent-to-database execution.

### Consequences

AI output is treated as untrusted input and must pass the same security and business validation boundaries as other external input.

**Status:** Accepted

---

## ADR-013 — Purposeful Read Models

### Context

Farmer-facing screens often need information from multiple domain modules.

### Problem

A frontend that makes many tiny API calls becomes slow, chatty, and harder to reason about.

### Options Considered

1. One endpoint per database entity for every screen.
2. One giant endpoint returning the entire farm.
3. Purposeful screen/use-case-oriented read models.

### Decision

**Prefer purposeful read models and aggregated query endpoints for meaningful screens and workflows.**

For example, a farm dashboard may return the farm summary, relevant animal/crop summaries, tasks, alerts, and weather information required by that screen.

This is a guideline, not an absolute one-call rule.

### Why We Chose It

The API should serve user intent rather than expose database structure directly.

### Trade-offs

- Read models require deliberate design.
- Some duplication between read and write representations may exist.

### Consequences

API contracts will be designed around use cases while preserving domain ownership and security boundaries.

**Status:** Accepted

---

## ADR-014 — Historical Data Must Be Preserved

### Context

Agrova's long-term value depends on understanding how a particular farm changes over seasons.

### Problem

Overwriting current values destroys the history needed for comparison, learning, and outcome analysis.

### Options Considered

1. Store only current state.
2. Overwrite old values.
3. Preserve meaningful historical records and represent current state separately or derivably.

### Decision

**Historical farm data must be preserved where it has operational or learning value.**

Examples include crop history, soil observations, weather context, activities, inputs, harvests, yields, costs, recommendations, decisions, and outcomes.

### Why We Chose It

Agrova must remember what happened, not merely what is true today.

### Trade-offs

- More storage and schema complexity.
- Requires temporal and lifecycle design.

### Consequences

Changes that represent new observations or events should normally create historical records rather than silently destroying prior information.

**Status:** Accepted

---

## ADR-015 — Data Provenance

### Context

Agrova will combine farmer observations, measurements, laboratory reports, expert assessments, weather data, and AI-generated interpretations.

### Problem

Different sources have different reliability and meaning.

### Options Considered

1. Treat all data as equivalent.
2. Store source information only in logs.
3. Preserve provenance as part of relevant domain/evidence records.

### Decision

**Agrova will preserve the provenance of important data and derived conclusions.**

Examples include farmer-reported, lab-verified, expert-verified, weather-provider, imported, and AI-inferred states.

### Why We Chose It

The system and farmer need to understand not only what a value says, but where it came from.

### Trade-offs

- Additional metadata and schema complexity.
- Provenance must be maintained through derived workflows.

### Consequences

Conflicting measurements must not be silently overwritten. Original diagnostic reports and source evidence should remain traceable where appropriate.

**Status:** Accepted

---

## ADR-016 — Human-in-the-Loop for High-Impact Decisions

### Context

Agricultural recommendations can affect crops, animals, money, inputs, and farmer livelihoods.

### Problem

Automated intelligence can be uncertain and may lack necessary field evidence.

### Options Considered

1. Fully autonomous recommendations and actions.
2. No automation at all.
3. Automated assistance with human verification/escalation where risk or uncertainty warrants it.

### Decision

**Agrova will use human-in-the-loop controls for high-impact, uncertain, or professionally regulated decisions.**

AI may assist with understanding, summarization, triage, evidence gathering, and option generation, but it must not falsely represent itself as a veterinarian, agronomist, laboratory, or other professional authority.

### Why We Chose It

Human expertise is an important safety and trust boundary.

### Trade-offs

- Some workflows require escalation and may take longer.
- Provider/expert network integration adds complexity.

### Consequences

The architecture must support expert escalation, provenance, recommendation status, uncertainty, and farmer-visible explanations.

**Status:** Accepted

---

## ADR-017 — MVP Before Premature Complexity

### Context

Agrova has a broad long-term vision including advanced diagnostics, provider networks, satellite data, IoT, Digital Twin capabilities, advanced intelligence, and farm learning.

The immediate goal is a coherent working MVP within the current development window.

### Problem

Attempting the complete long-term platform before validating the core workflow would create excessive scope and reduce the probability of delivering a usable product.

### Options Considered

1. Build the complete long-term ecosystem immediately.
2. Build disconnected demos of many advanced capabilities.
3. Build a coherent vertical slice and evolve it deliberately.

### Decision

**Build a coherent MVP vertical slice first.**

The initial implementation boundary is:

Farmer → Farm → Pashu → Khet → Resources/Activities → Tasks → Weather → Dashboard → Basic Context/Intelligence → Conversation → Economics.

Advanced capabilities remain documented in the roadmap and are not silently pulled into the MVP.

### Why We Chose It

A complete vertical slice validates the core product philosophy: understand the farmer's farm and help the farmer decide what to do next.

### Trade-offs

- Some exciting future capabilities must wait.
- MVP will not represent the full eventual Agrova ecosystem.

### Consequences

New ideas must enter the Feature Registry/Idea Backlog and roadmap process rather than disrupting the active MVP scope.

**Status:** Accepted

---

## 3. Decision Governance

These decisions are part of Agrova's engineering baseline.

A decision may be changed when:

- new evidence materially changes the problem,
- scale or reliability requirements change,
- a security or regulatory requirement requires a different approach,
- a major product requirement invalidates the existing decision,
- or implementation experience demonstrates that the decision no longer serves Agrova.

A change should be recorded as a new decision or explicit revision rather than silently rewriting history.

---

## 4. Relationship to Other Documents

This decision record works together with:

- Product Vision
- Product Master
- Feature Registry
- Roadmap
- Requirements
- Architecture
- API Contracts
- Database Design
- Security
- Test Strategy
- Risks
- Glossary
- Releases
- Idea Backlog

The Feature Registry remains the source of truth for feature identity and lifecycle.

The Architecture document remains the source of truth for the structural architecture.

This document records **why major engineering choices were made**.

---

## 5. Decision Summary

The current Agrova engineering baseline is:

- Build a modular monolith first.
- Use Spring Boot and Java for the backend.
- Use Angular and TypeScript for the frontend.
- Use PostgreSQL as the primary database.
- Use Flyway for database migrations.
- Treat the farm as the primary context and authorization boundary.
- Keep domains explicitly separated.
- Isolate external providers behind adapters.
- Degrade gracefully when optional providers fail.
- Observe and collect evidence before making important recommendations.
- Treat AI output as untrusted input.
- Never allow an LLM to directly mutate domain data.
- Prefer purposeful read models.
- Preserve meaningful history.
- Preserve provenance.
- Keep humans in the loop for high-impact or uncertain decisions.
- Build the MVP before introducing unnecessary complexity.

These decisions support the central Agrova principle:

> **Given everything happening on this particular farm, help the farmer decide what to do next.**

**Document Status: Accepted Baseline**
