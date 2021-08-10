// Import Express
const express = require('express');
// Import Body Parser
const bodyParser = require('body-parser');
// Academy Dashboard Routes
const router = express.Router();
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }))

// Import Controller
const academyController = require('../controllers/academyController');

// Main Dashboard Route
router.get('/student',academyController.main_dashboard_get);


module.exports = router;