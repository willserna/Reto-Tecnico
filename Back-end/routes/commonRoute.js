const express = require('express');
const commonController = require('../controllers/commonController');
const router = express.Router();

//API ENDPOINT HEALTH SERVICE


router.get("/health", commonController.health);


module.exports = router