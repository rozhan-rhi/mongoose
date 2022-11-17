var express = require('express');
var router = express.Router();
// var jwt=require("jsonwebtoken");
var check=require("../public/javascripts/validateCheck")
var userSign=require("../models/user_signup");
// const { token } = require('morgan');
router.get("/phone",(req,res,next)=>{
    res.render("login.ejs")
});
router.post("/validation",[check.phoneCheck],(req,res)=>{
    userSign.user.findOne({phone:req.body.phone},function(err,docs){
            if(docs==null){
                res.redirect("/signUp")
            }
        else{
            // let token=jwt.sign({data:userSign.findUser(req,res).newUser},"rahavard")
            res.redirect("/code")
            // return token

        }
    }
    )
});
module.exports =router;
