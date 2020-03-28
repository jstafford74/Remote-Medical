require('dotenv').config();
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const db = require("../models");

// This file empties the Book and User collections and inserts the seeds below

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const demoUserSeed = [
    {
        patient_ID: "20000",
        patient_MRN: "75000",
        patient_FirstName: "neha",
        patient_LastName: "gupta",
        patient_DOB: "1990-07-25",
        patient_Email: "er.nehaa.gupta@gmail.com"
    },
    {
        patient_ID: "20000",
        patient_MRN: "74000",
        patient_FirstName: "jeremiah",
        patient_LastName: "stafford",
        patient_DOB: "1974-07-01",
        patient_Email: "jeremiah.b.stafford@gmail.com"
    }



]

async function seed() {
    try {
        //   // clear DB
        //   await db.List.remove({});
        //   await db.User.remove({});
        await db.List.collection.insertMany(demoListSeed);

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seed();