const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body: String,
    rating: Number,
    user_id: mongoose.ObjectId,
    union_id: {
      type: mongoose.ObjectId,
      required: true,
    },
    reply_id: [mongoose.ObjectId],
  }, {timestamps: true}
  ,{collection : 'comments_list'});

module.exports = CommentSchema;