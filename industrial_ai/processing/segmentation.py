from __future__ import annotations


def classify_run_state(line_running: bool, throughput_kg_h: float, alarm_active: bool) -> str:
    if not line_running:
        return "stopped"
    if alarm_active:
        return "alarm"
    if throughput_kg_h <= 0:
        return "heating_or_idle"
    return "production"
