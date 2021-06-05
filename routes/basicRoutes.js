// Basic Routes
const express = require('express');
const router = express.Router();
const basicController = require('../controllers/basicController');

// Set up Basic Routes
// Home Route
router.get('/',basicController.home);
router.get('/home',(req,res)=>{
    res.redirect('/');
});
// Invest Page Route
router.get('/invest',basicController.invest);
// Contact Us Route
router.get('/contact',basicController.contact_us);
// Privacy Policy Route
router.get('/policy',basicController.privacy_policy);
// Terms & Conditions Route
router.get('/terms',basicController.terms);


module.exports = router;