# Industrial AI Foundation

This folder contains a lightweight Python foundation for the Extrusion Intelligence System.

## Purpose
The foundation is designed for:
- CSV-based ingestion first
- future PLC adapter support
- modular KPI calculation
- deterministic engineering rules
- optional anomaly modules

## Structure
- `ingestion/`: raw data schemas and CSV loading
- `processing/`: normalization, segmentation, and KPI logic
- `rules/`: deterministic engineering rules
- `anomaly/`: optional anomaly interfaces and placeholders
- `models/`: shared run and signal models
- `config/`: tag mapping and configuration
- `tests/`: smoke tests

## Local usage
Run the smoke test:

```bash
python industrial_ai/tests/smoke_test.py
```
