\# Agrova Database Design



\## 1. Purpose



This document defines the database design direction for Agrova.



The database is the persistent foundation for Agrova's farm context, domain records, evidence, intelligence inputs, decisions, outcomes, economics, and Farm Memory.



The database must support the product vision without becoming tightly coupled to frontend screens or external providers.



The database design must remain traceable to:



\- Product Vision

\- Product Master

\- Feature Registry

\- Roadmap

\- Requirements

\- Architecture

\- API Contracts

\- Security

\- Test Strategy

\- Decisions

\- Risks

\- Glossary

\- Releases



Primary principle:



> Store the truth of what happened on the farm, preserve its history, and provide reliable data for Agrova intelligence.



The database must support both the immediate MVP and controlled future evolution.



\---



\## 2. Database Philosophy



Agrova will use a relational database as the primary system of record.



The initial database technology is PostgreSQL.



Database design follows these principles:



1\. Domain data must have clear ownership.

2\. Farm is the primary business context.

3\. Farm boundaries must be enforced.

4\. Historical information must be preserved.

5\. Important records must retain provenance.

6\. Observations must remain distinguishable from assessments.

7\. Measurements must remain distinguishable from AI inference.

8\. Current state must not destroy historical state.

9\. Relationships must represent real domain relationships.

10\. Database constraints should protect important invariants.

11\. Authorization must be enforced at the application/domain layer and supported by appropriate data relationships.

12\. Sensitive information must receive appropriate protection.

13\. External provider data must remain identifiable by source.

14\. Database migrations must be controlled and versioned.

15\. The schema must support reliable testing.

16\. The schema must support observability and audit requirements.

17\. MVP complexity must remain controlled.

18\. Future capabilities must have clear extension points.



The database is a system of record, not the intelligence engine itself.



\---



\## 3. Database Technology



Agrova will initially use PostgreSQL as its primary relational database.



PostgreSQL is selected because it provides:



\- strong relational modeling,

\- transactional consistency,

\- constraints,

\- indexing,

\- mature tooling,

\- reliable SQL support,

\- support for structured and semi-structured data where justified,

\- suitability for a modular monolith,

\- a strong foundation for future scale.



The MVP should use PostgreSQL without introducing unnecessary database technologies.



Additional databases, caches, search engines, data warehouses, or specialized storage systems may be introduced later only when justified by a concrete requirement.



The primary source of truth for core Agrova domain records remains PostgreSQL.



\---



\## 4. Database Migration Strategy



Agrova will use Flyway for database schema migrations.



All structural database changes must be represented through version-controlled migrations.



Examples include:



\- table creation,

\- column creation,

\- column modification,

\- constraint changes,

\- index creation,

\- reference changes,

\- controlled data migrations.



Migration principles:



1\. Migrations are ordered.

2\. Migrations are immutable after release unless an approved correction strategy requires otherwise.

3\. Production schema changes must be reproducible.

4\. Database changes must be reviewed before release.

5\. Application code must remain compatible with the migration state it requires.

6\. Destructive migrations require special review.

7\. Data-preserving migration strategies are preferred.

8\. Migration failures must fail safely.

9\. Migration history must remain auditable.



Development databases may be recreated when appropriate, but production data must never be casually discarded.



\---



\## 5. Database Naming Conventions



Database naming must remain consistent across Agrova.



Initial conventions:



\- lowercase names,

\- snake\_case,

\- singular or consistently defined table naming,

\- descriptive table names,

\- descriptive column names,

\- primary keys named `id`,

\- foreign keys named `<referenced\\\_entity>\\\_id`,

\- timestamps named consistently,

\- boolean fields use clear state-oriented names.



Examples:



`farm`



`farm\\\_member`



`field`



`crop`



`animal`



`activity`



`task`



`weather\\\_observation`



`yield\\\_record`



`recommendation`



`audit\\\_event`



Avoid:



\- ambiguous abbreviations,

\- frontend-specific names,

\- provider-specific names in core tables,

\- meaningless column names,

\- duplicated representations of the same business fact without justification.



Database terminology must remain consistent with `13\\\_GLOSSARY.md`.

\## 6. Identifier Strategy



Agrova database records require stable identifiers.



The identifier strategy must support:



\- uniqueness,

\- safe API exposure,

\- reliable relationships,

\- distributed-safe generation where useful,

\- future scale.



The exact identifier implementation may be UUID-based or another approved strategy.



Identifiers must not expose sensitive information.



Primary keys and foreign keys must use consistent types within the relevant domain.



Identifiers must remain stable for the lifetime of the record unless a documented migration requires otherwise.



\---



\## 7. Timestamp Strategy



Important database records must maintain consistent timestamps.



Where applicable, records should include:



\- `created\_at`

\- `updated\_at`



Historical or event-oriented records may additionally require:



\- event date/time,

\- effective date,

\- observed date/time,

\- completed date/time,

\- verified date/time.



Agrova must distinguish:



\- when an event happened,

\- when it was recorded,

\- when it was verified,

\- when the system received external information.



Timestamp handling must be consistent across backend services and database migrations.



\---



\## 8. Farm as the Primary Data Boundary



Farm is the primary business context for protected farm data.



Most farm-operational records should be directly or indirectly associated with a farm.



Examples:



\- animals,

\- fields,

\- crops,

\- resources,

\- activities,

\- tasks,

\- weather context,

\- observations,

\- diagnostics,

\- recommendations,

\- outcomes,

\- economics.



The database relationships must make farm ownership/context determinable.



The application layer must verify that a requested resource belongs to the authorized farm.



Cross-farm access must never be inferred from a client-provided identifier alone.



\---



\## 9. Core User and Farm Entities



The initial core identity model includes:



\### User



Represents the Agrova internal user identity.



Potential fields:



\- `id`

\- identity information

\- preferred language

\- status

\- created timestamp

\- updated timestamp



\### Authentication Identity



Represents an external authentication relationship where applicable.



Potential fields:



\- `id`

\- `user\_id`

\- provider

\- provider subject identifier

\- created timestamp



\### Farm



Represents the primary farm context.



Potential fields:



\- `id`

\- name

\- location information

\- ownership information

\- status

\- created timestamp

\- updated timestamp



\### Farm Member



Represents a user's relationship with a farm.



Potential fields:



\- `id`

\- `farm\_id`

\- `user\_id`

\- role

\- status

\- created timestamp

\- updated timestamp



The exact schema must follow the authorization model defined in Security and API Contracts.



\---



\## 10. Farm Membership and Authorization Data



Farm membership is a core authorization relationship.



A farm member record should identify:



\- farm,

\- user,

\- role,

\- membership status,

\- relevant timestamps.



Potential roles may include:



\- owner,

\- member,

\- manager,

\- other approved operational roles.



Roles must not be treated as a substitute for detailed authorization rules.



The backend must evaluate:



User

\-> Farm Membership

\-> Role/Permission

\-> Resource

\-> Requested Operation



Membership changes must be auditable where appropriate.



Removing membership must prevent future unauthorized access while preserving historical records according to retention rules.

\## 11. Pashu Data Model



The Pashu domain manages animal-related farm information.



Core entities may include:



\- `animal`

\- `animal\_health\_record`

\- `animal\_vaccination`

\- `animal\_breeding\_record`

\- `animal\_feed\_record`

\- `animal\_milk\_record`

\- `animal\_vet\_interaction`



The initial MVP should implement only the entities required by approved Pashu requirements.



Each animal must belong to the correct farm.



An animal may have historical records spanning its lifetime within the farm.



Important health information must not be silently replaced by later records.



\---



\## 12. Animal Identity and Profile



The animal entity may contain:



\- animal ID,

\- farm ID,

\- tag/identification value,

\- name where applicable,

\- species,

\- breed,

\- sex,

\- date of birth or estimated age,

\- acquisition information,

\- status,

\- notes where appropriate,

\- timestamps.



Unknown values should be represented as unknown rather than fabricated.



Animal identity must remain stable even when profile information changes.



Changes to important identifying information should preserve appropriate history or audit information.



\---



\## 13. Animal Health and Veterinary Records



Animal health information should be modeled as time-aware records.



Examples include:



\- symptoms,

\- observations,

\- health events,

\- vaccinations,

\- veterinary visits,

\- treatments where appropriate,

\- laboratory results.



The database must distinguish:



\- farmer observation,

\- veterinary assessment,

\- laboratory measurement,

\- AI-assisted interpretation.



AI-derived information must not be stored as confirmed veterinary diagnosis unless professionally verified.



Health records require appropriate privacy and security controls.



\---



\## 14. Animal Breeding, Feed and Milk Records



Where implemented, Agrova may maintain separate records for:



\### Breeding



\- breeding event,

\- relevant dates,

\- reproductive status,

\- professional assessment where applicable.



\### Feed



\- feed type,

\- quantity,

\- unit,

\- date/time,

\- related animal or group.



\### Milk



\- date,

\- quantity,

\- unit,

\- animal or group,

\- relevant milking period.



These records should be event-oriented so that historical production and management can be analyzed later.



\---



\## 15. Khet and Field Data Model



The Khet domain manages agricultural growing areas.



Core field entity:



`field`



Potential fields include:



\- `id`

\- `farm\_id`

\- field name/label

\- location

\- area

\- local land-unit value

\- local land-unit type

\- standardized area value

\- standardized area unit

\- status

\- timestamps



A field is a distinct farm resource.



Field information must remain associated with its parent farm.



Field registration must support future extension to:



\- field boundary,

\- GIS,

\- satellite information,

\- detailed spatial intelligence.



These future capabilities must not unnecessarily complicate the MVP schema.

\## 16. Crop Data Model



Crop records represent what is grown in a field during a particular production period.



A crop record may include:



\- `id`

\- `field\_id`

\- crop name

\- variety

\- season

\- sowing date

\- crop stage

\- expected harvest date

\- actual harvest date

\- status

\- timestamps.



A crop record must be associated with a field and therefore indirectly with a farm.



The current crop state must not erase previous crop records.



\---



\## 17. Crop History and Crop Rotation



Crop history records previous production states.



Historical records may include:



\- crop,

\- variety,

\- sowing,

\- crop stage,

\- harvest,

\- yield,

\- relevant activities,

\- important observations.



Crop rotation may later use these historical records to understand repeated crop patterns.



Crop history must remain immutable in principle after recording, with corrections represented through controlled updates or audit/history mechanisms.



Future crop-rotation intelligence must use historical evidence rather than assumptions.



\---



\## 18. Soil Data Model



Soil information is part of the long-term Agrova Khet intelligence model.



Potential entities include:



\- `soil\_profile`

\- `soil\_test`

\- `soil\_test\_result`

\- `soil\_report`

\- `soil\_observation`



MVP may begin with a basic soil profile or farmer-provided information where required.



Future diagnostic capabilities may include:



\- laboratory testing,

\- sample collection,

\- laboratory reports,

\- nutrient measurements,

\- pH,

\- electrical conductivity,

\- organic carbon,

\- other validated parameters.



Measured laboratory information must remain distinguishable from farmer observation and AI inference.



\---



\## 19. Water and Irrigation Data Model



Water is a core farm resource.



Potential entities include:



\- `water\_source`

\- `irrigation\_source`

\- `irrigation\_event`

\- `irrigation\_schedule`

\- `water\_availability`



Initial MVP should prioritize records required for basic farm operation.



Potential future information includes:



\- crop water requirement,

\- water stress,

\- waterlogging,

\- drainage,

\- seasonal water risk.



Water records must remain linked to the relevant farm and, where applicable, field/crop.



\---



\## 20. Pest, Disease and Crop Observation Data



Agrova must preserve farmer observations before converting them into assessments.



Potential entities include:



\- `pest\_observation`

\- `crop\_disease\_observation`

\- `crop\_symptom\_record`

\- `crop\_photo\_observation`



An observation may include:



\- farm/field,

\- crop,

\- date/time,

\- description,

\- photograph/evidence reference,

\- reporter,

\- source,

\- confidence or data-quality state where applicable.



An observation is not automatically a diagnosis.



AI interpretation may be attached as a separate assessment or inference.



Expert verification may subsequently add a professional assessment.



Conflicting assessments must not silently overwrite the original observation.

\## 21. Resources Data Model



Resources represent assets or operational resources available to the farm.



Potential resource categories include:



\- machinery,

\- equipment,

\- irrigation resources,

\- storage,

\- livestock resources,

\- other farm assets.



A resource should contain:



\- `id`

\- `farm\_id`

\- resource type

\- name/label

\- status

\- relevant metadata

\- timestamps.



Resource records should support future linkage with activities and economics.



\---



\## 22. Activities Data Model



Activities represent work or events performed on the farm.



Examples:



\- sowing,

\- irrigation,

\- fertilization,

\- spraying,

\- weeding,

\- harvesting,

\- animal feeding,

\- animal care,

\- maintenance.



An activity may reference:



\- farm,

\- field,

\- crop,

\- animal,

\- resource,

\- task.



Activity records should contain the event date/time separately from the record creation timestamp where necessary.



Activities form an important part of Farm Memory.



\---



\## 23. Tasks Data Model



Tasks represent planned or actionable farm work.



A task may include:



\- `id`

\- `farm\_id`

\- title

\- description

\- priority

\- due date

\- status

\- related field

\- related crop

\- related animal

\- related resource

\- originating recommendation where applicable

\- completion information

\- timestamps.



Task state should follow controlled transitions.



A completed task should preserve completion information.



Tasks generated from recommendations should remain traceable to the originating recommendation.



\---



\## 24. Weather Data Model



Weather data must remain separated from the core farm domain while being linkable to farm and field context.



Potential entities include:



\- `weather\_observation`

\- `weather\_forecast`

\- `weather\_provider\_record`



Weather records may contain:



\- provider,

\- location,

\- observation/forecast time,

\- retrieval time,

\- weather values,

\- units,

\- source metadata,

\- freshness information.



External provider-specific raw responses should not become the primary core weather contract.



Weather data should be retained only according to its product and operational value.



\---



\## 25. Weather Provenance and Provider Records



Weather information must preserve provenance.



A weather record should identify:



\- source/provider,

\- source record where applicable,

\- time,

\- geographic context,

\- retrieval timestamp,

\- applicable validity period.



If multiple providers supply conflicting information, Agrova should preserve source distinctions rather than silently treating one value as universally correct.



Provider failure must not corrupt existing farm records.



Cached or previously retrieved weather must be clearly distinguishable from current provider responses.

\## 26. Evidence Data Model



Evidence is information used to understand a farm condition.



Potential evidence sources include:



\- farmer observation,

\- photograph,

\- voice input,

\- laboratory measurement,

\- expert assessment,

\- veterinary assessment,

\- weather provider,

\- external provider,

\- imported document.



Potential evidence entity:



`evidence`



It may contain:



\- `id`

\- farm ID,

\- related resource,

\- evidence type,

\- source type,

\- captured date/time,

\- recorded date/time,

\- reference to file/document where applicable,

\- provenance,

\- data quality,

\- status.



Evidence must not be automatically treated as verified truth.



\---



\## 27. Data Provenance Model



Important domain records should preserve provenance.



Potential provenance values include:



\- `FARMER\_REPORTED`

\- `FARM\_MEMBER\_REPORTED`

\- `EXPERT\_ASSESSED`

\- `VETERINARIAN\_ASSESSED`

\- `LAB\_MEASURED`

\- `WEATHER\_PROVIDER`

\- `EXTERNAL\_PROVIDER`

\- `SYSTEM\_CALCULATED`

\- `AI\_INFERRED`

\- `IMPORTED`



Provenance should be stored where it materially affects trust, interpretation, or future intelligence.



The original source should remain identifiable where practical.



Provenance must not be rewritten merely because a later system derives another interpretation.



\---



\## 28. Data Quality Model



Agrova should support explicit data quality states.



Possible values include:



\- `MISSING`

\- `APPROXIMATE`

\- `FARMER\_REPORTED`

\- `IMPORTED`

\- `LAB\_VERIFIED`

\- `EXPERT\_VERIFIED`

\- `AI\_INFERRED`

\- `CONFLICTING`



Data quality is different from provenance.



For example:



A laboratory may be the source, while a result may be laboratory verified.



An AI system may be the source, while its output remains AI inferred.



The database should preserve enough information for intelligence services to distinguish certainty levels.



\---



\## 29. Historical Data Strategy



Historical information is a core Agrova capability.



Important historical records include:



\- field history,

\- crop history,

\- animal history,

\- activities,

\- observations,

\- weather context,

\- recommendations,

\- decisions,

\- actions,

\- harvests,

\- yield,

\- economics.



Current state must not destroy meaningful historical state.



Where a mutable profile is required, important changes may be captured through:



\- history tables,

\- event records,

\- audit records,

\- effective dates,

\- version fields.



The appropriate mechanism depends on the domain.



\---



\## 30. Yield and Production Data Model



Yield records represent actual production outcomes.



Potential fields include:



\- `id`

\- `field\_id`

\- `crop\_id`

\- crop,

\- variety,

\- area,

\- seed quantity,

\- input context,

\- harvest date,

\- quantity,

\- unit,

\- standardized quantity,

\- quality information,

\- source/provenance,

\- timestamps.



Yield history should allow Agrova to compare production across:



\- fields,

\- seasons,

\- crops,

\- varieties,

\- inputs,

\- management practices,

\- weather conditions.



Historical yield data must not be interpreted as causal proof by default.



For example, higher yield associated with a variety does not by itself prove that the variety caused the higher yield.

\## 31. Harvest Data Model



Harvest records represent the production event from a crop.



A harvest may include:



\- crop,

\- field,

\- harvest date,

\- quantity,

\- unit,

\- quality,

\- storage information where applicable,

\- destination where applicable,

\- related yield record.



Harvest records should remain historical.



If a harvest quantity is corrected, the system should preserve appropriate correction/audit information.



Harvest information forms part of the Outcome chain.



\---



\## 32. Economics Data Model



Economics records represent financial effects of farm operations.



Potential entities include:



\- `economic\_transaction`

\- `farm\_expense`

\- `farm\_sale`

\- future financial summaries.



Economic records may include:



\- farm,

\- date,

\- transaction type,

\- category,

\- amount,

\- currency,

\- related activity,

\- related crop,

\- related animal,

\- related resource,

\- source,

\- notes where appropriate.



The database must distinguish:



\- cost,

\- revenue,

\- estimated value,

\- confirmed transaction.



Economic records require appropriate privacy and authorization controls.



\---



\## 33. Recommendation Data Model



Recommendations represent Agrova-proposed actions or options.



Potential fields include:



\- `id`

\- `farm\_id`

\- context,

\- evidence references,

\- knowledge references,

\- proposed action,

\- alternatives,

\- reasoning,

\- confidence,

\- risks,

\- constraints,

\- validity period,

\- status,

\- timestamps.



A recommendation is not the same as a decision.



The farmer remains the decision-maker.



Recommendations must preserve enough context to explain why they were generated.



\---



\## 34. Decision and Action Data Model



A farmer decision records what the farmer chose to do regarding a recommendation or situation.



Potential decision information includes:



\- recommendation reference,

\- selected option,

\- farmer acceptance/rejection/modification,

\- decision timestamp,

\- optional reason,

\- actor.



Action records represent what was actually done.



This distinction allows Agrova to determine:



Recommendation

\-> Decision

\-> Action

\-> Outcome



A recommendation may be rejected.



A decision may be modified.



An action may differ from the original recommendation.



These differences should not be erased.



\---



\## 35. Outcome Data Model



Outcomes represent what happened after an action or decision.



Potential outcome information includes:



\- related farm,

\- field/crop/animal/resource,

\- related action,

\- date,

\- result,

\- yield,

\- quality,

\- cost,

\- revenue,

\- farmer feedback,

\- evidence.



The outcome model supports Farm Memory and Farm Learning.



Outcome attribution must remain cautious.



Agrova should record what happened without automatically claiming that a particular recommendation caused the result.

\## 36. Farm Memory Data Model



Farm Memory is the historical context accumulated by Agrova for a particular farm.



Farm Memory is not necessarily one database table.



It is a logical capability built from historical records across domains.



Potential memory sources include:



\- farmer profile,

\- farm profile,

\- field history,

\- crop history,

\- animal history,

\- activities,

\- tasks,

\- weather,

\- observations,

\- diagnostics,

\- recommendations,

\- decisions,

\- actions,

\- outcomes,

\- yield,

\- economics.



The database must preserve relationships between these records so Farm Memory can reconstruct meaningful context.



\---



\## 37. Farm Learning Data Model



Farm Learning initially means structured learning from historical farm records.



It may include derived metrics such as:



\- historical yield patterns,

\- recurring crop performance,

\- recurring pest observations,

\- resource usage,

\- activity timing,

\- cost patterns,

\- weather/outcome relationships,

\- recommendation follow-through.



Farm Learning data should be distinguishable from original source records.



Derived metrics must retain references to their underlying source data where practical.



Advanced machine learning is a future capability and is not required for the MVP database.



\---



\## 38. Conversation Data Model



Conversation data supports farmer interaction with Agrova.



Potential entities include:



\- `conversation`

\- `conversation\_message`

\- `conversation\_action`



A conversation message may contain:



\- sender,

\- text,

\- voice reference,

\- timestamp,

\- language,

\- related farm,

\- processing status.



A structured action may contain:



\- interpreted intent,

\- requested domain operation,

\- validation state,

\- authorization state,

\- execution result.



The database must distinguish farmer input from AI-generated interpretation.



LLM output must never be treated as a domain mutation by itself.



\---



\## 39. File and Media Data Model



Agrova may store references to:



\- crop photographs,

\- animal photographs,

\- soil reports,

\- laboratory reports,

\- documents,

\- voice recordings.



The database should generally store metadata and secure storage references rather than unnecessarily storing large binary objects directly in relational tables.



Potential metadata includes:



\- file ID,

\- farm ID,

\- related entity,

\- media type,

\- storage reference,

\- original filename where safe,

\- size,

\- checksum,

\- uploader,

\- created timestamp,

\- security status.



Access to files must follow the same authorization boundary as the related farm/resource.



\---



\## 40. Diagnostic Data Model



The long-term diagnostic model may support:



\- diagnostic request,

\- provider,

\- sample,

\- collection,

\- laboratory,

\- test,

\- test result,

\- original report,

\- interpretation,

\- recommendation.



Potential entities include:



`diagnostic\_request`



`diagnostic\_provider`



`diagnostic\_sample`



`diagnostic\_test`



`diagnostic\_result`



`diagnostic\_report`



Diagnostic records must preserve provenance and lifecycle state.



The original measured result must remain distinguishable from later interpretation.



The full soil diagnostic/service network is a future capability and should not unnecessarily expand the MVP schema.

\## 41. Provider and Service Network Data Model



Agrova may eventually connect farmers with trusted service providers.



Potential provider categories include:



\- soil laboratories,

\- veterinary services,

\- agronomists,

\- agricultural experts,

\- diagnostic services,

\- machinery services,

\- future farm service providers.



A provider profile may include:



\- provider identity,

\- provider type,

\- service area,

\- available services,

\- verification status,

\- operating information,

\- external references.



Provider data must remain separated from core farm records.



The provider adapter architecture protects the core domain from provider-specific implementations.



\---



\## 42. Audit Data Model



Security-sensitive and important business changes should generate audit records.



Potential entity:



`audit\_event`



Potential fields:



\- `id`

\- actor/user,

\- farm,

\- action,

\- resource type,

\- resource ID,

\- timestamp,

\- source,

\- before state where appropriate,

\- after state where appropriate,

\- correlation/request ID.



Audit records must not contain unnecessary secrets.



Audit storage must follow security, retention, and privacy requirements.



\---



\## 43. Database Constraints



The database should enforce important structural invariants wherever practical.



Examples include:



\- required foreign keys,

\- non-null required fields,

\- valid uniqueness constraints,

\- valid identifier relationships,

\- controlled status values,

\- valid numeric ranges where appropriate,

\- prevention of impossible relationships.



Business rules that require contextual logic should remain in domain/application services rather than being forced entirely into SQL constraints.



The database should protect data integrity without becoming the only place where business logic exists.



\---



\## 44. Foreign Keys and Referential Integrity



Relationships between domain entities should use foreign keys where appropriate.



Examples:



\- farm member -> farm,

\- farm member -> user,

\- field -> farm,

\- crop -> field,

\- animal -> farm,

\- activity -> farm,

\- task -> farm,

\- yield -> crop/field,

\- recommendation -> farm.



Foreign keys prevent orphaned records and preserve relationship integrity.



Deletion behavior must be chosen carefully.



Important historical records should generally not be physically cascaded away merely because a parent profile changes.



\---



\## 45. Soft Delete and Record Retention



Agrova must distinguish between:



\- deactivation,

\- archival,

\- correction,

\- deletion.



Not every entity should use soft delete automatically.



Soft deletion may be appropriate where the business requirement requires the record to remain recoverable or historically relevant.



Some records may require permanent deletion under privacy or legal requirements.



Deletion rules must respect:



\- security,

\- privacy,

\- audit,

\- regulatory requirements where applicable,

\- historical integrity,

\- dependent records.



A deleted record must not remain unintentionally accessible through APIs or read models.

\## 46. Indexing Strategy



Indexes should support real product access patterns.



Likely indexed fields include:



\- farm IDs,

\- user IDs,

\- field IDs,

\- crop IDs,

\- animal IDs,

\- activity dates,

\- task status/due date,

\- recommendation status,

\- outcome dates,

\- yield history fields,

\- provider references.



Indexes must be introduced based on actual query patterns.



The MVP should avoid excessive indexing.



Every additional index has storage and write-performance costs.



Indexes should be reviewed as the product evolves.



\---



\## 47. Database Security



Database security must follow the Agrova Security baseline.



Requirements include:



\- protected database credentials,

\- least-privilege database users,

\- secure network access,

\- encrypted connections where applicable,

\- secret management,

\- controlled migrations,

\- restricted administrative access,

\- backups,

\- recovery procedures,

\- auditability.



Application code must not expose database credentials.



Production database access must be separated from ordinary application users.



Sensitive data should be protected according to its classification.



\---



\## 48. Backup and Recovery



Agrova must maintain a practical backup and recovery strategy.



The strategy should define:



\- backup frequency,

\- retention,

\- storage protection,

\- recovery testing,

\- restoration procedures,

\- responsibility,

\- recovery objectives appropriate to the product stage.



Backups must be protected against unauthorized access.



A backup that cannot be restored is not a reliable recovery mechanism.



MVP infrastructure should establish the minimum viable backup and restore process before production release.



\---



\## 49. Database Testing



Database behavior must be tested as part of the overall test strategy.



Testing should cover:



\- migration correctness,

\- constraints,

\- relationships,

\- repository behavior,

\- authorization-sensitive queries,

\- historical preservation,

\- transaction behavior,

\- conflict handling,

\- seed/test data,

\- backup/restore procedures where applicable.



Integration tests should verify that API operations do not cross farm boundaries.



Important database invariants should have automated tests where practical.



\---



\## 50. Transaction Strategy



Agrova should use database transactions for operations that require atomic changes across related records.



Examples include:



\- creating a farm and required initial records,

\- recording an activity with related state,

\- completing an important workflow,

\- recording a recommendation decision,

\- recording an outcome and linked result.



Transactions should be kept appropriately scoped.



External provider calls should not be unnecessarily held inside long-running database transactions.



Provider workflows should use controlled states and retry/reconciliation strategies where necessary.

\## 51. MVP Database Boundary



The MVP database should support the approved vertical slice:



Farmer

\-> Farm

\-> Pashu

\-> Khet

\-> Resources

\-> Activities

\-> Tasks

\-> Weather

\-> Dashboard

\-> Basic Farm Context

\-> Basic Intelligence

\-> Conversation

\-> Economics

\-> Yield/Outcome Memory



MVP database priorities are:



\- user identity,

\- farm,

\- farm membership,

\- animals,

\- fields,

\- crops,

\- resources,

\- activities,

\- tasks,

\- basic weather records,

\- observations,

\- recommendations where required,

\- basic conversation records,

\- economics,

\- harvest/yield,

\- historical relationships,

\- provenance where required,

\- audit/security foundations.



The MVP database must remain implementable within the planned development window.



\---



\## 52. Deferred Database Complexity



The following capabilities remain outside the initial MVP unless explicitly brought into approved implementation scope:



\- full soil laboratory network,

\- advanced diagnostic orchestration,

\- provider marketplace,

\- satellite data infrastructure,

\- IoT data platform,

\- advanced GIS storage,

\- full Digital Farm Twin,

\- advanced ML feature stores,

\- large-scale analytics warehouse,

\- distributed event architecture,

\- premature microservice-specific databases.



These capabilities remain valid future directions where supported by the Feature Registry, Roadmap, Product Master, and Architecture.



Deferral protects MVP delivery without removing the long-term vision.



\---



\## 53. Database Definition of Done



A database capability is complete only when applicable items below are satisfied:



\- Feature ID identified.

\- Requirement identified.

\- Domain ownership identified.

\- Entity/data model defined.

\- Relationships defined.

\- Primary keys defined.

\- Foreign keys defined.

\- Required constraints defined.

\- Authorization boundary defined.

\- Provenance handled where required.

\- Historical behavior defined.

\- Data quality handled where required.

\- Migration implemented.

\- Repository/domain integration implemented.

\- API integration validated.

\- Security requirements implemented.

\- Relevant indexes considered.

\- Tests implemented.

\- Observability/audit handled where required.

\- Backup/recovery impact considered.

\- Documentation updated.

\- Release traceability maintained.



No database capability is considered complete merely because a table exists.



\---



\## 54. Database Summary



The Agrova database is the persistent memory of the farm.



It must preserve:



\- who the farmer is,

\- what farm they operate,

\- what animals they have,

\- what fields they cultivate,

\- what crops they grow,

\- what resources they use,

\- what work they perform,

\- what weather affected the farm,

\- what they observed,

\- what evidence was collected,

\- what Agrova understood,

\- what recommendations were made,

\- what decisions were taken,

\- what actions occurred,

\- what outcomes resulted,

\- what yield was produced,

\- what economics followed.



The core relationship is:



Farm

\-> Context

\-> Evidence

\-> Knowledge

\-> Intelligence

\-> Recommendation

\-> Decision

\-> Action

\-> Outcome

\-> Farm Memory

\-> Farm Learning



The database must preserve the distinction between:



\- fact and inference,

\- observation and assessment,

\- recommendation and decision,

\- decision and action,

\- yield and revenue,

\- current state and historical state.



The ultimate purpose of the database is to allow Agrova to understand this particular farm over time and help the farmer make better next decisions.



\---



\## Living Document



This document evolves as Agrova evolves.



Changes should be intentional and discussed before implementation in the respective document governing that subject.



\*\*Last Updated:\*\* 5 September 2026

