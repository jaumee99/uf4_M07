const express = require("express");
const router = express.Router();
const partidaController = require("../../controllers/partidaController");

router
    .get("/", partidaController.getAllPartides)
    .get("/:id", partidaController.getPartidaById)
    .post("/", partidaController.createPartida)
    .patch("/:id", partidaController.updatePartida)
    .delete("/:id", partidaController.deletePartida);

module.exports = router;