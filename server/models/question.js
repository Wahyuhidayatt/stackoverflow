'use strict'
const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const users = require('./user')

let schemaQuestion = Schema({
    idUser: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    title: String,
    description:String,
    votes: [ {
      voter: String
    } ],
    answers: [ {
      answer: String,
      author: String
    } ]
  },{
    timestamps: true
  })

let questions = Mongoose.model('questions', schemaQuestion)

module.exports = questions

























// {
//   question:
//   author
//   listAnswers: [
//     {
//       answer:
//       date :
//       author:
//       votes: [
//         'wahyu', 'firman'
//       ]
//
//     }
//   ],
//   listvotes: [
//     'wahyu', 'firman'
//   ]
// }
