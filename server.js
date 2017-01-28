// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Tells node that we are creating an express server
var app = express();

// Sets an initial port
var PORT = 3000;

// Router
var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// Override with POST having ?_method=DELETE
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Starts the server to begin listening
app.listen(PORT);
console.log("listening on " + PORT);