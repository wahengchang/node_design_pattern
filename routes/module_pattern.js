var express = require('express');
var router = express.Router();

var MP = require('../module/module_pattern.js');
var MPX = require('../module/module_pattern.js');

router.get('/1', function(req, res, next) {
	var mp = MP()

	console.log(mp.publicMethod())
	console.log(mp.callPrivateMethod())

	// console.log(mp.privateMethod())
  res.render('index', { title: "mp1"});
});


router.get('/2', function(req, res, next) {
	var mp_x = MPX()

	console.log("------------------")
	console.log(mp_x.publicMethod())
	console.log(mp_x.callPrivateMethod())
	console.log(mp_x.extension())
	// console.log(mp.privateMethod())
  res.render('index', { title: "mp2"});
});


module.exports = router;
