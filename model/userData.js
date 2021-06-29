// Require Mongoose
const mongoose = require('mongoose');
// const { isEmail } = require('validator');
// Investor Account Schema
const investorAccountSchema = new mongoose.Schema(
    {
        // Account Balance
        accountBalance:{
            type:Number,
            default:0,
            min:0
        },
        // Deposits
        deposits:{
            depositEntry:[
                {
                    amount:{type:Number,default:0,min:0},
                    transactionDate:{type:String},
                    transactionType:{
                        type:String,
                        option:['Bank Deposit','USDT']
                    }
                }
            ]
        },
        // ROI
        ROI:{
            accountBalance:0,
            ROIEntry:[
                {
                    amount:{type:Number,default:0,min:0},
                    transactionDate:{type:String},
                    payOutDate:{type:String},
                    investmentPackage:{
                        type:String,
                        option:['VIP','Exclusive']
                    }
                }
            ]
        },
        // Invested
        Invested:{
            accountBalance:0,
            investmentEntry:[
                {
                    amount:{type:Number,default:0,min:0},
                    transactionDate:{type:String},
                    investmentPackage:{
                        type:String,
                        option:['VIP','Exclusive']
                    }
                }
            ]
        },
        // Referal System
        Referal:{
            accountBalance:0,
            amount:{type:Number,default:0,min:0},
            transactionDate:{type:String},
            payoutOption:['Bank Deposit','USDT'],
            referals:{type:Array}
        }
    },
    {timestamps:true}
)
// Next of Kin Information
const nextOfKinInformationSchema = new mongoose.Schema(
    {
        KinfirstName:{
            type:String,
            required:true
        },
        KinlastName:{
            type:String,
            required:true
        },
        Kinemail:{
            type:String,
            required:true
        },
        KinphoneNumber:{
            type:Number
        },        
        Kinaddress:{
            type:String
        },
        KinPostalCode:{
            type:String
        },
        KinCity:{
            type:String
        },
        KinCountry:{
            type:String
        }
    },
    {timestamps:true}
)
// User Contact Information
const userContactInformationSchema = new mongoose.Schema(
    {   
        phoneNumber:{
            type:Number
        },
        address:{type:String},
        PostalCode:{type:String},
        City:{type:String},
        Country:{type:String}
    }
)
// Withdrawal Information
const withdrawalInfoSchema = new mongoose.Schema(
    {
        pin:{
            type:Number,
        },
        withdrawalOption:{
            type:String,
            option:['Bank Information','USDT Wallet Address'],
            default:'',
            required:true
        },
        USDTWalletAddress:{
            type:String,
        },
        BankInformation:{
            BankAccName:{type:String},
            BankAccNo:{type:Number},
            NameOfBank:{type:String}
        }
    },
    {timestamps:true}
)

// Create User Sign Up Schema
const userDataSchema = new mongoose.Schema(
    {   
        // User Sign Up
        firstName: {
            type:String,
            required:true
        },
        lastName: {
            type:String,
            required:true
        },
        email : {type:String,required:true, unique:true ,lowercase:true},
        password: {type: String, required:true,minlength:8},
        status: {
            type: String,
            enum: ['Pending', 'Active'],
            default:'Pending'
        },
        userType:{
            type:String,
            enum:['student','admin','investor'],
            default:'investor'
        },
        confirmationCode:{
            type: String,
            unique: true
        },
        referalCode:{
            type:String,
            unique:true
        },
        // Account Investment Data
        investorAccount:[investorAccountSchema],
        // User Contact Information
        userContactInformation:[userContactInformationSchema],
        // Next Of Kin Information
        nextOfKinInformation:[nextOfKinInformationSchema],
        // Withdrawal Information
        withdrawalInfo:[withdrawalInfoSchema]
    },
    {collection:'user_data_signup'},
    {timestamps:true}
)


// Export Schema
const userData = mongoose.model('userData',userDataSchema);
const investorAccount = mongoose.model('investorAccount',investorAccountSchema);
const nextOfKinInformation = mongoose.model('nextOfKinInformation',nextOfKinInformationSchema);
const userContactInformation = mongoose.model('userContactInformation',userContactInformationSchema);
const withdrawalInfo = mongoose.model('withdrawalInfo',withdrawalInfoSchema);

module.exports = {userData,investorAccount,nextOfKinInformation,userContactInformation,withdrawalInfo};