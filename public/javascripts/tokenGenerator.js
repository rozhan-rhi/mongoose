let jwt = require('jsonwebtoken');
let generate_token = async (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            "rahavard", {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                resolve(token);
            }
        );
    });


}


module.exports = {
    generate_token,
};
