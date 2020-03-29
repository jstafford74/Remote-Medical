const env = require("dotenv").config();
const express = require("express");

const db = require("./models");
const mongoose = require("mongoose");
const routes = require("./routes");
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
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


// if (app.get('env') === 'production') {
//   // Use secure cookies in production (requires SSL/TLS)
//   // sess.cookie.secure = true;
//   // app.set('trust proxy', 1);
// }

app.use(morgan("dev"));

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
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
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
})

const upload = multer({ storage });
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/rmt/images",
  upload.single("file"), (req, res, next) => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file);
    res.redirect("/")
  });


function startUp() {
    const conn = mongoose.createConnection(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
    // .catch(error => handleError(error));
    // mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

    // mongoose.connection.once'open', async function
      conn.once('open', function () {
      console.log('-----------------Connected to MongoDB----------------------')

        app.listen(PORT, function () {
            console.log(
            `==> API Server now listening on PORT ${PORT}!`
          );
        })
        let gfs;
        gfs = Grid(conn.db, mongoose.mongo);
        gfs.collection('uploads');
        return gfs;
      })
}
startUp();