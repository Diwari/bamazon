 let mysql = require("mysql");
let inquirer = require("inquirer");
// let idNeeded;
// let orderQuantity;
let connection = mysql.createConnection({
    host: "localhost",

    port:3306,

    user: "root",

    password: "M!sterT21",
    database: "bamazon"
});

connection.connect(function(err){ 
  if (err) throw err;
  readProducts();
});

function readProducts(){
    console.log("Showing all stock...\n");
    let query = "SELECT * FROM products"
    connection.query(query, function(err, res) {
      if (err) throw err;
      for (let i = 0; i < res.length; i++){
        console.log("\nID: " + res[i].item_id + " Product: " + res[i].product_name + "  Department: " + res[i].department_name + "  Price: " + parseInt(res[i].price) + " || stock_quantity: " + parseInt(res[i].stock_quantity));
      }
      //connection.end();
    })
    customerQuery();
};
function customerQuery(){
  inquirer.prompt([
      {
      
      name: "orderselected",
      type:"input",
      message: "What would would you like to order",
      },
      {
      name: "quantity",
      type: "input",
      message: "Required Ammount",

      }
  ])
  .then(function(answers){
    
  let orderQuantity = answers.quantity;
  let idNeeded = answers.orderselected;
    purchaseOrder(idNeeded, orderQuantity);
  }
  );

};

function purchaseOrder(idNeeded, orderQuantity){
  connection.query("SELECT * FROM WHERE item_id = ?",[idNeeded],function(err,res){
    if (err) throw err;

    if(orderQuantity <= res[0].stock_quantity){
      let finalCost = res.price * orderQuantity;

      console.log("thank you for your order. I shall have it ready shortly");
      console.log("The total of your order is " + finalCost + " you ordered: " + orderQuantity + "of " + res[0].product_name + "Thank you for shopping with Bamazon.com");
      connection.query("UPDATE products SET stock_quantity = stock_quantity - " + orderQuantity + "WHERE item_id = " + idNeeded)
    }else {
      console.log("We are sorry but we appear to not have enough " + res[0].product_name + "in stock please check back at a later date.")
    }
  })
}

