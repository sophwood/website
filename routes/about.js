var express = require('express');
var router = express.Router();

router.get('/about', function (req, res) {
  res.render('about');
});

router.post('/about', function (req, res) {
  if (!req.body) {
    res.redirect('/about');
  }
});

module.exports = router;
