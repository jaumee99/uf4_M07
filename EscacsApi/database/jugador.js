var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('escacs.db');

const getAllJugadors = () => {
    db.all("SELECT * FROM Players", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getJugadorById = (id) => {
    db.all("SELECT * FROM Players WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const createJugador = (jugador) => {
    db.run("INSERT INTO Players (id, username, fullname, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)", 
    [jugador.id, jugador.username, jugador.fullname, jugador.createdAt, jugador.updatedAt], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Jugador created");
        }
    }
    ); 
}

const updateJugador = (id, jugador) => {
    db.run("UPDATE Players SET username = ?, fullname = ?, updatedAt = ? WHERE id = ?", 
    [jugador.username, jugador.fullname, jugador.updatedAt, id], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Jugador updated");
        }
    }
    );
}

const deleteJugador = (id) => {
    db.run("DELETE FROM Players WHERE id = ?", [id], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Jugador deleted");
        }
    }
    );
}

// https://stackoverflow.com/questions/10562915/selecting-rows-with-id-from-another-table
const getPartidesByJugadorId = (id) => {
    db.all("SELECT * FROM Game WHERE player1 = ?", [id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getPartidesByJugadorIdAndPosicio = (id, posicio) => {
    db.all("SELECT * FROM Game WHERE player1 = ? AND player1Color = ?", [id, posicio], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getPartidesByJugadorIdAndData = (id, data) => {
    db.all("SELECT * FROM Game WHERE player1 = ? AND createdAt = ?", [id, data], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getPartidesByJugadorIdAndPosicioAndData = (id, posicio, data) => {
    db.all("SELECT * FROM Game WHERE player1 = ? AND player1Color = ? AND createdAt = ?", [id, posicio, data], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

module.exports = {
    getAllJugadors,
    getJugadorById,
    createJugador,
    updateJugador,
    deleteJugador,
    getPartidesByJugadorId,
    getPartidesByJugadorIdAndPosicio,
    getPartidesByJugadorIdAndData,
    getPartidesByJugadorIdAndPosicioAndData
}