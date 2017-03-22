const express = require('express');
const router= express.Router();
const Answer = require('../models/question');

let answers = {}

  answers.new = function (req, res, next) {
    console.log(req.body);
    Answer.findByIdAndUpdate(
      req.params.id,
      { $push: { "answers": req.body } },
        {safe: true, upsert: true, new: true},
       function(err, data) {
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      }
    );
  }

module.exports = answers
