const db = require("../models");

module.exports = {
  checkAcct: function (req, res) {
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
}
