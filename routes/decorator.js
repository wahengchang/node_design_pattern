var express = require('express');
var router = express.Router();

var DecoratedUser = require('../module/decorator');
var User = require('../module/decorator/user');
var log = require('../module/decorator/log');

//from: http://www.dofactory.com/javascript/decorator-design-pattern
//Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.


router.get('/', function(req, res, next) {
 
    var user = new User("Kelly");
    user.say();
 
    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
 
    log.show();

	res.render('index', { title: "decorator"});
});


module.exports = router;
