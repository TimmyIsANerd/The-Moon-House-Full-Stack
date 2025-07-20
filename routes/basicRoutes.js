// Basic Routes
import express from 'express';
const router = express.Router();
import {
    home,
    invest,
    contact_us,
    privacy_policy,
    terms,
    about_us,
  } from '../controllers/basicController.js';
// Import checkUser Middleware
import { checkUser } from '../middleware/authMiddleware.js';

// Set up Basic Routes
// Home Route
router.get('*', checkUser)
router.get('/',home);
router.get('/home',(req,res)=>{
    res.redirect('/');
});
router.get('/index',(req,res)=>{
    res.redirect('/')
})
router.get('/health',(req,res) =>{
    return res.status(200);
})
// Invest Page Route
router.get('/invest',invest);
// Contact Us Route
router.get('/contact',contact_us);
// Privacy Policy Route
router.get('/policy',privacy_policy);
// Terms & Conditions Route
router.get('/terms',terms);
// About Us Route
router.get('/about',about_us);


export default router;