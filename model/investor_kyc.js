// Require Mongoose 
const mongoose = require('mongoose');
// Import Validator

// Create Investor Know Your Customer Schema
const investorKyc = new mongoose.Schema(
    {   
        // Specify Needed KYC Information
        homeAddress : {type: String,required:[true,'Please Enter valid Address']},
        phoneAddress : {type:Number,required:[true,'Please Enter valid Phone Number']},
        // Next of Kin
        kinFullName : {type:String,required:[true,'Please Enter a Valid Name']},
        kinHomeAddress : {type: String,required:[true,'Please Enter valid Address']},
        kinEmailAddress : {type:String,required:[true,"Please Enter valid Email"]}
    },
    { collection : 'user_signup_data'},
    { timestamps: true }
)


// Export Schema
const userInvestorKyc = mongoose.model('investorKyc',investorKyc);
module.exports = userInvestorKyc; 