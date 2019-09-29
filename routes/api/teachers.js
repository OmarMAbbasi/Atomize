const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Course, Teacher } = require("../../models");
const { indexPayload } = require("./apiUtils");

// const Teacher = require("../../models/Teacher");

router.get("/test", (req, res) => {
	Teacher.find().exec((err, teacher) => {
		res.json(teacher);
	});
});

router.get("/", (req, res) => {
	Teacher.findById(req.body.teacher._id)
		.populate({
			path: "courseIds",
			select: ["subject", "year", "term", "period", "grade", "teacherId"]
		})
		.exec((err, teacher) => {
			console.log(teacher);
			let payload = {
				teachers: {
					[teacher._id]: {
						_id: teacher._id,
						name: teacher.name,
						email: teacher.email
					}
				},
				courses: indexPayload(teacher.courseIds)
			};
			res.json(payload);
		});
});

router.post("/", (req, res) => {
	const newTeacher = new Teacher({
		name: req.body.teacher.name,
		email: req.body.teacher.email
	});
	newTeacher
		.save()
		.then(teacher => {
			delete teacher.courses;
			let payload = {
				teachers: {
					[teacher.id]: {
						name: teacher.name,
						email: teacher.email
					}
				}
			};
			res.json(payload);
		})
		.catch(err => console.log(err));
});

module.exports = router;
