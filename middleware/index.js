require('dotenv').config()
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const multer = require("multer");



const storage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename + Date.now(),
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
})

const upload = ({ storage });
module.exports = upload;