const { v4: uuid } = require("uuid");
const Partida = require("../database/partida");

const getAllPartides = ( filterParams ) => {
    return new Promise((resolve, reject) => {
    try { 
        const allPartides = Partida.getAllPartides(filterParams);
        resolve(allPartides);
    } catch (error) {
        reject(error);
    }
    });
}

const getPartidaById = (id) => {
    return new Promise((resolve, reject) => {
    try {
        const partida = Partida.getPartidaById(id);
        resolve(partida);
    } catch (error) {
        reject(error);
    }
    });
}

const createPartida = (newPartida) => {
    const partidaToCreate = {
        ...newPartida,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
    }

    try {
        const partidaCreated = Partida.createPartida(partidaToCreate);
        return partidaCreated;
    } catch (error) {
        throw error;
    }
}

const updatePartida = (id, updatedFields) => {
    try {
        const partidaUpdated = Partida.updatePartida(id, updatedFields);
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