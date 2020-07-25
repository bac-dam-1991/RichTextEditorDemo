import React from "react";

// Components
import RichTextEditorHelper from "./RichTextEditorHelper.Component";

// MUI
import { Grid } from "@material-ui/core";

const ImageElement = (props) => {
	const { attributes, children, element } = props;

	return (
		<Grid container {...attributes} justify="center" alignContent="center">
			<Grid item>
				<img src={element.url} alt={`Source from ${element.url}`} />
				{children}
			</Grid>
		</Grid>
	);
};

export const withImages = (editor) => {
	const { isVoid, insertData } = editor;

	editor.isVoid = (element) => {
		return element.type === "image" ? true : isVoid(element);
	};

	editor.insertData = (data) => {
		const text = data.getData("text/plain");

		if (RichTextEditorHelper.isImageUrl(text)) {
			RichTextEditorHelper.insertImage(editor, text);
		} else {
			insertData(data);
		}
	};

	return editor;
};

export default ImageElement;
