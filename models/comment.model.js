const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    image_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "image"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    comment: {
        type: String,
        require: true
    },
    time: {
        type: Date, 
        default: Date.now
    }
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;