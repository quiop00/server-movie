const reviewRouter = require("express").Router();
const Review=require("../models/ReviewMovie")
const{
    getMovieReview,
    addReview
  }=require("../utils/Review")
reviewRouter.get("/detail/:id",async(req,res)=>{
    await getMovieReview(req.params.id,res);
})
reviewRouter.post("/add",async(req,res)=>{
      await addReview(req.body,res);
});
reviewRouter.route("").get(function(req, res) {
  Review.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
module.exports=reviewRouter;