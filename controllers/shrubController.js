const Shrub=require('../data_models/shrub');

function retrieveAllShrubs(){

    var promise = new Promise(function(resolve,reject){

        Shrub.find({},function(error,docs){
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

function retrieveShrubResults(filterObject){
   
    if("height" in filterObject){
        var queryheight=filterObject.height;
        filterObject["max_height"]={"$lte":queryheight}
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
        Shrub.find(filterObject,function(error,docs){
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

module.exports.retrieveShrubResults=retrieveShrubResults;
module.exports.retrieveAllShrubs=retrieveAllShrubs;