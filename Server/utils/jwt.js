const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function createAccessToken(user) {
    //expirationDate
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 4);

    //tokenData
    const payLoad = {
        token_type: 'access',
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime(),
    };

    //generateToken 
    return jwt.sign(payLoad, JWT_SECRET_KEY);
}

module.exports = {
    createAccessToken,
};