// this.workouts is object to be referenced by date.
// User holds exercises for the person of making charts of their exercise data.
function User() {
  this.workouts = {}; // workout has only key no value key is time.
  // checks for user's workout
  var storedWorkouts = localStorage.getItem('workouts');
  if (storedWorkouts) {
    data = JSON.parse(storedWorkouts); // parse to js object
    for (var key in data) {

      var keyDate = new Date(key);
      this.addWorkout(keyDate);
      var tempWorkout = this.getWorkout(keyDate);

      for (var i=0; i<data[key].exercises.length; i++) {

        tempWorkout.addExercise(data[key].exercises[i].name);
        var tempExercise = tempWorkout.exercises[i];

        for (var j=0; j<data[key].exercises[i].sets.length; j++) {
          // add sets to exercise
          var path = data[key].exercises[i].sets[j];

          tempExercise.addSet(path.weight, path.reps);
          // get sets
        }
      }
    }
  }
}

User.prototype.addWorkout = function(date) {
  this.workouts[date.toDateString()] = new Workout($('#tableMain'));
};

User.prototype.getWorkout = function(date) {
  if (this.workouts[date.toDateString()] != null) {
    return this.workouts[date.toDateString()];
  }
  else {
    this.addWorkout(date);
    return this.workouts[date.toDateString()];
  }
};

User.prototype.save = function() {
  // 'workouts' key for localstorage, JSON.stringify(this.workouts) value to store at the key
  localStorage.setItem('workouts', JSON.stringify(this.workouts));
};

User.prototype.getTotalWeight = function() {
  var chartData = [];
  for (var date in this.workouts) {
    var dateObj = new Date(date);
    if (this.workouts[date].getTotalWeight() !== 0) {
      chartData.push([Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()), this.workouts[date].getTotalWeight()]);
    }
  }

  console.log(chartData);
  return chartData.sort(function(a, b) {
    var avalue = a[0],
        bvalue = b[0];
    if (avalue < bvalue) {
        return -1;
    }
    if (avalue > bvalue) {
        return 1;
    }
    return 0;
    });
  // return chartData;
};

