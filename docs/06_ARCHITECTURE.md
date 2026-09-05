# Agrova Architecture

1. Architecture Overview
   1.1 Baseline Architecture
   1.2 Architectural Direction

2. Architecture Goals
   2.1 Farmer-first
   2.2 Modular
   2.3 Secure
   2.4 Reliable
   2.5 Efficient APIs
   2.6 AI Cost Efficiency
   2.7 Data Isolation
   2.8 Testability
   2.9 Observability
   2.10 Evolution

3. System Architecture

4. Frontend Architecture

5. Backend Architecture
   5.1 Module Structure
   5.2 Module Responsibilities
   5.3 Dependency Rules

6. API Architecture
   6.1 REST
   6.2 JSON
   6.3 Purposeful Read Models
   6.4 Aggregation
   6.5 Pagination
   6.6 Error Handling

7. Data Architecture
   7.1 PostgreSQL
   7.2 Flyway
   7.3 Source of Truth
   7.4 Data Scope
   7.5 Provenance
   7.6 History

8. Farm Context Architecture

9. Evidence and Intelligence Architecture
   9.1 Evidence
   9.2 Knowledge
   9.3 Intelligence
   9.4 Recommendations
   9.5 Outcomes
   9.6 Farm Memory

10. AI Architecture
    10.1 AI Provider
    10.2 Persistent AI Results
    10.3 Cache
    10.4 Context-aware Reuse
    10.5 Invalidation
    10.6 AI Failure Isolation

11. Diagnostics Architecture

12. External Provider Architecture

13. Security Architecture
    13.1 Authentication
    13.2 Authorization
    13.3 Farm Isolation
    13.4 Resource Isolation
    13.5 Defense in Depth

14. Failure Isolation

15. Observability

16. Testing Architecture

17. MVP Architecture

18. Future Evolution
# Agrova Architecture

## 1. Architecture Overview

Agrova is designed as a farmer-first Farm Intelligence platform and Digital Operating System for the farm.

The architecture must support Agrova's long-term vision while remaining practical, secure, testable, maintainable, and deliverable by a small development team.

Agrova will begin as a modular monolith and evolve toward selectively separated services only when real operational, scaling, deployment, ownership, or reliability requirements justify that transition.

### 1.1 Baseline Architecture

The initial system architecture is:

```text
                         FARMER
                            |
                            v
                  Angular + TypeScript
                       FRONTEND
                            |
                        REST API
                            |
                            v
                 +-----------------------+
                 |     SPRING BOOT       |
                 |    MODULAR MONOLITH   |
                 |                       |
                 | Auth                  |
                 | Farmer                |
                 | Farm                  |
                 | Pashu                 |
                 | Khet                  |
                 | Resources             |
                 | Activities            |
                 | Tasks                 |
                 | Weather               |
                 | Conversation          |
                 | Intelligence          |
                 | Economics             |
                 +-----------+-----------+
                             |
                             v
                         PostgreSQL
                             |
                           Flyway