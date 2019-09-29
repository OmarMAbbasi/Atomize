const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AssignmentSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: true
	},
	designation: {
		//Project, Daily, Lab, Final Project
		type: String,
		required: true
	},
	template: {
		type: Boolean,
		required: true,
		default: true
	},
	dueDate: {
		type: Date,
		default: Date.now
	},
	maxPoints: {
		type: Number,
		required: true
	},
	pointsEarned: {
		type: Number
	},
	questionIds: [
		{
			type: Schema.Types.ObjectId,
			pointValue: { type: Number },
			ref: "Question"
		}
	],
	courseId: {
		type: Schema.Types.ObjectId,
		ref: "Teacher"
	},
	studentIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Student"
		}
	]
});

module.exports = AssignmentSchema;

// eslint-disable-next-line no-undef
// module.exports = Assignment = mongoose.model("assignments", AssignmentSchema);
