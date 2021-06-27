// Import JWT
const jwt = require('jsonwebtoken');
// Import User Model
const { userData } = require('../model/userData');

const User = userData;

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
                res.redirect('/invest/login');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        // If cookie does not exist, redirect user to login
        res.redirect('/invest/login');
    }
}

// Check Current User
const checkUser = (req,res,next) =>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,JWT_SECRET, async (err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.locals.user = null
                next(); 
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id)
                res.locals.user = user
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

// Dashboard Redirect
const dashboardRedirect = (req,res,next) =>{
    const token = req.cookies.jwt

    // Check if token exists & is verified
    if(token){
        jwt.verify(token,JWT_SECRET,(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                next();
            } else {
                res.redirect('/dashboard');
                console.log(decodedToken);
                next();
            }
        })
    } else {
        // If cookie does not exist, redirect user to login
        // res.redirect('/dashboard');
        next();
    }
}
module.exports = { requireAuth, checkUser, dashboardRedirect };