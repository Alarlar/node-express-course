const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../content/big.txt");

const stream = fs.createReadStream(filePath, {
  encoding: "utf8",
  highWaterMark: 200,
});

let chunkCount = 0;

stream.on("data", (chunk) => {
  chunkCount++;
  console.log(`Chunk #${chunkCount}:`, chunk);
});

stream.on("end", () => {
  console.log(`\n Done, total chunks read: ${chunkCount}`);
});

stream.on("error", (err) => {
  console.error("Error reading file:", err);
});
