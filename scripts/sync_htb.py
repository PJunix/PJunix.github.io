#!/usr/bin/env python3
"""Sync public HTB profile data into static JSON files.

The HTB endpoints used here are community-documented, not a supported
public API contract. No account token or password is used. If an endpoint
changes or returns unexpected data, this script fails instead of replacing
the last known-good JSON files.
"""
from __future__ import annotations

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlencode, quote
from urllib.request import Request, urlopen

USER_ID = 1910661
BASE = "https://labs.hackthebox.com"
ROOT = Path(__file__).resolve().parents[1]
STATS_PATH = ROOT / "data" / "htb-stats.json"
MACHINES_PATH = ROOT / "data" / "htb-machines.json"
HEADERS = {
    "Accept": "application/json",
    "User-Agent": "PJunix-HTB-Portfolio-Sync/1.0 (public profile; GitHub Actions)",
}


def get_json(url: str) -> dict:
    request = Request(url, headers=HEADERS)
    with urlopen(request, timeout=25) as response:
        if response.status != 200:
            raise RuntimeError(f"HTB returned HTTP {response.status} for {url}")
        payload = json.loads(response.read().decode("utf-8"))
    if not isinstance(payload, dict):
        raise RuntimeError(f"Unexpected JSON response from {url}")
    return payload


def get_profile_stats() -> dict:
    url = f"{BASE}/api/v4/user/profile/basic/{USER_ID}"
    payload = get_json(url)
    profile = payload.get("profile", payload)
    if not isinstance(profile, dict) or int(profile.get("id", 0) or 0) != USER_ID:
        raise RuntimeError("HTB profile response did not match the expected user ID.")
    if profile.get("public") is False:
        raise RuntimeError("HTB profile is private; refusing to publish its statistics.")

    required = ("rank", "ranking", "points", "system_owns")
    missing = [key for key in required if profile.get(key) is None]
    if missing:
        raise RuntimeError("HTB profile response is missing expected fields: " + ", ".join(missing))

    return {
        "username": profile.get("name", "PJPlays"),
        "rankLabel": str(profile["rank"]),
        "globalRank": int(profile["ranking"]),
        "points": int(profile["points"]),
        "machinesRooted": int(profile["system_owns"]),
        "userFlags": int(profile.get("user_owns", 0) or 0),
        "updatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "source": "HTB public profile (community-documented endpoint)",
    }


def get_completed_machines() -> list[dict]:
    # v5 public profile content endpoint; pagination is provided by HTB.
    page = 1
    last_page = 1
    completed = []

    while page <= last_page:
        query = urlencode({"type": "machine", "perPage": 100, "page": page})
        url = f"{BASE}/api/v5/user/profile/content/{USER_ID}?{query}"
        payload = get_json(url)
        data = payload.get("data")
        meta = payload.get("meta", {})
        if not isinstance(data, list) or not isinstance(meta, dict):
            raise RuntimeError("Unexpected machine-list response shape from HTB.")

        last_page = int(meta.get("lastPage", page) or page)
        for item in data:
            if not isinstance(item, dict):
                continue
            name = item.get("name")
            machine_id = item.get("id")
            root_owns = int(item.get("rootOwnCount", 0) or 0)
            if not name or not machine_id or root_owns < 1:
                continue

            logo = item.get("machineAvatar")
            if not logo:
                continue
            completed.append({
                "name": str(name),
                "difficulty": str(item.get("difficulty", "Unknown")).title(),
                "os": str(item.get("os", "Unknown")).title(),
                "logo": str(logo),
                "achievement": f"{BASE}/achievement/machine/{USER_ID}/{int(machine_id)}",
                "htb": f"https://app.hackthebox.com/machines/{quote(str(name), safe='')}",
                "walkthrough": None,
                "machineId": int(machine_id),
                "rootOwnCount": root_owns,
            })
        page += 1
        if page > 50:
            raise RuntimeError("Pagination safety limit reached; refusing to publish partial machine data.")

    if not completed:
        raise RuntimeError("HTB returned no rooted machines; refusing to replace the existing machine list.")

    # Keep the newest machine releases first; retain deterministic ordering.
    completed.sort(key=lambda item: (item["name"].lower(), item["machineId"]))
    return completed


def write_json(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> int:
    try:
        stats = get_profile_stats()
        machines = get_completed_machines()
        write_json(STATS_PATH, {"stats": stats})
        write_json(MACHINES_PATH, {"machines": machines})
        print(f"Updated HTB stats and {len(machines)} rooted machines.")
        return 0
    except Exception as exc:
        print(f"HTB sync failed; existing JSON files were not intentionally replaced: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
