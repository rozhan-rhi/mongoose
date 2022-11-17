var newUser=require("../../models/user_signup").user
async function findUser(req,res){
    const specialUser=new newUser({
        name:req.body.fullname,
        phone:req.body.phone,
        address:req.body.address,
        email:req.body.email,
        image:req.body.image,
      
    });
    // let token=jwt.sign({data:newUser},"rahavard")
    if(await newUser.findOne({name:specialUser.name })){
        res.send("this username exists,try another name")
    }
    else if(await newUser.findOne({phone:specialUser.phone })){
        res.send("this phone exists,try another phone")
    }
    else if(await newUser.findOne({email:specialUser.email })){
        res.send("this email is in use,try again")
    }
    else{
        await newUser.save(function(err,obj){
            if(err) console.log(err)
            else {
                res.send("your information saved!")
            }
    })
    }
    return token
}
module.exports={findUser}