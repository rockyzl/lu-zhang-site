#!/usr/bin/env python3
"""Render the /cv/ Astro page to a downloadable PDF using WeasyPrint.

Run after `npm run build`. Output: public/files/Lu_Zhang_CV.pdf

The PDF is committed to the repo so visitors can download without
running WeasyPrint in CI.
"""

import subprocess
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "dist" / "cv" / "index.html"
OUT = REPO / "public" / "files" / "Lu_Zhang_CV.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

if not SRC.exists():
    raise SystemExit(f"ERROR: {SRC} not found. Run `npm run build` first.")

print(f"Rendering CV PDF from {SRC.relative_to(REPO)} → {OUT.relative_to(REPO)}")
subprocess.check_call(
    ["weasyprint", str(SRC), str(OUT)],
    stderr=subprocess.STDOUT,
)
size = OUT.stat().st_size / 1024
print(f"  → {size:.0f}K written")
