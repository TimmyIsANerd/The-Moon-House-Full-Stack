// Require Mongoose
const mongoose = require('mongoose');

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
            amount:{type:Number,default:0,min:0},
            transactionDate:{type:Date},
            transactionType:{
                type:String,
                option:['Bank Deposit','USDT']
            }
        },
        // ROI
        ROI:{
            amount:{type:Number,default:0,min:0},
            transactionDate:{type:Date},
            investmentPackage:{
                type:String,
                option:['VIP','Exclusive']
            }
        }
    }
)

const investorAccount = mongoose.model('investorAccount',investorAccountSchema);

module.exports = investorAccount;