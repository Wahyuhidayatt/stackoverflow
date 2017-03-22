'use strict'
const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaUser = Schema({
  email : String,
  username: String,
  password: String
},{
  timestamps : true
})
// schemaUser.pre('save', function(next) {
//   password = passwordHash.generate(`${password}`);
//   next();
// });
let users = Mongoose.model('users', schemaUser)

module.exports = users
