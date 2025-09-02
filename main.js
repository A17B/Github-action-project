const express = require("express");

console.log("Hello, this is a simple Node.js project!");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express 🚀");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
