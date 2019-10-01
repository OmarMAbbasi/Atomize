import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HybridList from "./dashoptions/hybrid/hybrid_list";
import CourseList from "./dashoptions/courses/course_list";
import StudentList from "./dashoptions/students/student_list";

class DashController extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("Hit Dash Controller");
		return (
			<div className="viewport">
				<Switch>
					<Route exact path="/students" component={StudentList} />
					<Route exact path="/courses" component={CourseList} />
					<Route path="/" component={HybridList} />
				</Switch>
			</div>
		);
	}
}

export default DashController;
