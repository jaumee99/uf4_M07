var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('escacs.db');

const getAllJugadors = (filterParams) => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM Players", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };
  

const getJugadorById = (id) => {
    return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Players WHERE id = ?", [id], (err, rows) => {
        if (err) {
            reject(err);
        } else {
            resolve(rows);
        }
    });
    });
}

const createJugador = (jugador) => {
    db.run("INSERT INTO Players (id, username, fullname) VALUES (?, ?, ?)", 
    [jugador.id, jugador.username, jugador.fullname], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Jugador created");
        }
    }
);
}

const updateJugador = (jugador) => {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE Players SET username = ?, fullname = ? WHERE id = ?",
        [jugador.username, jugador.fullname, jugador.id],
        (err) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log("Jugador updated");
            resolve();
          }
        }
      );
    });
  };
  

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

const getPartidesByJugadorId = (id) => {
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

module.exports = {
    getAllJugadors,
    getJugadorById,
    createJugador,
    updateJugador,
    deleteJugador,
    getPartidesByJugadorId
}