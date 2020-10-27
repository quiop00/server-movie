const{Schema,model}=require("mongoose");
const MovieSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    slug:String,
    intro:String,
    type:String,
    author:String,
    actor:String,
    time:String,
    nation:String,
    premiereDate:String,
    price:String,
    image:String,
    imageInfo:String,
    video:String,
    vote:{
        rate:String,
        numberOfReviews:String
    }
});

module.exports=model("movie",MovieSchema);