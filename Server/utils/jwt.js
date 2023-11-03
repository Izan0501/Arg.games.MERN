const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function createAccessToken(user) {
    //expirationDate
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 3);

    //tokenData
    const payload = {
        token_type: 'access',
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime(),
    };

    //generateToken 
    return jwt.sign(payload, JWT_SECRET_KEY);
}

function decode (token) {
    return jwt.decode(token, JWT_SECRET_KEY, true);
}

module.exports = {
    createAccessToken,
    decode,
};