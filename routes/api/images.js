const router = require("express").Router();
const imageController = require("../../controllers/imageController");

router.route("/")
    .post(imageController.submitImage)

module.exports = router;
