// Import required Model
const studentData = require('../model/academy_students/studentData');

// Import bcrypt
const bcrypt = require('bcryptjs');
// Import JWT
const jwt = require('jsonwebtoken');

// Creating JWT Secret
const JWT_SECRET = 'the-moon-house-secret';

// Sign Up GET & POST
const academy_signup_get = (req,res) =>{
    res.render('academy/academy_signup',{
        title:'Academy Sign Up'
    }).status(200);
}
const academy_signup_post = async (req,res) =>{
    // Randomly create code for Confirmation for new Users
    const confirmationCodeGen = () =>{
        const characters = "abcdefgh01234";
        let confirmationCode = '';
        for (let i = 0;i < 6; i++){
            confirmationCode += characters[Math.floor(Math.random() * characters.length )];
        }
        return confirmationCode;
    }

    // Collect body into destructured object
    const {firstName, lastName, email, password:plainTextPassword} = req.body;


    // Validation
    // Full Name input validation
    if(!fullname || !lastName){
        return res.json({ status : error, error : 'Please Enter Full Name '});
    }
    // Email & Password Validation
    if(!email || typeof email !== 'string'){
        return res.json(
            {
                status:error,
                error:'Invalid Email'
            }
        ).status(500)
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json(
            {
                status:error,
                error:'Invalid Password'
            }
        ).status(500)
    }
    if(!plainTextPassword < 9){
        return res.json(
            {
                status:error,
                error:'Password must be at least 8 characters'
            }
        ).status(500)
    }

    const password = await bcrypt.hash(plainTextPassword,10);
    try{
        const date = new Date.toLocaleDateString()
        var currentDate = date;
        const newStudent = await studentData.create({
            firstName,
            lastName,
            email,
            password
        })
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
            const token = await createToken(newStudent._id);
            res.cookie('jwt', token, {
                httpOnly:true,
                maxAge:maxAge * 1000
            })
            return res.json({
                studentUser:newStudent._id,
                status:'ok'
            })
        } catch(error){
            if(error){
                res.json({
                    status:'error',
                    error:'Token & Cookie Failed'
                })
                throw error
            }
        }
    } catch (error){
        if(error){
            return res.json(
                {
                    status:error,
                    error:'System failed To Create New User'
                }
            )
            throw error;
        }
    }
    res.json({status:'ok'})
    res.redirect('/dashboard/academy')
}

const academy_login_get = (req,res) =>{
    res.render('academy/academy_login',{
        title:'Academy Login'
    }).status(200);
}

const academy_login_post = (req,res) =>{
    
}
module.exports = {
    academy_signup_get,
    academy_signup_post,
    academy_login_get,
    academy_login_post
}