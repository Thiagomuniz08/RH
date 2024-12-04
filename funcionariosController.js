const Funcionarios = require('../models/funcionariosModel');

const createFuncionarios = (req,res) => {
    const {nome} = req.body;
    Funcionarios.create(nome, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Funcionarios criado com sucesso', result});
    });
};

const raedFuncionarios = (req,res) => {
    Funcionarios.getAll((err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.json(result);
    });
};

const updateFuncionarios = (req,res) => {
    const {nome} = req.body;
    Funcionarios.update(req.params.id, nome,(err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Funcionarios atualizado com sucesso', result});
    });
};
const deleteFuncionarios = (req,res) => {
    const {nome} = req.body;
    Funcionarios.delete(req.params.id, nome, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Funcionarios removido com sucesso', result});
    });
};

module.exports = {createFuncionarios, raedFuncionarios, updateFuncionarios, deleteFuncionarios};