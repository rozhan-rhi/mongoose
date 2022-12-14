var mongoose=require("mongoose");
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
    time:{
        type:String,
        default:Date.now()
    }
});
const user=mongoose.model("user",userSchema);
module.exports={user};