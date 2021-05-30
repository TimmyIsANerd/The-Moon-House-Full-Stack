// Import required modules
const express = require('express');

//Create instance of express app
const app = express();
const port = 4000;

// Register view engine
app.set('view engine','ejs');

app.listen(port, () => console.log(`Example app listening on port port!`))

// Test for index route
app.get('/', (req, res) =>{
    res.render('index');
});