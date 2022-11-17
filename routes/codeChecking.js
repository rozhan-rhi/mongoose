var express = require('express');
var router = express.Router();
var jwt=require("jsonwebtoken");
var userLog=require("../models/user_signup").user;
var OTPcode=require("../public/javascripts/otpGenerate");
// var Token=require("./login").token
// const Id = jwt.verify(Token, "rahavard")  ; 
// console.log(Id)

// router.get("/code",(req,res)=>{
//     res.render("code.ejs")
// });
// // console.log(phone)
// router.post("/codeValidation",(req,res)=>{
//     userLog.findOne({_id:Id},function(err,docs){
//         console.log(docs)
//         console.log(err)

    //         if((Date.now()-docs.time)<120000){
    //             if(docs.otp==req.body.code){
    //                 res.send("Welcome!")
    //             }
    //             else{
    //                 res.send("wrong code entered")
    //             }
    //         }
    //         else{
    //             console.log("enter new code that is sent to you");
    //             console.log(OTPcode);
                
    //         };
    //     })
    // });

module.exports = router;
