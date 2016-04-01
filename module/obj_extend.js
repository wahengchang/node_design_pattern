 

var obj = require('../module/obj.js');
// var obj = require('obj.js')
var inherits     = require('util').inherits


function Foo(bar) {
  obj.call(this);
}

inherits(Foo, obj);

Foo.prototype.show = function show() {
    this.arr.pop();
    console.log("show:" + this.log());
};

module.exports = Foo;