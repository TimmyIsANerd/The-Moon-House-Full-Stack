// Require Mongoose
const mongoose = require('mongoose');

// Create Investor Portfolio (Investor Plan and Length)

const investorPortfolioSchema = new mongoose.Schema(
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
        },
        
    },
    { collection : 'investor_portfolio_details'},
    { timestamps : true}
)

// Export Schema

const investorPortfolio = mongoose.model('investorPortfolioSchema',investorPortfolioSchema);
module.exports = investorPortfolio;