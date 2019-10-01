import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

import AgendaIcon from "../../Icons/Agenda.js";
import StudyIcon from "../../Icons/Study.js";

class Toolkit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTeacher: props.currentTeacher
		};
	}

	// onClick(e) {
	// 	e.preventDefault();
	// 	debugger;
	// }

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {}

	render() {
		let agendaCSS = "tool";
		let studyCSS = "tool";
		if (this.props.location.pathname === "/courses") {
			agendaCSS = "tool-focused";
		}

		if (this.props.location.pathname === "/students") {
			studyCSS = "tool-focused";
		}
		return (
			<div className="toolkit">
				<ul>
					<NavLink to={`/courses`} id="agenda" className={agendaCSS}>
						<div className="agenda">
							<AgendaIcon />
						</div>
					</NavLink>
					<NavLink to={`/students`} id="study" className={studyCSS}>
						<div className="study">
							<StudyIcon />
						</div>
					</NavLink>
				</ul>
			</div>
		);
	}
}

export default withRouter(Toolkit);
