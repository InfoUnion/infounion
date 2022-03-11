const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment: String,
    rating: Number,
    user_id: Number,
    union_id: Number,
    reply_id: [mongoose.ObjectId],
  }, {collection : 'comments_list'});

module.exports = CommentSchema;