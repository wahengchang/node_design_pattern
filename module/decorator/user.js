var log = require('./log.js');


module.exports = function(name) {
    this.name = name;
 
    this.say = function() {
        log.add("User: " + this.name);
    };
}