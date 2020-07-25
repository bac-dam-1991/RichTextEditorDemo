import React from "react";

// MUI
import { IconButton } from "@material-ui/core";

// Components
import RichTextEditorHelper from "./RichTextEditorHelper.Component";

// Slate
import { useSlate } from "slate-react";

const BlockButton = (props) => {
	const { children, format } = props;

	const editor = useSlate();

	const handleClick = (event) => {
		event.preventDefault();
		RichTextEditorHelper.toggleBlock(editor, format);
	};

	return (
		<IconButton size="small" color="inherit" onClick={handleClick}>
			{children}
		</IconButton>
	);
};

export default BlockButton;
