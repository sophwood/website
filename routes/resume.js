var express = require('express');
var router = express.Router();

router.get('/resume', function (req, res) {
  res.render('resume');
});

router.post('/resume', function (req, res) {
  if (!req.body) {
    res.redirect('/resume');
  }
});

module.exports = router;
