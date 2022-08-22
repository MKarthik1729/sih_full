const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let admin = new Schema({
	useremail: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Admindata", admin);
