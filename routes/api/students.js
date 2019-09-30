const express = require("express");
const router = express.Router();
const { Student } = require("../../models");
const { indexPayload } = require("./apiUtils");

router.get("/", (req, res) => {
	Student.find().exec((err, students) => {
		if (err) return res.status(500).send(err);

		res.json(students);
	});
});

router.get("/:id", (req, res) => {
	Student.findById(req.params.id)
		.populate({
			path: "courseIds",
			select: ["subject", "year", "term", "period", "grade", "teacherId"]
		})
		.exec((err, student) => {
			if (err) return res.status(500).send(err);

			let payload = {
				student: {
					[student._id]: {
						_id: student._id,
						name: student.name,
						age: student.age,
						grade: student.grade,
						notes: student.notes
					}
				},
				courses: indexPayload(student.courseIds) || {}
			};
			res.json(payload);
		});
});

router.post("/", (req, res) => {
	const newStudent = new Student({
		name: req.body.student.name,
		age: req.body.student.age,
		grade: req.body.student.grade,
		notes: req.body.student.notes ? req.body.student.notes : null
	});
	newStudent
		.save()
		.then(student => {
			let payload = {
				student: {
					[student._id]: {
						_id: student._id,
						name: student.name,
						age: student.age,
						grade: student.grade,
						notes: student.notes
					}
				}
			};
			res.json(payload);
		})
		.catch(err => console.log(err));
});

router.patch("/", (req, res) => {
	Student.findByIdAndUpdate(
		{ _id: req.body.student._id },
		{ $set: req.body.student },
		{ new: true }
	)
		.populate({
			path: "courseIds",
			select: ["subject", "year", "term", "period", "grade", "teacherId"]
		})
		.exec((err, student) => {
			if (err) return res.status(500).send(err);
			let payload = {
				student: {
					[student._id]: {
						_id: student._id,
						name: student.name,
						age: student.age,
						grade: student.grade,
						notes: student.notes
					}
				},
				courses: indexPayload(student.courseIds)
			};
			res.json(payload);
		});
});

module.exports = router;
