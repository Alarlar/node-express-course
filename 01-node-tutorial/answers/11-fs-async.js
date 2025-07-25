const { readFile, writeFile } = require("fs");

console.log("at start");
writeFile("./temporary/fileB.txt", "First line\n", (err) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    console.log("Starting to write second line");
    writeFile(
      "./temporary/fileB.txt",
      "Second line\n",
      { flag: "a" },
      (err) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
          console.log("Starting to write third line");
          writeFile(
            "./temporary/fileB.txt",
            "Third line\n",
            { flag: "a" },
            (err) => {
              console.log("at point 3");
              if (err) {
                console.log("This error happened: ", err);
              } else {
                console.log("All lines written, reading file");
                readFile("./temporary/fileB.txt", "utf8", (err, data) => {
                  console.log("at point 4");
                  if (err) {
                    console.log("This error happened: ", err);
                  } else {
                    console.log("File contents:", data);
                  }
                });
              }
            }
          );
        }
      }
    );
  }
});
console.log("at end"); // This one is Sync so thats why it is emidiatly showing in output after 'at start'
