const express = require("express");
const router = express.Router();

// @route Get api/posts
// @desk Test route
// @access Public
router.get("/", (req, res) => res.send("posts route"));

module.exports = router;
