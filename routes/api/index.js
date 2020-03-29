const router = require("express").Router();
const passport = require('passport');

const authRoutes = require("./auth");

// Book routes
router.use("/auth", authRoutes);

module.exports = router;
