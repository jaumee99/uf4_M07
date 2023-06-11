const { v4: uuid } = require("uuid");
const Partida = require("../database/partida");

const getAllPartides = ( filterParams ) => {
    try { 
        const allPartides = Partida.getAllPartides(filterParams);
        return allPartides;
    } catch (error) {
        throw error;
    }
}

const getPartidaById = (id) => {
    try {
        const partida = Partida.getPartidaById(id);
        return partida;
    } catch (error) {
        throw error;
    }
}

const createPartida = (partida) => {
    try {
        const partidaCreated = Partida.createPartida(partida);
        return partidaCreated;
    } catch (error) {
        throw error;
    }
}

const updatePartida = (id, partida) => {
    try {
        const partidaUpdated = Partida.updatePartida(id, partida);
        return partidaUpdated;
    } catch (error) {
        throw error;
    }
}

const deletePartida = (id) => {
    try {
        const partidaDeleted = Partida.deletePartida(id);
        return partidaDeleted;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPartides,
    getPartidaById,
    createPartida,
    updatePartida,
    deletePartida
}