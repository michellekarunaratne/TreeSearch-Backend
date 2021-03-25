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

    if("tree_size" in filterObject){
        var querytree_size=filterObject.tree_size;
        filterObject["tree_size"]={"$in":[querytree_size]}
    }

    if("climate" in filterObject){
        var queryclimate=filterObject.climate;
        filterObject["climate"]={"$in":[queryclimate]} 
    }

    if("suitable_location" in filterObject){
        var queryelevation=filterObject.elevation;
        filterObject["suitable_location"]={"$in":[queryelevation]} 
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