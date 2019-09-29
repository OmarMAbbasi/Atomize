const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const StudentSchema = require("./Student")
// const TeacherSchema = require("./Teacher")

const CourseSchema = new Schema({
	subject: {
		type: String,
		required: true
	},
	year: {
		type: String,
		required: true
	},
	term: {
		type: String,
		required: true
	},
	period: {
		type: String,
		required: true
	},
	grade: {
		type: Number,
		required: true
	},
	teacher: {
		type: Schema.Types.ObjectId,
		ref: "Teacher"
	},
	assignments: {
		type: Schema.Types.ObjectId,
		ref: "Assignment"
	},
	tests: {
		type: Schema.Types.ObjectId,
		ref: "Test"
	},
	students: [
		{
			type: Schema.Types.ObjectId,
			ref: "Student"
		}
	]
});

// eslint-disable-next-line no-undef
module.exports = Course = mongoose.model("course", CourseSchema);
