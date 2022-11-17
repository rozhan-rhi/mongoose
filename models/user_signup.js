var mongoose=require("mongoose");
var otp=require("../public/javascripts/otpGenerate");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
    },
    otp:{
        type:String,
        default:otp.otpCode
    },
    time:{
        type:String,
        default:Date.now()
    }
});
const user=mongoose.model("user",userSchema);
module.exports={user};