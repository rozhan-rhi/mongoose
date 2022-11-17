var express=require("express");
const app = express();
// app.set('views',"../views");
// app.set('view engine', 'ejs');
var router=express.Router();
var factors=require("../models/factorSchema").factors
router.get("/showFactors",(req,res)=>{
       res.render("Sfactors")
})
router.post("/factors-found",(req,res)=>{
    factors.find({user_id:"63724763b8d8e2b68a7d011e"},function(err,docs){
        res.send(docs)
    })
})
// app.listen(3000);
module.exports=router;