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


    if("diameter" in filterObject){
        var querydbh=filterObject.dbh;
        filterObject["dbh.0"]={"$lte":querydbh}
        filterObject["dbh.1"]={"$gte":querydbh}
        delete filterObject["dbh"]
    }

    if("height" in filterObject){
         var queryheight=filterObject.height;
        filterObject["$and"]=[{"max_height":{"$gte":queryheight[0]}},{"max_height":{"$lte":queryheight[1]}}]
        delete filterObject["height"]
    }

    if("use" in filterObject){
        var queryuse=filterObject.use;
        filterObject["use"]={"$in":[queryuse]}
    }

    if("tree_size" in filterObject){
        var querytree_size=filterObject.tree_size;
        filterObject["tree_size"]={"$in":[querytree_size]}
    }

    if("taxonomic_status" in filterObject){
        var querytaxonomic_status=filterObject.taxonomic_status;
        filterObject["taxonomic_status"]={"$in":[querytaxonomic_status]}
    }

    if("climate" in filterObject){
        var queryclimate=filterObject.climate;
        filterObject["climate"]={"$in":[queryclimate]} 
    }

    if("elevation" in filterObject){
        var queryelevation=filterObject.elevation;
        filterObject["elevation"]={"$in":[queryelevation]} 
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