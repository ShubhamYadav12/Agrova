# Agrova Glossary



## 1. Purpose



This glossary defines the canonical terminology used across Agrova.



Its purpose is to ensure that product, requirements, architecture, API contracts, database design, security, testing, backend implementation, frontend implementation, intelligence, and future documentation use consistent meanings.



The glossary is a product and engineering governance document.



A term defined here should not be given a different meaning in another Agrova document without an intentional terminology change.



\---



## 2. Glossary Principles



Agrova terminology follows these principles:



1\. Terms should represent real farm concepts where possible.

2\. One important concept should have one canonical term.

3\. Similar concepts must remain explicitly distinguishable.

4\. Farmer language and system language may differ; the system should map farmer expressions to canonical concepts.

5\. Technical implementation terms must not silently redefine agricultural concepts.

6\. Historical records must preserve the meaning they had when recorded.

7\. Data provenance must remain distinguishable from data meaning.

8\. AI interpretation must remain distinguishable from measured or professionally verified information.

9\. A recommendation must not be confused with a decision or completed action.

10\. Glossary changes should be intentional and traceable.



\---



# 3. Product and Farm Terms



## 3.1 Agrova



**Agrova** is the farm intelligence platform being developed to help a farmer understand the current state of their farm and decide what to do next.



Agrova is designed around the farmer's actual farm context rather than generic advice alone.



\---



## 3.2 Farmer



A person who operates, manages, owns, works on, or otherwise participates in the management of a farm.



"Farmer" is a product/domain role and must not automatically be treated as the same thing as an authenticated account, device, or farm owner.



\---



## 3.3 Farm



The primary business and authorization context representing a farmer's agricultural operation.



A farm may contain:



\- fields,

\- crops,

\- animals,

\- resources,

\- activities,

\- tasks,

\- records,

\- observations,

\- recommendations,

\- outcomes,

\- economic information,

\- and historical information.



The farm is Agrova's primary context boundary.



\---



## 3.4 Farm Owner



The person or principal authorized to own or control a farm within Agrova.



Ownership is an authorization concept and must be explicitly represented rather than inferred from device usage.



\---



## 3.5 Farm Member



A person authorized to participate in a farm's activities without necessarily being the farm owner.



Farm membership and permissions are separate concepts.



\---



## 3.6 Account



An authenticated digital identity used to access Agrova.



An account is not necessarily identical to:



\- a farmer,

\- a farm owner,

\- a farm member,

\- a physical device,

\- or the person currently operating the device.



\---



## 3.7 Device



A physical device used to access Agrova.



A device may be shared by multiple people.



Device identity must therefore not be used as a substitute for person or farm identity.



\---



## 3.8 Farm Context



The structured representation of the current and relevant state of a particular farm.



Farm context may combine:



\- farmer-provided information,

\- farm records,

\- crop state,

\- animal state,

\- resource state,

\- weather,

\- soil information,

\- observations,

\- verified evidence,

\- activities,

\- tasks,

\- historical information,

\- constraints,

\- objectives,

\- and other relevant information.



\---



# 4. Farm Structure Terms



## 4.1 Field



A distinct agricultural land unit within a farm.



A field is a persistent farm resource and may have:



\- identity,

\- location,

\- area,

\- local land-unit representation,

\- standard land-unit representation,

\- history,

\- crops,

\- soil information,

\- water information,

\- observations,

\- activities,

\- and outcomes.



A field must not be confused with the crop currently growing on it.



\---



## 4.2 Growing Area



A generalized agricultural growing-space concept.



A growing area may represent a:



\- field,

\- orchard area,

\- vegetable plot,

\- kitchen garden,

\- nursery,

\- or another managed growing space.



\---



## 4.3 Field Boundary



The geographical boundary representing the physical extent of a field.



Field boundary information is distinct from field area.



\---



## 4.4 Field Area



The measured or recorded size of a field.



Field area may be represented using:



\- local land units,

\- standard land units,

\- or both.



The original farmer-provided value and unit should be preserved where applicable.



\---



## 4.5 Local Land Unit



A land measurement unit used locally by the farmer or region.



Examples may include locally used traditional units.



Agrova should preserve the original local unit/value and only provide standardized conversion when the conversion is sufficiently validated for the relevant region.



\---



## 4.6 Standard Land Unit



A standardized unit used by Agrova for normalized calculations and comparisons.



Examples include:



\- square metre,

\- hectare,

\- acre.



A standardized value must not silently replace the farmer's original land measurement.



\---



## 4.7 Field History



The chronological record of important information and events associated with a field.



Field history may include:



\- previous crops,

\- crop cycles,

\- soil information,

\- irrigation events,

\- observations,

\- pest or disease events,

\- activities,

\- harvests,

\- yields,

\- and other relevant records.



Current field state must not destroy historical information.



\---



# 5. Crop and Khet Terms



## 5.1 Khet



The farmer-facing/domain term used by Agrova for cultivated field or crop-land context.



"Khet" may appear in farmer-facing language while "Field" is used as the canonical technical/domain entity where appropriate.



\---



## 5.2 Crop



A cultivated plant or crop cycle associated with a growing area.



A crop has its own lifecycle and state and must be represented separately from the field on which it is grown.



\---



## 5.3 Crop Registration



The act of creating a structured record that a particular crop is being grown in a growing area.



\---



## 5.4 Crop Variety



A specific variety or cultivar of a crop.



Variety information is distinct from the general crop type.



\---



## 5.5 Seed



Planting material used to establish a crop.



Seed information may include:



\- crop,

\- variety,

\- source,

\- quantity,

\- sowing information,

\- and associated outcomes.



\---



## 5.6 Seed Source



The source from which seed was obtained.



This may be relevant when analyzing historical crop performance.



\---



## 5.7 Sowing Record



A historical record of crop establishment activities.



It may include:



\- sowing date,

\- crop,

\- variety,

\- field,

\- area,

\- seed quantity,

\- seed source,

\- and relevant conditions.



\---



## 5.8 Crop Stage



The current or recorded developmental stage of a crop.



Crop stage is temporal and may change over the crop lifecycle.



\---



## 5.9 Crop Calendar



A structured representation of expected crop-related timing and lifecycle events.



It may include expected periods for:



\- sowing,

\- crop stages,

\- irrigation,

\- management activities,

\- and harvest.



A crop calendar represents expected timing and must not be treated as proof that an event actually occurred.



\---



## 5.10 Expected Harvest



An estimated or planned harvest point for a crop.



It is distinct from an actual harvest record.



\---



## 5.11 Harvest



The actual event of collecting the crop or its usable agricultural output.



\---



## 5.12 Harvest Record



A historical record describing an actual harvest event.



\---



## 5.13 Yield



The quantity of agricultural output produced by a crop or growing area.



Yield should be recorded with appropriate:



\- quantity,

\- unit,

\- crop,

\- area/context,

\- season/cycle,

\- and source information.



Yield is not the same as revenue or profit.



\---



## 5.14 Crop History



The chronological history of crop cycles associated with a field or growing area.



It may include:



\- crop,

\- variety,

\- sowing,

\- crop stages,

\- harvest,

\- yield,

\- inputs,

\- observations,

\- weather context,

\- and outcomes.



\---



## 5.15 Crop Rotation



The planned or historical sequence of different crops grown on the same field across crop cycles.



\---



# 6. Pashu Terms



## 6.1 Pashu



The farmer-facing/domain term used by Agrova for managed farm animals.



\---



## 6.2 Animal



A managed farm animal represented within Agrova.



An animal may have:



\- identity,

\- profile,

\- health records,

\- vaccination records,

\- breeding records,

\- nutrition/feed information,

\- milk records,

\- veterinary interactions,

\- and historical outcomes.



\---



## 6.3 Animal Profile



The structured identity and descriptive information associated with an animal.



\---



## 6.4 Animal Health Record



A historical record describing an animal's health-related event, observation, treatment, or professional assessment.



\---



## 6.5 Vaccination Record



A historical record of a vaccination event or preventive-care activity.



\---



## 6.6 Breeding Record



A historical record associated with animal reproduction or breeding activity.



\---



## 6.7 Feed Record



A record describing feed or nutrition provided to an animal.



\---



## 6.8 Milk Record



A historical record of milk production associated with an animal.



\---



## 6.9 Veterinarian



A qualified veterinary professional who may assess animal health or provide veterinary services.



AI must not be represented as a substitute for professional veterinary judgment where professional assessment is required.



\---



# 7. Resource, Activity, and Task Terms



## 7.1 Resource



A farm asset, input, source, or capability that can affect farm operations.



Examples may include:



\- water,

\- irrigation source,

\- machinery,

\- equipment,

\- seed,

\- feed,

\- labour,

\- money,

\- storage,

\- and other farm resources.



\---



## 7.2 Activity



An actual or recorded farm operation performed or initiated as part of farm management.



Examples include:



\- sowing,

\- irrigation,

\- feeding,

\- spraying,

\- harvesting,

\- vaccination,

\- or other farm operations.



\---



## 7.3 Task



A planned or actionable item representing work that needs to be done.



A task is not proof that the action has already occurred.



\---



## 7.4 Activity History



The historical record of activities performed or recorded for a farm, field, crop, animal, or other relevant resource.



\---



# 8. Observation and Evidence Terms



## 8.1 Observation



A statement or record describing something noticed or reported.



An observation may originate from:



\- a farmer,

\- an image,

\- a sensor,

\- an external source,

\- or another observation mechanism.



An observation is not automatically a diagnosis or verified fact.



\---



## 8.2 Farmer Observation



An observation explicitly reported by the farmer.



Examples:



\- "Leaves are turning yellow."

\- "Water is standing in the field."

\- "The animal is not eating."

\- "There are insects on the crop."



Farmer observations must retain their source identity.



\---



## 8.3 Evidence



Information that can be used to support an assessment, decision, or recommendation.



Evidence may originate from:



\- farmer observations,

\- laboratory measurements,

\- expert assessments,

\- weather services,

\- images,

\- records,

\- or other trusted sources.



\---



## 8.4 Evidence Source



The origin from which evidence was obtained.



Examples include:



\- farmer,

\- laboratory,

\- veterinarian,

\- agronomist,

\- weather provider,

\- sensor,

\- or AI interpretation.



\---



## 8.5 Evidence Provenance



The metadata describing where information came from, when it was produced, and how it entered Agrova.



Provenance is essential for understanding trust and traceability.



\---



## 8.6 Original Evidence



The original artifact or source record from which an interpretation or derived result was produced.



Examples include:



\- original laboratory report,

\- original image,

\- original farmer observation,

\- or provider response.



Original evidence should be preserved where appropriate.



\---



# 9. Assessment and Verification Terms



## 9.1 Assessment



An interpretation of available observations or evidence intended to characterize a situation.



An assessment may be produced by:



\- a professional,

\- a validated system process,

\- or an AI-assisted process subject to applicable safeguards.



Assessment is not the same as raw observation.



\---



## 9.2 Verification



A process of checking whether information is sufficiently supported or valid for its intended use.



Verification may involve:



\- laboratory measurement,

\- professional review,

\- source validation,

\- cross-checking,

\- or another appropriate verification mechanism.



\---



## 9.3 Verified Information



Information that has passed an appropriate verification process.



Verification must identify the basis and source where relevant.



\---



## 9.4 AI-Inferred Information



Information inferred or interpreted by an AI system from available inputs.



AI-inferred information must not automatically be treated as measured, lab-verified, or expert-verified information.



\---



# 10. Diagnostic Terms



## 10.1 Diagnostic



A structured process for understanding a problem by collecting and evaluating relevant evidence.



A diagnostic process may involve:



1\. identifying the problem,

2\. identifying known information,

3\. identifying missing information,

4\. collecting additional evidence,

5\. assessing the situation,

6\. verifying where required,

7\. and generating appropriate next-step options.



\---



## 10.2 Diagnostic Provider



An external or internal service provider capable of performing a diagnostic or measurement service.



Examples include:



\- soil laboratories,

\- water testing providers,

\- veterinary services,

\- agricultural experts,

\- plant diagnostic services.



\---



## 10.3 Soil Sample



A physical soil specimen collected from a farm or field for testing.



A soil sample may have:



\- sample ID,

\- field,

\- collection date/time,

\- collection location,

\- collection method,

\- depth,

\- collector,

\- condition,

\- transport information,

\- and laboratory linkage.



\---



## 10.4 Soil Test



A laboratory or approved testing process performed on a soil sample.



\---



## 10.5 Soil Test Result



A structured result produced from a soil test.



\---



## 10.6 Diagnostic Report



A formal report containing diagnostic or laboratory results.



Where applicable, Agrova should preserve the original report and maintain structured interpretations separately.



\---



## 10.7 Chain of Custody



The traceable history of a sample from collection through transport, receipt, testing, and reporting.



It is particularly important for diagnostic workflows where sample integrity affects result trustworthiness.



\---



# 11. Soil, Water, and Weather Terms



## 11.1 Soil Profile



The structured representation of known soil characteristics associated with a farm or field.



\---



## 11.2 Soil Health



A broader representation of the condition and productive capability of soil based on relevant evidence and indicators.



\---



## 11.3 Soil Nutrient



A nutrient measured, estimated, or otherwise represented as relevant to crop growth.



The source and measurement status must be preserved.



\---



## 11.4 Soil pH



A measure representing soil acidity or alkalinity.



The value must retain its source and measurement context.



\---



## 11.5 Organic Matter



A soil characteristic representing organic material content.



\---



## 11.6 Water Source



The source from which water is obtained for farm use.



\---



## 11.7 Irrigation Source



A water source specifically used or intended for irrigation.



\---



## 11.8 Irrigation Event



A recorded instance of irrigation applied to a crop or field.



\---



## 11.9 Water Availability



The known or estimated availability of usable water for a farm, field, or crop.



\---



## 11.10 Water Stress



A condition where crop water availability may be insufficient relative to crop needs.



Water stress detection is an intelligence capability and should be distinguished from a farmer's raw observation.



\---



## 11.11 Waterlogging



A condition where excess water remains in or around the crop root zone or field.



\---



## 11.12 Drainage



The process or system by which excess water is removed from a field or growing area.



\---



## 11.13 Weather



Observed, forecast, or historical atmospheric conditions relevant to a farm or agricultural decision.



\---



## 11.14 Weather Observation



A measured or reported weather condition at a particular time and location.



\---



## 11.15 Weather Forecast



A prediction of future weather conditions.



A forecast is not an observation of actual future conditions.



\---



## 11.16 Weather Provider



An external service that supplies weather observations, forecasts, or related agricultural weather information.



\---



# 12. Knowledge Terms



## 12.1 Knowledge



Validated information, rules, scientific understanding, agricultural guidance, or other trusted domain material used by Agrova to interpret farm context.



Knowledge is distinct from the farmer's individual farm data.



\---



## 12.2 Knowledge Source



The authoritative or identified origin of a knowledge item.



\---



## 12.3 Knowledge Version



A specific version of a knowledge source or knowledge artifact used at a particular point in time.



Historical recommendations should be traceable to the knowledge version used where appropriate.



\---



## 12.4 Knowledge Jurisdiction



The geographical, agricultural, institutional, regulatory, or contextual scope in which knowledge is considered applicable.



\---



# 13. Intelligence Terms



## 13.1 Intelligence



The system capability that transforms farm context, evidence, knowledge, objectives, and constraints into useful understanding or decision support.



\---



## 13.2 Farm Intelligence



Agrova's capability to understand a particular farm using its accumulated context and relevant evidence and help the farmer evaluate what to do next.



\---



## 13.3 Information Gap



A missing piece of information that prevents Agrova from safely or usefully completing an assessment or recommendation.



\---



## 13.4 Information Gap Engine



The system capability responsible for identifying important missing information and determining what evidence may be useful to collect next.



\---



## 13.5 Suitability



An assessment of how appropriate an option may be for a particular farm, field, crop, objective, and constraint set.



Suitability should consider actual farm context rather than generic suitability alone.



\---



## 13.6 Practical Farm Suitability



Suitability determined by considering:



\- agronomic suitability,

\- farmer objectives,

\- actual farm constraints,

\- available resources,

\- and relevant risks.



\---



## 13.7 Risk



The possibility that a condition, event, uncertainty, or decision may produce an undesirable outcome.



Risk is not the same as certainty of failure.



\---



## 13.8 Confidence



A representation of how strongly Agrova can support an assessment, interpretation, or recommendation based on available evidence and knowledge.



Confidence must not be presented as a guarantee of correctness.



\---



## 13.9 Alternative



A different viable option that may be considered instead of the primary recommendation.



Alternatives should expose meaningful trade-offs where appropriate.



\---



## 13.10 Trade-off



A situation where improving one objective or characteristic may reduce another.



Examples include:



\- yield versus cost,

\- water use versus production,

\- risk versus expected return.



\---



# 14. Recommendation and Decision Terms



## 14.1 Recommendation



A structured suggestion generated from farm context, evidence, knowledge, objectives, constraints, and applicable rules.



A recommendation may include:



\- proposed action,

\- reason,

\- supporting evidence,

\- knowledge source/version,

\- confidence,

\- validity period,

\- alternatives,

\- risks,

\- and required inputs.



\---



## 14.2 Recommendation Lifecycle



The lifecycle of a recommendation.



Typical states include:



\- created,

\- presented,

\- accepted,

\- rejected,

\- modified,

\- action initiated,

\- completed,

\- outcome recorded.



\---



## 14.3 Decision



The farmer's or authorized decision regarding an available option.



A recommendation does not automatically become a decision.



\---



## 14.4 Action



An operation performed in response to a decision or farm need.



\---



## 14.5 Recommendation Feedback



Information describing whether a recommendation was:



\- followed,

\- modified,

\- rejected,

\- useful,

\- or associated with a particular result.



\---



## 14.6 "Why?"



An explanation of why Agrova produced or presented a particular recommendation or assessment.



The explanation should reference meaningful context, evidence, knowledge, or rules where appropriate.



\---



## 14.7 "Why Not?"



An explanation of why an alternative option may not be suitable under the current farm context, objectives, constraints, evidence, or risk.



\---



# 15. Outcome, Yield, and Economics Terms



## 15.1 Outcome



The result observed after a decision or action.



\---



## 15.2 Outcome Record



A structured historical record of what happened after an action or decision.



\---



## 15.3 Farm Memory



The persistent historical record of what has happened on a particular farm.



Farm memory may include:



\- observations,

\- activities,

\- decisions,

\- recommendations,

\- weather,

\- soil,

\- crop cycles,

\- animal records,

\- harvests,

\- yields,

\- costs,

\- revenue,

\- and outcomes.



\---



## 15.4 Farm Learning



The capability of using accumulated farm memory to improve future understanding, comparisons, planning, or decision support.



Farm learning does not necessarily require machine learning.



\---



## 15.5 Historical Yield



Yield recorded from a previous crop cycle or production period.



Historical yield is valuable for farm-specific comparisons and planning.



\---



## 15.6 Cost



An economic expenditure associated with a farm activity, input, resource, service, or other farm operation.



\---



## 15.7 Revenue



Money earned or expected to be earned from farm production or other farm-related economic activity.



\---



## 15.8 Profit



Revenue minus applicable costs.



Profit must not be inferred from yield alone.



\---



## 15.9 Economic Outcome



The economic result associated with a farm decision, crop cycle, animal production period, activity, or other relevant operation.



\---



## 15.10 Outcome Attribution



The process of relating observed outcomes to previous decisions, actions, conditions, or factors.



Attribution must be cautious.



A difference in yield does not by itself prove that a particular variety, input, recommendation, or action caused the difference.



\---



# 16. Provider and Service Network Terms



## 16.1 Provider



An organization, person, laboratory, professional, or service capable of supplying a defined farm-related service.



\---



## 16.2 Service Network



The collection of providers and service capabilities that Agrova can potentially connect with a farmer.



\---



## 16.3 Farm Service Network



Agrova's reusable provider infrastructure for connecting farms with services such as:



\- soil testing,

\- water testing,

\- veterinarians,

\- agronomists,

\- diagnostics,

\- machinery,

\- labour,

\- and other future services.



\---



## 16.4 Service Area



The geographical area in which a provider can offer a service.



\---



## 16.5 Provider Verification



The process of establishing that a provider satisfies the required trust, identity, qualification, accreditation, or other applicable criteria.



\---



## 16.6 Laboratory



An organization capable of performing defined testing or analytical services.



Laboratory capabilities must be represented according to the tests and methods actually supported.



\---



## 16.7 Expert



A qualified human professional capable of providing domain-specific assessment or guidance.



\---



# 17. Conversation, Voice, and AI Terms



## 17.1 Conversation



An interaction between the farmer and Agrova using text, voice, image, or another supported communication method.



\---



## 17.2 Conversation Engine



The system component that interprets farmer input and transforms it into structured intent or conversational responses.



\---



## 17.3 Intent



The structured representation of what the farmer appears to want to communicate or accomplish.



\---



## 17.4 Structured Action



A validated representation of an operation that Agrova may perform on behalf of the farmer.



Examples include:



\- recording an observation,

\- creating a task,

\- recording irrigation,

\- registering a crop,

\- or updating another domain record.



\---



## 17.5 Ambiguity



A situation where farmer input can reasonably correspond to more than one meaning or action.



Ambiguous input should be clarified before a consequential operation is performed.



\---



## 17.6 AI Interpretation



An interpretation produced by an AI system from available input.



AI interpretation must retain its provenance and must not automatically be treated as verified professional or laboratory information.



\---



## 17.7 LLM



A large language model used by Agrova for language understanding, generation, reasoning assistance, or conversational capabilities.



An LLM is not a security authority and must not directly mutate Agrova domain data.



\---



## 17.8 Voice Interaction



A farmer interaction using spoken language as an input or output mechanism.



Voice interaction should support farmer-friendly language rather than requiring technical terminology.



\---



## 17.9 Local Language



The language, dialect, vocabulary, or locally understood expression used by the farmer.



Translation alone does not guarantee domain understanding.



\---



# 18. Data Quality and Provenance Terms



## 18.1 Data Quality



The degree to which information is complete, consistent, timely, accurate enough for its intended purpose, and appropriately sourced.



\---



## 18.2 Farmer-Reported



Information directly supplied by the farmer.



It should not automatically be treated as laboratory or professional verification.



\---



## 18.3 Approximate



Information that is intentionally represented as an estimate rather than an exact measurement.



\---



## 18.4 Imported



Information brought into Agrova from an external system or source.



\---



## 18.5 Lab-Verified



Information supported by an applicable laboratory measurement or report.



\---



## 18.6 Expert-Verified



Information reviewed or assessed by an appropriately qualified human expert.



\---



## 18.7 AI-Inferred



Information generated or inferred by an AI system from available inputs.



It must remain distinguishable from directly measured or professionally verified information.



\---



## 18.8 Conflicting Data



Two or more records or measurements that disagree.



Agrova must not silently overwrite one conflicting value with another.



\---



## 18.9 Data Provenance



The traceable origin, timing, method, and transformation history of information.



\---



# 19. Identity, Access, and Security Terms



## 19.1 Authentication



The process of establishing the identity associated with an authenticated Agrova session.



\---



## 19.2 Authorization



The process of determining whether an authenticated identity is allowed to perform a particular operation.



\---



## 19.3 Farm-Scoped Authorization



Authorization that evaluates access in the context of a specific farm.



The farm is the primary authorization boundary for protected farm data and operations.



\---



## 19.4 Role



A defined set of permissions or responsibilities associated with an identity in a particular context.



\---



## 19.5 Ownership



The authorized relationship between a person or account and a farm or resource.



Ownership must not be inferred solely from device access.



\---



## 19.6 Audit Record



A security and accountability record describing an important system operation.



Where applicable, audit information should answer:



\- WHO,

\- WHAT,

\- WHEN,

\- SOURCE,

\- BEFORE,

\- AFTER.



\---



## 19.7 Sensitive Data



Data requiring additional protection because unauthorized disclosure, modification, or misuse could cause meaningful harm or risk.



\---



## 19.8 Highly-Sensitive Data



Data requiring the strongest applicable protections because compromise could create significant privacy, security, financial, or safety consequences.



\---



# 20. Temporal and Lifecycle Terms



## 20.1 Date/Time Context



The temporal information required to understand when a record, observation, activity, measurement, or event occurred.



\---



## 20.2 Season



A defined agricultural production period or seasonal context associated with farming activities.



\---



## 20.3 Crop Cycle



The lifecycle of a crop from establishment through harvest or completion.



\---



## 20.4 Historical Record



A preserved record representing something that occurred or was recorded in the past.



Historical records must not be silently rewritten merely because current conditions have changed.



\---



## 20.5 Current State



The latest applicable representation of a farm, field, crop, animal, resource, or other domain entity.



Current state and historical records serve different purposes.



\---



## 20.6 Lifecycle



The progression of an entity, recommendation, task, diagnostic, or other object through defined states.



\---



# 21. Objectives, Constraints, and Suitability Terms



## 21.1 Farmer Objective



A desired outcome or priority expressed or inferred from the farmer's goals.



Examples include:



\- maximize yield,

\- minimize cost,

\- save water,

\- produce fodder,

\- grow household food,

\- maximize profit,

\- reduce risk.



\---



## 21.2 Constraint



A limitation that restricts available choices or actions.



Examples include:



\- water availability,

\- money,

\- labour,

\- machinery,

\- seed availability,

\- time,

\- land,

\- or risk tolerance.



\---



## 21.3 Risk Tolerance



The level of uncertainty or potential downside that a farmer is willing to accept when choosing among options.



\---



## 21.4 Option



A possible course of action or decision available under the current context.



\---



## 21.5 Decision Alternative



A specific alternative option considered alongside another recommendation or decision.



\---



# 22. Status and Lifecycle Vocabulary



## 22.1 Proposed



A concept or feature that has been identified but is not yet committed for implementation.



\---



## 22.2 Planned



A feature or capability that has been accepted into the product plan but has not necessarily been scheduled for implementation.



\---



## 22.3 Scheduled



A planned item assigned to a defined implementation period or execution sequence.



\---



## 22.4 In Development



An item currently being implemented.



\---



## 22.5 Testing



An implemented item undergoing validation and testing.



\---



## 22.6 Released



A capability that has been deployed as part of an intended release.



\---



## 22.7 Deprecated



A capability or terminology item that should no longer be used for new implementation and may be removed or replaced.



\---



# 23. Terms That Must Not Be Confused



The following distinctions are mandatory across Agrova documentation and implementation.



### Observation vs Assessment



**Observation** describes what was noticed or reported.



**Assessment** interprets available information.



\---



### Assessment vs Recommendation



**Assessment** characterizes the situation.



**Recommendation** proposes what may be done.



\---



### Recommendation vs Decision



**Recommendation** is a proposed option from Agrova.



**Decision** is the choice made by the farmer or authorized person.



\---



### Decision vs Action



**Decision** is the chosen course.



**Action** is the operation performed.



\---



### Action vs Outcome



**Action** is what was done.



**Outcome** is what happened afterward.



\---



### Evidence vs Knowledge



**Evidence** is information about the particular situation.



**Knowledge** is validated domain understanding used to interpret situations.



\---



### Farmer-Reported vs Verified



A farmer report may be valuable evidence but is not automatically laboratory-verified or expert-verified.



\---



### AI-Inferred vs Measured



AI inference is not equivalent to direct measurement.



\---



### Field vs Crop



A **field** is a persistent land resource.



A **crop** is a crop cycle associated with that growing area.



\---



### Current State vs History



Current state represents the latest applicable condition.



History preserves what happened over time.



\---



### Yield vs Revenue



Yield represents physical agricultural output.



Revenue represents money earned or expected from production.



\---



### Revenue vs Profit



Revenue is income.



Profit accounts for applicable costs.



\---



### Farm Memory vs Farm Learning



Farm memory preserves historical information.



Farm learning uses that historical information to improve future understanding or decisions.



\---



### Recommendation vs Guarantee



A recommendation represents decision support under uncertainty.



It is not a guarantee of an outcome.



\---



# 24. Naming Conventions



Agrova should prefer canonical terminology consistently across:



\- UI labels,

\- API fields,

\- database entities,

\- domain classes,

\- requirements,

\- tests,

\- events,

\- documentation,

\- analytics,

\- and intelligence systems.



Where farmer-facing language differs from technical terminology, the user interface may use familiar language while maintaining a canonical internal representation.



Examples:



| Farmer-facing term | Canonical domain concept |

|---|---|

| Khet | Field / Growing Area |

| Pashu | Animal |

| Keeda | Pest-related observation |

| Rog | Disease-related observation or assessment depending on evidence |

| Mitti | Soil |

| Paani | Water |

| Kya karun? | Recommendation / decision-support request |



Farmer expressions must not automatically be interpreted as verified technical classifications.



\---



# 25. Feature and Requirement Terminology



A **Feature ID** is the stable identifier assigned to a registered Agrova feature.



A **Requirement ID** is the stable identifier assigned to a testable requirement derived from a feature or product commitment.



A feature should trace through:



**Feature ID → Requirement → Acceptance Criteria → Implementation → Test → Release**



Terminology changes that affect feature meaning must preserve traceability.



\---



# 26. Documentation Governance



This glossary is a governed Agrova document.



Terminology changes should be intentional and should be reviewed against:



\- Product Vision,

\- Product Master,

\- Feature Registry,

\- Roadmap,

\- Requirements,

\- Architecture,

\- API Contracts,

\- Database Design,

\- Security,

\- Test Strategy,

\- Decisions,

\- Risks,

\- Releases,

\- and implementation.



When a new domain concept is introduced, its terminology should be established before the concept becomes widely implemented.



If an existing term needs to change meaning, the change should be explicitly documented rather than silently redefining the term.



\---



# 27. Traceability



Glossary terminology should remain consistent with the Agrova documentation hierarchy:



**Vision → Product Area → Epic → Feature → Requirement → Architecture → API/Data/UI → Test → Release → Outcome**



Where terminology affects a domain model, API, database entity, requirement, or feature, the relevant documentation should be reviewed together.



\---



# 28. MVP Boundary



The glossary defines terminology for the broader Agrova vision, including future capabilities.



Not every glossary concept is required for MVP implementation.



The MVP remains bounded around:



**Farmer → Farm → Pashu → Khet → Resources/Activities → Tasks → Weather → Dashboard → Basic Context/Intelligence → Conversation → Economics**



Future concepts such as:



\- full soil diagnostic network,

\- advanced provider ecosystem,

\- GIS,

\- satellite intelligence,

\- IoT,

\- Digital Twin,

\- advanced machine learning,

\- experiment/trial systems,



may be defined here before their implementation is scheduled.



\---



# 29. Glossary Summary



Agrova uses terminology that reflects a complete farm decision-support lifecycle:



**Observe → Record → Understand → Identify Gaps → Collect Evidence → Verify → Build Context → Apply Knowledge → Analyze Options → Recommend → Decide → Act → Observe Outcome → Remember → Learn**



The glossary exists to keep the meaning of each step stable across the entire Agrova system.



The central distinction remains:



> **Agrova should understand the particular farm before helping the farmer decide what to do next.**



\---



# 30. Living Document



This document evolves as Agrova evolves.



Changes should be intentional and discussed before implementation in the respective document governing that subject.




---

## Living Document

This document evolves as Agrova evolves.

Changes should be intentional and discussed before implementation in the respective document governing that subject.

**Last Updated:** 6 September 2026
