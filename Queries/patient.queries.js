
const Patient = require("../Models/patient.model.js");

const getPatients = async () => {
  try {
    const patients = await Patient.find().sort({_id: -1});
    return patients;
  } catch (error) {
    throw new Error("Unable to fetch patients")
  }
}

const createPatient = async (data) => {
  try {
    const newPatient = new Patient(data)
    const savedPatient = await newPatient.save();
    return await getPatients();
  } catch (error) {
    throw error
  }
}

const deletePatient = async (id) => {
  try {
    const savedPatient = await Patient.findByIdAndDelete(id);
    if(!savedPatient){
      throw new Error("Patient not found!!")
    }
    return await getPatients();
  } catch (error) {
    throw error
  }
}

const updatePatient = async (id,data) => {
  try {
    const savedPatient = await Patient.findByIdAndUpdate(id,data);
    if(!savedPatient){
      throw new Error("Patient not found!!")
    }
    return await getPatients();
  } catch (error) {
    throw error
  }
}


module.exports = { getPatients, createPatient,updatePatient,deletePatient};