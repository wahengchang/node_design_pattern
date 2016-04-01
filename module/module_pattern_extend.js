
var MP = require('module_pattern.js');

function mp_x (){
  var temp = MP()


  return temp

}


mp_x.prototype.extension = function() {
  console.log('extension')
}

module.exports = mp_x;