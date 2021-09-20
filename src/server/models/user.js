const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema({
  email: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    reqiured: true,
    type: String,
  },
});

module.exports = mongoose.model('Users', Users);
