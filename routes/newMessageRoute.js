const express = require("express");
const newMessageController = require("../controllers/newMessageController.js");
const router = express.Router();

router.get("/", newMessageController.renderNewMsg);

module.exports = router;
