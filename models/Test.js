const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ClassSchema = require("./Class");

const TestSchema = new Schema({
	_id: Schema.Types.ObjectId,
	designation: {
		//Quiz, Test, Midterm, Final
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true,
		index: true
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
	questions: [
		{
			type: Schema.Types.ObjectId,
			pointValue: { type: Number },
			ref: "Question"
		}
	]
});

// eslint-disable-next-line no-undef
module.exports = Test = mongoose.model("students", TestSchema);
