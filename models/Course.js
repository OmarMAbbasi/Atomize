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
	teacherId: {
		type: Schema.Types.ObjectId,
		ref: "Teacher"
	},
	assignmentIds: {
		type: Schema.Types.ObjectId,
		ref: "Assignment"
	},
	testIds: {
		type: Schema.Types.ObjectId,
		ref: "Test"
	},
	studentIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Student",
			default: []
		}
	]
});

// CourseSchema.post("save", function(doc, next) {
// 	doc
// 		.populate("user")
// 		.execPopulate()
// 		.then(function() {
// 			next();
// 		});
// });

// eslint-disable-next-line no-undef
module.exports = CourseSchema;

// module.exports = Course = mongoose.model("course", CourseSchema);
