const mongoose = require('mongoose');

const getEquipmentSchema = mongoose.Schema({
    useremail : {
        type : String,
    },
    name_of_equipment : String,
    number_of_items: Number,
    addn_info : String,
    approx_price : Number,
	status : {
		type : String, 
		default : "Pending"
	},
    remarks : {
        type : String,
        default : 'Application still under progress'
    }
})

module.exports = mongoose.model('get_equipment', getEquipmentSchema);