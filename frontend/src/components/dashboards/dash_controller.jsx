import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class DashController extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("Hit Dash Controller");
		return (
			<div className="viewport">
				<Switch>
					{/* <Route exact path="/students" component={StudentListContainer} /> */}
					{/* <Route exact path="/courses" component={CourseListContainer} /> */}
					{/* <Route path="/" component={HybridContainer} /> */}
				</Switch>
			</div>
		);
	}
}

export default DashController;
