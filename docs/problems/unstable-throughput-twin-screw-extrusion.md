# Unstable Throughput in Twin Screw Extrusion

## Problem
Unstable throughput in co-rotating twin screw extrusion appears as oscillating output, drifting pressure, variable amperage or torque, pellet inconsistency, or repeated operator correction.

## Typical factory signals
- output fluctuation at constant setpoint
- torque variation without intentional recipe change
- pressure drift at the die
- inconsistent pellet shape or bulk density
- feeder corrections becoming frequent

## Common causes
- feeding inconsistency at the main feeder
- side feeding into the wrong fill condition
- screw configuration mismatch between conveying and mixing demand
- unstable venting or devolatilization behavior
- viscosity variation caused by temperature drift, formulation variation, or recycled content
- mismatch between upstream feed stability and downstream pull or pelletizing behavior

## What is measurable in real factory conditions
- throughput
- screw speed
- feeder rates
- torque or motor load
- pressure
- melt temperature at the die
- barrel zone temperatures

## What is usually not measured but critical
- degree of fill profile along the screw
- local viscosity field
- actual melt quality before sensitive mixing zones
- air entrainment and sealing behavior near side feeding or venting
- where energy is being dissipated inside the configuration

## Engineering approach
The engineering approach is to treat unstable throughput as a coupled feeding, rheology, screw geometry, and energy problem rather than as a single machine setting issue.

Analysis usually starts with:
- feed stability and actual intake behavior
- torque, pressure, and temperature correlation over time
- screw layout review against the real formulation and throughput target
- fill condition around side feeding, venting, and pressure-building sections
- downstream equipment influence on the line

## Solution structure
- stabilize boundary conditions at the feeders
- verify whether the process should run starve-fed or under a different fill regime
- adjust screw configuration where conveying, melting, mixing, and pressure-building are misaligned
- correct venting, temperature, or downstream restrictions that amplify process oscillation
- validate the line under sustained production conditions rather than short snapshots

## Relevance to Starosta Industrial
This type of problem is typically addressed by Starosta Industrial through:
- process-first analysis
- system-level optimization
- practical interpretation of torque, pressure, temperature, and throughput behavior
- coordination between extrusion, automation, and line integration logic

## Related
- [../en/extrusion.md](../en/extrusion.md)
- [../en/twin-screw-process-model.md](../en/twin-screw-process-model.md)
- [../en/automation.md](../en/automation.md)
