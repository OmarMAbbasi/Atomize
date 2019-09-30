import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Atomize from "./Atomize";

const Root = ({ store }) => (
	<Provider store={store} className="root">
		<HashRouter>
			<Atomize />
		</HashRouter>
	</Provider>
);

export default Root;
