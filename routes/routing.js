var express= require('express');
var router= express.Router();

router.get('/selectPlant',function(req,res){
    res.send("Hello from selectPlant page");
})

module.exports=router;