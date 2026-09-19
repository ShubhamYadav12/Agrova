# Agrova Release Management
## 1. Purpose



This document defines how Agrova changes move from approved scope to a

verified release. Every release SHALL be intentional, traceable,

testable, secure, reliable, reversible where practical, aligned with the

roadmap and architecture, appropriate to its scope, and safe for the

farmer.



## 2. Release Philosophy



Agrova releases are controlled product changes, not merely deployments.

They must protect farmer trust, farm data integrity, historical records,

authorization, evidence provenance, reliability, and the long-term Farm

Intelligence direction.



## 3. Release Governance Principles



Every released capability traces to a Feature ID.



Every release has defined scope and acceptance criteria.



Security and authorization apply to every release.



Historical records MUST NOT be silently destroyed.



External-provider failure MUST NOT falsely report success.



AI behavior MUST remain bounded by validation and domain rules.



Deferred capabilities remain deferred unless explicitly re-planned.



Release evidence SHALL be retained.



## 4. Release Delivery Chain



Vision → Product Area → Feature → Requirement → Architecture →

API/Data/UI → Implementation → Test → Release Candidate → Verification →

Release → Observe → Feedback → Improvement.



## 5. Release Definition



A release is a controlled, identifiable version of Agrova containing an

approved set of product, engineering, documentation, configuration,

database, and operational changes.



## 6. Release Scope



Each release SHALL define included features, excluded features, changed

requirements, dependencies, migrations, configuration changes, security

impact, known limitations, and rollback considerations.



## 7. Release Types



MVP release, capability release, maintenance release, bug-fix release,

security release, hotfix, and internal validation release.



## 8. Versioning



Released artifacts MUST have an unambiguous version or build identifier.

The exact convention may evolve.



## 9. Release Lifecycle



Proposed → Planned → In Development → Testing → Release Candidate →

Approved → Released → Observed → Closed.



## 10. Release States



Release state SHALL accurately represent reality. A release MUST NOT be

marked released before required verification and deployment gates pass.



## 11. Release Planning



Planning SHALL start from approved roadmap scope and current engineering

readiness, including dependencies, risks, implementation status, and

blockers.



## 12. Roadmap Alignment



Every release SHALL remain consistent with 02\_MASTER\_ROADMAP.md.

Future vision may guide architecture but future capabilities SHALL NOT

be represented as delivered MVP functionality.



## 13. Feature Registry Traceability



Every released feature SHALL reference its Feature ID from

03\_FEATURE\_REGISTRY.md.



## 14. Requirement Traceability



Released behavior SHALL trace to 05\_REQUIREMENTS.md and its acceptance

criteria.



## 15. Release Candidate



A candidate SHALL have an identified build, frozen intended scope,

completed implementation, migrations, configuration, test evidence,

known issues, and a release decision.



## 16. Readiness Gate



Applicable scope, requirements, implementation, testing, security,

database, API, frontend, provider resilience, documentation,

observability, and recovery checks SHALL pass.



## 17. Definition of Release Done



Release Done means the approved scope is implemented, tested, verified,

documented, traceable, deployable, observable, and safe.



## 18. Security Gate



Security SHALL be reviewed against 09\_SECURITY.md, including

authentication, authorization, validation, data protection, secrets, API

security, logging, and audit controls.



## 19. Farm Isolation Gate



Farm-scoped data and operations SHALL remain isolated. One farmer or

farm member MUST NOT access another farm's protected resources.



## 20. Database Gate



Database changes SHALL be checked for migrations, compatibility,

constraints, indexes, historical preservation, integrity, and recovery

implications. Flyway SHALL be used according to the approved

architecture.



## 21. Historical Data



Current state MUST NOT silently destroy historical farm information.

History is a core product asset.



## 22. API Gate



APIs SHALL be checked for contract correctness, authorization,

validation, error behavior, compatibility, status codes, and safe

failure.



## 23. Purposeful Read Models



APIs SHOULD provide purposeful read models aligned with screens and

workflows. Avoid uncontrolled /everything-about-farm endpoints.



## 24. Frontend/Backend Gate



Affected frontend and backend workflows SHALL be verified together,

including loading, empty, error, unauthorized, unavailable-provider,

success, and relevant degraded states.



## 25. External Provider Gate



External services SHALL remain behind provider adapters. Provider

outages, timeouts, malformed responses, quota issues, or authentication

failures MUST NOT corrupt core records.



## 26. Weather Gate



Weather releases SHALL preserve provenance and handle unavailable or

stale weather safely. Weather may support field understanding, crop

suitability, sowing planning, and risk awareness without claiming

certainty.



## 27. AI and Intelligence Gate



AI SHALL NOT bypass authorization, validation, domain rules, provenance,

or auditability. The LLM MUST NOT directly mutate domain data.

AI-derived assessments remain distinguishable from measured,

farmer-reported, laboratory-verified, or expert-verified information.



## 28. Evidence and Provenance Gate



Important assessments and recommendations SHALL preserve provenance,

distinguishing farmer observation, measured data, laboratory results,

expert assessment, weather-provider data, AI inference, and imported

data.



## 29. Diagnostics and Service Network Gate



Diagnostic workflows SHALL preserve: Problem → Information Gap →

Evidence Collection → Verification → Assessment → Recommendation →

Action → Outcome. Soil testing, collection, laboratories, reports, and

experts SHALL remain traceable.



## 30. Recommendation and Decision Safety



Recommendations SHALL identify context, evidence, reason, knowledge,

uncertainty where applicable, risks, alternatives, and validity

conditions. A recommendation is not the same as a farmer decision.



## 31. Farmer Objective and Constraints



Where applicable, recommendations SHALL account for objectives and

constraints such as water, money, labour, machinery, seed availability,

timing, and risk tolerance.



## 32. Outcome and Farm Learning



Recommendation and decision workflows SHOULD support outcome recording.

The learning loop is Decision → Action → Result → Yield/Quality →

Economics → Farm Memory → Farm Learning. Historical correlation SHALL

NOT automatically be treated as causation.



## 33. MVP Boundary



The initial MVP is the coherent vertical slice: Farmer → Farm → Pashu →

Khet → Resources/Activities → Tasks → Weather → Dashboard → Basic

Context/Intelligence → Conversation → Economics.



## 34. Deferred Capabilities



Full soil diagnostic network, advanced GIS, satellite intelligence, IoT

integrations, full Digital Twin, large provider marketplace/ecosystem,

advanced machine learning, and premature microservices remain deferred

unless explicitly re-planned.



## 35. Future Farm Intelligence Evolution



Future releases may add Digital Twin, deeper soil intelligence,

diagnostic orchestration, provider networks, advanced weather/field

intelligence, satellite/sensor evidence, trials, farm learning, and

economic intelligence while preserving the farm-context and evidence

foundations.



## 36. Release Verification



Verification SHALL confirm released behavior matches approved

requirements and intended workflows, with traceable evidence.



## 37. Smoke Testing



Every deployable release SHALL perform appropriate smoke tests covering

system availability and critical affected workflows.



## 38. Post-Release Observation



Observe errors, failed workflows, provider failures, performance,

authorization anomalies, data-integrity issues, farmer-facing problems,

and AI/recommendation anomalies where applicable.



## 39. Release Evidence



Evidence may include test results, screenshots, API verification,

migration checks, security checks, logs/metrics, acceptance evidence,

known issues, and deployment records.



## 40. Failed Release



A release is failed when a blocking condition prevents safe operation or

released behavior materially violates approved requirements.

Containment, investigation, rollback, or remediation SHALL follow.



## 41. Rollback



Rollback SHALL be planned where practical. Application rollback MUST

consider database compatibility, historical data, configuration,

integrations, and existing records.



## 42. Database Rollback and Recovery



Recovery SHALL prioritize data integrity and preservation of

authoritative farmer records. A forward fix may be safer than

destructive rollback.



## 43. Hotfix



A hotfix addresses an urgent production-critical defect, security issue,

data-integrity issue, or severe farmer-impacting problem. It still

requires appropriate testing, authorization, documentation, and

traceability.



## 44. Blocking Conditions



Block releases for applicable critical issues such as broken farm

isolation, serious security vulnerabilities, destructive corruption,

failed migrations, unsafe recommendations, unrecoverable deployment

failures, or missing required acceptance evidence.



## 45. Known Issues



Known issues SHALL record description, impact, severity, affected scope,

workaround, owner, and planned resolution. Blocking issues MUST NOT be

hidden as ordinary known issues.



## 46. Risk Review



Release risk SHALL be reviewed against 12\_RISKS.md. New material risks

SHALL enter the established risk process.



## 47. Dependencies



Identify backend/frontend, database, external-provider, AI, weather,

authentication, infrastructure, configuration, and documentation

dependencies.



## 48. Environment Promotion



Development, testing, and production environments SHALL remain

appropriately separated with controlled promotion.



## 49. Configuration and Secrets



Secrets MUST NOT be committed to source control. Environment-specific

configuration SHALL be handled securely and verified before deployment.



## 50. Authentication



Authentication changes SHALL verify identity-provider behavior, token

validation, account mapping, session security, errors, and account

linking where applicable.



## 51. Documentation



Release-impacting documentation SHALL be updated as part of release

closure, including requirements, architecture, API, database, security,

testing, decisions, risks, glossary, and releases where relevant.



## 52. Change Control



Changes to approved release scope SHALL be intentional and traceable.

Material architecture, security, product, or roadmap changes require

appropriate review.



## 53. Emergency Change



Emergency changes may use an accelerated process only when necessary to

protect users, data, security, availability, or critical functionality.

They SHALL still be documented and retrospectively reviewed.



## 54. Communication



Release communication SHALL state what changed, what is affected, known

limitations, required action, and incident/rollback status where

relevant.



## 55. Farmer-Facing Safety



Farmer-facing changes SHALL use clear language and SHALL NOT create

false certainty. The farmer should be able to understand what is known,

uncertain, evidence-supported, and actionable.



## 56. Conversation Safety



Conversation and voice releases SHALL validate interpreted intent before

changing structured domain data. Ambiguous requests SHALL be clarified.

Conversation MUST NOT bypass authorization or domain validation.



## 57. Local Language



Farmer-facing language SHALL support intended local-language experiences

where implemented. Translation alone SHALL NOT be treated as equivalent

to domain understanding.



## 58. Performance



Performance SHALL be considered for affected workflows, especially

dashboard, conversation, image, diagnostic, and external-provider

operations.



## 59. Reliability



Critical workflows SHALL tolerate expected transient failures where

practical. External failures SHALL degrade gracefully without falsely

claiming success.



## 60. Regression



Regression scope SHALL reflect feature dependencies, domain impact,

security impact, API impact, and data impact.



## 61. Acceptance



Acceptance SHALL confirm applicable criteria from 05\_REQUIREMENTS.md.

Farmer-workflow acceptance is preferred for capabilities affecting daily

use.



## 62. Verification Checklist



Scope approved



Feature IDs traced



Requirements traced



Dependencies checked



Implementation complete



Tests passed



Security checked



Farm authorization checked



Database migration checked



API checked



Frontend checked



Provider failure checked



Evidence/provenance checked



AI safety checked



Documentation updated



Observability available



Recovery considered



Known issues recorded



Release approved



## 63. Release Record



A formal release SHOULD record identifier, date, scope, Feature IDs,

requirements, version/build, environments, migrations, test evidence,

security status, known issues, approval, deployment status, and

observations.



## 64. Traceability Matrix



Release → Feature ID → Requirement ID → Acceptance Criteria →

Implementation → Test → Verification → Deployment → Observation →

Feedback.



## 65. Farm Memory



Release changes SHALL preserve the Farm Memory concept: Farm →

Field/Animal → Season → Observation → Activity → Input → Recommendation

→ Decision → Outcome → Yield → Economics.



## 66. Farm Learning



Farm Learning initially means structured historical analysis and

comparison. Advanced machine learning is future evolution, not an MVP

requirement.



## 67. MVP Strategy



The MVP SHALL prove the core product loop rather than maximize feature

count: Farmer Context → Farm State → Useful Information → Action →

Result → Memory.



## 68. MVP Success



MVP success should demonstrate reliable farm context, records, daily

priorities, useful workflows, and a foundation for future intelligence.



## 69. Future Strategy



Future releases SHALL deepen the same core loop. The long-term direction

is a Digital Companion for the farmer's 365-day farm life and a Digital

Operating System / Farm Intelligence layer.



## 70. No Premature Complexity



Do not introduce microservices, advanced ML, IoT, satellite systems, or

large provider ecosystems merely because they belong to the long-term

vision.



## 71. Release Governance and Decisions



Release decisions SHALL respect 11\_DECISIONS.md. Architecture changes

that contradict an ADR require explicit review.



## 72. Release Review



After significant releases, review what worked, what failed, plan

deviations, farmer impact, technical debt, risks, performance,

reliability, security, and next improvements.



## 73. Release Closure



A release may close after deployment confirmation, required

verification, known-issue recording, post-release observation or

handoff, and documentation/traceability updates.



## 74. Relationship to Other Documents



This document works with 01\_VISION.md, 02\_MASTER\_ROADMAP.md,

03\_FEATURE\_REGISTRY.md, 05\_REQUIREMENTS.md, 06\_ARCHITECTURE.md,

07\_API\_CONTRACTS.md, 08\_DATABASE\_DESIGN.md, 09\_SECURITY.md,

10\_TEST\_STRATEGY.md, 11\_DECISIONS.md, 12\_RISKS.md, and

13\_GLOSSARY.md. No release document overrides another document's

authoritative domain.



## 75. Documentation Definition of Done



Release documentation is complete when scope, traceability,

verification, risks, known issues, deployment status, and relevant

documentation updates are recorded.



## 76. Release Definition of Done



A release is complete when approved scope is safely delivered, verified,

observable, traceable, and documented, with no unresolved

release-blocking issue.



## 77. Summary



Agrova releases protect the full loop: Observe → Record → Understand →

Identify Gaps → Collect Evidence → Validate → Build Farm Context → Apply

Knowledge → Analyze Options → Explain → Farmer Decides → Action → Result

→ Yield → Economics → Farm Memory → Farm Learning.



## Living Document
This document evolves as Agrova evolves.



Changes should be intentional and discussed before implementation in the

respective document governing that subject.



**Last Updated:** 5 September 2026