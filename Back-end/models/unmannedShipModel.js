const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UnmannedShipSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    speed: {
        type: Number,
        required: true,
    },
    thrust: {
        type: Number,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now        
    }
});

module.exports = mongoose.model("UnmannedShip", UnmannedShipSchema);