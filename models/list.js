const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    image: { type: String, required: true, unique: true },
    message: { type: String, required: true, unique: true },
    role: { type: String, required: true, default: 'user' },
});

const List = mongoose.model("List", listSchema);

module.exports = List;
