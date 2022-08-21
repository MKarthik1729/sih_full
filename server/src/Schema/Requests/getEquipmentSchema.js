const mongoose = require('mongoose');

const getEquipmentSchema = mongoose.Schema({
    useremail : {
        type : String,
        unique : true
    },
    name : String,
    number_of_items : Number,
    approx_price : Number,
	status : {
		type : String, 
		default : "Pending"
	}
})

module.exports = mongoose.model('get_equipment', getEquipmentSchema);