const express = require('express');
const unmannedShipController = require('../controllers/unmannedShipController');
const router = express.Router();

//API ENDPOINTS UNMANNED SHIP

//List all Unmanned ships in database
router.get("/unmanned-ship-list", unmannedShipController.listAllUnmannedShip)

//Creates new Unmanned ship in database
router.post("/new-unmanned-ship", unmannedShipController.createNewUnmannedShip)

//Read existing Unmanned ship by ID
router.get("/unmanned-ship/:unmannedshipid", unmannedShipController.readUnmannedShip)

//Update existing Unmanned ship by ID
router.put("/unmanned-ship/:unmannedshipid", unmannedShipController.updateUnmannedShip)

//Delete existing Unmanned ship by ID
router.delete("/unmanned-ship/:unmannedshipid", unmannedShipController.deleteUnmannedShip)

module.exports = router