const jugadorService = require('../services/jugadorService');

const getAllJugadors = (req, res) => {
    const { mode } = req.query;
    try {
        const allJugadors = jugadorService.getAllJugadors({ mode });
        res.send({ status: "OK", data: allJugadors });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getJugadorById = (req, res) => {
    const { id } = req.params;
    try {
        const jugador = jugadorService.getJugadorById(id);
        res.send({ status: "OK", data: jugador });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const createJugador = (req, res) => {
    const { jugador } = req.body;
    try {
        const jugadorCreated = jugadorService.createJugador(jugador);
        res.send({ status: "OK", data: jugadorCreated });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const updateJugador = (req, res) => {
    const { id } = req.params;
    const { jugador } = req.body;
    try {
        const jugadorUpdated = jugadorService.updateJugador(id, jugador);
        res.send({ status: "OK", data: jugadorUpdated });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const deleteJugador = (req, res) => {
    const { id } = req.params;
    try {
        const jugadorDeleted = jugadorService.deleteJugador(id);
        res.send({ status: "OK", data: jugadorDeleted });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getPartidesByJugadorId = (req, res) => {
    const { id } = req.params;
    try {
        const partides = jugadorService.getPartidesByJugadorId(id);
        res.send({ status: "OK", data: partides });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getPartidesByJugadorIdAndPosicio = (req, res) => {
    const { id } = req.params;
    const { posicio } = req.query;
    try {
        const partides = jugadorService.getPartidesByJugadorIdAndPosicio(id, posicio);
        res.send({ status: "OK", data: partides });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getPartidesByJugadorIdAndData = (req, res) => {
    const { id } = req.params;
    const { data } = req.query;
    try {
        const partides = jugadorService.getPartidesByJugadorIdAndData(id, data);
        res.send({ status: "OK", data: partides });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getPartidesByJugadorIdAndPosicioAndData = (req, res) => {
    const { id } = req.params;
    const { posicio, data } = req.query;
    try {
        const partides = jugadorService.getPartidesByJugadorIdAndPosicioAndData(id, posicio, data);
        res.send({ status: "OK", data: partides });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
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