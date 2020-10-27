const{Schema,model}=require("mongoose");
const SupportSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:[{
        type:String
    }]
});

module.exports=model("support",SupportSchema);