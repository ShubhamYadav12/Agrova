# Agrova Architecture

## 1. Architecture Overview

Agrova is designed as a farmer-centric Farm Operating System.

The architecture follows the principle:

> The farmer should not have to adapt to the software. The software should adapt to the farmer's day.

Agrova connects farm identity, farm resources, observations, evidence, knowledge, intelligence, recommendations, actions, outcomes, and farm memory into one evolving system.

### 1.1 Baseline Architecture

```text
                         FARMER
                            |
                        FARM OS
                            |
             +--------------+--------------+
             |                             |
          PASHU                           KHET
          Animals                          Crops
             |                             |
      Health/Feed/Milk              Soil/Water/Crop
      Vet/Breeding/Records          Weather/Pest
             |                             |
             +--------------+--------------+
                            |
                     FARM RESOURCES
                            |
                     FARM INTELLIGENCE
                            |
            +---------------+---------------+
            |               |               |
         Weather           AI            Experts
         Soil             Voice           Labs
         Water            Photos       Community
                            |
                            v
                        ECONOMICS
                            |
                         WEALTH


## 2. Architectural Principles

Agrova architecture is governed by the following principles.

### 2.1 Farmer-Centric Design

The system must adapt to the farmer's workflow, language, knowledge level, available devices, and daily routine.

Technology should reduce cognitive and operational burden rather than create additional work.

### 2.2 Farm as the Primary Context

Agrova should understand the particular farm before making recommendations.

Farm identity, fields, crops, animals, resources, activities, observations, weather, evidence, decisions, and outcomes form the farm context.

### 2.3 Observation Before Recommendation

Agrova should distinguish between:

- Farmer observation
- Measured evidence
- Professional assessment
- AI interpretation
- Recommendation

The system must not present an inference as a verified fact.

### 2.4 Evidence-Driven Intelligence

When available information is insufficient for a useful decision, Agrova should identify the information gap and request or obtain appropriate evidence.

Examples include:

- Crop or pest photographs
- Soil testing
- Water testing
- Weather information
- Expert assessment
- Historical farm records

### 2.5 Human-in-the-Loop Safety

AI assists the farmer and agricultural professionals but does not replace professional judgment where verification is required.

Recommendations must remain explainable, traceable, and appropriately qualified.

### 2.6 History Must Be Preserved

Current farm state must never destroy historical information.

Agrova should retain relevant history for crops, fields, animals, soil, weather, inputs, activities, harvests, yields, economics, decisions, recommendations, and outcomes.

### 2.7 Graceful Degradation

External providers must not become single points of failure for core farm records.

If weather, AI, maps, laboratory, or other external services are unavailable, Agrova should continue supporting unaffected core functionality.

### 2.8 Modular Evolution

Agrova should begin as a modular monolith with clear domain boundaries.

Modules must have explicit responsibilities and contracts so that individual components can evolve independently when scale or operational requirements justify further separation.

