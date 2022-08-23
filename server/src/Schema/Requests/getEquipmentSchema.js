const mongoose = require('mongoose');

const getEquipmentSchema = mongoose.Schema({
    useremail : {
        type : String,
        unique : true
    },
    name : String,
    number_of_items_and_reason : String,
    addn_info : String,
	status : {
		type : String, 
		default : "Pending"
	}
})

module.exports = mongoose.model('get_equipment', getEquipmentSchema);