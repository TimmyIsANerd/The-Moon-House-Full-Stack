// Require Mongoose
const mongoose = require('mongoose');


const userNotifications = new moongoose.Schema(
    {
        sender:{
            type:String,
            required:[true,'Please specify sender']
        },
        subject:{
            type:String,
            required:[true,'Please Specify Subject']
        },
        date:{
            type:Date,
            required:[true,'Please Specify Date']
        },
        message:{
            type:String,
            required:[true,"Message Field can not be empty"],
        }
    },
    { collection : 'user_notifications'},
    { timestamps:true }
)

// Export Schema 
const userNotifications = mongoose.model('userNotifications',userNotifications);
module.exports = userNotifications;