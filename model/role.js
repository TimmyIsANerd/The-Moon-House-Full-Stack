// Require Mongoose
const mongoose = require('mongoose');

// Create Role Schema
const Role = new mongoose.Schema(
    {
        name:String
    }
)

module.exports = Role;