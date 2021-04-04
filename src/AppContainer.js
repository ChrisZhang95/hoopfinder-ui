import React from "react";
import "./AppContainer.css";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";

function AppContainer() {
	return (
		<div className="App">
			<HeaderContainer />
			<ContentContainer />
		</div>
	);
}

export default AppContainer;
