const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "temporary", "temp.txt");

writeFile(filePath, "First line\n")
  .then(() => {
    return writeFile(filePath, "Second line\n", { flag: "a" });
  })
  .then(() => {
    return writeFile(filePath, "Third line\n", { flag: "a" });
  })
  .then(() => {
    return readFile(filePath, "utf8");
  })
  .then((data) => {
    console.log("Contents of temp.txt:");
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
