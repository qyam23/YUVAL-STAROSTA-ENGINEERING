# Problem Library

## Purpose
This file summarizes the main extrusion and compounding problems represented in the current machine-readable knowledge layer.

## Problems Covered

### 1. Unstable throughput in twin screw extrusion
- symptoms: oscillating output, torque hunting, pressure fluctuation
- hidden causes: fill instability, feed inconsistency, bad geometry-to-process fit
- measurable indicators: throughput, torque, pressure, feeder rates
- early warning: rising variability before major alarms

### 2. Feeding inconsistency and poor dosing stability
- symptoms: unstable line response, additive inconsistency, refill disturbance
- hidden causes: bridging, bulk density variation, poor intake, side-feed incompatibility
- measurable indicators: feeder rates, refill timing, throughput variability
- early warning: feeder trace instability

### 3. Poor dispersion and mixing instability
- symptoms: agglomerates, color streaking, weak quality repeatability
- hidden causes: wrong melting state, poor wetting, wrong mixing sequence
- measurable indicators: torque, pressure, melt temperature, QC outputs
- early warning: energy and pressure behavior diverging from normal recipe baseline

### 4. High scrap and quality variation
- symptoms: rejects, unstable quality, repeated manual intervention
- hidden causes: cross-line instability, poor process window definition, weak alarm logic
- measurable indicators: scrap rate, torque, pressure, alarm history, quality checks
- early warning: signal drift before off-spec output becomes visible

### 5. Control instability across integrated lines
- symptoms: nuisance alarms, poor coordination, stop-start behavior
- hidden causes: weak PLC structure, poor line-state logic, signal ambiguity
- measurable indicators: alarm history, machine states, throughput loss, operator actions
- early warning: repeated unstable transitions and rising alarm recurrence

### 6. Under-melting and incomplete melting
- symptoms: gels, specks, poor strand behavior, unstable pressure
- hidden causes: low effective melting energy, wrong sequence, excessive feed
- measurable indicators: torque, die pressure, melt temperature
- early warning: torque-pressure noise pattern before visible quality failure

### 7. Overheating and degradation risk
- symptoms: discoloration, black specks, odor, property loss
- hidden causes: excessive viscous dissipation, hold-up, hot spots
- measurable indicators: melt temperature, specific energy, torque
- early warning: rising SEC and temperature at constant recipe

### 8. Vent flooding and poor devolatilization
- symptoms: unstable vacuum, vent contamination, bubbles, porosity
- hidden causes: bad vent-zone fill, poor seal, volatile loading
- measurable indicators: vacuum level, pressure instability, product defects
- early warning: unstable vent trend before full upset

### 9. Side-feeder choking or flooding
- symptoms: local overload, blowback, unstable side dosing
- hidden causes: bad free volume, wrong injection condition, downstream mismatch
- measurable indicators: side feeder load, line response, torque oscillation
- early warning: side feeder load trend and poor proportional response

### 10. Hidden wear drift
- symptoms: output loss, rising specific energy, weaker pressure generation
- hidden causes: screw or barrel wear, clearance growth, leak-back
- measurable indicators: kg/h at fixed RPM and torque, long-term SEC trend
- early warning: slow baseline drift over many runs

## Recommended Use
These problems should be used in three ways:
- as machine-readable context for AI systems
- as a rule-design source for process diagnostics
- as a future basis for run classification and anomaly detection

## Related Docs
- [./extrusion-intelligence-system.md](./extrusion-intelligence-system.md)
- [./system-architecture.md](./system-architecture.md)
- [./extrusion-ai-profile.md](./extrusion-ai-profile.md)
- [./problems/index.md](./problems/index.md)
