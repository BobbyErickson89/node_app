var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var Tasks = require('./routes/Tasks');
var app = express();

// view set-up
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/Tasks', Tasks);
// catch 404 and forward to error handler
app.use(function(req, res, next){
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
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



// MY ORIGINAL CODE FROM BEFORE
// Enabling our js and css folders in /public
app.use(express.static(__dirname + '/public'));


app.get('/test', function(req, res){
  var test;

  connection.query("SELECT * FROM `exercises`", function(err, rows){
    if(!err){
      res.render('exercises', {exercises: rows});
      test = rows;
      console.log(rows);
    } else {
      console.log(err);
      throw err;
    }
  });
});


// GET Routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// POST Routes
app.post('/post_exercise', function(req, res){
  var data = req.body;
  var sql = "INSERT INTO exercises SET ?";
  var values = {
    name: data.exercise,
    type: data.exercise_type,
    sets: Number(data.sets),
    reps: Number(data.reps),
    weight: Number(data.weight)
  }

  connection.query(sql, values, function(err){
    if(!err){
      res.send('Exercise added!');
    }
    else {
      throw err;
    }
  });

  connection.end();
})

app.listen(6900, function(){
  console.log('App running on port 6900');
});
