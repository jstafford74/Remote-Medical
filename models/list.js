const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    patient_ID: { type: String, required: true },
    patient_FirstName: { type: String, lowercase: true },
    patient_LastName: { type: String, lowercase: true },
    pPInfo_DOB_month: { type: String },
    pAddr_Zip: { type: String },
    pPInfo_Email: { type: String },
    patient_Number: { type: String, required: true }
});

const List = mongoose.model("List", listSchema);

module.exports = List;
