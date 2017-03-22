const express = require('express');
const router = express.Router();
let Controller = require('../controllers/userController')

router.post('/', Controller.create);
// router.get('/users', Controller.show);
// router.get('/users/:id', Controller.getOne);
// router.put('/users/:id', Controller.update);
// router.delete('/users/:id', Controller.delete);

module.exports = router
