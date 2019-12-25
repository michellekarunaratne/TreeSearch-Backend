var express= require('express');
var bodyParser = require('body-parser');
var router= express.Router();
var jsonencodedParser = bodyParser.json({ extended: false });

//Tree routing
const Trees=require('../controllers/treeController')

router.get('/getAllTrees',jsonencodedParser,function(req,res){
    Trees.retrieveAllTrees()
    .then(function(docs){
        res.send(docs);
    })
    .catch(function(error){
        res.status(400).send(error)
    })
    
})

router.post('/getFilterTrees',jsonencodedParser,function(req,res){
    Trees.retrieveTreeResults(req.body)
    .then(function(docs){
        res.send(docs)
    })
    .catch(function(error){
        res.status(400).send(error)
    })
})

//Shrub routing
const Shrubs=require('../controllers/shrubController')

router.get('/getAllShrubs',jsonencodedParser,function(req,res){
    Shrubs.retrieveAllShrubs()
    .then(function(docs){
        res.send(docs)
    })
    .catch(function(error){
        res.status(400).send(error)
    })
})

router.post('/getFilterShrubs',jsonencodedParser,function(req,res){
    Shrubs.retrieveShrubResults(req.body)
    .then(function(docs){
        res.send(docs)
    })
    .catch(function(error){
        res.status(400).send(error)
    })
})


module.exports=router;