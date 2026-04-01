from __future__ import annotations


def normalize_tag(raw_tag: str, tag_map: dict[str, str]) -> str:
    return tag_map.get(raw_tag, raw_tag)


def normalize_row(row: dict[str, str], tag_field: str, tag_map: dict[str, str]) -> dict[str, str]:
    normalized = dict(row)
    if tag_field in normalized:
        normalized[tag_field] = normalize_tag(normalized[tag_field], tag_map)
    return normalized
