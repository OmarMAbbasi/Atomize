const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Course, Teacher, Student } = require("../../models");
const { indexPayload, coursePayload } = require("./apiUtils");

router.get("/", (req, res) =>
	Course.find()
		.populate({ path: "teacherId", select: "name" })
		.populate({ path: "studentIds", select: ["name", "notes"] })
		.exec((err, course) => {
			if (err) return res.status(500).send(err);
			res.json(course);
		})
);

router.get("/:_id", (req, res) => {
	Course.findById(req.params._id)
		.populate([{ path: "studentIds", select: "name" }])
		.populate([{ path: "teacherId", select: "name" }])
		.exec((err, course) => {
			if (err) return res.status(500).send(err);
			if (!course) return res.status(404).send("Course not found");
			let payload = coursePayload(course);
			// payload.teachers = { [course.teacherId._id]: course.teacherId };
			res.json(payload);
		});
});

router.post("/", (req, res) => {
	Teacher.findById(req.body.teachers._id).exec((err, teacher) => {
		if (err) return res.status(500).send(err);
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
				Teacher.findByIdAndUpdate(
					{ _id: teacher._id },
					{ $addToSet: { courseIds: course._id } },
					{ new: true }
				).exec(() => {
					let payload = coursePayload(course);
					res.json(payload);
				});

				// teachers: {
				// 	[teacher._id]: {
				// 		_id: teacher._id,
				// 		name: teacher.name,
				// 		email: teacher.email
				// 	}
				// }
			})
			.catch(err => console.log(err));
	});
});

router.patch("/", (req, res) => {
	Course.findById(req.body.courses._id).exec((err, course) => {
		//TODO In model validation before save to prevent saving incorrect student
		if (err) return res.status(500).send(err);
		let payload;
		switch (req.body.options) {
			case "addStudent":
				Student.findByIdAndUpdate(
					{ _id: req.body.students._id },
					{ $addToSet: { courseIds: req.body.courses._id } },
					{ new: true },
					(err, student) => {
						if (err) return res.status(500).send(err);
						Course.findOneAndUpdate(
							{ _id: req.body.courses._id },
							{ $addToSet: { studentIds: student._id } },
							{ new: true }
						)
							.populate({ path: "studentIds", select: ["name", "notes"] })
							.exec((err, course) => {
								if (err) return res.status(500).send(err);

								payload = coursePayload(course);
								res.json(payload);
							});
					}
				).catch(err => {
					console.log(err);
				});
				break;
			case "dropStudent":
				Student.findByIdAndUpdate(
					{ _id: req.body.students._id },
					{ $pull: { courseIds: req.body.courses._id } },
					{ new: true },
					(err, student) => {
						if (err) return res.status(500).send(err);
						Course.findOneAndUpdate(
							{ _id: req.body.courses._id },
							{ $pull: { studentIds: student._id } },
							{ new: true }
						)
							.populate({ path: "studentIds", select: ["name", "notes"] })
							.exec((err, course) => {
								if (err) return res.status(500).send(err);
								payload = coursePayload(course);
								res.json(payload);
							});
					}
				);
				break;
			case "updateDetails":
				console.log(req.body.courses);
				course = Object.assign(course, req.body.courses);
				course.save();
				payload = coursePayload(course);
				res.json(payload);
				break;
			default:
				break;
		}
	});
});

router.delete("/", (req, res) => {
	Course.findOneAndRemove({ _id: req.query.courses }, (err, course) => {
		if (err) return res.status(500).send(err);
		if (!course) return res.status(404).send("Cannot delete course that doesn't exist");
		Teacher.findOneAndUpdate(
			{ _id: req.query.teachers },
			{ $pull: { courseIds: course._id } },
			{ new: true }
		)
			.populate({
				path: "courseIds",
				select: ["subject", "year", "term", "period", "grade", "teacherId"],
				populate: { path: "studentIds", select: [] }
			})
			.exec((err, teacher) => {
				if (err) return res.status(500).send(err);
				let courses = teacher.courseIds || [];
				let students = course.studentIds || [];
				// console.log(course);
				// console.log(students);

				let payload = {
					teachers: {
						[teacher._id]: {
							_id: teacher._id,
							name: teacher.name,
							email: teacher.email
						}
					},
					courses: indexPayload(courses)
				};
				Student.updateMany(
					{ _id: { $in: students } },
					{ $pull: { courseIds: course._id } }
				);
			});
		res.json(payload);
	});
});

module.exports = router;
