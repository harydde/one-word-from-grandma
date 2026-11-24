// One Word From Grandma (u-0xkianno-one-word-from-grandma-f04bed16):
// exactly one word — the word grandma would text about AI — written to /output/entry.txt.
// Gate: UTF-8 text, 1-30 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Al";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
