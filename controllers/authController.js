// Import Sign Up Model
const userSignUp = require('../model/userSignUp');
// Import Bcrypt
const bcrypt = require('bcryptjs');
// Set Up Sign Up Controller
// GET Sign Up Page
const sign_up_get = (req,res) =>{
    res.render('./user/userSignUp',{title:'User Sign Up'});
}
// POST Sign Up Page
const sign_up_post = async (req,res)=>{
    console.log(req.body);    
    const { fullname,email, password: plainTextPassword } = req.body;
    // Hashing Password using bcrypt library
    // Full Name Validation
    if(!fullname){
        return res.json({ status:error, error : 'Please Enter Full Name' });
    }
    // Password Validation
    if(!email || typeof email !== 'string'){
        return res.json({status : error, error : 'Invalid Email'});
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status : error, error : 'Invalid Password'});
    }
    if(plainTextPassword.length < 5){
        return res.json({status : error, error : '{Password is less than 6 characters}'});
    }
    const password = await bcrypt.hash(plainTextPassword, 10);
    // Use Try/Catch to Create User in the Database
    try{
        const response = await userSignUp.create({
            fullname,
            email,
            password
        })
        console.log('User Created Successfully', response);
    } catch (error){
        if(error.code === 11000){
            // duplicate key error
            return res.json({ status : 'error', error : 'Email already in use' });
        }
        throw error;
    }
    res.json({status : 'ok', redirect: '/user/signup_success' });
}
// Sign Up Success GET Request
const sign_up_success_get = (req,res) =>{
    res.render('user/signUpSuccess');
}

// Login Controller
const login_get = (req,res) =>{
    res.render('./user/userLogin', {title : 'User Login'});
}
const login_post = async (req,res) =>{

    // Store the body in deconstruction
    const { email, password } = req.body;
    const user = await User.findOne({ email,password }).lean()

    if(!user){
        return res.json(
            {
                status:'error',
                error:'Invalid Username/Password'
            }
        )
    }

    if(await bcrypt.compare(password, user.password)){
        // The username, password combination is successful.

        cn
        return res.json(
            {
                status:'ok',
                data:'',
                redirect:'/user/dashboard'
            }
        )
    }

    res.json({ status: 'error', error: 'Invalid Username/Password'})
};
const logout_get = (req,res) =>{

}


module.exports = {
    sign_up_get,
    sign_up_post,
    sign_up_success_get,
    login_get,
    login_post,
    logout_get
}