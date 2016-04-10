
var Bank = require('./Bank.js');
var Background = require('./Background.js');
var Credit = require('./Credit.js');


// from: http://www.dofactory.com/javascript/facade-design-pattern
//The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems.


var Mortgage = function(name) {

    this.name = name;
}
 
Mortgage.prototype = {

    // fun1 : function(){ console.log("abc")} 
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    },

    // fun1 : function(){ console.log("abc")} 
    getName: function() {
        return this.name
    }
}


module.exports = Mortgage