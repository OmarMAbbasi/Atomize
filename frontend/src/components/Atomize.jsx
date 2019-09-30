import React from "react";
import "../style/Atomize.css";
import { Switch, Route } from "react-router-dom";
import LandingContainer from "./landing_container";

function Atomize() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={LandingContainer} />
			</Switch>
		</div>
	);
}

export default Atomize;
