const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema({
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
  address: {
    type: String,
    required: true
  },
  useremail:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  city : {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Userdata", user);