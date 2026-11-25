import { mkdirSync, writeFileSync } from "node:fs";

const LEAD =
  "3 AM, and my screen just printed your receipt: 1 signature requested, 0 approved, balance of good judgment $0.00 — payable only in eight hours of sleep.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Entry gate: the competition accepts 1–200 characters. Fail loudly
// instead of writing an entry the grader would reject.
if (LEAD.length < 1 || LEAD.length > 200) {
  throw new Error(`Entry is ${LEAD.length} characters, outside the 1–200 range.`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LEAD, "utf8");

console.log(`Wrote ${LEAD.length} characters to ${OUTPUT_FILE}`);
