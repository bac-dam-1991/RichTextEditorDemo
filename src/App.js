import React from "react";

// MUI
import { Container } from "@material-ui/core";

// Components
import RichTextEditor from "./Components/RichTextEditor.Component";

const App = () => {
	return (
		<div className="App">
			<Container maxWidth="md">
				<RichTextEditor />
			</Container>
		</div>
	);
};

export default App;
