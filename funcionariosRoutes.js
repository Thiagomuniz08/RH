const express = require('express');
const router = express.Router();
const funcionariosController = require('..//controllers/funcionariosController');

router.post('/',funcionariosController.createFuncionarios);
router.get('/',funcionariosController.raedFuncionarios);
router.put('/:id', funcionariosController.updateFuncionarios);
router.delete('/:id', funcionariosController.deleteFuncionarios);


module.exports = router;