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
app.use(expres.static('public'));

// Listen for port 4000
app.listen(port, () => console.log(`Example app listening on port port!`))

// Test for index route
app.get('/', (req, res) =>{
    res.render('index');
});