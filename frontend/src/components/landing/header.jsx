import React, { Component } from "react";
import SchoolIcon from "../../Icons/School.js";
import { withRouter, NavLink } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<NavLink to={""} className="profile-anchor">
				<div className="profile-nest">
					<SchoolIcon />
				</div>
			</NavLink>
		);
	}
}

export default withRouter(Header);
