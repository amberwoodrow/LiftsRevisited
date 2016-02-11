var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var User = new Schema(
  {email : String, 
  password : String}
);

mongoose.model('users', User);

mongoose.connect('mongodb://localhost/lifts');