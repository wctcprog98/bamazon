### bamazon

This is a Disney trivia game that allows the user to guess the correct answer within one minute and 30 seconds. The game begins when the user clicks the start button, this shows the questions on the main screen and starts the countdown timer. The final page shows how many answers were correct and incorrect if the user clicks the submit button or if the results will also be shown if their is no time left on the timer. 

##Getting Started
1. Clone repo.
2. Run command in Terminal or Gitbash 'npm install'
3. In terminal run node bamazonCustomer and hit enter to start program
4. Run 'ctrl + c' to exit each mode

## How it works
#BamazonCustomer.js

- Displays table of products available or sale
    - price
    - product name
    - id
    - quantity 
    - department 

- Prompts customer for which product they would like to purchase by either entering in the id number or by selecting it from the dropdown menu.

- Asks for the quantity needed.

If there is a sufficient amount of the product in stock, it will return the total for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product and the program will then run from the beginning asking for product needed and quantity.
If the purchase goes through, it updates the stock quantity to reflect the purchase and displays the total for the purchase.


##Built With
* Jquery
* JavaScript
* CSS
* HTML
* node js
* inquirer 
* npm 

##To Do 

* Add Manager options
* Add new products to database
* Update or change quantity in manager 
* Add an exit option 
##Author 

Nenye Diei
Click hear to check out my other projecfs in my [portfolio](https://wctcprog98.github.io/responsive-portfolio/)