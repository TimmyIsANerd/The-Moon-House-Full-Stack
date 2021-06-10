// Require Mongoose
const mongoose = require('mongoose');

// Investment Packages
// Model to list clients that chose which investment package
const investmentPackagesSchema = new mongoose.Schema(
    {
        VIPInvestor:{
            type:String,
            required:true
        },
        VIPInvestmentCapital:{
            type:Number,
            min:100,
            max:1000,
            required:true
        },
        VIPROIPercentage:{
            type:Double,
            default:0.15
        },
        ExclusiveInvestor:{
            type:String,
            required:true
        },
        ExclusiveCapital:{
            type:Number,
            min:1000,
            required:true
        },
        EstimateExclusiveROIPercentage:{
            type:Number,
            min:1,
            max:2,
            required:True
        }
    }
)

const investmentData = mongoose.model('investmentPackagesSchema',investmentPackagesSchema);
module.exports = investmentData;