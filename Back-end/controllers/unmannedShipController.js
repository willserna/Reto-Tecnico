const UnmannedShip = require("../models/unmannedShipModel");

//List all Unmanned ships from the Database

exports.listAllUnmannedShip = (req, res) => {
    UnmannedShip.find({}, (error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(200).json(ship);
    });
};

//Create a new Unmanned ship and save it to the Database

exports.createNewUnmannedShip = (req, res) => {
    let newUnmannedShip = new UnmannedShip(req.body);
    newUnmannedShip.save((error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(201).json(ship);
    });
};

//Read an Unmanned ship with specific ID

exports.readUnmannedShip = (req, res) => {
    UnmannedShip.findById(req.params.unmannedshipid, (error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(200).json(ship);
    });
}

//Update an Unmanned ship with specific ID

exports.updateUnmannedShip = (req, res) => {
    UnmannedShip.findOneAndUpdate(
        { _id: req.params.unmannedshipid },
        req.body,
        { new: true },
        (error, ship) => {
            if(error) {
                res.status(500).send(error);
            }
            res.status(200).json(ship); 
        });
};

//Delete an Unmanned ship ny specific ID

exports.deleteUnmannedShip = (req, res) => {
    UnmannedShip.deleteOne({ _id: req.params.unmannedshipid }, (error, ship) => {
        if(error) {
            res.status(404).send(error);
        }
        res.status(200).json({ message:"Unmanned ship succesfully deleted"}); 
    });
}
