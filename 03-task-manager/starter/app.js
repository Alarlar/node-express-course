const express = require("express");
const app = express();
const tasks = require('./routes/tasks')


// middleware
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use('/api/v1/tasks', tasks) // root route for tasks


const port = 5001;

app.listen(port, console.log(`Server is listening on port ${port}...`));
