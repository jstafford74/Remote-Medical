const router = require("express").Router();
const tmedRoutes = require("./tmed");
const userRoutes = require("./user");

// Book routes
router.use("/tmed", tmedRoutes);
router.use("/users", userRoutes);
module.exports = router;
