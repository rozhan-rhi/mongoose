function phoneCheck(req, res, next) {
    if (!/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/.test(req.body.phone)) {
      res
        .status(400)
        .set({ "Content-Type": "application/json; charset=utf-8" })
        .send(
          JSON.stringify(
            { status: "Error", message: "شماره تلفن را به درستی وارد کنید" },
            null,
            3
          )
        );
    } else next();
  }

function mailCheck(req, res, next) {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        req.body.email.toLocaleLowerCase()
      )
    ) {
      res
        .status(400)
        .set({ "Content-Type": "application/json; charset=utf-8" })
        .send(
          JSON.stringify(
            { status: "Error", message: "ایمیل را به درستی وارد کنید" },
            null,
            3
          )
        );
    } else next();
  }


  
function emptyCheck(req, res, next) {
    let found=false;
  for (let key in req.body) {
    if (req.body[key].length == 0) {
        found=true;
      res
        .status(400)
        .set({ "Content-Type": "application/json; charset=utf-8" })
        .send(
          JSON.stringify(
            { status: "Error", message: "تمام فیلدها را پر کنید" },
            null,
            3
          )
        );
    }
    else{
        continue;
    }
    break;
  }
  if(!found){
    next();
  }
}

module.exports = { phoneCheck, mailCheck, emptyCheck };