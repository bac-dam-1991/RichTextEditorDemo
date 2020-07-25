import React from "react";
import RichTextEditorHelper from "./RichTextEditorHelper.Component";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	iframe: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
	},
	iframeContainer: {
		display: "block",
		position: "relative",
		width: "100%",
		padding: "56.25% 0 0 0",
	},
}));

const VideoElement = (props) => {
	const classes = useStyles();

	const { attributes, children, element } = props;
	const { url } = element;

	return (
		<Grid
			container
			{...attributes}
			justify="center"
			className={classes.iframeContainer}
		>
			<Grid item>
				<iframe
					className={classes.iframe}
					src={url}
					title={url}
					frameBorder="0"
				/>
			</Grid>
			{children}
		</Grid>
	);
};

export const withVideo = (editor) => {
	const { isVoid, insertData } = editor;
	editor.isVoid = (element) =>
		element.type === "video" ? true : isVoid(element);

	editor.insertData = (data) => {
		const url = data.getData("text/plain");

		if (RichTextEditorHelper.isVideoUrl(url)) {
			RichTextEditorHelper.insertVideo(editor, url);
		} else {
			insertData(data);
		}
	};
	return editor;
};

export default VideoElement;
