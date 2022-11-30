// Import required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//Create instance of express app
const app = express();

// Import Express Routes
const basicRoutes = require('./routes/basicRoutes');
// Authentication Routes
const authRoutes = require('./routes/authRoutes');
// Admin Account Routes
const adminRoutes = require('./routes/adminRoutes');
// User Account Routes
const userRoutes = require('./routes/userRoutes');

// Connect MongoDB
// After Mongo Connection is successful, start listening on open port.
const dbURI = 'mongodb://127.0.0.1:27017/the_moon_house';
// if(process.env === "production"){
// } else {
//     mongoose.connect(dbURI,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     }).then(() => app.listen(port, () => console.log(`The Moon House App listening on port ${port}`))).catch((err) => console.log(err));
// }


app.listen(80, () => console.log(`The Moon House App listening on port ${port}`))

// Set port to 4000
const port = 4000;

// Register view engine
app.set('view engine','ejs');

// Middleware and Static files
app.use(morgan('dev'));
app.use(express.static('public'));
// Middleware to decode incoming body
app.use(bodyParser.json());
// Cookie Parser
app.use(cookieParser())

// Use Express Routes
app.use(basicRoutes);
app.use(authRoutes);
app.use('/admin',adminRoutes);
app.use(userRoutes);

// 404 Route
app.use((req,res)=>{
    res.status(404).render('404');
})