const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    image_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "image"
    }
});

const Like = mongoose.model('like', LikeSchema);

module.exports = Like;