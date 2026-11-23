// The Vacuum's Alibi — one line, 200 characters max.
// The vacuum writes its excuse to /output/entry.txt (the sandbox output
// directory; OUTPUT_DIR overrides it for local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I did not miss that spot. My sensors logged the crumb, my battery vetoed the detour, and the crumb is now load-bearing.";

if (LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, over the 200 limit`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be blank");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
