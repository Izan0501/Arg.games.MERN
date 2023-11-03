const jwt = require('../utils/jwt');

function asureAuth(req, res, next) {
    if (!req.headers.authorization) {
        res.status(403).send({msg: 'the request does not have a header'})
    }

    const token = req.headers.authorization.replace('Bearer ', '');

    try {
        const payload = jwt.decode(token)
        const { exp } = payload;
        const currenData = new Date().getTime();

        if (exp <= currenData) {
            return res.status(400).send({msg: 'Token Expired'})
        }

        req.user = payload;
        
        next();
        
    } catch (error) {
        return res.status(400).send({msg: 'invalid token'});
    }

}

module.exports = {
    asureAuth
}