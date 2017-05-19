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
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// POST Routes
app.post('/post_exercise', function(req, res){
  console.log(req.body);
  res.send('complete');
})

app.listen(6900, function(){
  console.log('App running on port 6900');
});
