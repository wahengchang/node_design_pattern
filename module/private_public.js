 
// buz.js
var API = function (num) {

    //Public: 
    //The members of an object are all public members
	this.publicArr = []
	this.publicArr.push(num)

    var privateArr = []
    privateArr.push(0)


    //Privileged: 
    //A privileged method is able to access the private variables and methods
    this.showprivateArr = function (num) {
      privateArr.push(num)
      return privateArr
    };
};


    //Prototype: 
    //This technique is usually used to add public methods. 
API.prototype.showpublicArr = function (num) {
  this.publicArr.push(num)
  return this.publicArr
};


module.exports = API;