import React, { Component } from "react";
import Toolkit from "../toolkit/toolkit";
import Header from "./header";
import DashController from "../dashboards/dash_controller";

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTeacher: props.currentTeacher
		};
	}

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {}

	render() {
		return (
			<div className="app-nest">
				<div className="app-hat">
					<Header />
					<div className="header"></div>
				</div>
				<div className="app-body">
					<Toolkit />
					<DashController />
				</div>
			</div>
		);
	}
}

export default Landing;
