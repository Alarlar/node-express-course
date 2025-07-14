// const { readFileSync, readFileSync } = require("fs"); Another way

const fs = require("fs");

fs.writeFileSync("./temporary/fileA.txt", "First line\n");

fs.writeFileSync("./temporary/fileA.txt", "Second line\n", { flag: "a" });
fs.writeFileSync("./temporary/fileA.txt", "Third line\n", { flag: "a" });

const content = fs.readFileSync("./temporary/fileA.txt", "utf8");
console.log(content);
