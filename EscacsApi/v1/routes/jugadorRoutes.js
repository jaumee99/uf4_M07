const express = require("express");
const router = express.Router();
const jugadorController = require("../../controllers/jugadorController");

router
    .get("/", jugadorController.getAllJugadors)
    .get("/:id", jugadorController.getJugadorById)
    .post("/", jugadorController.createJugador)
    .patch("/:id", jugadorController.updateJugador)
    .delete("/:id", jugadorController.deleteJugador)
    .get("/:id/partides", jugadorController.getPartidesByJugadorId)

module.exports = router;