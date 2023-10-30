const mongoose = require("mongoose");

const patientInventory = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  medicalHistory: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  ward: {
    type: String,
    required: true
  },
}, { timestamps: true })

const Patient = mongoose.model("Patient", patientInventory);

module.exports = Patient;