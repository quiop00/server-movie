const{Schema,model}=require("mongoose");
const ReviewMovieSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    image:String,
    content:String,
    vote:{
        rate:String,
        numberOfReviews:String
    }
});

module.exports=model("reviewmovies",ReviewMovieSchema);