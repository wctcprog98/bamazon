var mysql = require("mysql");
var inquirer = require("inquirer");
var express = require("express");
var app = express();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  PORT: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Topper333",
  database: "bamazon_db"
});



// connect to the mysql server and sql database
connection.connect(function (err) {
  console.log("Connected as id: " + connection.threadId); 
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  