import React from "react";
import { IconButton } from "@material-ui/core";
import { useSlate } from "slate-react";
import RichTextEditorHelper from "./RichTextEditorHelper.Component";

const MarkButton = (props) => {
	const editor = useSlate();
	const { children, format } = props;

	const handleMouseDown = (event) => {
		event.preventDefault();
		RichTextEditorHelper.toggleMark(editor, format);
	};

	const isActive = RichTextEditorHelper.isMarkActive(editor, format);

	return (
		<IconButton
			size="small"
			onClick={handleMouseDown}
			color={isActive ? "secondary" : "inherit"}
		>
			{children}
		</IconButton>
	);
};

export default MarkButton;
