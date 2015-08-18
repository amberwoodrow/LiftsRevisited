function Set(weight, reps) {
  this.weight = weight;
  this.reps = reps;
}

Set.prototype.render = function(id,exid) {
  var htmlOutput = "<tr>" +
    "<td></td>" +
    "<td>" + (id + 1) + "</td>" +
    "<td>" + this.reps + "</td>" +
    "<td>" + this.weight + "</td>" +
    "<td><a class='remove-set' data-exercise-id='" + exid + "' data-set-id='" + id + "'>Remove set</a></td>" +
    "</tr>";
  return htmlOutput;
};

Set.prototype.getTotalWeight = function() {
  return this.weight * this.reps;
};