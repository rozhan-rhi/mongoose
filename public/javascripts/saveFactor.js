const { factors } = require("../../models/factorSchema");
var factorModel=require("../../models/factorSchema").factors
// var jwt=require("jsonwebtoken");
// const userId = jwt.verify(token, "rahavard").data._id  ;  
async function save_factor(req,res){
    const newFactor = new factors({
        user_id: userId,
        seller: req.body.seller,
        buyer: req.body.buyer,
        product:req.body.product,
        count: req.body.count,
      });
      newFactor.save()
}
module.exports={save_factor}