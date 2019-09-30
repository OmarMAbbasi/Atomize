const { Course, Teacher, Student } = require("../../models");

const indexPayload = array => {
	return array.reduce((obj, ele) => {
		obj[ele._id] = ele;
		return obj;
	}, {});
};

const indexIds = array => {
	return array.reduce((arr, ele) => {
		arr.push(ele._id);
		return arr;
	}, []);
};

const shapeTeacherResponse = courseData => {
	let students = {};
	Object.values(courseData).forEach(course => {
		let courseStudents = [];
		course.studentIds.forEach(student => {
			if (!students[student._id]) {
				students[student._id] = {
					_id: student._id,
					name: student.name,
					grade: student.grade,
					notes: student.notes
				};
			}
			courseStudents.push(student.id);
		});
		course.studentIds = courseStudents;
	});
	let courses = courseData;
	return { courses, students };
	// console.log(courseData);
};

//! Remember the pain!
// const indexStudents = courseArray => {
// 	let students = {};
// 	courseArray.forEach(course => {
// 		let courseId = course._id;
// 		// let toMerge = {};
// 		Course.findById(courseId)
// 			.populate({
// 				path: "studentIds",
// 				select: ["name", "notes"]
// 			})
// 			.exec((err, course) => {
// 				if (err) return err;
// 				Object.assign(students, indexPayload(course.studentIds));
// 				console.log(students);
// 			});
// 		console.log(students);
// 	});
// 	return students;
// };

const coursePayload = (course, student) => {
	let students = indexPayload(course.studentIds);
	let payload = {
		courses: {
			[course._id]: {
				_id: course._id,
				subject: course.subject,
				year: course.year,
				term: course.term,
				period: course.period,
				grade: course.grade,
				teacherId: course.teacherId._id || course.teacherId,
				studentIds: Object.keys(students)
			}
		},
		students: students
	};
	return payload;
};

module.exports = {
	shapeTeacherResponse,
	indexPayload,
	coursePayload
};
