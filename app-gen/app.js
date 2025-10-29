var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

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

//var pg = require('pg');
//const { Client } = pg;

//async function connectToPostgres() {
//  const client = new Client({
//    user: 'postgres',
//    host: 'postgres-database-db-1', // or your database host
//    database: 'my_postgres',
//    password: 'mysecretpassword',
//    port: 5432, // default PostgreSQL port
//  });

//  try {
//    await client.connect();
//    console.log('Connected to PostgreSQL database!');

    // Example query
//    const res = await client.query('SELECT NOW()');
//    console.log('Current time from database:', res.rows[0].now);

//  } catch (err) {
//    console.error('Error connecting to PostgreSQL:', err);
//  } finally {
//    await client.end(); // Close the connection
//    console.log('Disconnected from PostgreSQL.');
//  }
//}

//connectToPostgres();

module.exports = app;
