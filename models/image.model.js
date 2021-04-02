const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    image_url: {
        type: String,
        require: true
    }
});

const Image = mongoose.model('image', ImageSchema);

module.exports = Image;