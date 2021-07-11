// Import Express
const express = require('express');
const bodyParser = require('body-parser');
const { requireAuth,checkUser } = require('../middleware/authMiddleware');
// Import Express Router
const router = express.Router();
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }));
const userController = require('../controllers/userController');

// Set Up Routes for User 
// User Dashboard GET
router.get('*', checkUser)
router.get('/dashboard',requireAuth,userController.user_dashboard_get);
// User Dashboard Profile GET
router.get('/dashboard/profile',requireAuth,userController.user_dashboard_profile_get);
// User Dashboard Successful Profile Verification GET (Redirect)
router.get('/dashboard/profile_success',requireAuth,userController.user_dashboard_profile_redirect);
// User Dasboard Security GET
router.get('/dashboard/security',requireAuth,userController.user_dashboard_security_get);
// User Dashboard Notifications GET
router.get('/dashboard/notifications',requireAuth,userController.user_dashboard_notifications_get);
// User Dashboard History GET
router.get('/dashboard/history',requireAuth,userController.user_dashboard_history_get);
// User Dashboard Fund Account GET
router.get('/dashboard/fund',requireAuth,userController.user_dashboard_fund_get);
// User Dashboard Fund Account POST
router.post('/dashboard/fund',requireAuth,userController.user_dashboard_fund_post);
// User Added KYC Information POST
router.post('/dashboard/edituserkycData',requireAuth,userController.user_dashboard_editUserInformation);
// User ROI Calculator
router.get('/dashboard/roi_calculator',requireAuth,userController.user_dashboard_roicalculator_get)
// User Create Investment Portfolio POST
router.post('/dashboard/createportfolio/:id',requireAuth,userController.user_dashboard_createUserPortfolio);
// User Invests (VIP) GET
router.get('/dashboard/invest_vip',requireAuth,userController.user_dashboard_invest_vip_get);
// User Invests (VIP) POST
router.post('/dashboard/invest/vip',requireAuth,userController.user_dashboard_invests_vip_post);
// User Invests (Exclusive) GET
router.get('/dashboard/invest_exclusive',requireAuth,userController.user_dashboard_invest_exclusive_get);
// User Invests (Exclusive) POST
router.post('/dashboard/invest/exclusive',requireAuth,userController.user_dashboard_invests_exclusive_post);
module.exports = router;