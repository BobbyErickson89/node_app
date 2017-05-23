var app = angular.module('schedule', []);

$.ajax({
  url: "/test",
  type: "GET",
  success: function(data){
    console.log(data);
  },
  error: function(req, err){
    console.log('error message: ' + err);
  }
});
