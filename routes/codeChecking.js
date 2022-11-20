var express = require('express');
const app = require('../app');
var router = express.Router();
var userLog=require("../models/user_signup").user;
var OTPcode=require("../public/javascripts/otpGenerate").otpCode;
var otpModel=require("../models/otp_schema").code
var Ctoken=require("../public/javascripts/tokenGenerator").generate_token

router.get("/code",(req,res)=>{
    res.render("code.ejs")

});
router.post("/login",async(req,res)=>{
    let phone="09012869719";
    otpModel.findOne({phone:phone},async function(err,docs){
            if((Date.now()-docs.time)<60000){
                if(docs.code==req.body.code){
                    res.send("Welcome!")
                    userLog.findOne({phone:phone},function(err,docs){
                        Ctoken(docs.toObject())
                    })
                    await otpModel.deleteOne({phone:phone});
                }
                else{
                    res.send("code is incorrect")
                }
            }
            else{
                otpModel.updateOne({phone:phone},{code:OTPcode()},function(err,docs){
                })
                otpModel.updateOne({phone:phone},{time:Date.now()},function(err,docs){
                })
                res.send("code expires.try again ")
               

                
            };
        })
    });

module.exports = router;
