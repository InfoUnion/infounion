const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: String,
  sub: {
    type: String,
    required: true,
  },
  location: String,
  occupation: String,
  union_favorites: [mongoose.ObjectId],
  comments: [mongoose.ObjectId],
  union_membership: [mongoose.ObjectId],
}, {collection : 'users_list'});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};



module.exports = UserSchema;
