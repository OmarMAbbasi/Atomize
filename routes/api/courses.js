const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Course, Teacher } = require("../../models");
// const { indexPayload } = require("./apiUtils");

router.get("/test", (req, res) =>
	Course.find()
		.populate({ path: "teacherId", select: "name" })
		.exec((err, course) => {
			res.json(course);
		})
);

router.get("/", (req, res) => {
	Course.findById(req.body.courses._id)
		.populate({ path: "teacherId", select: "name" })
		.exec((err, course) => {
			let payload = {
				teachers: { [course.teacherId._id]: course.teacherId },
				courses: {
					[course._id]: {
						_id: course._id,
						subject: course.subject,
						year: course.year,
						term: course.term,
						period: course.period,
						grade: course.grade,
						teacherId: course.teacherId._id
					}
				}
			};
			res.json(payload);
		});
});

router.post("/", (req, res) => {
	Teacher.findById(req.body.teachers._id).exec((err, teacher) => {
		const newCourse = new Course({
			subject: req.body.courses.subject,
			year: req.body.courses.year,
			term: req.body.courses.term,
			period: req.body.courses.period,
			grade: req.body.courses.grade,
			teacherId: teacher._id
		});
		newCourse
			.save()
			.then(course => {
				teacher.courseIds.push(course._id);
				teacher.save();
				console.log(course);
				let payload = {
					courses: {
						[course._id]: {
							_id: course._id,
							subject: course.subject,
							year: course.year,
							term: course.term,
							period: course.period,
							grade: course.grade,
							teacherId: course.teacherId._id
						}
					},
					teachers: {
						[teacher._id]: {
							_id: teacher._id,
							name: teacher.name,
							email: teacher.email
						}
					}
				};
				res.json(payload);
			})
			.catch(err => console.log(err));
	});
});

router.update("/", (req, res) => {
	switch (req.body.options) {
	case "addStudent":
		break;

	default:
		break;
	}
});

module.exports = router;
