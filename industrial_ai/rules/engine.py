from __future__ import annotations

from dataclasses import dataclass


@dataclass(slots=True)
class RuleResult:
    status: str
    issue: str
    confidence: str
    evidence: list[str]
    recommendations: list[str]


class RuleEngine:
    def __init__(self) -> None:
        self._rules: list = []

    def register(self, rule) -> None:
        self._rules.append(rule)

    def evaluate(self, signals: dict[str, float]) -> list[RuleResult]:
        results: list[RuleResult] = []
        for rule in self._rules:
            result = rule(signals)
            if result is not None:
                results.append(result)
        return results
