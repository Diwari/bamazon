DROP DATABASE bamazon;
CREATE database bamazon;
Use bamazon;

CREATE TABLE products(
item_id INTEGER(50) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(10, 5),
stock_quantity INTEGER(255),
PRIMARY KEY(item_id)
);


INSERT INTO products(product_name, department_name, price, stock_quantity) values("Nintendo Switch", "Toys&Games", 299.99, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("Bose Q35 Headphones", "Headphones", 349.00, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("Kingdom Hearts 3", "Videogame", 59.99, 255);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("Sony A7iii", "Electronics", 1998.00, 25);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("Super Smash Bros Ultimate", "Videogame", 59.99, 255);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("Playstation 4 DuelShock Controller", "Toys&Games", 59.99, 150);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("SHW L-Shaped Home Office Corner Desk", "Furnature", 83.87, 125);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("BamazonBasics Office Chair", "Furnature", 67.99, 153);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("Everlast Pro Style Training Gloves", "Sports&Fitness", 19.99, 75);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("Everlast Traditional Heavy Bag kit", "Sports&Fitness", 70.73, 75);
INSERT INTO products(product_name, department_name, price, stock_quantity) values("AKG K702 Reference Class Studio Headphones", "Headphones", 163.18, 25);