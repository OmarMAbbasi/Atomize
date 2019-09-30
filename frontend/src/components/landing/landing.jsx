import React, { Component } from "react";
import Toolkit from "../toolkit/toolkit";
import SchoolIcon from "../../Icons/School.js";

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
					<div>
						<div className="profile-anchor">
							<SchoolIcon />
						</div>
					</div>
					<div className="header"></div>
				</div>
				<div className="app-body">
					<div className="toolkit">
						<Toolkit />
					</div>
					<div className="viewport"></div>
				</div>
			</div>
		);
	}
}

export default Landing;
