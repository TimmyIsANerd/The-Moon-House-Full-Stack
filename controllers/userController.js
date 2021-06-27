// Import JWT
const jwt = require('jsonwebtoken');
// Import Models
const { userData,investorAccount,nextOfKinInformation,userContactInformation,withdrawalInfo } = require('../model/userData');
// User Dashboard GET
const user_dashboard_get = async (req,res) =>{
    res.render(
        'user/dashboard',
        {
            title:'User Dashboard',
            activeNavLink:'dashboard'
        }
    )
}
// User Dashboard Profile GET
const user_dashboard_profile_get = (req,res) =>{
    res.render('user/dashboard_profile',{
        title:'User Profile',
        activeNavLink:'profile'
    })
}
// User Dashboard Security GET
const user_dashboard_security_get = (req,res) =>{
    res.render('user/dashboard_security',{
        title:'User Security',
        activeNavLink:'security',
    })
}
// User Dashboard Notifications GET
const user_dashboard_notifications_get = (req,res) =>{
    res.render('user/dashboard_notifications',{
        title:'User Notifications',
        activeNavLink:'notifications'
    })
}
// User Dashboard History GET
const user_dashboard_history_get = (req,res) =>{
    res.render('user/dashboard_history',{
        title:'Transaction History',
        activeNavLink:'history'
    })
}
// User Dashboard POST (Create Investment Portfolio)
const user_dashboard_createUserPortfolio = (req,res) =>{
    const createPortfolio = new investorPortfolioResult(req.body);

    createPortfolio.save()
        .then((results)=>{
            res.redirect('/dashboard/profile');
        })
        .catch((err)=>{
            console.log(err)
        })
}
// User Dashboard POST (Edit User Information)
const user_dashboard_editUserInformation = (req,res) =>{
    const userkyc = new investorKyc(req.body);
    
    userkyc.save()
        .then((results)=>{
            res.redirect('/dashboard/profile')
        })
        .catch((err)=>{
            console.log(err)
        })
}
// User Dashboard Fund Account POST
const user_dashboard_fund_post = (req,res) =>{
    console.log('post request')
}


module.exports = {
    user_dashboard_get,
    user_dashboard_createUserPortfolio,
    user_dashboard_editUserInformation,
    user_dashboard_fund_post,
    user_dashboard_profile_get,
    user_dashboard_security_get,
    user_dashboard_notifications_get,
    user_dashboard_history_get,
}
