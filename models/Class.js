const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const StudentSchema = require("./Student")
// const TeacherSchema = require("./Teacher")

const ClassSchema = new Schema({
	_id: Schema.Types.ObjectId,
	year: {
		type: String,
		required: true
	},
	quarter: {
		type: Number,
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
	students: [
		{
			type: Schema.Types.ObjectId,
			assignments: {
				type: Schema.Types.ObjectId,
				ref: "Assignment"
			},
			tests: {
				type: Schema.Types.ObjectId,
				ref: "Test"
			},
			ref: "Student"
		}
	]
});

// eslint-disable-next-line no-undef
module.exports = Class = mongoose.model("class", ClassSchema);
