// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Tells node that we are creating an express server
var app = express();

// Sets an initial port
var PORT = 3000;

// // Serve static contentfor the app from the "public" directory in the application directory
// app.use(express.static(__dirname + "/public"));

// // Override with POST having ?_method=DELETE
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// var mysql = require("mysql");

// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "",
// 	database: "burgers_db"
// });


// Starts the server to begin listening
app.listen(PORT);
console.log("listening on " + PORT);