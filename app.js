const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app=express();
const port=3000;

//Database connection
mongoose.connect('mongodb+srv://driver-1:driver_1@treesearch-of8hf.mongodb.net/treesearch?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});

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

