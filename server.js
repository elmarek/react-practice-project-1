const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const db = require("./database/db.js");
const bodyParser = require("body-parser");

// db.find({}, (error, results) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(results);
//   }
// });

app.use(express.static(path.join(__dirname, "./dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(200);
});
app.post("/login", (req, res) => {
  const email = req.body.state.email;
  const password = req.body.state.password;
  let userData = null;
  db.find({ email }, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log("User data from DB: ", results);
      console.log("password is : ", results[0].password);
      if (password === results[0].password) {
        userData = results;
      }
    }
  });
  res.send(userData);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
