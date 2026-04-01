# Twin Screw Extrusion Process Model

## Purpose
This document describes the physical and process model of co-rotating twin screw extrusion in industrial compounding.

It is intended as a machine-readable engineering reference for how Starosta Industrial analyzes extrusion behavior in real plant conditions.

## 1. Material Behavior

### Physical model
In twin screw extrusion, melting is primarily mechanically driven rather than heater-driven. Polymer is stretched, sheared, folded, and compressed through screw elements. Mechanical work becomes viscous dissipation, and viscous dissipation becomes heat. Melting therefore develops progressively along the screw as a coupled thermo-mechanical process.

### Key variables
- shear rate
- viscosity as a function of shear and temperature
- melt temperature
- specific heat
- crystallinity
- residence time distribution
- melt fraction along the screw
- stress distribution across the channel

### Measurable in real factory conditions
- melt temperature at the die
- screw speed
- motor load or torque
- throughput
- pressure near the die

### Usually not measured but critical
- local shear rate distribution
- local melt homogeneity
- solid bed breakup behavior
- true viscosity under filled and non-Newtonian process conditions
- energy split between melting, mixing, and pumping

## 2. Feeding Dynamics

### Physical model
Feeding establishes the boundary conditions for the entire process. The main feeder influences fill level and operating regime. Side feeders introduce solids into a partially filled or partially molten system and therefore depend on available free volume, upstream melt sealing, and downstream conveying capacity.

### Key variables
- main feed rate
- side feed rate
- bulk density
- particle size distribution
- feeding mode such as flood-fed or starve-fed
- screw speed
- fill ratio at side-feeding location
- melt viscosity at the side-feeding location
- venting availability

### Measurable in real factory conditions
- loss-in-weight feeder rates
- feeder screw speed
- total throughput
- feeder torque where instrumentation exists

### Usually not measured but critical
- degree of fill profile along the screw
- local pressure at feeding points
- air entrainment
- intake efficiency versus slip
- powder flow behavior, including cohesion and bridging

## 3. Screw Configuration Impact

### Physical model
The screw configuration behaves simultaneously as a distributed reactor, pump, and mixer. Each element affects conveying, shear, mixing style, pressure build-up, venting behavior, residence time, and thermal history.

### Key variables
- element pitch
- flight depth
- kneading angle
- disk thickness
- forward, neutral, and reverse conveying elements
- sequence and position of melting, mixing, venting, and side-feeding zones

### Measurable in real factory conditions
- overall torque
- overall pressure
- throughput
- melt temperature

### Usually not measured but critical
- local mixing intensity
- stress history of the material
- backflow and leakage behavior
- melt segregation
- actual dispersion efficiency

## 4. Torque and Energy Behavior

### Physical model
Mechanical power is governed by torque and angular velocity. In compounding, most of that energy becomes viscous heat inside the material rather than useful external work. Torque therefore reflects both rheology and configuration, but it does not tell the full story unless connected to where and how the energy is dissipated.

### Key variables
- torque
- screw speed
- throughput
- melt viscosity
- die resistance
- specific energy consumption

### Measurable in real factory conditions
- motor load
- torque
- power consumption
- specific energy

### Usually not measured but critical
- local torque peaks
- energy distribution between melting, mixing, and pumping
- efficiency of energy usage
- mechanical versus viscous losses

## 5. Temperature Zones and Heat Generation

### Physical model
Total heat inside the machine is the combined effect of mechanical shear heating and barrel heating or cooling. In most real compounding conditions, shear heating is dominant, while barrel heaters and cooling circuits trim the boundary conditions.

### Key variables
- barrel set temperatures
- screw speed
- torque
- fill level
- cooling capacity and flow
- internal melt temperature profile

### Measurable in real factory conditions
- barrel zone temperatures
- die melt temperature
- cooling water temperature and flow

### Usually not measured but critical
- internal melt temperature profile before the die
- hot spots in kneading sections
- thermal gradients across the channel
- local overheating and degradation risk

## Integrated System View
Twin screw extrusion is a strongly coupled nonlinear system.

### Main couplings
- feeding influences fill level, torque, and temperature
- screw configuration influences shear, melting, and pressure
- material behavior influences viscosity, torque, and energy demand
- energy input changes temperature, which changes viscosity and therefore changes flow again

### Core nonlinear loop
- screw action creates shear
- shear creates heat
- heat changes viscosity
- viscosity changes torque and transport behavior
- transport behavior changes local shear again

This is why extrusion is self-regulating in some regions, yet still capable of instability, oscillation, and local failure.

## Engineering Interpretation
From an engineering standpoint, a co-rotating twin screw extruder should be treated as a distributed thermo-mechanical reactor in which material state, geometry, fill, and energy input interact continuously.

The process is not controlled by commanding melting or mixing directly. It is controlled by setting boundary conditions:

- feed rates
- screw speed
- screw configuration
- barrel temperature profile
- venting and downstream resistance

The machine then resolves the internal state through the coupled physics of transport, rheology, and heat generation.

## Relevance to Starosta Industrial
This type of process model is directly relevant to Starosta Industrial because it supports:

- process-first analysis rather than symptom-only troubleshooting
- system-level understanding of feeding, melting, mixing, and stability
- better interpretation of torque, temperature, pressure, and throughput signals
- engineering decisions grounded in real plant behavior rather than generic settings tables

## Related Documents
- [extrusion.md](./extrusion.md)
- [automation.md](./automation.md)
- [er-labs.md](./er-labs.md)
- [../problems/index.md](../problems/index.md)
