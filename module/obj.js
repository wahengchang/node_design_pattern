
// buz.js
var Buz = function () {
	this.arr = []
	this.arr.push(0)
};


Buz.prototype.log = function () {
  this.arr.push(this.arr.length)
  console.log(this.arr);
  return this.arr
};

Buz.prototype.chain1 = function (str) {
  this.arr.push(str)
  
  return this
};

module.exports = Buz;