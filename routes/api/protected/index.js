const router = require("express").Router();
const tdermRoutes = require("./tmed");
const userRoutes = require("./user");

// Book routes
router.use("/telederm", tdermRoutes);
router.use("/users", userRoutes);
module.exports = router;
