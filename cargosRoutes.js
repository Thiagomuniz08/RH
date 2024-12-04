const express = require('express');
const router = express.Router();
const cargosController = require('..//controllers/cargosController');

router.post('/',cargosController.createCargo);
router.get('/',cargosController.raedCargos);
router.put('/:id', cargosController.updateCargo);
router.delete('/:id', cargosController.deleteCargo);


module.exports = router;