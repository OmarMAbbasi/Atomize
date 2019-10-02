import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HybridListContainer from "./dashoptions/hybrid/hybrid_list_container";
import CourseListContainer from "./dashoptions/courses/course_list_container";
import StudentListContainer from "./dashoptions/students/student_list_container";

class DashController extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("Hit Dash Controller");
		return (
			<Switch>
				<Route exact path="/students" component={StudentListContainer} />
				<Route exact path="/courses" component={CourseListContainer} />
				<Route path="/" component={HybridListContainer} />
			</Switch>
		);
	}
}

export default DashController;
