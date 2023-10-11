// Import Express
import express from 'express';
// Import Body parser 
import bodyParser from 'body-parser';
// Authentication Routes
const router = express.Router();
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }));
// Import Controller
import {
    sign_up_get,
    sign_up_post,
    sign_up_success_get,
    login_get,
    login_post,
    logout_get,
    change_password_get,
    change_password_post,
    verifyUser,
    unverifieduseraccount,
  } from '../controllers/authController.js';
// Import Middleware
import { dashboardRedirect } from '../middleware/authMiddleware.js';

// Login GET Request
router.get('/invest/login',dashboardRedirect,login_get);
// Login POST Requst
router.post('/user/login',login_post);
// Login GET Request
router.get('/user/logout',logout_get);


// Change Password GET Request
router.get('/user/changepassword',change_password_get);
// Change Password POST Request
router.post('/user/changepassword',change_password_post);


// Sign Up Route
// Sign Up Page GET Request
router.get('/invest/signup',dashboardRedirect,sign_up_get);
// JSON Request handler (Sign Up POST Request)
router.post('/api/signup',sign_up_post);
// Sign Up Succesful GET Request
router.get('/user/signup_success',sign_up_success_get);

// User Email Confirmation Route GET Request
router.get('/api/auth/:confirmationCode',verifyUser);


// Unverified Account attempted login Route
router.get('/error/unverifiedaccount',unverifieduseraccount);

export default router;