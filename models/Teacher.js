const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ClassSchema = require("./Class");

const TeacherSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		index: true
	},
	// password: {
	// 	type: String,
	// 	required: false
	// },
	classes: [
		{
			type: Schema.Types.ObjectId,
			ref: "Class"
		}
	]
});

// eslint-disable-next-line no-undef
module.exports = Teacher = mongoose.model("teachers", TeacherSchema);
