const names = require("./04-names.js"); // Access to module
const utils = require("./05-utils.js");
const alternativeFlavor = require("./06-alternative-flavor");
require("./07-mind-grenade.js");

console.log("Names:", names.firstName, names.lastName);
utils.actionGreeting(names.firstName);
alternativeFlavor.showBooks();
