// Require Mongoose
const mongoose = require('mongoose');
// const { isEmail } = require('validator');

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
        // Account Investment Data
        investorAccount:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'investorAccount'
        },
        // User Contact Information
        userContactInformation:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'userContactInformation'
        },
        // Next Of Kin Information
        nextOfKinInformation:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'nextOfKinInformation'
        },
        // Withdrawal Information
        withDrawalInfo:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'withDrawalInfo'
        }
    },
    {collection:'user_data_signup'},
    {timestamps:true}
)

// Export Schema
const userData = mongoose.model('userDataSchema',userDataSchema);
module.exports = userData;