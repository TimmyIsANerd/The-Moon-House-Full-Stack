// Require Mongoose
const mongoose = require('mongoose');

// Create Admin Information Schema
const adminUserInformation = new mongoose.Schema(
    {
        fullname : {
            type: String,
            required: true,
            unique:true
        },
        email: {type:String,required:[true,'Please enter an Email'],
        lowercase:true
        },
        password : {type: String,required:[true,'Please enter a password'],minlength:[8,'Password Minimum length is 8 characters']},
    },
    { collection:'admin_user_information' },
    { timestamps: true}
)

// Export Schema
const adminUserInformation = mongoose.model('adminUserInformation',adminUserInformation);

module.exports = adminUserInformation;