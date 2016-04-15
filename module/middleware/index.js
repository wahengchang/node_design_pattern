

module.exports = (function() {
  function getId(req, res, next) {
    console.log('getId ---- ' +req.params.id+ ' Request finished router.use . . .. . ..');
    next();
  }

  function isIdEquZero(req, res, next) {
    console.log("isIdEquZero ----")

    if(req.params.id !== 0){
      next();
    }else{
      res.render('index', { title: "Id is Zero"});
    }
  }

  return {
    getId: getId,
    isIdEquZero: isIdEquZero
  }
})();
 