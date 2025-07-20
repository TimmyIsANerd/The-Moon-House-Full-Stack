// Import JWT
import jwt from 'jsonwebtoken';
// Import User Model
// const { userData } = require('../model/userData');
import {User} from '../model/index.js'

// const User = userData;

// JWT SECRET
const JWT_SECRET = 'the-moon-house-secret';
// Authenticate Cookie
const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt

    // Check if token exists & is verified
    if(token){
        jwt.verify(token,JWT_SECRET, async (err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.redirect('/invest/login');
            } else {
                let user = await User.findById(decodedToken.id);
                req.user = user;
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
            }
        })
    } else {
        // If cookie does not exist, redirect user to login
        // res.redirect('/dashboard');
        next();
    }
}

export { requireAuth, checkUser, dashboardRedirect };
