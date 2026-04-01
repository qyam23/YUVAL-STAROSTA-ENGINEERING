# High Scrap and Quality Variation

## Problem
High scrap and quality variation indicate that the production line is not operating inside a repeatable process window. The issue may present as reject material, unstable specifications, repeated starts and stops, or wide variation between production runs.

## Typical factory signals
- reject rates increasing during otherwise normal operation
- frequent manual corrections by operators
- variable pellet quality, color, density, or downstream performance
- repeated process restarts after alarms or instability
- quality drifting during long runs

## Common causes
- unstable feeding or formulation handling
- poor thermal control or local overheating
- inconsistent screw fill and pressure behavior
- weak alarm logic and delayed operator visibility
- mismatch between extrusion, automation, and downstream equipment behavior
- changeover logic that is not robust enough for real plant conditions

## What is measurable in real factory conditions
- scrap rate
- production output
- downtime events
- torque
- pressure
- temperature
- alarm history
- quality inspection data

## What is usually not measured but critical
- local process drift before the defect becomes visible
- hidden instability between machines on an integrated line
- how often operators compensate manually without formal logging
- signal quality and timing problems inside the control system
- the real relationship between process disturbance and scrap creation

## Engineering approach
High scrap should be analyzed as a cross-functional operating problem that links extrusion behavior, control structure, operator interaction, and line integration. The correct response is usually not one parameter change but better definition of the stable operating window and better interpretation of what causes drift.

## Solution structure
- map where scrap is generated and what process signal shifts precede it
- review process stability, alarm behavior, and operator decision points
- connect quality variation with torque, pressure, temperature, and feeder behavior
- improve changeover, stabilization, and line coordination logic
- convert repeated disturbances into structured engineering findings

## Relevance to Starosta Industrial
This type of problem is typically addressed by Starosta Industrial through:
- process-first analysis
- system-level optimization
- stronger connection between production behavior, control logic, and operating quality
- lightweight data integration where needed to expose recurring instability patterns

## Related
- [../en/extrusion.md](../en/extrusion.md)
- [../en/automation.md](../en/automation.md)
- [../en/er-labs.md](../en/er-labs.md)
