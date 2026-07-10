import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const banned = [/messkirch/i, /meßkirch/i, /germany/i, /deutschland/i, /außenstelle/i];
const roots = ["src", "index.html"];
const matches = [];

function scanFile(filePath) {
  const text = readFileSync(filePath, "utf8");
  for (const pattern of banned) {
    if (pattern.test(text)) {
      matches.push(`${filePath}: ${pattern}`);
    }
  }
}

function walk(path) {
  const stats = statSync(path);
  if (stats.isDirectory()) {
    for (const entry of readdirSync(path)) {
      walk(join(path, entry));
    }
    return;
  }

  if (/\.(html|jsx|js|css|json|md)$/.test(path)) {
    scanFile(path);
  }
}

for (const root of roots) {
  walk(root);
}

if (matches.length) {
  console.error("Blocked content found:");
  console.error(matches.join("\n"));
  process.exit(1);
}

console.log("Content check passed: no blocked location references found.");
