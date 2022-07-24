const mongoose = require("mongoose");
const dbURI = 'mongodb+srv://spship:spshipdb@cluster0.t22y824.mongodb.net/SpaceShips?retryWrites=true&w=majority';


mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
            console.log("Database connection established!");
        },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

require("../models/shipLaunchModel");