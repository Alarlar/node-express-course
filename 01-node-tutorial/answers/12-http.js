const http = require("http"); // Our Module

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // To see clean text on browser
  // Creating server
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`<h1>Bulat my friend can't find any bug</h>
    <p>That is why you can't find the page you are looking for
    <a href="/">back home</a>`);
});

server.listen(3000);
