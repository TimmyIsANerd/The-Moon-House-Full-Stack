// Import Express
const express = require('express');
// Import Express Router
const router = express.Router();
const userController = require('../controllers/userController');

// Set Up Routes for User 
// User Dashboard GET
router.get('/dashboard',userController.user_dashboard_get);
// User Create Investment Portfolio
router.post('/dashboard/createportfolio/:id',userController.user_dashboard_createUserPortfolio);
// User Added KYC Information
router.post('/dashboard/edituserkycData/:id',userController.user_dashboard_editUserInformation);

module.exports = router;