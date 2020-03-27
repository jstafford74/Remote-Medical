const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    patient_ID: { type: String, required: true },
    patient_MRN: { type: String, required: true },
    patient_FirstName: { type: String, lowercase: true },
    patient_LastName: { type: String, lowercase: true },
    patient_DOB: { type: String },
    patient_Zip: { type: String },
    patient_Email: { type: String },

});

const List = mongoose.model("List", listSchema);

module.exports = List;
