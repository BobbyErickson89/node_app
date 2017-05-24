var app = angular.module('schedule', []);

$.ajax({
  url: "/api/tasks",
  type: "GET",
  contentType: "application/json",
  success: function(data){
    console.log(data);
  },
  error: function(req, err){
    console.log('error message: ' + err);
  }
});
