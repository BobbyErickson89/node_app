var app = angular.module('schedule', []);

app.controller("ExerciseCtrl", function($scope, $http){
  //call to our API to retrieve all tasks.
  $http.get('/api/tasks')
    //if call was successful, then that response's data is added to our scope as exercises.
    .then(function(response){
      //adding our data as 'exercises' to scope.
      $scope.exercises = response.data;

      //creating a filter function so that we can see exercises by day.
      $scope.show = function(day){
        $scope.filterDay = day;
      }
    })
    //if there was an error, we have this catch to log the error.
    .catch(function(response){
      console.error("Error occurred: ", response.status, response.data);
    });


});
