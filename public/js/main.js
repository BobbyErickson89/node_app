$('#exercise-submit').click(function(){
  // var form_data = {
  //   exercise_type: $('#exercise-type').val(),
  //   exercise: $('#exercise').val(),
  //   sets: $('#sets').val(),
  //   reps: $('#reps').val(),
  //   weight: $('#weight').val()
  // }

  localStorage.setItem('exercise_type', $('#exercise-type').val());
  localStorage.setItem('exercise', $('#exercise').val());
  localStorage.setItem('sets', $('#sets').val());
  localStorage.setItem('reps', $('#reps').val());
  localStorage.setItem('weight', $('#weight').val());

  return false;
});
