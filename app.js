var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

//Routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, function(){
  console.log('App running on port 3000');
});
