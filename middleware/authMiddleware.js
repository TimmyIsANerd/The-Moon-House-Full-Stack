// Import JWT
const jwt = require('jsonwebtoken');
// Import User Model
const User = require('../model/userSignUp');

// JWT SECRET
const JWT_SECRET = 'the-moon-house-secret';
// Authenticate Cookie
const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt

    // Check if token exists & is verified
    if(token){
        jwt.verify(token,JWT_SECRET,(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.redirect('/user/login');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        // If cookie does not exist, redirect user to login
        res.redirect('/user/login');
    }
}

// Check Current User
const checkUser = (req,res,next) =>{
    const token = req.cookie.jwt;

    if(token){
        jwt.verify(token,JWT_SECRET, async (err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findbyId(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };