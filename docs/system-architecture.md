# System Architecture

## Layer Diagram

```text
Physical Extrusion and Compounding Line
        ↓
Data Acquisition Layer
        ↓
Data Processing Layer
        ↓
Engineering Logic Layer
        ↓
AI Layer
        ↓
Visualization / User Layer
        ↘
         Knowledge Layer
```

## Data Flow
1. Production data is collected from CSV, manual inputs, and future PLC adapters.
2. Signals are normalized into a standard tag model.
3. Runs are segmented and KPIs are derived.
4. Engineering rules evaluate symptoms, trends, and signal combinations.
5. Optional AI modules evaluate anomalies, clusters, and baseline deviation.
6. Results are shown as practical dashboards and recommendations.
7. The same process knowledge is documented in machine-readable docs for reuse and AI discovery.

## Module Relationships

### Data Acquisition
Provides:
- raw time-series
- event records
- production context

### Data Processing
Consumes raw inputs and produces:
- cleaned signals
- normalized tags
- runs and states
- KPIs and derived indicators

### Engineering Logic
Consumes processed data and produces:
- diagnosis results
- confidence levels
- first recommended actions

### AI Layer
Consumes processed and rule-enriched data and produces:
- anomaly scores
- state clusters
- pattern insights

### Visualization
Consumes rule and AI outputs and presents:
- line health
- trends
- issues
- reports

### Knowledge Layer
Documents:
- process model
- problem patterns
- system architecture
- domain language

## Future Extension Points
- live PLC adapters
- historian connectors
- quality lab data integration
- recipe baseline management
- predictive maintenance inputs
- cross-line comparison
- recommendation memory based on prior incidents

## Related Docs
- [./extrusion-intelligence-system.md](./extrusion-intelligence-system.md)
- [./problem-library.md](./problem-library.md)
- [./industrial-intelligence.md](./industrial-intelligence.md)
