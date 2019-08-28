// Movie route module.

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Movie home page');
})

module.exports = router;