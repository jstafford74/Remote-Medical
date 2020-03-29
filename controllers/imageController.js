require("dotenv").config();
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');


// Defining methods for the authController
module.exports = {
    submitImage: () => {
        upload.single("file"), (req, res, next) => {
            console.log("Request ---", req.body);
            console.log("Request file ---", req.file);

            res.json()
        }
    },


    getImages: (req, res) => {
        gfs.files.find().toArray((err, files) => {
            // Files exist?
            if (!files || files.length === 0) {
                return res.status(404).json({
                    err: 'No Files exist'
                })
            }
            return res.json(files);
        })
    },
    getImage: (req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No File exists'
                })
            }
            return res.json(file);
        })
    }
}