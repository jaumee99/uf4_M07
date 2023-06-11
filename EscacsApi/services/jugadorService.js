const { v4: uuid } = require("uuid");
const Jugador = require("../database/jugador");

const getAllJugadors = (filterParams) => {
    return new Promise((resolve, reject) => {
      try {
        const allJugadors = Jugador.getAllJugadors(filterParams);
        resolve(allJugadors);
      } catch (error) {
        reject(error);
      }
    });
  };
  

const getJugadorById = (id) => {
    return new Promise((resolve, reject) => {
    try {
        const jugador = Jugador.getJugadorById(id);
        resolve(jugador);
    } catch (error) {
        reject(error);
        }
    });
}

const createJugador = (newJugador) => {
    const jugadorToCreate = {
        ...newJugador,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    try {
        const jugadorCreated = Jugador.createJugador(jugadorToCreate);
        return jugadorCreated;
    } catch (error) {
        throw error;
    }
}

const updateJugador = (id, updatedFields) => {
    try {
      const jugadorUpdated = Jugador.updateJugador(id, updatedFields);
      return jugadorUpdated;
    } catch (error) {
      throw error;
    }
  };

const deleteJugador = (id) => {
    try {
        const jugadorDeleted = Jugador.deleteJugador(id);
        return jugadorDeleted;
    } catch (error) {
        throw error;
    }
}

const getPartidesByJugadorId = (id) => {
    return new Promise((resolve, reject) => {
    try {
        const partides = Jugador.getPartidesByJugadorId(id);
        resolve(partides);
    } catch (error) {
        reject(error);
    }
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