import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

AGENTS_DIR = os.path.join(ROOT, "agents")
FRAMEWORKS_DIR = os.path.join(ROOT, "frameworks")


def count_agents():
    files = [f for f in os.listdir(AGENTS_DIR) if f.endswith(".md")]
    return len(files)


def count_frameworks():
    files = [f for f in os.listdir(FRAMEWORKS_DIR) if f.endswith(".md")]
    return len(files)


def validate_agent_numbering():
    files = sorted([f for f in os.listdir(AGENTS_DIR) if f.endswith(".md")])
    pattern = re.compile(r"^(\d+)-")

    numbers = []
    for f in files:
        match = pattern.match(f)
        if match:
            numbers.append(int(match.group(1)))

    numbers.sort()

    expected = list(range(min(numbers), max(numbers) + 1))

    return numbers == expected, numbers


def main():
    print("\n--- Repository Validation ---\n")

    agent_count = count_agents()
    framework_count = count_frameworks()

    print(f"Agents detected: {agent_count}")
    print(f"Frameworks detected: {framework_count}")

    valid, numbers = validate_agent_numbering()

    if valid:
        print("Agent numbering: OK")
    else:
        print("Agent numbering: INVALID")
        print(f"Detected numbers: {numbers}")

    print("\nValidation complete.\n")


if __name__ == "__main__":
    main()
