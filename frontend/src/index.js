import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";

import "./index.css";

import configureStore from "./store/store";
// import Atomize from "./components/Atomize";
import { getCurrentTeacher } from "./actions/teachers";
import { fetchStudent, newStudent, editStudent } from "./actions/students";
import {
	fetchCourse,
	newCourse,
	editCourse,
	deleteCourse
} from "./actions/courses";

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const store = configureStore();

	window.getState = store.getState;
	window.dispatch = store.dispatch;

	window.getCurrentTeacher = getCurrentTeacher;
	window.fetchStudent = fetchStudent;
	window.newStudent = newStudent;
	window.editStudent = editStudent;
	window.fetchCourse = fetchCourse;
	window.newCourse = newCourse;
	window.editCourse = editCourse;
	window.deleteCourse = deleteCourse;

	// let teacher = {
	// _id: "5d919f82d5c6aa38edf30c4b"
	// };
	// window.dispatch(window.getCurrentTeacher(teacher));

	// let currentStudent = {
	// _id: "5d91f320a00e3d25b0dfc5c3"
	// };
	// window.dispatch(window.fetchStudent(currentStudent));

	// let transferStudent = {
	// 	name: "Jaimie Johnson",
	// 	age: "38",
	// 	grade: "10"
	// };
	// window.dispatch(window.newStudent(transferStudent));

	// let growingStudent = {
	// 	_id: "5d91f320a00e3d25b0dfc5c3",
	// 	name: "Jaimie Johnson",
	// 	age: 15,
	// 	grade: 12,
	// 	notes: "Held Back"
	// };
	// window.dispatch(window.editStudent(growingStudent));

	// //
	// let newCourseData = {
	// 	courses: {
	// 		subject: "Physics",
	// 		year: "2018",
	// 		term: "Spring",
	// 		period: "1",
	// 		grade: "3"
	// 	},
	// 	teachers: {
	// 		_id: "5d917e3fbbf3855dcd8b51c2"
	// 	}
	// };
	// window.dispatch(window.newCourse(newCourseData));

	// let existingCourse = {
	// 	_id: "5d91f5672a2482392faf8ad5"
	// };
	// window.dispatch(window.fetchCourse(existingCourse));

	// let purgeCourseData = {
	// 	courses: { _id: "5d91f5672a2482392faf8ad5" },
	// 	teachers: { _id: "5d917e3fbbf3855dcd8b51c2" }
	// };
	// window.dispatch(window.deleteCourse(purgeCourseData));

	// let addStudent = {
	// 	courses: {
	// 		_id: "5d91f5672a2482392faf8ad5"
	// 	},
	// 	students: {
	// 		_id: "5d91d7155ce12c11cbde02f9"
	// 	},
	// 	options: "addStudent"
	// };
	// window.dispatch(window.editCourse(addStudent));

	// let dropStudent = {
	// 	courses: {
	// 		_id: "5d91f5672a2482392faf8ad5"
	// 	},
	// 	students: {
	// 		_id: "5d91d7155ce12c11cbde02f9"
	// 	},
	// 	options: "dropStudent"
	// };
	// window.dispatch(window.editCourse(dropStudent));

	// let updateDetails = {
	// 	courses: {
	// 		_id: "5d91f5672a2482392faf8ad5",
	// 		subject: "Physics",
	// 		year: "2018",
	// 		term: "Spring",
	// 		period: "1",
	// 		grade: "3"
	// 	},
	// 	teachers: {
	// 		_id: "5d917e3fbbf3855dcd8b51c2"
	// 	},
	// 	options: "updateDetails"
	// };
	// window.dispatch(window.editCourse(updateDetails));

	ReactDOM.render(<Root store={store} />, root);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
