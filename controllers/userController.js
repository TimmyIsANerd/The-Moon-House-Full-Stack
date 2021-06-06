// Import Models
const investorKyc = require('../model/investor_kyc');
const investorPortfolio = require('../model/investorPortfolio');

// User Dashboard GET
const user_dashboard_get = (req,res) =>{
    res.send('Dashboard')
}
// User Dashboard POST (Create Investment Portfolio)
const user_dashboard_createUserPortfolio = (req,res) =>{

}
// User Dashboard POST (Edit User Information)
const user_dashboard_editUserInformation = (req,res) =>{

}

module.exports = {
    user_dashboard_get,
    user_dashboard_createUserPortfolio,
    user_dashboard_editUserInformation
}