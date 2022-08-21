const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let admin = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  school_address : {
    type: String,
    required: true
  },
  city : {
    type: String,
    required: true
  },
  ph_no : {
    type : String, 
    required : true
  }
});

module.exports = mongoose.model("Admindata", admin);