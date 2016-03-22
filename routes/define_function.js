var express = require('express');
var router = express.Router();

var df = require('../module/define_function');
var bar = require('../module/export_anon_function');
var fiz = require('../module/export_name_function').fiz;

var BUZ1 = require('../module/obj.js');
var buz1 = new BUZ1()
var BUZ2 = require('../module/obj.js');
var buz2 = new BUZ2()



router.get('/df', function(req, res, next) {
  foo();
  res.render('index', { title: "foo"});
});


router.get('/anony', function(req, res, next) {
  bar();
  res.render('index', { title: "anony"});
});


router.get('/named', function(req, res, next) {
  fiz();
  res.render('index', { title: "named"});
});


router.get('/obj/1', function(req, res, next) {
	buz1.log();
  res.render('index', { title: "obj1"});
});


router.get('/obj/2', function(req, res, next) {
	buz2.log();
  res.render('index', { title: "obj2"});
});

module.exports = router;
