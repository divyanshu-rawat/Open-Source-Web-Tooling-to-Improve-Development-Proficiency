var express = require('express');
var app = express();


app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));


app.listen(3000, function () {
        console.log('Our app is listening on port 3000!');
    });



var routes = require('./Routes/welcomeRouter');
app.use('/welcome', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});
