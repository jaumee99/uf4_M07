var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('escacs.db');

const getAllPartides = () => {
    db.all("SELECT * FROM Game", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getPartidaById = (id) => {
    db.all("SELECT * FROM Game WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const createPartida = (partida) => {
    db.run("INSERT INTO Game (id, white_player, black_player, winner, date, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [partida.id, partida.white_player, partida.black_player, partida.winner, partida.date, partida.createdAt, partida.updatedAt], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Partida created");
        }
    });
}

const updatePartida = (id, partida) => {
    db.run("UPDATE Game SET white_player = ?, black_player = ?, winner = ?, date = ?, updatedAt = ? WHERE id = ?",
    [partida.white_player, partida.black_player, partida.winner, partida.date, partida.updatedAt, id], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Partida updated");
        }
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