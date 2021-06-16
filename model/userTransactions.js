// Require Mongoose
const mongoose = require('mongoose');

const userTransactionsSchema = new mongoose.Schema(
    {
        // Deposit Data
        deposit:{
            type:Number,
            default:0,
            min:0,
            required:[true,'No Deposit Data received']
        },
        // Amount Invested
        invested:{
            type:Number,
            default:0,
            min:0,
            required:[true,'No Investment Amount received']
        },
        // Date of Investment
        investmentDate:{
            type:Date,
            required:[true,'Date must be specified']
        },
        // Date of Payout
        investmentPayOutDate:{
            type:Date
        },
        // Investment Payout Information 
        investmentPayoutInformation:{
            type:String,
            required:[true,'Bank/Wallet Information Needed']
        },
        investmentROIMonthly : {
            type:Number,
            default:0.15,
        },
        investmentROIFullTerm : {
            type:Number,
            default:1
        },
    },
    { collection : 'userTransactionsData'},
    { timestaps : true }
)

const userTransactions = mongoose.model('userTransactionsSchema',userTransactionsSchema);

module.exports = userTransactions;