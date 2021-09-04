const router = require("express").Router();

const dashboardRoutes = require("./dashboard_routes.js");
const homePageRoutes = require("./homepage_routes.js");
const apiRoutes = require("./api/");


router.use("/", homePageRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
