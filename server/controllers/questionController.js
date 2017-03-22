const express = require('express');
const router= express.Router();
const Question = require('../models/question');

let questions = {}

  questions.create = function (req, res, next) {
    Question.create({
      idUser : req.body.idUser,
      title : req.body.title,
      description : req.body.description,
      answers: [],
      votes: []
    })
    .then(function (err, data) {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  }

  questions.show = function(req, res, next) {
    Question.find().then(function(data) {
      res.send(data)
    })
  }
  questions.getOne = function (req, res, next) {
    Question.findOne({
      _id: req.params.id
    })
    // .then(function (err, data) {
    //   if (err) {
    //     console.log(err);
    //     res.send(err)
    //   } else {
    //     res.send(data)
    //   }
    // })
    .populate('idUser')
    .exec(function (err, data) {
      if (err) return handleError(err);
      res.send(data)
    });
  }
  questions.update = function(req, res) {
    Question.findById(req.params._id, function (err, question) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
              // If that attribute isn't in the request body, default back to whatever it was before.
              question.idUser = req.body.idUser,
              question.title = req.body.title,
              question.description = req.body.description
            // Save the updated document back to the database
            food.save(function (err, item) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send("update berhasil");
            });
        }
     });
  }
  //
  questions.delete = function(req, res) {
    Question.findByIdAndRemove(req.params._id, function (err, question) {
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      var response = {
          message: "successfully deleted",
          id : foodData._id
      };
      res.send(response);
    });
  }
module.exports = questions
