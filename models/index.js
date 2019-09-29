const mongoose = require("mongoose");
//TODO Rebuild Schema to include virtual models.
const AssignmentSchema = require("./Assignment");
const CourseSchema = require("./Course");
const QuestionSchema = require("./Question");
const StudentSchema = require("./Student");
const TeacherSchema = require("./Teacher");
const TestSchema = require("./Test");

const Assignment = mongoose.model("Assignment", AssignmentSchema);
const Course = mongoose.model("Course", CourseSchema);
const Question = mongoose.model("Question", QuestionSchema);
const Student = mongoose.model("Student", StudentSchema);
const Teacher = mongoose.model("Teacher", TeacherSchema);
const Test = mongoose.model("Test", TestSchema);

module.exports = {
	Assignment,
	Course,
	Question,
	Student,
	Teacher,
	Test
};
