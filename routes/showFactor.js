var express = require('express');
var router = express.Router();
var factors=require("../models/factorSchema").factors
router.get("/showFactors",(req,res,next)=>{
       res.render("Sfactors")
})
router.post("/factors-found",(req,res)=>{
    factors.find({user_id:"63724763b8d8e2b68a7d011e"},function(err,docs){
        console.log(docs);
        console.log(err)
        res.send(docs)
    })
})
module.exports=router;