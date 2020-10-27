const ReviewMovie = require("../models/ReviewMovie");
const getMovieReview = async (id, res) => {
  const movieReview = await ReviewMovie.findById(id);
  if (!movieReview) {
    return res.status(404).json({
      message: "Error",
      success: false
    });
  }
  let result = {
    id:movieReview._id,
    title: movieReview.title,
    image:movieReview.image,
    content:movieReview.content,
    vote:movieReview.vote
  };
    return res.status(200).json({
      ...result,
      message: "Get data successfully.",
      success: true
    });
};
const addReview=async (reviewDets,res)=>{
    const newReview = new ReviewMovie({
        ...reviewDets
      });
  
    await newReview.save();
    return res.json(newReview);
}

module.exports = {getMovieReview,addReview}
