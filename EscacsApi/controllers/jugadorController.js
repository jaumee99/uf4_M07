const jugadorService = require('../services/jugadorService');

const getAllJugadors = async (req, res) => {
    const { mode } = req.query;
    try {
        const allJugadors = await jugadorService.getAllJugadors({ mode });
        res.send({ status: "OK", data: allJugadors});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getJugadorById = async (req, res) => {
    const { id } = req.params;
    try {
        const jugador = await jugadorService.getJugadorById(id);
        res.send({ status: "OK", data: jugador });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const createJugador = (req, res) => {
    const { body } = req;

    if (
        !body.id ||
        !body.username ||
        !body.fullname
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "username, fullname are required fields",
            },
        });
    }

    const newJugador = {
        id: body.id,
        username: body.username,
        fullname: body.fullname,
    };

    try {
        const jugadorCreated = jugadorService.createJugador(newJugador);
        res.send({ status: "OK", data: jugadorCreated });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}


const updateJugador = (req, res) => {
    const { body } = req;
  
    if (!body.id || (!body.username && !body.fullname)) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error: "id and at least one of username or fullname are required fields",
        },
      });
    }
  
    const updatedFields = {};
  
    if (body.username) {
      updatedFields.username = body.username;
    }
  
    if (body.fullname) {
      updatedFields.fullname = body.fullname;
    }
  
    try {
      const jugadorUpdated = jugadorService.updateJugador(body.id, updatedFields);
      res.send({ status: "OK", data: jugadorUpdated });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  

const deleteJugador = async (req, res) => {
    const { id } = req.params;
    try {
        const jugadorDeleted = await jugadorService.deleteJugador(id);
        res.send({ status: "OK", data: jugadorDeleted });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getPartidesByJugadorId = async (req, res) => {
    const { id } = req.params;
    try {
        const partides = await jugadorService.getPartidesByJugadorId(id);
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
    getPartidesByJugadorId
}