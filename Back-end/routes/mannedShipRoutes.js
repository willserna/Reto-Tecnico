const express = require('express');
const mannedShipController = require('../controllers/mannedShipController');
const router = express.Router();

//API ENDPOINTS MANNED SHIP

//List all Manned ships in database
router.get("/manned-ship-list", mannedShipController.listAllMannedShip)

//Creates new Manned ship in database
router.post("/new-manned-ship", mannedShipController.createNewMannedShip)

//Read existing Manned ship by ID
router.get("/manned-ship/:mannedshipid", mannedShipController.readMannedShip)

//Update existing Manned ship by ID
router.put("/manned-ship/:mannedshipid", mannedShipController.updateMannedShip)

//Delete existing Manned ship by ID
router.delete("/manned-ship/:mannedshipid", mannedShipController.deleteMannedShip)

//Read existing Manned ship by Weight
router.get("/manned-ship/:Mannedshipweight", mannedShipController.readMannedShip)

module.exports = router