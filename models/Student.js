const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ClassSchema = require("./Class");

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
	classes: {
		type: Date,
		default: Date.now
	}
});

// eslint-disable-next-line no-undef
module.exports = Student = mongoose.model("students", StudentSchema);
