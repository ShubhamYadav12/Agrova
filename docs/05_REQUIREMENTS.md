# Agrova Requirements

## 1. Purpose

This document defines the functional and non-functional
requirements for Agrova.

Requirements translate registered Agrova features and
roadmap commitments into precise, testable product
behavior.

This document is the primary product-to-engineering
contract between the Feature Registry, Master Roadmap,
Architecture, API Contracts, Database Design, Security,
Testing, and implementation.

---

## 2. Requirement Principles

1. Every implementation must trace back to a registered Feature ID.
2. Every MVP requirement must have testable acceptance criteria.
3. Requirements describe what Agrova must do, not how it must be implemented.
4. Security requirements apply to every feature.
5. Authorization must be evaluated against the relevant farm and resource.
6. Requirements must define expected behavior for important failure conditions.
7. AI-assisted behavior must remain bounded by validation and domain rules.
8. MVP requirements must be distinguishable from long-term requirements.
9. New capabilities must first enter the Feature Registry or Idea Backlog.
10. Requirement changes must preserve traceability to the roadmap and Feature Registry.

---

## 3. Requirement Hierarchy

Vision
↓
Product Area
↓
Epic
↓
Feature ID
↓
Requirement
↓
Acceptance Criteria
↓
Architecture
↓
API / Data / UI
↓
Test
↓
Release
---

## 4. Actors and Roles

Agrova requirements shall identify the actor responsible for
initiating or participating in each product interaction.

An actor may be a human user, an Agrova system component,
or an authorized external system.

### 4.1 Farmer

The Farmer is the primary Agrova user and the primary owner
or operator of farm-related information.

The Farmer may:

- create and manage their Agrova identity
- create and manage a farm
- record farm information
- register and manage animals
- record animal observations and activities
- manage fields and crops
- record farm activities and resources
- view tasks, alerts, weather and farm information
- record expenses and income
- interact with Conversational Agrova
- provide observations, photos, voice input and other farm data
- control access to their farm where applicable

The Farmer is the primary actor for the farmer-first Agrova
experience.

---

### 4.2 Farm Owner

The Farm Owner is the user with ownership authority over
a specific farm.

The Farm Owner may:

- manage farm ownership information
- manage authorized farm members
- grant or revoke permitted farm access
- manage farm-level configuration
- access farm records according to ownership permissions

Ownership is scoped to a specific farm and shall not
automatically grant access to unrelated farms.

---

### 4.3 Farm Member

A Farm Member is an authorized person who has been granted
access to a specific farm.

Farm Members may perform actions permitted by their assigned
farm-level permissions.

A Farm Member shall not receive access beyond the permissions
granted for that farm.

---

### 4.4 Veterinarian

A Veterinarian is an authorized animal-health professional
who may participate in animal health workflows.

Depending on granted permissions, a Veterinarian may:

- review authorized animal records
- record or provide professional observations
- record consultations
- provide prescriptions or treatment information
- record follow-up information
- contribute professional input to animal health workflows

Veterinarian access shall be limited to the records and
farms for which access has been explicitly authorized.

---

### 4.5 Agronomist / Agricultural Expert

An Agronomist or Agricultural Expert is an authorized
professional who may participate in crop, soil, water,
pest, disease or other agricultural workflows.

Depending on granted permissions, an expert may:

- review authorized farm or field information
- review crop observations
- provide agricultural recommendations
- review photos or submitted observations
- provide follow-up guidance

Expert access shall be explicitly authorized and scoped.

---

### 4.6 Laboratory

A Laboratory represents an authorized diagnostic or testing
organization participating in supported Agrova workflows.

A Laboratory may, where supported:

- receive authorized test requests
- associate results with the appropriate request
- provide laboratory results
- provide digital reports
- contribute verified test information to farm records

Laboratory access shall be restricted to the relevant
authorized workflow and records.

---

### 4.7 Agrova System

The Agrova System represents trusted application behavior
that performs operations according to defined product rules.

The Agrova System may:

- validate submitted information
- enforce business rules
- evaluate permissions
- generate tasks and reminders
- aggregate farm information
- process approved workflows
- calculate derived farm information
- integrate approved external information
- record audit events
- provide contextual information to authorized users

The Agrova System shall not bypass authorization or security
requirements when performing automated operations.

---

### 4.8 Agrova Intelligence

Agrova Intelligence represents AI-assisted capabilities used
to interpret information and assist the farmer.

It may process authorized:

- text
- voice
- images
- farm context
- historical records
- weather information
- other approved data sources

Agrova Intelligence shall operate within defined validation,
safety, confidence and domain rules.

AI-generated output shall not automatically be treated as
verified professional diagnosis, laboratory result, or fact
unless supported by an authoritative source or authorized
human professional workflow.

AI components shall not directly mutate protected farm records
without passing through authorized application workflows.

---

### 4.9 External Service Provider

An External Service Provider represents an external system
integrated with Agrova, such as an approved:

- weather provider
- map provider
- speech provider
- AI provider
- government data source
- other trusted data or infrastructure provider

External providers shall access only the information and
operations required for their approved integration.

External provider failure shall not unnecessarily prevent
unrelated core Agrova functionality from operating.

---

### 4.10 Administrator / Authorized Operations Role

An Administrator or authorized Agrova operations role may
perform platform-level operational activities where required.

Such access shall be:

- explicitly authorized
- role-based
- auditable
- limited to operational necessity
- separated from ordinary farmer access

Platform-level administrative access shall not be treated as
ordinary farm ownership.

---

## 5. Actor and Access Principles

1. A user account is distinct from a farm.
2. A person operating a device is not automatically the owner of the account.
3. A device shall not be treated as proof of farm ownership.
4. Farm access shall be explicitly scoped to the relevant farm.
5. Authentication establishes identity; authorization determines permitted actions.
6. Permissions shall be evaluated before protected operations are performed.
7. Users shall not gain access to another farm merely because records share similar information.
8. Professional users shall receive access only to records required for their authorized workflow.
9. Automated Agrova operations shall follow the same authorization and data-protection boundaries as other protected operations.
10. Administrative access shall be separately controlled and auditable.
11. Shared-device usage shall not weaken farm data isolation.
12. Sensitive operations shall generate appropriate audit events.
---

## 6. Requirement ID Convention

Every formal requirement shall have a unique and permanent
Requirement ID.

Requirement IDs provide traceability between a registered
Agrova Feature ID, its requirements, implementation,
testing, and release.

### 6.1 Requirement ID Format

The standard format is:

REQ-{AREA}-{FEATURE_NUMBER}-{REQUIREMENT_NUMBER}

Example:

REQ-PASHU-001-01

Where:

- REQ identifies the item as a requirement.
- AREA identifies the Agrova product area.
- FEATURE_NUMBER identifies the source Feature ID.
- REQUIREMENT_NUMBER identifies the individual requirement
  belonging to that feature.

### 6.2 Examples

Authentication:

AGROVA-AUTH-003
        ↓
REQ-AUTH-003-01
REQ-AUTH-003-02
REQ-AUTH-003-03

Farm:

AGROVA-FARM-002
        ↓
REQ-FARM-002-01
REQ-FARM-002-02
REQ-FARM-002-03

Pashu:

AGROVA-PASHU-001
        ↓
REQ-PASHU-001-01
REQ-PASHU-001-02
REQ-PASHU-001-03

Khet:

AGROVA-KHET-001
        ↓
REQ-KHET-001-01
REQ-KHET-001-02
REQ-KHET-001-03

Intelligence:

AGROVA-INT-001
        ↓
REQ-INT-001-01
REQ-INT-001-02
REQ-INT-001-03

### 6.3 Requirement ID Rules

1. Every formal requirement must have a unique Requirement ID.
2. A Requirement ID must trace back to an existing Feature ID.
3. Requirement IDs must never be reused for a different requirement.
4. Deleted requirements shall retain their historical identity where traceability is required.
5. New requirements shall receive the next appropriate requirement number within their feature.
6. Requirement numbering shall remain stable after implementation.
7. Renaming a requirement shall not require changing its Requirement ID.
8. A requirement shall not silently move to a different Feature ID.
9. If a requirement belongs to a genuinely different feature, the change shall be handled through the requirements change process.
10. Requirements may be split into multiple requirements when necessary, while preserving traceability to the original feature.
11. Multiple requirements may belong to the same Feature ID.
12. A Feature ID may exist without detailed requirements when the feature is planned for a future phase.

### 6.4 Requirement Categories

Where useful, requirements may be classified by category:

- FUNC — Functional behavior
- BUS — Business rule
- VAL — Validation
- SEC — Security
- DATA — Data behavior
- ERR — Error or failure behavior
- PERF — Performance
- REL — Reliability
- OBS — Observability
- UX — User experience
- LOC — Localization
- AI — AI safety or intelligence behavior
- PRIV — Privacy and consent
- OFF — Offline or degraded-mode behavior

The category is metadata and does not replace the permanent
Requirement ID.

### 6.5 Requirement Record Structure

A detailed requirement should contain, where applicable:

| Field | Description |
|---|---|
| Requirement ID | Permanent unique requirement identifier |
| Feature ID | Source registered Agrova Feature |
| Product Area | Agrova product area |
| Category | Requirement category |
| Priority | Requirement priority |
| Scope | MVP or Future |
| Actor | Actor performing or participating in the action |
| Requirement | Precise required behavior |
| Preconditions | Conditions that must exist before execution |
| Main Flow | Expected successful behavior |
| Alternative Flow | Valid alternative behavior |
| Error Flow | Expected failure behavior |
| Business Rules | Domain rules that apply |
| Validation Rules | Input and data validation |
| Security Requirements | Authorization, privacy and security constraints |
| Data Requirements | Information required to support the behavior |
| Dependencies | Required features, services or capabilities |
| Acceptance Criteria | Testable conditions for completion |
| Roadmap Phase | Source implementation phase |
| Status | Requirement lifecycle status |

### 6.6 Requirement Language

Requirements should use precise and testable language.

Preferred terms:

- SHALL — mandatory behavior
- SHOULD — strongly recommended behavior
- MAY — optional or conditional behavior
- MUST NOT — prohibited behavior

Example:

The system SHALL validate required animal information
before creating an animal record.

The system MUST NOT allow an unauthorized user to modify
another farm's protected animal records.

The system SHOULD provide a clear explanation when a
requested action cannot be completed.

The system MAY provide additional contextual assistance
when sufficient farm information is available.

### 6.7 Requirement Quality Rules

A good requirement should be:

- Clear
- Specific
- Testable
- Traceable
- Consistent
- Feasible
- Unambiguous
- Security-aware
- Relevant to the associated feature

A requirement should avoid:

- vague statements
- implementation-specific assumptions
- unnecessary technical design
- contradictory behavior
- untestable claims
- hidden scope
- duplicate requirements

### 6.8 Traceability Rule

Every implementation item must ultimately be traceable through:

Feature ID
↓
Requirement ID
↓
Acceptance Criteria
↓
Implementation
↓
Test
↓
Release

No production implementation should exist without a
traceable product requirement.
---

## 7. Functional Requirements

### 7.1 Authentication and Identity

Authentication and identity requirements establish the trusted
identity layer used by all protected Agrova functionality.

Authentication shall establish who is accessing Agrova.
Authorization shall independently determine what that user
may access or modify.

---

### 7.1.1 AGROVA-AUTH-001 — Agrova User Identity

#### REQ-AUTH-001-01

The system SHALL maintain a unique Agrova User Identity for
each registered user.

#### REQ-AUTH-001-02

Each Agrova User Identity SHALL have a stable unique identifier
that remains independent of the authentication provider used
to authenticate the user.

#### REQ-AUTH-001-03

The system SHALL maintain the relationship between an Agrova
User Identity and its authorized authentication identities.

#### REQ-AUTH-001-04

Authentication provider identifiers SHALL NOT be treated as
the primary Agrova User Identity.

#### REQ-AUTH-001-05

The system SHALL prevent unauthorized users from accessing
another user's protected account information.

#### Acceptance Criteria

- GIVEN a registered user
- WHEN the user successfully authenticates
- THEN Agrova SHALL resolve the authentication to the correct
  Agrova User Identity.

- GIVEN two different users
- WHEN both users access Agrova
- THEN each user SHALL remain associated with a distinct
  Agrova User Identity.

---

### 7.1.2 AGROVA-AUTH-002 — User Registration

#### REQ-AUTH-002-01

The system SHALL allow a supported new user to create an
Agrova account.

#### REQ-AUTH-002-02

The system SHALL validate all required registration information
before creating the account.

#### REQ-AUTH-002-03

The system SHALL prevent creation of duplicate authentication
identities according to the applicable identity rules.

#### REQ-AUTH-002-04

The system SHALL create the Agrova User Identity only after
successful validation of the registration request.

#### REQ-AUTH-002-05

The system SHALL provide a controlled error response when
registration cannot be completed.

#### Acceptance Criteria

- GIVEN valid registration information
- WHEN the user submits registration
- THEN Agrova SHALL create the user's Agrova identity.

- GIVEN invalid required information
- WHEN registration is submitted
- THEN Agrova SHALL reject the request
  AND SHALL NOT create an invalid account.

---

### 7.1.3 AGROVA-AUTH-003 — User Login

#### REQ-AUTH-003-01

The system SHALL authenticate users through supported
authentication mechanisms.

#### REQ-AUTH-003-02

The system SHALL reject invalid authentication attempts.

#### REQ-AUTH-003-03

A successful authentication SHALL resolve to the corresponding
Agrova User Identity.

#### REQ-AUTH-003-04

The system SHALL NOT expose sensitive authentication information
in authentication failure responses.

#### REQ-AUTH-003-05

The system SHALL apply appropriate protection against abusive
or excessive authentication attempts.

#### Acceptance Criteria

- GIVEN valid authentication credentials
- WHEN the user submits a login request
- THEN Agrova SHALL authenticate the user
  AND establish an authenticated session.

- GIVEN invalid authentication information
- WHEN the user attempts to log in
- THEN Agrova SHALL reject the authentication attempt
  AND SHALL NOT grant protected access.

---

### 7.1.4 AGROVA-AUTH-004 — Session Management

#### REQ-AUTH-004-01

The system SHALL establish a secure authenticated session after
successful authentication.

#### REQ-AUTH-004-02

The system SHALL enforce session expiration according to the
defined security policy.

#### REQ-AUTH-004-03

The system SHALL invalidate a session when the user explicitly
logs out where applicable.

#### REQ-AUTH-004-04

Expired or revoked sessions MUST NOT be accepted for protected
operations.

#### REQ-AUTH-004-05

The system SHALL provide a mechanism for revoking active
sessions where required by the security policy.

---

### 7.1.5 AGROVA-AUTH-005 — Authorization and RBAC

#### REQ-AUTH-005-01

The system SHALL evaluate authorization before performing
protected operations.

#### REQ-AUTH-005-02

Authorization SHALL consider the authenticated user's role
and permissions.

#### REQ-AUTH-005-03

Authorization SHALL consider the relevant farm and resource
scope where applicable.

#### REQ-AUTH-005-04

A user MUST NOT access or modify protected farm information
without sufficient authorization.

#### REQ-AUTH-005-05

The system SHALL reject unauthorized operations without
performing the protected state-changing operation.

---

### 7.1.6 AGROVA-AUTH-006 — Farm Ownership

#### REQ-AUTH-006-01

The system SHALL associate each farm with an ownership model.

#### REQ-AUTH-006-02

The system SHALL identify the authorized owner or owners
according to the supported ownership model.

#### REQ-AUTH-006-03

Farm ownership SHALL be evaluated independently for each farm.

#### REQ-AUTH-006-04

Ownership of one farm MUST NOT grant access to unrelated farms.

#### REQ-AUTH-006-05

Ownership-sensitive operations SHALL require appropriate
authorization.

---

### 7.1.7 AGROVA-AUTH-007 — Google Sign-In

#### REQ-AUTH-007-01

The system SHALL support Google authentication as an approved
authentication provider when the feature is enabled.

#### REQ-AUTH-007-02

Google authentication SHALL resolve to an existing Agrova User
Identity or create a new identity according to the defined
account lifecycle rules.

#### REQ-AUTH-007-03

The backend SHALL validate the authentication assertion
received through the approved Google authentication flow before
granting authenticated access.

#### REQ-AUTH-007-04

Google authentication credentials, tokens and secrets MUST NOT
be exposed through client-side source code, logs or error
responses.

#### REQ-AUTH-007-05

Google authentication SHALL use explicitly configured and
approved redirect or authentication endpoints.

#### REQ-AUTH-007-06

The system SHALL support disabling Google authentication in
environments where the provider is not enabled.

#### REQ-AUTH-007-07

Google authentication SHALL NOT automatically merge two
existing Agrova accounts solely because externally supplied
identity attributes appear similar.

#### Acceptance Criteria

- GIVEN Google authentication is enabled
- WHEN a user successfully completes the approved Google
  authentication flow
- THEN Agrova SHALL validate the authentication result
  AND resolve the user to an Agrova User Identity.

- GIVEN Google authentication is disabled
- WHEN a user attempts to use Google authentication
- THEN Agrova SHALL reject the provider operation safely.

---

### 7.1.8 AGROVA-AUTH-008 — Email and Password Authentication

#### REQ-AUTH-008-01

The system SHALL support email and password authentication
when the capability is enabled.

#### REQ-AUTH-008-02

Passwords MUST NOT be stored as plaintext.

#### REQ-AUTH-008-03

The system SHALL validate authentication credentials before
granting protected access.

#### REQ-AUTH-008-04

Authentication failures MUST NOT reveal whether sensitive
credential information is correct beyond what is necessary
for the user experience.

#### REQ-AUTH-008-05

The system SHALL apply the defined password security policy.

---

### 7.1.9 Authentication Security Rules

The following rules apply to all authentication requirements:

1. Authentication MUST NOT be treated as authorization.
2. Successful authentication MUST NOT automatically grant access
   to every Agrova resource.
3. Authentication secrets MUST NOT be committed to source control.
4. Sensitive credentials MUST NOT be written to application logs.
5. Protected authentication operations SHALL be auditable where
   required.
6. Authentication failures SHALL return controlled responses.
7. Provider-specific identity data SHALL remain separate from the
   canonical Agrova User Identity.
8. Account linking SHALL require an explicit and secure workflow.
9. Authentication-provider failure SHALL NOT corrupt an existing
   Agrova User Identity.
10. Security requirements take precedence over authentication
    convenience.
    ---

### 7.2 Farmer and Farm

Farmer and Farm requirements establish the primary organizational
boundary for Agrova data.

A Farm represents the operational context in which animals,
fields, crops, resources, activities, tasks and other farm
information are managed.

---

### 7.2.1 AGROVA-FARM-001 — Farmer Profile

#### REQ-FARM-001-01

The system SHALL allow an authenticated user to create and
maintain their farmer profile.

#### REQ-FARM-001-02

The system SHALL associate the farmer profile with exactly one
canonical Agrova User Identity.

#### REQ-FARM-001-03

The system SHALL validate required farmer profile information
before persistence.

#### REQ-FARM-001-04

The system SHALL allow an authorized user to update permitted
farmer profile information.

#### REQ-FARM-001-05

The system SHALL prevent an unauthorized user from modifying
another user's protected farmer profile.

#### REQ-FARM-001-06

The system SHALL preserve the association between the farmer
profile and its canonical Agrova User Identity.

#### Acceptance Criteria

- GIVEN an authenticated Agrova user
- WHEN valid farmer profile information is submitted
- THEN Agrova SHALL create or update the corresponding farmer
  profile.

- GIVEN an unauthorized user
- WHEN the user attempts to modify another farmer's protected
  profile
- THEN Agrova SHALL reject the operation.

---

### 7.2.2 AGROVA-FARM-002 — Farm Registration

#### REQ-FARM-002-01

The system SHALL allow an authorized user to create a farm.

#### REQ-FARM-002-02

Each farm SHALL have a unique Agrova farm identifier.

#### REQ-FARM-002-03

A newly created farm SHALL be associated with an authorized
owner according to the farm ownership model.

#### REQ-FARM-002-04

The system SHALL validate required farm information before
creating the farm.

#### REQ-FARM-002-05

The system SHALL reject creation requests that do not satisfy
required validation or authorization rules.

#### REQ-FARM-002-06

The system SHALL prevent a user from creating or modifying a
farm on behalf of another user without appropriate authorization.

#### Acceptance Criteria

- GIVEN an authenticated user with permission to create a farm
- WHEN valid farm information is submitted
- THEN Agrova SHALL create the farm
  AND associate it with the authorized owner.

- GIVEN insufficient authorization
- WHEN a farm creation request is submitted
- THEN Agrova SHALL reject the request
  AND SHALL NOT create the farm.

---

### 7.2.3 AGROVA-FARM-003 — Farm Location

#### REQ-FARM-003-01

The system SHALL allow authorized farm users to record the
location information supported by Agrova.

#### REQ-FARM-003-02

The system SHALL associate farm location information with the
correct farm.

#### REQ-FARM-003-03

The system SHALL validate supported location information before
persistence.

#### REQ-FARM-003-04

The system SHALL protect farm location information according
to its defined data classification and authorization policy.

#### REQ-FARM-003-05

The system SHALL allow authorized users to update permitted
farm location information.

#### Acceptance Criteria

- GIVEN an authorized farm user
- WHEN valid location information is submitted
- THEN Agrova SHALL associate the location with the correct farm.

- GIVEN an unauthorized user
- WHEN the user attempts to modify protected farm location data
- THEN Agrova SHALL reject the operation.

---

### 7.2.4 AGROVA-FARM-004 — Farm Members

#### REQ-FARM-004-01

The system SHALL allow an authorized farm owner or administrator
to add a person as a member of the relevant farm.

#### REQ-FARM-004-02

The system SHALL associate each farm membership with a specific
farm and user identity.

#### REQ-FARM-004-03

The system SHALL prevent creation of invalid or unauthorized
farm memberships.

#### REQ-FARM-004-04

The system SHALL allow authorized users to view the membership
information for farms they are permitted to manage.

#### REQ-FARM-004-05

The system SHALL allow authorized users to remove or deactivate
a farm membership according to the defined membership rules.

#### REQ-FARM-004-06

Removing a farm membership MUST NOT automatically delete the
historical farm records created by that member unless explicitly
required by a separate data-retention policy.

#### Acceptance Criteria

- GIVEN an authorized farm owner
- WHEN a valid user is added as a farm member
- THEN Agrova SHALL create the membership for the specified farm.

- GIVEN a removed or deactivated farm member
- WHEN that user attempts a protected farm operation
- THEN Agrova SHALL enforce the user's updated permissions.

---

### 7.2.5 AGROVA-FARM-005 — Farm Access Permissions

#### REQ-FARM-005-01

The system SHALL support permissions that determine what an
authorized farm member may do within a farm.

#### REQ-FARM-005-02

Permissions SHALL be evaluated in the context of the relevant
farm.

#### REQ-FARM-005-03

A farm member SHALL receive only the permissions explicitly
granted or inherited according to the defined authorization
model.

#### REQ-FARM-005-04

The system MUST NOT grant unrestricted farm access merely
because a user is authenticated.

#### REQ-FARM-005-05

The system SHALL enforce permissions for protected read and
write operations.

#### REQ-FARM-005-06

Changes to sensitive farm permissions SHALL be auditable.

#### Acceptance Criteria

- GIVEN a farm member with read-only permission
- WHEN the member attempts a permitted read operation
- THEN Agrova SHALL allow the operation.

- GIVEN the same member
- WHEN the member attempts an operation requiring write
  permission
- THEN Agrova SHALL reject the operation.

---

### 7.2.6 AGROVA-FARM-006 — Farm History

#### REQ-FARM-006-01

The system SHALL maintain the supported historical information
associated with a farm.

#### REQ-FARM-006-02

Historical farm information SHALL remain associated with the
correct farm.

#### REQ-FARM-006-03

The system SHALL allow authorized users to view applicable
farm history.

#### REQ-FARM-006-04

Historical information SHALL preserve sufficient context to
distinguish past farm state from current farm state.

#### REQ-FARM-006-05

Historical information MUST NOT be silently overwritten when
a new state is recorded where historical preservation is
required.

#### Acceptance Criteria

- GIVEN a farm with historical records
- WHEN an authorized user requests farm history
- THEN Agrova SHALL return the applicable historical information.

- GIVEN a historical farm event
- WHEN current farm information changes
- THEN the historical event SHALL remain distinguishable from
  the current state.

---

### 7.2.7 AGROVA-FARM-007 — Farm Dashboard

#### REQ-FARM-007-01

The system SHALL provide an authorized farm dashboard that
summarizes relevant current farm information.

#### REQ-FARM-007-02

The dashboard SHALL prioritize information relevant to the
farmer's current farm context.

#### REQ-FARM-007-03

The dashboard SHOULD present important tasks, alerts, animal
information, crop or field information, weather information
and other supported farm indicators when relevant data exists.

#### REQ-FARM-007-04

The dashboard SHALL respect the user's farm permissions and
MUST NOT expose protected information from unauthorized farms.

#### REQ-FARM-007-05

The dashboard SHALL provide controlled loading, empty and error
states.

#### REQ-FARM-007-06

Failure of a non-core external information provider SHOULD NOT
prevent unrelated core farm information from being displayed.

#### REQ-FARM-007-07

The dashboard SHOULD minimize unnecessary network round trips
through purposeful aggregated read data where practical.

#### Acceptance Criteria

- GIVEN an authorized farmer
- WHEN the farmer opens the farm dashboard
- THEN Agrova SHALL display information belonging to the
  authorized farm.

- GIVEN that optional external information is unavailable
- WHEN the dashboard is requested
- THEN Agrova SHALL continue displaying available core farm
  information and clearly indicate unavailable information.

---

### 7.2.8 AGROVA-FARM-008 — Farm Members Management

#### REQ-FARM-008-01

The system SHALL allow authorized users to view farm members
according to their permissions.

#### REQ-FARM-008-02

The system SHALL allow authorized users to manage permitted
member information.

#### REQ-FARM-008-03

The system SHALL enforce authorization for member-management
operations.

#### REQ-FARM-008-04

Member-management operations SHALL preserve the association
between the member and the correct farm.

---

### 7.2.9 AGROVA-FARM-009 — Farm Access Control

#### REQ-FARM-009-01

The system SHALL enforce farm-level access control for
protected farm resources.

#### REQ-FARM-009-02

Every protected farm resource request SHALL be evaluated against
the authenticated user's permitted farm scope.

#### REQ-FARM-009-03

The system MUST NOT rely solely on identifiers supplied by the
client to establish authorization.

#### REQ-FARM-009-04

A valid resource identifier MUST NOT be sufficient to bypass
farm-level authorization.

#### REQ-FARM-009-05

Unauthorized cross-farm access attempts SHALL be rejected.

#### Acceptance Criteria

- GIVEN User A has access to Farm A
- WHEN User A requests a protected resource belonging to Farm A
- THEN Agrova SHALL evaluate and permit the operation according
  to User A's permissions.

- GIVEN User A does not have access to Farm B
- WHEN User A attempts to access a protected resource belonging
  to Farm B
- THEN Agrova SHALL reject the request.

---

### 7.2.10 AGROVA-FARM-010 — Farm Settings

#### REQ-FARM-010-01

The system SHALL allow authorized farm users to manage supported
farm settings.

#### REQ-FARM-010-02

Farm settings SHALL be associated with the correct farm.

#### REQ-FARM-010-03

The system SHALL validate supported setting values.

#### REQ-FARM-010-04

Unauthorized users MUST NOT modify protected farm settings.

#### REQ-FARM-010-05

Sensitive setting changes SHALL be auditable where required.

---

### 7.2.11 Farmer and Farm Cross-Cutting Rules

1. Every protected farm operation SHALL resolve the target farm
   before authorization is granted.
2. Authentication alone SHALL NOT establish farm access.
3. Farm ownership and farm membership SHALL remain distinct
   concepts.
4. Removing a user's farm access SHALL NOT silently erase
   historical farm records.
5. Client-supplied farm or resource identifiers SHALL NOT be
   trusted as proof of authorization.
6. Farm data SHALL remain isolated between unrelated farms.
7. Shared-device usage SHALL NOT bypass account or farm access
   controls.
8. Farm history SHALL preserve relevant historical context.
9. Dashboard aggregation SHALL respect all applicable
   authorization boundaries.
10. Core farm functionality SHOULD remain usable when optional
    external services are unavailable.
    ---

### 7.3 Pashu — Animal Management

Pashu requirements define the animal-management capabilities
of Agrova.

Animal information SHALL remain associated with the correct farm,
animal identity and historical timeline.

---

### 7.3.1 AGROVA-PASHU-001 — Animal Registration

#### REQ-PASHU-001-01

The system SHALL allow an authorized farm user to register an
animal belonging to the relevant farm.

#### REQ-PASHU-001-02

Each registered animal SHALL have a unique Agrova animal
identifier.

#### REQ-PASHU-001-03

The system SHALL support the animal information defined by the
Feature Registry, including species, breed, sex, date of birth
or age information, identification information and current
status.

#### REQ-PASHU-001-04

The system SHALL validate required animal information before
creating the animal record.

#### REQ-PASHU-001-05

The system SHALL associate the animal with the correct farm.

#### REQ-PASHU-001-06

The system SHALL prevent unauthorized users from registering or
modifying animals belonging to another farm.

#### REQ-PASHU-001-07

The system SHALL support animal identification information such
as supported tag, RFID or QR information where configured.

#### REQ-PASHU-001-08

The system SHALL prevent duplicate animal identifiers within
the applicable identity scope.

#### Acceptance Criteria

- GIVEN an authorized farm user
- WHEN valid animal information is submitted
- THEN Agrova SHALL create the animal record
  AND associate it with the correct farm.

- GIVEN an unauthorized user
- WHEN the user attempts to register an animal for a farm they
  cannot manage
- THEN Agrova SHALL reject the operation.

---

### 7.3.2 AGROVA-PASHU-002 — Animal Profile

#### REQ-PASHU-002-01

The system SHALL provide an animal profile containing the
currently available information associated with the animal.

#### REQ-PASHU-002-02

The animal profile SHALL display the animal's identifying
information and current status.

#### REQ-PASHU-002-03

The system SHALL allow authorized users to update permitted
animal profile information.

#### REQ-PASHU-002-04

Profile updates SHALL preserve the animal's stable identity.

#### REQ-PASHU-002-05

The system SHALL prevent unauthorized profile updates.

#### REQ-PASHU-002-06

The system SHOULD support animal photographs where configured.

---

### 7.3.3 AGROVA-PASHU-003 — Animal History

#### REQ-PASHU-003-01

The system SHALL maintain a chronological history of supported
animal events.

#### REQ-PASHU-003-02

Animal history SHALL include applicable health, treatment,
vaccination, breeding, feeding, milk and other recorded events.

#### REQ-PASHU-003-03

Each historical event SHALL remain associated with the correct
animal.

#### REQ-PASHU-003-04

Historical records SHALL preserve the event date or applicable
time information.

#### REQ-PASHU-003-05

Historical animal information SHALL remain distinguishable from
the animal's current state.

#### REQ-PASHU-003-06

The system MUST NOT silently replace required historical events
with newer state information.

#### Acceptance Criteria

- GIVEN an animal with recorded historical events
- WHEN an authorized user views the animal history
- THEN Agrova SHALL present the applicable events in their
  historical context.

---

### 7.3.4 AGROVA-PASHU-004 — Animal Health Records

#### REQ-PASHU-004-01

The system SHALL allow authorized users to record animal health
observations.

#### REQ-PASHU-004-02

Health observations MAY include symptoms, visible conditions,
behavioral observations and other supported observations.

#### REQ-PASHU-004-03

The system SHALL associate each health observation with the
correct animal.

#### REQ-PASHU-004-04

The system SHALL record the source of an important health
observation where applicable.

#### REQ-PASHU-004-05

The system SHALL distinguish farmer observations from
professional diagnoses and AI-assisted observations.

#### REQ-PASHU-004-06

The system SHALL allow authorized users to view the animal's
health history.

---

### 7.3.5 AGROVA-PASHU-005 — Animal Health Events

#### REQ-PASHU-005-01

The system SHALL allow authorized users to record supported
animal health events.

#### REQ-PASHU-005-02

Health events SHALL contain sufficient information to identify
the animal, event type and event date.

#### REQ-PASHU-005-03

The system SHALL support the recording of health-event status
where applicable.

#### REQ-PASHU-005-04

The system SHALL preserve historical health events according
to the applicable retention policy.

---

### 7.3.6 AGROVA-PASHU-006 — Animal Treatment

#### REQ-PASHU-006-01

The system SHALL allow authorized users to record animal
treatment information.

#### REQ-PASHU-006-02

Treatment records SHALL identify the relevant animal.

#### REQ-PASHU-006-03

Treatment records SHALL support applicable treatment dates,
status and professional information where available.

#### REQ-PASHU-006-04

The system SHALL allow authorized users to associate a
prescription or treatment document where supported.

#### REQ-PASHU-006-05

Treatment information SHALL remain part of the animal's
historical health record.

#### REQ-PASHU-006-06

The system SHALL NOT represent an AI-generated treatment
suggestion as a confirmed professional prescription.

---

### 7.3.7 AGROVA-PASHU-007 — Medicine Records

#### REQ-PASHU-007-01

The system SHALL allow authorized users to record supported
medicine information associated with an animal treatment.

#### REQ-PASHU-007-02

Medicine records SHALL support the applicable medicine name,
date, treatment relationship and status.

#### REQ-PASHU-007-03

Dosage or administration information SHALL only be presented
or stored according to the applicable validated professional
or product information.

#### REQ-PASHU-007-04

The system SHALL preserve medicine records within the
animal's applicable treatment history.

#### REQ-PASHU-007-05

The system SHALL avoid presenting unverified AI output as
medical instruction.

---

### 7.3.8 AGROVA-PASHU-008 — Vet Visit

#### REQ-PASHU-008-01

The system SHALL allow authorized users to record a veterinary
visit associated with an animal.

#### REQ-PASHU-008-02

A veterinary visit SHALL identify the relevant animal and
visit date.

#### REQ-PASHU-008-03

The system SHALL support recording the attending veterinarian
where applicable.

#### REQ-PASHU-008-04

The system SHALL support recording applicable observations,
diagnosis, treatment and follow-up information.

#### REQ-PASHU-008-05

Veterinary visit information SHALL become part of the animal's
historical record.

---

### 7.3.9 AGROVA-PASHU-009 — Vaccination Records

#### REQ-PASHU-009-01

The system SHALL allow authorized users to record vaccinations
for an animal.

#### REQ-PASHU-009-02

A vaccination record SHALL identify the relevant animal and
vaccination event.

#### REQ-PASHU-009-03

The system SHALL support applicable vaccination date,
vaccine information and status.

#### REQ-PASHU-009-04

The system SHALL maintain vaccination history for the animal.

#### REQ-PASHU-009-05

The system SHALL prevent unauthorized modification of
vaccination records.

---

### 7.3.10 AGROVA-PASHU-010 — Vaccination Schedule

#### REQ-PASHU-010-01

The system SHALL support vaccination schedules applicable to
supported animals.

#### REQ-PASHU-010-02

The system SHALL calculate or record vaccination due status
according to configured rules.

#### REQ-PASHU-010-03

The system SHALL identify due or overdue vaccination tasks
where applicable.

#### REQ-PASHU-010-04

The system SHALL associate vaccination schedules with the
correct animal.

#### REQ-PASHU-010-05

Vaccination scheduling SHALL account for applicable animal
attributes and configured preventive-health rules.

#### REQ-PASHU-010-06

The system SHALL NOT imply that a vaccination schedule is
universally applicable when professional or jurisdictional
variation exists.

---

### 7.3.11 AGROVA-PASHU-011 — Preventive Health Checks

#### REQ-PASHU-011-01

The system SHALL support preventive health-check records for
animals.

#### REQ-PASHU-011-02

Preventive-health recommendations SHALL consider applicable
animal context such as species, age, sex, condition and
production stage.

#### REQ-PASHU-011-03

The system SHALL allow recording of completed preventive
health checks.

#### REQ-PASHU-011-04

The system SHALL maintain preventive-health history.

#### REQ-PASHU-011-05

Where professional validation is required, the system SHALL
clearly distinguish informational guidance from veterinary
diagnosis or treatment.

---

### 7.3.12 AGROVA-PASHU-012 — Animal Breeding Records

#### REQ-PASHU-012-01

The system SHALL allow authorized users to record breeding
events associated with an animal.

#### REQ-PASHU-012-02

The system SHALL support applicable heat observations and
breeding information.

#### REQ-PASHU-012-03

The system SHALL support recording artificial insemination
events where applicable.

#### REQ-PASHU-012-04

Breeding records SHALL remain associated with the correct
animal.

#### REQ-PASHU-012-05

The system SHALL maintain breeding history.

---

### 7.3.13 AGROVA-PASHU-013 — Pregnancy Tracking

#### REQ-PASHU-013-01

The system SHALL allow authorized users to record pregnancy
status where applicable.

#### REQ-PASHU-013-02

The system SHALL support applicable pregnancy timeline
information.

#### REQ-PASHU-013-03

The system SHALL support expected calving information where
available.

#### REQ-PASHU-013-04

Pregnancy information SHALL remain associated with the correct
animal and breeding history.

#### REQ-PASHU-013-05

The system SHALL allow authorized users to update pregnancy
status when new validated information becomes available.

---

### 7.3.14 AGROVA-PASHU-014 — Calving and Offspring Records

#### REQ-PASHU-014-01

The system SHALL allow authorized users to record a calving
event where applicable.

#### REQ-PASHU-014-02

The system SHALL support creation of an offspring animal record
from a recorded birth event.

#### REQ-PASHU-014-03

The system SHALL preserve the parent-child relationship between
the relevant animal records.

#### REQ-PASHU-014-04

The system SHALL preserve calving history as part of the
animal's reproductive history.

---

### 7.3.15 AGROVA-PASHU-015 — Feed Records

#### REQ-PASHU-015-01

The system SHALL allow authorized users to record feed provided
to animals.

#### REQ-PASHU-015-02

Feed records SHALL support applicable feed type, quantity,
date and associated animal or animal group.

#### REQ-PASHU-015-03

The system SHALL maintain applicable feed history.

#### REQ-PASHU-015-04

Feed records SHALL be usable by authorized farm intelligence
features where applicable.

---

### 7.3.16 AGROVA-PASHU-016 — Milk Production

#### REQ-PASHU-016-01

The system SHALL allow authorized users to record milk
production.

#### REQ-PASHU-016-02

Milk records SHALL support animal-level production where
available.

#### REQ-PASHU-016-03

The system SHALL support recording production by applicable
milking period, such as morning or evening.

#### REQ-PASHU-016-04

The system SHALL maintain historical milk-production records.

#### REQ-PASHU-016-05

The system SHOULD support comparison of current production
with relevant historical production.

#### REQ-PASHU-016-06

The system MAY identify significant production changes when
sufficient reliable historical data exists.

#### REQ-PASHU-016-07

Production changes SHALL be presented as observations or
signals and MUST NOT be represented as a confirmed diagnosis.

---

### 7.3.17 AGROVA-PASHU-017 — Animal Lifecycle Status

#### REQ-PASHU-017-01

The system SHALL maintain the current lifecycle status of a
registered animal.

#### REQ-PASHU-017-02

The system SHALL support applicable lifecycle events such as
acquisition, transfer, sale and death.

#### REQ-PASHU-017-03

Lifecycle events SHALL be preserved in the animal history.

#### REQ-PASHU-017-04

An animal marked as transferred, sold or deceased SHALL no
longer appear as an active animal where the applicable status
rules require otherwise.

#### REQ-PASHU-017-05

Historical records associated with an inactive animal SHALL
remain available to authorized users according to retention
rules.

---

### 7.3.18 AGROVA-PASHU-018 — Animal Photo and Document Records

#### REQ-PASHU-018-01

The system SHALL allow authorized users to associate supported
photos or documents with an animal.

#### REQ-PASHU-018-02

Uploaded files SHALL be associated with the correct animal and
farm.

#### REQ-PASHU-018-03

The system SHALL enforce authorization before allowing access
to protected animal files.

#### REQ-PASHU-018-04

The system SHALL validate supported file types and applicable
file-size limits.

#### REQ-PASHU-018-05

The system SHALL protect uploaded files against unauthorized
access.

---

### 7.3.19 AGROVA-PASHU-019 — Animal Timeline

#### REQ-PASHU-019-01

The system SHALL provide an authorized animal timeline showing
supported chronological events.

#### REQ-PASHU-019-02

The timeline SHALL distinguish event types where applicable.

#### REQ-PASHU-019-03

The timeline SHALL preserve chronological context.

#### REQ-PASHU-019-04

The timeline SHALL respect farm-level authorization.

---

### 7.3.20 AGROVA-PASHU-020 — Animal Search and Listing

#### REQ-PASHU-020-01

The system SHALL allow authorized farm users to view animals
belonging to farms they can access.

#### REQ-PASHU-020-02

The system SHALL support searching or filtering animals using
supported identifying attributes.

#### REQ-PASHU-020-03

Animal listing results SHALL respect farm and member
authorization.

#### REQ-PASHU-020-04

The system SHOULD support pagination or equivalent controlled
retrieval when the number of animals exceeds the practical
single-response size.

---

### 7.3.21 Pashu Cross-Cutting Rules

1. Every animal SHALL belong to a specific farm.
2. Every protected animal operation SHALL enforce farm-level
   authorization.
3. Animal identity SHALL remain stable across its lifecycle.
4. Historical animal events SHALL not be silently overwritten
   by current-state changes.
5. Farmer observations, professional records and AI-assisted
   observations SHALL remain distinguishable.
6. AI output SHALL NOT be represented as a confirmed veterinary
   diagnosis unless validated by an authorized professional
   workflow.
7. AI-generated medical or treatment information SHALL remain
   bounded by Agrova validation and safety rules.
8. Animal documents and photos SHALL be protected resources.
9. Animal history SHALL remain available according to applicable
   retention and privacy rules.
10. Pashu functionality SHALL continue to operate for core manual
    records when optional intelligence providers are unavailable.
11. Production, health and breeding signals SHALL avoid false
    precision when the available data is insufficient.
12. The system SHALL preserve the source and context of important
    animal information where applicable.

  ↓
FARM
  ↓
PASHU 🐄
  ↓
KHET 🌾  ← NOW
  ↓
RESOURCES
  ↓
ACTIVITIES
  ↓
TASKS
  ↓
WEATHER / RISK
  ↓
FARM CONTEXT
  ↓
CONVERSATIONAL AGROVA
  ↓
ECONOMICS
### 7.4.2 AGROVA-KHET-002 - Field ID

#### REQ-KHET-002-01

Each registered field SHALL receive a unique Agrova field identifier within the applicable farm.

#### REQ-KHET-002-02

The field identifier SHALL remain stable throughout the field's lifecycle unless the field itself is formally retired or replaced according to defined business rules.

#### REQ-KHET-002-03

The system SHALL NOT allow a user to create two active fields within the same farm with the same field identifier.

#### REQ-KHET-002-04

Field identifiers SHALL be associated with the correct farm and SHALL NOT be usable as proof of authorization.

#### REQ-KHET-002-05

Protected field operations SHALL verify the user's access to the associated farm before returning or modifying field information.

---

### 7.4.3 AGROVA-KHET-003 - Field Location

#### REQ-KHET-003-01

The system SHALL allow an authorized user to record the location of a field.

#### REQ-KHET-003-02

Field location information SHALL be associated with the correct farm and field.

#### REQ-KHET-003-03

The system SHALL validate supplied location information before storing it.

#### REQ-KHET-003-04

The system SHALL distinguish between user-provided location information and externally derived or automatically detected location information where applicable.

#### REQ-KHET-003-05

Field location information SHALL only be accessible to users authorized to access the associated farm.

---

### 7.4.4 AGROVA-KHET-004 - Field Boundary

#### REQ-KHET-004-01

The system SHOULD support recording a field boundary for farms that require spatial field representation.

#### REQ-KHET-004-02

A field boundary SHOULD be associated with exactly one applicable field and farm.

#### REQ-KHET-004-03

The system SHOULD validate that a supplied boundary is structurally valid before accepting it.

#### REQ-KHET-004-04

The system SHOULD preserve the source and method by which the boundary was created or supplied where applicable.

#### REQ-KHET-004-05

Field boundary information SHOULD remain protected by the same farm-level authorization rules as other field information.

---

### 7.4.5 AGROVA-KHET-005 - Field Area

#### REQ-KHET-005-01

The system SHALL allow an authorized user to record the area of a field.

#### REQ-KHET-005-02

The recorded field area SHALL include the applicable unit of measurement.

#### REQ-KHET-005-03

The system SHALL validate that the supplied field area is greater than zero and within an acceptable domain range.

#### REQ-KHET-005-04

The system SHALL preserve the originally recorded value and unit where historical traceability is required.

#### REQ-KHET-005-05

If field area is derived from a field boundary or another source, the system SHALL distinguish the derived value from a manually entered value where applicable.

---

### 7.4.6 AGROVA-KHET-006 - Local Land Units

#### REQ-KHET-006-01

The system SHALL allow field area to be recorded using locally relevant land units supported for the applicable farm context.

#### REQ-KHET-006-02

The system SHALL associate each local land-unit value with its corresponding unit definition or regional interpretation.

#### REQ-KHET-006-03

The system SHALL NOT assume that a unit such as bigha, biswa, katha, or similar regional unit has one universal conversion across all locations.

#### REQ-KHET-006-04

Where conversion information is required but regional meaning is ambiguous, the system SHALL request or obtain the required regional context instead of silently applying an uncertain conversion.

#### REQ-KHET-006-05

The original farmer-entered local value SHALL remain distinguishable from any standardized converted value.

---

### 7.4.7 AGROVA-KHET-007 - Standard Land Units

#### REQ-KHET-007-01

The system SHALL support standard area units required by Agrova's supported measurement model.

#### REQ-KHET-007-02

The system SHALL allow a field area to be represented in a standard unit when a reliable conversion or direct standard-unit value is available.

#### REQ-KHET-007-03

Standardized area values SHALL preserve sufficient precision for agricultural calculations without presenting false precision.

#### REQ-KHET-007-04

The system SHALL preserve the source value and conversion context when a standard area value is derived from a local land unit.

#### REQ-KHET-007-05

The system SHALL use standardized area values consistently for downstream calculations such as crop planning, input estimation, yield analysis, and economics where applicable.

---

### 7.4.8 AGROVA-KHET-008 - Land Ownership / Lease

#### REQ-KHET-008-01

The system SHOULD support recording whether a field is owned, leased, jointly managed, or otherwise used under a supported land-use arrangement.

#### REQ-KHET-008-02

Land ownership or lease information SHOULD be associated with the applicable farm and field.

#### REQ-KHET-008-03

The system SHOULD allow relevant lease information to be recorded without requiring unnecessary personal or legal information.

#### REQ-KHET-008-04

Ownership and lease information SHOULD be protected as farm-private information and SHALL follow applicable authorization rules.

#### REQ-KHET-008-05

Changes to important ownership or lease records SHOULD preserve historical information rather than silently overwriting the previous state.

---

### 7.4.9 AGROVA-KHET-009 - Field History

#### REQ-KHET-009-01

The system SHALL maintain a historical record of important field-level events and state changes.

#### REQ-KHET-009-02

Historical field records SHALL remain associated with the correct field and farm.

#### REQ-KHET-009-03

Updating the current field state SHALL NOT silently erase relevant historical records.

#### REQ-KHET-009-04

Field history SHALL distinguish between current state and historical events where applicable.

#### REQ-KHET-009-05

Historical field information SHALL remain accessible only to users authorized to access the associated farm.

#### REQ-KHET-009-06

Important field records SHALL preserve source and context information where applicable.

---

### 7.4.10 AGROVA-KHET-010 - Field Overview

#### REQ-KHET-010-01

The system SHALL provide an authorized user with a consolidated overview of an individual field.

#### REQ-KHET-010-02

The field overview SHALL present the field's key identity, location, area, land-unit representation, current crop state, and relevant field information when available.

#### REQ-KHET-010-03

The field overview SHALL distinguish unavailable information from confirmed field information.

#### REQ-KHET-010-04

The field overview SHALL respect all applicable farm and resource authorization boundaries.

#### REQ-KHET-010-05

The field overview SHOULD provide access to relevant field history and associated agricultural records without requiring the user to reconstruct the field context manually.

#### REQ-KHET-010-06

Failure of an optional external service SHALL NOT prevent access to core manually stored field information.
### 7.4.11 AGROVA-KHET-011 - Crop Registration

**Priority:** P1 - Planned

**Purpose:** Register and associate a crop with a specific field while preserving the crop's lifecycle and historical records.

#### Requirements

- **REQ-KHET-011-01:** The system SHALL allow an authorized farm user to register a crop against a specific field.
- **REQ-KHET-011-02:** A crop registration SHALL maintain a unique crop record within the Agrova farm context.
- **REQ-KHET-011-03:** The crop record SHALL support crop name, field association, registration date, and current status.
- **REQ-KHET-011-04:** The system SHALL preserve the relationship between the crop record and its originating field throughout the crop lifecycle.
- **REQ-KHET-011-05:** Creating a new crop for a field SHALL NOT overwrite previously recorded crop history for that field.
- **REQ-KHET-011-06:** Crop registration SHALL enforce farm-level authorization and ownership/access controls.
- **REQ-KHET-011-07:** The system SHALL distinguish the currently active crop from historical crops associated with the same field.

---

### 7.4.12 AGROVA-KHET-012 - Crop Variety

**Priority:** P1 - Planned

**Purpose:** Record the variety or cultivar associated with a registered crop.

#### Requirements

- **REQ-KHET-012-01:** The system SHALL allow an authorized farm user to record the variety of a registered crop.
- **REQ-KHET-012-02:** The variety record SHALL remain associated with the corresponding crop registration.
- **REQ-KHET-012-03:** The system SHALL support locally used variety names where standardized variety identification is unavailable.
- **REQ-KHET-012-04:** The system SHOULD support standardized variety identifiers or reference data when available.
- **REQ-KHET-012-05:** Updating variety information SHALL preserve the historical value where the previous value was used in a completed or historical crop record.
- **REQ-KHET-012-06:** Crop variety information SHALL be subject to the same farm-level authorization controls as the associated crop.

---

### 7.4.13 AGROVA-KHET-013 - Sowing Record

**Priority:** P1 - Planned

**Purpose:** Record when, how, and under what conditions a crop was established in a field.

#### Requirements

- **REQ-KHET-013-01:** The system SHALL allow an authorized farm user to record a crop sowing event.
- **REQ-KHET-013-02:** A sowing record SHALL support sowing date and associated crop and field.
- **REQ-KHET-013-03:** The system SHOULD support seed quantity, seed source, sowing method, and relevant notes.
- **REQ-KHET-013-04:** The system SHALL preserve sowing records as historical farm activities and SHALL NOT silently replace previous sowing records.
- **REQ-KHET-013-05:** The system SHALL validate that the referenced crop and field belong to the same authorized farm context.
- **REQ-KHET-013-06:** The system SHALL record the source of manually entered sowing information where required for traceability.

---

### 7.4.14 AGROVA-KHET-014 - Crop Stage

**Priority:** P1 - Planned

**Purpose:** Track the current growth stage of a crop while preserving stage history.

#### Requirements

- **REQ-KHET-014-01:** The system SHALL allow an authorized farm user to record the current crop stage.
- **REQ-KHET-014-02:** The system SHALL support recording the date or effective time associated with a crop-stage observation.
- **REQ-KHET-014-03:** The system SHALL preserve previous crop-stage records so that crop development can be viewed as a timeline.
- **REQ-KHET-014-04:** The system SHALL distinguish farmer-observed crop stages from AI-assisted or externally sourced classifications.
- **REQ-KHET-014-05:** The system SHALL NOT treat an AI-assisted crop-stage classification as a confirmed professional assessment.
- **REQ-KHET-014-06:** The system SHALL prevent unauthorized users from modifying crop-stage records.
- **REQ-KHET-014-07:** The current crop stage SHALL be derivable from the latest valid stage record without destroying the underlying history.

---

### 7.4.15 AGROVA-KHET-015 - Crop Calendar

**Priority:** P2 - Proposed

**Purpose:** Provide a structured timeline of expected crop activities and development stages.

#### Requirements

- **REQ-KHET-015-01:** The system SHOULD support a crop calendar associated with a registered crop.
- **REQ-KHET-015-02:** The crop calendar SHOULD support expected stages, activities, and approximate timing.
- **REQ-KHET-015-03:** Calendar information SHOULD be adaptable to crop variety, sowing date, location, season, and available validated knowledge.
- **REQ-KHET-015-04:** The system SHOULD distinguish expected calendar information from actual farmer-recorded events.
- **REQ-KHET-015-05:** Calendar information SHOULD NOT be presented as a guaranteed prediction of crop development or harvest.
- **REQ-KHET-015-06:** Calendar knowledge SHOULD maintain source and version metadata where it originates from external or expert knowledge.

---

### 7.4.16 AGROVA-KHET-016 - Expected Harvest

**Priority:** P1 - Planned

**Purpose:** Record and manage the expected harvest timing for an active crop.

#### Requirements

- **REQ-KHET-016-01:** The system SHALL support an expected harvest date or estimated harvest window for a registered crop.
- **REQ-KHET-016-02:** Expected harvest information SHALL remain associated with the relevant crop and field.
- **REQ-KHET-016-03:** The system SHOULD support updating expected harvest information when new farm observations or validated information become available.
- **REQ-KHET-016-04:** Updates to expected harvest information SHALL preserve the previous value when historical traceability is required.
- **REQ-KHET-016-05:** The system SHALL distinguish an expected harvest from an actual harvest event.
- **REQ-KHET-016-06:** The system SHALL avoid presenting estimated harvest information as guaranteed.

---

### 7.4.17 AGROVA-KHET-017 - Harvest Record

**Priority:** P1 - Planned

**Purpose:** Record actual crop harvesting events.

#### Requirements

- **REQ-KHET-017-01:** The system SHALL allow an authorized farm user to record a harvest event for a registered crop.
- **REQ-KHET-017-02:** A harvest record SHALL support harvest date, associated crop, and associated field.
- **REQ-KHET-017-03:** The system SHOULD support harvested quantity, harvest method, harvested area, destination, and notes.
- **REQ-KHET-017-04:** The system SHALL preserve harvest records as historical farm events.
- **REQ-KHET-017-05:** The system SHALL distinguish actual harvest records from expected harvest information.
- **REQ-KHET-017-06:** The system SHALL validate that the referenced crop and field belong to the same authorized farm context.
- **REQ-KHET-017-07:** Harvest records SHALL remain available for downstream yield and farm-economic calculations.

---

### 7.4.18 AGROVA-KHET-018 - Yield Record

**Priority:** P1 - Planned

**Purpose:** Record crop yield and support historical production analysis.

#### Requirements

- **REQ-KHET-018-01:** The system SHALL allow an authorized farm user to record crop yield.
- **REQ-KHET-018-02:** A yield record SHALL remain associated with the relevant crop, field, and harvest context.
- **REQ-KHET-018-03:** The system SHALL support quantity and measurement unit for recorded yield.
- **REQ-KHET-018-04:** The system SHOULD support yield per relevant land unit when sufficient field-area information is available.
- **REQ-KHET-018-05:** The system SHALL preserve the original recorded quantity and unit for traceability.
- **REQ-KHET-018-06:** The system SHALL distinguish farmer-reported yield from externally measured or professionally verified yield where such provenance exists.
- **REQ-KHET-018-07:** Yield records SHALL be available to downstream farm productivity and economics features.
- **REQ-KHET-018-08:** The system SHALL prevent unauthorized users from modifying yield records.

---

### 7.4.19 AGROVA-KHET-019 - Crop History

**Priority:** P1 - Planned

**Purpose:** Maintain the complete historical lifecycle of crops associated with a field.

#### Requirements

- **REQ-KHET-019-01:** The system SHALL maintain historical crop records for each field.
- **REQ-KHET-019-02:** Crop history SHALL preserve crop registration, variety, sowing, stage, harvest, and yield information where available.
- **REQ-KHET-019-03:** The system SHALL allow authorized users to view the crop history of a field.
- **REQ-KHET-019-04:** Historical crop records SHALL remain distinguishable from the currently active crop.
- **REQ-KHET-019-05:** The system SHALL preserve historical records when a new crop is registered for the same field.
- **REQ-KHET-019-06:** Crop history SHALL support chronological viewing of relevant crop events.
- **REQ-KHET-019-07:** Historical records SHALL retain appropriate source/provenance information.
- **REQ-KHET-019-08:** Crop history SHALL be protected by farm-level authorization and data-isolation controls.

---

### 7.4.20 AGROVA-KHET-020 - Crop Rotation

**Priority:** P2 - Proposed

**Purpose:** Represent the sequence of crops grown on a field and support future crop-planning intelligence.

#### Requirements

- **REQ-KHET-020-01:** The system SHOULD support representation of crop sequences across multiple seasons or crop cycles for a field.
- **REQ-KHET-020-02:** Crop rotation information SHOULD be derived from preserved crop history rather than requiring duplicate manual entry wherever possible.
- **REQ-KHET-020-03:** The system SHOULD support viewing the chronological crop sequence for a field.
- **REQ-KHET-020-04:** Crop rotation information SHOULD remain distinguishable from AI-generated or expert recommendations for future crop selection.
- **REQ-KHET-020-05:** The system SHOULD support future crop-planning intelligence using validated crop-history and rotation data.
- **REQ-KHET-020-06:** Crop rotation recommendations SHOULD NOT be presented as mandatory instructions without appropriate context and validation.
### 7.4.21 AGROVA-KHET-021 - Soil Profile

**Priority:** P1 - Planned

**Purpose:** Maintain the basic soil profile associated with a field.

#### Requirements

- **REQ-KHET-021-01:** The system SHALL allow an authorized farm user to maintain a soil profile for a field.
- **REQ-KHET-021-02:** The soil profile SHALL remain associated with the corresponding field and farm.
- **REQ-KHET-021-03:** The soil profile SHOULD support soil type, texture, drainage characteristics, and relevant farmer observations where available.
- **REQ-KHET-021-04:** The system SHALL distinguish farmer-reported soil information from laboratory-tested information.
- **REQ-KHET-021-05:** Updating a soil profile SHALL NOT silently destroy historically recorded soil-test or soil-health information.
- **REQ-KHET-021-06:** Soil profile access and modification SHALL enforce farm-level authorization and data-isolation controls.
### 7.4.22 AGROVA-KHET-022 - Soil Test Record

**Priority:** P2 - Proposed

**Purpose:** Record soil testing events associated with a field.

#### Requirements

- **REQ-KHET-022-01:** The system SHOULD allow an authorized farm user to record a soil-testing event for a field.
- **REQ-KHET-022-02:** A soil test record SHOULD support test date, field association, sample information, testing organization, and relevant notes.
- **REQ-KHET-022-03:** The system SHOULD preserve each soil test as a distinct historical record.
- **REQ-KHET-022-04:** The system SHOULD distinguish farmer-entered test information from laboratory-provided results.
- **REQ-KHET-022-05:** Soil test records SHOULD retain appropriate source and provenance information.
- **REQ-KHET-022-06:** Soil test records SHOULD be protected by farm-level authorization and data-isolation controls.
### 7.4.23 AGROVA-KHET-023 - Soil Test Report

**Priority:** P2 - Proposed

**Purpose:** Store and reference soil laboratory reports associated with soil tests.

#### Requirements

- **REQ-KHET-023-01:** The system SHOULD allow an authorized farm user to associate a soil test report with a corresponding soil test record.
- **REQ-KHET-023-02:** The system SHOULD support appropriate report metadata such as report date, laboratory, report identifier, and source.
- **REQ-KHET-023-03:** The system SHOULD preserve the original report without silently altering laboratory-provided results.
- **REQ-KHET-023-04:** The system SHOULD support secure storage and retrieval of authorized soil test report files.
- **REQ-KHET-023-05:** The system SHOULD validate uploaded report files for supported format, size, and security constraints.
- **REQ-KHET-023-06:** Soil test reports SHALL remain accessible only to appropriately authorized users.
- **REQ-KHET-023-07:** The system SHOULD preserve report provenance and association with the corresponding field and soil test.
### 7.4.24 AGROVA-KHET-024 - Soil Nutrient Record

**Priority:** P2 - Proposed

**Purpose:** Record measured or otherwise sourced soil nutrient information.

#### Requirements

- **REQ-KHET-024-01:** The system SHOULD support recording individual soil nutrient observations associated with a field and soil test where applicable.
- **REQ-KHET-024-02:** Nutrient records SHOULD support nutrient name, measured value, unit, test date, and source where available.
- **REQ-KHET-024-03:** The system SHALL preserve the original measured value and unit for traceability.
- **REQ-KHET-024-04:** The system SHALL distinguish laboratory-measured nutrient values from farmer observations, AI interpretations, and recommendations.
- **REQ-KHET-024-05:** The system SHOULD preserve historical nutrient measurements for the field.
- **REQ-KHET-024-06:** Nutrient records SHOULD retain appropriate source, provenance, and test-context information.
### 7.4.25 AGROVA-KHET-025 - Soil pH Record

**Priority:** P2 - Proposed

**Purpose:** Record soil pH measurements and their historical changes.

#### Requirements

- **REQ-KHET-025-01:** The system SHOULD support recording soil pH measurements associated with a field.
- **REQ-KHET-025-02:** A pH record SHOULD support measured value, measurement date, measurement method, and source where available.
- **REQ-KHET-025-03:** The system SHALL preserve the original measured pH value for traceability.
- **REQ-KHET-025-04:** The system SHALL distinguish measured pH values from AI-generated interpretations or recommendations.
- **REQ-KHET-025-05:** The system SHOULD preserve historical pH measurements for comparison over time.
- **REQ-KHET-025-06:** pH records SHOULD remain associated with the relevant field and soil-test context where applicable.
### 7.4.26 AGROVA-KHET-026 - Organic Matter Record

**Priority:** P2 - Proposed

**Purpose:** Record organic matter information associated with field soil.

#### Requirements

- **REQ-KHET-026-01:** The system SHOULD support recording soil organic matter measurements associated with a field.
- **REQ-KHET-026-02:** An organic matter record SHOULD support measured value, unit, measurement date, and source where available.
- **REQ-KHET-026-03:** The system SHALL preserve the original measured value and unit for traceability.
- **REQ-KHET-026-04:** The system SHALL distinguish measured organic matter information from farmer observations, AI interpretations, and recommendations.
- **REQ-KHET-026-05:** The system SHOULD preserve historical organic matter records for the field.
- **REQ-KHET-026-06:** Organic matter records SHOULD retain appropriate provenance and test-context information.
### 7.4.27 AGROVA-KHET-027 - Soil Health History

**Priority:** P3 - Proposed

**Purpose:** Maintain the historical evolution of soil-related observations, measurements, and assessments for a field.

#### Requirements

- **REQ-KHET-027-01:** The system SHOULD maintain historical soil-health information associated with each field.
- **REQ-KHET-027-02:** Soil health history SHOULD include relevant soil profile changes, soil tests, nutrient measurements, pH records, organic matter records, and other supported soil observations.
- **REQ-KHET-027-03:** The system SHOULD provide chronological access to available soil-health records.
- **REQ-KHET-027-04:** Historical soil records SHALL preserve their original source and provenance where available.
- **REQ-KHET-027-05:** The system SHALL distinguish measured soil information from expert assessments, AI interpretations, and Agrova recommendations.
- **REQ-KHET-027-06:** New soil records SHALL NOT silently overwrite historical soil-health records.
- **REQ-KHET-027-07:** Soil health history SHALL be protected by farm-level authorization and data-isolation controls.
### 7.4.28 AGROVA-KHET-028 - Nutrient Balance Intelligence

**Priority:** P3 - Proposed

**Purpose:** Use validated soil and crop information to support nutrient-balance understanding and future farm intelligence.

#### Requirements

- **REQ-KHET-028-01:** The system SHOULD support analysis of available soil nutrient information in the context of the relevant field and crop.
- **REQ-KHET-028-02:** Nutrient-balance intelligence SHOULD use available soil-test data, crop context, historical information, and other validated inputs where appropriate.
- **REQ-KHET-028-03:** The system SHALL distinguish measured soil facts from calculated values, AI-assisted interpretations, and recommendations.
- **REQ-KHET-028-04:** The system SHOULD provide sufficient context or explanation for nutrient-balance outputs where practical.
- **REQ-KHET-028-05:** The system SHALL avoid presenting incomplete or uncertain nutrient information as precise or guaranteed.
- **REQ-KHET-028-06:** Nutrient-balance intelligence SHOULD preserve the source, input context, and relevant knowledge version used to generate an output.
- **REQ-KHET-028-07:** Recommendations derived from nutrient-balance intelligence SHOULD remain subject to applicable agronomic validation and safety controls.
- **REQ-KHET-028-08:** Failure of an intelligence or external knowledge provider SHALL NOT prevent authorized users from accessing or maintaining core soil records.

### 7.4.29 AGROVA-KHET-029 - Water Source

**Priority:** P1 - Planned

**Purpose:** Record water sources available to the farm or field.

#### Requirements

- **REQ-KHET-029-01:** The system SHALL allow an authorized farm user to record a water source associated with a farm or field.
- **REQ-KHET-029-02:** A water source record SHALL support a source name or type and its relevant farm/field association.
- **REQ-KHET-029-03:** The system SHOULD support source details such as location, availability notes, ownership/access information, and status where applicable.
- **REQ-KHET-029-04:** The system SHALL distinguish recorded water-source information from AI-generated assessments or recommendations.
- **REQ-KHET-029-05:** Water-source records SHALL be protected by farm-level authorization and data-isolation controls.

### 7.4.30 AGROVA-KHET-030 - Irrigation Source

**Priority:** P1 - Planned

**Purpose:** Record the source used to irrigate a specific field or crop.

#### Requirements

- **REQ-KHET-030-01:** The system SHALL allow an authorized farm user to associate an irrigation source with a field.
- **REQ-KHET-030-02:** An irrigation source SHALL be linkable to a recorded farm water source where applicable.
- **REQ-KHET-030-03:** The system SHOULD support irrigation-source type, availability status, and relevant operational notes.
- **REQ-KHET-030-04:** The system SHALL preserve the relationship between the irrigation source, field, and relevant crop context.
- **REQ-KHET-030-05:** Irrigation-source information SHALL be subject to farm-level authorization and data-isolation controls.
### 7.4.31 AGROVA-KHET-031 - Irrigation Event

**Priority:** P1 - Planned

**Purpose:** Record actual irrigation activities performed on a field or crop.

#### Requirements

- **REQ-KHET-031-01:** The system SHALL allow an authorized farm user to record an irrigation event for a field.
- **REQ-KHET-031-02:** An irrigation event SHALL support the event date or effective time and associated field.
- **REQ-KHET-031-03:** The irrigation event SHOULD support irrigation source, duration, estimated quantity, method, and notes where available.
- **REQ-KHET-031-04:** The system SHALL preserve irrigation events as historical farm activities.
- **REQ-KHET-031-05:** The system SHALL distinguish actual irrigation events from planned or recommended irrigation.
- **REQ-KHET-031-06:** Irrigation events SHALL remain available for downstream crop, water, activity, and economic analysis.
- **REQ-KHET-031-07:** The system SHALL validate that the referenced field belongs to the authorized farm context.
### 7.4.32 AGROVA-KHET-032 - Irrigation Schedule

**Priority:** P2 - Proposed

**Purpose:** Support planning of future irrigation activities.

#### Requirements

- **REQ-KHET-032-01:** The system SHOULD support an irrigation schedule associated with a field or crop.
- **REQ-KHET-032-02:** An irrigation schedule SHOULD support planned date/time, recurrence where applicable, and relevant field/crop context.
- **REQ-KHET-032-03:** The system SHOULD allow planned irrigation to be distinguished from completed irrigation events.
- **REQ-KHET-032-04:** The schedule SHOULD be adaptable when crop stage, weather, water availability, or farmer observations change.
- **REQ-KHET-032-05:** Scheduled irrigation SHOULD NOT be presented as mandatory when relevant conditions are uncertain.
- **REQ-KHET-032-06:** Failure of an external scheduling or intelligence provider SHALL NOT prevent manual irrigation records from being maintained.
### 7.4.33 AGROVA-KHET-033 - Water Availability

**Priority:** P2 - Proposed

**Purpose:** Represent available water resources relevant to farm operations.

#### Requirements

- **REQ-KHET-033-01:** The system SHOULD allow authorized users to record water availability information for a farm, water source, or field.
- **REQ-KHET-033-02:** Water availability records SHOULD support date/time, availability status, estimated quantity or level where measurable, and source.
- **REQ-KHET-033-03:** The system SHOULD preserve historical water-availability observations.
- **REQ-KHET-033-04:** The system SHALL distinguish farmer observations from measured, externally sourced, or AI-derived water information.
- **REQ-KHET-033-05:** Water availability information SHOULD retain appropriate provenance where available.
- **REQ-KHET-033-06:** Water availability records SHALL be protected by farm-level authorization and data-isolation controls.
### 7.4.34 AGROVA-KHET-034 - Crop Water Requirement

**Priority:** P2 - Proposed

**Purpose:** Support estimation and understanding of crop water requirements in field context.

#### Requirements

- **REQ-KHET-034-01:** The system SHOULD support estimation of crop water requirements for a registered crop and field.
- **REQ-KHET-034-02:** Water-requirement analysis SHOULD consider available crop context such as crop type, variety, crop stage, season, location, and relevant validated information where available.
- **REQ-KHET-034-03:** The system SHALL distinguish estimated water requirements from actual irrigation events and measured water use.
- **REQ-KHET-034-04:** The system SHOULD preserve the input context and source used to produce an estimated water requirement.
- **REQ-KHET-034-05:** Estimated water requirements SHALL NOT be presented as guaranteed values when inputs are incomplete or uncertain.
- **REQ-KHET-034-06:** Water-requirement intelligence SHALL remain subject to applicable agronomic validation and safety controls.
### 7.4.35 AGROVA-KHET-035 - Water Stress Detection

**Priority:** P3 - Proposed

**Purpose:** Identify possible crop water stress using available farm information.

#### Requirements

- **REQ-KHET-035-01:** The system SHOULD support detection or classification of possible crop water stress when sufficient relevant information is available.
- **REQ-KHET-035-02:** Water-stress assessment SHOULD consider relevant crop stage, irrigation history, water availability, weather, farmer observations, and other validated inputs where available.
- **REQ-KHET-035-03:** The system SHALL distinguish farmer-observed symptoms from AI-assisted water-stress classification.
- **REQ-KHET-035-04:** Water-stress detection SHALL be presented as an assessment or possibility rather than a confirmed diagnosis unless appropriately verified.
- **REQ-KHET-035-05:** The system SHOULD provide relevant context or explanation for a water-stress assessment where practical.
- **REQ-KHET-035-06:** Failure of an intelligence provider SHALL NOT prevent access to underlying water and irrigation records.
### 7.4.36 AGROVA-KHET-036 - Waterlogging Tracking

**Priority:** P2 - Proposed

**Purpose:** Record and track waterlogging conditions affecting fields.

#### Requirements

- **REQ-KHET-036-01:** The system SHOULD allow an authorized farm user to record a waterlogging observation for a field.
- **REQ-KHET-036-02:** A waterlogging record SHOULD support observation date/time, affected field or area, severity or extent where known, and notes.
- **REQ-KHET-036-03:** The system SHOULD support photo or other evidence where available and securely supported.
- **REQ-KHET-036-04:** The system SHALL preserve waterlogging observations as historical field events.
- **REQ-KHET-036-05:** The system SHALL distinguish farmer observations from AI-assisted classifications or externally sourced assessments.
- **REQ-KHET-036-06:** Waterlogging records SHALL be protected by farm-level authorization and data-isolation controls.
### 7.4.37 AGROVA-KHET-037 - Drainage Tracking

**Priority:** P2 - Proposed

**Purpose:** Track drainage conditions and drainage-related activities affecting fields.

#### Requirements

- **REQ-KHET-037-01:** The system SHOULD allow an authorized farm user to record drainage conditions or drainage-related events for a field.
- **REQ-KHET-037-02:** Drainage records SHOULD support date/time, field association, condition or event type, and relevant notes.
- **REQ-KHET-037-03:** The system SHOULD support recording drainage actions performed by the farmer where applicable.
- **REQ-KHET-037-04:** Drainage history SHOULD remain available for comparison with waterlogging and rainfall-related events.
- **REQ-KHET-037-05:** The system SHALL distinguish observed drainage conditions from AI-generated recommendations.
- **REQ-KHET-037-06:** Drainage records SHALL be protected by farm-level authorization and data-isolation controls.
### 7.4.38 AGROVA-KHET-038 - Seasonal Water Risk

**Priority:** P3 - Proposed

**Purpose:** Support identification of possible seasonal water-related risks affecting farm operations.

#### Requirements

- **REQ-KHET-038-01:** The system SHOULD support assessment of possible seasonal water risks for a farm or field.
- **REQ-KHET-038-02:** Seasonal water-risk assessment SHOULD consider relevant historical observations, water availability, crop context, weather information, and other validated inputs where available.
- **REQ-KHET-038-03:** The system SHALL distinguish historical or observed conditions from future risk assessments.
- **REQ-KHET-038-04:** The system SHALL avoid presenting seasonal water-risk assessments as guaranteed predictions.
- **REQ-KHET-038-05:** Risk outputs SHOULD provide actionable context where appropriate while preserving uncertainty.
- **REQ-KHET-038-06:** Seasonal water-risk intelligence SHOULD preserve relevant source, input context, and knowledge-version metadata.
- **REQ-KHET-038-07:** Failure of external weather or intelligence providers SHALL NOT prevent users from maintaining core water and irrigation records.
### 7.4.39 AGROVA-KHET-039 - Pest Observation

**Priority:** P1 - Planned

**Purpose:** Record farmer or authorized-user observations of possible pests affecting a crop or field.

#### Requirements

- **REQ-KHET-039-01:** The system SHALL allow an authorized farm user to record a pest observation for a field or registered crop.
- **REQ-KHET-039-02:** A pest observation SHALL support observation date/time, field or crop association, and relevant description or notes.
- **REQ-KHET-039-03:** The system SHOULD support locally used pest names or descriptions where standardized identification is unavailable.
- **REQ-KHET-039-04:** The system SHALL distinguish an observed pest from an AI-assisted classification or confirmed expert identification.
- **REQ-KHET-039-05:** The system SHALL preserve pest observations as historical crop-health events.
- **REQ-KHET-039-06:** Pest observations SHALL be protected by farm-level authorization and data-isolation controls.

---

### 7.4.40 AGROVA-KHET-040 - Crop Disease Observation

**Priority:** P1 - Planned

**Purpose:** Record observations of possible crop disease conditions.

#### Requirements

- **REQ-KHET-040-01:** The system SHALL allow an authorized farm user to record a possible crop disease observation for a field or registered crop.
- **REQ-KHET-040-02:** A disease observation SHALL support observation date/time, field or crop association, and relevant description or notes.
- **REQ-KHET-040-03:** The system SHOULD support locally used disease names or descriptions where standardized identification is unavailable.
- **REQ-KHET-040-04:** The system SHALL distinguish farmer-observed disease conditions from AI-assisted classifications and professional diagnoses.
- **REQ-KHET-040-05:** The system SHALL preserve disease observations as historical crop-health events.
- **REQ-KHET-040-06:** Disease observations SHALL be protected by farm-level authorization and data-isolation controls.

---

### 7.4.41 AGROVA-KHET-041 - Crop Symptom Record

**Priority:** P1 - Planned

**Purpose:** Record visible or reported crop symptoms that may support later assessment.

#### Requirements

- **REQ-KHET-041-01:** The system SHALL allow an authorized farm user to record crop symptoms associated with a field or registered crop.
- **REQ-KHET-041-02:** A symptom record SHALL support observation date/time, affected crop or field, symptom description, and relevant notes.
- **REQ-KHET-041-03:** The system SHOULD support locally expressed symptom descriptions and farmer terminology.
- **REQ-KHET-041-04:** The system SHALL preserve symptoms independently from any later diagnosis or AI classification.
- **REQ-KHET-041-05:** The system SHALL distinguish farmer observations from expert assessments and AI-assisted interpretations.
- **REQ-KHET-041-06:** Symptom records SHALL remain available for historical crop-health analysis.
- **REQ-KHET-041-07:** Symptom records SHALL be protected by farm-level authorization and data-isolation controls.

---

### 7.4.42 AGROVA-KHET-042 - Crop Photo Observation

**Priority:** P1 - Planned

**Purpose:** Associate crop photographs with field observations and crop-health events.

#### Requirements

- **REQ-KHET-042-01:** The system SHALL allow an authorized farm user to associate a crop photo with a field, crop, or crop-health observation.
- **REQ-KHET-042-02:** The system SHOULD preserve relevant photo metadata such as capture date/time and source where available.
- **REQ-KHET-042-03:** The system SHALL securely store and retrieve authorized crop photographs.
- **REQ-KHET-042-04:** Uploaded photographs SHALL be subject to supported-format, size, and security validation.
- **REQ-KHET-042-05:** The system SHALL distinguish the photograph itself from any AI-generated interpretation of the photograph.
- **REQ-KHET-042-06:** AI analysis SHALL NOT modify or replace the original farmer-provided photograph.
- **REQ-KHET-042-07:** Crop photographs SHALL be protected by farm-level authorization and appropriate data-isolation controls.

---

### 7.4.43 AGROVA-KHET-043 - Pest / Disease History

**Priority:** P2 - Proposed

**Purpose:** Maintain historical pest and disease information for fields and crops.

#### Requirements

- **REQ-KHET-043-01:** The system SHOULD maintain historical pest and disease records associated with fields and crops.
- **REQ-KHET-043-02:** Pest/disease history SHOULD include relevant observations, symptoms, photographs, assessments, and verified outcomes where available.
- **REQ-KHET-043-03:** Historical records SHOULD remain chronologically accessible.
- **REQ-KHET-043-04:** The system SHALL preserve the provenance of observations, AI-assisted classifications, and professional assessments where available.
- **REQ-KHET-043-05:** Historical crop-health records SHALL NOT be silently overwritten by newer observations or assessments.
- **REQ-KHET-043-06:** Pest/disease history SHALL be protected by farm-level authorization and data-isolation controls.

---

### 7.4.44 AGROVA-KHET-044 - Pest Risk Assessment

**Priority:** P2 - Proposed

**Purpose:** Assess possible pest risk using available crop and farm context.

#### Requirements

- **REQ-KHET-044-01:** The system SHOULD support assessment of possible pest risk for a field or registered crop.
- **REQ-KHET-044-02:** Pest-risk assessment SHOULD consider relevant crop stage, historical observations, weather, location, and other validated information where available.
- **REQ-KHET-044-03:** The system SHALL distinguish observed pest presence from calculated or AI-assisted risk assessment.
- **REQ-KHET-044-04:** Risk assessments SHALL NOT be presented as confirmed pest presence unless appropriately verified.
- **REQ-KHET-044-05:** The system SHOULD preserve the inputs, sources, and relevant knowledge version used to generate the assessment.
- **REQ-KHET-044-06:** The system SHOULD provide appropriate context or explanation for a risk assessment where practical.
- **REQ-KHET-044-07:** Failure of an intelligence or external knowledge provider SHALL NOT prevent access to underlying crop-health records.

---

### 7.4.45 AGROVA-KHET-045 - Expert Escalation

**Priority:** P1 - Planned

**Purpose:** Enable uncertain or potentially important crop-health cases to be escalated to an appropriately qualified expert.

#### Requirements

- **REQ-KHET-045-01:** The system SHALL allow an authorized farm user to request expert assistance for a crop-health observation where appropriate.
- **REQ-KHET-045-02:** An escalation SHALL support association with the relevant field, crop, symptoms, observations, and available photographs or supporting records.
- **REQ-KHET-045-03:** The system SHALL distinguish an AI-assisted assessment from an expert assessment.
- **REQ-KHET-045-04:** Expert responses SHOULD support assessment, recommendations, follow-up information, and relevant records where available.
- **REQ-KHET-045-05:** The system SHALL preserve expert escalation and response history for the associated crop-health case.
- **REQ-KHET-045-06:** Expert access SHALL be limited to information authorized for sharing by the farmer or applicable farm permissions.
- **REQ-KHET-045-07:** The system SHALL maintain appropriate audit information for crop-health data shared with experts.
- **REQ-KHET-045-08:** Expert escalation SHALL remain available when AI classification is unavailable, uncertain, or inappropriate.