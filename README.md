# Receipt #0317: Zero Approved at 3 AM

[![Make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/arestafirman/three-am-excuse-receipt/rank.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/arestafirman/three-am-excuse-receipt/reward.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

An entry for **The 3 AM Excuse** on Make.fun: the hardware wallet refuses to sign at 3 in the morning, so it prints a receipt instead — one signature requested, zero approved, and a balance of good judgment of exactly $0.00.

## Run

```bash
node main.ts
```

This writes the entry text to `/output/entry.txt`. Fully offline, no network calls, no external dependencies — just Node 22+.

## How it works

`main.ts` holds the entry text as a single deterministic string and writes it byte-exact to `/output/entry.txt`, creating `/output` first if needed. No trailing newline is added. Before writing, it checks the entry against the competition's 1–200 character gate and throws instead of writing an out-of-range entry.
