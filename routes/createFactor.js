var express=require("express");
var router=express.Router();
var Cfactor=require("../public/javascripts/saveFactor")
router.get("/create-factor",(req,res,next)=>{
    res.render("factor");
});
router.post("/saved-factor",(req,res)=>{
    try{
        Cfactor.save_factor(req,res);
        res.send("factor saved!")
    }
    catch{
        res.send("try again")
    }

})
module.exports=router