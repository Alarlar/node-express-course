const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("phoneCall", (answer) => {
    console.log(`Pick the phone:  ${answer}!`);
});

emitter.on("math", (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
});

setTimeout(() => {
    emitter.emit("phoneCall", "Hello, this is software engineer office");
}, 2000)

emitter.emit("math", 5, 7);