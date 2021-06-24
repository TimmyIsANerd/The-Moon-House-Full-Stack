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
router.get('/login',adminController.admin_get);
// Admin POST Login
router.post('/',adminController.admin_post);
// Admin Dashboard
router.get('/dashboard',adminController.admin_dashboard_get)
// Admin POST Create New User
router.post('/dashboard/createuser',adminController.admin_dashboard_create_user);
// Admin DELETE User 
router.delete('/dashboard/deleteuser/:id',adminController.admin_dashboard_delete_user);
// Admin POST Set Kyc Information
router.post('/dashboard/edituserkycData/:id',adminController.admin_dashboard_editUserInformation);
// Admin Create User Portfolio
router.post('/createuserportfiolio/:id',adminController.admin_dashboard_createUserPortfolio);

// User Notification
router.get('/sendnotification',adminController.send_notification_get);
router.post('/sendnotification',adminController.send_notification_post);

module.exports = router;