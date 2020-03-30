const db = require("../models");
const upload = require("../middleware");
const Grid = require('gridfs-stream');
const mongoose = require("mongoose");

const conn = mongoose.connection;
// console.log(conn);
let gfs = Grid(conn, mongoose.mongo);
// console.log(gfs);

gfs.collection('uploads');

// return gfs;

module.exports = {
    submitImage: () => {
        console.log('route hit: ');
        upload.single("file"), (req, res, next) => {
            console.log("Request ---", req.body);
            console.log("Request file ---", req.file);
            res.redirect("/")
            res.json()
        }
    }
}


// app.post("/rmt/images",
//     upload.single("file"), (req, res, next) => {
//         console.log("Request ---", req.body);
//         console.log("Request file ---", req.file);
//         res.redirect("/")
//     });
