//reference of dbconnection.js
var db = require('../dbconnection');
var Task = {
  getAllTasks: function(callback){
    return db.query("SELECT * FROM exercises", callback);
  },
  getTaskById: function(id, callback){
    return db.query("SELECT * FROM exercises WHERE id = ?", [id], callback);
  },
  addTask: function(data, callback){
    var sql = "INSERT INTO `exercises` (`name`, `type`, `sets`, `reps`, `weight`) VALUES(?,?,?,?,?)"
    var values = [
      data.exercise,
      data.exercise_type,
      data.sets,
      data.reps,
      data.weight
    ];

    return db.query(sql, values, callback);
  }
};

module.exports = Task;
