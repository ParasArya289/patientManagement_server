const { getPatients, createPatient,updatePatient,deletePatient} = require("../Queries/patient.queries.js");

const getPatientController = async(req,res)=>{
  try{
    const Patients = await getPatients();
    res.status(200).json({messsage:"Fetched Patients",Patients})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const createPatientController = async(req,res)=>{
  const {body} = req;
  try{
    const patients = await createPatient(body);
    res.status(200).json({messsage:"Patient created",patients})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const deletePatientController = async(req,res)=>{
  const {patientId} = req.params;
  try{
    const patients = await deletePatient(patientId);
    res.status(200).json({messsage:"Patient deleted",patients})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const updatePatientController = async(req,res)=>{
  const {patientId} = req.params;
  const {body} = req;
  try{
    const patients = await updatePatient(patientId,body);
    res.status(200).json({messsage:"Patient updated",patients})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {getPatientController,createPatientController,deletePatientController,updatePatientController};
