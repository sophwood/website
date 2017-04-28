var express = require('express');
var router = express.Router();

router.get('/whatIveBeenUpTo', function (req, res) {
  res.render('up2');
});

router.post('/whatIveBeenUpTo', function (req, res) {
  if (!req.body) {
    res.redirect('/whatIveBeenUpTo');
  }
});

module.exports = router;
