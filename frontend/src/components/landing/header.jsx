import React, { Component } from "react";
import SchoolIcon from "../../Icons/School.js";

export default class Header extends Component {
	render() {
		return (
			<div className="profile-anchor">
				<div className="profile-nest">
					<SchoolIcon />
				</div>
			</div>
		);
	}
}
