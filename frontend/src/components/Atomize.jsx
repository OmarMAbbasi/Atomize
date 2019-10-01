import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingContainer from "./landing/landing_container";

//!CSS
import "../style/Atomize-viewport.css";
import "../style/Atomize-toolkit.css";
import "../style/css-reset.css";
import "../style/Atomize.css";

function Atomize() {
	return (
		<div>
			<Switch>
				<Route path="/" component={LandingContainer} />
			</Switch>
		</div>
	);
}

export default Atomize;
