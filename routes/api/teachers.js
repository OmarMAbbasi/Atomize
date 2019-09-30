const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Course, Teacher } = require("../../models");
const { shapeTeacherResponse, indexPayload } = require("./apiUtils");

// const Teacher = require("../../models/Teacher");

router.get("/test", (req, res) => {
	Teacher.find().exec((err, teacher) => {
		if (err) return res.status(500).send(err);

		res.json(teacher);
	});
});

router.get("/", (req, res) => {
	Teacher.findById(req.query._id)
		.populate({
			path: "courseIds",
			select: ["subject", "year", "term", "period", "grade", "teacherId"],
			populate: { path: "studentIds", select: [] }
		})
		.exec((err, teacher) => {
			let courseData = indexPayload(teacher.courseIds);
			let { courses, students } = shapeTeacherResponse(courseData);
			if (err) return res.status(500).send(err);
			let payload = {
				teachers: {
					[teacher._id]: {
						_id: teacher._id,
						name: teacher.name,
						email: teacher.email
					}
				},
				courses: courses,
				students: students
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
