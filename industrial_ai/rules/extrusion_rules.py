from __future__ import annotations

from industrial_ai.rules.engine import RuleResult


def detect_under_melting(signals: dict[str, float]) -> RuleResult | None:
    torque = signals.get("Extruder.TorquePct", 0.0)
    pressure_noise = signals.get("Derived.DiePressureOscillation", 0.0)
    melt_temp_gap = signals.get("Derived.MeltTemperatureGap", 0.0)

    if torque > 75 and pressure_noise > 0.1 and melt_temp_gap > 8:
        return RuleResult(
            status="watch",
            issue="under_melting_risk",
            confidence="medium",
            evidence=[
                "high torque",
                "elevated die pressure oscillation",
                "melt temperature below expected condition",
            ],
            recommendations=[
                "check main feed rate against available melting capacity",
                "review melting section and early screw sequence",
                "verify raw material viscosity or moisture shift",
            ],
        )
    return None


def detect_feeding_instability(signals: dict[str, float]) -> RuleResult | None:
    feeder_cv = signals.get("Derived.MainFeederStabilityIndex", 0.0)
    torque_cv = signals.get("Derived.TorqueStabilityIndex", 0.0)

    if feeder_cv > 0.05 and torque_cv > 0.04:
        return RuleResult(
            status="watch",
            issue="feeding_instability",
            confidence="medium",
            evidence=[
                "main feeder variability above baseline",
                "torque variability tracking feeder behavior",
            ],
            recommendations=[
                "check feeder refill cycle and hopper flow",
                "verify bulk density consistency",
                "review intake behavior at current RPM and throughput",
            ],
        )
    return None
