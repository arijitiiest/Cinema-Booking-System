const express = require("express");

const movieController = require("../controller/movie/movieController");
const seatController = require("../controller/movie/seatController");

const router = express.Router();

router.get("/movies", movieController.getMovies);

router.post("/movie", movieController.postMovie);

router.get("/shows", movieController.getShows);

router.post("/show", movieController.postShow);

router.get("/reviews", movieController.getReviews);

router.post("/review", movieController.postReview);

router.get("/seats", seatController.getSeats);

router.post("/seat", seatController.postSeat);

// router.get("/seatstatus", seatController.getSeatStatus);

router.post("/seatstatus", seatController.postSeatStatus);

module.exports = router;
