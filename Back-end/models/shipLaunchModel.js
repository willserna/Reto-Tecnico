const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ShipLaunchSchema = new schema({
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
    capacity: {
        type: Number,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now        
    }
});

module.exports = mongoose.model("ShipLaunch", ShipLaunchSchema);
