// Import Express
import express from 'express'
import bodyParser from 'body-parser';
import { requireAuth, checkUser } from '../middleware/authMiddleware.js';
// Import Express Router
const router = express.Router();
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }));
import {
    user_dashboard_get,
    user_dashboard_createUserPortfolio,
    user_dashboard_editUserInformation,
    user_dashboard_fund_get,
    user_dashboard_fund_post,
    user_dashboard_profile_get,
    user_dashboard_profile_redirect,
    user_dashboard_security_get,
    user_dashboard_notifications_get,
    user_dashboard_history_get,
    user_dashboard_invest_vip_get,
    user_dashboard_invests_vip_post,
    user_dashboard_roicalculator_get,
    user_dashboard_invest_exclusive_get,
    user_dashboard_invests_exclusive_post
} from '../controllers/userController.js';

// Set Up Routes for User 
// User Dashboard GET
router.get('*', checkUser)
router.get('/dashboard', requireAuth, user_dashboard_get);
// User Dashboard Profile GET
router.get('/dashboard/profile', requireAuth, user_dashboard_profile_get);
// User Dashboard Successful Profile Verification GET (Redirect)
router.get('/dashboard/profile_success', requireAuth, user_dashboard_profile_redirect);
// User Dasboard Security GET
router.get('/dashboard/security', requireAuth, user_dashboard_security_get);
// User Dashboard Notifications GET
router.get('/dashboard/notifications', requireAuth, user_dashboard_notifications_get);
// User Dashboard History GET
router.get('/dashboard/history', requireAuth, user_dashboard_history_get);
// User Dashboard Fund Account GET
router.get('/dashboard/fund', requireAuth, user_dashboard_fund_get);
// User Dashboard Fund Account POST
router.post('/dashboard/fund', requireAuth, user_dashboard_fund_post);
// User Added KYC Information POST
router.post('/dashboard/edituserkycData', requireAuth, user_dashboard_editUserInformation);
// User ROI Calculator
router.get('/dashboard/roi_calculator', requireAuth, user_dashboard_roicalculator_get)
// User Create Investment Portfolio POST
router.post('/dashboard/createportfolio/:id', requireAuth, user_dashboard_createUserPortfolio);
// User Invests (VIP) GET
router.get('/dashboard/invest_vip', requireAuth, user_dashboard_invest_vip_get);
// User Invests (VIP) POST
router.post('/dashboard/invest/vip', requireAuth, user_dashboard_invests_vip_post);
// User Invests (Exclusive) GET
router.get('/dashboard/invest_exclusive', requireAuth, user_dashboard_invest_exclusive_get);
// User Invests (Exclusive) POST
router.post('/dashboard/invest/exclusive', requireAuth, user_dashboard_invests_exclusive_post);

export default router;