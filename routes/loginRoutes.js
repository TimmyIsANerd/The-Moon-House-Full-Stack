// Import Express Router
const express = require('express');
const router = express.Router();
// Import Controller
const loginController = require('../controllers/loginController');

router.get('/user/login',loginController.login_get);

module.exports = router;