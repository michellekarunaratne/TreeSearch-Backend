const Tree=require('../data_models/tree');

function retrieveAllTrees(){

    var promise = new Promise(function(resolve,reject){

        Tree.find({},function(error,docs){
            if(error){
                reject(error)
            }
            else{
                resolve(docs)
            }
        })
    })

    return promise
}

function retrieveTreeResults(filterObject){

    if(filterObject.has("dbh")){

    }
    if(filterObject.has("height")){

    }
    var promise = new Promise(function(resolve,reject){
        Tree.find(filterObject,function(error,docs){
            if(error){
                reject(error)
            }
            else{
                resolve(docs)
            }
        })
    })

    return promise

}

module.exports.retrieveTreeResults=retrieveTreeResults;
module.exports.retrieveAllTrees=retrieveAllTrees;