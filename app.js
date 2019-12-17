const express = require('express');
const app=express();
const port=3000;

var plants=require('./routes/routing.js')

app.listen(port,function(){
    console.log(`App is listening on port ${port}`)
})

app.use('/plants',plants);