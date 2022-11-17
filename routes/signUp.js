var express = require('express');
var router = express.Router();
var jwt=require("jsonwebtoken");
var check=require("../public/javascripts/validateCheck");
var userSign=require("../public/javascripts/saveUser");
// const { token } = require('morgan');

router.get("/signUp",(req,res)=>{
    res.render("signup")
});
let checking = [check.emptyCheck, check.phoneCheck, check.mailCheck];
router.post("/signValid", checking, (req, res, next) => {
  try {
    userSign.findUser(req,res)
    // let token=jwt.sign({data:userSign.findUser(req,res).newUser},"rahavard")
    // return token

  } catch {
    res
      .status(500)
      .set({ "Content-Type": "application/json; charset=utf-8" })
      .send(
        JSON.stringify(
          { status: "Not_Ok", message: "خطا در اتصال به سرور" },
          null,
          3
        )
      );
  }
});
module.exports = {router};