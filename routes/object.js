var express = require('express');
var router = express.Router();

var BUZ1 = require('../module/obj.js');
var buz1 = new BUZ1()
var BUZ2 = require('../module/obj.js');
var buz2 = new BUZ2()
var BUZ3 = require('../module/obj_extend.js');
var buz3 = new BUZ3()


router.get('/1', function(req, res, next) {
  res.render('index', { title: buz1.log()});
});

router.get('/1/chain', function(req, res, next) {
  res.render('index', { title: buz1.chain1("abc").log()});
});


router.get('/2', function(req, res, next) {
  res.render('index', { title: buz2.log()});
});

router.get('/3', function(req, res, next) {
	console.log("buz3.show()")
	console.log(buz3.show())
  res.render('index', { title: buz3.log()});
});


module.exports = router;
