var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var codeRouter = require('./routes/codeChecking');
var signUpRouter = require('./routes/signUp');
var userSignRouter=require("./models/user_signup");
var factorRouter=require("./routes/createFactor");
var showFactorRouter=require("./routes/showFactor");
var app = express();
mongoose.connect("mongodb://127.0.0.1:27017/rozhan");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}))

app.use("/",showFactorRouter);
app.use("/",factorRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/",loginRouter);
app.use("/",codeRouter);
app.use("/",signUpRouter);
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
