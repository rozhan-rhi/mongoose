var express = require('express');
var router = express.Router();
var check=require("../public/javascripts/validateCheck")
var userSign=require("../models/user_signup");
var otpSave=require("../public/javascripts/save_otp").otpSaver;
var otpModel=require("../models/otp_schema").code


router.get("/phone",(req,res,next)=>{
    res.render("login.ejs")
});
router.post("/validation",[check.phoneCheck],async(req,res)=>{
    userSign.user.findOne({phone:req.body.phone},function(err,docs){
            if(docs==null){
                res.redirect("/signUp")
            }
            
        else{
            otpModel.findOne({phone:req.body.phone},async function(err,docs){
                if (docs==null){
                    otpSave(req.body.phone);
                }
            })
            res.redirect("/code?phone")

        }
    }
    )
});
module.exports =router;
