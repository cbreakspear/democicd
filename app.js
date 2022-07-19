var createError = require('http-errors');
var express = require('express');
var path = require('path');

var bodyParser = require('body-parser'); 

var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
var testservices = require('./routes/testservices');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/css'));


app.use('/', testservices);
app.use('/getQuoteoftheDay', testservices);
app.use('/getDateandTime', testservices);
app.use('/getTest', testservices);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;
