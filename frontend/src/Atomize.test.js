import React from "react";
import ReactDOM from "react-dom";
import Atomize from "./Atomize";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Atomize />, div);
	ReactDOM.unmountComponentAtNode(div);
});
