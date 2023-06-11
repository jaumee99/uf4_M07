const partidaService = require('../services/partidaService');

const getAllPartides = (req, res) => {
    const { mode } = req.query;
    try {
        const allPartides = partidaService.getAllPartides({ mode });
        res.send({ status: "OK", data: allPartides });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getPartidaById = (req, res) => {
    const { id } = req.params;
    try {
        const partida = partidaService.getPartidaById(id);
        res.send({ status: "OK", data: partida });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const createPartida = (req, res) => {
    const { partida } = req.body;
    try {
        const partidaCreated = partidaService.createPartida(partida);
        res.send({ status: "OK", data: partidaCreated });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const updatePartida = (req, res) => {
    const { id } = req.params;
    const { partida } = req.body;
    try {
        const partidaUpdated = partidaService.updatePartida(id, partida);
        res.send({ status: "OK", data: partidaUpdated });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const deletePartida = (req, res) => {
    const { id } = req.params;
    try {
        const partidaDeleted = partidaService.deletePartida(id);
        res.send({ status: "OK", data: partidaDeleted });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {
    getAllPartides,
    getPartidaById,
    createPartida,
    updatePartida,
    deletePartida
}