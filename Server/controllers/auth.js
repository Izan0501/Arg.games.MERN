const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt')

async function register(req, res) {
    //recibe data
    const { firstname, lastname, email, password } = req.body;

    //validation
    if (!email){ 
        return res.status(400).send({ msg: 'Please insert your email' });
    }
    if (!password) {
        return res.status(401).send({ msg: 'Please insert your password' });
    }

    //createUser
    const user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email.toLowerCase(),
        password: password,
        role: 'user',
        active: true,
    });


    //encryptPassword
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)
    user.password = hashPassword;

    //saveUser
    try {
        await user.save();
        res.status(200).send({ msg: 'Saved User' })
    } catch (error) {
        res.status(400).send({ msg: `Saving User ERROR: ${error}` })
    }
}

async function login(req, res) {
    //getData
    const { email, password } = req.body;

    //Validations
    if (!email){
        return res.status(400).send({ msg: 'Please insert your email' });
    }
    if (!password) {
        return res.status(401).send({ msg: 'Please insert your password' });
    }
    
    //verifyCredentials
    try {
        const user = await User.findOne({email: email.toLowerCase() });
        
        const check = await bcrypt.compare(password, user.password)
        
        if (!check) {
            res.status(400).send({msg: 'Incorrect'});
        }
        else if (!user.active) {
            res.status(400).send({msg:'Inactive User'});
        }
        else {
            res.status(200).send({access: jwt.createAccessToken(user)});
        }
    } catch (error) {
        res.status(500).send({ msg: `Server ERROR` });
    }
}

module.exports = {
    register,
    login,
};