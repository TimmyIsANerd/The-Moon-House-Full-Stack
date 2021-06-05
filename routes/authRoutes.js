const express = require('express');
// Authentication Routes
const router = express.Router();
// Import Controller
const authController = require('../controllers/authController');

// Login GET Request
router.get('/user/login',authController.login_get);
// Login POST Requst
router.post('/user/login',authController.login_post);
// Login GET Request
router.get('/user/logout',authController.logout_get);
module.exports = router;


// Sign Up Route
// Sign Up Page GET Request
router.get('/user/signup',authController.sign_up_get);
// JSON Request handler (Sign Up POST Request)
router.post('/api/signup',authController.sign_up_post);
// Sign Up Succesful GET Request
router.get('/user/signup_success',authController.sign_up_success_get);

module.exports = router;