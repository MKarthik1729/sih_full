const mongoose = require("mongoose");

const getPlayfieldSchema = mongoose.Schema({
	useremail: {
		type: String,
		unique: true,
	},
	required_for: String,
	intended_age_and_reason: String,
	addn_info: String,
	status: {
		type: String,
		default: "Pending",
	},
});

module.exports = mongoose.model("get_playfield", getPlayfieldSchema);
