require("dotenv").config();
const multer = require('multer');
const mongoose = require("mongoose");

const upload = multer({ storage })


const conn = mongoose.createConnection(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });


conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () {
    console.log('-----------------Connected to MongoDB----------------------')


});

module.exports = conn;