var mysql = require("mysql");
var inquirer = require("inquirer");
var express = require("express");
var app = express();
//Use table to display table
var Table = require("cli-table");
//chalk for error message
const chalk = require('chalk');

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
  if (err) throw err;
  console.log("Connected as id: " + connection.threadId);
  displayProducts(); 
  // afterConnection(); 
});

//display PRODUCTS AVAILABLE.
function displayProducts() {	
	connection.query("Select * FROM products", function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Department Name", "Price", "Stock Quantity"],
			colWidths: [10,25,25,10,14]
    });
    
		for(var i = 0; i < res.length; i++){
      displayTable.push(
        // product_name, department_name, price, stock_quantitiy
				[res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
      );
    }
    console.log(displayTable.toString());
    productPrompt(); 
    
	});
}

var productPrompt = function (res) {
  inquirer.prompt([{
    message: "What's the id of the product you would like to purchase? ",
    type: "input",
    name: "productID",
    validate: function (value) {
      if (isNaN(value) === false) {
        return true;
      }
      console.log(chalk.red('Please enter a number from 1-10'));
      return false;
    }
  }, {
    message: "What quantity would you like to purchase? ",
    type: "input",
    name: "quantity",
    validate: function (value) {
      if (isNaN(value) === false) {
        return true;
      }
      console.log(chalk.red('Please enter a number from 1-10'));
      return false;
    }
  },
  {
    type: "confirm",
    message: "Are you sure?",
    name: "confirm",
    default: true
  },
  ]).then(function (answers) {
    var quantityNeeded = answers.quantity;
    var idNeeded = answers.productID;
    console.log(idNeeded);
    
    connection.query("SELECT * FROM products WHERE id = " + idNeeded, function (err, res) {
      if (err) throw err;
      console.log("Here is your order information and our current stock.")
      console.log(res); 
    });

  });
}



//check if quantitiy is available

//get id entered by user and select from database and show results to customer
//ask quantity wanted to buy
//calculate total purchase price
//update quantity in database


//   }]).then(function (answer) {
//     connection.query("")
    


//   })

// }
// var prodQuestions = [{
 

// inquirer.prompt(prodQuestions, typeOfProduct);


