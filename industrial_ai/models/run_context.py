from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any


@dataclass(slots=True)
class RunContext:
    run_id: str
    recipe_id: str | None = None
    screw_configuration_id: str | None = None
    material_lot: str | None = None
    operator_name: str | None = None
    line_name: str | None = None
    notes: list[str] = field(default_factory=list)
    metadata: dict[str, Any] = field(default_factory=dict)
