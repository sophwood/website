var express = require('express');
var app = express();
// TODO: Write the handleError middleware.
// This function must be an express error handling middleware

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

var handleError = function (err, req, res, next) {
  res.render('errorPage', {
    statusCode: res.statusCode,
    message: err.message,
    stackTrace: err.stack
  });
};

// Export the middleware function for use in app.js
module.exports = handleError;
