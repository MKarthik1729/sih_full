const mongoose = require("mongoose");

const getGroundSchema = mongoose.Schema({
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

const getEquipmentSchema = mongoose.Schema({
    name : String,
    number_of_items : Number,
    number_of_people : Number,
    approx_price : Number,
	status : {
		type : String, 
		default : "Pending"
	}
})


const getPlayfieldSchema = mongoose.Schema({
    required_for : String,
    approx_usage : Number,
    consent_letter : Boolean,
    approx_price : Number,
	status : {
		type : String, 
		default : "Pending"
	}
})

const finalFormschema = mongoose.Schema({
	useremail: {
		type: String,
	},
	// get_ground: {
	// 	type: getGroundSchema,
    //     default : {},
	// 	unique : true,
	// },
    // get_equipment: {
	// 	type: getEquipmentSchema,
    //     default : {},
	// 	unique : true,
	// },
    // get_playfield: {
	// 	type: getPlayfieldSchema,
    //     default : {},
	// 	unique : true,
	// },
	request_type : {
		type : String,
		unique : true
	}
});


module.exports = mongoose.model("formdata", finalFormschema);
