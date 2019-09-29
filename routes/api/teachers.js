const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Teacher = require("../../models/Teacher");

router.get("/test", (req, res) => {
	Teacher.find().exec((err, teachers) => {
		console.log(teachers);
		res.json(teachers);
	});
});

router.get("/", (req, res) => {
	Teacher.find()
		.exec((err, teachers) => {
			console.log(teachers);
			res.json(teachers);
		});
});

router.post("/", (req, res) => {
	// console.log(Teacher.find());
	const newTeacher = new Teacher({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		email: req.body.email
	});
	newTeacher
		.save()
		.then(teacher => {
			res.json(teacher);
		})
		.catch(err => console.log(err));
});

module.exports = router;
