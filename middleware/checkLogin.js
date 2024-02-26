const jwt = require('jsonwebtoken');
require('dotenv').config();


const checkLogin = (req,res,next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const {username,password} = decoded;
        req.username = username;
        req.password = password;
        next();
    } catch (error) {
        next('Authentication failure!');
    }
}

module.exports = checkLogin;