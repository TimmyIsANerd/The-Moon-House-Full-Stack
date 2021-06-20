const nodemailer = require('nodemailer');
const config = require('../config/auth.config');

const {user,pass} = config;

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user,pass
    }
});