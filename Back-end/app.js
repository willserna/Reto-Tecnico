const express = require('express');
const bodyParser = require('body-parser');
const launchShipRoute = require('./routes/shipLaunchRoutes');
const unmannedShipRoute = require('./routes/unmannedShipRoutes');
const mannedShipRoute = require('./routes/mannedShipRoutes');

//db instance connection
require("./config/db");

const app = express();
const port = process.env.PORT || 3000

app.use((res, req, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Headers", "Origin, X-Requested-Width, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next()
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(launchShipRoute);
app.use(unmannedShipRoute);
app.use(mannedShipRoute);

app.listen(port, () => {
    console.log(`server running in ${port}`);
});
