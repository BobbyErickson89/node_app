//reference of dbconnection.js
var db = require('../dbconnection');
var Task = {
  getAllTasks: function(callback){
    return db.query("SELECT * FROM exercises", callback);
  },
  getTaskById: function(id, callback){
    return db.query("SELECT * FROM exercises WHERE id = ?", [id], callback);
  }
};

module.exports = Task;
