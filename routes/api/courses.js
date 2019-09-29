const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Course = require("../../models/Course");
const Teacher = require("../../models/Teacher");

router.get("/test", (req, res) =>
	res.json({ msg: "This is the courses route" })
);

router.get("/", (req, res) => {
	Course.findById('5d90193f1faa254ff524776a')
		.populate("teacher")
		.exec((err, course) => {
			console.log(course);
			res.json(course);
		});
});
// CourseSchema{
//
// 	year,
// 	quarter,
// 	period,
// 	grade,
//	teacher,
// 	students: [
// 		{
// 			type,
// 			assignments,
// 			tests
// 		}
// 	]
// });

router.post("/", (req, res) => {
	Teacher.findById(req.body.teacher._id).exec((err, teacher) => {
		const newCourse = new Course({
			subject: req.body.subject,
			year: req.body.year,
			term: req.body.term,
			period: req.body.period,
			grade: req.body.grade,
			teacher: teacher._id
		});
		newCourse
			.save()
			.then(payload => {
				// Teacher.findOneAndUpdate(
				// 	{ _id: payload.teacher },
				// 	{ $push: { courses: payload._id } },
				// 	{
				// 		returnNewDocument: true,
				// 		upsert: true
				// 	},
				// 	(err, teach) => {
				// 		console.log(teach);
				res.json(payload);
				// 	}
				// teacher.courses.push();
			})
			.catch(err => console.log(err));
	});
});

module.exports = router;
