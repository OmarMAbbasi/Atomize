const express = require("express");
const router = express.Router();
const { Student } = require("../../models");
const { indexPayload } = require("./apiUtils");

router.get("/test", (req, res) => {
	Student.find().exec((err, students) => {
		res.json(students);
	});
});

router.get("/", (req, res) => {
	Student.findById(req.body.student._id)
		.populate({
			path: "courseIds",
			select: ["subject", "year", "term", "period", "grade", "teacherId"]
		})
		.exec((err, student) => {
			console.log(student.courseIds);
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
			console.log(payload);
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

module.exports = router;
