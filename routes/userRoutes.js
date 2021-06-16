// Import Express
const express = require('express');
const bodyParser = require('body-parser');
// Import Express Router
const router = express.Router();
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }));
const userController = require('../controllers/userController');

// Set Up Routes for User 
// User Dashboard GET
router.get('/dashboard',userController.user_dashboard_get);
// User Dashboard Fund Account Post
router.post('/dashboard/fund',userController.user_dashboard_fund_post);
// User Create Investment Portfolio
router.post('/dashboard/createportfolio/:id',userController.user_dashboard_createUserPortfolio);
// User Added KYC Information
router.post('/dashboard/edituserkycData',userController.user_dashboard_editUserInformation);

module.exports = router;