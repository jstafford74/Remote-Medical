const router = require("express").Router();
const authRoutes = require("./auth");
const imageRoutes = require("./images");

router.use("/auth", authRoutes);
router.use("/images", imageRoutes);

module.exports = router;
