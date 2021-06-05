// Import Express
const express = require('express');
// Import Express Router
const router = express.Router();
const adminController = require('../controllers/adminController');

// Setup Routes for Admin
// Admin Sign Up GET
route.get('/signup',adminController.admin_signup_get);
// Admin Sign Up POST
route.get('/signup',adminController.admin_signup_post);
// Admin GET Login
route.get('/',adminController.admin_get);
// Admin POST Login
route.post('/',adminController.admin_post);
// Admin Dashboard
route.get('/dashboard',adminController.admin_dasboard_get)
// Admin POST Create New User
route.post('/createUser',adminController.admin_dasboard_create_user);
// Admin DELETE User 
route.delete('/deleteUser/:id',adminController.admin_dasboard_delete_user);
// Admin POST Set Kyc Information
route.post('/editUserKycData/:id',adminController.admin_dasboard_editUserInformation);
// Admin Create User Portfolio
route.post('/createUserPortfiolio/:id',adminController.admin_dasboard_createUserPortfolio);

module.exports = router;