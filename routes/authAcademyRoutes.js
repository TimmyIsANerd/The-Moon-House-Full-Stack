// Import Express Router and Controller
const express = require('express');
const router = express.Router();
// Import Body Parser
const bodyParser = require('body-parser');
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }));
// Import Controller
const authAcademyController = require('../controllers/authAcademyController');

// Set Up Authentication routes
router.get('/academy/login',authAcademyController.academy_login_get);
router.get('/academy/signup',authAcademyController.academy_signup_get);
router.post('/academy/login',authAcademyController.academy_login_post);
router.post('/academy/signup',authAcademyController.academy_signup_post);


module.exports = router;