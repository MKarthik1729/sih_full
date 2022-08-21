const mongoose = require("mongoose");

const getGroundSchema = mongoose.Schema({
    useremail : {
        type : String,
        unique : true
    },
	ground_shape: {
		type: String,
	},
	ground_height: Number,
	ground_width: Number,
	needed_improvement_info: String,
    approx_price : Number,
	status : {
		type : String, 
		default : "Pending"
	}
});

module.exports = mongoose.model("get_ground", getGroundSchema);
