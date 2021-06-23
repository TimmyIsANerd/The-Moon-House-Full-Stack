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
router.get('/dashboard/:profileid',userController.user_dashboard_get);
// User Dashboard Profile GET
router.get('/dashboard/profile/:profileid',userController.user_dashboard_profile_get);
// User Dasboard Security GET
router.get('/dashboard/security/:profileid',userController.user_dashboard_security_get);
// User Dashboard Notifications GET
router.get('/dashboard/notifications/:profileid',userController.user_dashboard_notifications_get);
// User Dashboard History GET
router.get('/dashboard/history/:profileid',userController.user_dashboard_history_get);
// User Dashboard Fund Account Post
router.post('/dashboard/fund',userController.user_dashboard_fund_post);
// User Create Investment Portfolio
router.post('/dashboard/createportfolio/:id',userController.user_dashboard_createUserPortfolio);
// User Added KYC Information
router.post('/dashboard/edituserkycData',userController.user_dashboard_editUserInformation);
// Router Redirect
router.get('/dashboard',(req,res)=>{
    res.redirect('/dashboard/:profileid');
})
router.get('/dashboard/profile',(req,res)=>{
    res.redirect('/dashboard/profile');
})
router.get('/dashboard/security',(req,res)=>{
    res.redirect('/dashboard/security/:profileid')
})
router.get('/dashboard/notifications',(req,res)=>{
    res.redirect('/dashboard/notifications/:profileid')
})
router.get('/dashboard/history',(req,res)=>{
    res.redirect('/dashboard/history/:profileid')
})
module.exports = router;