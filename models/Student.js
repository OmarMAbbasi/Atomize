const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		required: true,
		index: true
	},
	grade: {
		type: Number,
		required: true
	},
	courses: [
		{
			type: Schema.Types.ObjectId,
			ref: "Course"
		}
	],
	assignments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Assignment"
		}
	],
	tests: [
		{
			type: Schema.Types.ObjectId,
			ref: "Test"
		}
	]
});

// eslint-disable-next-line no-undef
module.exports = Student = mongoose.model("students", StudentSchema);
