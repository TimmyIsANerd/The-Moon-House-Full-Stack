// Import required modules
const express = require('express');
const morgan = require('morgan');

//Create instance of express app
const app = express();
// Set port to 4000
const port = 4000;

// Register view engine
app.set('view engine','ejs');

// Middleware and Static files
app.use(morgan('dev'));
app.use(express.static('public'));

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
// Academy Welcome Route
app.get('/academy',(req,res)=>{
    res.render('academy');
});
app.get('/academy_signup',(req,res)=>{
    res.render('academy_signup')
});
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