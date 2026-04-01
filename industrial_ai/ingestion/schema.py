from __future__ import annotations

from dataclasses import dataclass


@dataclass(slots=True)
class SignalPoint:
    timestamp: str
    tag: str
    value: float | int | str
    quality: str = "good"


@dataclass(slots=True)
class EventPoint:
    timestamp: str
    event_type: str
    message: str
