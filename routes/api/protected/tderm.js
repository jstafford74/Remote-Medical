const router = require("express").Router();
const tdermController = require("../../../controllers/tdermController");


router.route("/telederm")
  .post(tdermController.sendForm);

module.exports = router;