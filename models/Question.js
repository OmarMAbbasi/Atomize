const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ClassSchema = require("./Class");

const QuestionSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		required: true,
		index: true
	},
	designation: {
		//Multiple Choice, Long Answer, Short Answer
		type: String,
		required: true
	},
	questionContent: [
		{
			type: String,
			required: true
		}
	],
	questionAnswer: {
		type: String,
		required: true
	}
});

// eslint-disable-next-line no-undef
module.exports = Question = mongoose.model("students", QuestionSchema);
