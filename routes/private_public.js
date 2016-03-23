var express = require('express');
var router = express.Router();

var Rand = require('../module/getRandomInt.js');
// var Rand = require('../module/export_anon_function');

var PP1 = require('../module/private_public.js');
var pp1 = new PP1(Rand())
var PP2 = require('../module/private_public.js');
var pp2 = new PP2(Rand())


router.get('/1', function(req, res, next) {
	console.log("---- pp1.privateArr")
	console.log(pp1.privateArr)
	console.log("---- pp1.publicArr")
	console.log(pp1.publicArr)
	console.log("---- pp1.showprivateArr(Rand())")
	console.log(pp1.showprivateArr(Rand()))
  res.render('index', { title: pp1.showpublicArr(Rand())});
});


router.get('/2', function(req, res, next) {
	console.log("***** pp2.privateArr")
	console.log(pp2.privateArr)
	console.log("***** pp2.publicArr")
	console.log(pp2.publicArr)
	console.log("***** pp2.showprivateArr(Rand())")
	console.log(pp2.showprivateArr(Rand()))
  res.render('index', { title: pp2.showpublicArr(Rand())});
});


module.exports = router;
