const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
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
	courseIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Course"
		}
	]
});

// TeacherSchema.plugin(require("mongoose-autopopulate"));

// eslint-disable-next-line no-undef
module.exports = TeacherSchema;
// module.exports = Teacher = mongoose.model("teachers", TeacherSchema);
