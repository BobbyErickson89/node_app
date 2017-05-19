$('#exercise-submit').click(function(e){
  e.preventDefault();

  var form_data = {
    exercise_type: $('#exercise-type').val(),
    exercise: $('#exercise').val(),
    sets: $('#sets').val(),
    reps: $('#reps').val(),
    weight: $('#weight').val()
  }

  $.ajax({
    url: "/post_exercise",
    type: "POST",
    data: JSON.stringify(form_data),
    contentType: "application/json",
    cache: false,
    success: function(data){
      console.log('success!');
    },
    error: function(req, err){
      console.log('error message: ' + err);
    }
  });
});
