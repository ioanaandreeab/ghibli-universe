const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviews");
const middlewares = require("../controllers/middlewares");

router.post("/protected/generate/:no_records", reviewController.generateFakeReviews); 
router.get("/:movieId", reviewController.getReviewsPerMovie);
router.post("/:movieId/:userId", middlewares.verifyToken, reviewController.createReview);
router.put("/:reviewId", middlewares.verifyToken, reviewController.updateReview);
router.delete("/:reviewId", middlewares.verifyToken, reviewController.deleteReview);
router.get("/user/:userId", reviewController.getReviewsPerUser);

module.exports = router;