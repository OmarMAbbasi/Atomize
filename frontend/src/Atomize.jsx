import React from "react";
import logo from "./logo.svg";
import "./Atomize.css";

function Atomize() {
	return (
		<div className="Atomize">
			<header className="Atomize-header">
				<img src={logo} className="Atomize-logo" alt="logo" />
				<p>
					Edit <code>src/Atomize.jsx</code> and save to reload.
				</p>
				<a
					className="Atomize-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Atomize;
