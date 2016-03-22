var express = require('express');
var router = express.Router();

var BUZ1 = require('../module/obj.js');
var buz1 = new BUZ1()
var BUZ2 = require('../module/obj.js');
var buz2 = new BUZ2()


router.get('/1', function(req, res, next) {
  res.render('index', { title: buz1.log()});
});


router.get('/2', function(req, res, next) {
  res.render('index', { title: buz2.log()});
});

module.exports = router;
