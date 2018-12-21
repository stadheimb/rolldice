var express = require('express');

module.exports = function(app) {
  var router = express.Router();

  router.get('/:count', function (req, res, next) {
      var count = req.params.count
      var high = 6
      var low = 1
      var arr = new Array()
      for (i = 0; i < count; i++) {
          arr.push( Math.floor(Math.random() * (high - low + 1) + low) )
      }
      res.json({count: count, result: arr});
  });

  app.use("/rolldice", router);
}


