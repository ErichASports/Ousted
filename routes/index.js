var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res) {
   res.render('home', { user: req.user });
});

router.get('/login', function(req, res){
   res.render('login');
});
  
router.post('/login', passport.authenticate('local', { failureRedirect: '/feed' }),
  function(req, res) {
    res.redirect('/users');
});

router.get('/new_user', function(req, res, next) {
 	res.render('new_user', {user : req.user });
});

router.post('/new', function(req, res) {
    User.register(new User({ name: req.body.name, username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
        	console.log(err.errors);
        	throw err;
            // return res.render('register', { user : user });
        }

        // Authenticate the new user and redirect to index
        passport.authenticate('local')(req, res, function () {
            res.redirect('/users');
        });
    });
});
  
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
module.exports = router;
