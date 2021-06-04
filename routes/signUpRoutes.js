// Import Express Router
const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpcontroller');

// Sign Up Route
// Sign Up Page
router.get('/user/signup',signUpController.sign_up_get);
// JSON Request handler (Sign Up POST Request)
router.post('/api/register',signUpController.sign_up_post);

module.exports = router;