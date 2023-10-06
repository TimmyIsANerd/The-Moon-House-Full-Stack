// Import Express
import express from 'express';

// Import Express Router
const router = express.Router();
import adminController from '../controllers/adminController.js';

// Setup Routes for Admin
// Admin Sign Up GET
router.get('/admin/signup',adminController.admin_signup_get);
// Admin Sign Up POST
router.get('/admin/signup',adminController.admin_signup_post);
// Admin GET Login
router.get('/admin/login',adminController.admin_get);
// Admin POST Login
router.post('/',adminController.admin_post);
// Admin Dashboard
router.get('/admin/dashboard',adminController.admin_dashboard_get)
// Admin POST Create New User
router.post('/admin/dashboard/createuser',adminController.admin_dashboard_create_user);
// Admin DELETE User 
router.delete('/admin/dashboard/deleteuser/:id',adminController.admin_dashboard_delete_user);
// Admin POST Set Kyc Information
router.post('/admin/dashboard/edituserkycData/:id',adminController.admin_dashboard_editUserInformation);
// Admin Create User Portfolio
router.post('/admin/createuserportfiolio/:id',adminController.admin_dashboard_createUserPortfolio);

// User Notification
router.get('/admin/sendnotification',adminController.send_notification_get);
router.post('/admin/sendnotification',adminController.send_notification_post);

export default router;