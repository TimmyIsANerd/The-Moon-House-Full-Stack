// Require Mongoose
const mongoose = require('mongoose');

const AdminData = new mongoose.Schema(
    {
        // Authentication Data
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{type:String,required:true},
        email:{type:String,required:true},
        passKey:{type:String,required:true},
        AccessStatus:{
            type:String,
            status:['Denied','Granted'],
            default:'Denied'
        }
    },
    {collection:'admin_data'},
    {timestamps:true}
)

module.exports = {AdminData};