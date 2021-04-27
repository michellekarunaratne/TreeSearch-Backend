const Tree = require('../data_models/tree');

function retrieveAllTrees() {

    var promise = new Promise(function (resolve, reject) {

        Tree.find({}, function (error, docs) {
            if (error) {
                reject(error)
            }
            else {
                resolve(docs)
            }
        })
    })

    return promise
}

function retrieveAllTreeBotNames() {
    var promise = new Promise(function (resolve, reject) {
        Tree.find({} , function (error, docs) {
            if (error) {
                reject(error);
            } else {
                resolve(docs);
            }
        }).select({'_id': 0, 'botanical_name': 1});
    })

    return promise;
}

function retrieveTreeResults(filterObject) {

    if ("tree_size" in filterObject) {
        var querytree_size = filterObject.tree_size;
        filterObject["tree_size"] = { "$in": [querytree_size] }
    }

    if ("climate" in filterObject) {
        var queryclimate = filterObject.climate;
        filterObject["climate"] = { "$in": [queryclimate] }
    }

    if ("suitable_location" in filterObject) {
        var querylocation = filterObject.suitable_location;
        filterObject["suitable_location"] = { "$in": [querylocation] }
    }

    if ("botanical_name" in filterObject) {
        var botanicalName = filterObject.botanical_name;
        filterObject["botanical_name"] = [botanicalName]; 
    }

    var promise = new Promise(function (resolve, reject) {
        Tree.find(filterObject, function (error, docs) {
            if (error) {
                reject(error)
            }
            else {
                resolve(docs)
            }
        })
    })

    return promise

}

module.exports.retrieveTreeResults = retrieveTreeResults;
module.exports.retrieveAllTrees = retrieveAllTrees;
module.exports.retrieveAllTreeBotNames = retrieveAllTreeBotNames;