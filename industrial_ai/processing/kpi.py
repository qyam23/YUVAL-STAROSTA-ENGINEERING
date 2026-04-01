from __future__ import annotations


def specific_energy_kw_per_kg(power_kw: float, throughput_kg_h: float) -> float | None:
    if throughput_kg_h <= 0:
        return None
    return power_kw / throughput_kg_h


def stability_index(values: list[float]) -> float | None:
    if not values:
        return None
    average = sum(values) / len(values)
    if average == 0:
        return 0.0
    variance = sum((value - average) ** 2 for value in values) / len(values)
    return (variance**0.5) / abs(average)
