// Require Mongoose
const mongoose = require('mongoose');

// Create User Sign Up Schema
const userSignUpSchema = new mongoose.Schema(
    {
        fullname : {type : String,required:true},
        email : {type:String,required:true,unique:true,lowercase:true},
        password: {type: String, required:true,minLength:8},
    },
    {collection:'user_signup_data'},
    {timestamps:true}
)

// Export Schema
const userSignUp = mongoose.model('userSignUpSchema',userSignUpSchema);
module.exports = userSignUp;