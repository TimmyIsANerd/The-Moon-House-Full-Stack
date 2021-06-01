// Import required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');

// Connect MongoDB
const dbURI = 'mongodb://127.0.0.1:27017/the_moon_house';
mongoose.connect(dbURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

//Create instance of express app
const app = express();
// Set port to 4000
const port = 4000;

// Register view engine
app.set('view engine','ejs');

// Middleware and Static files
app.use(morgan('dev'));
app.use(express.static('public'));
// Middleware to decode incoming body
app.use(bodyParser.json());

// Listen for port 4000
app.listen(port, () => console.log(`Example app listening on port ${port}`))



// Set Up Routes
// Home Route
app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/home',(req,res)=>{
    res.redirect('/');
});
// Invest Page Route
app.get('/invest', (req,res)=>{
    res.render('invest');
})
// Invest Sign Up Route
app.get('/invest/signup',(req,res)=>{
    res.render('invest_signup');
})
app.get('/invest/login',(req,res)=>{
    res.render('invest_login');
})
// Academy Route
app.get('/academy',(req,res)=>{
    res.render('academy');
});
app.get('/academy/signup',(req,res)=>{
    res.render('academy_signup');
});
// JSON Request handler
app.post('/api/register', async (req,res)=>{
    console.log(req.body);
    // Hashing Password
    res.json({status : 'ok' })
})
app.get('/academy/login',(req,res)=>{
    res.render('academy_login');
})
// Contact Us Route
app.get('/contact', (req,res)=>{
    res.render('contact');
});
// Privacy Policy Route
app.get('/policy',(req,res)=>{
    res.render('privacy');
});
// Terms & Conditions Route
app.get('/terms',(req,res)=>{
    res.render('terms');
});
// Admin Route
app.get('/admin',(req,res)=>{
    res.render('admin',{admin:'admin'});
})
// 404 Route
app.use((req,res)=>{
    res.status(404).render('404');
})