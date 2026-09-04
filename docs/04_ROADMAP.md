# Agrova Master Roadmap



## Purpose



This document defines the master execution roadmap for Agrova.



The Feature Registry defines WHAT Agrova contains.



This roadmap defines:



\- WHAT will be built

\- WHY it will be built

\- WHEN it will be built

\- WHAT it depends on

\- WHAT belongs to the MVP

\- WHAT remains part of the long-term vision



The Feature Registry is the source of truth for feature identity.



The Roadmap is the source of truth for execution order.



No feature should silently disappear from the roadmap.



\---



# 1. Agrova Execution Principles



## 1.1 Farmer First



Agrova must adapt to the farmer's day.



The farmer should not have to learn technology before technology can help.



## 1.2 Security First



Security is foundational.



A feature is not considered complete if it creates unacceptable security, privacy,

authorization, or data-integrity risk.



## 1.3 Build the Foundation Before Intelligence



Agrova Intelligence depends on reliable farm data.



Therefore:



Identity

\-> Farm

\-> Animals / Fields

\-> Activities / Resources

\-> Tasks / Weather

\-> Farm Context

\-> Conversation

\-> Intelligence



## 1.4 Modular Monolith First



Agrova will begin as a modular monolith.



Domains must remain independently understandable, testable, and degradable.



Services may be extracted later only when independent scaling, deployment,

ownership, or reliability requirements justify the change.



## 1.5 Minimize API Round Trips



API boundaries should be purposeful.



Where practical:



One screen

\-> One purposeful read model



Avoid unnecessary frontend requests.



Do not create a giant "everything about the farm" endpoint.



## 1.6 Graceful Degradation



Failure of an external dependency must not destroy the core Farm OS.



Examples:



Weather unavailable

\-> Farm records continue working.



AI unavailable

\-> Manual records continue working.



Marketplace unavailable

\-> Farm management continues working.



## 1.7 AI Must Not Directly Mutate the Database



Conversation / AI flow:



Farmer

\-> Conversation Engine

\-> Intent

\-> Structured Action

\-> Validation

\-> Domain Service

\-> Database



The LLM is never trusted as the direct database mutation layer.



\---



# 2. Roadmap Hierarchy



Agrova execution follows:



VISION

\-> PRODUCT AREA

\-> EPIC

\-> FEATURE

\-> CAPABILITY

\-> USER STORY

\-> ENGINEERING TASK

\-> API / DATA / UI

\-> TEST

\-> RELEASE

\-> OBSERVE

\-> FEEDBACK

\-> IMPROVEMENT



\---



# 3. Feature Lifecycle



Idea

\-> Registered

\-> Evaluated

\-> Planned

\-> Scheduled

\-> In Development

\-> Testing

\-> Released



Alternative outcomes:



Planned

\-> Deferred



Evaluated

\-> Rejected



\---



# 4. Product Development Phases



## Phase 0 - Product Foundation



Purpose:



Create the permanent product and engineering source of truth.



Includes:



\- Product vision

\- Product master

\- Feature registry

\- Master roadmap

\- Requirements

\- Architecture

\- API contracts

\- Database design

\- Security strategy

\- Test strategy

\- Risk register

\- Architecture decisions

\- Release strategy



Primary documents:



\- 01\_PRODUCT\_VISION.md

\- 02\_PRODUCT\_MASTER.md

\- 03\_FEATURE\_REGISTRY.md

\- 04\_ROADMAP.md

\- 05\_REQUIREMENTS.md

\- 06\_ARCHITECTURE.md

\- 07\_API\_CONTRACTS.md

\- 08\_DATABASE\_DESIGN.md

\- 09\_SECURITY.md

\- 10\_TEST\_STRATEGY.md

\- 11\_DECISIONS.md

\- 12\_RISKS.md

\- 13\_GLOSSARY.md

\- 14\_RELEASES.md



\---



# 5. Long-Term Agrova Product Roadmap



## Phase 1 - Platform and Security Foundation



Core capabilities:



\- Agrova identity

\- Authentication

\- Registration

\- Login

\- Session management

\- Authorization

\- RBAC

\- Farm ownership

\- Farm access control

\- Consent

\- Security audit events

\- Input validation

\- Secret management

\- Data isolation

\- Secure file handling

\- Encryption

\- Observability

\- Error monitoring

\- API performance monitoring

\- Provider abstraction

\- External API failure isolation

\- Graceful degradation



Relevant Feature IDs:



\- AGROVA-AUTH-001

\- AGROVA-AUTH-002

\- AGROVA-AUTH-003

\- AGROVA-AUTH-004

\- AGROVA-AUTH-005

\- AGROVA-AUTH-006

\- AGROVA-AUTH-008

\- AGROVA-AUTH-010

\- AGROVA-AUTH-011

\- AGROVA-AUTH-012

\- AGROVA-AUTH-013

\- AGROVA-AUTH-014

\- AGROVA-SEC-001 to AGROVA-SEC-012

\- AGROVA-PLAT-001 to AGROVA-PLAT-010



\---



## Phase 2 - Farmer and Farm Foundation



Build:



\- Farmer profile

\- Farm registration

\- Farm location

\- Farm members

\- Farm access permissions

\- Farm history

\- Farm configuration

\- Farm dashboard foundation



Relevant Feature IDs:



\- AGROVA-FARM-001

\- AGROVA-FARM-002

\- AGROVA-FARM-003

\- AGROVA-FARM-004

\- AGROVA-FARM-005

\- AGROVA-FARM-006

\- AGROVA-FARM-007

\- AGROVA-FARM-008



\---



## Phase 3 - Pashu Foundation



Build the animal identity layer.



Includes:



\- Animal registration

\- Animal profile

\- Animal ID

\- Animal identification

\- Animal photo

\- Animal ownership

\- Animal status

\- Animal timeline

\- Multi-species livestock support



Relevant Feature IDs:



\- AGROVA-PASHU-001

\- AGROVA-PASHU-002

\- AGROVA-PASHU-003

\- AGROVA-PASHU-004

\- AGROVA-PASHU-005

\- AGROVA-PASHU-008

\- AGROVA-PASHU-012

\- AGROVA-PASHU-013



Future Pashu identity capabilities remain preserved:



\- Acquisition

\- Transfer / sale

\- Location

\- Parentage

\- Animal passport

\- Lifetime record



\---



## Phase 4 - Pashu Health and Preventive Care



Build:



\- Health observations

\- Symptoms

\- Health events

\- Diagnosis records

\- Treatment records

\- Medicine records

\- Vet visit records

\- Prescription records

\- Health history

\- Recovery status

\- Animal health timeline

\- Vaccination records

\- Vaccination schedules

\- Due tracking

\- Missed vaccination tracking



Relevant Feature IDs:



\- AGROVA-PASHU-014 to AGROVA-PASHU-033



Health-check intelligence remains future-facing and must be professionally

validated before automated recommendations are trusted.



\---



## Phase 5 - Pashu Breeding, Nutrition and Milk



Build long-term capabilities for:



### Breeding



\- Heat observation

\- Breeding events

\- Artificial insemination

\- Pregnancy

\- Expected calving

\- Calving

\- Calf records

\- Reproductive history

\- Breeding reminders

\- Reproductive risk analytics



### Nutrition



\- Feed records

\- Green fodder

\- Dry fodder

\- Crop residue

\- Feed requirement

\- Feed inventory

\- Feed planning

\- Seasonal feed planning



### Milk



\- Daily milk

\- Morning milk

\- Evening milk

\- Animal-wise production

\- Farm milk summary

\- Milk history

\- Milk trend analysis

\- Production decline detection

\- Milk economics



Relevant Feature IDs:



\- AGROVA-PASHU-034 to AGROVA-PASHU-060



\---



## Phase 6 - Experts and Labs



Build:



\- Expert profiles

\- Expert verification

\- Expert search

\- Nearby experts

\- Appointments

\- Consultations

\- Animal record sharing

\- Crop record sharing

\- Prescriptions

\- Follow-up

\- Lab profiles

\- Test requests

\- Samples

\- Lab results

\- Digital lab reports

\- Soil testing integration



Relevant Feature IDs:



\- AGROVA-EXP-001 to AGROVA-EXP-009

\- AGROVA-LAB-001 to AGROVA-LAB-006



\---



## Phase 7 - Khet Foundation



Build:



\- Field registration

\- Field ID

\- Field location

\- Field area

\- Local land units

\- Standard land units

\- Field history

\- Field overview



Future:



\- Field boundaries

\- Land ownership / lease



Relevant Feature IDs:



\- AGROVA-KHET-001 to AGROVA-KHET-010



Local units must remain configurable.



Never assume one universal definition of units such as biswa.



\---



## Phase 8 - Crop Lifecycle



Build:



\- Crop registration

\- Crop variety

\- Sowing record

\- Crop stage

\- Expected harvest

\- Harvest record

\- Yield record

\- Crop history



Future:



\- Crop calendar

\- Crop rotation



Relevant Feature IDs:



\- AGROVA-KHET-011 to AGROVA-KHET-020



\---



## Phase 9 - Soil and Water



Build long-term:



### Soil



\- Soil profile

\- Soil tests

\- Soil reports

\- Nutrients

\- pH

\- Organic matter

\- Soil health history

\- Nutrient balance intelligence



### Water



\- Water source

\- Irrigation source

\- Irrigation events

\- Irrigation schedule

\- Water availability

\- Crop water requirement

\- Water stress

\- Waterlogging

\- Drainage

\- Seasonal water risk



Relevant Feature IDs:



\- AGROVA-KHET-021 to AGROVA-KHET-038



\---



## Phase 10 - Pest and Crop Disease



Build:



\- Pest observations

\- Crop disease observations

\- Crop symptoms

\- Crop photo observations

\- Pest / disease history

\- Risk assessment

\- Expert escalation



Relevant Feature IDs:



\- AGROVA-KHET-039 to AGROVA-KHET-045



Principle:



Farmer observation

\-> Context

\-> Possible causes

\-> Risk

\-> Action

\-> Expert escalation when necessary



Never present uncertain AI classification as confirmed diagnosis.



\---



## Phase 11 - Farm Resources



Build a generic resource model.



Resources include:



\- Feed

\- Fodder

\- Seed

\- Fertilizer

\- Medicine

\- Vaccine

\- Water

\- Labour

\- Equipment

\- Crop residue

\- Manure

\- Inventory



Relevant Feature IDs:



\- AGROVA-RES-001 to AGROVA-RES-013



\---



## Phase 12 - Farm Activity Engine



Create a generic Farm Activity model.



Activity types:



\- Animal

\- Crop

\- Feeding

\- Irrigation

\- Treatment

\- Sowing

\- Harvest

\- Resource

\- Other



Include:



\- Activity timeline

\- Entity association

\- Date/time

\- Source

\- Actor

\- Metadata



Relevant Feature IDs:



\- AGROVA-ACT-001 to AGROVA-ACT-011



This becomes an important foundation for Farm Memory and Farm Intelligence.



\---



## Phase 13 - Tasks and Reminders



Build:



\- Farm tasks

\- Due dates

\- Priority

\- Completion

\- Animal-linked tasks

\- Field-linked tasks

\- Reminder engine



Future:



\- Recurring tasks

\- Weather-generated tasks

\- Context-generated tasks



Relevant Feature IDs:



\- AGROVA-TASK-001 to AGROVA-TASK-010



\---



## Phase 14 - Weather and Risk



Build:



\- Current weather

\- Forecast

\- Rainfall

\- Temperature

\- Humidity

\- Weather warnings



Future:



\- Wind

\- Historical weather

\- Flood risk

\- Drought risk

\- Heat risk

\- Waterlogging risk

\- Animal heat stress

\- Feed / water shortage risk



Relevant Feature IDs:



\- AGROVA-WEATHER-001 to AGROVA-WEATHER-014



Core product philosophy:



Weather

\-> Risk

\-> Action



Not:



Weather

\-> Raw numbers



\---



## Phase 15 - Farm Context and Intelligence



Create the live Farm State.



The system should understand:



\- Farmer

\- Farm

\- Animals

\- Animal health

\- Milk

\- Fields

\- Crops

\- Soil

\- Water

\- Resources

\- Activities

\- Tasks

\- Weather

\- Risks

\- Economics



Relevant Feature IDs:



\- AGROVA-INT-001

\- AGROVA-INT-002

\- AGROVA-INT-003

\- AGROVA-INT-005

\- AGROVA-INT-006

\- AGROVA-INT-008

\- AGROVA-INT-009



Future:



\- Farm Memory

\- Farm Priority Engine

\- Knowledge Versioning



\---



## Phase 16 - Conversational Agrova



Build:



\- Text conversation

\- Intent detection

\- Context retrieval

\- Structured action generation

\- Action validation

\- Conversational record creation

\- Follow-up questions

\- Natural farmer language



Relevant Feature IDs:



\- AGROVA-CONV-001 to AGROVA-CONV-008



Conversation architecture:



Farmer

\-> Conversation Engine

\-> Intent

\-> Context Retrieval

\-> Structured Action

\-> Validation

\-> Domain Service

\-> Database

\-> Response



\---



## Phase 17 - Voice and Local Language



Future capabilities:



\- Voice input

\- Voice response

\- Hindi

\- Local languages

\- Dialect-aware language

\- Phone / IVR interaction



Relevant Feature IDs:



\- AGROVA-CONV-009

\- AGROVA-CONV-010

\- AGROVA-CONV-011

\- AGROVA-CONV-012

\- AGROVA-CONV-013



Principle:



Translation != Understanding



Agrova must understand local farmer vocabulary, crop names, animal terminology,

symptom descriptions, measurements and rural speech patterns.



\---



## Phase 18 - AI and Vision



Build safely:



\- AI provider abstraction

\- Animal photo analysis

\- Crop photo analysis

\- Pest classification

\- Crop disease classification

\- Confidence

\- Explainability

\- Expert escalation

\- AI evaluation

\- AI safety guardrails



Relevant Feature IDs:



\- AGROVA-AI-001 to AGROVA-AI-010



AI must communicate uncertainty.



AI output is an observation / possibility unless validated by the appropriate

domain authority.



\---



## Phase 19 - Farm Economics



Build:



\- Expense

\- Income

\- Production

\- Crop cost

\- Farm revenue

\- Farm profit



Future:



\- Animal cost

\- Milk revenue

\- Cost per animal

\- Cost per litre

\- Cost per field / area

\- Farm wealth intelligence

\- Avoidable cost detection



Relevant Feature IDs:



\- AGROVA-ECO-001 to AGROVA-ECO-013



Core chain:



Cost

\-> Production

\-> Revenue

\-> Profit

\-> Wealth



\---



## Phase 20 - Fodder Planner



Build long-term intelligence:



Animal requirements

\-> Existing resources

\-> Seasonal availability

\-> Fodder requirement

\-> Expected yield

\-> Area

\-> Seed

\-> Cost

\-> Practical feeding plan



Relevant Feature IDs:



\- AGROVA-FODDER-001 to AGROVA-FODDER-009



Local units must be configurable and validated.



\---



## Phase 21 - Farm Experience



Build the farmer-first experience.



Core dashboard:



GOOD MORNING



PASHU

KHET

MAUSAM

TODAY

ALERTS

FARM ECONOMICS



Relevant Feature IDs:



\- AGROVA-UX-001 to AGROVA-UX-012



Principle:



The dashboard should answer:



"What matters to me today?"



not:



"How many features does the application have?"



\---



## Phase 22 - Farm Ecosystem



Future ecosystem:



\- Government integrations

\- Livestock interoperability

\- Weather integration

\- Agricultural knowledge integration

\- Lab network

\- Government schemes

\- Marketplace

\- Market intelligence

\- Farm finance

\- Insurance

\- Farmer community

\- Machinery rental

\- Workforce management

\- Emergency farm mode



Relevant Feature IDs:



\- AGROVA-ECO-014 to AGROVA-ECO-027



External integrations must remain behind provider / adapter interfaces.



\---



## Phase 23 - GIS and Satellite



Future:



\- GIS

\- Field mapping

\- Satellite intelligence

\- Spatial farm state

\- Crop monitoring

\- Environmental intelligence



Relevant Feature IDs:



\- AGROVA-ADV-003

\- AGROVA-ADV-004



\---



## Phase 24 - IoT and Wearables



Future:



\- IoT integration

\- Sensors

\- Farm telemetry

\- Animal monitoring

\- Wearable integration



Relevant Feature IDs:



\- AGROVA-ADV-005

\- AGROVA-ADV-006



\---



## Phase 25 - Farm Digital Twin



Future live farm-state representation.



The Digital Twin represents:



\- Animals

\- Crops

\- Fields

\- Soil

\- Water

\- Weather

\- Resources

\- Activities

\- Health

\- Productivity

\- Cost

\- Risk

\- Tasks



Relevant Feature ID:



\- AGROVA-ADV-002



The Digital Twin does not require a 3D representation.



The primary objective is a continuously updated digital representation of the

real farm.



\---



## Phase 26 - Predictive Farm Intelligence



Future:



\- Predictive farm intelligence

\- Scenario planning

\- Possible future risk modeling

\- Farm optimization



Relevant Feature IDs:



\- AGROVA-ADV-001

\- AGROVA-ADV-007

\- AGROVA-ADV-008

\- AGROVA-ADV-009



Principle:



Do not pretend to predict the future with certainty.



Help the farmer prepare for possible futures.



\---



## Phase 27 - Ultimate Agrova



Ultimate product question:



> Given everything happening on this particular farm,

> what should the farmer do next?



The final system should combine:



Farm State

\+ History

\+ Resources

\+ Weather

\+ Risk

\+ Health

\+ Crop State

\+ Animal State

\+ Economics

\+ Knowledge

\+ Farmer Observations

\+ Expert Input



to help the farmer make better decisions.



\---



# 6. Two-Month MVP Execution Roadmap



## MVP Objective



The MVP must demonstrate one coherent Agrova experience.



The goal is NOT to build the entire long-term Agrova vision.



The goal is to build a real Farm OS foundation that proves the core concept.



\---



## Week 1 - Foundation



Build:



\- Repository structure

\- Spring Boot project

\- Angular project

\- PostgreSQL

\- Flyway

\- Environment configuration

\- Application profiles

\- Global error handling

\- Validation

\- Logging

\- Actuator

\- Core architecture

\- API conventions

\- Security foundation

\- Git workflow



Documentation:



\- Requirements

\- Architecture

\- API conventions

\- Database conventions

\- Security baseline



\---



## Week 2 - Identity and Farm



Build:



\- Agrova User

\- Registration

\- Login

\- Session management

\- Authorization

\- Farm ownership

\- Farmer profile

\- Farm registration

\- Farm location

\- Farm access permissions

\- Dashboard shell



Google Sign-In:



\- Production-enabled architecture

\- Local disabled by configuration

\- Secure provider abstraction

\- Explicit account linking



\---



## Week 3 - Pashu Foundation



Build:



\- Animal registration

\- Animal profile

\- Animal ID

\- Species

\- Breed

\- Sex

\- DOB / age

\- Identification

\- Photo

\- Ownership

\- Status

\- Animal list

\- Animal overview

\- Animal timeline



\---



## Week 4 - Pashu Health



Build:



\- Health observation

\- Symptoms

\- Health events

\- Treatment

\- Medicine record

\- Vet visit

\- Prescription attachment

\- Health timeline

\- Vaccination record

\- Vaccination schedule

\- Due tracking



\---



## Week 5 - Khet



Build:



\- Field registration

\- Field ID

\- Location

\- Area

\- Local unit

\- Standard unit

\- Soil profile

\- Water source

\- Crop registration

\- Crop variety

\- Sowing

\- Crop stage

\- Expected harvest

\- Crop history



\---



## Week 6 - Resources and Activities



Build:



\- Resource registry

\- Feed

\- Fodder

\- Seed

\- Fertilizer

\- Medicine

\- Water

\- Generic Farm Activity

\- Animal activity

\- Crop activity

\- Feeding activity

\- Irrigation activity

\- Treatment activity

\- Sowing activity

\- Harvest activity



\---



## Week 7 - Tasks, Weather and Risk



Build:



\- Farm tasks

\- Due dates

\- Priority

\- Completion

\- Animal-linked tasks

\- Field-linked tasks

\- Reminder engine

\- Current weather

\- Forecast

\- Rainfall

\- Temperature

\- Humidity

\- Weather warning



First intelligence chain:



Weather

\-> Risk

\-> Task



\---



## Week 8 - Farm Context and Dashboard



Connect:



Pashu

\+

Khet

\+

Resources

\+

Activities

\+

Tasks

\+

Weather



Create:



\- Current farm state

\- Dashboard read model

\- Good Morning dashboard

\- Today's priorities

\- Pashu summary

\- Khet summary

\- Weather summary

\- Task summary

\- Alerts



This is the first point where Agrova should begin to feel like a

Farm Operating System rather than a collection of CRUD screens.



\---



## Week 9 - Conversational Agrova



Build:



\- Conversation API

\- Intent detection

\- Context retrieval

\- Structured action

\- Validation

\- Domain service execution

\- Follow-up questions

\- Conversational record creation



Example:



Farmer:



"Meri gaay aaj kam doodh de rahi hai."



Agrova:



\- identifies the animal if possible

\- retrieves recent milk history

\- checks recent health/activity context

\- asks only useful follow-up questions

\- does not invent a diagnosis



\---



## Week 10 - AI, Economics and MVP Polish



Build initial:



\- AI provider abstraction

\- Basic image upload

\- Basic AI observation

\- Confidence

\- Explainability

\- Expert escalation pathway



Economics:



\- Expense

\- Income

\- Production

\- Basic revenue

\- Basic profit



Then:



\- Security hardening

\- Authorization audit

\- Ownership audit

\- API performance

\- Database indexes

\- N+1 review

\- Payload optimization

\- Error states

\- Loading states

\- Empty states

\- Responsive UI

\- Testing

\- Deployment



\---



# 7. MVP Vertical Slice



The MVP must support this complete journey:



Farmer

\-> Create account

\-> Create farm

\-> Add animal

\-> Record animal health

\-> Record vaccination

\-> Record milk

\-> Add field

\-> Add crop

\-> Record field activity

\-> Record resource

\-> Record expense

\-> View weather

\-> Receive task / alert

\-> View farm dashboard

\-> Ask Agrova a question

\-> Agrova retrieves farm context

\-> Agrova responds



This is the minimum coherent Agrova experience.



\---



# 8. MVP vs Long-Term Scope



## MVP



\- Identity

\- Security

\- Farmer

\- Farm

\- Pashu foundation

\- Pashu health

\- Vaccination

\- Milk

\- Khet foundation

\- Crop lifecycle

\- Resources

\- Activities

\- Tasks

\- Weather

\- Basic risk

\- Farm context

\- Dashboard

\- Conversational Agrova

\- Basic economics

\- Basic AI abstraction



## Long-Term



\- Advanced breeding

\- Advanced nutrition

\- Fodder intelligence

\- Expert network

\- Lab network

\- Advanced AI vision

\- Local dialect intelligence

\- Phone / IVR

\- Marketplace

\- Finance

\- Insurance

\- Government ecosystem

\- GIS

\- Satellite

\- IoT

\- Wearables

\- Digital Twin

\- Predictive intelligence

\- Scenario planning

\- Farm optimization



Long-term features must remain preserved in the Feature Registry even when

they are not part of the MVP.



\---



# 9. Feature Selection Rules



A feature may enter the current implementation window only when:



1\. It has a Feature ID.

2\. Requirements are understood.

3\. Dependencies are identified.

4\. Security impact is understood.

5\. Data model is understood.

6\. API contract is understood.

7\. Testing strategy exists.

8\. It fits the current implementation window.

9\. It contributes to the MVP or a required foundation.



A new idea must not silently interrupt an active sprint.



New idea:



Idea

\-> Register

\-> Evaluate

\-> Dependency Check

\-> Value / Risk Assessment

\-> Roadmap Placement

\-> Schedule



\---



# 10. Dependency Principles



Examples:



Authentication

\-> Farmer

\-> Farm

\-> Farm Ownership

\-> Animals / Fields



Animal

\-> Animal Health

\-> Vaccination

\-> Milk

\-> Animal Economics



Field

\-> Crop

\-> Crop Activity

\-> Weather Risk

\-> Crop Economics



Resources

\-> Activities

\-> Economics



Activities

\-> Farm Timeline

\-> Farm Context



Weather

\-> Risk

\-> Tasks

\-> Farm Context



Farm Context

\-> Conversation

\-> Intelligence



Farm State

\-> Digital Twin

\-> Predictive Intelligence



\---



# 11. Definition of Done



A feature is not complete merely because the UI works.



Every production-ready feature should satisfy:



\- Feature ID

\- Requirement

\- Acceptance criteria

\- Dependencies documented

\- Data model

\- API contract

\- Backend implementation

\- Validation

\- Authorization

\- Ownership checks

\- UI

\- Loading state

\- Empty state

\- Error state

\- Unit tests

\- Integration tests

\- E2E tests where appropriate

\- Security review

\- Logging

\- Observability

\- Performance review

\- Documentation

\- Feature Registry updated

\- Roadmap status updated



\---



# 12. Release Strategy



## Milestone 0



Repository and product foundation.



## Milestone 1



Secure Farmer + Farm foundation.



## Milestone 2



Pashu foundation.



## Milestone 3



Pashu health and vaccination.



## Milestone 4



Khet and Crop foundation.



## Milestone 5



Resources and Activities.



## Milestone 6



Tasks and Weather.



## Milestone 7



Farm Context and Dashboard.



## Milestone 8



Conversational Agrova.



## Milestone 9



Economics + AI + MVP hardening.



## MVP Release



Secure, testable, deployable Agrova MVP.



\---



# 13. Roadmap Governance



This roadmap is a living document.



When new capabilities are discovered:



DO NOT:



\- silently replace existing features

\- delete long-term capabilities

\- disrupt current implementation without evaluation

\- change Feature IDs



DO:



\- register the idea

\- check for duplicates

\- identify dependencies

\- assess value

\- assess risk

\- assign priority

\- place it in the correct roadmap phase

\- update the roadmap deliberately



The Feature Registry preserves WHAT exists.



The Roadmap preserves WHEN and HOW it is built.



\---



# 14. Core Agrova North Star



Agrova should progressively move from:



Record Keeping

\-> Farm Awareness

\-> Farm Context

\-> Farm Intelligence

\-> Farm Decision Support

\-> Farm Optimization



The ultimate question remains:



> Given everything happening on this particular farm,

> what should the farmer do next?



\---



# 15. Current Roadmap Status



Current date:



04 September 2026



Current milestone:



Product Foundation



Completed:



\- Repository

\- GitHub

\- Git configuration

\- .gitignore

\- Environment template

\- README

\- Feature Registry



Current task:



Master Roadmap



Next:



Requirements



After Requirements:



Architecture

\-> API Contracts

\-> Database Design

\-> Security

\-> Test Strategy

\-> Engineering Foundation



Current implementation status:



NOT STARTED



MVP target:



October / November 2026



Long-term Agrova vision:



Preserved beyond MVP
