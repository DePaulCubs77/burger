var connection = require("../config/connection.js");
  
 // Thses functions are made up of an object that will query the database
var burger = {
	select: function(cb) {
		connection.query ("SELECT * FROM burgers", function(err,res) {
			if (err) throw err;
			cb(res);
		});
	},

	create: function(burgerName) {
		// This will create a new burger in the database
		connection.query("INSERT INTO 'burgers' ('id', 'burgers_name', 'devoured', 'date')" +
		"VALUES (NULL, '" + burgerName + "', FALSE, CURRENT_TIMESTAMP);",
		function(err, res) {
			if (err) throw err;
		});

	},

	update: function(burger_id) {
		connection.query(" ",
			function(err, res) {
				if (err) throw err;
			});
			
	}

};



module.exports = burger;