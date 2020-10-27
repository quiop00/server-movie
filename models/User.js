const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    phone:{
        type: String,
        required:false
    },
    gender:{
        type:String
    },
    birth:{
        type:String
    },
    address:{
        type:String
    },
    currentStar:{
        type:Number,
        default:100
    }
    ,
    targets:{
        type:Number,
        default:0
    }
    ,
    role: {
        type: String,
        require: false,
        default: "user",
        enum: ["user", "admin"]
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true }
);
module.exports = model("users", UserSchema);