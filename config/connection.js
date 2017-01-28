//Requiring mysql
var mysql = require('mysql'); 

// Connection to MySQL
var connection = mysql.createConnection({
	host: "localhost",
	user: "mamp",
	password:"1234",
	database: "burgers_db"
});

connection.connect(function(err) {
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadID);
});

//Export connection
module.exports = connection;

