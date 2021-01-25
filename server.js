const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const Comments = require("./database/db.js");

Comments.find({}, (error, results) => {
  if (error) {
    throw error;
  } else {
    console.log(results);
  }
});

app.use(express.static(path.join(__dirname, "./dist")));

app.get("/", (req, res) => {
  res.send(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
