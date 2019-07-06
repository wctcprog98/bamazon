DROP DATABASE IF EXISTS bamazon_db;

create database bamazon_db; 

use bamazon_db; 

create table products (
id integer(10) not null auto_increment,
product_name varchar(100) not null,
department_name varchar(40) not null,
price integer(10) not null,
stock_quantitiy integer(10) not null,
primary key(id)

);

insert into products (product_name, department_name, price, stock_quantitiy)
values("Bamazon Echo", "Electronics", 24.99, 1000);

insert into products(product_name, department_name, price, stock_quantitiy)
values("The Language of SQL", "Books",29.99, 500);

insert into products(product_name, department_name, price, stock_quantitiy)
values("television mount", "Electronics Accessories", 24.99, 100);

insert into products(product_name, department_name, price, stock_quantitiy)
values("DLP Projector", "Electronics", 324.99, 50);

insert into products(product_name, department_name, price, stock_quantitiy)
values("Paint Brush 12 pack", "Arts and Crafts", 10.00, 200);

insert into products(product_name, department_name, price, stock_quantitiy)
values("Dryer Balls", "Household", 14.99, 10000);

insert into products(product_name, department_name, price, stock_quantitiy)
values("Bamazon Echo", "Electronics", 24.99, 1000);

insert into products(product_name, department_name, price, stock_quantitiy)
values("Chicken Breast", "Grocery", 4.99, 250);

insert into products(product_name, department_name, price, stock_quantitiy)
values("MVMT silver watch", "Fashion", 114.99, 20);

insert into products(product_name, department_name, price, stock_quantitiy)
values("Bamazon Echo", "Electronics", 24.99, 1000);





