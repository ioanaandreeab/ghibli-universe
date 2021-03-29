const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const middlewares = require("../controllers/middlewares");

router.post("/protected/generate/:no_records", userController.generateFakeUsers); 
router.post("/:userId/watchlist", middlewares.verifyToken, userController.addMovieToWatchlist);
router.get("/:userId/watchlist", userController.getWatchlist);
router.delete("/:userId/watchlist/:movieWatchId", middlewares.verifyToken, userController.removeMovieFromWatchlist);

module.exports = router;