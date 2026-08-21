#!/usr/bin/env python3
"""
Repository structure validator for Product Architect.

Checks that the repo's structure is internally consistent:
  - counts agents and frameworks (dynamically — never hard-coded)
  - verifies agent files are numbered sequentially with no gaps (00..N)
  - verifies every agent/framework file is non-empty and has an H1 heading
  - cross-checks the agent/framework counts asserted in SKILL.md and README.md
    against the real file counts, so the "NN agents / MM frameworks" claims
    can never silently drift out of date

Exit code 0 = all good, 1 = problems found. Usage: python tools/validate_repo.py

Originally proposed by @CreatorBW (PR #2); updated to be count-agnostic and to
add the doc-consistency cross-check so it stays correct as the repo grows.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AGENTS_DIR = os.path.join(ROOT, "agents")
FRAMEWORKS_DIR = os.path.join(ROOT, "frameworks")

errors = []
warnings = []


def md_files(directory):
    return sorted(f for f in os.listdir(directory) if f.endswith(".md"))


def check_files_well_formed(directory, label):
    """Every .md file must be non-empty and start with an H1 ('# ')."""
    for name in md_files(directory):
        path = os.path.join(directory, name)
        with open(path, encoding="utf-8") as fh:
            content = fh.read().strip()
        if not content:
            errors.append(f"{label} file is empty: {name}")
            continue
        first = content.splitlines()[0].lstrip("﻿").strip()
        if not first.startswith("# "):
            errors.append(f"{label} file missing H1 heading: {name} (starts with {first!r})")


def validate_agent_numbering():
    """Agent files must be numbered 00..N with no gaps or duplicates."""
    pattern = re.compile(r"^(\d+)-")
    numbers = []
    for name in md_files(AGENTS_DIR):
        m = pattern.match(name)
        if m:
            numbers.append(int(m.group(1)))
        else:
            errors.append(f"Agent file is not numbered 'NN-...': {name}")
    if not numbers:
        errors.append("No numbered agent files found.")
        return []
    dupes = {n for n in numbers if numbers.count(n) > 1}
    if dupes:
        errors.append(f"Duplicate agent numbers: {sorted(dupes)}")
    expected = list(range(min(numbers), max(numbers) + 1))
    missing = sorted(set(expected) - set(numbers))
    if missing:
        errors.append(f"Gap in agent numbering — missing: {missing}")
    if min(numbers) != 0:
        warnings.append(f"Agent numbering starts at {min(numbers):02d}, expected 00.")
    return sorted(numbers)


def stated_counts(filename):
    """Pull the 'NN ... agents' and 'MM frameworks' numbers asserted in a doc."""
    path = os.path.join(ROOT, filename)
    if not os.path.exists(path):
        return None, None
    text = open(path, encoding="utf-8").read()
    a = re.search(r"(\d+)\s+(?:specialized\s+)?agents", text)
    f = re.search(r"(\d+)\s+(?:strategic\s+)?frameworks", text)
    return (int(a.group(1)) if a else None, int(f.group(1)) if f else None)


def cross_check_docs(agent_count, framework_count):
    for doc in ("SKILL.md", "README.md"):
        a, f = stated_counts(doc)
        if a is not None and a != agent_count:
            errors.append(f"{doc} says {a} agents but {agent_count} agent files exist.")
        if f is not None and f != framework_count:
            errors.append(f"{doc} says {f} frameworks but {framework_count} framework files exist.")


def all_markdown_files():
    """Every .md file in the repo, excluding .git."""
    found = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d != ".git"]
        for name in filenames:
            if name.endswith(".md"):
                found.append(os.path.join(dirpath, name))
    return sorted(found)


def check_code_fences(paths):
    """Every ``` must be closed — an unbalanced fence silently swallows content."""
    for path in paths:
        with open(path, encoding="utf-8") as fh:
            count = sum(1 for line in fh if line.startswith("```"))
        if count % 2 != 0:
            rel = os.path.relpath(path, ROOT)
            errors.append(f"Unbalanced code fences ({count}) in {rel} — every ``` must be closed.")


# Markdown links to local .md targets. Skips URLs (http:, mailto:) and pure anchors.
LINK_RE = re.compile(r"\]\((?!https?:|mailto:|#)([^)\s#]+\.md)(?:#[^)\s]*)?\)")


def check_internal_links(paths):
    """Every relative link to a .md file must resolve — catches renames and typos."""
    for path in paths:
        with open(path, encoding="utf-8") as fh:
            content = fh.read()
        base = os.path.dirname(path)
        for link in set(LINK_RE.findall(content)):
            if not os.path.isfile(os.path.normpath(os.path.join(base, link))):
                rel = os.path.relpath(path, ROOT)
                errors.append(f"Broken link in {rel} -> {link}")


def main():
    print("\n--- Product Architect: Repository Validation ---\n")

    agent_files = md_files(AGENTS_DIR)
    framework_files = md_files(FRAMEWORKS_DIR)
    agent_count = len(agent_files)
    framework_count = len(framework_files)
    markdown = all_markdown_files()

    print(f"Agents detected:     {agent_count}")
    print(f"Frameworks detected: {framework_count}")
    print(f"Markdown files:      {len(markdown)}")

    numbers = validate_agent_numbering()
    if numbers:
        print(f"Agent numbering:     {numbers[0]:02d}..{numbers[-1]:02d}")

    check_files_well_formed(AGENTS_DIR, "Agent")
    check_files_well_formed(FRAMEWORKS_DIR, "Framework")
    cross_check_docs(agent_count, framework_count)
    check_code_fences(markdown)
    check_internal_links(markdown)

    print()
    for w in warnings:
        print(f"  [warn]  {w}")
    for e in errors:
        print(f"  [FAIL]  {e}")

    if errors:
        print(f"\nValidation FAILED with {len(errors)} error(s).\n")
        sys.exit(1)
    print("\nValidation passed. Structure is consistent.\n")


if __name__ == "__main__":
    main()
