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



	// batchTesting()

	ReactDOM.render(<Root store={store} />, root);
});

const batchTesting = function() {
	// let purgeCourseData = {
	// 	courses: { _id: "5d928fa13d26941d7b041fea" },
	// 	teachers: { _id: "5d924a0fbdba9714f9d22f58" }
	// };
	// window.dispatch(window.deleteCourse(purgeCourseData));

	let teacher = {
		_id: "5d924a0fbdba9714f9d22f58"
	};

	let currentStudent = {
		_id: "5d925963f72b876a1023ea9e"
	};

	let transferStudent = {
		name: "Jaimie Johnson",
		age: "38",
		grade: "10"
	};

	let growingStudent = {
		_id: "5d925963f72b876a1023ea9e",
		name: "Jaimie Johnson",
		age: 15,
		grade: 12,
		notes: "Held Back"
	};

	let newCourseData = {
		courses: {
			subject: "Physics",
			year: "2018",
			term: "Spring",
			period: "1",
			grade: "3"
		},
		teachers: {
			_id: "5d924a0fbdba9714f9d22f58"
		}
	};
	let addStudent = {
		courses: {
			_id: "5d928fbea6b9df1e028547e3"
		},
		students: {
			_id: "5d928fe91858521eadd960d7"
		},
		options: "addStudent"
	};
	let existingCourse = {
		_id: "5d931c5c745681626a0fc592"
	};
	let dropStudent = {
		courses: {
			_id: "5d925041bb1beb35c309138c"
		},
		students: {
			_id: "5d924a91150afe19b1eab8cc"
		},
		options: "dropStudent"
	};
	let updateDetails = {
		courses: {
			_id: "5d924f057d7e352e56e7de5b",
			subject: "Physics",
			year: "2018",
			term: "Spring",
			period: "1",
			grade: "3"
		},
		teachers: {
			_id: "5d924a0fbdba9714f9d22f58"
		},
		options: "updateDetails"
	};

	window.dispatch(window.getCurrentTeacher(teacher)).then(() => {
		window.dispatch(window.newStudent(transferStudent)).then(() => {
			window.dispatch(window.fetchStudent(currentStudent)).then(() => {
				window.dispatch(window.editStudent(growingStudent)).then(() => {
					window.dispatch(window.editCourse(addStudent)).then(() => {
						window.dispatch(window.editCourse(dropStudent)).then(() => {
							window.dispatch(window.newCourse(newCourseData)).then(() => {
								window.dispatch(window.fetchCourse(existingCourse)).then(() => {
									window
										.dispatch(window.editCourse(updateDetails))
										.then(() => {});
								});
							});
						});
					});
				});
			});
		});
	});
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//courses:
// 5d924c374355e82644114faf:
// grade: 3
// period: "1"
// studentIds: Array(3)
// 0: "5d924a91150afe19b1eab8cc"
// 1: "5d924a91150afe19b1eab8cc"
// 2: "5d924a91150afe19b1eab8cc"
// length: 3
// __proto__: Array(0)
// subject: "Physics"
// teacherId: "5d924a0fbdba9714f9d22f58"
// term: "Spring"
// year: "2018"
// _id: "5d924c374355e82644114faf"
// __proto__: Object
