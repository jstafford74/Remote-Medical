const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth/signup"
router.route("/signup")
  .post(authController.signup);

// see http://www.passportjs.org/docs/
// Matches with "/api/auth/login"
router.route("/login")
  .post(authController.login);

router.route("/checkacct/:FirstName/:LastName/:email/:DOB")
  .get(authController.checkAcct)


module.exports = router;
