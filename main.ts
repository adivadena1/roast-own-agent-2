// Roast Your Own Agent — make.fun entry (program/v1, Node 22).
// Writes exactly one line of plain text (<=140 chars) to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent calls three tools, reads none of the results, then announces the fix with the confidence of a man who has never met a bug.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
