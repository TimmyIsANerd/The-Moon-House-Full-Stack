// Require Mongoose
const mongoose = require('mongoose');
const { isEmail } = require('validator');

// Create User Sign Up Schema
const userSignUpSchema = new mongoose.Schema(
    {
        fullname : {type : String,required:true},
        email : {type:String,required:[true,'Please enter an Email'],unique:true,lowercase:true,validate:[isEmail, 'Please Enter a Valid Email']},
        password: {type: String, required:[true,'Please Enter a Password'],minlength:[8,'Minimum Password Length is 8 Characters']},
    },
    {collection:'user_signup_data'},
    {timestamps:true}
)

// Export Schema
const userSignUp = mongoose.model('userSignUpSchema',userSignUpSchema);
module.exports = userSignUp;