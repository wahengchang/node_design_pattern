var user = require('./user.js');
var log = require('./log.js');


var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;
 
    this.say = function() {
        log.add("Decorated User: " + this.name + ", " +
                   this.street + ", " + this.city);
    };
}

module.exports = DecoratedUser