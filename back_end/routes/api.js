const express = require("express");

const movieController = require("../controller/movie/movieController");
const seatController = require("../controller/movie/seatController");

const rangeMiddleware = require("../middleware/range");
const isAdminMiddleware = require("../middleware/is-Admin");

const router = express.Router();

router.get("/movie/:id", movieController.getMovie);

router.get("/movies", rangeMiddleware, movieController.getMovies);

router.post("/movies", isAdminMiddleware, movieController.postMovie);

router.delete("/movies/:id", isAdminMiddleware, movieController.deleteMovie);

router.get("/shows", rangeMiddleware, movieController.getShows);

router.post("/shows", isAdminMiddleware, movieController.postShow);

router.delete("/shows/:id", isAdminMiddleware, movieController.deleteShow);

router.get("/review-data", movieController.getReviewData);

router.get("/reviews", movieController.getReviews);

router.post("/reviews", movieController.postReview);

router.get("/seats", rangeMiddleware, seatController.getSeats);

router.post("/seats", isAdminMiddleware, seatController.postSeat);

router.delete("/seats/:id", seatController.deleteSeat);

// router.get("/seatstatus", seatController.getSeatStatus);

router.post("/seatstatus", seatController.postSeatStatus);

module.exports = router;
