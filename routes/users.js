var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Users page is working');
// });


router.get('/', function(req, res, next) {
		var user = req.user
		if (user) {
			res.render('user', { user : req.user });
		}
		else {
			res.redirect('/login');
		}
	});

router.get('/logout', function(req, res) {
	    req.logout();
	    res.redirect('/');
	});
module.exports = router;
