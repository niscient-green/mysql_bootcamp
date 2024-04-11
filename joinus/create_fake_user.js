// Import packages
var { faker } = require("@faker-js/faker");
var mysql = require("mysql2");

// Open MYSQL connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AAAAAAAAAAAAAAAAAAAAAAAA",
  database: "joinus",
});

// Get user count
var q = "SELECT COUNT(*) AS total_users FROM users";
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].total_users);
});

// Insert one user
// var q = "INSERT INTO users (email) VALUES ('wyattTheDog@gmail.com')";
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// Insert multiple users
// for (i = 0; i < 500; i++) {
//   var user = { email: faker.internet.email(), created_at: faker.date.past() };
//   var q = "INSERT INTO users SET ?";
//   var connection_result = connection.query(q, user, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   });
//   console.log(connection_result)
// }

// Insert multiple users with a single query
var data = [];
for (var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
var q = "INSERT INTO users (email, created_at) VALUES ?";
var connection_result = connection.query(
  q,
  [data],
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  }
);
console.log(connection_result);

// Close the connection
connection.end();
