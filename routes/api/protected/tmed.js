const router = require("express").Router();
const tmedController = require("../../../controllers/tmedController");

// THESE ROUTES ARE WHERE SCALING OCCURS

// @route POST /tmed 
// @desc uploads basic form data with image to medical office
// *** '/tmed' can be '/tmed1','/tmed2','/tmed3' representing 
// *** different medical offices

router.route("/tmed")
  .post(tmedController.sendForm);

// router.route("/tmed/:filename")
//   .get(tmedController.getFile);

module.exports = router;