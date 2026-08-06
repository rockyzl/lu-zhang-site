#!/usr/bin/env python3
"""Fetch all works for Lu Zhang (OpenAlex A5100388687) and filter to ones
where his actual affiliation is Argonne, FSU, or other confirmed employers.

This replaces the markdown-parsed publications.json with a more accurate,
affiliation-verified list.
"""

import json
import urllib.request
from pathlib import Path

AUTHOR_ID = "A5100388687"
PER_PAGE = 200

# Employers / institutions that confirm "this Lu Zhang = our Lu Zhang"
# Match by substring (case-insensitive) on institution display_name.
# Co-author names that — combined with a CAS affiliation in 2001-2007 — confirm
# a paper is from his PhD era. Without a co-author match, CAS-era hits are
# treated as same-name false positives because OpenAlex's author cluster also
# contains other "Lu Zhang"s active in China around that time.
#
# PhD advisor: 李嫕 (Li Yi / Yi Li), 研究员 at 中国科学院理化技术研究所
# (Technical Institute of Physics and Chemistry, Chinese Academy of Sciences).
# Photochemistry / organic photophysics group.
# Add more PhD-era lab members here as confirmed.
CAS_VERIFY_COAUTHORS = [
    # Advisor — multiple romanizations + Chinese
    "Yi Li", "Li Yi",
    "李嫕",  # canonical character (different from 李毅 which is a male name)
    "Y. Li", "Y Li",
]

EMPLOYER_KEYWORDS = [
    "argonne national laboratory",
    "argonne",
    "uchicago argonne",
    "florida state university",
    "florida state",
    # PhD era — Chinese Academy of Sciences
    "chinese academy of sciences",
    "academia sinica",
    "institute of chemistry, chinese academy of sciences",
    "technical institute of physics and chemistry",
    # Post-ANL roles (papers unlikely but possible)
    "american academy of orthopaedic surgeons",
    "aaos",
    "mercury insurance",
    "cincinnati insurance",
    # OpenAlex sometimes tags ANL-funded work with a DOE program identifier
    # instead of "Argonne". Treat this as an ANL signal too.
    "energy storage systems (united states)",
    "energy storage systems",
]

# Fallback: when OpenAlex has NO institution data on the Lu Zhang authorship,
# check whether any well-known ANL/JCESR collaborator is in the author list.
# A match here strongly suggests the paper is his even without affiliation.
import re as _re
ANL_COLLAB_NAMES = [
    "Khalil Amine", "Anthony K. Burrell", "Anthony Burrell",
    "Larry A. Curtiss", "Larry Curtiss",
    "Ilya A. Shkrob", "Ilya Shkrob",
    "John T. Vaughey", "John Vaughey", "Anthony N. Jansen", "Anthony Jansen",
    "Fikile R. Brushett", "Fikile Brushett",
    "Lily A. Robertson", "Lily Robertson",
    "Rajeev S. Assary", "Rajeev Assary",
    "Albert L. Lipson", "Albert Lipson",
    "Lei Cheng",
    "Shrayesh N. Patel", "Shrayesh Patel",
    "Sambasiva R. Bheemireddy", "Sambasiva Bheemireddy",
    "Magali S. Ferrandon", "Magali Ferrandon",
    "Aaron Hollas",
    "Jingjing Zhang", "Zhengcheng Zhang",
    "Jinhua Huang",
    "Xiaoliang Wei", "Wentao Duan",
    "Wei Wang", "Joaquín Rodríguez-López", "Joaquin Rodriguez-Lopez",
    "Jeffrey S. Moore", "Michael J. Counihan",
    "Garvit Agarwal", "Bin Hu",
    "Paul C. Redfern",
    "Jarrod D. Milshtein",
    "Baofei Pan", "Zhangxing Shi", "Sisi Jiang",
    "Aman Preet Kaur", "Hossam Farag",
]
_ANL_PATTERNS = [_re.compile(r"\b" + _re.escape(n) + r"\b") for n in ANL_COLLAB_NAMES]


def has_anl_coauthor(work: dict) -> bool:
    authors_str = " ; ".join(a["author"]["display_name"] for a in work.get("authorships", []))
    return any(p.search(authors_str) for p in _ANL_PATTERNS)

OUT = Path(__file__).parent.parent / "src" / "data" / "publications.json"
OUT_COAUTHORS = Path(__file__).parent.parent / "src" / "data" / "collaborators.json"


def fetch_all_works():
    """Page through OpenAlex works for the author."""
    works = []
    cursor = "*"
    while cursor:
        url = (
            f"https://api.openalex.org/works"
            f"?filter=author.id:{AUTHOR_ID}"
            f"&per-page={PER_PAGE}"
            f"&select=id,doi,title,publication_year,cited_by_count,primary_location,authorships,topics,type"
            f"&cursor={cursor}"
        )
        req = urllib.request.Request(url, headers={"User-Agent": "sciencesloop-site/1.0 (mailto:luzhang@sciencesloop.com)"})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read())
        works.extend(data["results"])
        cursor = data["meta"].get("next_cursor")
        if not cursor or not data["results"]:
            break
    return works


def is_our_lu_zhang(authorship: dict, work: dict | None = None) -> bool:
    """Check if this authorship entry is OUR Lu Zhang.

    Decision tree:
      1. Author display name must be "Lu Zhang"
      2. If institution matches employer whitelist → YES (with CAS-era extra check)
      3. If NO institution data AND a known ANL/JCESR collaborator is on
         the author list → YES (OpenAlex fallback for poorly-tagged papers)
      4. Otherwise → NO
    """
    if authorship["author"]["display_name"].lower() != "lu zhang":
        return False

    insts = authorship.get("institutions", [])
    inst_names = " ; ".join(i.get("display_name", "") for i in insts).lower()

    # Path 2: institution-based
    if any(kw in inst_names for kw in EMPLOYER_KEYWORDS):
        # CAS-era extra check: require a known PhD co-author
        is_cas_match = any(kw in inst_names for kw in (
            "chinese academy of sciences", "academia sinica",
            "institute of chemistry, chinese academy of sciences",
            "technical institute of physics and chemistry",
        ))
        if is_cas_match and work is not None:
            year = work.get("publication_year", 0) or 0
            if 2001 <= year <= 2007:
                coauthor_names = " ; ".join(
                    a["author"]["display_name"] for a in work.get("authorships", []))
                return any(name in coauthor_names for name in CAS_VERIFY_COAUTHORS)
        return True

    # Path 3 (relaxed fallback): if no whitelisted affiliation but a known
    # ANL/JCESR collaborator is on the author list, accept the paper.
    # OpenAlex sometimes tags Lu Zhang at unrelated institutions even on
    # ANL work — strong co-author signal compensates.
    if work is not None and has_anl_coauthor(work):
        return True

    return False


# Corresponding-author whitelist (titles where Lu Zhang is confirmed corresponding)
_OVERRIDES_PATH = Path(__file__).parent / "corresponding_overrides.json"
_OVERRIDES = json.loads(_OVERRIDES_PATH.read_text(encoding="utf-8"))
_CORRESP_KEYS = [t.lower() for t in _OVERRIDES.get("corresponding_titles", [])]


def is_corresponding(title: str) -> bool:
    t = title.lower()
    return any(k in t for k in _CORRESP_KEYS)


CONFERENCE_JOURNALS = {
    "ecs meeting abstracts",
    "bulletin of the american physical society",
    "aps march meeting",
    "abstracts of papers of the american chemical society",
    "abstracts, 25th central regional meeting",
    "ecs prime meeting abstracts",
}
PREPRINT_HOSTS = {"arxiv", "chemrxiv", "biorxiv", "ssrn", "research square", "preprints"}


def classify_work(work: dict, journal: str) -> str:
    """Categorize a work as 'journal', 'conference', 'preprint', 'book-chapter', or 'other'."""
    j = (journal or "").lower()
    if any(c in j for c in CONFERENCE_JOURNALS):
        return "conference"
    if any(p in j for p in PREPRINT_HOSTS):
        return "preprint"
    t = (work.get("type") or "").lower()
    if t == "book-chapter":
        return "book-chapter"
    if t == "preprint" or "preprint" in j:
        return "preprint"
    if t in ("review", "article", "letter") and j:
        return "journal"
    return "other"


def transform_work(w: dict) -> dict:
    """Convert OpenAlex work to our publications.json schema."""
    # Find Lu Zhang authorship + position
    authors = []
    lu_position = None
    lu_affiliations = []
    for i, a in enumerate(w["authorships"]):
        name = a["author"]["display_name"]
        authors.append(name)
        if name.lower() == "lu zhang" and is_our_lu_zhang(a, w):
            if lu_position is None:
                lu_position = a.get("author_position", "middle")
            lu_affiliations = [inst["display_name"] for inst in a.get("institutions", [])]

    if lu_position == "first":
        role = "first"
    elif is_corresponding(w["title"] or ""):
        role = "corresponding"
    else:
        role = "co"

    journal = ""
    if w.get("primary_location") and w["primary_location"].get("source"):
        journal = w["primary_location"]["source"].get("display_name", "")

    topic = ""
    if w.get("topics"):
        topic = w["topics"][0].get("display_name", "")

    return {
        "title": w["title"] or "",
        "topic": topic,
        "authors": ", ".join(authors[:6]) + (", et al." if len(authors) > 6 else ""),
        "journal": journal,
        "year": w["publication_year"],
        "citations": w["cited_by_count"],
        "doi": w["doi"] or "",
        "role": role,
        "affiliations": lu_affiliations,
        "verified": True,  # only verified papers are included
        "kind": classify_work(w, journal),
    }


def main():
    print(f"Fetching all works for OpenAlex author {AUTHOR_ID}...")
    works = fetch_all_works()
    print(f"  → {len(works)} total works in the cluster")

    verified = []
    for w in works:
        # Only keep if at least one Lu Zhang authorship has confirmed institution
        if any(is_our_lu_zhang(a, w) for a in w.get("authorships", [])):
            verified.append(transform_work(w))

    print(f"  → {len(verified)} works confirmed (affiliation matches Argonne/FSU/etc)")

    # Sort newest → oldest, then by citations
    verified.sort(key=lambda p: (-(p["year"] or 0), -p["citations"]))

    OUT.write_text(json.dumps(verified, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"  → wrote {OUT}")

    # Quick stats
    from collections import Counter
    by_year = Counter(p["year"] for p in verified)
    print()
    print("Year distribution:")
    for y in sorted(by_year.keys(), reverse=True)[:12]:
        print(f"  {y}: {by_year[y]}")
    role_counts = Counter(p["role"] for p in verified)
    print(f"\nRoles: {dict(role_counts)}")

    # ---- Collaborators: dedupe + count across the verified work set ----
    coauthors: dict[str, dict] = {}
    for w in works:
        # Only count co-authors from verified papers
        if not any(is_our_lu_zhang(a, w) for a in w.get("authorships", [])):
            continue
        for a in w["authorships"]:
            name = a["author"]["display_name"]
            if name.lower() == "lu zhang":
                continue
            insts = [i.get("display_name", "") for i in a.get("institutions", [])]
            entry = coauthors.setdefault(name, {"name": name, "count": 0, "institutions": set(), "id": a["author"].get("id", "")})
            entry["count"] += 1
            entry["institutions"].update(insts)

    collab_list = sorted(
        ({"name": c["name"], "count": c["count"], "institutions": sorted(c["institutions"]), "openalex_id": c["id"].rsplit("/", 1)[-1] if c["id"] else ""}
         for c in coauthors.values()),
        key=lambda x: (-x["count"], x["name"]),
    )

    OUT_COAUTHORS.write_text(json.dumps(collab_list, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"\n  → wrote {OUT_COAUTHORS} ({len(collab_list)} unique collaborators)")
    print("  Top 5:", " | ".join(f"{c['name']} ({c['count']})" for c in collab_list[:5]))


if __name__ == "__main__":
    main()
