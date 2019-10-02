import React, { Component } from "react";
import SubmitIcon from "../../../../Icons/Submit";
var debounce = require("lodash.debounce");
var throttle = require("lodash.throttle");

class HybridList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: this.props.students || [],
			filteredStudents: this.props.students || [],
			courses: this.props.courses || [],
			filteredCourses: this.props.courses || []
		};

		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.filterCourses = this.filterCourses.bind(this);
		this.filterStudents = this.filterStudents.bind(this);

		this.searchStudents = debounce(this.filterStudents, 500, {
			trailing: true,
			leading: false,
			maxWait: 800
		}).bind(this);
		this.searchCourses = debounce(this.filterCourses, 500, {
			trailing: true,
			leading: false,
			maxWait: 800
		}).bind(this);
	}

	componentDidMount() {
		this.props.getCurrentTeacher({ _id: "5d924a0fbdba9714f9d22f58" });
		this.state = {
			students: this.props.students || [],
			filteredStudents: this.props.students || [],
			courses: this.props.courses || [],
			filteredCourses: this.props.courses || []
		};
	}

	filterCourses = function(search) {
		let regex = new RegExp("(" + search + ")", "i");
		this.setState(
			this.state.courses.filter(course => {
				course.match(regex);
			})
		);
	};

	filterStudents = function(search) {
		console.log("Search!");
		let regex = new RegExp("(" + search + ")", "i");
		this.setState(
			this.state.students.filter(student => {
				student.match(regex);
			})
		);
	};

	update(e) {
		if (e.target.id === "course-field") {
			this.searchCourses(e.target.value);
			this.setState({ courseBody: e.target.value });
		}
		if (e.target.id === "student-field") {
			this.searchStudents(e.target.value);
			this.setState({ studentBody: e.target.value });
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		if (e.target.id === "course-field") {
			this.setState({ courseBody: "" });
		}
		if (e.target.id === "student-field") {
			this.setState({ studentBody: "" });
		}
	}

	render() {
		return (
			<div className="viewport">
				<div className="hybrid-students-nest">
					<form
						onChange={this.update}
						onSubmit={this.handleSubmit}
						className="student-search-nest"
					>
						<input id="student-field" className="student-search" />
						<SubmitIcon className="submit-button" />
					</form>
					<ul className="hybrid-students-list"></ul>
				</div>
				<div className="hybrid-courses-nest">
					<form
						onChange={this.update}
						onSubmit={this.handleSubmit}
						className="courses-search-nest"
					>
						<input id="course-field" className="courses-search" />
						<SubmitIcon className="submit-button" />
					</form>
					<ul className="hybrid-courses-list"></ul>
				</div>
			</div>
		);
	}
}

export default HybridList;
