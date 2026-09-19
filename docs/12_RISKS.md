\# Agrova Risk Register



\## 1. Purpose



This document defines the risk management baseline for Agrova.



Agrova is intended to become a farmer-facing digital companion that combines farm records, crop and animal information, weather, evidence, diagnostics, knowledge, intelligence, recommendations, actions, outcomes, and historical farm memory.



Because Agrova can eventually influence real-world agricultural decisions, risk management is not limited to software reliability.



Risks may affect:



\- farmer safety,

\- agricultural decisions,

\- farm data,

\- privacy,

\- security,

\- financial outcomes,

\- system reliability,

\- evidence quality,

\- recommendation quality,

\- external service dependencies,

\- operational continuity,

\- development scope,

\- release quality,

\- long-term maintainability.



The purpose of this document is to make important risks visible early, assign appropriate controls, and ensure that risk is considered throughout the product lifecycle.



This document complements:



\- `01\_VISION.md`

\- `02\_PRODUCT.md`

\- `03\_FEATURE\_REGISTRY.md`

\- `04\_MASTER\_ROADMAP.md`

\- `05\_REQUIREMENTS.md`

\- `06\_ARCHITECTURE.md`

\- `07\_API\_CONTRACTS.md`

\- `08\_DATABASE\_DESIGN.md`

\- `09\_SECURITY.md`

\- `10\_TEST\_STRATEGY.md`

\- `11\_DECISIONS.md`

\- `13\_GLOSSARY.md`

\- `14\_RELEASES.md`



\---



\## 2. Risk Management Principles



Agrova follows these risk management principles.



\### 2.1 Farmer safety comes before feature completeness



A feature that can influence a farmer's health, animal health, crop treatment, financial decision, or other consequential action must be evaluated for safety before release.



\### 2.2 Evidence quality matters



Agrova must distinguish between:



\- farmer observation,

\- manually entered information,

\- imported information,

\- weather data,

\- laboratory results,

\- expert assessment,

\- AI interpretation,

\- derived information.



The system must not silently present uncertain information as verified fact.



\### 2.3 Farm isolation is mandatory



A farmer must never receive, modify, or act upon another farm's protected information through an authorization failure.



Farm and resource authorization is therefore a foundational security and product risk control.



\### 2.4 External providers must not become single points of failure



Weather, AI, maps, diagnostic providers, laboratories, speech services, and other external providers may fail.



Core farm records must remain usable when an external provider is unavailable.



\### 2.5 AI must remain bounded



AI may assist with interpretation, conversation, summarization, classification, and recommendations.



AI must not become the sole authority for:



\- security,

\- authorization,

\- irreversible domain operations,

\- professional diagnosis,

\- high-risk agricultural decisions.



\### 2.6 Historical information must be preserved



Current values must not silently destroy historical farm information.



Historical crop, yield, soil, weather, activity, recommendation, action, and outcome information may become important for future farm-specific intelligence.



\### 2.7 MVP scope is a risk-control mechanism



Agrova is being developed initially as a focused vertical slice.



Attempting the complete long-term vision during MVP increases:



\- technical complexity,

\- security surface,

\- testing burden,

\- integration risk,

\- development time,

\- operational risk.



Therefore deferred capabilities remain deferred unless the roadmap explicitly changes.



\### 2.8 Risk controls must be testable



A mitigation is not considered complete merely because it is documented.



Where practical, important controls must be represented through:



\- requirements,

\- implementation,

\- automated tests,

\- security tests,

\- integration tests,

\- operational checks,

\- release validation.



\---



\# 3. Risk Classification



Risks are classified using the following categories.



| Category | Meaning |

|---|---|

| SAF | Farmer, animal, crop, or real-world safety |

| SEC | Security, authorization, authentication, privacy |

| DATA | Data quality, integrity, loss, corruption, provenance |

| AI | AI, intelligence, recommendation, interpretation |

| EXT | External provider or integration |

| REL | Reliability, availability, resilience |

| PROD | Product behavior or user experience |

| OPS | Operational and maintenance |

| TECH | Technical architecture or implementation |

| SCOPE | Scope, complexity, or delivery |

| COM | Compliance, privacy, governance, or accountability |

| FIN | Financial or economic impact |

| TEST | Testing and validation |

| PERF | Performance and scalability |



A risk may belong to more than one category.



\---



\# 4. Risk Scoring



Each risk is evaluated using:



\- Likelihood

\- Impact

\- Risk Level



\## 4.1 Likelihood



| Score | Level | Meaning |

|---|---|---|

| 1 | Rare | Unlikely under normal conditions |

| 2 | Unlikely | Could occur but is not expected frequently |

| 3 | Possible | Reasonably possible |

| 4 | Likely | Expected to occur periodically |

| 5 | Almost Certain | Highly likely without controls |



\## 4.2 Impact



| Score | Level | Meaning |

|---|---|---|

| 1 | Minimal | Minor inconvenience or low-cost correction |

| 2 | Low | Limited operational or user impact |

| 3 | Moderate | Meaningful product, data, or operational impact |

| 4 | High | Serious farmer, security, financial, or operational impact |

| 5 | Critical | Severe safety, security, data, or consequential decision impact |



\## 4.3 Risk Score



Risk Score:



`Likelihood × Impact`



| Score | Risk Level |

|---|---|

| 1–4 | Low |

| 5–9 | Moderate |

| 10–16 | High |

| 17–25 | Critical |



Risk level does not replace judgment.



A low-frequency risk with severe farmer or security consequences may require strong controls even if its numerical score is not high.



\---



\# 5. Risk Status



Each risk uses one of the following statuses.



| Status | Meaning |

|---|---|

| Identified | Risk is recognized but controls are not yet fully defined |

| Mitigating | Controls are actively being designed or implemented |

| Controlled | Required controls are implemented and validated |

| Accepted | Risk remains intentionally accepted with documented reasoning |

| Deferred | Risk is outside the current MVP boundary |

| Closed | Risk is no longer applicable |

| Escalated | Risk requires higher-priority product or engineering attention |



Risk status must be reviewed as the system evolves.



\---



\# 6. Risk Ownership



Risk ownership is shared according to the nature of the risk.



For the current one-person development model, the product/engineering owner may temporarily hold multiple ownership responsibilities.



This does not remove the need to separate responsibilities conceptually.



Important future roles may include:



\- Product Owner

\- Engineering Owner

\- Security Owner

\- Data Owner

\- Domain Expert

\- Agricultural Expert

\- Veterinary Expert

\- Operations Owner

\- Release Owner



A risk owner is responsible for ensuring that the risk is:



\- understood,

\- tracked,

\- mitigated,

\- reviewed,

\- escalated when necessary.



\---



\# 7. Master Risk Register



\## RISK-001 — Incorrect Farm Authorization



\*\*Category:\*\* SEC

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



A user could potentially access or modify data belonging to another farm if authorization is implemented only at the account or API level without validating farm ownership or membership.



\### Potential Impact



\- privacy violation,

\- data exposure,

\- incorrect farm decisions,

\- unauthorized modification,

\- loss of trust,

\- severe security incident.



\### Controls



\- farm is the primary authorization boundary,

\- backend authorization checks,

\- resource-level authorization,

\- deny-by-default behavior,

\- farm membership validation,

\- protected API tests,

\- cross-farm isolation tests,

\- audit logging.



\### Trigger



Any discovery of an API or service that can access farm resources without explicit authorization validation.



\### Residual Risk



Moderate after validated authorization controls.



\---



\# 8. RISK-002 — Authentication Failure



\*\*Category:\*\* SEC

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Authentication implementation may incorrectly identify users, accept invalid credentials/tokens, mishandle provider authentication, or create insecure account-linking behavior.



\### Potential Impact



\- account takeover,

\- unauthorized access,

\- data exposure,

\- incorrect farm operations.



\### Controls



\- backend token verification,

\- secure authentication flow,

\- secure Google identity-provider integration,

\- exact redirect URI configuration,

\- secure account linking,

\- protected secrets,

\- authentication testing,

\- session/token validation.



\### Trigger



Authentication test failure, invalid token acceptance, or unexpected account association.



\---



\# 9. RISK-003 — Cross-Farm Data Leakage



\*\*Category:\*\* SEC / DATA

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Mitigating



\### Description



A query, cache, API response, background operation, or frontend state could expose data from another farm.



\### Potential Impact



\- privacy breach,

\- incorrect dashboard information,

\- incorrect recommendations,

\- reputational damage.



\### Controls



\- farm-scoped queries,

\- backend authorization,

\- explicit ownership checks,

\- test fixtures containing multiple farms,

\- cross-farm integration tests,

\- careful caching boundaries,

\- audit logging.



\### Trigger



Any test or observation showing records from multiple farms in an unauthorized context.



\---



\# 10. RISK-004 — Loss or Corruption of Farm Data



\*\*Category:\*\* DATA / REL

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Mitigating



\### Description



Farm records may be lost, overwritten, corrupted, or incorrectly migrated.



\### Potential Impact



\- loss of farmer history,

\- incorrect future recommendations,

\- loss of trust,

\- inability to reconstruct farm activity.



\### Controls



\- PostgreSQL as primary database,

\- Flyway migrations,

\- transactional domain operations,

\- validation,

\- historical preservation,

\- backups,

\- migration testing,

\- restore validation,

\- audit information for important changes.



\### Trigger



Unexpected record disappearance, migration failure, integrity violation, or restore failure.



\---



\# 11. RISK-005 — Historical Data Accidentally Overwritten



\*\*Category:\*\* DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



A new value may replace an older farm value without preserving the historical state.



\### Potential Impact



\- inaccurate farm history,

\- incorrect yield analysis,

\- incorrect seasonal comparisons,

\- loss of farm memory.



\### Controls



\- historical data preservation decision,

\- temporal modeling,

\- explicit history records where required,

\- tests for update/history behavior,

\- immutable original evidence where appropriate.



\### Trigger



Any operation that changes a historical fact without preserving the previous state when historical preservation is required.



\---



\# 12. RISK-006 — Poor Data Quality



\*\*Category:\*\* DATA

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



Farmer-entered information may be approximate, incomplete, misunderstood, stale, or inconsistent.



\### Potential Impact



\- incorrect context,

\- poor recommendations,

\- misleading analytics,

\- inaccurate historical learning.



\### Controls



Agrova should represent data quality states such as:



\- missing,

\- approximate,

\- farmer-reported,

\- imported,

\- lab-verified,

\- expert-verified,

\- AI-inferred,

\- conflicting.



The system should avoid silently converting uncertain information into verified information.



\### Trigger



Conflicting measurements, missing required context, or evidence quality insufficient for a recommendation.



\---



\# 13. RISK-007 — Conflicting Evidence



\*\*Category:\*\* DATA / AI

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



Two sources may report different values for the same agricultural condition.



Examples include:



\- farmer observation vs laboratory result,

\- two soil reports,

\- weather providers,

\- expert assessments,

\- AI interpretations.



\### Potential Impact



Incorrect assessment or recommendation.



\### Controls



\- preserve both records,

\- record provenance,

\- record timestamps,

\- avoid silent overwrites,

\- surface conflicts,

\- require verification where appropriate.



\### Trigger



Conflicting observations or measurements detected.



\---



\# 14. RISK-008 — Insufficient Evidence for Recommendation



\*\*Category:\*\* AI / SAF

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 20 — Critical

\*\*Status:\*\* Mitigating



\### Description



Agrova may attempt to recommend an action when the available information is insufficient.



\### Potential Impact



\- incorrect crop decision,

\- incorrect treatment,

\- unnecessary cost,

\- crop damage,

\- animal or farmer safety consequences.



\### Controls



\- Observation Before Recommendation,

\- Evidence Before Intelligence,

\- Information Gap Engine,

\- request additional evidence,

\- expert escalation,

\- confidence handling,

\- recommendation constraints,

\- domain validation.



\### Trigger



Required context is missing or evidence quality is below the threshold needed for the intended recommendation.



\---



\# 15. RISK-009 — AI Hallucination or Incorrect Interpretation



\*\*Category:\*\* AI / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



AI may produce plausible but incorrect information, incorrectly interpret farmer language, misclassify symptoms, or generate unsupported recommendations.



\### Potential Impact



\- wrong decision,

\- financial loss,

\- unsafe action,

\- loss of trust.



\### Controls



\- AI does not directly mutate domain data,

\- structured action generation,

\- domain validation,

\- evidence requirements,

\- knowledge-source grounding,

\- human-in-the-loop for high-risk areas,

\- expert escalation,

\- confidence and uncertainty handling,

\- AI safety testing.



\### Trigger



Unsupported claim, invalid structured action, contradiction with trusted knowledge, or unsafe recommendation.



\---



\# 16. RISK-010 — AI Directly Mutates Domain Data



\*\*Category:\*\* AI / SEC / DATA

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Controlled



\### Description



An AI component could directly modify the database or perform domain operations without validation and authorization.



\### Potential Impact



\- unauthorized changes,

\- corrupted records,

\- unsafe actions,

\- audit failures.



\### Controls



Architecture explicitly requires:



`Farmer → Conversation Engine → Intent / Structured Action → Validation → Authorization → Domain Service → Database`



The LLM must not directly mutate domain data.



\### Trigger



Any architecture or implementation path that bypasses domain validation or authorization.



\---



\# 17. RISK-011 — Incorrect Farmer Language Interpretation



\*\*Category:\*\* AI / PROD / SAF

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



Farmer speech may contain dialects, local terminology, abbreviations, incomplete sentences, or context-dependent expressions.



Translation alone may not preserve intended meaning.



\### Potential Impact



\- incorrect record,

\- incorrect task,

\- incorrect recommendation,

\- user frustration.



\### Controls



\- local-language support,

\- domain vocabulary,

\- structured intent extraction,

\- ambiguity detection,

\- confirmation for consequential actions,

\- conversation testing,

\- farmer-reported terminology.



\### Trigger



Ambiguous or low-confidence intent.



\---



\# 18. RISK-012 — Unsafe Recommendation Presented as Certain



\*\*Category:\*\* AI / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



A recommendation may be presented as a definitive answer even when evidence, context, or confidence is limited.



\### Potential Impact



Farmer may act without understanding uncertainty or alternatives.



\### Controls



Recommendations should include, where applicable:



\- context,

\- action,

\- reason,

\- evidence,

\- knowledge source,

\- confidence,

\- validity,

\- alternatives,

\- risks,

\- constraints.



The system should explain uncertainty and distinguish possible outcomes from guaranteed outcomes.



\### Trigger



Recommendation lacks sufficient evidence or communicates unsupported certainty.



\---



\# 19. RISK-013 — Incorrect Professional/Diagnostic Interpretation



\*\*Category:\*\* SAF / AI

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



AI or software interpretation of soil, crop, water, or animal information could be mistaken for professional diagnosis.



\### Potential Impact



\- inappropriate treatment,

\- crop damage,

\- animal harm,

\- financial loss.



\### Controls



\- clear distinction between observation, assessment, and diagnosis,

\- expert escalation,

\- laboratory evidence where appropriate,

\- original report preservation,

\- human-in-the-loop,

\- no false claims of professional authority.



\### Trigger



High-risk diagnostic situation without sufficient professional or laboratory validation.



\---



\# 20. RISK-014 — Incorrect Soil Test Interpretation



\*\*Category:\*\* DATA / AI / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Deferred for Full Network / Controlled for Basic Records



\### Description



Soil reports may be interpreted incorrectly due to units, test methods, crop context, field conditions, or missing information.



\### Potential Impact



\- inappropriate nutrient application,

\- unnecessary expense,

\- crop damage.



\### Controls



For the future diagnostic network:



\- preserve original reports,

\- record laboratory provenance,

\- record test metadata,

\- record units,

\- record collection information,

\- validate interpretation,

\- use trusted agricultural knowledge,

\- expert review where required.



\### MVP Boundary



Full diagnostic-provider orchestration is outside the initial MVP.



Basic soil-related records must not imply that a complete diagnostic network exists.



\---



\# 21. RISK-015 — External Weather Provider Failure



\*\*Category:\*\* EXT / REL

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Weather services may become unavailable, return errors, become delayed, or change their API.



\### Potential Impact



\- missing weather information,

\- delayed advisory context,

\- degraded recommendation quality.



\### Controls



\- provider adapter architecture,

\- timeout handling,

\- error handling,

\- cached/previous data where appropriate,

\- explicit freshness,

\- graceful degradation,

\- no false success.



Core farm records must continue working without weather availability.



\---



\# 22. RISK-016 — External AI Provider Failure



\*\*Category:\*\* EXT / REL / AI

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Mitigating



\### Description



AI provider may be unavailable, rate-limited, slow, or return malformed responses.



\### Potential Impact



\- conversation unavailable,

\- intelligence unavailable,

\- slower workflows.



\### Controls



\- provider adapter,

\- timeout,

\- fallback behavior,

\- structured response validation,

\- no direct database access,

\- manual record path remains available.



\---



\# 23. RISK-017 — External Provider API Change



\*\*Category:\*\* EXT / TECH

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



External providers may change API contracts, authentication requirements, quotas, response formats, or pricing.



\### Potential Impact



\- broken integration,

\- incorrect data,

\- unexpected cost,

\- release failure.



\### Controls



\- adapter interfaces,

\- contract tests,

\- provider-specific integration tests,

\- version awareness,

\- configuration isolation,

\- observability.



\---



\# 24. RISK-018 — External Provider Data Misinterpreted



\*\*Category:\*\* EXT / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



External data may be technically valid but incorrectly interpreted because of units, timestamps, location, terminology, or provider-specific semantics.



\### Controls



\- provider adapter normalization,

\- provenance,

\- units,

\- timestamps,

\- validation,

\- source metadata,

\- domain-level interpretation.



\---



\# 25. RISK-019 — Weather Data Not Representative of Field Conditions



\*\*Category:\*\* EXT / DATA / AI

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



Weather information may represent an area or forecast location that does not perfectly represent the actual field.



\### Potential Impact



Recommendations may be less accurate than expected.



\### Controls



\- preserve location context,

\- record source and timestamp,

\- distinguish forecast from observation,

\- avoid treating forecast as ground truth,

\- combine weather with actual farmer observations where possible.



\---



\# 26. RISK-020 — Incorrect Local Unit Conversion



\*\*Category:\*\* DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Land units may differ by region and farmer.



Incorrect conversion could change the meaning of area, seed quantity, input rate, or yield calculations.



\### Controls



\- preserve original local value and unit,

\- store standardized value separately,

\- use validated regional conversion,

\- never silently assume a universal conversion,

\- test conversions.



\### Trigger



Unknown region, ambiguous unit, or inconsistent conversion.



\---



\# 27. RISK-021 — Incorrect Yield Calculation



\*\*Category:\*\* DATA / FIN

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Yield calculations can become incorrect because of area, local units, weight units, partial harvest, moisture, or data-entry errors.



\### Controls



\- preserve raw harvest records,

\- preserve original units,

\- calculate standardized values separately,

\- validate area and quantity,

\- retain source records,

\- test yield calculations.



\---



\# 28. RISK-022 — False Causal Conclusions from Historical Yield Data



\*\*Category:\*\* AI / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Historical data may show that one seed, input, variety, weather pattern, or practice coincided with better yield.



This does not prove that the factor caused the improvement.



\### Potential Impact



Agrova could make misleading recommendations.



\### Controls



\- distinguish correlation from causation,

\- preserve contextual variables,

\- explain uncertainty,

\- avoid unsupported causal language,

\- support experiment/trial mode in future where appropriate.



\---



\# 29. RISK-023 — Recommendation Ignores Farmer Constraints



\*\*Category:\*\* AI / PROD / FIN

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



An agronomically suitable recommendation may still be impractical because of:



\- water,

\- money,

\- labour,

\- machinery,

\- seed availability,

\- time,

\- risk tolerance,

\- household needs.



\### Controls



Recommendation context should include:



\- farmer objective,

\- constraints,

\- available resources,

\- practical alternatives,

\- trade-offs.



Agrova should evaluate practical farm suitability rather than agronomic suitability alone.



\---



\# 30. RISK-024 — Recommendation Does Not Explain "Why"



\*\*Category:\*\* AI / PROD

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Mitigating



\### Description



A recommendation without understandable reasoning may reduce farmer trust and make it difficult to judge whether the advice fits the actual farm.



\### Controls



Recommendations should provide understandable reasons based on available evidence and knowledge.



Where useful, Agrova should also explain:



\- why this option,

\- why not another option,

\- what evidence is missing,

\- what risks exist.



\---



\# 31. RISK-025 — Recommendation Lifecycle Not Recorded



\*\*Category:\*\* DATA / AI

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



Agrova may generate recommendations without reliably recording whether the farmer:



\- accepted,

\- rejected,

\- modified,

\- acted on,

\- completed,

\- or achieved an outcome from the recommendation.



\### Impact



Agrova cannot reliably learn from decisions and outcomes.



\### Controls



Recommendation lifecycle:



`Created → Presented → Accepted/Rejected → Modified → Action → Completed → Outcome`



Feedback should capture usefulness and actual result where possible.



\---



\# 32. RISK-026 — Farmer Action Not Linked to Outcome



\*\*Category:\*\* DATA / AI / FIN

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



A farm action may be recorded without connecting it to later crop, yield, quality, revenue, or other outcome information.



\### Impact



Farm learning remains incomplete.



\### Controls



Preserve outcome relationships across:



`Decision → Action → Harvest → Yield → Quality → Revenue → Profit`



\---



\# 33. RISK-027 — Poor User Experience Causes Incorrect Data Entry



\*\*Category:\*\* PROD / DATA

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



If the software requires excessive typing, complex navigation, or unfamiliar terminology, farmers may enter incomplete or incorrect information.



\### Controls



\- voice-first interaction where appropriate,

\- minimal typing,

\- local language support,

\- farmer-friendly terminology,

\- simple flows,

\- contextual prompts,

\- confirmation for consequential actions.



Product principle:



> The farmer should not have to adapt to the software; the software should adapt to the farmer's day.



\---



\# 34. RISK-028 — Voice Recognition Error



\*\*Category:\*\* AI / PROD / DATA

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Deferred / Mitigating



\### Description



Voice input may be affected by:



\- dialect,

\- background noise,

\- multiple speakers,

\- pronunciation,

\- agricultural terminology,

\- poor connectivity.



\### Controls



\- confirmation for consequential actions,

\- structured intent validation,

\- fallback to text/manual input,

\- ambiguity detection,

\- domain vocabulary,

\- graceful degradation.



Full voice capability is not required for the earliest MVP implementation unless explicitly scheduled.



\---



\# 35. RISK-029 — Connectivity Failure



\*\*Category:\*\* REL / PROD

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Farm environments may have unreliable network connectivity.



\### Potential Impact



\- inability to access external providers,

\- failed submissions,

\- poor user experience.



\### Controls



\- graceful degradation,

\- clear failure states,

\- avoid false success,

\- preserve locally available state where architecture permits,

\- retry behavior for appropriate operations,

\- external-provider isolation.



Offline-first expansion may be considered in future roadmap evolution.



\---



\# 36. RISK-030 — Duplicate Records



\*\*Category:\*\* DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Identified



\### Description



Repeated submissions, retries, or user actions may create duplicate farm, field, crop, activity, or task records.



\### Controls



\- idempotency where appropriate,

\- unique constraints,

\- domain validation,

\- duplicate detection,

\- clear user feedback.



\---



\# 37. RISK-031 — Invalid Domain State



\*\*Category:\*\* TECH / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



The system may allow impossible or contradictory domain states.



Examples:



\- crop harvest before sowing,

\- task completed before creation,

\- activity assigned to another farm,

\- crop attached to an invalid field,

\- animal record linked to the wrong farm.



\### Controls



\- domain validation,

\- database constraints,

\- API validation,

\- integration tests,

\- state-transition tests.



\---



\# 38. RISK-032 — Database Migration Failure



\*\*Category:\*\* TECH / REL / DATA

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Mitigating



\### Description



A Flyway migration may fail or produce an unintended schema state.



\### Controls



\- migration review,

\- migration testing,

\- deterministic versioning,

\- backup before risky production migrations,

\- rollback/recovery planning,

\- clean-environment migration tests.



\---



\# 39. RISK-033 — API Contract Drift



\*\*Category:\*\* TECH / TEST

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Frontend, backend, and external integrations may disagree about request/response structures.



\### Controls



\- API contracts,

\- contract tests,

\- validation,

\- versioning strategy,

\- integration tests,

\- purposeful read models.



\---



\# 40. RISK-034 — Overly Broad API Endpoints



\*\*Category:\*\* TECH / SEC / PERF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Mitigating



\### Description



A generic endpoint such as an "everything about farm" response could create unnecessary coupling, security exposure, payload growth, and performance problems.



\### Controls



Use purposeful read models.



For example:



`GET /api/farm/dashboard`



should return the information required by the dashboard rather than exposing the entire farm data graph.



\---



\# 41. RISK-035 — Premature Microservices



\*\*Category:\*\* TECH / SCOPE / OPS

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Controlled



\### Description



Splitting Agrova into many services too early could create unnecessary deployment, networking, monitoring, testing, and operational complexity.



\### Controls



\- modular monolith first,

\- domain-oriented modules,

\- explicit boundaries,

\- provider adapters,

\- evolve to services only when justified.



\### Decision Reference



ADR-001 — Modular Monolith First.



\---



\# 42. RISK-036 — MVP Scope Explosion



\*\*Category:\*\* SCOPE / TECH

\*\*Likelihood:\*\* 5 — Almost Certain

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 25 — Critical

\*\*Status:\*\* Mitigating



\### Description



Agrova's long-term vision is significantly larger than its initial implementation.



Potential scope expansion includes:



\- full soil diagnostic network,

\- GIS,

\- satellite,

\- IoT,

\- full Digital Twin,

\- provider marketplace,

\- advanced ML,

\- large-scale ecosystem integration.



\### Potential Impact



\- missed deadline,

\- incomplete core workflows,

\- poor quality,

\- increased security risk,

\- untestable system.



\### Controls



Initial MVP remains a coherent vertical slice:



`Farmer → Farm → Pashu → Khet → Resources/Activities → Tasks → Weather → Dashboard → Basic Context/Intelligence → Conversation → Economics`



Deferred capabilities remain documented in the roadmap rather than silently entering implementation.



\---



\# 43. RISK-037 — One-Person Development Bottleneck



\*\*Category:\*\* SCOPE / OPS / REL

\*\*Likelihood:\*\* 5 — Almost Certain

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 20 — Critical

\*\*Status:\*\* Mitigating



\### Description



Agrova is currently being developed by a one-person team.



This creates risks around:



\- implementation speed,

\- review capacity,

\- security review,

\- testing,

\- documentation,

\- operational knowledge concentration.



\### Controls



\- strong documentation,

\- architecture decisions,

\- requirements traceability,

\- test strategy,

\- risk register,

\- controlled roadmap,

\- meaningful phase commits,

\- avoid unnecessary technology complexity,

\- automate repeatable validation.



\---



\# 44. RISK-038 — Documentation and Implementation Drift



\*\*Category:\*\* OPS / TECH / SCOPE

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Architecture, requirements, feature registry, roadmap, API contracts, database design, and implementation may become inconsistent.



\### Potential Impact



\- wrong implementation,

\- duplicated work,

\- unclear behavior,

\- difficult maintenance.



\### Controls



Maintain the traceability chain:



`Vision → Product → Feature → Roadmap → Requirement → Architecture → API/Data/UI → Test → Release`



New capabilities must enter the Feature Registry or Idea Backlog rather than being silently introduced.



\---



\# 45. RISK-039 — Feature Implemented Without Feature ID



\*\*Category:\*\* OPS / TECH

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Mitigating



\### Description



Engineering work may be implemented without a registered product feature or requirement.



\### Controls



Every implemented capability should trace to:



\- Feature ID,

\- requirement,

\- acceptance criteria,

\- implementation,

\- test,

\- release.



\---



\# 46. RISK-040 — Security Controls Added Too Late



\*\*Category:\*\* SEC / SCOPE

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Security may be treated as a final release activity rather than an architectural requirement.



\### Controls



Security applies throughout:



`Authentication → Authorization → Farm/Resource Access → Validation → Domain Operation → Persistence → Audit`



Security requirements must exist alongside functional requirements.



\---



\# 47. RISK-041 — Secrets Exposed in Repository



\*\*Category:\*\* SEC

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Controlled



\### Description



API keys, credentials, tokens, or other secrets could accidentally be committed to Git.



\### Controls



\- `.env` ignored,

\- `.env.example` contains placeholders only,

\- secrets stored outside source control,

\- environment separation,

\- secret review before commits,

\- repository history review when necessary.



\### Trigger



Any credential or secret detected in source code, logs, configuration, or repository history.



\---



\# 48. RISK-042 — Sensitive Information Exposed in Logs



\*\*Category:\*\* SEC / PRIV / OBS

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Logs may accidentally contain farmer-private, sensitive, highly-sensitive, authentication, or provider information.



\### Controls



\- data classification,

\- structured logging,

\- sensitive-field redaction,

\- no secrets in logs,

\- log review,

\- security testing.



\---



\# 49. RISK-043 — Insecure File, Image, Voice, or Document Upload



\*\*Category:\*\* SEC / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Farmer photos, voice recordings, soil reports, or other files may contain malicious content, sensitive data, or invalid formats.



\### Controls



\- file type validation,

\- size limits,

\- safe storage,

\- access control,

\- malware/security scanning where appropriate,

\- secure download behavior,

\- metadata handling,

\- farm authorization.



\---



\# 50. RISK-044 — Privacy Misuse



\*\*Category:\*\* PRIV / SEC / COM

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Farmer information may be collected, stored, processed, or shared beyond what is necessary or expected.



\### Controls



\- data minimization,

\- purpose limitation,

\- access control,

\- consent where applicable,

\- transparency,

\- correction,

\- export,

\- deletion where applicable,

\- secure storage,

\- provider boundaries.



\---



\# 51. RISK-045 — Incorrect Audit Trail



\*\*Category:\*\* SEC / DATA / OPS

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 8 — Moderate

\*\*Status:\*\* Mitigating



\### Description



Important operations may not produce sufficient audit information or may record incorrect actor/source information.



\### Controls



Important audit events should capture, where appropriate:



\- WHO,

\- WHAT,

\- WHEN,

\- SOURCE,

\- BEFORE,

\- AFTER.



Audit records must not become a mechanism for exposing sensitive information unnecessarily.



\---



\# 52. RISK-046 — Provider Claims False Success



\*\*Category:\*\* EXT / REL / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



An external service may time out or partially fail while Agrova incorrectly records the operation as successful.



\### Controls



\- explicit provider response validation,

\- timeout handling,

\- failure states,

\- retry policy,

\- idempotency where appropriate,

\- no false success,

\- observability.



\---



\# 53. RISK-047 — Provider Dependency Becomes Core System Dependency



\*\*Category:\*\* EXT / REL

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



A provider could become so deeply integrated that its failure prevents basic farm operation.



\### Controls



Provider adapter architecture and graceful degradation.



Core records should continue to work independently of external intelligence providers.



\---



\# 54. RISK-048 — Recommendation Based on Stale Data



\*\*Category:\*\* DATA / AI / SAF

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



A recommendation may rely on information that was once correct but is no longer representative of the farm.



\### Controls



\- timestamps,

\- freshness metadata,

\- temporal context,

\- current crop stage,

\- current weather,

\- current field observations,

\- stale-data detection where appropriate.



\---



\# 55. RISK-049 — Missing Temporal Context



\*\*Category:\*\* DATA / AI

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



The same observation or action may mean different things depending on:



\- season,

\- crop stage,

\- weather window,

\- activity timing,

\- previous actions,

\- outcome history.



\### Controls



Farm intelligence should preserve temporal context.



Historical events must remain distinguishable from current state.



\---



\# 56. RISK-050 — Incorrect Crop Suitability Recommendation



\*\*Category:\*\* AI / SAF / FIN

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Agrova may recommend a crop or variety without sufficiently considering:



\- soil,

\- weather,

\- season,

\- water,

\- field conditions,

\- seed availability,

\- farmer objective,

\- resource constraints.



\### Controls



Crop suitability should consider multiple dimensions:



`Agronomic Suitability + Farmer Objective + Actual Constraints/Resources`



Recommendations should identify missing evidence before making consequential conclusions.



\---



\# 57. RISK-051 — Incorrect Sowing Recommendation



\*\*Category:\*\* AI / SAF / FIN

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Sowing recommendations may be incorrect because of weather uncertainty, soil condition, seed availability, crop stage, or local conditions.



\### Controls



\- weather context,

\- field context,

\- soil evidence where available,

\- uncertainty communication,

\- alternatives,

\- farmer decision remains final,

\- expert escalation where appropriate.



\---



\# 58. RISK-052 — Insufficient Field-Specific Context



\*\*Category:\*\* AI / DATA

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



A recommendation based only on generic regional information may not fit the farmer's actual field.



\### Controls



Farm-specific context takes precedence where reliable evidence exists.



Agrova should progressively understand:



\- field,

\- crop,

\- soil,

\- water,

\- weather,

\- resources,

\- historical outcomes,

\- farmer objectives,

\- constraints.



\---



\# 59. RISK-053 — Incorrect Animal Record Association



\*\*Category:\*\* DATA / SAF

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Mitigating



\### Description



Animal health, vaccination, breeding, feed, or milk information could be associated with the wrong animal.



\### Controls



\- stable animal identity,

\- farm authorization,

\- validation,

\- clear UI identification,

\- audit history,

\- tests for record association.



\---



\# 60. RISK-054 — AI Misinterprets Animal Health Information



\*\*Category:\*\* AI / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



AI interpretation of animal symptoms may be mistaken for veterinary diagnosis.



\### Controls



\- AI does not replace veterinarian expertise,

\- evidence collection,

\- professional escalation,

\- cautious language,

\- human-in-the-loop,

\- no unsupported diagnosis.



\---



\# 61. RISK-055 — Task or Activity Performed on Wrong Resource



\*\*Category:\*\* SEC / DATA / SAF

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 8 — Moderate

\*\*Status:\*\* Mitigating



\### Description



An activity or task may be accidentally associated with the wrong field, crop, animal, or farm.



\### Controls



\- explicit resource relationships,

\- authorization,

\- domain validation,

\- UI confirmation,

\- integration tests,

\- auditability.



\---



\# 62. RISK-056 — Incorrect Economic Calculation



\*\*Category:\*\* DATA / FIN

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Costs, revenue, yield, or profit may be calculated incorrectly because of missing inputs, units, partial harvests, or inaccurate prices.



\### Controls



\- preserve raw economic records,

\- preserve original units,

\- distinguish estimated vs actual values,

\- validate calculations,

\- retain source information,

\- clearly label estimates.



\---



\# 63. RISK-057 — Farmer Misunderstands an Estimate as a Guarantee



\*\*Category:\*\* AI / FIN / PROD

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Estimated yield, revenue, risk, or future outcome may be interpreted as guaranteed.



\### Controls



\- distinguish estimates from actual outcomes,

\- communicate uncertainty,

\- provide possible outcomes,

\- avoid unsupported certainty,

\- preserve assumptions.



\---



\# 64. RISK-058 — Recommendation Bias Toward Available Provider



\*\*Category:\*\* AI / EXT / PROD

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 8 — Moderate

\*\*Status:\*\* Identified



\### Description



Future provider-network recommendations could unintentionally favor a provider because it is easier to integrate or available rather than because it is appropriate for the farmer.



\### Controls



Provider selection should consider relevant criteria such as:



\- service area,

\- capability,

\- verification,

\- turnaround time,

\- cost,

\- applicable test/service requirements.



Provider infrastructure should remain separated from intelligence logic.



\---



\# 65. RISK-059 — Unverified Knowledge Source



\*\*Category:\*\* AI / DATA / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Agricultural knowledge may be outdated, inaccurate, inappropriate for the jurisdiction, or insufficiently reviewed.



\### Controls



Knowledge should maintain metadata such as:



\- source,

\- date,

\- version,

\- review status,

\- jurisdiction,

\- applicability.



Knowledge must remain separate from raw farm context.



\---



\# 66. RISK-060 — Knowledge and Farm Context Become Mixed



\*\*Category:\*\* AI / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Generic agricultural knowledge may be stored or presented as if it were a fact about the farmer's specific farm.



\### Controls



Maintain explicit separation between:



\- farm context,

\- evidence,

\- knowledge,

\- assessment,

\- recommendation.



\---



\# 67. RISK-061 — Failure to Detect Information Gaps



\*\*Category:\*\* AI / SAF

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 20 — Critical

\*\*Status:\*\* Mitigating



\### Description



Agrova may fail to recognize that it lacks enough information to answer safely.



\### Controls



Information Gap Engine should identify missing evidence and request appropriate next steps, such as:



\- photo,

\- field observation,

\- soil test,

\- water information,

\- expert assessment,

\- laboratory report,

\- additional context.



\---



\# 68. RISK-062 — Farmer Over-Reliance on Agrova



\*\*Category:\*\* SAF / AI / PROD

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Farmers may treat Agrova as an unquestionable authority.



\### Controls



\- transparent reasoning,

\- uncertainty communication,

\- expert escalation,

\- recommendation alternatives,

\- evidence provenance,

\- human decision authority,

\- clear distinction between assistance and professional judgment.



\---



\# 69. RISK-063 — Lack of Explainability



\*\*Category:\*\* AI / PROD

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Identified



\### Description



The system may produce recommendations without sufficient explanation of evidence, assumptions, risks, or alternatives.



\### Controls



Recommendation architecture explicitly supports:



\- reason,

\- evidence,

\- knowledge source,

\- confidence,

\- alternatives,

\- risks,

\- validity.



\---



\# 70. RISK-064 — Insufficient Testing of Consequential Workflows



\*\*Category:\*\* TEST / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



A feature may pass basic unit tests while failing in a realistic farmer workflow.



\### Controls



Testing must include:



\- unit,

\- integration,

\- API,

\- authorization,

\- security,

\- contract,

\- frontend,

\- E2E,

\- domain-safety,

\- failure scenarios,

\- regression.



\---



\# 71. RISK-065 — Tests Cover Happy Paths Only



\*\*Category:\*\* TEST

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



Tests may validate successful behavior but not invalid, ambiguous, unauthorized, unavailable, stale, or conflicting conditions.



\### Controls



Every important workflow should consider:



\- happy path,

\- validation failure,

\- authorization failure,

\- missing data,

\- conflicting data,

\- provider failure,

\- timeout,

\- malformed input,

\- duplicate request,

\- stale information.



\---



\# 72. RISK-066 — Security Regression



\*\*Category:\*\* SEC / TEST

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



A later feature may accidentally weaken an existing security control.



\### Controls



\- security regression tests,

\- authorization tests,

\- cross-farm tests,

\- dependency review,

\- release security validation,

\- documented security baseline.



\---



\# 73. RISK-067 — Performance Degradation



\*\*Category:\*\* PERF / TECH

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Identified



\### Description



As farm data grows, poorly designed queries or oversized API responses may slow important screens.



\### Controls



\- purposeful read models,

\- appropriate database indexes,

\- query analysis,

\- pagination where appropriate,

\- performance testing,

\- monitoring.



\---



\# 74. RISK-068 — Dashboard Becomes Overloaded



\*\*Category:\*\* PROD / PERF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Identified



\### Description



The farm dashboard could attempt to display too much information and become difficult to understand.



\### Controls



Dashboard should prioritize:



\- what needs attention,

\- current farm state,

\- tasks,

\- important alerts,

\- relevant weather,

\- concise context.



Detailed information should remain accessible without overwhelming the primary workflow.



\---



\# 75. RISK-069 — Excessive Notification or Alert Noise



\*\*Category:\*\* PROD

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Identified



\### Description



Too many alerts can cause farmers to ignore important information.



\### Controls



\- prioritize alerts,

\- distinguish informational vs actionable,

\- avoid duplicate notifications,

\- use context,

\- allow appropriate farmer control.



\---



\# 76. RISK-070 — Incorrect Alert Priority



\*\*Category:\*\* PROD / AI / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



A low-value issue could be presented as urgent while a consequential issue receives insufficient prominence.



\### Controls



\- explicit priority model,

\- domain rules,

\- evidence quality,

\- explainable prioritization,

\- testing of alert ordering.



\---



\# 77. RISK-071 — Incomplete Release Validation



\*\*Category:\*\* RELEASE / TEST

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



A release may be deployed without validating requirements, tests, security, migrations, integrations, and critical farmer workflows.



\### Controls



Release validation must include:



\- build,

\- tests,

\- migration validation,

\- security checks,

\- API checks,

\- critical E2E flows,

\- configuration checks,

\- observability,

\- rollback/recovery readiness where applicable.



\---



\# 78. RISK-072 — Environment Configuration Drift



\*\*Category:\*\* OPS / SEC / REL

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Local, testing, staging, and production environments may have different configuration or dependency behavior.



\### Controls



\- environment separation,

\- documented configuration,

\- `.env.example`,

\- secure secrets,

\- deployment validation,

\- environment-specific integration testing.



\---



\# 79. RISK-073 — Dependency or Supply Chain Vulnerability



\*\*Category:\*\* SEC / TECH

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Third-party dependencies may contain vulnerabilities or malicious changes.



\### Controls



\- dependency review,

\- version management,

\- vulnerability scanning where available,

\- minimize unnecessary dependencies,

\- update strategy,

\- review of external libraries.



\---



\# 80. RISK-074 — Observability Insufficient to Diagnose Failure



\*\*Category:\*\* OPS / REL

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



A failure may occur without enough information to determine what happened.



\### Controls



Observability should cover:



\- structured logs,

\- errors,

\- metrics,

\- health checks,

\- provider failures,

\- important domain events,

\- traceability.



Logs must not expose sensitive information.



\---



\# 81. RISK-075 — Monitoring Detects Failure Too Late



\*\*Category:\*\* OPS / REL

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



A production issue may remain unnoticed until farmers report it.



\### Controls



\- health monitoring,

\- error metrics,

\- provider health visibility,

\- release verification,

\- operational review.



\---



\# 82. RISK-076 — Incomplete Backup and Recovery



\*\*Category:\*\* REL / DATA

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Identified



\### Description



Backups may exist but not be restorable or sufficiently current.



\### Controls



Future production operations should include:



\- backup policy,

\- restore testing,

\- recovery procedures,

\- retention policy,

\- recovery objectives.



MVP development should not falsely claim production-grade disaster recovery before it is implemented and validated.



\---



\# 83. RISK-077 — Data Deletion Removes Required History



\*\*Category:\*\* DATA / PRIV

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 8 — Moderate

\*\*Status:\*\* Identified



\### Description



A deletion operation may remove information required for historical integrity, auditability, or legitimate operational records.



\### Controls



Deletion behavior must distinguish:



\- user-visible data,

\- historical records,

\- audit records,

\- required references,

\- legally required retention where applicable.



Deletion requirements must be explicitly defined before implementation.



\---



\# 84. RISK-078 — Data Retention Becomes Excessive



\*\*Category:\*\* PRIV / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



Agrova may retain data longer than necessary.



\### Controls



\- data minimization,

\- retention policy,

\- purpose-based storage,

\- deletion controls,

\- privacy review.



\---



\# 85. RISK-079 — Provider or Laboratory Report Provenance Lost



\*\*Category:\*\* DATA / SAF

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 8 — Moderate

\*\*Status:\*\* Mitigating



\### Description



A diagnostic result could be stored without preserving who produced it, when it was produced, or the original report.



\### Controls



Diagnostic architecture should preserve:



\- sample identity,

\- provider/lab,

\- collection information,

\- test information,

\- result,

\- timestamp,

\- original report,

\- provenance.



\---



\# 86. RISK-080 — Chain of Custody Not Preserved



\*\*Category:\*\* DATA / SAF

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 8 — Moderate

\*\*Status:\*\* Deferred



\### Description



Future diagnostic samples may lose important collection, transport, or receipt information.



\### Controls



Future diagnostic architecture should preserve:



\- sample ID,

\- field,

\- location,

\- collection date/time,

\- collector,

\- collection method,

\- depth where relevant,

\- condition,

\- transport,

\- laboratory,

\- received date,

\- status.



Full diagnostic network remains outside the initial MVP.



\---



\# 87. RISK-081 — Provider Verification Is Insufficient



\*\*Category:\*\* EXT / SAF

\*\*Likelihood:\*\* 2 — Unlikely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 10 — High

\*\*Status:\*\* Deferred



\### Description



Future service-network providers may be presented as trusted without sufficient verification.



\### Controls



Provider records should eventually support information such as:



\- provider type,

\- service area,

\- services,

\- collection availability,

\- price,

\- turnaround time,

\- accreditation/recognition,

\- verification status.



\---



\# 88. RISK-082 — Overengineering Future Intelligence Too Early



\*\*Category:\*\* SCOPE / TECH

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



Agrova may attempt machine learning, Digital Twin, advanced prediction, satellite intelligence, or large-scale automation before sufficient structured farm data exists.



\### Potential Impact



\- unnecessary complexity,

\- misleading intelligence,

\- longer development time,

\- poor MVP quality.



\### Controls



Build structured farm memory first.



Initial farm learning can be based on:



\- historical records,

\- comparisons,

\- structured analytics,

\- contextual reasoning.



Advanced ML remains a future evolution.



\---



\# 89. RISK-083 — Digital Twin Scope Misunderstood



\*\*Category:\*\* SCOPE / TECH

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 3 — Moderate

\*\*Risk Score:\*\* 9 — Moderate

\*\*Status:\*\* Deferred



\### Description



Digital Twin may be interpreted as requiring a complex 3D or simulation platform.



\### Controls



Long-term Agrova Digital Twin is understood primarily as a live digital model of farm state.



It does not require a 3D representation.



The MVP should build the underlying structured farm state required for future evolution.



\---



\# 90. RISK-084 — Ecosystem Features Distract from Core Product



\*\*Category:\*\* SCOPE / PROD

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 16 — High

\*\*Status:\*\* Mitigating



\### Description



Provider marketplaces, communities, service discovery, or broad ecosystem features could distract from the core farmer decision-support loop.



\### Controls



The core loop remains:



`Observe → Record → Understand → Identify Gaps → Collect Evidence → Validate → Context → Knowledge → Analyze → Recommendation → Action → Outcome → Memory → Learning`



\---



\# 91. RISK-085 — Product Becomes a Generic Agriculture Information App



\*\*Category:\*\* PROD / SCOPE

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Mitigating



\### Description



Agrova could drift toward generic agriculture content rather than understanding the farmer's particular farm.



\### Controls



Product direction remains centered on:



> Given everything happening on this particular farm, what should the farmer do next?



Farm context and farm memory remain central.



\---



\# 92. RISK-086 — Generic Advice Overrides Actual Farm Evidence



\*\*Category:\*\* AI / DATA / SAF

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 15 — High

\*\*Status:\*\* Mitigating



\### Description



Generic agricultural knowledge may override reliable field-specific evidence.



\### Controls



Agrova should prioritize actual farm evidence where reliable and relevant while preserving the distinction between:



\- observed condition,

\- verified measurement,

\- expert assessment,

\- general knowledge,

\- AI inference.



\---



\# 93. RISK-087 — Confusing Observation With Diagnosis



\*\*Category:\*\* AI / SAF

\*\*Likelihood:\*\* 4 — Likely

\*\*Impact:\*\* 5 — Critical

\*\*Risk Score:\*\* 20 — Critical

\*\*Status:\*\* Mitigating



\### Description



A farmer's observation such as "leaves are turning yellow" could be incorrectly treated as a confirmed disease or nutrient deficiency.



\### Controls



Maintain the chain:



`Observation → Evidence → Assessment → Verification → Recommendation → Action → Outcome`



Farmer observation must not automatically become professional diagnosis.



\---



\# 94. RISK-088 — Incorrect Confidence Representation



\*\*Category:\*\* AI / PROD

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



Confidence indicators may create false precision or may be misunderstood by users.



\### Controls



Confidence must be accompanied by understandable explanation and evidence context.



Confidence must not replace validation.



\---



\# 95. RISK-089 — Recommendation Cannot Be Audited



\*\*Category:\*\* AI / DATA / OPS

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



Agrova may produce a recommendation without retaining sufficient information to understand why it was generated.



\### Controls



Where appropriate preserve:



\- recommendation context,

\- evidence,

\- knowledge source/version,

\- confidence,

\- alternatives,

\- risks,

\- creation time,

\- lifecycle state.



\---



\# 96. RISK-090 — Failure to Learn From Outcomes



\*\*Category:\*\* AI / DATA

\*\*Likelihood:\*\* 3 — Possible

\*\*Impact:\*\* 4 — High

\*\*Risk Score:\*\* 12 — High

\*\*Status:\*\* Identified



\### Description



Agrova may record recommendations and actions but fail to connect them to actual farm outcomes.



\### Controls



Build outcome management around:



`Decision → Action → Harvest → Yield → Quality → Revenue → Profit`



Farm learning must begin with structured outcome history before advanced learning systems are introduced.



\---



\# 97. Risk Response Strategy



Agrova uses four primary risk responses.



\## 97.1 Avoid



Do not introduce a capability when the risk is unnecessary or unacceptable.



Example:



Avoid premature microservices during MVP.



\## 97.2 Mitigate



Reduce likelihood or impact through architecture, validation, testing, monitoring, or process.



Example:



Farm-scoped authorization reduces cross-farm access risk.



\## 97.3 Accept



Accept a known residual risk when it is understood and reasonable for the current stage.



Acceptance must not be used to ignore critical safety or security risks.



\## 97.4 Defer



Explicitly defer risks belonging to future capabilities.



Examples:



\- full diagnostic network,

\- satellite,

\- IoT,

\- advanced ML,

\- full ecosystem,

\- Digital Twin implementation.



Deferred does not mean forgotten.



Deferred risks remain documented until the relevant roadmap capability is evaluated.



\---



\# 98. Critical Risk Controls



The following controls are considered foundational to Agrova.



\## 98.1 Farm Authorization



Every protected farm/resource operation must validate authorization.



\## 98.2 Evidence Before Intelligence



The system should identify whether enough evidence exists before making consequential recommendations.



\## 98.3 Observation vs Assessment



Farmer observations must remain distinguishable from professional or AI assessments.



\## 98.4 AI Boundary



AI cannot directly mutate domain data.



\## 98.5 Human-in-the-Loop



High-risk professional or consequential decisions require appropriate human expertise or validation.



\## 98.6 Provenance



Important information must retain its source and relevant metadata.



\## 98.7 Historical Preservation



Historical farm information must not be silently destroyed.



\## 98.8 Graceful Degradation



External provider failure must not destroy core farm-record functionality.



\## 98.9 Validation



Inputs, domain state, provider responses, and structured AI outputs must be validated.



\## 98.10 Auditability



Important changes and consequential decisions should be traceable.



\---



\# 99. MVP Risk Boundary



The MVP prioritizes risk control around the following vertical slice:



`Farmer → Farm → Pashu → Khet → Resources/Activities → Tasks → Weather → Dashboard → Basic Context/Intelligence → Conversation → Economics`



MVP risk controls must cover:



\- authentication,

\- authorization,

\- farm isolation,

\- core data integrity,

\- domain validation,

\- database migrations,

\- API validation,

\- frontend behavior,

\- weather provider failure,

\- AI boundaries,

\- conversation validation,

\- basic intelligence safety,

\- historical records,

\- economic calculations,

\- critical E2E workflows.



The following remain outside the initial MVP implementation boundary unless the roadmap explicitly changes:



\- full soil diagnostic network,

\- laboratory marketplace/network,

\- advanced GIS,

\- satellite intelligence,

\- IoT integration,

\- full Digital Twin,

\- advanced ML,

\- broad provider marketplace,

\- large ecosystem platform.



\---



\# 100. Risk Review Triggers



The risk register must be reviewed when any of the following occurs:



\- new major feature added,

\- Feature Registry changes,

\- roadmap changes,

\- architecture changes,

\- API contract changes,

\- database schema changes,

\- security model changes,

\- new external provider added,

\- AI provider/model changes,

\- diagnostic capability added,

\- new data category introduced,

\- privacy requirement changes,

\- production incident,

\- security incident,

\- serious test failure,

\- major farmer feedback,

\- recommendation failure,

\- data-quality issue,

\- release process changes.



\---



\# 101. Risk Review Cadence



During active development, risks should be reviewed:



\- when starting a major product area,

\- before implementing high-risk functionality,

\- before major releases,

\- after production incidents,

\- during major architecture changes.



For stable areas, risk review may be incorporated into periodic foundation reviews.



\---



\# 102. Risk Escalation



A risk should be escalated when:



\- impact becomes critical,

\- likelihood materially increases,

\- mitigation fails,

\- a safety issue is discovered,

\- a security boundary is bypassed,

\- farm isolation is compromised,

\- incorrect recommendations could cause consequential harm,

\- data integrity cannot be guaranteed,

\- an external dependency becomes a critical single point of failure.



Critical security and safety risks must not be silently accepted merely to meet a delivery deadline.



\---



\# 103. Risk-to-Document Traceability



Risk controls must remain connected to the relevant Agrova foundation documents.



| Risk Area | Primary Governing Document |

|---|---|

| Product scope | `04\_MASTER\_ROADMAP.md` |

| Feature scope | `03\_FEATURE\_REGISTRY.md` |

| Requirements | `05\_REQUIREMENTS.md` |

| Architecture | `06\_ARCHITECTURE.md` |

| API behavior | `07\_API\_CONTRACTS.md` |

| Database integrity | `08\_DATABASE\_DESIGN.md` |

| Security | `09\_SECURITY.md` |

| Testing | `10\_TEST\_STRATEGY.md` |

| Engineering decisions | `11\_DECISIONS.md` |

| Terminology | `13\_GLOSSARY.md` |

| Releases | `14\_RELEASES.md` |



Risk management does not replace these documents.



It identifies where those documents must provide controls.



\---



\# 104. Risk-to-Engineering Traceability



For important risks, the expected chain is:



`Risk → Control → Requirement → Architecture → Implementation → Test → Release Validation → Observation`



A risk should not be considered adequately controlled merely because a mitigation sentence exists in this document.



\---



\# 105. Risk-to-Test Traceability



High and critical risks should have corresponding validation wherever technically applicable.



Examples:



| Risk | Expected Validation |

|---|---|

| Cross-farm access | Authorization/integration tests |

| Authentication failure | Authentication security tests |

| Data corruption | Database/integration tests |

| AI mutation | Architecture/security tests |

| Missing evidence | Domain/intelligence tests |

| Unsafe recommendation | Domain-safety tests |

| Provider failure | Failure/integration tests |

| Historical overwrite | Data/history tests |

| Incorrect yield | Calculation tests |

| API drift | Contract tests |

| Migration failure | Migration tests |

| Security regression | Security regression tests |

| E2E failure | Critical workflow tests |



\---



\# 106. Risk Acceptance Rules



Risk acceptance must be explicit.



The following risks should generally not be accepted for a production release without appropriate controls:



\- critical farm isolation failure,

\- authentication bypass,

\- unauthorized domain mutation,

\- severe data corruption,

\- unsafe high-risk recommendation behavior,

\- uncontrolled professional diagnosis claims,

\- exposed secrets,

\- critical privacy breach.



A delivery deadline does not override these controls.



\---



\# 107. Risk Register Maintenance Rules



When a new risk is discovered:



1\. Assign a unique risk ID.

2\. Describe the risk clearly.

3\. Classify the risk.

4\. Estimate likelihood.

5\. Estimate impact.

6\. Calculate the initial score.

7\. Identify affected features or domains.

8\. Define mitigation or response.

9\. Define trigger conditions.

10\. Assign status.

11\. Identify relevant governing documents.

12\. Add required tests or validation.

13\. Review the residual risk.



Existing risk IDs should not be silently reused for unrelated risks.



\---



\# 108. Relationship With Idea Backlog



The risk register does not replace the Idea Backlog.



If risk mitigation requires a new capability:



\- the capability should be evaluated,

\- registered as a feature or idea as appropriate,

\- assigned requirements,

\- considered in the roadmap.



A mitigation must not silently introduce a large feature into the current sprint.



\---



\# 109. Relationship With Feature Registry



Every risk that directly affects a registered feature should be traceable to the relevant Feature ID.



Risk review may cause:



\- a requirement to be added,

\- an acceptance criterion to be strengthened,

\- a feature to be deferred,

\- a feature to require additional validation,

\- a feature priority to change.



The Feature Registry remains the source of truth for product capabilities.



\---



\# 110. Relationship With Architecture Decisions



When a major risk requires a lasting architectural choice, the decision should be recorded in `11\_DECISIONS.md`.



Examples include:



\- modular monolith,

\- provider adapters,

\- graceful degradation,

\- AI mutation boundary,

\- farm authorization boundary,

\- historical preservation,

\- purposeful read models.



The Risk Register identifies the problem; the ADR records the durable engineering decision.



\---



\# 111. Residual Risk



No non-trivial system is completely risk-free.



After controls are implemented, Agrova should distinguish:



\- inherent risk,

\- control effectiveness,

\- residual risk.



Residual risk must be understood before release.



For consequential functionality, uncertainty should be communicated rather than hidden.



\---



\# 112. Risk Management Philosophy



Agrova is not trying to eliminate every possible risk.



It is trying to ensure that important risks are:



\- visible,

\- understood,

\- bounded,

\- mitigated,

\- tested,

\- monitored,

\- reviewed,

\- never silently ignored.



The objective is not to make Agrova afraid to act.



The objective is to make Agrova \*\*careful enough to be trusted\*\*.



\---



\# 113. Final Risk Principles



Agrova should continuously preserve these principles:



1\. \*\*Protect the farmer.\*\*

2\. \*\*Protect farm data.\*\*

3\. \*\*Isolate farms correctly.\*\*

4\. \*\*Observe before assuming.\*\*

5\. \*\*Collect evidence before making consequential conclusions.\*\*

6\. \*\*Separate observation from assessment.\*\*

7\. \*\*Separate knowledge from farm-specific context.\*\*

8\. \*\*Never present uncertainty as certainty.\*\*

9\. \*\*AI assists; it does not become the final authority.\*\*

10\. \*\*AI never bypasses validation or authorization.\*\*

11\. \*\*Preserve provenance.\*\*

12\. \*\*Preserve historical outcomes.\*\*

13\. \*\*Do not confuse correlation with causation.\*\*

14\. \*\*Respect farmer objectives and constraints.\*\*

15\. \*\*Expect external providers to fail.\*\*

16\. \*\*Keep core farm records resilient.\*\*

17\. \*\*Test failure paths, not only happy paths.\*\*

18\. \*\*Keep security foundational.\*\*

19\. \*\*Control MVP scope.\*\*

20\. \*\*Document important engineering decisions.\*\*

21\. \*\*Trace risk controls into requirements and tests.\*\*

22\. \*\*Learn from actual outcomes.\*\*



\---



\# 114. Summary



Agrova's risk management model is built around the reality that this is not merely a CRUD application.



The system will eventually operate across:



\- farmer identity,

\- farm context,

\- animals,

\- crops,

\- resources,

\- weather,

\- evidence,

\- diagnostics,

\- knowledge,

\- intelligence,

\- recommendations,

\- actions,

\- outcomes,

\- economics,

\- historical memory.



Therefore the central risk-management loop is:



`Observe → Record → Understand → Identify Gaps → Collect Evidence → Validate → Build Context → Apply Knowledge → Analyze → Explain Options → Farmer Decides → Action → Outcome → Memory → Learning`



Risk management must protect every stage of this loop.



The most important current controls are:



\- farm-scoped authorization,

\- strong authentication,

\- data integrity,

\- evidence and provenance,

\- AI boundaries,

\- human-in-the-loop safety,

\- provider isolation,

\- historical preservation,

\- testable requirements,

\- controlled MVP scope.



Agrova should grow in capability without growing blindly in risk.



\---



\## Living Document



This document evolves as Agrova evolves.



Changes should be intentional and discussed before implementation in the respective document governing that subject.



\*\*Last Updated:\*\* 6 September 2026
