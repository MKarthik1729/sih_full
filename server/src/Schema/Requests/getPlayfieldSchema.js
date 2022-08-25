const mongoose = require("mongoose");

const getPlayfieldSchema = mongoose.Schema({
	useremail: {
		type: String,
	},
	required_for: String,
	approx_usage_per_week : Number,
	intended_age: Number,
	addn_info: String,
	status: {
		type: String,
		default: "Pending",
	},
	approx_price : Number,
	remarks : {
		type : String, 
		default : 'Application still under progress'
	}
});

module.exports = mongoose.model("get_playfield", getPlayfieldSchema);
