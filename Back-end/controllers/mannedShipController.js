const MannedShip = require("../models/mannedShipModel");

//List all Manned ships from the Database

exports.listAllMannedShip = (req, res) => {
    MannedShip.find({}, (error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(200).json(ship);
    });
};

//Create a new Manned ship and save it to the Database

exports.createNewMannedShip = (req, res) => {
    let newMannedShip = new MannedShip(req.body);
    newMannedShip.save((error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(201).json(ship);
    });
};

//Read a Manned ship with specific ID

exports.readMannedShip = (req, res) => {
    MannedShip.findById(req.params.mannedshipid, (error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(200).json(ship);
    });
}

//Update a Manned ship with specific ID

exports.updateMannedShip = (req, res) => {
    MannedShip.findOneAndUpdate(
        { _id: req.params.mannedshipid },
        req.body,
        { new: true },
        (error, ship) => {
            if(error) {
                res.status(500).send(error);
            }
            res.status(200).json(ship); 
        });
};

//Delete a Manned ship by specific ID

exports.deleteMannedShip = (req, res) => {
    MannedShip.deleteOne({ _id: req.params.mannedshipid }, (error, ship) => {
        if(error) {
            res.status(404).send(error);
        }
        res.status(200).json({ message:"Manned ship succesfully deleted"}); 
    });
}