const partidaService = require('../services/partidaService');

const getAllPartides = async (req, res) => {
    const { mode } = req.query;
    try {
        const allPartides = await partidaService.getAllPartides({ mode });
        res.send({ status: "OK", data: allPartides });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getPartidaById = async (req, res) => {
    const { id } = req.params;
    try {
        const partida = await partidaService.getPartidaById(id);
        res.send({ status: "OK", data: partida });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const createPartida = (req, res) => {
    const { body } = req;

    if (
        !body.id ||
        !body.white_player ||
        !body.black_player ||
        !body.winner
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "id, white_player, black_player, winner are required fields",
            },
        });
    }

    const newPartida = {
        id: body.id,
        white_player: body.white_player,
        black_player: body.black_player,
        winner: body.winner,
    };

    try {
        const partidaCreated = partidaService.createPartida(newPartida);
        res.send({ status: "OK", data: partidaCreated });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}


const updatePartida = (req, res) => {
    const { body } = req;

    if (!body.id || (!body.white_player || !body.black_player || !body.winner)) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "id, white_player, black_player, winner are required fields",
            },
        });
    }

    const updatedFields = {};

    if (body.white_player){ updatedFields.white_player = body.white_player;}
    if (body.black_player){ updatedFields.black_player = body.black_player;}
    if (body.winner){ updatedFields.winner = body.winner;}

    try {
        const partidaUpdated = partidaService.updatePartida(body.id, updatedFields);
        res.send({ status: "OK", data: partidaUpdated });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const deletePartida = async (req, res) => {
    const { id } = req.params;
    try {
        const partidaDeleted = await partidaService.deletePartida(id);
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