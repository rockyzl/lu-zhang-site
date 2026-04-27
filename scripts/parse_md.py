#!/usr/bin/env python3
"""Parse the academic-record markdown into JSON files for the Astro site.

Source location:
    Override with the LU_SITE_DATA_SOURCE env var pointing to the markdown file.
    Otherwise falls back to a sibling-repo relative path.
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SRC = (
    REPO_ROOT.parent
    / "zip"
    / "张鲁-申报材料-工作文档"
    / "研究报告"
    / "学术成果完整记录.md"
)
SRC = Path(os.environ.get("LU_SITE_DATA_SOURCE", str(DEFAULT_SRC)))
OUT = REPO_ROOT / "src" / "data"
OUT.mkdir(parents=True, exist_ok=True)

if not SRC.exists():
    sys.exit(
        f"ERROR: data source not found at {SRC}\n"
        "Set LU_SITE_DATA_SOURCE to the absolute path of 学术成果完整记录.md, "
        "or place the source repo as a sibling of lu-zhang-site/."
    )

text = SRC.read_text(encoding="utf-8")

# ---- Patents ----
patents = []
patent_block = re.search(r"## 二、美国专利.*?(?=\n## )", text, re.DOTALL).group(0)
current_topic = None
for line in patent_block.splitlines():
    m_topic = re.match(r"### (.+?) \(", line)
    if m_topic:
        current_topic = m_topic.group(1).strip()
        continue
    m_head = re.match(r"\d+\. \*\*(US [\d,]+)\*\* \((\d{4})\)", line)
    if m_head:
        patents.append({
            "patent_no": m_head.group(1),
            "year": int(m_head.group(2)),
            "topic": current_topic,
            "title_en": "",
            "title_cn": "",
            "inventors": "",
        })
        continue
    if patents and line.strip().startswith("- "):
        content = line.strip()[2:]
        if content.startswith("发明人:"):
            patents[-1]["inventors"] = content.replace("发明人:", "").strip()
        elif not patents[-1]["title_en"]:
            patents[-1]["title_en"] = content
        elif not patents[-1]["title_cn"]:
            patents[-1]["title_cn"] = content

# ---- Journal articles ----
publications = []
journal_block = re.search(r"## 三、期刊论文.*?(?=\n## 四)", text, re.DOTALL).group(0)
current_topic = None
current_pub = None
for line in journal_block.splitlines():
    m_topic = re.match(r"### (.+?) \(", line)
    if m_topic:
        current_topic = m_topic.group(1).strip()
        continue
    m_head = re.match(r"\d+\. \*\*(.+?)\*\*\s*$", line)
    if m_head:
        if current_pub:
            publications.append(current_pub)
        current_pub = {
            "title": m_head.group(1).strip(),
            "topic": current_topic,
            "authors": "",
            "journal": "",
            "year": None,
            "citations": 0,
            "doi": "",
        }
        continue
    if current_pub and line.strip().startswith("- "):
        content = line.strip()[2:]
        if content.startswith("作者:"):
            current_pub["authors"] = content.replace("作者:", "").strip()
        elif content.startswith("期刊:") or content.startswith("会议:"):
            # 期刊: X | 年份: YYYY | 被引: N
            parts = [p.strip() for p in content.split("|")]
            for p in parts:
                if p.startswith("期刊:") or p.startswith("会议:"):
                    current_pub["journal"] = p.split(":", 1)[1].strip()
                elif p.startswith("年份:"):
                    try:
                        current_pub["year"] = int(p.split(":", 1)[1].strip())
                    except ValueError:
                        pass
                elif p.startswith("被引:"):
                    try:
                        current_pub["citations"] = int(p.split(":", 1)[1].strip())
                    except ValueError:
                        current_pub["citations"] = 0
        elif content.startswith("DOI:"):
            current_pub["doi"] = content.replace("DOI:", "").strip()
if current_pub:
    publications.append(current_pub)

# ---- Conference abstracts ----
conferences = []
conf_block = re.search(r"## 四、会议摘要.*?(?=\n## 五)", text, re.DOTALL).group(0)
current_conf = None
for line in conf_block.splitlines():
    m_head = re.match(r"\d+\.\s+\[(\d{4})\]\s+(.+?)\s*$", line)
    if m_head:
        if current_conf:
            conferences.append(current_conf)
        current_conf = {
            "year": int(m_head.group(1)),
            "title": m_head.group(2).strip(),
            "venue": "",
            "citations": 0,
        }
        continue
    if current_conf and line.strip().startswith("- "):
        content = line.strip()[2:]
        parts = [p.strip() for p in content.split("|")]
        if parts:
            current_conf["venue"] = parts[0]
        for p in parts[1:]:
            if p.startswith("被引:"):
                try:
                    current_conf["citations"] = int(p.split(":", 1)[1].strip())
                except ValueError:
                    pass
if current_conf:
    conferences.append(current_conf)

# ---- Topic translation (Chinese → English for rendering) ----
TOPIC_MAP = {
    # patents
    "液流电池": "Flow battery",
    "锂电/穿梭剂": "Li-ion redox shuttles",
    "锂电/电解质": "Li-ion electrolytes",
    "硅负极/粘合剂": "Silicon-anode binders",
    # publications
    "液流电池/氧化还原活性分子": "Flow battery / redox-active molecules",
    "锂离子电池/电解质": "Li-ion electrolytes",
    "机器学习/计算化学": "ML / computational chemistry",
    "锌电池/水系电池": "Zn / aqueous batteries",
    "超级电容器/储能材料": "Supercapacitors / energy storage",
    "储能技术-综合": "Energy storage (broad)",
    "其他": "Other",
}
for entry in patents:
    entry["topic"] = TOPIC_MAP.get(entry["topic"], entry["topic"])
for entry in publications:
    entry["topic"] = TOPIC_MAP.get(entry["topic"], entry["topic"])

# ---- Author-disambiguation filter ----
# OpenAlex aggregates all "Lu Zhang"s into one author cluster, so we need a
# whitelist of confirmed ANL/JCESR collaborators. A paper is "verified Lu
# Zhang" only if at least one co-author surname matches the whitelist OR
# the title is explicitly battery/electrolyte/redox related.
ANL_COAUTHORS = {
    "Amine", "Burrell", "Curtiss", "Shkrob", "Vaughey", "Jansen",
    "Brushett", "Robertson", "Assary", "Lipson", "Cheng", "Patel",
    "Bheemireddy", "Ferrandon", "Hollas", "Hu", "Duan",
    "Zhengcheng Zhang", "Z. Zhang", "Jingjing Zhang", "J. Zhang",
    "Jinhua Huang", "J. Huang", "Xiaoliang Wei", "X. Wei",
    "Wei Wang", "W. Wang", "Wentao Duan", "Lily Robertson",
    "Rajeev Assary", "Anthony Burrell", "Khalil Amine",
    "Larry Curtiss", "Ilya Shkrob", "Anthony Jansen",
    "John Vaughey", "Fikile Brushett", "Magali Ferrandon",
    "Albert Lipson", "Shrayesh Patel", "Sambasiva Bheemireddy",
}
def is_verified_lu(authors_str: str) -> bool:
    if not authors_str:
        return False
    return any(name in authors_str for name in ANL_COAUTHORS)

for p in publications:
    p["verified"] = is_verified_lu(p["authors"])

# ---- Role detection (first / corresponding / co) ----
# Strict policy:
#   - "first"          if Lu Zhang is the first listed author
#   - "corresponding"  ONLY if the title appears in the whitelist
#   - "co"             everything else where Lu Zhang appears
# (Last-position is no longer auto-marked corresponding — too unreliable.)
overrides_path = Path(__file__).parent / "corresponding_overrides.json"
overrides = json.loads(overrides_path.read_text(encoding="utf-8"))
corresp_keys = [t.lower() for t in overrides.get("corresponding_titles", [])]

def is_corresponding(title: str) -> bool:
    t = title.lower()
    return any(key in t for key in corresp_keys)

for p in publications:
    authors = p["authors"]
    first = authors.split(",")[0].strip() if authors else ""
    if first == "Lu Zhang":
        p["role"] = "first"
    elif is_corresponding(p["title"]):
        p["role"] = "corresponding"
    elif "Lu Zhang" in authors:
        p["role"] = "co"
    else:
        p["role"] = "unknown"

# ---- Write JSON ----
(OUT / "patents.json").write_text(
    json.dumps(patents, ensure_ascii=False, indent=2), encoding="utf-8"
)
(OUT / "publications.json").write_text(
    json.dumps(publications, ensure_ascii=False, indent=2), encoding="utf-8"
)
(OUT / "conferences.json").write_text(
    json.dumps(conferences, ensure_ascii=False, indent=2), encoding="utf-8"
)

print(f"patents:      {len(patents)}")
print(f"publications: {len(publications)}")
print(f"conferences:  {len(conferences)}")
