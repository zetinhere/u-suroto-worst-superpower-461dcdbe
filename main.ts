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
const ENTRY =
  "I can see the future, but only the future of expired milk.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
