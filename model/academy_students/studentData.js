// Require Mongoose
const mongoose = require('mongoose');

//Courses
const registeredCourseSchema = new mongoose.Schema(
    {
        CryptoRelatedCourses:{
            type:String,
            courses:[
                'Crypto Trading',
                'Advanced Crypto Trading Concepts',
            ]
        },
        HEXAcademyCourses:{
            type:String,
            courses:[
                'Full Stack Development',
                'Block Chain Development',
                'Back End Development',
                'Front End Development'
            ]
        }
    }
)


// Academy Student Data
const studentDataSchema = new mongoose.Schema(
    {
        // User Data
        fullname:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        // Registered Course
        registeredCourses:[registeredCourseSchema]
    },
    {timestamps:true}
)

const studentData = mongoose.model('studentData',studentDataSchema);

module.exports = {studentData}