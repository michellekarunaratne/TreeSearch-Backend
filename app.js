const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app=express();
const port=3000;
const dbString=require('./db-Config');

//Database connection
mongoose.connect(dbString.db,{useNewUrlParser: true,useUnifiedTopology: true});

mongoose.connection.once('open',function()
{
    console.log('Database connection has been made');
}).on('error',function(error)
{
    console.log('Connection error:',error);
});

//Running the app on port 3000
app.listen(port,function(){
    console.log(`App is listening on port ${port}`)
})

//Mounting the routing module
var plants=require('./routes/routing.js')
app.use('/treeSearch',plants);

