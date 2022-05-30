const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  comment: String,
  rating: Number,
  user_id: mongoose.ObjectId,
  union_id: mongoose.ObjectId,
  reply_id: [mongoose.ObjectId]
}, { collection: 'comments_list' })

module.exports = CommentSchema
