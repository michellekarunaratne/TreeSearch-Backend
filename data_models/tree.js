const mongoose=require('mongoose');
const Schema =mongoose.Schema;

var treeSchema= new Schema(
    {
        family:String,
        botanical_name :String,
        common_name :String,
        taxonomic_status :[String],
        tree_size :[String],
        height :[Number],
        dbh :[Number],
        growth_rate :String,
        use :[String],
        water_preference :String,
        light_preference :String,
        soil :String,
        habitat :String 
    }
);

module.exports= mongoose.model('Tree',treeSchema);


