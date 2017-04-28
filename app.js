var express = require('express');
var app = express();
var uuid = require('node-uuid');
var handleError = require('./middlewares/handleError');
var pageNotFound = require('./middlewares/pageNotFound');
var bodyParser = require('body-parser');

// Serve static pages
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedParser);
app.use('/', require('./routes/about'));
app.use('/', require('./routes/resume'));
app.use('/', require('./routes/whatIveBeenUpTo'));

app.use(handleError);
app.use(pageNotFound);

app.listen(3000, function() {
  console.log("We are go, captain!");
});