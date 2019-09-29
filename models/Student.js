const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: true
	},
	age: {
		type: Number,
		required: true
	},
	grade: {
		type: Number,
		required: true
	},
	notes: {
		type: String
	},
	courseIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Course"
		}
	],
	assignmentIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Assignment"
		}
	],
	testIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Test"
		}
	]
});

module.exports = StudentSchema;

// eslint-disable-next-line no-undef
// module.exports = Student = mongoose.model("students", StudentSchema);
