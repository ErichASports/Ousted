var express = require('express');
var router = express.Router();
var app = express();

var User = require('../models/user');




// route to show a random message (GET http://localhost:3000/api/)
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:3000/api/users)
router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});   


router.get('/feeds', function(req, res) {
  Review.find({}, function(err, feeds) {
    res.json(feeds);
  });
});  
// apply the routes to our application with the prefix /api
app.use('/', router);
module.exports = router;