const mongoose = require("mongoose");

const getGroundSchema = mongoose.Schema({
    useremail : {
        type : String,
        unique : true
    },
	ground_area : {
		type : String,
		required : true
	},
	purpose : {
		type : String,
		required : true
	},
	addn_info: String,
	status : {
		type : String, 
		default : "Pending"
	}
});

module.exports = mongoose.model("get_ground", getGroundSchema);
