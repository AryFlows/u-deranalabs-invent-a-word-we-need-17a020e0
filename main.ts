import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// tabnesia (n.) — opening a new browser tab to look something up,
// then forgetting what it was the moment it loads.
const ENTRY =
  "tabnesia (n.) — opening a new browser tab to look something up, then forgetting what it was the moment it loads.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate scores /output/entry.txt as valid only at 1-140 characters.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters; gate is 1-140`);
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
