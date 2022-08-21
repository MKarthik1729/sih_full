const mongoose = require("mongoose");

const getPlayfieldSchema = mongoose.Schema({
	useremail: {
		type: String,
		unique: true,
	},
	required_for: String,
	approx_usage: String,
	consent_letter: Boolean,
	approx_price: Number,
	status: {
		type: String,
		default: "Pending",
	},
});

module.exports = mongoose.model("get_playfield", getPlayfieldSchema);
