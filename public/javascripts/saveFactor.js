const app = require("../../app");
const { factors } = require("../../models/factorSchema"); 
const ch_token=require("./check_token").checkToken
// const login=require("../../routes/codeChecking")
// app.use("/login",login)
async function save_factor(req,res){
  ch_token(req,res)
    // const newFactor = new factors({
    //     user_id: "userId",
    //     seller: req.body.seller,
    //     buyer: req.body.buyer,
    //     product:req.body.product,
    //     count: req.body.count,
    //   });
    //   await newFactor.save()
}
module.exports={save_factor}