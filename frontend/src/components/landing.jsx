import React, { Component } from "react";

class Landing extends Component {
	constructor(props) {
		super(props);

		let currentTeacher = props.getCurrentTeacher(props.currentTeacher);

		this.state = {
			currentTeacher: currentTeacher
		};
	}

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {}

	render() {

		return <div>This Is the landing page</div>;
	}
}

export default Landing;
