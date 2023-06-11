const express = require("express");
const router = express.Router();
const jugadorController = require("../../controllers/jugadorController");

router
    .get("/", jugadorController.getAllJugadors)
    .get("/:id", jugadorController.getJugadorById)
    .post("/", jugadorController.createJugador)
    .put("/:id", jugadorController.updateJugador)
    .delete("/:id", jugadorController.deleteJugador)
    .get("/:id/partides", jugadorController.getPartidesByJugadorId)
    .get("/:id/partides?posicio=[WHITE|BLACK]", jugadorController.getPartidesByJugadorIdAndPosicio)
    .get("/:id/partides?data=[DATA]", jugadorController.getPartidesByJugadorIdAndData)
    .get("/:id/partides?posicio=[WHITE|BLACK]&data=[DATA]", jugadorController.getPartidesByJugadorIdAndPosicioAndData)

module.exports = router;