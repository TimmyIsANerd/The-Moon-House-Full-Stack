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
            ],
            default:''
        }
    }
)

// Course Specifications
const courseSpecificationsSchema = new mongoose.Schema(
    {
        courseName:{type:String},
        courseDuration:{type:Number,default:0},
        coursePurchaseDate:{type:Date},
    }
)

// Student Notifications
const studentNotificationsSchema = new mongoose.Schema(
    {
        message:{
            content:{type:String},
            status:{
                type:String,
                readStatus:[
                    'Read',
                    'Unread'
                ],
                default:'Unread'
            }
        }
    }
)


// Academy Student Data
const studentDataSchema = new mongoose.Schema(
    {
        // User Data
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        // Registered Course
        registeredCourses:[registeredCourseSchema],
        // Course Specifications
        courseSpecification:[courseSpecificationsSchema],
        // Student Notifications
        studentNotifications:[studentNotificationsSchema]
    },
    {timestamps:true}
)

const studentData = mongoose.model('studentData',studentDataSchema);

module.exports = {studentData}