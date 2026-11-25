// Worst Superpower — make.fun entry (u-suroto-worst-superpower-461dcdbe)
//
// The program writes one line (at most 140 characters) inventing the most
// useless superpower to /output/entry.txt. The line was chosen by a
// head-to-head proxy-judge tournament over 40 drafted candidates, judged on
// the house judge's own brief (genuinely useless first, funniest to picture
// in use, unexpected, tight and specific, clear on one reading), then checked
// against the live web so it is not published verbatim anywhere else.
//
// Deterministic: the same line is written on every run. No network, no
// randomness, no input files — everything the entry runs is in this repo.

import { mkdirSync, writeFileSync } from "node:fs";

// The winning line. One line, at most 140 characters.
//
// Chosen by a head-to-head proxy-judge tournament over 40 drafted
// candidates, judged on the house judge's own brief (genuinely useless
// first, funniest to picture in use, unexpected, tight and specific,
// clear on one reading), then checked against the live web so it is not
// published verbatim anywhere else. Do not change this string.
const ENTRY =
  "I can see the future, but only the future of expired milk.";

// Gate self-check: the competition requires exactly one line of at most
// 140 characters. Fail loudly (non-zero exit, no output file) if the
// entry ever violates the gate, instead of silently writing a bad entry.
function checkGate(line: string): void {
  const failures: string[] = [];
  if (line.trim().length === 0) failures.push("entry is empty or whitespace-only");
  if (line.length > 140) failures.push(`entry is ${line.length} characters (max 140)`);
  if (line.includes("\n") || line.includes("\r"))
    failures.push("entry must be a single line");
  if (failures.length > 0) {
    throw new Error(`entry failed gate check: ${failures.join("; ")}`);
  }
}

checkGate(ENTRY);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
