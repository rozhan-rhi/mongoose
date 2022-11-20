const mongoose=require("mongoose");
const otpSchema=new mongoose.Schema({
    code:{
        type:String,
    },
    phone:{
        type:String,
        trim:true,
    },
    time:{
        type:Date,
        default:Date.now()
    }
})
let code=mongoose.model("code",otpSchema);
module.exports={code};