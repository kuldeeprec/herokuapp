const express = require("express");
const router = express.Router();
const home_Controller = require("../controllers/homecontroller");
router.get("/", home_Controller.home);
module.exports = router;
