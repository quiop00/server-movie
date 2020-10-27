const movieRouter = require("express").Router();
const Movie=require("../models/Movie")
// Bring in the User Registration function
const {
  movieDetail,
  addMovie,
} = require("../utils/MovieData");

// Users Protected Route
movieRouter.get(
  "/movieDetail/:id",async (req, res) => {
    await movieDetail((req.params.id),res);
  }
);
movieRouter.route("").get(function(req, res) {
  Movie.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
movieRouter.post("/add",async (req, res) => {
      await addMovie(req.body,res);
});
module.exports = movieRouter;
