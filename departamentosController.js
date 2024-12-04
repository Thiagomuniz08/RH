const Departamentos = require('../models/departamentosModel');

const createDepartamento = (req,res) => {
    const {nome} = req.body;
    Departamentos.create(nome, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Departamento criado com sucesso', result});
    });
};

const raedDepartamentos = (req,res) => {
    Departamentos.getAll((err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.json(result);
    });
};

const updateDepartamento = (req,res) => {
    const {nome} = req.body;
    Departamentos.update(req.params.id, nome,(err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Departamento atualizado com sucesso', result});
    });
};
const deleteDepartamento = (req,res) => {
    const {nome} = req.body;
    Departamentos.delete(req.params.id, nome, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Departamento removido com sucesso', result});
    });
};

module.exports = {createDepartamento, raedDepartamentos, updateDepartamento, deleteDepartamento};