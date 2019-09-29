const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Course = require("../../models/Course");

router.get("/test", (req, res) => res.json({ msg: "This is the tests route" }));

module.exports = router;
