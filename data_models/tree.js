const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var treeSchema = new Schema({
	family: String,
	botanical_name: String,
	common_name: String,
	conservation_status: String,
	tree_size: [ String ],
	height: String,
	diameter: String,
	climate: [ String ],
	elevation: String,
	suitable_location: [ String ],
	engineering_benefits: String,
	growth_rate: String,
	use: String,
	light: String
});

module.exports = mongoose.model("Tree", treeSchema);
