var express = require('express');
var app = express();
var mysql = require("mysql2");

// app.get("/", function (req, res) {
//     res.send("Hello from our web app!");
// });

// app.get("/random_num", function (req, res) {
//   var num = Math.floor(Math.random() * 10 + 1);
//   res.send("Your lucky number is " + num);
// });

// app.get("/joke", function (req, res) {
//   var joke =
//     "What do you call a dog that does magic tricks? A labracadabrador.";
//   res.send(joke);
// });

app.set("view engine", "ejs")

app.listen(8080, function () {
  console.log("Server running on 8080!");
});

// Open MYSQL connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AAAAAAAAAAAAAAAAAAAAAAAA",
  database: "joinus",
});

app.get("/", function (req, res) {
  var q = "SELECT COUNT(*) as count FROM users";
  connection.query(q, function (error, results) {
    if (error) throw error;
    // var msg = "We have " + results[0].count + " users";
    // res.send(msg);
    var count = results[0].count
    res.render("home", {count: count});
  });
});

app.post("/register", function (req, res) {
  var person = { email: req.body.email };
  connection.query("INSERT INTO users SET ?", person, function (err, result) {
    console.log(err);
    console.log(result);
    res.redirect("/");
  });
});