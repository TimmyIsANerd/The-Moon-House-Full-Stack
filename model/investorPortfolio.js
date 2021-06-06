// Require Mongoose
const mongoose = require('mongoose');

// Create Investor Portfolio (Investor Plan and Length)

const investorPortfolio = new mongoose.Schema(
    {
        investmentType : {
            type : String,
            required:true,
        },
        investmentDuration : {
            type: Number, 
            required:true
        },
        investmentPaymentMethod:{
            type:String,
            required:true
        },
        InvestmentWithdrawalMethod:{
            type:String,
            required:true
        }
    },
    { collection : 'user_signup_data'},
    { timestamps : true}
)

// Export Schema

const userInvestorPortfolio = mongoose.model('investorPortfolio',investorPortfolio);
module.exports = userInvestorPortfolio;