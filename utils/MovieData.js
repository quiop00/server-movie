const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Movie = require("../models/Movie");
const movieDetail = async (id, res) => {
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).json({
      message: "Error",
      success: false
    });
  }
  let result = {
    id:movie._id,
    name: movie.name,
    slug:movie.slug,
    intro:movie.intro,
    type:movie.type,
    author:movie.author,
    actor:movie.actor,
    time:movie.time,
    nation:movie.nation,
    premiereDate:movie.premiereDate,
    price:movie.price,
    image:movie.image,
    imageInfo:movie.imageInfo,
    video:movie.video,
    vote:movie.vote
  };
    return res.status(200).json({
      ...result,
      message: "Get data successfully.",
      success: true
    });
};

const addMovie=async (movieDets,res)=>{
    const newMovie = new Movie({
        ...movieDets
      });
  
    await newMovie.save();
    return res.json(newMovie);
  }
module.exports = {movieDetail,addMovie  }
