const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const moviesRouter = require("./movies");
const reviewsRouter = require("./reviews");
const authRouter = require("./auth");

router.use("/users", userRouter);
router.use("/movies", moviesRouter);
router.use("/reviews", reviewsRouter);
router.use("/auth", authRouter);

module.exports = router;