const mongoose = require("mongoose");

const getGroundSchema = mongoose.Schema({
    useremail : {
        type : String,
    },
	school_addr : {
		type : String,
		required : true
	},
	ground_area : Number,
	status_of_ground : Boolean,
	approx_price : Number,
	purpose : {
		type : String,
		required : true
	},
	addn_info: String,
	remarks : {
        type : String,
        default : 'Application still under progress'
    },
	status : {
		type : String, 
		default : "Pending"
	}
});

module.exports = mongoose.model("get_ground", getGroundSchema);
