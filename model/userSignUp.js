// Require Mongoose
const mongoose = require('mongoose');
// const { isEmail } = require('validator');

// Create User Sign Up Schema
const userSignUpSchema = new mongoose.Schema(
    {
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
    },
    {collection:'registration_data'},
    {timestamps:true}
)

// Export Schema
const userSignUp = mongoose.model('userSignUpSchema',userSignUpSchema);
module.exports = userSignUp;