const express=require("express");
const cors=require("cors");
const bp=require("body-parser");
const{connect}=require("mongoose");
const{DB,PORT}=require("./config");
const{success,error}=require("consola");
const passport = require("passport");
const app=express();
//Middlewares
app.use(bp.json());
app.use(cors());
app.use(passport.initialize());
require("./middlewares/passport")(passport)

//Use middlewares route
app.use("/api/users",require("./routes/users"));
app.use("/api/movies",require("./routes/movies"));
app.use("/api/reviews",require("./routes/reviews"));
app.use("/api/supports",require("./routes/supports"));
//connection db

const startApp=async()=>{
    try{
        //connect db
     await connect(DB,{
        useFindAndModify:true,
        useUnifiedTopology:true,
        useNewUrlParser:true});
       
        success({
            message:"Success",
            badge:true
        });
        //start listening server
        app.listen(process.env.PORT || 3000);
    }catch(err){
        error({
            message:"Error",
            badge:true
        });
        startApp();       
    }
};
    
startApp();