const { fetchMovies } = require("../models/fetchMovies");

exports.getMovies = (req, res, next) => {
  fetchMovies().then((movies) => {
    res.status(200).send({ movies: movies });
  });
};
