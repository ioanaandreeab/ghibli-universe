const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movies");

router.post("/protected/generate", movieController.uploadMovies);
router.get("/", movieController.getAllMovies);

module.exports = router;