var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const dotenv = require('dotenv');
const couponRouter = require ('./routes/coupons')
const reviewsRouter = require ('./routes/reviews')
const AuthRouter = require ('./routes/AuthRouter')
const businessRouter = require('./routes/business')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

dotenv.config();
require('./db/index')
const app = express();
const PORT = process.env.PORT || 3000;



mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB', err);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reviews' , reviewsRouter)
app.use('/coupons' , couponRouter)
app.use('/auth' , AuthRouter)
app.use('/businesses' , businessRouter)


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
