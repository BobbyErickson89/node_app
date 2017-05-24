//reference of dbconnection.js
var db = require('../dbconnection');
var Task = {
  getAllTasks: function(callback){
    return db.query("SELECT * FROM exercises", callback);
  },
  getTaskById: function(id, callback){
    return db.query("SELECT * FROM exercises WHERE id = ?", [id], callback);
  },
  addTask: function(Task, callback){
    var sql = "INSERT INTO exercises VALUES(?,?,?,?,?)"
    var values = [
      Task.name,
      Task.type,
      Task.sets,
      Task.reps,
      Task.weight,
      Task.day
    ];
    return db.query(sql, values, callback);
  }
};

module.exports = Task;
