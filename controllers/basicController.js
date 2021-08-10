// Home Page
const home = (req,res) =>{
    res.render('index',{title : "The Perfect Hub To Crypto Education & Growth."});
}

// About Us Page
const about = (req,res) =>{
    res.send('About Us')
}

// Academy Page
const academy_page = (req,res)=>{
    res.send('Academy Page')
}

// Referal Sign Up
const affiliate_signup = (req,res) =>{
    res.send('Affiliate Sign Up')
}

// Invest Page
const invest = (req,res) =>{
    res.render('invest',{title : "Let Us Build Your Wealth"});
}

// Contact Us Route
const contact_us = (req,res) =>{
    res.render('contact',{title : 'Contact Us'});
}

// Privacy Policy
const privacy_policy = (req,res) =>{
    res.render('privacy',{title: 'Our Privacy Policy'});
}

// Terms & Conditions
const terms = (req,res) =>{
    res.render('terms', {title : 'Terms & Conditions'});
}

module.exports = {
    home,
    invest,
    contact_us,
    privacy_policy,
    terms,
    about,
    academy_page,
    affiliate_signup
};