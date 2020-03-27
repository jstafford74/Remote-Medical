const env = require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path');
const db = require("./models");
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require('morgan');
const passport = require('passport');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(passport.initialize());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;
  app.set('trust proxy', 1);
}

app.use(morgan("dev"));

var storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

async function startUp() {
  mongoose.connect(process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .catch(error => handleError(error));
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', async function () {
    console.log('-----------------Connected to MongoDB----------------------')

    // Run once to seed//
    // try {
    //   await db.List.create({
    //     patient_ID: '20000',
    //     patient_MRN: '74000',
    //     patient_FirstName: 'Jeremiah',
    //     patient_LastName: 'Stafford',
    //     patient_DOB: '1974-07-01',
    //     patient_Email: 'jeremiah.b.stafford@gmail.com'
    //   }, {
    //     patient_ID: '20000',
    //     patient_MRN: '75000',
    //     patient_FirstName: 'Neha',
    //     patient_LastName: 'Gupta',
    //     patient_DOB: '1990-07-25',
    //     patient_Email: 'er.nehaa.gupta@gmail.com'
    //   }, function (err, obj) {
    //     if (err) return console.log(err);
    //     else { console.log(obj + 'created') }// saved!
    //   })
    // } catch (err) { console.log(err) }

    //TODO:   Decipher conn in context of this start-up script
    //     let gfs

    // conn.once('open', () => {
    //     gfs = Grid(conn.db, mongoose.mongo);
    //     gfs.collection('uploads');

    // })


    app.listen(PORT, function () {
      console.log(
        `==> API Server now listening on PORT ${PORT}!`
      );

    })
  })
}




startUp()