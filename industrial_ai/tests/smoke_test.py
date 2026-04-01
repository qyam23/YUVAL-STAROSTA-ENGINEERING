from __future__ import annotations

from industrial_ai.anomaly.placeholder import anomaly_score
from industrial_ai.processing.kpi import specific_energy_kw_per_kg, stability_index
from industrial_ai.processing.segmentation import classify_run_state
from industrial_ai.rules.engine import RuleEngine
from industrial_ai.rules.extrusion_rules import detect_feeding_instability, detect_under_melting


def main() -> None:
    sec = specific_energy_kw_per_kg(180.0, 600.0)
    feeder_stability = stability_index([100.0, 104.0, 96.0, 102.0]) or 0.0
    torque_stability = stability_index([62.0, 65.0, 61.0, 64.0]) or 0.0
    state = classify_run_state(True, 600.0, False)

    engine = RuleEngine()
    engine.register(detect_under_melting)
    engine.register(detect_feeding_instability)

    results = engine.evaluate(
        {
            "Extruder.TorquePct": 78.0,
            "Derived.DiePressureOscillation": 0.12,
            "Derived.MeltTemperatureGap": 10.0,
            "Derived.MainFeederStabilityIndex": feeder_stability,
            "Derived.TorqueStabilityIndex": torque_stability,
        }
    )

    assert sec is not None and round(sec, 3) == 0.3
    assert state == "production"
    assert anomaly_score([10.0, 12.0, 11.0], 10.0) > 0
    assert results, "Expected at least one rule result"
    print("industrial_ai smoke test: PASS")


if __name__ == "__main__":
    main()
