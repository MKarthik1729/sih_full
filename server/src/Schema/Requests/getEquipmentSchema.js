const mongoose = require('mongoose');

const getEquipmentSchema = mongoose.Schema({
    useremail : {
        type : String,
        unique : true
    },
    name : String,
    
    number_of_items_and_reason : String,
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