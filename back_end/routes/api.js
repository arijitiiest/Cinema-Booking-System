const express = require("express");

const movieController = require("../controller/movie/movieController");

const router = express.Router();

router.get("/movies", movieController.getMovies);

router.post("/movie", movieController.postMovie);

router.get("/shows", movieController.getShows);

router.post("/show", movieController.postShow);

router.get("/reviews", movieController.getReviews);

router.post("/review", movieController.postReview);

module.exports = router;
