const express = require('express');
const router= express.Router();
const Votes = require('../models/question');

let votes = {}

  votes.newVote = function (req, res, next) {
    console.log(req.body);
    Votes.findByIdAndUpdate(
      req.params.id,
      { $push: { "votes": req.body } },
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

module.exports = votes
