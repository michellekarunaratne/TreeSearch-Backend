var express= require('express');
var bodyParser = require('body-parser');
var router= express.Router();
var jsonencodedParser = bodyParser.json({ extended: false });


const Trees=require('../controllers/treeController')

router.get('/getAllTrees',jsonencodedParser,function(req,res){
    Trees.retrieveAllTrees()
    .then(function(docs){
        res.send(docs);
    })
    .catch(function(error){
        res.send(error)
    })
    
})

router.post('/getFilterTrees',jsonencodedParser,function(req,res){
    Trees.retrieveTreeResults(req.body)
    .then(function(docs){
        res.send(docs)
    })
    .catch(function(error){
        res.send(error)
    })
})

module.exports=router;