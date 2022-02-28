const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: String,
  occupation: String,
  union_favorites: [mongoose.ObjectId],
  comments: [mongoose.ObjectId],
  union_membership: [mongoose.ObjectId],
}, {collection : 'users_list'});

const CommentSchema = new mongoose.Schema({
  comment: String,
  rating: Number,
  user_id: Number,
  union_id: Number,
  reply_id: [mongoose.ObjectId],
}, {collection : 'comments_list'});

const UnionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: String,
  description: String,
  member_count: Number,
  industry: String,
  year_founded: Number,
  website: String,
  comment_id: [mongoose.ObjectId],
  specific_id: Number,
}, {collection : 'unions_list'});

const SpecificSchema = new mongoose.Schema({
  information_query: String,
  spending: Number,
  salary: Number,
  assets: Number,
  benefits: [String],
  strikes_and_events: [String],
  crime_and_corruption: [String],
  links: [String],
}, {collection : 'specifics_list'});

module.exports = {UserSchema,CommentSchema,UnionSchema,SpecificSchema};
