// Code for HTML routing 
var express = require('express');

// Router for app 
var router = express.Router();

// Import burger.js to use its databaase function
var burger = require('../models/burger.js');

// Create our routes and set up the logic within those routes when required
router.get('/', function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/', function (req, res) {
	burgers.insertOne(
		req.body.burger_name,
		function() {
			res.redirect('/');
		});
});

router.put('/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.update({
		'devour': req.body.devour
	}, condition, function() {
		res.redirect("/");
	});
});

// Export the routes
module.exports = router;