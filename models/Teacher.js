const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		required: true,
		index: true
	},
	email: {
		type: String,
		required: true,
		index: true
	},
	courses: [
		{
			type: Schema.Types.ObjectId,
			ref: "Course"
			// autopopulate: true
		}
	]
});

// TeacherSchema.plugin(require("mongoose-autopopulate"));

// eslint-disable-next-line no-undef
module.exports = Teacher = mongoose.model("teachers", TeacherSchema);
