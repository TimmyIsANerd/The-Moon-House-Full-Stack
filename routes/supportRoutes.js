// Import Express
const express = require('express');
const bodyParser = require('body-parser');

// Import Express Router
const router = express.Router();
router.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended:true
    }));
const supportController = require('../controllers/supportController');

// Set up routes for Customer Support

router.get('/support');


module.exports = router;