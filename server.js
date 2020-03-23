require("dotenv").config();
const db = require("./models");
const mongoose = require("mongoose");
const routes = require("./routes");
const express = require("express");
const { join } = require('path');
const morgan = require('morgan');
const passport = require('passport');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

async function startUp() {
  mongoose.connect(process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .catch(error => handleError(error));
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', async function () {
    console.log('-----------------Connected to MongoDB----------------------')

    app.listen(PORT, function () {
      console.log(
        `==> API Server now listening on PORT ${PORT}!`
      );

    })

    // try {
    //   await db.List.create({
    //     patient_ID: '10000',
    //     patient_Number: '74000',
    //     patient_FirstName: 'Jeremiah',
    //     patient_LastName: 'Stafford',
    //     pPInfo_DOB_month: '1974-07-01',
    //     pPInfo_Email: 'jeremiah.b.stafford@gmail.com'
    //   }, function (err, obj) {
    //     if (err) return console.log(err);
    //     else { console.log(obj + 'created') }// saved!
    //   })
    // } catch (err) { console.log(err) }
  })
}  // Start the App & API server

startUp();
