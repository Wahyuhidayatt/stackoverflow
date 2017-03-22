const express = require('express');
const router= express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const passwordHash = require('password-hash')

let methods = {}

  methods.login = (req, res) => {
    User.findOne ({
      username : req.body.username
    })
    .then((data) => {
      if(!data){
        res.send({
          msg : 'username not found'
        })
      }else {
        var pass = passwordHash.verify(req.body.password.data.password)
      }
    })
  }
