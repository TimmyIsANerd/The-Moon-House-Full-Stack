// Require Mongoose
const mongoose = require('mongoose');

// Create Schema 
const UserSchema = new mongoose.Schema(
    {
    email : {type : String, required:true, unique:true},
    password : {type : String, required:true},
    },
    {collection : 'registration_data' }
);

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model;