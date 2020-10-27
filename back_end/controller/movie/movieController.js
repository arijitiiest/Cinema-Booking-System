const Movies = require("../../models/movies");

exports.getMovies = (req, res, next) => {
  Movies.findAll()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((err) => {
    // console.log(err);
      res.status(401).json({ status: 401, message: "Somethong went wrong" });
    });
};

exports.postMovie = async (req, res, next) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const genres = req.body.genres;
  const casts = req.body.casts;
  const crews = req.body.crews;
  const running_time = req.body.running_time;
  const format = req.body.format;
  const languages = req.body.languages;
  const age_level = req.body.age_level;
  const image_url = req.body.image_url;

  try {
    const create = await Movies.create({
      title,
      desc,
      genres,
      casts,
      crews,
      running_time,
      format,
      languages,
      age_level,
      image_url
    });

    if (!create) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({ status: 201, message: "Movie created" });
  } catch (err) {
    // console.log(err);
    res.status(401).json({ status: 401, message: "Somethong went wrong" });
  }
};

exports.getReviews = (req, res, next) => {
  const movie_id = req.body.movie_id;

  Movies.findByPk(movie_id)
    .then((movie) => {
      if (!movie) throw new Error("No movie");
      return movie
        .getReviews()
        .then((reviews) => {
          res.status(200).json(reviews);
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      // console.log(err);
      res.status(401).json({ status: 401, message: "Somethong went wrong" });
    });
};

exports.postReview = (req, res, next) => {
  const movie_id = req.body.movie_id;
  const comment = req.body.comment;
  const rating = req.body.rating;

  console.log(comment, rating);

  Movies.findByPk(movie_id)
    .then((movie) => {
      if (!movie) throw new Error("No movie");
      return movie
        .createReview({ comment, rating })
        .then((review) => {
          res.status(201).json({ status: 201, ...review.dataValues });
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      // console.log(err);
      res.status(401).json({ status: 401, message: "Somethong went wrong" });
    });
};

exports.getShows = async (req, res, next) => {
  const movie_id = req.body.movie_id;
  const language = req.body.language;

  Movies.findByPk(movie_id)
    .then((movie) => {
      if (!movie) throw new Error("No movie");
      return movie
        .getShows({ where: { language } })
        .then((shows) => {
          res.status(200).json(shows);
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      // console.log(err);
      res.status(401).json({ status: 401, message: "Somethong went wrong" });
    });
};

exports.postShow = async (req, res, next) => {
  const movie_id = req.body.movie_id;
  const time = req.body.time;
  const screen = req.body.screen;
  const date = req.body.date;
  const language = req.body.language;

  console.log(date);

  Movies.findByPk(movie_id)
    .then((movie) => {
      if (!movie) throw new Error("No movie");
      return movie
        .createShow({ time, screen, date, language })
        .then((show) => {
          res.status(201).json({ status: 201, ...show.dataValues });
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      // console.log(err);
      res.status(401).json({ status: 401, message: "Somethong went wrong" });
    });
};
