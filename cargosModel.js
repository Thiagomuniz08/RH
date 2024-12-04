     
const db = require ('../database/database')

const Cargos ={
    //Read
    getAll:(callback) => {
        db.query('SELECT * FROM cargos', callback);
    },
    getbyId: (id, callback) => {
        db.query('SELECT * FROM cargos WHERE id = ?', [id], callback);
    },
    // Create
    create: (nome_cargo,callback) => {
        db.query('INSERT INTO cargos (nome_cargo) VALUES (?)',[nome_cargo], callback);
    },
    //Update
    update: (id, callback) => {
        db.query('UPDATE cargos SET nome_cargo = ? WHERE id = ?', [id], callback);
    },
    //Delete
    delete: (id, callback) => {
        db.query('DELETE FROM cargos WHERE id = ?',[id], callback);
    }
};

module.exports = Cargos;