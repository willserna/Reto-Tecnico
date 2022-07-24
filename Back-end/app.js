const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const launchShipRoute = require('./routes/shipLaunchRoutes');
const unmannedShipRoute = require('./routes/unmannedShipRoutes');
const mannedShipRoute = require('./routes/mannedShipRoutes');

//db instance connection
require("./config/db");

const app = express();
const port = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(launchShipRoute);
app.use(unmannedShipRoute);
app.use(mannedShipRoute);

app.listen(port, () => {
    console.log(`server running in ${port}`);
});
