const ShipLaunch = require("../models/shipLaunchModel");

//List all Launch ships from the Database

exports.listAllShipLaunch = (req, res) => {
    ShipLaunch.find({}, (error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(200).json(ship);
    });
};

//Create a new ship Launch and save it to the Database

exports.createNewShipLaunch = (req, res) => {
    let newShipLaunch = new ShipLaunch(req.body);
    newShipLaunch.save((error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(201).json(ship);
    });
};

//Read a launch ship with specific ID

exports.readShipLaunch = (req, res) => {
    ShipLaunch.findById(req.params.shiplaunchid, (error, ship) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(200).json(ship);
    });
}

//Update a launch ship with specific ID

exports.updateShipLaunch = (req, res) => {
    ShipLaunch.findOneAndUpdate(
        { _id: req.params.shiplaunchid },
        req.body,
        { new: true },
        (error, ship) => {
            if(error) {
                res.status(500).send(error);
            }
            res.status(200).json(ship); 
        });
};

//Delete a Launch ship ny specific ID

exports.deleteShipLaunch = (req, res) => {
    ShipLaunch.deleteOne({ _id: req.params.shiplaunchid }, (error, ship) => {
        if(error) {
            res.status(404).send(error);
        }
        res.status(200).json({ message:"Launch ship succesfully deleted"}); 
    });
}
