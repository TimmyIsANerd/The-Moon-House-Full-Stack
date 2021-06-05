// Import Models
const investorKyc = require('../model/investor_kyc');
const adminUser = require('../model/adminUserInformation');
// Admin Controller

// Sign Up Controller GET
const admin_signup_get = (req,res) =>{
    res.render('/admin/admin_signup',{title:'Admin Sign Up'})
}
// Sign Up Controller POST
const admin_signup_post = (req,res) =>{
    
}
// Login Controller GET
const admin_get = (req,res) =>{
    res.render('/admin/admin_login',{title:'Admin Login'})
}
// Login Controller POST
const admin_post = (req,res) =>{
    
}
// Dashboard GET
const admin_dashboard_get = (req,res) =>{
    res.send('Admin Dashboard')
}
// Dashboard Create User POST
const admin_dashboard_create_user = (req,res) =>{
    
}
// Dashboard Delete User DELETE
const admin_dasboard_delete_user = (req,res) =>{
    
}
const admin_dashboard_editUserInformation = (req,res) =>{

}
const admin_dashboard_createUserPortfolio = (req,res) =>{

}

module.exports = {
    admin_signup_get,
    admin_signup_post,
    admin_get,
    admin_post,
    admin_dashboard_get,
    admin_dashboard_create_user,
    admin_dasboard_delete_user,
    admin_dashboard_editUserInformation,
    admin_dashboard_createUserPortfolio
}