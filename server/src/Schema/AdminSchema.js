const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let admin = new Schema({
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  role : {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  mobile:{
    type: Number,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Admindata", admin);