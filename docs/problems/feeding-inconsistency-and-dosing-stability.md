# Feeding Inconsistency and Poor Dosing Stability

## Problem
Feeding inconsistency in compounding lines causes unstable fill, variable throughput, poor additive distribution, and unreliable process behavior even when the extruder itself appears mechanically healthy.

## Typical factory signals
- loss-in-weight feeders drifting or cycling
- batch-to-batch variation in additive response
- output instability beginning near recipe changes
- torque behavior changing faster than expected from screw speed or barrel settings
- visible variation in color, filler content, or dispersion quality

## Common causes
- poor bulk density consistency
- cohesive powder behavior, bridging, or rat-holing
- feeder screw selection not matched to the material
- side feeder injection into a zone with the wrong fill level or melt seal
- uncontrolled air entrainment
- inaccurate coordination between multiple feeders

## What is measurable in real factory conditions
- feeder rates
- feeder screw speed
- total throughput
- torque
- pressure
- screw speed
- product quality checks downstream

## What is usually not measured but critical
- real intake efficiency versus commanded feed
- local pressure at the feed opening
- free volume available at side feeding
- air loading introduced with powders
- short-term feeder pulsation hidden by averaged displays

## Engineering approach
The correct approach is to analyze feeder behavior as part of the process model, not as an isolated gravimetric device problem. Stable feeding depends on material flowability, injection point condition, and the downstream ability of the screw configuration to receive and seal the incoming material.

## Solution structure
- verify whether instability starts at the feeder, at the injection condition, or downstream
- review bulk density, particle behavior, and feeder hardware suitability
- check whether the side feeding point has adequate free volume and melt seal
- rebalance feeder coordination relative to screw speed and total line throughput
- adjust configuration or operating window where the machine cannot accept the incoming material cleanly

## Relevance to Starosta Industrial
This type of problem is typically addressed by Starosta Industrial through:
- process-first analysis
- feeding and side-feeding engineering
- interpretation of fill behavior instead of feeder readouts alone
- integration of formulation behavior, machine design, and operating logic

## Related
- [../en/extrusion.md](../en/extrusion.md)
- [../en/twin-screw-process-model.md](../en/twin-screw-process-model.md)
- [../en/er-labs.md](../en/er-labs.md)
