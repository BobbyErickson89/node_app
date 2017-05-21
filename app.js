var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'workout'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enabling our js and css folders in /public
app.use(express.static(__dirname + '/public'));

// GET Routes
app.get('/', function(req, res){

  connection.query("SELECT * FROM `exercises`", function(err, results){
    connection.end();
    if(!err){
      console.log(results);
      return results;
    } else {
      throw err;
    }
  });

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
