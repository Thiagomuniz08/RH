const db = require ('../database/database')

const Funcionarios ={
    //Read
    getAll:(callback) => {
        db.query('SELECT * FROM funcionarios', callback);
    },
    getbyId: (id, callback) => {
        db.query('SELECT * FROM funcionarios WHERE id = ?', [id], callback);
    },
    // Create
    create: (nome,callback) => {
        db.query('INSERT INTO funcionarios (nome) VALUES (?)', [nome], callback);
    },
    //Update
    update: (id,nome,callback) => {
        db.query('UPDATE funcionarios SET nome = ? WHERE id = ?', [nome, id], callback);
    },
    //Delete
    delete: (id, callback) => {
        db.query('DELETE FROM funcionarios WHERE id = ?', [id], callback);
    }
};

module.exports = Funcionarios;