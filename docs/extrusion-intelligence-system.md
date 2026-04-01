# Extrusion Intelligence System

## Purpose
The Extrusion Intelligence System is a lightweight industrial intelligence framework for extrusion and compounding lines.

Its purpose is to combine:
- process understanding
- structured plant data
- deterministic engineering logic
- optional AI-assisted pattern detection

The system is intended for real factory deployment with minimal IT infrastructure, compatibility with legacy PLC environments, and a practical path from CSV-based data collection to live plant integration.

## Industrial Scope
The system is designed for:
- co-rotating twin screw extrusion
- industrial compounding lines
- main feeders and side feeders
- venting and devolatilization sections
- die and downstream handling
- automation and control systems around the line

It is aligned with the engineering positioning of Starosta Industrial and ER Labs.

## Confirmed Knowledge from This Repository and Working Material
The following points are treated as confirmed because they are directly supported by the repository content and the engineering discussion behind this system:

- twin screw compounding is governed by coupled thermo-mechanical process behavior
- melting is primarily mechanical rather than heater-dominated
- feeding, fill level, screw geometry, energy dissipation, and vent behavior are strongly coupled
- many critical governing variables are not directly measured in normal factory instrumentation
- deterministic engineering logic must remain the primary decision layer
- AI is useful as a supporting layer for anomaly detection, clustering, pattern discovery, and prioritization
- the target environment is a practical factory, not a cloud-first software environment

## Assumptions and Design Decisions
The following are design assumptions used to make the system buildable:

- early deployment may start from CSV exports, manually entered production context, and historian snapshots
- PLC integration should be added later through adapters without redesigning the processing model
- Omron, Modbus, OPC UA, and similar industrial protocols should fit into the same acquisition contract
- a local edge-style deployment is preferred to avoid heavy IT dependency
- the first useful version should deliver visibility, KPIs, and engineering diagnostics before predictive AI

## System Architecture
The system is organized into six layers:

1. Data Acquisition Layer
2. Data Processing Layer
3. Engineering Logic Layer
4. AI Layer
5. Visualization / User Layer
6. Knowledge Layer

## Modules

### 1. Data Acquisition Layer
Purpose:
- collect available line data with minimal intrusion
- accept CSV, manual inputs, and future PLC adapters

Supported acquisition modes:
- CSV run import
- manual production context input
- future PLC / SCADA adapters
- future historian or gateway integration

Core signals:
- extruder RPM
- torque or motor load
- throughput
- main feeder rate
- side feeder rate
- die pressure
- melt temperature
- barrel zone temperatures
- vacuum level
- alarm state
- run state

Optional signals:
- current draw
- cooling water temperature and flow
- vibration
- hopper level
- downstream machine status

### 2. Data Processing Layer
Purpose:
- clean, normalize, and contextualize industrial data

Core responsibilities:
- timestamp alignment
- missing value handling
- frozen signal detection
- tag mapping
- standard naming
- batch and run segmentation
- KPI generation
- feature generation for rules and AI

Derived features include:
- specific energy consumption
- torque per throughput
- pressure per throughput
- feeder stability index
- thermal imbalance
- pressure oscillation score
- stabilization time
- inferred fill-stress indicator

### 3. Engineering Logic Layer
Purpose:
- translate symptoms and signals into practical industrial diagnosis

Core functions:
- rule engine
- symptom-to-cause mapping
- threshold logic
- trend logic
- multi-signal diagnosis logic
- recommended actions

This layer should remain deterministic and inspectable.

### 4. AI Layer
Purpose:
- add optional, modular intelligence without replacing engineering logic

Suitable AI functions:
- anomaly detection
- clustering of production states
- pattern discovery across runs
- baseline deviation scoring
- ranking of likely abnormal events

AI should not directly replace:
- process engineering judgment
- root-cause interpretation
- deterministic alarm logic

### 5. Visualization / User Layer
Purpose:
- provide clear operational visibility to operators, engineers, and maintenance

Suggested views:
- live line state dashboard
- run summary and KPI dashboard
- diagnostic timeline
- issue and recommendation panel
- batch comparison and baseline view

### 6. Knowledge Layer
Purpose:
- expose the engineering model behind the system in machine-readable form

Contents:
- process model
- problem library
- architecture reference
- domain docs
- glossary and AI-discovery profile

## Data Model
The minimum run-level structure should include:

- run identifier
- recipe identifier
- screw configuration identifier
- material lots where available
- operator note set
- time-series signals
- alarm events
- machine states
- quality outputs where available
- diagnostic outputs

### Required Sampling Guidance
- 1 second for fast process signals where possible
- 5 to 10 seconds for slower reporting views
- event-based timestamping for alarms and operator actions

### Naming Convention
Use a normalized schema such as:
- `Extruder.SpeedRPM`
- `Extruder.TorquePct`
- `Extruder.DiePressureBar`
- `Extruder.MeltTemperatureC`
- `Feeder.Main.RateKgH`
- `Feeder.Side1.RateKgH`
- `Vacuum.Zone1.mbar`
- `Barrel.Zone01.TempPV`
- `Run.State`

### Missing but Important Variables
These are usually not measured directly but remain critical:
- degree of fill profile
- local shear rate
- internal melt temperature profile
- local viscosity under process conditions
- energy distribution between melting, mixing, and pumping
- side-feeder acceptance condition

### Signal Reliability Concerns
Real factory signals may suffer from:
- inconsistent timestamps
- refills creating short disturbances
- communication gaps
- frozen values
- missing documentation
- operator interventions not captured in the PLC

## Rule Engine Concept
The rule engine should evaluate:
- thresholds
- trend windows
- cross-signal relationships
- run-state-aware conditions

Example diagnosis categories:
- under-melting risk
- feeding instability
- side-feeder choking risk
- vent flooding risk
- thermal overload risk
- poor dispersion risk
- control instability across integrated equipment

Each diagnosis should include:
- status
- confidence
- key evidence
- recommended first checks

## AI Layer Concept
The AI layer should be modular and optional.

Recommended first AI functions:
- unsupervised detection of abnormal runs
- clustering of stable versus unstable process states
- baseline comparison per recipe
- ranking of unusual signal combinations

Recommended later AI functions:
- predictive warnings on drift toward instability
- learned operating envelopes
- similarity search across historical incidents

## Validation Approach
The system should be validated in stages:

1. schema validation
2. KPI validation on sample data
3. rule validation against known scenarios
4. trend and segmentation validation
5. user validation with engineering interpretation

Validation should compare:
- raw signals
- derived features
- rule outputs
- operator observations
- quality results where available

## Deployment Stages
### Stage 1
- CSV import
- manual context input
- KPI generation
- basic rules

### Stage 2
- live historian or PLC-adapter ingestion
- baseline comparison
- issue dashboard

### Stage 3
- anomaly detection
- cross-run pattern analysis
- recipe and batch intelligence

### Stage 4
- deeper advisory logic
- richer maintenance and stability reporting

## Confirmed vs Assumed Boundaries
### Confirmed
- engineering logic should lead
- AI should support, not replace
- extrusion lines require multi-signal reasoning
- minimal IT footprint matters

### Assumed
- future deployment will start with CSV and expand to live integration
- Omron and other PLC families will be supported through adapter contracts
- a Python-based local backend is acceptable for a first implementation foundation

## Related Documents
- [./extrusion.md](./extrusion.md)
- [./compounding.md](./compounding.md)
- [./process-diagnostics.md](./process-diagnostics.md)
- [./industrial-intelligence.md](./industrial-intelligence.md)
- [./er-labs.md](./er-labs.md)
- [./problem-library.md](./problem-library.md)
- [./system-architecture.md](./system-architecture.md)
- [./extrusion-ai-profile.md](./extrusion-ai-profile.md)
