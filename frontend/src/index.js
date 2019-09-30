import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Root from "./components/root";
import configureStore from "./store/store";

import Atomize from "./components/Atomize";
import * as serviceWorker from "./serviceWorker";

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const store = configureStore();

	ReactDOM.render(<Atomize store={store} />, root);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
