const express = require('express');
const shipLaunchController = require('../controllers/shipLaunchController');
const router = express.Router();

//API ENDPOINTS LAUNCH SHIP

//List all launch ships in database
router.get("/ship-launch-list", shipLaunchController.listAllShipLaunch)

//Creates new launch ship in database
router.post("/new-ship-launch", shipLaunchController.createNewShipLaunch)

//Read existing launch ship by ID
router.get("/ship-launch/:shiplaunchid", shipLaunchController.readShipLaunch)

//Update existing launch ship by ID
router.put("/ship-launch/:shiplaunchid", shipLaunchController.updateShipLaunch)

//Delete existing launch ship by ID
router.put("/ship-launch/:shiplaunchid", shipLaunchController.deleteShipLaunch)

module.exports = router