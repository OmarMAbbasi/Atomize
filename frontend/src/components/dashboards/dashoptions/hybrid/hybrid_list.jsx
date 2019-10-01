import React, { Component } from "react";
import SubmitIcon from "../../../../Icons/Submit";
class HybridList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="viewport">
				<div className="hybrid-students-nest">
					<form className="student-search-nest">
						<input className="student-search" />
						<SubmitIcon className="submit-button" />
					</form>
					<ul className="hybrid-students-list"></ul>
				</div>
				<div className="hybrid-courses-nest">
					<form className="courses-search-nest">
						<input className="courses-search" />
						<SubmitIcon className="submit-button" />
					</form>
					<ul className="hybrid-courses-list"></ul>
				</div>
			</div>
		);
	}
}

export default HybridList;
