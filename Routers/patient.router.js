const express = require("express");
const patientRouter = express.Router();
const {getPatientController,createPatientController,deletePatientController,updatePatientController} = require("../Controllers/patient.controllers.js");

patientRouter.get("/",getPatientController)

patientRouter.post("/",createPatientController)
patientRouter.post("/update/:patientId",updatePatientController)

patientRouter.delete("/delete/:patientId",deletePatientController)

module.exports = patientRouter;