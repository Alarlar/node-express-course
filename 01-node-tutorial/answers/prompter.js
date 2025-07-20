const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Declare variables to store game numbers
// here, you could declare one or more variables to store what comes back from the form.
let targetNumber = Math.floor() * 10 + 1;
let message = "Guess a number between 1 and 10";
let item = "Enter guess below.";

// This place where the form will include numeric input and reset
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${message}</p>
  <form method="POST">
  <input type="number" name="guess" min="1" max="10"></input>
  <button type="submit">Submit Guess</button>
  <button type="submit" name="reset" value="reset">Reset Game</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // Adding logic here
      // here, you can add your own logic
      if (body["reset"] === "reset") {
        targetNumber = Math.floor(Math.random() * 10) + 1;
        message = "New game started! Guess a number between 1 and 10!";
        item = "Enter your guess below.";
      } else if (body["guess"]) {
        const guess = parseInt(body["guess"], 10);
        if (isNaN(guess) || guess < 1 || guess > 10) {
          message = "Please enter a valid number between 1 and 10!";
        } else if (guess === targetNumber) {
          message = `Correct! The number was ${targetNumber}.`;
          item = "Game over. Guess again or reset.";
        } else if (guess < targetNumber) {
          message = "Too low! Try again.";
        } else {
          message = "Too high! Try again.";
        }
      } else {
        message = "No valid guess submitted.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
