var express = require('express');
var router = express.Router();

var middle = require('../module/middleware');

///////////////////////////////////////////
//middleware USE function --- 1
///////////////////////////////////////////
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


///////////////////////////////////////////
//middleware USE function --- 2
///////////////////////////////////////////
router.use('/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
}, function (req, res, next) {
  console.log('Request finished router.use . . .. . ..');
  next();
});


///////////////////////////////////////////
//middleware USE function --- 3
///////////////////////////////////////////

router.get('/:id',middle.getId,middle.isIdEquZero, function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('index', { title: "regular"});
});

// handler for the /user/:id path, which renders a special page
router.get('/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('index', { title: "special"});
});



router.get('/', function(req, res, next) {

	res.render('index', { title: "Middleware"});
});


module.exports = router;
