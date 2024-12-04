const Cargos = require('../models/cargosModel');

const createCargo = (req,res) => {
    const {nome_cargo} = req.body;
    Cargos.create(nome_cargo, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Cargo criado com sucesso', result});
    });
};

const raedCargos = (req,res) => {
    Cargos.getAll((err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.json(result);
    });
};

const updateCargo = (req,res) => {
    const {id} = req.body;
    Cargos.update(req.params.nome_cargo, id, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Cargo atualizado com sucesso', result});
    });
};
const deleteCargo = (req,res) => {
    const {id} = req.body;
    Cargos.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Cargo removido com sucesso', result});
    });
};

module.exports = {createCargo, raedCargos, updateCargo, deleteCargo};