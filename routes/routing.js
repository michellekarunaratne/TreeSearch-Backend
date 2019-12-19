var express= require('express');
var router= express.Router();

const Trees=require('../controllers/treeController')

router.get('/getAllTrees',function(req,res){

    Trees.retrieveAllTrees()
    .then(function(docs){
        res.send(docs);
    })
    .catch(function(error){
        res.send(error)
    })
    
})

module.exports=router;