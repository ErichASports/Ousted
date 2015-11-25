var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var Comment = require('../models/comments');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Users page is working');
//  });


router.get('/', function(req, res, next) {
		var user = req.user
		if (user) {
			res.render('Users', { user : req.user });
		}
		else {
			res.redirect('/login');
		}
	});

router.get('/logout', function(req, res) {
	    req.logout();
	    res.redirect('/');
	});

router.post('/new', function(req, res, next){
	var comment = req.body.comment;
	var user = req.user;
	var name = user.name;
	console.log(comment);
	var newComment = Comment({
		comment: comment, 
		userName: name
	});
	console.log(newComment);
	newComment.save(function(err){
		console.log("before if");
		if (err) console.log(err);

		res.redirect('/users');
		console.log("after save")
	})
})
module.exports = router;
