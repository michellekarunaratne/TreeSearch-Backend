const express = require('express');
const mongoose = require("mongoose");
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;
const dbString = require('./db-Config');

var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());


//Allowing CORS 
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});

//Database connection
mongoose.connect(dbString.db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', function () {
    console.log('Database connection has been made');
}).on('error', function (error) {
    console.log('Connection error:', error);
});

//Running the app on port 3000
app.listen(port, function () {
    console.log(`App is listening on port ${port}`)
})

//Mounting the routing module
var plants = require('./routes/routing.js')
app.use('/treeSearch', plants);

