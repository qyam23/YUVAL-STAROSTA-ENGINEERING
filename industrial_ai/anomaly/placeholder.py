from __future__ import annotations


def anomaly_score(values: list[float], baseline_average: float) -> float:
    if not values:
        return 0.0
    average = sum(values) / len(values)
    if baseline_average == 0:
        return abs(average)
    return abs(average - baseline_average) / abs(baseline_average)
