// Import JWT
const jwt = require('jsonwebtoken');
// Import Models
const { userData } = require('../model/userData');
const User = userData;
// JWT SECRET
const JWT_SECRET = 'the-moon-house-secret';
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
// User Dashboard Successful Profile Verification GET (Redirect)
const user_dashboard_profile_redirect = (req,res) =>{
    res.render('user/dashboard_profile_success',{
        title:'Profile Verified',
        activeNavLink:'profile'
    });
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
    // Collect Data coming from request body
    const {
        // User Data
        phoneNumber,
        address,
        PostalCode,
        City,
        Country,
        // Next of Kin Data
        KinfirstName,
        KinlastName,
        Kinemail,
        KinphoneNumber,
        Kinaddress,
        KinCity,
        KinCountry,
        KinPostalCode,
        // Withdrawal Data
        withdrawalOption,
        USDTWalletAddress,
        NameOfBank,
        BankAccName,
        BankAccNo
    } = req.body;
    
    // Check if cookie token exists & is verified

    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,JWT_SECRET, async (err,decodedToken)=>{
            if(err){
                console.log(err.message);
                next();
            } else {
                let userEditKyc = await User.findByIdAndUpdate(decodedToken.id,{
                    fundAccVerification:'Verified',
                    userContactInformation:{
                        phoneNumber,
                        address,
                        PostalCode,
                        City,
                        Country,
                    },
                    nextOfKinInformation:{
                        KinfirstName,
                        KinlastName,
                        Kinemail,
                        KinphoneNumber,
                        Kinaddress,
                        KinCity,
                        KinCountry,
                        KinPostalCode,
                    },
                    withdrawalInfo:{
                        withdrawalOption,
                        USDTWalletAddress,
                        BankInformation:{
                            NameOfBank,
                            BankAccName,
                            BankAccNo
                        }
                    }
                })
                .then(res.redirect('/dashboard/profile_success'))
                .catch(err => console.log(err))
            }
        })
    } else {
        // If Cookie does not exist, alert user of error
        // next();
    }
}
// User Dashboard Fund Account GET
const user_dashboard_fund_get = (req,res) =>{
    res.render('user/dashboard_deposit',{
        title:'Dashboard Deposit',
        activeNavLink:'dashboard'
    });
}
// User Dashboard Fund Account POST
const user_dashboard_fund_post = (req,res) =>{
    console.log('post request')
}
// User Invests (VIP) GET
const user_dashboard_invest_vip_get = (req,res)=>{
    res.render('user/dashboard_invest_vip',{
        title:'Investor VIP Package',
        activeNavLink:'dashboard'
    })
}
// User Invests (VIP) POST
const user_dashboard_invests_vip_post = (req,res)=>{
    res.send('Investment happened')
}
// User Invests (Exclusive) GET
const user_dashboard_invest_exclusive_get = (req,res)=>{
    res.render('user/dashboard_invest_exclusive',{
        title:'Investment VIP Package',
        activeNavLink:'dashboard'
    })
}
// User Invests (Exclusive) POST
const user_dashboard_invests_exclusive_post = (req,res)=>{
    res.send('Investment happened')
}

// User Dashboard ROI Calcuator GET
const user_dashboard_roicalculator_get = (req,res)=>{
    res.render('user/dashboard_roicalculator',{
        title:'ROI Calculator',
        activeNavLink:'dashboard'
    })
}


module.exports = {
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
}
