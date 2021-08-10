// Import Express
const express = require('express');
// Import Body parser 
const bodyParser = require('body-parser');
// Authentication Routes
const router = express.Router();
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }));
// Import Controller
const authController = require('../controllers/authController');
// Import Middleware
const { dashboardRedirect } = require('../middleware/authMiddleware');

// Admin Access Routes
router.get('/admin/login');
router.post('/admin/login');
router.get('/admin/logout');

// Admin Password Change
router.get('/admin/changepassword');
router.post('/admin/changepassword');

// Admin Sign Up
router.get('/admin/signup',authController.admin_signup_get);
router.post('/admin/signup',authController.admin_signup_post);
router.get('/admin/signup_success');

// Login GET Request
router.get('/invest/login',dashboardRedirect,authController.login_get);
// Login POST Requst
router.post('/user/login',authController.login_post);
// Login GET Request
router.get('/user/logout',authController.logout_get);


// Change Password GET Request
router.get('/user/changepassword',authController.change_password_get);
// Change Password POST Request
router.post('/user/changepassword',authController.change_password_post);


// Sign Up Route
// Sign Up Page GET Request
router.get('/invest/signup',dashboardRedirect,authController.sign_up_get);
// JSON Request handler (Sign Up POST Request)
router.post('/api/signup',authController.sign_up_post);
// Sign Up Succesful GET Request
router.get('/user/signup_success',authController.sign_up_success_get);

// User Email Confirmation Route GET Request
router.get('/api/auth/:confirmationCode',authController.verifyUser);


// Unverified Account attempted login Route
router.get('/error/unverifiedaccount',authController.unverifieduseraccount);

module.exports = router;