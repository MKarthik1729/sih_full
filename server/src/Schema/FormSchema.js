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
		type : Boolean, 
		default : false
	}
});

const getEquipmentSchema = mongoose.Schema({
    name : String,
    number_of_items : Number,
    number_of_people : Number,
    approx_price : Number,
	status : {
		type : Boolean, 
		default : false
	}
})


const getPlayfieldSchema = mongoose.Schema({
    required_for : String,
    approx_usage : Number,
    consent_letter : Boolean,
    approx_price : Number,
	status : {
		type : Boolean, 
		default : false
	}
})

const finalFormschema = mongoose.Schema({
	useremail: {
		type: String,
	},
	get_ground: {
		type: getGroundSchema,
        default : {}
	},
    get_equipment: {
		type: getEquipmentSchema,
        default : {}
	},
    get_playfield: {
		type: getPlayfieldSchema,
        default : {}
	},
});


module.exports = mongoose.model("formdata", finalFormschema);
