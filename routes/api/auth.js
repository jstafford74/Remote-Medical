const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/checkacct/:FirstName/:LastName/:email/:DOB")
  .get(authController.checkAcct)


module.exports = router;
