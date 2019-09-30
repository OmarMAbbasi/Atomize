import React, { Component } from "react";

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
					<div className="profile-anchor"></div>
					<div className="header"></div>
				</div>
				<div className="app-body">
					<div className="toolkit"></div>
					<div className="viewport"></div>
				</div>
			</div>
		);
	}
}

export default Landing;
