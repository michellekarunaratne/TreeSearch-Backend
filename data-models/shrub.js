const mongoose=require('mongoose');
const Schema =mongoose.Schema;

var shrubSchema= new Schema(
    {
        family:String,
        botanical_name :String,
        common_name :String,
        taxonomic_status :[String],
        tree_size :[String],
        height :[Number],
        use :[String],
        habitat :String 
    }
);

module.exports= mongoose.model('Shrub',shrubSchema);
