// Import Express
const express = require('express');
// Import Express Router
const router = express.Router();
const adminController = require('../controllers/adminController');

// Setup Routes for Admin
// Admin Sign Up GET
router.get('/signup',adminController.admin_signup_get);
// Admin Sign Up POST
router.get('/signup',adminController.admin_signup_post);
// Admin GET Login
router.get('/',adminController.admin_get);
// Admin POST Login
router.post('/',adminController.admin_post);
// Admin Dashboard
router.get('/dashboard',adminController.admin_dashboard_get)
// Admin POST Create New User
router.post('/createUser',adminController.admin_dashboard_create_user);
// Admin DELETE User 
router.delete('/deleteUser/:id',adminController.admin_dashboard_delete_user);
// Admin POST Set Kyc Information
router.post('/editUserKycData/:id',adminController.admin_dashboard_editUserInformation);
// Admin Create User Portfolio
router.post('/createUserPortfiolio/:id',adminController.admin_dashboard_createUserPortfolio);

module.exports = router;