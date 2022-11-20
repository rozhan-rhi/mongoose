let jwt=require("jsonwebtoken");
function checkToken(req,res,next){
    let token=req.headers['x-access-token'] || req.headers['authorization'];
    if(token){
        jwt.verify(token,"rahavard",(err,decode)=>{
            if(err){
                console.log(err)
                res.send(err)
            }
            if(decode){
                console.log(decode)
                res.send(decode)
            }
        });
    }
    else{
        res.send("not found")
    }
}
module.exports={checkToken};