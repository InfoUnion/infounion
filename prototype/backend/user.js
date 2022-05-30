const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: String,
  occupation: String,
  union_favorites: [mongoose.ObjectId],
  comments: [mongoose.ObjectId],
  union_membership: [mongoose.ObjectId]
}, { collection: 'users_list' })

module.exports = UserSchema
