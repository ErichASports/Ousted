var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('feed', { title: 'News Feed' });
});

// router.post('/users', function(req, res, next){
// 	var comment = req.body.comment;
// 	var user = req.user;

// 	var newComment = Comment ({
// 		sploiler: comment, 
// 		userName: user.name,
// 	});

// 	newComment.save(function(err){
// 		if (err) console.log(err);

// 		res.redirect('/users');
// 	})
// })

app.use('/', router)
module.exports = router;