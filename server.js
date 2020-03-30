require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const db = require("./models");
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const multer = require("multer");
const Grid = require('gridfs-stream');
// const routes = require("./routes");
const morgan = require('morgan');
const passport = require('passport');
// const methodOverride = require('method-override');


Grid.mongo = mongoose.mongo;
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "build", "index.html"));
  // });
}

mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

const conn = mongoose.connection
conn.once('open', function () {
  console.log('-----------------Connected to MongoDB----------------------')
  let gfs
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
})

//========Middleware===============///

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

const upload = multer({ storage });

//======Controller=================///
app.post("/rmt/images",
  upload.single("file"), (req, res, next) => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file);
    res.redirect("/")
  });

app.get("/rmt/auth/checkacct/:FirstName/:LastName/:email/:DOB", function (req, res) {
  console.log(req.params)
  db.List.find({
    patient_FirstName: req.params.FirstName,
    patient_LastName: req.params.LastName,
    patient_DOB: req.params.DOB,
    patient_Email: req.params.email,
  }, function (err, user) {
    err ? console.log(err) : res.json(user)
    console.log(user)
  }
  )
}
)
app.get('/rmt/crm', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Files exist?
    if (!files || files.length === 0) {
      res.json({ files: false });
    } else {
      files.map(file => {
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
          file.isImage = true;

        } else {
          file.isImage = false;
        }
      });
      res.send(files)
    }

  })
})

// if (app.get('env') === 'production') {
//   // Use secure cookies in production (requires SSL/TLS)
//   // sess.cookie.secure = true;
//   // app.set('trust proxy', 1);
// }





app.listen(PORT, function () {
  console.log(
    `==> API Server now listening on PORT ${PORT}!`
  );
})






