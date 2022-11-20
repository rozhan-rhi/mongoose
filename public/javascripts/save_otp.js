otpModel=require("../../models/otp_schema").code;
OTPcode=require("../javascripts/otpGenerate.js").otpCode;
async function otpSaver(phone){
    let model=new otpModel({
        phone:phone,
        code:OTPcode(),
        time:Date.now()
    })
    await model.save()
};
module.exports={otpSaver};