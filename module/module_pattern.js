// var mpAPI = (function () {
  
//   var privateMethod = function () {
//     return "it is privateMethod"
//   };


//   return {
//     publicMethod: function () {
//     	return "it is publicMethod"
//     },

//     callPrivateMethod: function () {
//     	return privateMethod()
//     }
//   };
// })();


// module.exports = mpAPI;

function mpAPI() {

  var walked = false

  function fun1() {
    return "it is privateMethod"
  }

  function fun3() {
    return fun1()
  }

  function fun2() {
    return walked
  }

  return {
    callPrivateMethod: fun3,
  	publicMethod: fun2
  }
}

module.exports = mpAPI