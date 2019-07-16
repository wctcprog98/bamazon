var mysql = require("mysql");
var inquirer = require("inquirer");
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
  connection.query("Select * FROM products", function (err, res) {
    if (err) throw err;
    var displayTable = new Table({
      head: ["Item ID", "Product Name", "Department Name", "Price", "Stock Quantity"],
      colWidths: [10, 25, 25, 10, 14]
    });

    for (var i = 0; i < res.length; i++) {
      displayTable.push(
        // product_name, department_name, price, stock_quantitiy
        [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
      );
    }
    console.log(displayTable.toString());
    // productPrompt(); 
    
userChoice(); 
  });
}
function userChoice(){
  // query the database for all items
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "productID",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What product you would like to purchase (press CTRL + c to EXIT)?"
        },
        {
          type: "input",
          name: "quantity",
          message: "What quantity would you like to purchase?",
          validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            console.log(chalk.red('Please enter a number from 1-10')); //red text if NaN
            return false;
          }
        }
      ])
      .then(function (answer) {
        var quantityNeeded = answer.quantity;
        var productName = answer.productID;
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === productName) {
            chosenItem = results[i];
          }
        }
        // determine if enough stock on hand
        if (quantityNeeded < chosenItem.stock_quantity) {
          console.log("You are in luck we have that product in stock!");
          //calculte total purchase price
          var productPrice = chosenItem.price;
          var cost = quantityNeeded * productPrice;
          console.log("Your total is $" + cost.toFixed(2));
          //update stock in db
          var updatedStock = chosenItem.stock_quantity - quantityNeeded;
          console.log(updatedStock);
          connection.query("UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: updatedStock
              },
              {
                id: chosenItem.id
              }
            ],
            function (error) {
              if (error) throw err;
              //shows table again with updated quantity after purchase
              // displayProducts();
              reprompt();
            })
        }
        else {
          //quantity not available
          console.log("We don't have enough stock available please enter a smaller quantity...");
          userChoice(); 
        }
      });
  });
}

//asks if they would like to purchase another item
function reprompt(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Would you like to purchase another item?"
  }]).then(function(ans){
    if(ans.reply){
      userChoice();
    } else{
      console.log("See you soon!");
      connection.end(); 
    }
  });
}

