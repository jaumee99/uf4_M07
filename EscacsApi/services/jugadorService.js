const { v4: uuid } = require("uuid");
const Jugador = require("../database/jugador");

const getAllJugadors = ( filterParams ) => {
    try { 
        const allJugadors = Jugador.getAllJugadors(filterParams);
        return allJugadors;
    } catch (error) {
        throw error;
    }
};

const getJugadorById = (id) => {
    try {
        const jugador = Jugador.getJugadorById(id);
        return jugador;
    } catch (error) {
        throw error;
    }
}

const createJugador = (jugador) => {
    try {
        const jugadorCreated = Jugador.createJugador(jugador);
        return jugadorCreated;
    } catch (error) {
        throw error;
    }
}

const updateJugador = (id, jugador) => {
    try {
        const jugadorUpdated = Jugador.updateJugador(id, jugador);
        return jugadorUpdated;
    } catch (error) {
        throw error;
    }
}

const deleteJugador = (id) => {
    try {
        const jugadorDeleted = Jugador.deleteJugador(id);
        return jugadorDeleted;
    } catch (error) {
        throw error;
    }
}

const getPartidesByJugadorId = (id) => {
    try {
        const partides = Jugador.getPartidesByJugadorId(id);
        return partides;
    } catch (error) {
        throw error;
    }
}

const getPartidesByJugadorIdAndPosicio = (id, posicio) => {
    try {
        const partides = Jugador.getPartidesByJugadorIdAndPosicio(id, posicio);
        return partides;
    } catch (error) {
        throw error;
    }
}

const getPartidesByJugadorIdAndData = (id, data) => {
    try {
        const partides = Jugador.getPartidesByJugadorIdAndData(id, data);
        return partides;
    } catch (error) {
        throw error;
    }
}

const getPartidesByJugadorIdAndPosicioAndData = (id, posicio, data) => {
    try {
        const partides = Jugador.getPartidesByJugadorIdAndPosicioAndData(id, posicio, data);
        return partides;
    } catch (error) {   
        throw error;
    }
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