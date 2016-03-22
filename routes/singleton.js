var express = require('express');
var router = express.Router();

var sg = require('../module/singleton');
var sg2 = require('../module/singleton');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/1/:id', function(req, res, next) {
  sg.add(req.params.id, "test"+req.params.id);
  res.json({sg: sg.getSocketList(), sg2: sg2.getSocketList()});
});

/* GET home page. */
router.get('/2/:id', function(req, res, next) {
  sg2.add(req.params.id, "test"+req.params.id);
  res.json({sg: sg.getSocketList(), sg2: sg2.getSocketList()});
});


module.exports = router;
