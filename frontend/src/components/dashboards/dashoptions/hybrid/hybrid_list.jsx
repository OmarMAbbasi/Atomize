import React, { Component } from "react";

class HybridList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div> View Boxes
				<div> Courses Outer Box
					<ul></ul> Courses Inner Box
				</div>
				<div>Students Outer Box
					<ul></ul> Students Inner Box
				</div>
			</div>
		);
	}
}

export default HybridList;
