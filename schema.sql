DROP DATABASE IF EXISTS bamazon_db;

create database bamazon_db; 

use bamazon_db; 

CREATE TABLE products (
id INTEGER(10) not null auto_increment ,
product_name VARCHAR(100) not null,
department_name VARCHAR(40) not null,
price DECIMAL (10,2) not null,
stock_quantitiy INTEGER(10) not null,
PRIMARY KEY(id)

);

INSERT INTO products (product_name, department_name, price, stock_quantitiy)
VALUES("Bamazon Echo", "Electronics", 24.99, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
VALUES("The Language of SQL", "Books",29.99, 500);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
VALUES("television mount", "Electronics Accessories", 24.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
VALUES("DLP Projector", "Electronics", 324.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
values("Paint Brush 12 pack", "Arts and Crafts", 10.00, 200);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
values("Dryer Balls", "Household", 14.99, 10000);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
values("Bamazon Echo", "Electronics", 24.99, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
values("Chicken Breast", "Grocery", 4.99, 250);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
values("MVMT silver watch", "Fashion", 114.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantitiy)
values("Bamazon Echo", "Electronics", 24.99, 1000);





