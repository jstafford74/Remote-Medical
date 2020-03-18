const db = require("../models");

// Defining methods for the booksController
module.exports = {
    sendForm: function (req, res) {
        db.List
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}