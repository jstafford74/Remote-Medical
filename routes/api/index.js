const router = require("express").Router();
const passport = require('passport');
const imageController = require("../../controllers/imageController")
const protectedRoutes = require("./protected/");
const authRoutes = require("./auth");

// Book routes
router.use("/auth", authRoutes);
router.use("/protected", passport.authenticate('jwt', { session: false }), protectedRoutes);

router.route("/imagez")
    .post(imageController.submitImage)
    .get(imageController.getImages)
// .delete(imageController.deleteImage);
router.route("/imagez/:filename")
    .get(imageController.getImage);
module.exports = router;
