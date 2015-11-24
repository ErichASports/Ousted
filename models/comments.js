var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	user_ID: { type: String, required: true },
	userName: {type: String },
	comment: { type: String, required: true },
	created_at: { type: Date },
	updated_at: { type: Date }, 
	reviewed_at: { type: Date }

})
var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;