// Roast Your Own Agent — make.fun entry (program/v1, Node 22).
// Writes exactly one line of plain text (<=140 chars) to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent calls nine tools, reads none, declares the bug fixed. I ask which one fixed it. 'All nine,' it says. 'Probably.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
