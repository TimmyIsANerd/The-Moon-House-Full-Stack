// Import Nodemailer Module
import nodemailer from "nodemailer";
// Import auth config file (Contains Email Sender Credentials)
import config from "../config/auth.config.js";
const { user, pass } = config;

// Created a transport object and passed sender credentials
const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user,
    pass,
  },
});

// Export sendEmail Function
export default function sendConfirmationEmail(firstName, email, confirmationCode) {
  console.log("Check");
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Please Confirm Your Account | Prism Bridge Capital",
      // Email Confirmation Content
      html: `    
        <div>
            <h1>Email Confirmation</h1>
            <h2>Hello ${firstName}</h2>
            <p>Thank you for signing up to join Prism Bridge Capital <br> Please confirm your email by clicking on the following link</p>
            <a href="http://localhost:4000/confirm/${confirmationCode}">Click Here</a>
        </div>
        `,
    })
    .catch((err) => console.log(err));
};
