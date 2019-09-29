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
		let payload;
		switch (req.body.options) {
		case "addStudent":
			Student.findByIdAndUpdate(
				{ _id: req.body.student._id },
				{ $push: { courseIds: req.body.course._id } },
				{ new: true },
				(err, student) => {
					if (err) return res.status(500).send(err);
					Course.findOneAndUpdate(
						{ _id: req.body.course._id },
						{ $push: { studentIds: student._id } },
						{ new: true }
					)
						.populate({ path: "studentIds", select: "name" })
						.exec((err, course) => {
							payload = {
								courses: {
									[course._id]: coursePayload(course)
								},
								students: indexPayload(course.studentIds)
							};
							res.json(payload);
						});
				}
			);
			break;
		case "dropStudent":
			Student.findByIdAndUpdate(
				{ _id: req.body.student._id },
				{ $pull: { courseIds: req.body.course._id } },
				{ new: true },
				(err, student) => {
					if (err) return res.status(500).send(err);
					Course.findOneAndUpdate(
						{ _id: req.body.course._id },
						{ $pull: { studentIds: student._id } },
						{ new: true }
					)
						.populate({ path: "studentIds", select: "name" })
						.exec((err, course) => {
							payload = {
								courses: {
									[course._id]: coursePayload(course)
								},
								students: indexPayload(course.studentIds)
							};
							res.json(payload);
						});
				}
			);
			break;
		case "updateDetails":
			Object.assign(course, req.body.course);
			payload = {
				courses: {
					[course._id]: coursePayload(course)
				},
				students: indexPayload(course.studentIds)
			};
			res.json(payload);
			break;
		default:
			break;
		}
	});
});

router.delete("/", (req, res) => {
	Teacher.findById(req.body.teacher._id).exec((err, teacher) => {
		if (err) return res.status(500).send(err);
		Course.findOneAndRemove({ _id: req.body.course._id }, (err, course) => {
			if (err) return res.status(500).send(err);
			Teacher.findOneAndUpdate(
				{ _id: req.body.teacher._id },
				{ $pull: { courseIds: req.body.course._id } },
				{ new: true }
			)
				.populate({
					path: "courseIds",
					select: ["subject", "year", "term", "period", "grade", "teacherId"]
				})
				.exec((err, teacher) => {
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
	});
});

module.exports = router;
