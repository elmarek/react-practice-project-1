const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const Comments = require("./database/db.js");
const bodyParser = require("body-parser");

Comments.find({}, (error, results) => {
  if (error) {
    throw error;
  } else {
    console.log(results);
  }
});

app.use(express.static(path.join(__dirname, "./dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(200);
});
app.post("/login", (req, res) => {
  const email = req.body.state.email;
  const pass = req.body.state.password;
  console.log("email is :", email, "password is :", pass);
  res.send(200);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
