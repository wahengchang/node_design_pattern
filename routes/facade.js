var express = require('express');
var router = express.Router();

var facade1 = require('../module/facade');


router.get('/', function(req, res, next) {
	var F1 = new facade1("peter")

	console.log(F1.getName())
	console.log(F1.applyFor(500))

	res.render('index', { title: "facade"});
});


module.exports = router;
