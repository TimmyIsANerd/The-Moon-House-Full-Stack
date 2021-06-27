// Import Models
const userData = require('../model/userData');
// Admin Controller
 
// Dashboard GET
const admin_dashboard_get = (req,res) =>{
    res.render(
        'admin/dashboard',
        {
            title:'Admin Dashboard'
        }
    )
}
// Sign Up Controller GET
const admin_signup_get = (req,res) =>{
    res.render('/admin/admin_signup',{title:'Admin Sign Up'})
}
// Sign Up Controller POST
const admin_signup_post = (req,res) =>{
    
}
// Login Controller GET
const admin_get = (req,res) =>{
    res.render('admin/admin_login',{title:'Admin Login'})
}
// Login Controller POST
const admin_post = (req,res) =>{
    console.log('post request')
}
// Dashboard Create User POST
const admin_dashboard_create_user = (req,res) =>{
    console.log('post request')
}
// Dashboard Delete User DELETE
const admin_dashboard_delete_user = (req,res) =>{
    console.log('delete request')
}
// Dashboard Edit User Information POST
const admin_dashboard_editUserInformation = (req,res) =>{
    console.log('post request')
}
// Dashboard Edit User Information POST
const admin_dashboard_createUserPortfolio = (req,res) =>{
    console.log('post request')
}
// Send Notification GET
const send_notification_get = (req,res) =>{
    res.render('admin/notificaton');
}

// Send Notification POST
const send_notification_post = (req,res) =>{
    const createNewNotification = userNotification.create({

    });

    createNewNotification.save()
        .then((results)=>{
            res.redirect('/dashboard/notifications')
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = {
    admin_signup_get,
    admin_signup_post,
    admin_get,
    admin_post,
    admin_dashboard_get,
    admin_dashboard_create_user,
    admin_dashboard_delete_user,
    admin_dashboard_editUserInformation,
    admin_dashboard_createUserPortfolio,
    send_notification_get,
    send_notification_post
}