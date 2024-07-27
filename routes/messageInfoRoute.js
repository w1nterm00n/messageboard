const express = require("express");
const messageInfoController = require("../controllers/messageInfoController.js");
const router = express.Router();

router.get("/", messageInfoController.renderInfoMsg);

module.exports = router;
