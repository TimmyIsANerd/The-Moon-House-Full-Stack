// Import Nodemailer Module
const nodemailer = require('nodemailer');
// Import auth config file (Contains Email Sender Credentials)
const config = require('../config/auth.config');
const {user,pass} = config;

// Created a transport object and passed sender credentials
const transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user,
        pass
    }
});

// Export sendEmail Function
module.exports.sendConfirmationEmail = (name,email,confirmationCode) =>{
    console.log("Check");
    transport.sendMail({
        from : user,
        to : email,
        subject: "Please Confirm Your Account | The Moon House",
        // Email Confirmation Content
        html: `    
        <div>
            <h1>Email Confirmation</h1>
            <h2>Hello ${firstName}</h2>
            <p>Thank you for signing up to join the moon house <br> Please confirm your email by clicking on the following link</p>
            <a href="http://localhost:4000/confirm/${confirmationCode}">Click Here</a>
        </div>
        `
    }).catch(err => console.log(err));
};