// Import Models
const userData = require('../model/userSignUp');
const investorKyc = require('../model/investor_kyc');
const investorPortfolio = require('../model/investorPortfolio');
const investorPackageData = require('../model/investmentPackage');
const userTransactionsData = require('../model/userTransactions');

// User Dashboard GET
const user_dashboard_get = async (req,res) =>{
    const promise1 = userData.find({ status : 'User Data' }).exec()
    const promise2 = investorKyc.find({ status: 'Investor Data '}).exec()
    const promise3 = investorPortfolio.find({ status: 'Investor Portfolio '}).exec()
    const promise4 = investorPackageData.find({ status : 'Investment Package Data'}).exec()
    const promise5 = userTransactionsData.find({ status : 'User Transaction Data'}).exec()
    Promise.all([promise1,promise2,promise3,promise4,promise5])
        .then(([userDataResult,investorKycResult,investorPortfolioResult,investorPackageDataResult,userTransactionResult])=>{
            res.render(
                'user/dashboard',
                {
                    title:'User Dashboard',
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
            res.redirect('/dashboard');
        })
        .catch((err)=>{
            console.log(err)
        })
}
// User Dashboard POST (Edit User Information)
const user_dashboard_editUserInformation = (req,res) =>{
    // Access specific user by ID
    const id = req.params.id;
    const userkyc = new investorKyc(req.body);

    userkyc.save()
        .then((results)=>{
            res.redirect('/dashboard');
        })
        .catch((err)=>{
            console.log(err,'There is an error somewhere! I dunno! just find it');
        })
}

module.exports = {
    user_dashboard_get,
    user_dashboard_createUserPortfolio,
    user_dashboard_editUserInformation
}