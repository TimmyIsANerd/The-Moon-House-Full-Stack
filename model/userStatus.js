// Require Mongoose
const mongoose = require("mongoose");

// User Status
const userStatsSchema = new mongoose.Schema(
    {   
        accountBalance: {
            type:Number,
            default:0,
            min:0,
        },
        messages:{
            type:Number,
            default:1,
            min:0,
            max:100
        },
        referalStats:{
            type:Number,
            default:0,
        },

    },
    { collection: 'userStats' },
    { timestamps: true }
)

const userStats = mongoose.model('userStatsSchema',userStatsSchema);
module.exports = userStats