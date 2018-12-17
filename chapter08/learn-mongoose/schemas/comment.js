const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Type: { ObjectID } } = Schema;
const commentSchema = new Schema({
    commenter: {
        type: ObjectID,
        equired: true,
        ref: 'User',
    },
    comment: {
        type: String,
        requried: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', commentSchema);