from __future__ import annotations

import hashlib
import random
from dataclasses import asdict, dataclass
from typing import Any


@dataclass
class CVDetection:
    label: str
    confidence: float
    x: int
    y: int
    w: int
    h: int


class LightweightCVAdapter:
    """Local placeholder adapter shaped like a real CV service.

    It accepts video/RTSP/demo URLs and returns deterministic metadata. A real
    YOLO/ByteTrack worker can replace this class without changing the API.
    """

    def analyze(self, source_url: str, camera_id: str = "CAM-DEMO") -> dict[str, Any]:
        seed = int(hashlib.sha256(f"{source_url}:{camera_id}".encode()).hexdigest()[:8], 16)
        rng = random.Random(seed)
        people = rng.randint(2, 9)
        staff = rng.randint(1, min(3, people))
        detections = []
        for index in range(people):
            label = "staff" if index < staff else "guest"
            detections.append(
                CVDetection(
                    label=label,
                    confidence=round(rng.uniform(0.72, 0.96), 2),
                    x=rng.randint(8, 78),
                    y=rng.randint(12, 58),
                    w=rng.randint(8, 16),
                    h=rng.randint(18, 34),
                )
            )
        return {
            "camera_id": camera_id,
            "source_url": source_url,
            "mode": "local_metadata_adapter",
            "engine": "deterministic demo adapter; replace with YOLO/ByteTrack for pixel inference",
            "people_count": people,
            "staff_count": staff,
            "guest_count": people - staff,
            "table_occupancy_signal": "HIGH" if people >= 7 else "MEDIUM" if people >= 4 else "LOW",
            "line_crossings": rng.randint(0, 3),
            "detections": [asdict(item) for item in detections],
        }


CV_ADAPTER = LightweightCVAdapter()
