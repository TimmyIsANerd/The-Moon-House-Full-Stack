// Require Mongoose
const mongoose = require('mongoose');


const userNotifications = new mongoose.Schema(
    {
        message:{
            type:String,
            required:[true,"Message Field can not be empty"],
            enum:['Unread','Read'],
            default:'Unread'
        }
    },
    { collection : 'user_notifications'},
    { timestamps:true }
)

// Export Schema 
const userNotification = mongoose.model('userNotifications',userNotifications);
module.exports = userNotification;