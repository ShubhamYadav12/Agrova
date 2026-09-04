# Agrova Feature Registry

## Purpose

The Feature Registry is the single source of truth for all Agrova
features and capabilities.

Every feature must have:

- A unique Feature ID
- A product area
- A clear purpose
- A priority
- A lifecycle status

No feature should be implemented without first being registered.

New ideas must be added to the registry or IDEA_BACKLOG.md before
implementation.

---

## Feature Lifecycle

Idea
-> Registered
-> Evaluated
-> Planned
-> Scheduled
-> In Development
-> Testing
-> Released

A feature may also move to:

- Deferred
- Rejected

---

## Status Definitions

### Proposed

The feature has been identified but has not yet been evaluated.

### Planned

The feature has been evaluated and accepted into the long-term plan.

### Scheduled

The feature has been assigned to a specific implementation window.

### In Development

Engineering implementation is actively in progress.

### Testing

Implementation is complete and the feature is undergoing validation.

### Released

The feature is available in a released Agrova version.

### Deferred

The feature is valid but intentionally postponed.

### Rejected

The feature was evaluated and intentionally rejected.

---

## Priority Definitions

### P0 - Critical

Required for security, platform integrity, or the core MVP.

### P1 - High

Important for the MVP or core Agrova experience.

### P2 - Medium

Important capability planned after the core MVP.

### P3 - Future

Long-term capability or ecosystem expansion.

---

## Feature ID Convention

Format:

AGROVA-{AREA}-{NUMBER}

Examples:

- AGROVA-AUTH-001
- AGROVA-FARM-001
- AGROVA-PASHU-001
- AGROVA-KHET-001
- AGROVA-INT-001

Feature IDs are permanent and must not be reused.

---

# Feature Registry

## Authentication and Identity

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-AUTH-001 | Authentication | Agrova User Identity | P0 | Planned |
| AGROVA-AUTH-002 | Authentication | User Registration | P0 | Planned |
| AGROVA-AUTH-003 | Authentication | User Login | P0 | Planned |
| AGROVA-AUTH-004 | Authentication | Session Management | P0 | Planned |
| AGROVA-AUTH-005 | Authentication | Authorization and RBAC | P0 | Planned |
| AGROVA-AUTH-006 | Authentication | Farm Ownership and Access Control | P0 | Planned |
| AGROVA-AUTH-007 | Authentication | Google Sign-In | P1 | Planned |
| AGROVA-AUTH-008 | Authentication | Email and Password Authentication | P0 | Planned |
| AGROVA-AUTH-009 | Authentication | Phone and OTP Authentication | P2 | Proposed |
| AGROVA-AUTH-010 | Authentication | Authentication Provider Linking | P1 | Planned |
| AGROVA-AUTH-011 | Authentication | Account Recovery | P1 | Planned |
| AGROVA-AUTH-012 | Authentication | Session Revocation | P1 | Planned |
| AGROVA-AUTH-013 | Authentication | Authentication and Security Audit Events | P0 | Planned |
| AGROVA-AUTH-014 | Authentication | Consent and Privacy Management | P0 | Planned |

---

## Farmer and Farm

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-FARM-001 | Farm | Farmer Profile | P0 | Planned |
| AGROVA-FARM-002 | Farm | Farm Registration | P0 | Planned |
| AGROVA-FARM-003 | Farm | Farm Location | P0 | Planned |
| AGROVA-FARM-004 | Farm | Farm Members | P1 | Planned |
| AGROVA-FARM-005 | Farm | Farm Access Permissions | P0 | Planned |
| AGROVA-FARM-006 | Farm | Farm History | P1 | Planned |
| AGROVA-FARM-007 | Farm | Farm Dashboard | P1 | Planned |
| AGROVA-FARM-008 | Farm | Farm Profile and Configuration | P1 | Planned |
| AGROVA-FARM-009 | Farm | Farm Documents | P2 | Proposed |
| AGROVA-FARM-010 | Farm | Farm Memory | P2 | Proposed |

---

## Pashu - Animal Management

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-PASHU-001 | Pashu | Animal Registration | P1 | Planned |
| AGROVA-PASHU-002 | Pashu | Animal Profile | P1 | Planned |
| AGROVA-PASHU-003 | Pashu | Animal ID and Identification | P1 | Planned |
| AGROVA-PASHU-004 | Pashu | Animal Photo | P1 | Planned |
| AGROVA-PASHU-005 | Pashu | Animal Ownership | P1 | Planned |
| AGROVA-PASHU-006 | Pashu | Animal Acquisition Record | P2 | Proposed |
| AGROVA-PASHU-007 | Pashu | Animal Transfer and Sale History | P2 | Proposed |
| AGROVA-PASHU-008 | Pashu | Animal Status | P1 | Planned |
| AGROVA-PASHU-009 | Pashu | Animal Location | P2 | Proposed |
| AGROVA-PASHU-010 | Pashu | Parentage and Pedigree | P2 | Proposed |
| AGROVA-PASHU-011 | Pashu | Animal Passport / Lifetime Record | P2 | Proposed |
| AGROVA-PASHU-012 | Pashu | Animal Timeline | P1 | Planned |
| AGROVA-PASHU-013 | Pashu | Multi-Species Livestock Support | P1 | Planned |

---

## Pashu - Health

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-PASHU-014 | Pashu Health | Health Observation | P1 | Planned |
| AGROVA-PASHU-015 | Pashu Health | Symptoms and Observations | P1 | Planned |
| AGROVA-PASHU-016 | Pashu Health | Health Event | P1 | Planned |
| AGROVA-PASHU-017 | Pashu Health | Diagnosis Record | P1 | Planned |
| AGROVA-PASHU-018 | Pashu Health | Treatment Record | P1 | Planned |
| AGROVA-PASHU-019 | Pashu Health | Medicine Record | P1 | Planned |
| AGROVA-PASHU-020 | Pashu Health | Vet Visit Record | P1 | Planned |
| AGROVA-PASHU-021 | Pashu Health | Prescription Record | P1 | Planned |
| AGROVA-PASHU-022 | Pashu Health | Lab Test Record | P2 | Proposed |
| AGROVA-PASHU-023 | Pashu Health | Lab Report Storage | P2 | Proposed |
| AGROVA-PASHU-024 | Pashu Health | Health History | P1 | Planned |
| AGROVA-PASHU-025 | Pashu Health | Recovery and Health Status | P1 | Planned |
| AGROVA-PASHU-026 | Pashu Health | Animal Health Timeline | P1 | Planned |

---

## Pashu - Preventive Care and Vaccination

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-PASHU-027 | Preventive Care | Vaccination Record | P1 | Planned |
| AGROVA-PASHU-028 | Preventive Care | Vaccination Schedule | P1 | Planned |
| AGROVA-PASHU-029 | Preventive Care | Vaccination Due Tracking | P1 | Planned |
| AGROVA-PASHU-030 | Preventive Care | Missed Vaccination Tracking | P1 | Planned |
| AGROVA-PASHU-031 | Preventive Care | Preventive Care Schedule | P2 | Proposed |
| AGROVA-PASHU-032 | Preventive Care | Animal Health Check Protocol | P2 | Proposed |
| AGROVA-PASHU-033 | Preventive Care | Health Check History | P2 | Proposed |

---

## Pashu - Breeding and Reproduction

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-PASHU-034 | Breeding | Heat Observation | P2 | Proposed |
| AGROVA-PASHU-035 | Breeding | Breeding Event | P2 | Proposed |
| AGROVA-PASHU-036 | Breeding | Artificial Insemination Record | P2 | Proposed |
| AGROVA-PASHU-037 | Breeding | Pregnancy Record | P2 | Proposed |
| AGROVA-PASHU-038 | Breeding | Expected Calving Tracking | P2 | Proposed |
| AGROVA-PASHU-039 | Breeding | Calving Record | P2 | Proposed |
| AGROVA-PASHU-040 | Breeding | Calf Record | P2 | Proposed |
| AGROVA-PASHU-041 | Breeding | Reproductive Health History | P2 | Proposed |
| AGROVA-PASHU-042 | Breeding | Breeding Reminders | P2 | Proposed |
| AGROVA-PASHU-043 | Breeding | Reproductive Risk Analytics | P3 | Proposed |

---

## Pashu - Nutrition and Feed

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-PASHU-044 | Nutrition | Feed Record | P1 | Planned |
| AGROVA-PASHU-045 | Nutrition | Green Fodder Record | P1 | Planned |
| AGROVA-PASHU-046 | Nutrition | Dry Fodder Record | P1 | Planned |
| AGROVA-PASHU-047 | Nutrition | Crop Residue Feed Record | P2 | Proposed |
| AGROVA-PASHU-048 | Nutrition | Animal Feed Requirement | P2 | Proposed |
| AGROVA-PASHU-049 | Nutrition | Feed Inventory | P2 | Proposed |
| AGROVA-PASHU-050 | Nutrition | Feed Planning | P2 | Proposed |
| AGROVA-PASHU-051 | Nutrition | Seasonal Feed Planning | P2 | Proposed |

---

## Pashu - Milk and Production

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-PASHU-052 | Milk | Daily Milk Record | P1 | Planned |
| AGROVA-PASHU-053 | Milk | Morning Milk Record | P1 | Planned |
| AGROVA-PASHU-054 | Milk | Evening Milk Record | P1 | Planned |
| AGROVA-PASHU-055 | Milk | Animal-wise Milk Production | P1 | Planned |
| AGROVA-PASHU-056 | Milk | Farm Milk Summary | P1 | Planned |
| AGROVA-PASHU-057 | Milk | Milk Production History | P1 | Planned |
| AGROVA-PASHU-058 | Milk | Milk Trend Analysis | P2 | Proposed |
| AGROVA-PASHU-059 | Milk | Sudden Production Decline Detection | P2 | Proposed |
| AGROVA-PASHU-060 | Milk | Milk Economics | P2 | Proposed |

---

## Khet - Field Management

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-KHET-001 | Khet | Field Registration | P1 | Planned |
| AGROVA-KHET-002 | Khet | Field ID | P1 | Planned |
| AGROVA-KHET-003 | Khet | Field Location | P1 | Planned |
| AGROVA-KHET-004 | Khet | Field Boundary | P2 | Proposed |
| AGROVA-KHET-005 | Khet | Field Area | P1 | Planned |
| AGROVA-KHET-006 | Khet | Local Land Units | P1 | Planned |
| AGROVA-KHET-007 | Khet | Standard Land Units | P1 | Planned |
| AGROVA-KHET-008 | Khet | Land Ownership / Lease | P2 | Proposed |
| AGROVA-KHET-009 | Khet | Field History | P1 | Planned |
| AGROVA-KHET-010 | Khet | Field Overview | P1 | Planned |

---

## Khet - Crop Lifecycle

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-KHET-011 | Crop | Crop Registration | P1 | Planned |
| AGROVA-KHET-012 | Crop | Crop Variety | P1 | Planned |
| AGROVA-KHET-013 | Crop | Sowing Record | P1 | Planned |
| AGROVA-KHET-014 | Crop | Crop Stage | P1 | Planned |
| AGROVA-KHET-015 | Crop | Crop Calendar | P2 | Proposed |
| AGROVA-KHET-016 | Crop | Expected Harvest | P1 | Planned |
| AGROVA-KHET-017 | Crop | Harvest Record | P1 | Planned |
| AGROVA-KHET-018 | Crop | Yield Record | P1 | Planned |
| AGROVA-KHET-019 | Crop | Crop History | P1 | Planned |
| AGROVA-KHET-020 | Crop | Crop Rotation | P2 | Proposed |

---

## Khet - Soil

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-KHET-021 | Soil | Soil Profile | P1 | Planned |
| AGROVA-KHET-022 | Soil | Soil Test Record | P2 | Proposed |
| AGROVA-KHET-023 | Soil | Soil Test Report | P2 | Proposed |
| AGROVA-KHET-024 | Soil | Soil Nutrient Record | P2 | Proposed |
| AGROVA-KHET-025 | Soil | Soil pH Record | P2 | Proposed |
| AGROVA-KHET-026 | Soil | Organic Matter Record | P2 | Proposed |
| AGROVA-KHET-027 | Soil | Soil Health History | P3 | Proposed |
| AGROVA-KHET-028 | Soil | Nutrient Balance Intelligence | P3 | Proposed |

---

## Khet - Water and Irrigation

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-KHET-029 | Water | Water Source | P1 | Planned |
| AGROVA-KHET-030 | Water | Irrigation Source | P1 | Planned |
| AGROVA-KHET-031 | Water | Irrigation Event | P1 | Planned |
| AGROVA-KHET-032 | Water | Irrigation Schedule | P2 | Proposed |
| AGROVA-KHET-033 | Water | Water Availability | P2 | Proposed |
| AGROVA-KHET-034 | Water | Crop Water Requirement | P2 | Proposed |
| AGROVA-KHET-035 | Water | Water Stress Detection | P3 | Proposed |
| AGROVA-KHET-036 | Water | Waterlogging Tracking | P2 | Proposed |
| AGROVA-KHET-037 | Water | Drainage Tracking | P2 | Proposed |
| AGROVA-KHET-038 | Water | Seasonal Water Risk | P3 | Proposed |

---

## Khet - Pest and Disease

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-KHET-039 | Crop Health | Pest Observation | P1 | Planned |
| AGROVA-KHET-040 | Crop Health | Crop Disease Observation | P1 | Planned |
| AGROVA-KHET-041 | Crop Health | Crop Symptom Record | P1 | Planned |
| AGROVA-KHET-042 | Crop Health | Crop Photo Observation | P1 | Planned |
| AGROVA-KHET-043 | Crop Health | Pest / Disease History | P2 | Proposed |
| AGROVA-KHET-044 | Crop Health | Pest Risk Assessment | P2 | Proposed |
| AGROVA-KHET-045 | Crop Health | Expert Escalation | P1 | Planned |

---

## Farm Resources

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-RES-001 | Resources | Resource Registry | P1 | Planned |
| AGROVA-RES-002 | Resources | Feed Resource | P1 | Planned |
| AGROVA-RES-003 | Resources | Fodder Resource | P1 | Planned |
| AGROVA-RES-004 | Resources | Seed Resource | P1 | Planned |
| AGROVA-RES-005 | Resources | Fertilizer Resource | P1 | Planned |
| AGROVA-RES-006 | Resources | Medicine Resource | P1 | Planned |
| AGROVA-RES-007 | Resources | Vaccine Resource | P2 | Proposed |
| AGROVA-RES-008 | Resources | Water Resource | P1 | Planned |
| AGROVA-RES-009 | Resources | Labour Resource | P2 | Proposed |
| AGROVA-RES-010 | Resources | Equipment Resource | P2 | Proposed |
| AGROVA-RES-011 | Resources | Crop Residue Resource | P2 | Proposed |
| AGROVA-RES-012 | Resources | Manure Resource | P2 | Proposed |
| AGROVA-RES-013 | Resources | Resource Inventory | P2 | Proposed |

---

## Farm Activities

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-ACT-001 | Activities | Generic Farm Activity | P0 | Planned |
| AGROVA-ACT-002 | Activities | Animal Activity | P1 | Planned |
| AGROVA-ACT-003 | Activities | Crop Activity | P1 | Planned |
| AGROVA-ACT-004 | Activities | Feeding Activity | P1 | Planned |
| AGROVA-ACT-005 | Activities | Irrigation Activity | P1 | Planned |
| AGROVA-ACT-006 | Activities | Treatment Activity | P1 | Planned |
| AGROVA-ACT-007 | Activities | Sowing Activity | P1 | Planned |
| AGROVA-ACT-008 | Activities | Harvest Activity | P1 | Planned |
| AGROVA-ACT-009 | Activities | Resource Activity | P2 | Proposed |
| AGROVA-ACT-010 | Activities | Other Farm Activity | P1 | Planned |
| AGROVA-ACT-011 | Activities | Activity Timeline | P1 | Planned |

---

## Tasks and Reminders

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-TASK-001 | Tasks | Farm Task | P1 | Planned |
| AGROVA-TASK-002 | Tasks | Task Due Date | P1 | Planned |
| AGROVA-TASK-003 | Tasks | Task Priority | P1 | Planned |
| AGROVA-TASK-004 | Tasks | Task Completion | P1 | Planned |
| AGROVA-TASK-005 | Tasks | Recurring Tasks | P2 | Proposed |
| AGROVA-TASK-006 | Tasks | Animal-linked Task | P1 | Planned |
| AGROVA-TASK-007 | Tasks | Field-linked Task | P1 | Planned |
| AGROVA-TASK-008 | Tasks | Weather-generated Task | P2 | Proposed |
| AGROVA-TASK-009 | Tasks | Context-generated Task | P2 | Proposed |
| AGROVA-TASK-010 | Tasks | Reminder Engine | P1 | Planned |

---

## Weather and Risk

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-WEATHER-001 | Weather | Current Weather | P1 | Planned |
| AGROVA-WEATHER-002 | Weather | Weather Forecast | P1 | Planned |
| AGROVA-WEATHER-003 | Weather | Rainfall Information | P1 | Planned |
| AGROVA-WEATHER-004 | Weather | Temperature | P1 | Planned |
| AGROVA-WEATHER-005 | Weather | Humidity | P1 | Planned |
| AGROVA-WEATHER-006 | Weather | Wind Information | P2 | Proposed |
| AGROVA-WEATHER-007 | Weather | Weather Warning | P1 | Planned |
| AGROVA-WEATHER-008 | Weather | Historical Weather | P2 | Proposed |
| AGROVA-WEATHER-009 | Weather | Flood Risk | P2 | Proposed |
| AGROVA-WEATHER-010 | Weather | Drought Risk | P2 | Proposed |
| AGROVA-WEATHER-011 | Weather | Heat Risk | P2 | Proposed |
| AGROVA-WEATHER-012 | Weather | Waterlogging Risk | P2 | Proposed |
| AGROVA-WEATHER-013 | Weather | Animal Heat Stress Risk | P2 | Proposed |
| AGROVA-WEATHER-014 | Weather | Feed and Water Shortage Risk | P3 | Proposed |

---

## Farm Context and Intelligence

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-INT-001 | Intelligence | Farmer Conversation Engine | P1 | Planned |
| AGROVA-INT-002 | Intelligence | Farm Context Engine | P1 | Planned |
| AGROVA-INT-003 | Intelligence | Current Farm State | P1 | Planned |
| AGROVA-INT-004 | Intelligence | Farm Memory | P2 | Proposed |
| AGROVA-INT-005 | Intelligence | Context-aware Recommendations | P1 | Planned |
| AGROVA-INT-006 | Intelligence | Risk-to-Action Engine | P1 | Planned |
| AGROVA-INT-007 | Intelligence | Farm Priority Engine | P2 | Proposed |
| AGROVA-INT-008 | Intelligence | Recommendation Explainability | P1 | Planned |
| AGROVA-INT-009 | Intelligence | Data Provenance | P0 | Planned |
| AGROVA-INT-010 | Intelligence | Knowledge Versioning | P1 | Proposed |

---

## Conversational Agrova

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-CONV-001 | Conversation | Text Conversation | P1 | Planned |
| AGROVA-CONV-002 | Conversation | Intent Detection | P1 | Planned |
| AGROVA-CONV-003 | Conversation | Context Retrieval | P1 | Planned |
| AGROVA-CONV-004 | Conversation | Structured Action Generation | P1 | Planned |
| AGROVA-CONV-005 | Conversation | Action Validation | P0 | Planned |
| AGROVA-CONV-006 | Conversation | Conversational Record Creation | P1 | Planned |
| AGROVA-CONV-007 | Conversation | Conversational Follow-up Questions | P1 | Planned |
| AGROVA-CONV-008 | Conversation | Natural Farmer Language | P1 | Planned |
| AGROVA-CONV-009 | Conversation | Voice Input | P2 | Proposed |
| AGROVA-CONV-010 | Conversation | Voice Response | P2 | Proposed |
| AGROVA-CONV-011 | Conversation | Local Language Support | P2 | Proposed |
| AGROVA-CONV-012 | Conversation | Dialect-aware Language | P3 | Proposed |
| AGROVA-CONV-013 | Conversation | Phone / IVR Interaction | P3 | Proposed |

---

## AI and Vision

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-AI-001 | AI | AI Provider Abstraction | P1 | Planned |
| AGROVA-AI-002 | AI | Animal Photo Analysis | P2 | Proposed |
| AGROVA-AI-003 | AI | Crop Photo Analysis | P2 | Proposed |
| AGROVA-AI-004 | AI | Pest Photo Classification | P2 | Proposed |
| AGROVA-AI-005 | AI | Crop Disease Classification | P2 | Proposed |
| AGROVA-AI-006 | AI | Observation Confidence | P1 | Planned |
| AGROVA-AI-007 | AI | AI Explainability | P1 | Planned |
| AGROVA-AI-008 | AI | Expert Escalation from AI | P1 | Planned |
| AGROVA-AI-009 | AI | AI Evaluation Framework | P1 | Planned |
| AGROVA-AI-010 | AI | AI Safety Guardrails | P0 | Planned |

---

## Experts and Labs

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-EXP-001 | Experts | Expert Profile | P2 | Proposed |
| AGROVA-EXP-002 | Experts | Expert Verification | P2 | Proposed |
| AGROVA-EXP-003 | Experts | Expert Search | P2 | Proposed |
| AGROVA-EXP-004 | Experts | Nearby Expert | P2 | Proposed |
| AGROVA-EXP-005 | Experts | Appointment | P2 | Proposed |
| AGROVA-EXP-006 | Experts | Consultation | P2 | Proposed |
| AGROVA-EXP-007 | Experts | Animal Record Sharing | P2 | Proposed |
| AGROVA-EXP-008 | Experts | Crop Record Sharing | P2 | Proposed |
| AGROVA-EXP-009 | Experts | Prescription and Follow-up | P2 | Proposed |
| AGROVA-LAB-001 | Labs | Lab Profile | P2 | Proposed |
| AGROVA-LAB-002 | Labs | Test Request | P2 | Proposed |
| AGROVA-LAB-003 | Labs | Sample Record | P2 | Proposed |
| AGROVA-LAB-004 | Labs | Lab Result | P2 | Proposed |
| AGROVA-LAB-005 | Labs | Digital Lab Report | P2 | Proposed |
| AGROVA-LAB-006 | Labs | Soil Testing Integration | P3 | Proposed |

---

## Farm Economics and Wealth

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-ECO-001 | Economics | Expense Record | P1 | Planned |
| AGROVA-ECO-002 | Economics | Income Record | P1 | Planned |
| AGROVA-ECO-003 | Economics | Production Record | P1 | Planned |
| AGROVA-ECO-004 | Economics | Animal Cost Tracking | P2 | Proposed |
| AGROVA-ECO-005 | Economics | Crop Cost Tracking | P1 | Planned |
| AGROVA-ECO-006 | Economics | Milk Revenue Tracking | P2 | Proposed |
| AGROVA-ECO-007 | Economics | Cost per Animal | P2 | Proposed |
| AGROVA-ECO-008 | Economics | Cost per Litre | P2 | Proposed |
| AGROVA-ECO-009 | Economics | Cost per Field / Area | P2 | Proposed |
| AGROVA-ECO-010 | Economics | Farm Revenue | P1 | Planned |
| AGROVA-ECO-011 | Economics | Farm Profit | P1 | Planned |
| AGROVA-ECO-012 | Economics | Farm Wealth Intelligence | P2 | Proposed |
| AGROVA-ECO-013 | Economics | Avoidable Cost Detection | P3 | Proposed |

---

## Fodder Planner

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-FODDER-001 | Fodder | Fodder Requirement Calculator | P2 | Proposed |
| AGROVA-FODDER-002 | Fodder | Animal-based Fodder Planning | P2 | Proposed |
| AGROVA-FODDER-003 | Fodder | Seasonal Fodder Planning | P2 | Proposed |
| AGROVA-FODDER-004 | Fodder | Green Fodder Planning | P2 | Proposed |
| AGROVA-FODDER-005 | Fodder | Fodder Yield Estimation | P2 | Proposed |
| AGROVA-FODDER-006 | Fodder | Fodder Area Calculation | P2 | Proposed |
| AGROVA-FODDER-007 | Fodder | Fodder Seed Requirement | P2 | Proposed |
| AGROVA-FODDER-008 | Fodder | Fodder Cost Planning | P2 | Proposed |
| AGROVA-FODDER-009 | Fodder | Local Unit Support | P2 | Proposed |

---

## Dashboard and Farm Experience

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-UX-001 | Experience | Good Morning Dashboard | P1 | Planned |
| AGROVA-UX-002 | Experience | Today's Priorities | P1 | Planned |
| AGROVA-UX-003 | Experience | Pashu Summary | P1 | Planned |
| AGROVA-UX-004 | Experience | Khet Summary | P1 | Planned |
| AGROVA-UX-005 | Experience | Weather Summary | P1 | Planned |
| AGROVA-UX-006 | Experience | Task Summary | P1 | Planned |
| AGROVA-UX-007 | Experience | Farm Economics Summary | P2 | Proposed |
| AGROVA-UX-008 | Experience | Alert Summary | P1 | Planned |
| AGROVA-UX-009 | Experience | One-screen Purposeful Read Model | P1 | Planned |
| AGROVA-UX-010 | Experience | Farmer-friendly UX | P0 | Planned |
| AGROVA-UX-011 | Experience | Low-bandwidth Experience | P2 | Proposed |
| AGROVA-UX-012 | Experience | Offline-friendly Experience | P2 | Proposed |

---

## Data, Privacy and Security

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-SEC-001 | Security | Authentication Security | P0 | Planned |
| AGROVA-SEC-002 | Security | Authorization Enforcement | P0 | Planned |
| AGROVA-SEC-003 | Security | Farm Data Isolation | P0 | Planned |
| AGROVA-SEC-004 | Security | Input Validation | P0 | Planned |
| AGROVA-SEC-005 | Security | Secret Management | P0 | Planned |
| AGROVA-SEC-006 | Security | Secure File Handling | P0 | Planned |
| AGROVA-SEC-007 | Security | Audit Logging | P0 | Planned |
| AGROVA-SEC-008 | Security | Data Encryption | P0 | Planned |
| AGROVA-SEC-009 | Security | Consent Management | P0 | Planned |
| AGROVA-SEC-010 | Security | Data Export | P1 | Proposed |
| AGROVA-SEC-011 | Security | Data Deletion | P1 | Proposed |
| AGROVA-SEC-012 | Security | Security Event Monitoring | P1 | Proposed |

---

## Platform and Integration

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-PLAT-001 | Platform | Provider Abstraction | P1 | Planned |
| AGROVA-PLAT-002 | Platform | External API Failure Isolation | P0 | Planned |
| AGROVA-PLAT-003 | Platform | Graceful Degradation | P0 | Planned |
| AGROVA-PLAT-004 | Platform | Observability | P0 | Planned |
| AGROVA-PLAT-005 | Platform | Application Metrics | P1 | Planned |
| AGROVA-PLAT-006 | Platform | Error Monitoring | P1 | Planned |
| AGROVA-PLAT-007 | Platform | API Performance Monitoring | P1 | Planned |
| AGROVA-PLAT-008 | Platform | Pagination | P1 | Planned |
| AGROVA-PLAT-009 | Platform | API Payload Optimization | P1 | Planned |
| AGROVA-PLAT-010 | Platform | Database Performance Optimization | P1 | Planned |

---

## Government and Data Ecosystem

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-ECO-014 | Ecosystem | Government Data Integration | P3 | Proposed |
| AGROVA-ECO-015 | Ecosystem | Livestock Data Interoperability | P3 | Proposed |
| AGROVA-ECO-016 | Ecosystem | Weather Data Integration | P1 | Planned |
| AGROVA-ECO-017 | Ecosystem | Agricultural Knowledge Integration | P2 | Proposed |
| AGROVA-ECO-018 | Ecosystem | Lab Network Integration | P3 | Proposed |
| AGROVA-ECO-019 | Ecosystem | Government Scheme Integration | P3 | Proposed |

---

## Future Farm Ecosystem

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-ECO-020 | Ecosystem | Farm Marketplace | P3 | Proposed |
| AGROVA-ECO-021 | Ecosystem | Market Intelligence | P3 | Proposed |
| AGROVA-ECO-022 | Ecosystem | Farm Finance | P3 | Proposed |
| AGROVA-ECO-023 | Ecosystem | Insurance Integration | P3 | Proposed |
| AGROVA-ECO-024 | Ecosystem | Farmer Community | P3 | Proposed |
| AGROVA-ECO-025 | Ecosystem | Machinery Rental | P3 | Proposed |
| AGROVA-ECO-026 | Ecosystem | Workforce Management | P3 | Proposed |
| AGROVA-ECO-027 | Ecosystem | Emergency Farm Mode | P3 | Proposed |

---

## Advanced Farm Intelligence

| Feature ID | Product Area | Feature | Priority | Status |
|---|---|---|---|---|
| AGROVA-ADV-001 | Advanced Intelligence | Predictive Farm Intelligence | P3 | Proposed |
| AGROVA-ADV-002 | Advanced Intelligence | Farm Digital Twin | P3 | Proposed |
| AGROVA-ADV-003 | Advanced Intelligence | GIS Integration | P3 | Proposed |
| AGROVA-ADV-004 | Advanced Intelligence | Satellite Intelligence | P3 | Proposed |
| AGROVA-ADV-005 | Advanced Intelligence | IoT Integration | P3 | Proposed |
| AGROVA-ADV-006 | Advanced Intelligence | Wearable Integration | P3 | Proposed |
| AGROVA-ADV-007 | Advanced Intelligence | Farm Optimization Engine | P3 | Proposed |
| AGROVA-ADV-008 | Advanced Intelligence | Scenario Planning | P3 | Proposed |
| AGROVA-ADV-009 | Advanced Intelligence | Possible Future Risk Modeling | P3 | Proposed |

---

# Registry Rules

1. Every implemented feature must have a Feature ID.
2. Feature IDs are permanent and must not be reused.
3. New ideas must not silently change the committed roadmap.
4. New ideas must first be registered or added to IDEA_BACKLOG.md.
5. Existing features must be checked for duplicates before creating a new feature.
6. Dependencies must be evaluated before scheduling implementation.
7. Security requirements apply to every feature.
8. Data ownership and authorization must be considered for every feature involving farmer data.
9. AI must not directly mutate the database.
10. External provider failures must not break unrelated core farm functionality.
11. A feature is not complete until its Definition of Done is satisfied.
12. The registry must be updated when feature status changes.
13. Released features must have corresponding release documentation.
14. Deferred features remain in the registry and must not be forgotten.
15. Rejected features should retain their historical record and rationale.

---

# Feature Definition of Done

A feature is considered complete only when applicable requirements are satisfied:

- Requirement documented
- Acceptance criteria defined
- Feature ID assigned
- Dependencies identified
- Data model defined
- API contract defined
- Backend implementation completed
- Validation implemented
- Authorization implemented
- UI implemented where applicable
- Loading state handled
- Empty state handled
- Error state handled
- Unit tests completed
- Integration tests completed where applicable
- End-to-end tests completed where applicable
- Security reviewed
- Logging implemented where appropriate
- Monitoring implemented where appropriate
- Performance reviewed
- Documentation updated
- Feature Registry updated
- Roadmap status updated
- Release recorded

---

# MVP Boundary

The initial Agrova MVP is expected to prioritize:

- Authentication
- Farmer
- Farm
- Farm ownership and security
- Animal registration
- Animal profile
- Animal health
- Vaccination
- Milk records
- Field registration
- Crop records
- Farm activities
- Farm resources
- Tasks
- Weather
- Basic risk-to-action intelligence
- Farm context
- Conversational Agrova
- Basic farm economics

Long-term features remain registered even when they are outside the initial MVP.

---

# Guiding Principle

Agrova should not make the farmer adapt to the software.

The software should adapt to the farmer's real farm life.

The ultimate product question is:

> Given everything happening on this particular farm, what should the farmer do next?