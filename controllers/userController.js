// Import Models
const userData = require('../model/userSignUp');
const investorKyc = require('../model/investor_kyc');
const investorPortfolio = require('../model/investorPortfolio');
const investorPackageData = require('../model/investmentPackage');
const userTransactionsData = require('../model/userTransactions');

// User Dashboard GET
const user_dashboard_get = async (req,res) =>{
    const promise1 = userData.find().exec()
    const promise2 = investorKyc.find().exec()
    const promise3 = investorPortfolio.find().exec()
    const promise4 = investorPackageData.find().exec()
    const promise5 = userTransactionsData.find().exec()
    Promise.all([promise1,promise2,promise3,promise4,promise5])
        .then(([userDataResult,investorKycResult,investorPortfolioResult,investorPackageDataResult,userTransactionResult])=>{
            res.render(
                'user/dashboard',
                {
                    title:'The Moon House | User Dashboard',
                    userData : userDataResult,
                    investorKyc : investorKycResult,
                    investorPortfolio: investorPortfolioResult,
                    investorPackageData: investorPackageDataResult,
                    usertransactions:userTransactionResult
                }
            )
        })
        .catch((err)=>{
            console.log(err);
        })
}
// User Dashboard POST (Create Investment Portfolio)
const user_dashboard_createUserPortfolio = (req,res) =>{
    const createPortfolio = new investorPortfolioResult(req.body);

    createPortfolio.save()
        .then((results)=>{
            res.redirect('/');
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
            res.redirect('/dashboard')
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
    user_dashboard_fund_post
}