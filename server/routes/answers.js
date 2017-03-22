const express = require('express');
const router = express.Router();
let Controller = require('../controllers/answerController')

router.post('/:id', Controller.new);
// router.get('/', Controller.show);
// router.get('/:id', Controller.getOne);
// router.put('/:id', Controller.update);
// router.delete('/:id', Controller.delete);

module.exports = router
