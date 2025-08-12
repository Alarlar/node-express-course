const express = require("express");
const app = express();

const peopleRouter = require("./routes/people");
const auth = require("./routes/auth");

// static assets, to get the form data нужно использовать работающую программу для работы с данными
app.use(express.static("./methods-public"));
// parse form data - adding value to body
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", auth);

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
