var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('escacs.db');

const getAllPartides = (filterParams) => {
    return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Game", (err, rows) => {
        if (err) {
            reject(err);
        } else {
            resolve(rows);
        }
    });
    });
}

const getPartidaById = (id) => {
    return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Game WHERE id = ?", [id], (err, rows) => {
        if (err) {
            reject(err);
        } else {
            resolve(rows);
        }
    });
    });
}

const createPartida = (partida) => {
    db.run("INSERT INTO Game (id, white_player, black_player, winner) VALUES (?, ?, ?, ?)", 
    [partida.id, partida.white_player, partida.black_player, partida.winner], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Partida created");
        }
    }
);
}

const updatePartida = (partida) => {
    return new Promise((resolve, reject) => {
    db.run("UPDATE Game SET white_player = ?, black_player = ?, winner = ? WHERE id = ?",
    [partida.white_player, partida.black_player, partida.winner, partida.id], (err) => {
        if (err) {
            console.log(err);
            reject(err);
        } else {
            console.log("Partida updated");
            resolve();
        }
    });
    });
}

const deletePartida = (id) => {
    db.run("DELETE FROM Game WHERE id = ?", [id], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Partida deleted");
        }
    });
}

module.exports = {
    getAllPartides,
    getPartidaById,
    createPartida,
    updatePartida,
    deletePartida
}