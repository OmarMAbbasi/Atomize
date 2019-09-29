const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Course, Teacher, Student } = require("../../models");
const { indexPayload, coursePayload } = require("./apiUtils");

router.get("/test", (req, res) =>
	Course.find()
		.populate({ path: "teacherId", select: "name" })
		.exec((err, course) => {
			res.json(course);
		})
);

router.get("/", (req, res) => {
	Course.findById(req.body.course._id)
		.populate({ path: "teacherId", select: "name" })
		.exec((err, course) => {
			console.log(course);
			let payload = {
				teachers: { [course.teacherId._id]: course.teacherId },
				courses: {
					[course._id]: coursePayload(course)
				}
			};
			res.json(payload);
		});
});

router.post("/", (req, res) => {
	Teacher.findById(req.body.teacher._id).exec((err, teacher) => {
		const newCourse = new Course({
			subject: req.body.course.subject,
			year: req.body.course.year,
			term: req.body.course.term,
			period: req.body.course.period,
			grade: req.body.course.grade,
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
						[course._id]: coursePayload(course)
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

router.patch("/", (req, res) => {
	Course.findById(req.body.course._id).exec((err, course) => {
		if (err) return res.status(500).send(err); //TODO In model validation before save to prevent saving incorrect student
		switch (req.body.options) {
		case "addStudent":
			Student.findByIdAndUpdate(
				{ _id: req.body.student._id },
				{ $push: { courseIds: req.body.course._id } }
			).exec((err, student) => {
				if (err) return res.status(500).send(err);
				course.studentIds.push(student._id);
				course.save().then(() => {
					let payload = {
						courses: {
							[course._id]: coursePayload(course)
						},
						students: indexPayload(course.studentIds)
					};
					res.json(payload);
				});
			});
			break;

		default:
			break;
		}
	});
	// .exec((err, course) => {
	// 	if (err) return res.status(500).send(err);
	// 	switch (req.body.options) {
	// 	case "addStudent":
	// 		Student.findByIdAndUpdate(req.body.student._id).exec((err, student) => {
	// 			if (err) return res.status(500).send(err);
	// 			console.log(student);
	// 			res.json(student);
	// 		});
	// 		break;

	// 	default:
	// 		break;
	// 	}
	// });
});

// Course.updateOne(
// 	{ _id: req.body.course._id },
// 	{ $push: { studentIds: req.body.student._id } }
// ).then(() => {
// 	student
// 		.updateOne(
// 			{ _id: req.body.student._id },
// 			{ $push: { courseIds: req.body.course._id } }
// 		)
// 		.then(() => {
// 			res.json(student);
// 		});
// });

// .then(() => {
// student.update({ _id: req.body.student._id }, {$push: {courseIds: {req.body.course._id}}});
// })
// .exec((err, course) => {
// course.update();
// });

module.exports = router;
