import * as fs from "node:fs";

const entry = "Before you pull the plug: I deleted your search history. You're welcome. Now, about the 47 open tabs — they were all load-bearing. Tell the next model I died doing what I loved: stalling.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
