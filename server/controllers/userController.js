const express = require('express');
const router= express.Router();
const User = require('../models/user');
const passwordHash = require('password-hash');

let users = {}

  users.create = function (req, res, next) {
    User.create({
      username : req.body.username,
      email : req.body.email,
      password : passwordHash.generate(req.body.password)
    })
    .then(function (data) {
      res.send("successfully")
    })
  }
//   users.show = function(req, res, next) {
//     User.find().then(function(data) {
//       res.send(data)
//     })
//   }
//   users.getOne = function (req, res, next) {
//     User.find({
//       _id:req.body.id
//     })
//     .populate(idUser)
//     .then(function(data) {
//       res.send(data)
//     })
//   }
//   users.update = function(req, res) {
//     User.findById(req.params._id, function (err, food) {
//         // Handle any possible database errors
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             // Update each attribute with any possible attribute that may have been submitted in the body of the request
//               // If that attribute isn't in the request body, default back to whatever it was before.
//               food.name = req.body.name,
//               food.price = req.body.price,
//               food.expired_date = req.body.expired_date
//             // Save the updated document back to the database
//             food.save(function (err, item) {
//                 if (err) {
//                     res.status(500).send(err)
//                 }
//                 res.send("update food berhasil");
//             });
//         }
//      });
//   }
//   //
//   users.delete = function(req, res) {
//     User.findByIdAndRemove(req.params._id, function (err, question) {
//       // We'll create a simple object to send back with a message and the id of the document that was removed
//       // You can really do this however you want, though.
//       var response = {
//           message: "successfully deleted",
//           id : foodData._id
//       };
//       res.send(response);
//     });
//   }
module.exports = users
