var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get-info', function(req, res, next) {
  res.redirect("http:google.com")
});

module.exports = router;
