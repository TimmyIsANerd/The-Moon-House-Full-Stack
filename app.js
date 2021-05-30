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

// Home Route
app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/home',(req,res)=>{
    res.redirect('/')
});
// Invest Page Route
app.get('/invest', (req,res)=>{
    res.render('invest');
})
// Contact Us Route
app.get('/contact', (req,res)=>{
    res.render('contact');
});
// Privacy Policy Route
app.get('/policy',(req,res)=>{
    res.render('privacy');
})