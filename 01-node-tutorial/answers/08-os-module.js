const os = require("os"); // Build in module

const info = os.arch();
console.log(info);

const myOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  model: os.cpus(),
  parallelism: os.availableParallelism(),
};
console.log(myOS);
