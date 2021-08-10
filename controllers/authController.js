// Import Required Model
const { userData } = require('../model/userData');
const userSignUp = userData;
const adminData = require('../model/adminData');
// Import nodemailer auth config
const config = require('../config/auth.config');
const nodemailer = require('../config/nodemailer.config');
// Import Bcrypt
const bcrypt = require('bcryptjs');
// Import JWT
const jwt = require('jsonwebtoken');

// Creating JWT Secret
const JWT_SECRET = 'the-moon-house-secret';
// Set Up Sign Up Controller
// GET Sign Up Page
const sign_up_get = (req,res) =>{
    res.render('./user/userSignUp',{title:'User Sign Up'});
}
// Sign Up Success GET Request
const sign_up_success_get = (req,res) =>{
    res.render('user/signUpSuccess');
}
// POST Sign Up Page
const sign_up_post = async (req,res)=>{
    // Randomly Create Tokens for Confirmation for new Users
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let confirmationToken = '';
    for (let i = 0;i < 25; i++){
        confirmationToken += characters[Math.floor(Math.random() * characters.length )];
    }
    // Referal Code Generator
    const referalCodeGen = () =>{
        var codeCharacters = "abcdefgh01234"
        let referalCode = '';
        for (let i = 0; i < 10; i++){
            referalCode += codeCharacters[Math.floor(Math.random() * codeCharacters.lenght )];
        }
        return referalCode;
    }
    // Collect body into destructured object
    const { firstName ,lastName ,email, password: plainTextPassword } = req.body;
    // Specifications for Account Balance
    // const date = new Date();
    // const currentDate = date.getDate();
    // const investmentBalance = {
    //     accountBalance:0,
    //     deposits:{
    //         amount:0,
    //     },
    //     transactionDate:currentDate,
    //     transactionType:['Bank Deposit','USDT Wallet']
    // }
    // const {accountBalance,deposits,transactionDate,transactionType} = investmentBalance;
    // Hashing Password using bcrypt library
    // Full Name Validation
    if(!firstName || !lastName){
        return res.json({ status:error, error : 'Please Enter Full Name' });
    }
    // Password Validation
    if(!email || typeof email !== 'string'){
        return res.json({status : error, error : 'Invalid Email'});
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status : error, error : 'Invalid Password'});
    }
    if(plainTextPassword.length < 8){
        return res.json({status : error, error : 'Password is less than 8 characters'})
        throw error;
    }
    const password = await bcrypt.hash(plainTextPassword, 10);
    // Use Try/Catch to Create User in the Database
    // Create a New unverified user in the system
    try{
        var date = new Date().toLocaleDateString()
        var currentDate = date
        const newUser = await userSignUp.create({
            firstName,
            lastName,
            email,
            password,
            status:'Active',
            fundAccVerification:'Unverified',
            userType:'investor',
            referalCode:confirmationToken,
            confirmationCode:confirmationToken,
            investorAccount:{
                accountBalance:0,
                deposits:{
                    depositEntry:[
                        {
                            amount:0,
                            transactionDate: currentDate,
                            transactionType:'',
                        }
                    ]
                },
                ROI:{
                    accountBalance:0,
                    ROIEntry:[
                        {
                            amount:0,
                            transactionDate:currentDate,
                            investmentPackage:''
                        }
                    ]
                },
                Invested:{
                    accountBalance:0,
                    investmentEntry:[
                        {
                            amount:0,
                            transactionDate:currentDate,
                        }
                    ]
                },
                Referal:{
                    accountBalance:0,
                    amount:0,
                    transactionDate:currentDate,
                    payoutOption:'',
                    referals:[]
                },
            },
            userNotifications:{
                notification:[
                    {
                        message:'Welcome to The Moon House Investor Dashboard',
                        messageStatus:'Unread'
                    },
                    {
                        message:'Currently you can only make deposits to your account using USDT',
                        messageStatus:'Unread'
                    },
                ]
            }
        })
        console.log('User Created Successfully', newUser)
        // Use nested try/catch to create token
        try{
            // Create Token
            const maxAge = 3 * 24 * 60 * 60;
            const createToken = (id) =>{
                return jwt.sign(
                    { id },
                    JWT_SECRET,
                    {expiresIn:maxAge}
                );
            }
            // Create Cookie
            const token = await createToken(newUser._id);
            res.cookie('jwt', token, {httpOnly:true, maxAge : maxAge * 1000})
            return res.json({
                user:newUser._id,
                status:'ok'
            }).status(201);
            // Use nested try/catch to send confirmation email
            try{
                // Call the sendEmail Function in the signup method
                newUser.save((err, newUser) =>{
                    if(err) {
                        res.status(500)
                        return;
                    }
                    return res.json({
                        status: "ok",
                    });
        
                    nodemailer.sendConfirmationEmail(
                        newUser.firstName,
                        newUser.email,
                        newUser.confirmationCode
                    )
                })
            } catch (error){
                if(error){
                    res.status(500).json(
                        {
                            status:'error',
                            error:error
                        }
                    )
                }
            }

        } catch (error){
            if(error){
                res.status(500).json(
                    {
                        status:'error',
                        error:error
                    }
                )
            }
            throw error;
        }
    } catch (error){
        if(error.code === 11000){
            // duplicate key error
            return res.json({ status : 'error', error : 'Email is already registered' });
        }
        throw error;
    }
    return res.json({status : 'ok'})
}
// Verify User Account GET Request
const verifyUser = (req,res,next) =>{
    const User = userSignUp.findOne({
        confirmationCode : req.params.confirmationCode,
    })
        .then((user) =>{
            console.log(user);
            if(!user){
                return res.status(404).send({
                    message:'User Not Found'
                })
            }
            user.status = "Active";
            user.save((err) =>{
                if(err){
                    res.status(500).send({message:err});
                    return;
                }
            });
        })
        .catch((err) => console.log("error", err));
}
// Change Password Controller GET Request
const change_password_get = (req,res) =>{
    res.render('user/changepassword',{title:'Change User Password'});
}
// Change Password Controller POST Request
const change_password_post = (req,res) =>{
    const { token } = req.body;
    const user = jwt.verify(token, JWT_SECRET)

    console.log('JWT Decoded', user)
    return res.json({status: 'ok'});
}
// Login Controller
const login_get = (req,res) =>{
    res.render('./user/userLogin', {title : 'User Login'});
}
const login_post = async (req,res) =>{
    // Store the incoming body in deconstructed object
    const { email, password } = req.body
    const user = await userSignUp.findOne({ email });
    console.log(req.body)
    if(!user){
        return res.json(
            {
                status:'error',
                error:'Invalid Email/Password'
            }
        )
    }
    // Login Condition
    // Incase of unverified account
    if(await user.status != 'Active'){
        return res.status(401).json(
            {   
                status:'error',
                error:"Pending Account. Please verify your Email!",
                redirect:'/error/unverifiedaccount'
            }
        )
    }
    if(await bcrypt.compare(password, user.password)){
        // The username, password combination is successful.
        try{
            // Create Token
            const maxAge = 3 * 24 * 60 * 60;
            const createToken = (id) =>{
                return jwt.sign(
                    { id },
                    JWT_SECRET,
                    {expiresIn:maxAge}
                );
            }
            // Create Cookie
            const token = await createToken(user._id);
            res.cookie('jwt', token, {httpOnly:true, maxAge : maxAge * 1000})
            return res.status(200).json({
                status:'ok',
                user:user._id
            })
        }catch(error){

            if(error){
                return res.status(400).json({ status: 'error', error: 'Invalid Email/Password'})
            }
        }
    } else {
        return res.json({ status: 'error', error: 'Invalid Email/Password'});
    }
    

};

const logout_get = (req,res) =>{
    res.cookie('jwt','',{httpOnly:true,maxAge:1});
    res.redirect('/invest/login');
}

// Unverifed Account Attempting Login
const unverifieduseraccount = (req,res) =>{
    res.render('unverifiedlogin', {title:'Unverified Account'});
}

// Admin Account Set Up
// Admin Login Access
const admin_login_get = (req,res) =>{
    res.render('/admin/adminLogin',{
        title:'Admin Login'
    });
}

const admin_login_post = (req,res) =>{
    // Store incoming body in deconstructed object

    const {username,password,passKey} = req.body;
}

// Admin Signup Access
const admin_signup_get = (req,res) =>{
    res.render('admin/adminSignup',
    {title:'Admin Sign Up'})
}
const admin_signup_post = async (req,res) =>{
    // Simple Passkey generator
    const passKeygen = () =>{
        const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let passKey = '';
        for (let i = 0;i < 25; i++){
            passKey += characters[Math.floor(Math.random() * characters.length )];
        }
        return passKey;
    }
    // Collect body into deconstructed object
    const {username,password} = req.body;

    try{
        const newAdmin = await adminData.create({
            username,
            password,
            passKey
        })
        console.log('Admin User created successfully',newAdmin)
        try{
            // Create Token
            const maxAge = 3 * 24 * 60 * 60;

            const createToken = (id) =>{
                return jwt.sign(
                    { id },
                    JWT_SECRET,
                    {expiresIn:maxAge}
                );
            }
            // Create Cookie
            const token = await createToken(newAdmin._id)
            res.cookie('jwt', token, 
            {httpOnly:true, maxAge:maxAge * 1000})
            return res.json({
                user:newAdmin._id,
                status:ok,
            }).status(201);
        } catch (err){
            if(err){
                res.status(500).json(
                    {
                        status:'error',
                        error:'Error with creating Token'
                    }
                )
            }
        }
    } catch(err){
        if(err){
            res.status(500).json(
                {
                    status:'error',
                    error:'Creating Admin User Failed'
                }
            )
        }
    }
}

module.exports = {
    sign_up_get,
    sign_up_post,
    sign_up_success_get,
    login_get,
    login_post,
    logout_get,
    change_password_get,
    change_password_post,
    verifyUser,
    unverifieduseraccount,
    // Admin Access Functions
    admin_signup_get,
    admin_signup_post
}