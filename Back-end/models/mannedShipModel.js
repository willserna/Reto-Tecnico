const mongoose = require("mongoose");
const schema = mongoose.Schema;

const MannedShipSchema = new schema({
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
    weight: {
        type: Number,
        required: true,
    },
    personAmount: {
        type: Number,
        required: true,
    },
    use: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now        
    }
});

module.exports = mongoose.model("MannedShip", MannedShipSchema);