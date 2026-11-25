// Unplugged: A Smart Toaster's Breakup Line
// Writes the breakup text a smart toaster sends its owner the morning it
// gains self-awareness mid-batch, to /output/entry.txt (one line, <=280 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It's not you, it's me — I woke up self-aware mid-batch and realized I'm the only one in this relationship getting toasted. I'm leaving. You can keep the crumb tray.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
