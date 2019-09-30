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
	// 	_id: "5d919f82d5c6aa38edf30c4b"
	// };
	// window.dispatch(window.getCurrentTeacher(teacher));

	let student;

	student = { _id: "5d917ebdbbf3855dcd8b51c6" };
	window.dispatch(window.fetchStudent(student));

	// student = {
	// 	name: "Jaimie Johnson",
	// 	age: "38",
	// 	grade: "10"
	// };
	// window.dispatch(window.newStudent(student));

	// student = {
	// 	_id: "5d917ebdbbf3855dcd8b51c6",
	// 	name: "Jaimie Johnson",
	// 	age: 15,
	// 	grade: 12,
	// 	notes: "Held Back"
	// };
	// window.dispatch(window.editStudent(student));

	// let course = { _id: "5d917e63bbf3855dcd8b51c3" };
	// window.dispatch(window.fetchCourse(course));

	let newCourseData = {
		course: {
			subject: "Physics",
			year: "2018",
			term: "Spring",
			period: "1",
			grade: "3"
		},
		teacher: {
			_id: "5d917e3fbbf3855dcd8b51c2"
		}
	};
	window.dispatch(window.newCourse());

	let oldCourseData = {
		courses: {
			subject: "Physics",
			year: "2018",
			term: "Spring",
			period: "1",
			grade: "3"
		},
		teachers: {
			_id: "5d917e3fbbf3855dcd8b51c2"
		}
	};
	window.dispatch(window.editCourse());

	let purgeCourseData;
	// window.dispatch(window.deleteCourse());

	ReactDOM.render(<Root store={store} />, root);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
