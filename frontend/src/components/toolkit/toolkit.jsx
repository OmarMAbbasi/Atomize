import React, { Component } from "react";

import AgendaIcon from "../../Icons/Agenda.js";
import StudyIcon from "../../Icons/Study.js";


class Toolkit extends Component {
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
			<ul>
				<div className="tool">
					<div className="agenda">
						<AgendaIcon />
					</div>
				</div>
				<div className="tool">
					<div className="study">
						<StudyIcon />
					</div>
				</div>
			</ul>
		);
	}
}

export default Toolkit;
