var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var User = mongoose.model('users');

router.get('/', function(req, res, next) {

  // res.redirect('/profile');
});

// router.post('/register', function(req, res, next) {
//   var user = new User(req.body)
//   .save(function(err, user) {
//     console.log(user);
//     res.json({message: 'Success!'});
//   });
// });
//
// router.post('/signin', function(req, res, next) {
//   console.log(req.body);
//   res.redirect('/profile');
// });

module.exports = router;
