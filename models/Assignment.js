const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ClassSchema = require("./Class");

const AssignmentSchema = new Schema({
	_id: Schema.Types.ObjectId,
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
	}
});

// eslint-disable-next-line no-undef
module.exports = Assignment = mongoose.model("students", AssignmentSchema);
